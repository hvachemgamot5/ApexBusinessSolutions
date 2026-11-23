import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping Cleanup & Catch-Up Services | Apex Business Solutions",
  description:
    "Remote bookkeeping cleanup and catch-up support for small businesses. Organize overdue transactions, review records, reconcile accounts, and prepare clearer reports in QuickBooks Online or Xero.",
  alternates: {
    canonical: "/bookkeeping-cleanup",
  },
  openGraph: {
    title: "Bookkeeping Cleanup & Catch-Up Services | Apex Business Solutions",
    description:
      "Practical remote bookkeeping cleanup and catch-up support for small businesses using QuickBooks Online or Xero.",
    url: "https://apex-business-solutions.vercel.app/bookkeeping-cleanup",
    siteName: "Apex Business Solutions",
    type: "website",
  },
};

const services = [
  {
    title: "Overdue transaction organization",
    text: "Organize available records and review transactions that have not yet been entered or categorized.",
  },
  {
    title: "Bank and credit card reconciliation",
    text: "Compare accounting records with statements, identify differences, and list items that need clarification.",
  },
  {
    title: "Unmatched items and balances",
    text: "Review uncategorized transactions, outstanding items, and opening balances within the agreed scope.",
  },
  {
    title: "Accounts payable and receivable",
    text: "Help organize supplier bills, customer invoices, payment records, and outstanding balances.",
  },
  {
    title: "Clearer bookkeeping reports",
    text: "Prepare agreed bookkeeping reports so owners and their accountants can review the available financial information.",
  },
];

const faqs = [
  {
    question: "How far back can you help with bookkeeping cleanup?",
    answer:
      "The period depends on the volume and condition of the records. We first review the backlog and agree on a realistic scope and sequence of work.",
  },
  {
    question: "What documents or information may be needed?",
    answer:
      "Depending on the work, this may include bank and credit card statements, sales and purchase records, invoices, bills, prior bookkeeping reports, and access to your accounting software.",
  },
  {
    question: "Can you work in QuickBooks Online or Xero?",
    answer:
      "Yes. Cleanup and catch-up support can be scoped around QuickBooks Online or Xero, subject to the records and access provided.",
  },
  {
    question: "Will you change transactions or balances?",
    answer:
      "Any corrections or changes should be within the agreed scope and supported by available records. Items that need owner or accountant confirmation will be identified for review rather than guessed.",
  },
  {
    question: "Do you provide tax filing, audit, or legal services?",
    answer:
      "No. Apex provides bookkeeping and business support. Tax, audit, legal, and other regulated professional services should be handled by appropriately qualified professionals.",
  },
];

export default function BookkeepingCleanupPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="font-bold tracking-tight">
            Apex Business Solutions
          </a>
          <a
            href="/#contact"
            className="rounded-xl bg-blue-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-800"
          >
            Contact
          </a>
        </div>
      </nav>

      <section className="bg-slate-950 px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-300">
            Remote bookkeeping support
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Bookkeeping Cleanup and Catch-Up Services for Small Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Get overdue or disorganized bookkeeping records into a clearer,
            more manageable state. Apex Business Solutions provides practical
            remote support using QuickBooks Online and Xero.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hvachemgamot5@gmail.com?subject=Bookkeeping%20Cleanup%20Inquiry"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500"
            >
              Discuss Your Bookkeeping Backlog
            </a>
            <a
              href="/#services"
              className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold hover:bg-white/10"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">
              What we can help organize
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Bring your bookkeeping records back into order.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Cleanup starts with understanding what records are available,
              what periods need attention, and which items require clarification.
              Work is agreed in advance and completed against that scope.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">
              Who may benefit
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Is your bookkeeping falling behind?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Cleanup support may be useful if your business has overdue entries,
              unreconciled accounts, incomplete transaction coding, or records
              that need organizing before an owner or accountant can review them.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "Several weeks or months of bookkeeping are pending.",
                "Bank or credit card accounts have not been reconciled.",
                "Transactions remain uncategorized or need supporting details.",
                "Supplier bills or customer balances need organizing.",
                "You want clearer records for management or your accountant.",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="font-black text-blue-700">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-300">
              Our approach
            </p>
            <div className="mt-7 space-y-7">
              {[
                ["01", "Understand the backlog", "Discuss the periods, software, available records, and main issues."],
                ["02", "Agree the scope", "Confirm the work to be completed and identify information still needed."],
                ["03", "Organize and report", "Work through agreed records and summarize completed work and unresolved items."],
              ].map(([number, title, description]) => (
                <div key={number} className="flex gap-4">
                  <span className="font-black text-blue-400">{number}</span>
                  <div>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-300">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">
            Frequently asked questions
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Bookkeeping cleanup questions
          </h2>
          <div className="mt-8 divide-y divide-slate-200">
            {faqs.map((faq) => (
              <article key={faq.question} className="py-6">
                <h3 className="text-lg font-bold">{faq.question}</h3>
                <p className="mt-2 leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-700 px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-black sm:text-4xl">
            Ready to discuss your bookkeeping backlog?
          </h2>
          <p className="mt-4 leading-7 text-blue-100">
            Tell us which accounting software you use, which periods need
            attention, and what records are available.
          </p>
          <a
            href="mailto:hvachemgamot5@gmail.com?subject=Bookkeeping%20Cleanup%20Inquiry"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-blue-800 hover:bg-blue-50"
          >
            Email Apex Business Solutions
          </a>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-center text-sm text-slate-400">
        <a href="/" className="font-bold text-white">
          Apex Business Solutions
        </a>
        <p className="mt-2">
          Bookkeeping and business support only. Not tax, audit, legal, or
          regulated professional advice.
        </p>
      </footer>
    </main>
  );
}
