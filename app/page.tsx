import ContactEnquiryForm from "./contact-enquiry-form";

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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-sky-400 text-lg font-black text-white shadow-lg shadow-blue-500/25">A</div>
            <div>
              <div className="font-bold tracking-tight">Apex Business Solutions</div>
              <div className="text-xs text-slate-500">Bookkeeping • Accounting • Business Support</div>
            </div>
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-semibold">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#pricing" className="hover:text-blue-700">Pricing</a>
            <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
            <a href="#about" className="hover:text-blue-700">About</a>
            <a href="#contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-white hover:bg-blue-800">Contact</a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-sky-200 shadow-lg shadow-blue-950/20 backdrop-blur">
              Remote bookkeeping for small businesses
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              Remote Bookkeeping Services <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">for Small Businesses</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              QuickBooks Online and Xero bookkeeping support for businesses in India and worldwide. Keep your financial records organized with bank reconciliation, AP/AR support, bookkeeping cleanup, and clear monthly financial reports.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-xl bg-gradient-to-r from-blue-600 to-sky-500 px-7 py-3.5 text-center font-bold shadow-lg shadow-blue-950/30 hover:-translate-y-0.5 hover:shadow-blue-500/25">Request a Bookkeeping Review</a>
              <a href="#pricing" className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold hover:bg-white/10">View Our Pricing</a>
            </div>
            <div className="mt-9 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-white/10 px-4 py-2">QuickBooks Online</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Xero</span>
              <span className="rounded-full bg-white/10 px-4 py-2">Bank Reconciliation</span>
              <span className="rounded-full bg-white/10 px-4 py-2">AP / AR</span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/[0.08] p-6 shadow-2xl shadow-blue-950/40 backdrop-blur-md">
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

      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-blue-100 bg-white p-8 shadow-sm md:grid-cols-[1.2fr_.8fr] md:items-center md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Free initial consultation</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Are your books ready for better business decisions?</h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">Let Apex Business Solutions help you understand your bookkeeping needs and the support that may suit your business.</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>✓ Discuss your current bookkeeping process.</li>
              <li>✓ Identify areas that may need attention.</li>
              <li>✓ Explore suitable QuickBooks Online or Xero support.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-950 p-7 text-center text-white">
            <p className="text-xl font-bold">Take the first step</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">Tell us a little about your business and what bookkeeping support you need.</p>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-bold text-white hover:bg-blue-500">Request Your Free Bookkeeping Review</a>
            <p className="mt-4 text-xs leading-5 text-slate-400">No obligation to purchase. Initial consultation only; this is not a formal audit or verification of accounts.</p>
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
              <article key={service.title} className="group rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">0{i + 1}</div>
                <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
                {i === 0 && (
                  <a href="/quickbooks-bookkeeping" className="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">
                    Explore QuickBooks bookkeeping <span aria-hidden="true">→</span>
                  </a>
                )}
                {i === 1 && (
                  <div className="mt-5 flex flex-col items-start gap-3">
                    <a href="/bank-reconciliation" className="inline-flex font-bold text-blue-700 hover:text-blue-900">
                      Explore bank reconciliation <span aria-hidden="true">→</span>
                    </a>
                    <a href="/xero-bookkeeping" className="inline-flex font-bold text-blue-700 hover:text-blue-900">
                      Explore Xero bookkeeping <span aria-hidden="true">→</span>
                    </a>
                  </div>
                )}
                {i === 3 && (
                  <a href="/bookkeeping-cleanup" className="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">
                    Explore cleanup & catch-up <span aria-hidden="true">→</span>
                  </a>
                )}
                {i === 4 && (
                  <a href="/financial-reporting" className="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-900">
                    Explore financial reporting <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>


      <section id="pricing" className="bg-white px-5 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Introductory pricing</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Straightforward bookkeeping pricing.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Practical starting packages for small businesses in India and worldwide. Choose a plan based on your monthly bookkeeping needs.</p>
            <p className="mt-3 text-sm text-slate-500">USD pricing is for international clients; INR pricing is for clients in India. These are regional prices, not direct currency conversions.</p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">Starter</p>
              <h3 className="mt-4 text-3xl font-black">$99 <span className="text-base font-semibold text-slate-500">/ month</span></h3>
              <p className="mt-1 text-xl font-bold text-slate-700">₹2,499 <span className="text-sm font-medium text-slate-500">/ month</span></p>
              <p className="mt-4 text-sm text-slate-600">For small businesses with straightforward bookkeeping needs.</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-slate-600">
                <li>✓ Up to 50 transactions per month</li>
                <li>✓ One bank or credit-card account</li>
                <li>✓ Transaction categorization</li>
                <li>✓ Monthly reconciliation</li>
                <li>✓ Basic monthly financial reports</li>
              </ul>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Starter%20Bookkeeping%20Enquiry" className="mt-8 rounded-xl border border-blue-700 px-5 py-3 text-center font-bold text-blue-700 hover:bg-blue-50">Enquire about Starter</a>
            </article>

            <article className="relative flex flex-col rounded-3xl border-2 border-blue-600 bg-white p-7 shadow-lg shadow-blue-950/10">
              <span className="absolute right-6 top-6 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">Popular choice</span>
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">Growth</p>
              <h3 className="mt-4 text-3xl font-black">$149 <span className="text-base font-semibold text-slate-500">/ month</span></h3>
              <p className="mt-1 text-xl font-bold text-slate-700">₹3,999 <span className="text-sm font-medium text-slate-500">/ month</span></p>
              <p className="mt-4 text-sm text-slate-600">For growing businesses that need regular bookkeeping and AP/AR tracking.</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-slate-600">
                <li>✓ Up to 100 transactions per month</li>
                <li>✓ Up to two bank or credit-card accounts</li>
                <li>✓ Transaction categorization and reconciliation</li>
                <li>✓ Basic accounts payable and receivable tracking</li>
                <li>✓ Monthly financial reports</li>
              </ul>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Growth%20Bookkeeping%20Enquiry" className="mt-8 rounded-xl bg-blue-700 px-5 py-3 text-center font-bold text-white hover:bg-blue-800">Enquire about Growth</a>
            </article>

            <article className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-700">Business</p>
              <h3 className="mt-4 text-3xl font-black">$229 <span className="text-base font-semibold text-slate-500">/ month</span></h3>
              <p className="mt-1 text-xl font-bold text-slate-700">₹6,999 <span className="text-sm font-medium text-slate-500">/ month</span></p>
              <p className="mt-4 text-sm text-slate-600">For businesses with higher transaction volumes and broader reporting needs.</p>
              <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-slate-600">
                <li>✓ Up to 200 transactions per month</li>
                <li>✓ Up to three bank or credit-card accounts</li>
                <li>✓ Monthly reconciliation</li>
                <li>✓ Accounts payable and receivable tracking</li>
                <li>✓ Monthly financial reports</li>
                <li>✓ Basic management reporting</li>
              </ul>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Business%20Bookkeeping%20Enquiry" className="mt-8 rounded-xl border border-blue-700 px-5 py-3 text-center font-bold text-blue-700 hover:bg-blue-50">Enquire about Business</a>
            </article>
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">Additional bookkeeping services</h3>
              <p className="mt-3 text-slate-600">Need a one-time service or a tailored solution? Explore these starting prices.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="grid grid-cols-3 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700">
                <span>Service</span><span className="text-center">International</span><span className="text-right">India</span>
              </div>
              <div className="divide-y divide-slate-200 text-sm">
                <div className="grid grid-cols-3 gap-2 px-5 py-4"><span className="font-semibold">Bank reconciliation (one account)</span><span className="text-center">$20</span><span className="text-right">₹599</span></div>
                <div className="grid grid-cols-3 gap-2 px-5 py-4"><span className="font-semibold">Financial reporting</span><span className="text-center">$25</span><span className="text-right">₹999</span></div>
                <div className="grid grid-cols-3 gap-2 px-5 py-4"><span className="font-semibold">Hourly bookkeeping support</span><span className="text-center">$10/hour</span><span className="text-right">₹400/hour</span></div>
                <div className="grid grid-cols-3 gap-2 px-5 py-4"><span className="font-semibold">Cleanup &amp; catch-up</span><span className="text-center">Custom quote</span><span className="text-right">Custom quote</span></div>
                <div className="grid grid-cols-3 gap-2 px-5 py-4"><span className="font-semibold">QuickBooks / Xero setup</span><span className="text-center">Custom quote</span><span className="text-right">Custom quote</span></div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-slate-600">
            <h3 className="font-bold text-slate-900">Pricing information</h3>
            <ul className="mt-3 list-disc space-y-1 pl-5">
              <li>Introductory starting prices for our first clients; final fees depend on transaction volume, account numbers and bookkeeping complexity.</li>
              <li>Packages cover one business entity and the stated monthly limits. Additional accounts, entities or work are quoted separately.</li>
              <li>Historical cleanup and catch-up work require a separate quotation.</li>
              <li>Accounting software subscriptions are paid separately by the client.</li>
              <li>Payroll processing, tax filing, statutory audit and legal services are not included.</li>
              <li>Applicable taxes, if any, are additional.</li>
              <li>Scope and deliverables will be agreed before work begins.</li>
            </ul>
          </div>

          <div className="mt-10 rounded-3xl bg-slate-950 px-7 py-10 text-center text-white">
            <h3 className="text-2xl font-black sm:text-3xl">Not sure which package is right for you?</h3>
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">Request a free initial consultation. Tell us about your business and bookkeeping requirements, and we’ll discuss a suitable scope.</p>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=Free%20Bookkeeping%20Consultation" className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white hover:bg-blue-500">Request a Free Consultation</a>
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
                <div className="h-2 bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-500" />
                <div className="p-7">
                  <p className="text-xs font-black tracking-[.2em] text-blue-700">{item.tag}</p>
                  <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                  {item.tag === "QUICKBOOKS ONLINE" && (
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Illustrative P&amp;L snapshot</p>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="flex justify-between"><span className="text-slate-600">Revenue</span><strong>$25,000</strong></div>
                        <div className="flex justify-between"><span className="text-slate-600">Expenses</span><strong>$18,500</strong></div>
                        <div className="flex justify-between border-t border-slate-200 pt-3"><span className="font-bold text-slate-800">Net profit</span><strong className="text-green-700">$6,500</strong></div>
                      </div>
                    </div>
                  )}
                  {item.tag === "XERO" && (
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Illustrative balance sheet</p>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="flex justify-between"><span className="text-slate-600">Total assets</span><strong>$42,000</strong></div>
                        <div className="flex justify-between"><span className="text-slate-600">Liabilities</span><strong>$17,000</strong></div>
                        <div className="flex justify-between border-t border-slate-200 pt-3"><span className="font-bold text-slate-800">Equity</span><strong>$25,000</strong></div>
                      </div>
                    </div>
                  )}
                  {item.tag === "ANALYTICS" && (
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Illustrative reconciliation check</p>
                      <div className="mt-4 space-y-3 text-sm">
                        <div className="flex justify-between"><span className="text-slate-600">Bank statement</span><strong>$12,450</strong></div>
                        <div className="flex justify-between"><span className="text-slate-600">Book balance</span><strong>$12,450</strong></div>
                        <div className="flex justify-between border-t border-slate-200 pt-3"><span className="font-bold text-slate-800">Difference</span><strong className="text-green-700">$0</strong></div>
                      </div>
                    </div>
                  )}
                  <span className="mt-7 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">Practice / demo project — illustrative figures</span>
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
            <p className="mt-5 text-lg leading-8 text-slate-300">Complete the short enquiry form below. We’ll prepare an email so you can review your details and send your request through Gmail.</p>
          </div>
          <ContactEnquiryForm />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#portfolio" className="rounded-xl border border-white/15 px-7 py-3.5 text-center font-bold hover:bg-white/10">Review Portfolio</a>
          </div>
          <p className="mt-5 text-center text-sm text-slate-300 sm:text-left">
            Email: <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com" className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white">hvachemgamot5@gmail.com</a>
          </p>
          <div className="mt-3 flex flex-col gap-3 text-center text-sm text-slate-300 sm:flex-row sm:items-center sm:text-left">
            <p>Phone: <a href="tel:+919799040105" className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white" aria-label="Call Apex Business Solutions">+91 *******0105</a></p>
            <a href="https://wa.me/919799040105?text=Hello%20Apex%20Business%20Solutions%2C%20I%20am%20interested%20in%20your%20bookkeeping%20services.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20pricing%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-bold text-white hover:bg-green-500">Message us on WhatsApp</a>
          </div>
          <p className="mt-8 text-sm text-slate-500">Portfolio examples are practice/demo projects unless specifically stated otherwise.</p>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-slate-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-white">Apex Business Solutions</p>
          <div className="flex flex-wrap items-center gap-4">
            <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
            <p>© {new Date().getFullYear()} Apex Business Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
