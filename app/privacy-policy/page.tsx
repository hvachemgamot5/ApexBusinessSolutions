import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Business Solutions",
  description:
    "Learn how Apex Business Solutions handles information entered into its website enquiry form.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-5 py-16 text-slate-900">
      <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-12">
        <a href="/" className="text-sm font-bold text-blue-700 hover:text-blue-900">
          ← Back to Apex Business Solutions
        </a>
        <p className="mt-8 text-sm font-bold uppercase tracking-[.18em] text-blue-700">
          Website information
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-slate-500">Last updated: 23 November 2026</p>

        <div className="mt-8 space-y-8 leading-7 text-slate-700">
          <section>
            <h2 className="text-xl font-bold text-slate-950">1. Information you provide</h2>
            <p className="mt-2">
              The website enquiry form asks for your business name, country, the bookkeeping
              service you are interested in, an approximate monthly transaction range, and
              your email address. Please provide only information needed for an initial enquiry.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">2. How the enquiry form works</h2>
            <p className="mt-2">
              When you select “Continue to Gmail”, the details you entered are used in your
              browser to prepare an email addressed to Apex Business Solutions. The website
              does not automatically send that email. You can review, edit, or close the
              message before deciding whether to send it.
            </p>
            <p className="mt-2">
              The form does not submit its answers to an Apex website database or form
              collection service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">3. Email and follow-up</h2>
            <p className="mt-2">
              If you choose to send the prepared email, the information will be delivered
              through your email provider to Apex Business Solutions. We may use it to
              respond to your enquiry and discuss the services you requested. Your email
              provider will handle that message under its own terms and privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">4. Information not to submit</h2>
            <p className="mt-2">
              Do not enter passwords, bank or accounting-software login details, full payment
              card numbers, identity documents, or confidential financial records in the
              enquiry form. If information is needed to assess a potential engagement, an
              appropriate and secure method should be agreed first.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">5. Website hosting and technical data</h2>
            <p className="mt-2">
              This website is hosted on Vercel. The hosting provider may process technical
              information such as requests, device or browser details, and security logs as
              part of delivering and protecting the website. Please refer to Vercel’s privacy
              information for details of its own processing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">6. Your choices and questions</h2>
            <p className="mt-2">
              You may choose not to submit an enquiry. If you have a question about an enquiry
              you sent to us or want to request an update or deletion of information held in
              our email correspondence, contact us at{" "}
              <a
                className="font-semibold text-blue-700 underline underline-offset-4"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Privacy%20Enquiry"
              >
                hvachemgamot5@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-950">7. Changes to this policy</h2>
            <p className="mt-2">
              We may update this page when the website or enquiry process changes. The
              revision date above indicates the latest update.
            </p>
          </section>
        </div>

        <p className="mt-10 border-t border-slate-200 pt-6 text-sm leading-6 text-slate-500">
          This page describes the current website enquiry process. It is general privacy
          information, not legal advice, and does not replace any notices or obligations
          that may apply to a particular business engagement.
        </p>
      </article>
    </main>
  );
}
