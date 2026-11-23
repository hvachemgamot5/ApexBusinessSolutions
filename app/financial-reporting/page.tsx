import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Financial Reporting Services for Small Businesses | Apex Business Solutions",
  description:
    "Remote financial reporting support for small businesses. Organize Profit and Loss, Balance Sheet, cash flow summaries, and management reports using bookkeeping records from QuickBooks Online or Xero.",
  alternates: {
    canonical: "/financial-reporting",
  },
  openGraph: {
    title: "Financial Reporting Services | Apex Business Solutions",
    description:
      "Clear, practical financial reporting support for small businesses using QuickBooks Online and Xero.",
    url: "https://apex-business-solutions.vercel.app/financial-reporting",
    siteName: "Apex Business Solutions",
    type: "website",
  },
};

const reports = [
  {
    title: "Profit & Loss report",
    text: "Organize income and expense information for an agreed period to help owners review business performance.",
  },
  {
    title: "Balance Sheet report",
    text: "Present available asset, liability, and equity balances from the bookkeeping records for review.",
  },
  {
    title: "Cash flow summaries",
    text: "Help organize cash movement information and highlight key operating cash inflows and outflows.",
  },
  {
    title: "Budget vs. actual support",
    text: "Compare actual figures with budget information supplied by the business and summarize notable variances.",
  },
  {
    title: "Management summaries",
    text: "Prepare concise summaries, schedules, and key figures to support regular business reviews.",
  },
];

const faqs = [
  {
    question: "Which accounting software can you work with?",
    answer:
      "Reporting support can be provided using available records from QuickBooks Online or Xero, along with relevant supporting spreadsheets or documents.",
  },
  {
    question: "Can you prepare monthly reports?",
    answer:
      "Yes. Monthly reporting can be discussed based on the bookkeeping status, records available, reporting needs, and agreed schedule.",
  },
  {
    question: "What information is needed?",
    answer:
      "Typically, the accounting records for the period, reconciled bank and credit card accounts where available, and any relevant budget or management information.",
  },
  {
    question: "Can you explain differences or unusual movements?",
    answer:
      "We can help identify and summarize visible variances or movements in the records. Any item requiring additional evidence or management judgment will be referred for clarification.",
  },
  {
    question: "Are these audited or certified financial statements?",
    answer:
      "No. This is bookkeeping-based reporting support, not an audit, review, assurance engagement, tax opinion, or certification. Those services should be obtained from appropriately qualified professionals.",
  },
];

export default function FinancialReportingPage() {
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
            Remote financial reporting support
          </p>
          <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
            Financial Reporting Services for Small Businesses
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Make your bookkeeping information easier to understand and use.
            Apex Business Solutions helps organize practical financial reports
            using records from QuickBooks Online and Xero.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:hvachemgamot5@gmail.com?subject=Financial%20Reporting%20Inquiry"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500"
            >
              Discuss Your Reporting Needs
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
              Reporting support
            </p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Clear reports. Better business visibility.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Useful reporting begins with organized bookkeeping records.
              We discuss the reporting period, available information, and
              intended use before agreeing on the work.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reports.map((report, index) => (
              <article
                key={report.title}
                className="rounded-2xl border border-slate-200 p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">
                  0{index + 1}
                </div>
                <h3 className="mt-5 text-xl font-bold">{report.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{report.text}</p>
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
              Need a clearer view of your business numbers?
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              Reporting support may help owners who want regular visibility
              into income, expenses, balances, cash movements, or performance
              against a budget.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700">
              {[
                "You need regular Profit & Loss and Balance Sheet reports.",
                "You want a simple summary of cash movement.",
                "You need to compare actual results with a supplied budget.",
                "You want key figures organized for a management discussion.",
                "Your bookkeeping records need a clearer reporting format.",
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
              Our process
            </p>
            <div className="mt-7 space-y-7">
              {[
                ["01", "Understand your needs", "Discuss the reporting period, questions, software, and intended audience."],
                ["02", "Review available records", "Check the information provided and identify missing details or items needing clarification."],
                ["03", "Prepare agreed reports", "Organize the requested reports and summarize relevant observations or unresolved items."],
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
            Financial reporting questions
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
            Let's make your financial information easier to use.
          </h2>
          <p className="mt-4 leading-7 text-blue-100">
            Tell us which reports you need, the period they should cover, and
            whether you use QuickBooks Online or Xero.
          </p>
          <a
            href="mailto:hvachemgamot5@gmail.com?subject=Financial%20Reporting%20Inquiry"
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
          Bookkeeping and business support only. Not audit, assurance, tax,
          legal, or regulated professional advice.
        </p>
      </footer>
    </main>
  );
}
