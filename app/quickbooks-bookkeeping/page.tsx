import type { Metadata } from "next";

const siteUrl = "https://apex-business-solutions.vercel.app";

export const metadata: Metadata = {
  title: "QuickBooks Online Bookkeeping Services | Apex Business Solutions",
  description:
    "Remote QuickBooks Online bookkeeping support for small businesses, including transaction categorization, bank reconciliation, accounts payable and receivable, cleanup, and financial reporting.",
  alternates: {
    canonical: "/quickbooks-bookkeeping",
  },
  openGraph: {
    type: "website",
    url: `${siteUrl}/quickbooks-bookkeeping`,
    siteName: "Apex Business Solutions",
    title: "QuickBooks Online Bookkeeping Services | Apex Business Solutions",
    description:
      "Practical remote QuickBooks Online bookkeeping support for small businesses.",
  },
};

const services = [
  {
    title: "Transaction categorization",
    text: "Organize income and expenses into the appropriate accounts using the information and documentation supplied by your business.",
  },
  {
    title: "Bank and credit card reconciliation",
    text: "Compare QuickBooks balances with bank and card statements, identify differences, and help keep records aligned.",
  },
  {
    title: "Accounts payable and receivable support",
    text: "Help organize bills, invoices, payment records, and outstanding customer or supplier balances.",
  },
  {
    title: "Bookkeeping cleanup and catch-up",
    text: "Review incomplete or overdue bookkeeping records and help bring transactions and account balances into an orderly state.",
  },
  {
    title: "Monthly financial reports",
    text: "Prepare and organize reports such as Profit and Loss and Balance Sheet for business-owner review.",
  },
];

const faqs = [
  {
    question: "What QuickBooks Online bookkeeping support is available?",
    answer:
      "Support can include transaction categorization, bank and credit card reconciliation, accounts payable and receivable assistance, cleanup and catch-up work, and standard financial reports. The exact scope is agreed after understanding your records and requirements.",
  },
  {
    question: "Can you work remotely with a small business?",
    answer:
      "Apex Business Solutions is set up to discuss remote bookkeeping support with small businesses. The working process, access arrangements, responsibilities, and reporting schedule are agreed before work begins.",
  },
  {
    question: "Can you clean up overdue QuickBooks records?",
    answer:
      "We can discuss a cleanup or catch-up project after reviewing the accounting period, transaction volume, bank and card accounts, and the condition of the existing records.",
  },
  {
    question: "Do you provide tax, audit, or legal services?",
    answer:
      "This page describes bookkeeping and business-support services, not tax, audit, legal, or regulated professional advice. Any specialist requirements should be handled by an appropriately qualified professional in the relevant jurisdiction.",
  },
  {
    question: "How do I enquire about bookkeeping support?",
    answer:
      "Email hvachemgamot5@gmail.com with a short description of your business, the accounting software you use, and the bookkeeping help you need. Please do not send passwords or sensitive financial documents in an initial enquiry.",
  },
];

export default function QuickBooksBookkeepingPage() {
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
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-300">
            Remote bookkeeping support
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            QuickBooks Online Bookkeeping Services for Small Businesses
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300">
            Keep your accounting records organized with practical remote bookkeeping support. Apex Business Solutions can help with transaction categorization, reconciliations, AP/AR support, bookkeeping cleanup, and financial reporting using QuickBooks Online.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=QuickBooks%20Bookkeeping%20Enquiry"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500"
            >
              Enquire about QuickBooks support
            </a>
            <a href="#services" className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold hover:bg-white/10">
              Explore services
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-400">
            Remote support for small businesses. Service scope and access arrangements are agreed before work begins.
          </p>
        </div>
      </section>

      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_.8fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">QuickBooks bookkeeping</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
              Clear, organized records support better business decisions.
            </h2>
            <p className="mt-6 leading-8 text-slate-600">
              Bookkeeping is more than entering transactions. Consistent records help business owners understand income, expenses, outstanding bills, customer balances, and cash activity. A well-maintained QuickBooks Online file can make routine financial review more useful and less stressful.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              We begin by understanding your current bookkeeping process, the accounts that need attention, and the reports you want to review. Work is then scoped around the records available and the agreed responsibilities.
            </p>
          </div>
          <aside className="rounded-3xl bg-slate-50 p-8">
            <h2 className="text-xl font-bold">Who may benefit?</h2>
            <ul className="mt-5 space-y-4 text-slate-600">
              <li>• Small businesses using QuickBooks Online</li>
              <li>• Owners who need regular account reconciliations</li>
              <li>• Businesses with overdue or disorganized bookkeeping</li>
              <li>• Teams that need help organizing bills, invoices, and reports</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">What we can help with</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            QuickBooks Online bookkeeping support
          </h2>
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
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">A clear process, agreed in advance</h2>
          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            {[
              ["1", "Understand", "Discuss your business, records, deadlines, and bookkeeping priorities."],
              ["2", "Agree scope", "Confirm the accounts, period, tasks, access, and deliverables before work starts."],
              ["3", "Organize & report", "Complete the agreed bookkeeping work and share the relevant records or reports for review."],
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
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">QuickBooks bookkeeping FAQs</h2>
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
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Need help organizing your QuickBooks records?</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Tell us a little about your business, the period you need help with, and the bookkeeping tasks you want to discuss.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=QuickBooks%20Bookkeeping%20Enquiry" className="rounded-xl bg-blue-600 px-7 py-3.5 font-bold hover:bg-blue-500">
              Email Apex Business Solutions
            </a>
            <a href="https://wa.me/919799040105?text=Hello%20Apex%20Business%20Solutions%2C%20I%20would%20like%20to%20enquire%20about%20QuickBooks%20bookkeeping%20support." target="_blank" rel="noopener noreferrer" className="rounded-xl bg-green-600 px-7 py-3.5 font-bold hover:bg-green-500">
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
