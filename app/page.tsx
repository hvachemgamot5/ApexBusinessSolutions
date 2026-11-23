
import ContactEnquiryForm from "./contact-enquiry-form";

const services = [
  { title: "Monthly Bookkeeping", text: "Accurate transaction recording and organized books for better day-to-day visibility.", link: "/quickbooks-bookkeeping", linkText: "Explore QuickBooks bookkeeping" },
  { title: "Bank & Credit Card Reconciliation", text: "Match accounts, investigate differences, and keep balances reliable.", link: "/bank-reconciliation", linkText: "Explore bank reconciliation" },
  { title: "Accounts Payable & Receivable", text: "Support for bills, invoices, payments, collections, and customer balances." },
  { title: "Cleanup & Catch-up", text: "Bring disorganized or overdue bookkeeping records into a cleaner working state.", link: "/bookkeeping-cleanup", linkText: "Explore cleanup services" },
  { title: "Financial Reporting", text: "Clear Profit & Loss, Balance Sheet, and management reporting support.", link: "/financial-reporting", linkText: "Explore financial reporting" },
  { title: "Business Analysis", text: "Turn financial and operational data into practical business insights." },
];

const portfolio = [
  { tag: "QUICKBOOKS ONLINE", title: "Bookkeeping & Reconciliation Workflow", text: "Practice portfolio demonstrating transaction categorization, bank reconciliation, AP support, and financial reporting." },
  { tag: "XERO", title: "Full Accounting Cycle", text: "Practice portfolio covering transactions, invoices, bills, reconciliation, trial balance, Profit & Loss, and Balance Sheet reporting." },
  { tag: "ANALYTICS", title: "Financial & Business Analysis", text: "Practice analysis work using spreadsheet and dashboard methods to organize financial and business information." },
];

const packages = [
  {
    name: "Starter",
    usd: "$99",
    inr: "₹2,499",
    description: "For small businesses with straightforward bookkeeping needs.",
    features: [
      "Up to 50 transactions per month",
      "One bank or credit-card account",
      "Transaction categorization",
      "Monthly reconciliation",
      "Basic monthly financial reports",
    ],
    subject: "Starter Bookkeeping Enquiry",
  },
  {
    name: "Growth",
    usd: "$149",
    inr: "₹3,999",
    description: "For growing businesses that need regular bookkeeping and AP/AR tracking.",
    features: [
      "Up to 100 transactions per month",
      "Up to two bank or credit-card accounts",
      "Transaction categorization and reconciliation",
      "Basic accounts payable and receivable tracking",
      "Monthly financial reports",
    ],
    subject: "Growth Bookkeeping Enquiry",
    popular: true,
  },
  {
    name: "Business",
    usd: "$229",
    inr: "₹6,999",
    description: "For businesses with higher transaction volumes and broader reporting needs.",
    features: [
      "Up to 200 transactions per month",
      "Up to three bank or credit-card accounts",
      "Monthly reconciliation",
      "Accounts payable and receivable tracking",
      "Monthly financial reports",
      "Basic management reporting",
    ],
    subject: "Business Bookkeeping Enquiry",
  },
];

const emailLink = (subject: string) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com&su=${encodeURIComponent(subject)}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-700 to-sky-400 text-xl font-black text-white shadow-lg shadow-blue-900/20">
              A
            </div>
            <div>
              <div className="font-extrabold tracking-tight text-slate-950">Apex Business Solutions</div>
              <div className="text-xs text-slate-500">Bookkeeping • Accounting • Business Support</div>
            </div>
          </a>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700">
            <a href="#services" className="transition hover:text-blue-700">Services</a>
            <a href="#pricing" className="transition hover:text-blue-700">Pricing</a>
            <a href="#portfolio" className="transition hover:text-blue-700">Portfolio</a>
            <a href="#about" className="transition hover:text-blue-700">About</a>
            <a href="#contact" className="rounded-full bg-blue-700 px-5 py-2.5 text-white transition hover:bg-blue-800">
              Contact us
            </a>
          </div>
        </div>
      </nav>

      <section id="home" className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-sky-200">
              Remote bookkeeping for small businesses
            </div>
            <h1 className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Clearer Books.
              <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
                Better Business Decisions.
              </span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Remote QuickBooks Online and Xero bookkeeping support for businesses in India and worldwide. Get help with bank reconciliation, AP/AR, bookkeeping cleanup, and clear monthly financial reports.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="rounded-xl bg-blue-600 px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-blue-950/30 transition hover:-translate-y-0.5 hover:bg-blue-500">
                Request a Bookkeeping Review
              </a>
              <a href="#services" className="rounded-xl border border-white/20 px-7 py-3.5 text-center font-bold text-white transition hover:bg-white/10">
                Explore Our Services
              </a>
            </div>
            <div className="mt-9 flex flex-wrap gap-2 text-sm">
              {["QuickBooks Online", "Xero", "Bank Reconciliation", "AP / AR"].map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-slate-200">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-6 shadow-2xl shadow-blue-950/40 backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs uppercase tracking-[.2em] text-slate-400">Apex workflow</p>
                  <p className="mt-1 text-xl font-bold">Bookkeeping overview</p>
                </div>
                <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-300">OUR APPROACH</span>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  ["01", "Transactions", "Organized"],
                  ["02", "Reconciliations", "Reviewed"],
                  ["03", "AP / AR", "Tracked"],
                  ["04", "Reports", "Prepared"],
                ].map(([number, title, status]) => (
                  <div key={number} className="rounded-2xl border border-white/5 bg-white/[0.06] p-4 sm:p-5">
                    <p className="text-xs text-slate-500">{number}</p>
                    <p className="mt-5 font-bold">{title}</p>
                    <p className="mt-1 text-sm text-blue-300">{status}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-600 p-5">
                <p className="text-sm text-blue-100">Our focus</p>
                <p className="mt-1 text-xl font-black sm:text-2xl">Accurate records → useful reports</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-3xl border border-blue-100 bg-white p-7 shadow-sm md:grid-cols-[1.2fr_.8fr] md:items-center md:p-12">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Free initial consultation</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Are your books ready for better business decisions?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Let's discuss your bookkeeping needs and identify the type of support that may suit your business.
            </p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-700">
              <li>✓ Discuss your current bookkeeping process.</li>
              <li>✓ Identify areas that may need attention.</li>
              <li>✓ Explore suitable QuickBooks Online or Xero support.</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-slate-950 p-7 text-center text-white">
            <p className="text-xl font-bold">Take the first step</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Tell us a little about your business and the bookkeeping support you need.
            </p>
            <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-xl bg-blue-600 px-6 py-3.5 font-bold transition hover:bg-blue-500">
              Request Your Free Review
            </a>
            <p className="mt-4 text-xs leading-5 text-slate-400">
              No obligation to purchase. Initial consultation only; this is not a formal audit or verification of accounts.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-7 sm:grid-cols-3">
          {[
            ["01", "Organize", "Keep financial records structured."],
            ["02", "Reconcile", "Check accounts and investigate differences."],
            ["03", "Understand", "Turn records into useful reports."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-4 rounded-2xl p-4">
              <span className="font-black text-blue-700">{number}</span>
              <div>
                <p className="font-bold text-slate-900">{title}</p>
                <p className="text-sm text-slate-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">What we do</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Practical support for your financial workflow.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Choose the support your business needs—from routine bookkeeping to cleanup, reconciliation, reporting, and analysis.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <article key={service.title} className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-950/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 font-black text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-6 text-xl font-bold text-slate-950">{service.title}</h3>
                <p className="mt-3 flex-1 leading-7 text-slate-600">{service.text}</p>
                {service.link && (
                  <a href={service.link} className="mt-5 inline-flex items-center gap-2 font-bold text-blue-700 transition hover:text-blue-900">
                    {service.linkText} <span aria-hidden="true">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 bg-white px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Introductory pricing</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              Straightforward bookkeeping pricing.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Practical starting packages for small businesses in India and worldwide. Choose a plan based on your monthly bookkeeping needs.
            </p>
            <p className="mt-3 text-sm text-slate-500">
              USD pricing is for international clients; INR pricing is for clients in India. These are regional prices, not direct currency conversions.
            </p>
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-3">
            {packages.map((plan) => (
              <article key={plan.name} className={`relative flex flex-col rounded-3xl bg-white p-7 ${plan.popular ? "border-2 border-blue-600 shadow-xl shadow-blue-950/10" : "border border-slate-200 shadow-sm"}`}>
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-700">
                    Popular choice
                  </span>
                )}
                <p className="text-sm font-bold uppercase tracking-wider text-blue-700">{plan.name}</p>
                <h3 className="mt-5 text-3xl font-black text-slate-950">
                  {plan.usd} <span className="text-base font-semibold text-slate-500">/ month</span>
                </h3>
                <p className="mt-1 text-xl font-bold text-slate-700">{plan.inr} <span className="text-sm font-medium text-slate-500">/ month</span></p>
                <p className="mt-4 min-h-12 text-sm leading-6 text-slate-600">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-3 text-sm leading-6 text-slate-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2">
                      <span className="font-bold text-blue-700">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a href={emailLink(plan.subject)} className={`mt-8 rounded-xl px-5 py-3 text-center font-bold transition ${plan.popular ? "bg-blue-700 text-white hover:bg-blue-800" : "border border-blue-700 text-blue-700 hover:bg-blue-50"}`}>
                  Enquire about {plan.name}
                </a>
              </article>
            ))}
          </div>

          <div className="mt-16">
            <div className="mx-auto max-w-3xl text-center">
              <h3 className="text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">Additional bookkeeping services</h3>
              <p className="mt-3 text-slate-600">Need a one-time service or a tailored solution? Explore these starting prices.</p>
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200">
              <div className="hidden grid-cols-3 bg-slate-100 px-5 py-4 text-sm font-bold text-slate-700 sm:grid">
                <span>Service</span><span className="text-center">International</span><span className="text-right">India</span>
              </div>
              <div className="divide-y divide-slate-200">
                {[
                  ["Bank reconciliation (one account)", "$20", "₹599"],
                  ["Financial reporting", "$25", "₹999"],
                  ["Hourly bookkeeping support", "$10/hour", "₹400/hour"],
                  ["Cleanup & catch-up", "Custom quote", "Custom quote"],
                  ["QuickBooks / Xero setup", "Custom quote", "Custom quote"],
                ].map(([service, international, india]) => (
                  <div key={service} className="grid grid-cols-2 gap-2 px-5 py-4 text-sm sm:grid-cols-3">
                    <span className="col-span-2 font-semibold text-slate-800 sm:col-span-1">{service}</span>
                    <span className="text-slate-600 sm:text-center">{international}</span>
                    <span className="text-right text-slate-600">{india}</span>
                  </div>
                ))}
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
            <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-300">
              Request a free initial consultation. Tell us about your business and bookkeeping requirements, and we'll discuss a suitable scope.
            </p>
            <a href={emailLink("Free Bookkeeping Consultation")} className="mt-6 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white transition hover:bg-blue-500">
              Request a Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-5 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">About Apex</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              A focused business-support partner.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Apex Business Solutions is built around practical accounting and business support for organizations that want cleaner records and clearer information.
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              Our approach combines structured bookkeeping workflows with cloud accounting and reporting tools, helping business owners spend less time sorting financial records and more time using them.
            </p>
          </div>
          <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Core capabilities</p>
            <div className="mt-7 space-y-5">
              {[
                "QuickBooks Online & Xero workflows",
                "Bank and credit-card reconciliation",
                "Accounts payable & receivable support",
                "Financial reporting and business analysis",
              ].map((item) => (
                <div key={item} className="flex gap-3 border-b border-white/10 pb-5">
                  <span className="font-bold text-blue-400">✓</span>
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="scroll-mt-24 bg-slate-50 px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-700">Portfolio</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">Work you can review.</h2>
            </div>
            <p className="max-w-xl leading-7 text-slate-600">
              Selected practice projects demonstrate workflow, reconciliation, reporting, and analysis capabilities.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {portfolio.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-2 bg-gradient-to-r from-blue-700 via-sky-500 to-indigo-500" />
                <div className="p-7">
                  <p className="text-xs font-black tracking-[.2em] text-blue-700">{item.tag}</p>
                  <h3 className="mt-4 text-2xl font-bold text-slate-950">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600">{item.text}</p>

                  {item.tag === "QUICKBOOKS ONLINE" && (
                    <div className="mt-6 rounded-2xl bg-slate-50 p-5">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Illustrative P&L snapshot</p>
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
                  <span className="mt-7 inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                    Practice / demo project — illustrative figures
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-800 to-blue-700 px-7 py-14 text-center text-white sm:px-12">
          <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-200">Simple process</p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">From financial records to useful information.</h2>
          <div className="mt-10 grid gap-8 text-left sm:grid-cols-3">
            {[
              ["1", "Review", "Understand your current bookkeeping needs."],
              ["2", "Organize", "Work through transactions and reconciliations."],
              ["3", "Report", "Prepare clear information for review and decisions."],
            ].map(([number, title, description]) => (
              <div key={number}>
                <div className="text-3xl font-black text-blue-200">{number}</div>
                <p className="mt-2 font-bold">{title}</p>
                <p className="mt-1 text-sm leading-6 text-blue-100">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 bg-slate-950 px-5 py-20 text-white sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[.2em] text-blue-400">Contact</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-5xl">
              Let's talk about your bookkeeping needs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Complete the short enquiry form below. We'll prepare an email so you can review your details and send your request through Gmail.
            </p>
          </div>

          <ContactEnquiryForm />

          <div className="mt-8">
            <a href="#portfolio" className="inline-flex rounded-xl border border-white/15 px-7 py-3.5 text-center font-bold transition hover:bg-white/10">
              Review Portfolio
            </a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-7">
            <p className="text-sm text-slate-300">
              Email:{" "}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=hvachemgamot5%40gmail.com" className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white">
                hvachemgamot5@gmail.com
              </a>
            </p>
            <div className="mt-4 flex flex-col gap-4 text-sm text-slate-300 sm:flex-row sm:items-center">
              <p>
                Phone:{" "}
                <a href="tel:+919799040105" className="font-semibold text-blue-300 underline underline-offset-4 hover:text-white" aria-label="Call Apex Business Solutions">
                  +91 *******0105
                </a>
              </p>
              <a href="https://wa.me/919799040105?text=Hello%20Apex%20Business%20Solutions%2C%20I%20am%20interested%20in%20your%20bookkeeping%20services.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20pricing%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-500">
                Message us on WhatsApp
              </a>
            </div>
          </div>
          <p className="mt-8 text-sm text-slate-500">
            Portfolio examples are practice/demo projects unless specifically stated otherwise.
          </p>
        </div>
      </section>

      <footer className="bg-black px-5 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-bold text-white">Apex Business Solutions</p>
            <p className="mt-1 text-xs text-slate-500">Bookkeeping • Accounting • Business Support</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a href="#home" className="transition hover:text-white">Back to top</a>
            <a href="/privacy-policy" className="transition hover:text-white">Privacy Policy</a>
            <p>© {new Date().getFullYear()} Apex Business Solutions. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
