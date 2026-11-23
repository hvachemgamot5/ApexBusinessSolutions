import type { Metadata } from "next";

const siteUrl = "https://apex-business-solutions.vercel.app";

export const metadata: Metadata = {
  title: "Xero Bookkeeping Services for Small Businesses | Apex Business Solutions",
  description:
    "Remote Xero bookkeeping support for small businesses, including transaction coding, bank reconciliation, bills, invoices, accounts payable and receivable, cleanup, and financial reporting.",
  alternates: {
    canonical: "/xero-bookkeeping",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/xero-bookkeeping`,
    siteName: "Apex Business Solutions",
    title: "Xero Bookkeeping Services | Apex Business Solutions",
    description:
      "Practical remote Xero bookkeeping support for small businesses, from reconciliations to reporting.",
  },
};

const services = [
  {
    title: "Bank reconciliation",
    text: "Compare Xero bank statement lines with recorded transactions, review unmatched items, and help resolve differences using the supporting information available.",
  },
  {
    title: "Transaction coding",
    text: "Organize income and expense transactions into appropriate accounts based on the business records and coding instructions agreed with you.",
  },
  {
    title: "Bills and supplier payments",
    text: "Help organize supplier bills, due dates, payment records, and accounts payable information.",
  },
  {
    title: "Sales invoices and customer balances",
    text: "Support the recording and review of sales invoices, receipts, and outstanding customer balances.",
  },
  {
    title: "Cleanup and financial reports",
    text: "Discuss overdue or disorganized Xero records and help prepare standard reports such as Profit and Loss and Balance Sheet for review.",
  },
];

const faqs = [
  {
    question: "What Xero bookkeeping tasks can you support?",
    answer:
      "Depending on your needs and the agreed scope, support may include transaction coding, bank reconciliation, supplier bills, sales invoices, accounts payable and receivable records, cleanup, and standard financial reporting.",
  },
  {
    question: "Can you support a business remotely using Xero?",
    answer:
      "Apex Business Solutions can discuss remote bookkeeping support with small businesses using Xero. The access method, responsibilities, working schedule, and deliverables are agreed before work starts.",
  },
  {
    question: "Can you help with unreconciled Xero transactions?",
    answer:
      "We can discuss a reconciliation review after understanding the accounts, statement periods, transaction volume, and supporting documents available. Unclear or unsupported items should be referred to the business owner for clarification.",
  },
  {
    question: "Do you provide tax or audit services?",
    answer:
      "This page describes bookkeeping and business-support services, not tax, audit, legal, or regulated professional advice. Specialist requirements should be handled by an appropriately qualified professional in the relevant jurisdiction.",
  },
  {
    question: "How can I enquire about Xero bookkeeping?",
    answer:
      "Email hvachemgamot5@gmail.com with a brief description of your business, the Xero tasks you need help with, and the accounting periods involved. Do not send passwords or sensitive financial documents in an initial enquiry.",
  },
];

export default function XeroBookkeepingPage() {
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
            Xero Bookkeeping Services for Small Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Keep your Xero records organized with practical remote bookkeeping support. Discuss help with transaction coding, bank reconciliation, supplier bills, sales invoices, AP/AR records, cleanup, and financial reporting.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Xero%20Bookkeeping%20Enquiry" className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500">
              Enquire about Xero support
            </a>
            <a href="#services" className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold hover:bg-white/10">
              Explore services
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Remote support for small businesses. Tasks and deliverables are agreed before work begins.</p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Xero bookkeeping</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Keep your accounting workflow clear and up to date.</h2>
            <p className="mt-6 leading-8 text-slate-600">
              Consistent bookkeeping helps business owners understand money coming in, expenses going out, bills awaiting payment, and customer invoices still outstanding. Xero provides cloud accounting tools for organizing these records and reviewing financial information.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We start by understanding how your Xero organization is currently used, which accounts or periods need attention, and what information is available. The work is then scoped around your requirements and the responsibilities agreed in advance.
            </p>
          </div>
          <aside className="rounded-3xl bg-slate-50 p-8">
            <h2 className="text-xl font-bold">Who may benefit?</h2>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Small businesses already using Xero</li>
              <li>• Owners who need regular bank reconciliation</li>
              <li>• Businesses managing supplier bills and customer invoices</li>
              <li>• Teams needing help organizing overdue records and reports</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">What we can help with</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Xero bookkeeping support</h2>
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
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A straightforward process</h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {[
              ["1", "Understand", "Discuss your business, Xero setup, records, and priorities."],
              ["2", "Agree scope", "Confirm accounts, periods, tasks, access, and deliverables."],
              ["3", "Organize & report", "Complete the agreed work and share records or reports for review."],
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
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Xero bookkeeping FAQs</h2>
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
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Looking for help with your Xero bookkeeping?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Tell us about your business, the Xero accounts or periods involved, and the bookkeeping tasks you want to discuss.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Xero%20Bookkeeping%20Enquiry" className="rounded-xl bg-blue-600 px-7 py-3.5 font-bold hover:bg-blue-500">
              Email Apex Business Solutions
            </a>
            <a href="https://wa.me/919799040105?text=Hello%20Apex%20Business%20Solutions%2C%20I%20am%20interested%20in%20your%20bookkeeping%20services.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20pricing%3F" target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-600 px-7 py-3.5 font-bold hover:bg-green-500">
              Message on WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">Email: hvachemgamot5@gmail.com</p>
          <p className="mt-10 text-xs text-slate-500">
            Apex Business Solutions provides bookkeeping and business-support services. This page does not offer tax, audit, legal, or regulated professional advice.
          </p>
          <a href="/" className="mt-8 inline-block text-sm font-semibold text-blue-300 underline underline-offset-4 hover:text-white">Back to homepage</a>
        </div>
      </section>
    </main>
  );
}
