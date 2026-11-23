import type { Metadata } from "next";

const siteUrl = "https://apex-business-solutions.vercel.app";

export const metadata: Metadata = {
  title: "Bank Reconciliation Services | Apex Business Solutions",
  description:
    "Remote bank and credit card reconciliation support for small businesses. Compare statement balances, review transactions, identify differences, and organize month-end records.",
  alternates: { canonical: "/bank-reconciliation" },
  openGraph: {
    type: "website",
    url: `${siteUrl}/bank-reconciliation`,
    siteName: "Apex Business Solutions",
    title: "Bank Reconciliation Services | Apex Business Solutions",
    description:
      "Practical remote bank and credit card reconciliation support for small businesses.",
  },
};

const services = [
  {
    title: "Bank statement matching",
    text: "Compare transactions recorded in your accounting software with the bank statement for the agreed period.",
  },
  {
    title: "Credit card reconciliation",
    text: "Review card transactions, payments, and statement balances so the accounting records can be checked against the statement.",
  },
  {
    title: "Difference identification",
    text: "Identify unmatched items, duplicate entries, missing transactions, and timing differences for review.",
  },
  {
    title: "Outstanding item review",
    text: "Organize uncleared payments, deposits in transit, and other reconciling items that may need follow-up.",
  },
  {
    title: "Month-end support",
    text: "Help maintain a consistent reconciliation routine and prepare organized records for business-owner review.",
  },
];

const faqs = [
  {
    question: "What is bank reconciliation?",
    answer:
      "Bank reconciliation is the process of comparing transactions and balances in accounting records with the corresponding bank statement, then reviewing differences that need explanation.",
  },
  {
    question: "Can you reconcile both bank and credit card accounts?",
    answer:
      "Yes. The scope can include business bank accounts and credit card accounts, subject to the statements and accounting records provided.",
  },
  {
    question: "What if the statement balance does not match the books?",
    answer:
      "We can organize the unmatched items and investigate possible causes such as missing entries, duplicates, incorrect amounts, or timing differences. Any correction is discussed and agreed with the business owner before it is made.",
  },
  {
    question: "Which accounting software do you support?",
    answer:
      "Reconciliation support can be discussed for QuickBooks Online and Xero. The software, account list, statement period, and access arrangements are confirmed before work begins.",
  },
  {
    question: "Do you provide audit or fraud investigation services?",
    answer:
      "No. This service is bookkeeping reconciliation support, not an audit, forensic review, fraud investigation, tax service, or legal advice. Specialist matters should be referred to an appropriately qualified professional.",
  },
];

export default function BankReconciliationPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="font-bold tracking-tight">Apex Business Solutions</a>
          <div className="flex items-center gap-5 text-sm font-semibold">
            <a href="/#services" className="hover:text-blue-700">All services</a>
            <a href="#contact" className="rounded-full bg-blue-700 px-4 py-2 text-white hover:bg-blue-800">Contact</a>
          </div>
        </div>
      </nav>

      <section className="bg-slate-950 px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-300">Remote bookkeeping support</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Bank and Credit Card Reconciliation Services for Small Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Keep financial records aligned with practical remote reconciliation support. Apex Business Solutions can help compare accounting records with bank and card statements, organize unmatched items, and review differences in QuickBooks Online or Xero.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:hvachemgamot5@gmail.com?subject=Bank%20Reconciliation%20Enquiry" className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500">
              Enquire about reconciliation
            </a>
            <a href="#services" className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold hover:bg-white/10">Explore services</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Remote support for small businesses. Scope, statement periods, and access arrangements are agreed before work begins.</p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Why reconciliation matters</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Know what is recorded—and what still needs attention.</h2>
            <p className="mt-6 leading-8 text-slate-600">
              Regular reconciliation helps business owners check whether cash and card activity recorded in the accounting system agrees with statements. It can bring missing entries, duplicates, and timing differences to attention before reports are reviewed.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We first confirm the accounts, accounting period, available statements, and current records. Differences are organized for discussion, and adjustments are made only within the agreed scope and with the appropriate approval.
            </p>
          </div>
          <aside className="rounded-3xl bg-slate-50 p-8">
            <h2 className="text-xl font-bold">Who may benefit?</h2>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Small businesses with monthly bank statements</li>
              <li>• Owners using QuickBooks Online or Xero</li>
              <li>• Businesses with unreconciled bank or card accounts</li>
              <li>• Teams preparing records for month-end review</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">What we can help with</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Bank reconciliation support</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-7">
                <span className="text-sm font-black text-blue-700">0{index + 1}</span>
                <h3 className="mt-3 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Our approach</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A clear reconciliation process</h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {[
              ["1", "Collect records", "Confirm the accounts, period, statements, and accounting records."],
              ["2", "Compare & review", "Match transactions and organize differences or outstanding items."],
              ["3", "Resolve & report", "Discuss findings, obtain approval for agreed corrections, and share the reconciliation status."],
            ].map(([number, title, description]) => (
              <div key={number} className="rounded-2xl border border-slate-200 p-6">
                <span className="text-2xl font-black text-blue-700">{number}</span>
                <h3 className="mt-3 font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Frequently asked questions</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Bank reconciliation FAQs</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h3 className="font-bold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-20 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-300">Start a conversation</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Need help reconciling your business accounts?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Tell us which accounting software you use, how many accounts need attention, and the statement period you want to discuss. Please do not send passwords or sensitive financial documents in an initial enquiry.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="mailto:hvachemgamot5@gmail.com?subject=Bank%20Reconciliation%20Enquiry" className="rounded-xl bg-blue-600 px-7 py-3.5 font-bold hover:bg-blue-500">Email Apex Business Solutions</a>
            <a href="https://wa.me/919799040105?text=Hello%20Apex%20Business%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20bank%20reconciliation%20support." target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-600 px-7 py-3.5 font-bold hover:bg-green-500">Message on WhatsApp</a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Email: hvachemgamot5@gmail.com</p>
          <p className="mt-10 text-xs text-slate-500">Apex Business Solutions provides bookkeeping and business-support services. This page does not offer audit, forensic investigation, tax, legal, or regulated professional advice.</p>
          <a href="/" className="mt-8 inline-block text-sm font-semibold text-blue-300 underline underline-offset-4 hover:text-white">Back to homepage</a>
        </div>
      </section>
    </main>
  );
}
