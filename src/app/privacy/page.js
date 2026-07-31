"use client";

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-on-surface">
      <h1 className="font-headline-xl text-3xl font-extrabold mb-6 text-primary">Privacy Policy</h1>
      <p className="text-sm opacity-70 mb-8">Last Updated: July 2026</p>

      <div className="space-y-6 text-body-md leading-relaxed">
        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">1. Data We Collect</h2>
          <p>
            At <strong>The Paws Friend</strong> (thepawsfriend.com), we respect your privacy. We collect minimal personal details such as your name, phone number, email address, and address strictly for scheduling doorstep pet visits.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">2. How We Use Information</h2>
          <p>
            Your information is used solely for service delivery, sending appointment updates, and responding to queries. We never sell or share your data with third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold mb-2 text-on-surface">3. Contact & Support</h2>
          <p>
            For privacy inquiries or data requests, contact us at <strong>support@thepawsfriend.in</strong> or call <strong>+91 9211338489</strong>. Emergency contact: <strong>+91 9211338488</strong>.
          </p>
        </section>
      </div>
    </div>
  );
}
