import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for PFC Cleaning Service — quotes, scheduling, cancellations, and use of pfcservice.net.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of Service" updated="July 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
        {site.domainDisplay} and the cleaning services provided by {site.name}{" "}
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By using
        this website or booking our services, you agree to these Terms.
      </p>

      <section>
        <h2>Quotes &amp; Estimates</h2>
        <ul>
          <li>
            Quotes are provided free of charge and are based on the information
            you supply about your property and the requested service.
          </li>
          <li>
            A quote is an estimate, not a binding contract. Final pricing is
            confirmed with you before service begins, and may be adjusted if the
            condition or scope of the property differs materially from what was
            described.
          </li>
        </ul>
      </section>

      <section>
        <h2>Scheduling, Access &amp; Cancellations</h2>
        <ul>
          <li>
            Service dates and times are confirmed with you in advance. Please
            ensure we can access the property at the scheduled time.
          </li>
          <li>
            If you need to reschedule or cancel, please give us as much notice
            as possible so we can offer the slot to another client.
          </li>
        </ul>
      </section>

      <section>
        <h2>Our Service Commitment</h2>
        <p>
          We perform every service against a defined checklist and complete a
          walkthrough before we consider the job done. If something was missed,
          tell us promptly — we want the opportunity to make it right.
        </p>
      </section>

      <section>
        <h2>Client Responsibilities</h2>
        <ul>
          <li>
            Secure valuables, firearms, and sensitive documents before service.
          </li>
          <li>
            Let us know in advance about pets, alarm systems, fragile items, or
            areas that are off-limits.
          </li>
          <li>
            Provide a safe working environment, including functioning utilities
            (water and electricity) at the service address.
          </li>
        </ul>
      </section>

      <section>
        <h2>Liability</h2>
        <p>
          We treat every property with care. If you believe damage occurred
          during a service, notify us as soon as possible — ideally within 48
          hours — so we can review and resolve the matter. To the fullest
          extent permitted by law, our liability is limited to the cost of the
          service performed.
        </p>
      </section>

      <section>
        <h2>Website Use</h2>
        <p>
          The content on {site.domainDisplay} — including brand artwork, logos,
          and copy — belongs to {site.name} and may not be copied or reused
          without permission. You agree not to misuse the website or submit
          false or misleading information through our forms.
        </p>
      </section>

      <section>
        <h2>Governing Law</h2>
        <p>
          These Terms are governed by the laws of the State of Florida. Any
          disputes will be handled in the courts serving Duval County, Florida.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of the
          website or our services after changes take effect constitutes
          acceptance of the revised Terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          {site.name}
          <br />
          {site.serviceArea.city}, {site.serviceArea.state}
          <br />
          <a href={site.phone.telHref}>{site.phone.display}</a>
          <br />
          <a href={site.url}>{site.domainDisplay}</a>
        </p>
      </section>
    </LegalPage>
  );
}
