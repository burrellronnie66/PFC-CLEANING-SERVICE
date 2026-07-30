import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { site } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How PFC Cleaning Service collects, uses, and protects your information when you visit pfcservice.net or request a quote.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy Policy" updated="July 2026">
      <p>
        {site.name}{" "}
        (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
        respects your privacy. This policy explains what information we collect
        through {site.domainDisplay}, how we use it, and the choices you have.
      </p>

      <section>
        <h2>Information We Collect</h2>
        <p>We collect information you choose to provide, including:</p>
        <ul>
          <li>
            <strong>Quote requests:</strong> your name, phone number, email
            address, service address, city, ZIP code, property details, and any
            notes you include in the request form.
          </li>
          <li>
            <strong>Phone and text communication:</strong> information you share
            when you call or message us at {site.phone.display}.
          </li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To respond to your quote request and prepare an estimate</li>
          <li>To schedule, confirm, and perform cleaning services</li>
          <li>To communicate with you about appointments and service updates</li>
          <li>To improve our services and website</li>
        </ul>
        <p>
          We do <strong>not</strong> sell your personal information. We share it
          only with service providers who help us operate (for example, a form
          delivery or scheduling provider), and only as needed to serve you, or
          where required by law.
        </p>
      </section>

      <section>
        <h2>Text and Phone Consent</h2>
        <p>
          By submitting our quote form with the consent box checked, you agree
          that we may contact you by phone, text message, or email about your
          request. You can opt out at any time by telling us by phone or email,
          or by replying STOP to a text message.
        </p>
      </section>

      <section>
        <h2>Data Retention &amp; Security</h2>
        <p>
          We keep quote and customer information only as long as needed to
          provide services and meet our legal obligations. We take reasonable
          measures to protect your information, but no method of transmission
          over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You may request that we correct or delete the personal information we
          hold about you by contacting us at {site.phone.display}.
        </p>
      </section>

      <section>
        <h2>Children&rsquo;s Privacy</h2>
        <p>
          Our website and services are not directed to children under 13, and
          we do not knowingly collect information from them.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this policy from time to time. The &ldquo;Last
          updated&rdquo; date above reflects the most recent revision.
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
