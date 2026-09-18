const services = [
  { title: "Monthly Bookkeeping", text: "Accurate transaction recording and organized books for better day-to-day visibility." },
  { title: "Bank & Credit Card Reconciliation", text: "Match accounts, investigate differences, and keep balances reliable." },
  { title: "Accounts Payable & Receivable", text: "Support for bills, invoices, payments, collections, and customer balances." },
  { title: "Cleanup & Catch-up", text: "Bring disorganized or overdue bookkeeping records into a cleaner working state." },
  { title: "Financial Reporting", text: "Clear Profit & Loss, Balance Sheet, and management reporting support." },
  { title: "Business Analysis", text: "Turn financial and operational data into practical business insights." },
];

const portfolio = [
  { tag: "QUICKBOOKS ONLINE", title: "Bookkeeping & Reconciliation Workflow", text: "Practice portfolio demonstrating transaction categorization, bank reconciliation, AP support, and financial reporting." },
  { tag: "XERO", title: "Full Accounting Cycle", text: "Practice portfolio covering transactions, invoices, bills, reconciliation, trial balance, Profit & Loss, and Balance Sheet reporting." },
  { tag: "ANALYTICS", title: "Financial & Business Analysis", text: "Practice analysis work using spreadsheet and dashboard methods to organize financial and business information." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-lg font-black text-white">A</div>
            <div>
              <div className="font-bold tracking-tight">Apex Business Solutions</div>
              <div className="text-xs text-slate-500">Bookkeeping • Accounting • Business Support</div>
            </div>
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold md:flex">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-200">
              Remote bookkeeping & business support
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Clear books. Better visibility. <span className="text-blue-400">Stronger decisions.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              QuickBooks Online and Xero bookkeeping support for small businesses that need organized records, reconciliations, AP/AR support, and useful financial reporting.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500">Request a Bookkeeping Review</a>
              <a href="#portfolio" className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold hover:bg-white/10">View Portfolio</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2">QuickBooks Online</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Xero</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Bank Reconciliation</span>
              <span className="rounded-full bg-white/10 px-4 py-2">AP / AR</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[.2em] text-slate-400">Apex dashboard</p>
                  <p className="mt-1 text-xl font-bold">Bookkeeping overview</p>
                </div>
                <div className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">READY</div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  ["01", "Transactions", "Organized"],
                  ["02", "Reconciliations", "Reviewed"],
                  ["03", "AP / AR", "Tracked"],
                  ["04", "Reports", "Prepared"],
                ].map(([n, t, s]) => (
                  <div key={n} className="rounded-2xl bg-white/[0.06] p-5">
                    <p className="text-xs text-slate-500">{n}</p>
                    <p className="mt-5 font-bold">{t}</p>
                    <p className="mt-1 text-sm text-blue-300">{s}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-blue-600 p-5">
                <p className="text-sm text-blue-100">Business focus</p>
                <p className="mt-1 text-2xl font-black">Accurate records → useful reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-6 sm:grid-cols-3">
          {[
            ["01", "Organize", "Keep financial records structured."],
            ["02", "Reconcile", "Check accounts and investigate differences."],
            ["03", "Understand", "Turn records into useful reports."],
          ].map(([n, t, d]) => (
            <div key={n} className="flex gap-4 rounded-2xl p-4">
              <span className="font-black text-blue-700">{n}</span>
              <div><p className="font-bold">{t}</p><p className="text-sm text-slate-500">{d}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-slate-50 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Services</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Practical support for your financial workflow.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Choose the support your business needs—from routine bookkeeping to cleanup, reconciliation, reporting, and analysis.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <article key={service.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">0{i + 1}</div>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-5 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">About Apex</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A focused business-support partner.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Apex Business Solutions is built around practical accounting and business support for organizations that want cleaner records and clearer information.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our approach combines structured bookkeeping workflows with cloud accounting and reporting tools, helping business owners spend less time sorting financial records and more time using them.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950 p-8 text-white">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Core capabilities</p>
            <div className="mt-7 space-y-5">
              {["QuickBooks Online & Xero workflows", "Bank and credit-card reconciliation", "Accounts payable & receivable support", "Financial reporting and business analysis"].map((x) => (
                <div key={x} className="flex gap-3 border-b border-white/10 pb-5">
                  <span className="text-blue-400">✓</span><span className="font-semibold">{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="bg-slate-50 px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Portfolio</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Work you can review.</h2>
            </div>
            <p className="max-w-xl text-slate-600">Selected practice projects demonstrate workflow, reconciliation, reporting, and analysis capabilities.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="h-2 bg-blue-700" />
                <div className="p-7">
                  <p className="text-xs font-black tracking-[.2em] text-blue-700">{item.tag}</p>
                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                  <span className="mt-7 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Practice / demo project</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-blue-700 px-7 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-200">Simple process</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">From financial records to useful information.</h2>
          <div className="mt-10 grid gap-8 text-left sm:grid-cols-3">
            {[
              ["1", "Review", "Understand your current bookkeeping needs."],
              ["2", "Organize", "Work through transactions and reconciliations."],
              ["3", "Report", "Prepare clear information for review and decisions."],
            ].map(([n,t,d]) => (
              <div key={n}><div className="text-3xl font-black">{n}</div><p className="mt-2 font-bold">{t}</p><p className="mt-1 text-sm text-blue-100">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-slate-950 px-5 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Contact</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Let's talk about your bookkeeping needs.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Tell us what you need help with and we can discuss the next step.</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="mailto:contact@apexbusinesssolutions.com?subject=Bookkeeping%20Inquiry" className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold hover:bg-blue-500">Email Apex Business Solutions</a>
            <a href="#portfolio" className="rounded-xl border border-white/15 px-7 py-3.5 text-center font-bold hover:bg-white/10">Review Portfolio</a>
          </div>
          <p className="mt-8 text-sm text-slate-500">Portfolio examples are practice/demo projects unless specifically stated otherwise.</p>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-white">Apex Business Solutions</p>
          <p>© {new Date().getFullYear()} Apex Business Solutions. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
