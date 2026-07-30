"use client";

import { useMemo, useState, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { services, site } from "@/config/site";
import { CheckIcon, PhoneIcon } from "@/components/icons";

/**
 * Request-a-Quote form.
 * Client-side validation + accessible error messaging; submits to
 * /api/quote (see src/app/api/quote/route.ts for delivery wiring).
 */

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  zip: string;
  propertyType: string;
  service: string;
  frequency: string;
  preferredDate: string;
  propertySize: string;
  bedrooms: string;
  bathrooms: string;
  details: string;
  consent: boolean;
  /** Honeypot — humans never fill this */
  company: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  zip: "",
  propertyType: "",
  service: "",
  frequency: "",
  preferredDate: "",
  propertySize: "",
  bedrooms: "",
  bathrooms: "",
  details: "",
  consent: false,
  company: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

function validate(form: FormState): Errors {
  const errors: Errors = {};
  if (form.fullName.trim().length < 2) {
    errors.fullName = "Please enter your full name.";
  }
  const phoneDigits = form.phone.replace(/\D/g, "");
  if (phoneDigits.length < 10 || phoneDigits.length > 11) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (form.address.trim().length < 4) {
    errors.address = "Please enter the service address.";
  }
  if (form.city.trim().length < 2) {
    errors.city = "Please enter the city.";
  }
  if (!/^\d{5}(-\d{4})?$/.test(form.zip.trim())) {
    errors.zip = "Please enter a valid ZIP code (e.g. 32202).";
  }
  if (!form.propertyType) {
    errors.propertyType = "Please choose residential or commercial.";
  }
  if (!form.service) {
    errors.service = "Please select a service.";
  }
  if (!form.frequency) {
    errors.frequency = "Please choose one-time or recurring.";
  }
  if (!form.consent) {
    errors.consent = "Please check the box so we can contact you.";
  }
  return errors;
}

const inputCls =
  "w-full rounded-md border-2 border-navy-line bg-navy-deep px-4 py-3 text-cream placeholder:text-cream/40 transition-colors focus:border-gold focus:outline-none aria-[invalid=true]:border-red";
const labelCls =
  "mb-1.5 block font-head text-sm font-semibold tracking-[0.1em] text-cream";

function Field({
  label,
  htmlFor,
  error,
  required = true,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className={labelCls} htmlFor={htmlFor}>
        {label}
        {required ? (
          <span className="text-red" aria-hidden="true">
            {" "}
            *
          </span>
        ) : (
          <span className="ml-1 text-xs font-normal tracking-normal text-cream/50">
            (optional)
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          className="mt-1.5 text-sm font-medium text-gold"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function QuoteForm() {
  const searchParams = useSearchParams();
  const preselected = searchParams.get("service") ?? "";

  const [form, setForm] = useState<FormState>(() => ({
    ...initialState,
    service: services.some((s) => s.slug === preselected) ? preselected : "",
  }));
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">(
    "idle"
  );

  const todayIso = useMemo(() => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
      d.getDate()
    ).padStart(2, "0")}`;
  }, []);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    // Clear the field's error as the user fixes it
    setErrors((e) => (e[key] ? { ...e, [key]: undefined } : e));
  }

  function aria(key: keyof FormState) {
    return {
      "aria-invalid": errors[key] ? true : undefined,
      "aria-describedby": errors[key] ? `${key}-error` : undefined,
    } as const;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    const firstError = Object.keys(nextErrors)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus();
      return;
    }
    setStatus("submitting");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="card-navy mx-auto max-w-2xl p-10 text-center"
        role="status"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-navy-deep text-gold">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h2 className="mt-6 font-display text-3xl text-cream">
          Quote request received
        </h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-cream/75">
          Mission accepted. We&rsquo;ll review your request and get back to you
          promptly. Need us sooner? Call{" "}
          <a
            href={site.phone.telHref}
            className="font-semibold text-gold underline underline-offset-4"
          >
            {site.phone.display}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mx-auto max-w-3xl">
      <div className="card-navy p-6 sm:p-10">
        <div className="grid gap-6 sm:grid-cols-2">
          <Field label="Full Name" htmlFor="fullName" error={errors.fullName}>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              required
              className={inputCls}
              placeholder="Jane Smith"
              value={form.fullName}
              onChange={(e) => set("fullName", e.target.value)}
              {...aria("fullName")}
            />
          </Field>

          <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              className={inputCls}
              placeholder="904-555-0100"
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              {...aria("phone")}
            />
          </Field>

          <div className="sm:col-span-2">
            <Field label="Email Address" htmlFor="email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className={inputCls}
                placeholder="you@example.com"
                value={form.email}
                onChange={(e) => set("email", e.target.value)}
                {...aria("email")}
              />
            </Field>
          </div>

          <div className="sm:col-span-2">
            <Field
              label="Service Address"
              htmlFor="address"
              error={errors.address}
            >
              <input
                id="address"
                name="address"
                type="text"
                autoComplete="street-address"
                required
                className={inputCls}
                placeholder="Street address"
                value={form.address}
                onChange={(e) => set("address", e.target.value)}
                {...aria("address")}
              />
            </Field>
          </div>

          <Field label="City" htmlFor="city" error={errors.city}>
            <input
              id="city"
              name="city"
              type="text"
              autoComplete="address-level2"
              required
              className={inputCls}
              placeholder="Jacksonville"
              value={form.city}
              onChange={(e) => set("city", e.target.value)}
              {...aria("city")}
            />
          </Field>

          <Field label="ZIP Code" htmlFor="zip" error={errors.zip}>
            <input
              id="zip"
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              required
              className={inputCls}
              placeholder="32202"
              value={form.zip}
              onChange={(e) => set("zip", e.target.value)}
              {...aria("zip")}
            />
          </Field>

          <Field
            label="Property Type"
            htmlFor="propertyType"
            error={errors.propertyType}
          >
            <select
              id="propertyType"
              name="propertyType"
              required
              className={inputCls}
              value={form.propertyType}
              onChange={(e) => set("propertyType", e.target.value)}
              {...aria("propertyType")}
            >
              <option value="">Select…</option>
              <option value="residential">Residential</option>
              <option value="commercial">Commercial</option>
            </select>
          </Field>

          <Field
            label="Service Requested"
            htmlFor="service"
            error={errors.service}
          >
            <select
              id="service"
              name="service"
              required
              className={inputCls}
              value={form.service}
              onChange={(e) => set("service", e.target.value)}
              {...aria("service")}
            >
              <option value="">Select a service…</option>
              {services.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
              <option value="other">Something else / not sure</option>
            </select>
          </Field>

          <Field
            label="One-Time or Recurring"
            htmlFor="frequency"
            error={errors.frequency}
          >
            <select
              id="frequency"
              name="frequency"
              required
              className={inputCls}
              value={form.frequency}
              onChange={(e) => set("frequency", e.target.value)}
              {...aria("frequency")}
            >
              <option value="">Select…</option>
              <option value="one-time">One-time</option>
              <option value="weekly">Recurring — weekly</option>
              <option value="bi-weekly">Recurring — every two weeks</option>
              <option value="monthly">Recurring — monthly</option>
              <option value="not-sure">Not sure yet</option>
            </select>
          </Field>

          <Field
            label="Preferred Date"
            htmlFor="preferredDate"
            error={errors.preferredDate}
            required={false}
          >
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              min={todayIso}
              className={inputCls}
              value={form.preferredDate}
              onChange={(e) => set("preferredDate", e.target.value)}
            />
          </Field>

          <Field
            label="Approximate Property Size"
            htmlFor="propertySize"
            error={errors.propertySize}
            required={false}
          >
            <select
              id="propertySize"
              name="propertySize"
              className={inputCls}
              value={form.propertySize}
              onChange={(e) => set("propertySize", e.target.value)}
            >
              <option value="">Select…</option>
              <option value="under-1000">Under 1,000 sq ft</option>
              <option value="1000-2000">1,000 – 2,000 sq ft</option>
              <option value="2000-3000">2,000 – 3,000 sq ft</option>
              <option value="3000-5000">3,000 – 5,000 sq ft</option>
              <option value="over-5000">Over 5,000 sq ft</option>
            </select>
          </Field>

          <Field
            label="Bedrooms"
            htmlFor="bedrooms"
            error={errors.bedrooms}
            required={false}
          >
            <select
              id="bedrooms"
              name="bedrooms"
              className={inputCls}
              value={form.bedrooms}
              onChange={(e) => set("bedrooms", e.target.value)}
            >
              <option value="">Select…</option>
              {["1", "2", "3", "4", "5", "6+"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
              <option value="n/a">Not applicable</option>
            </select>
          </Field>

          <Field
            label="Bathrooms"
            htmlFor="bathrooms"
            error={errors.bathrooms}
            required={false}
          >
            <select
              id="bathrooms"
              name="bathrooms"
              className={inputCls}
              value={form.bathrooms}
              onChange={(e) => set("bathrooms", e.target.value)}
            >
              <option value="">Select…</option>
              {["1", "1.5", "2", "2.5", "3", "3.5", "4+"].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
              <option value="n/a">Not applicable</option>
            </select>
          </Field>

          <div className="sm:col-span-2">
            <Field
              label="Additional Details"
              htmlFor="details"
              error={errors.details}
              required={false}
            >
              <textarea
                id="details"
                name="details"
                rows={4}
                className={inputCls}
                placeholder="Pets, priority areas, gate codes to coordinate later, anything else we should know…"
                value={form.details}
                onChange={(e) => set("details", e.target.value)}
              />
            </Field>
          </div>

          {/* Honeypot field — hidden from real users */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={form.company}
              onChange={(e) => set("company", e.target.value)}
            />
          </div>

          <div className="sm:col-span-2">
            <div className="flex items-start gap-3 rounded-md border-2 border-navy-line bg-navy-deep p-4">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                required
                checked={form.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-0.5 h-5 w-5 shrink-0 accent-[#f5b51b]"
                {...aria("consent")}
              />
              <label htmlFor="consent" className="text-sm leading-relaxed text-cream/80">
                I agree to be contacted by {site.name} by phone, text, or email
                about my quote request.
                <span className="text-red" aria-hidden="true">
                  {" "}
                  *
                </span>
              </label>
            </div>
            {errors.consent ? (
              <p
                id="consent-error"
                className="mt-1.5 text-sm font-medium text-gold"
                role="alert"
              >
                {errors.consent}
              </p>
            ) : null}
          </div>
        </div>

        {status === "error" ? (
          <div
            className="mt-6 rounded-md border-2 border-red bg-navy-deep p-4 text-sm text-cream"
            role="alert"
          >
            Something went wrong sending your request. Please try again, or call
            us directly at{" "}
            <a
              href={site.phone.telHref}
              className="inline-flex items-center gap-1 font-semibold text-gold underline underline-offset-4"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              {site.phone.display}
            </a>
            .
          </div>
        ) : null}

        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn btn-gold mt-8 w-full text-base disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting"
            ? "Sending…"
            : "Request My Cleaning Quote"}
        </button>
        <p className="mt-4 text-center text-xs text-cream/50">
          No spam. No pressure. Just a straight answer about your cleaning
          mission.
        </p>
      </div>
    </form>
  );
}
