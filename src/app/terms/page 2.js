"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-on-surface">
      <h1 className="font-headline-xl text-3xl font-extrabold mb-6 text-primary">Terms & Conditions</h1>
      <p className="text-sm opacity-70 mb-8">Last Updated: July 2026</p>

      <div className="space-y-6 text-body-md leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">1. Introduction</h2>
          <p>
            Welcome to <strong>The Paws Friend</strong> (thepawsfriend.com). By booking our veterinary, grooming, or healthcare services, you agree to these Terms & Conditions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">2. Services & Home Visits</h2>
          <p>
            We provide doorstep pet healthcare, vaccinations, consultation, and grooming services in Delhi, Gurgaon, Noida, Greater Noida, Ghaziabad, and Faridabad. All services are conducted by licensed veterinary professionals.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">3. Appointments & Cancellations</h2>
          <p>
            Appointments can be booked online or via phone (+91 9211338489). Please inform us at least 2 hours in advance if you need to reschedule or cancel your visit.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">4. Emergency Care</h2>
          <p>
            For urgent 24/7 medical assistance, call our emergency line at <strong>+91 9211338488</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">5. Contact Information</h2>
          <p>
            If you have questions regarding these terms, please email us at <strong>support@thepawsfriend.com</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
