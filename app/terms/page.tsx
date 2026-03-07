import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Xelphrix Technologies",
  description:
    "Read the Terms of Service for Xelphrix Technologies, including acceptable use, service limitations, intellectual property, and liability terms.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.xelphrixtechnologies.com/terms",
  },
};

export default function TermsOfService() {
  return (
    <div className="bg-white text-[#25343F] px-6 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Terms of Service</h1>
        <p className="text-sm text-gray-500">Last Updated: March 7, 2026</p>

        <section>
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Xelphrix Technologies website and services,
            you agree to be bound by these Terms of Service.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">2. Services</h2>
          <p>
            Xelphrix Technologies provides cloud consulting, software development,
            DevOps automation, and related professional services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">3. Acceptable Use</h2>
          <p>
            You agree not to misuse this website or our services, including any
            activity that may interfere with the platform, violate laws, or
            compromise security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content, trademarks, branding, and materials on this site are the
            property of Xelphrix Technologies unless otherwise stated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Xelphrix Technologies is not
            liable for indirect, incidental, or consequential damages arising from
            use of this website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">6. Changes to Terms</h2>
          <p>
            We may update these Terms of Service from time to time. Updates will
            be posted on this page with a revised date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold">7. Contact</h2>
          <p>
            For questions regarding these terms, contact us at
            info@xelphrixtechnologies.com.
          </p>
        </section>
      </div>
    </div>
  );
}
