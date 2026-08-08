
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* =========================
          NAVIGATION
      ========================== */}
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 font-bold text-white">
              A
            </div>

            <div>
              <p className="text-lg font-bold text-slate-900">
                Apex Business Solutions
              </p>
              <p className="text-xs text-slate-500">
                Finance • Business • Advisory
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-blue-700">
              Home
            </a>

            <a href="#about" className="transition hover:text-blue-700">
              About
            </a>

            <a href="#services" className="transition hover:text-blue-700">
              Services
            </a>

            <a href="#portfolio" className="transition hover:text-blue-700">
              Portfolio
            </a>

            <a href="#certifications" className="transition hover:text-blue-700">
              Certifications
            </a>

            <a
              href="#contact"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-white transition hover:bg-blue-800"
            >
              Contact
            </a>
          </div>

        </div>
      </nav>


      {/* =========================
          HERO
      ========================== */}
      <section
        id="home"
        className="relative overflow-hidden bg-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:py-32">

          <div>

            <p className="mb-5 inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Professional Business Support
            </p>

            <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl">
              Business Solutions That Help Your Company
              <span className="text-blue-700"> Move Forward.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Apex Business Solutions provides professional accounting,
              bookkeeping, financial reporting, business administration,
              and technology-enabled support for businesses of all sizes.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">

              <a
                href="#contact"
                className="rounded-lg bg-blue-700 px-7 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-blue-800"
              >
                Get Started
              </a>

              <a
                href="#portfolio"
                className="rounded-lg border border-slate-300 bg-white px-7 py-3.5 text-center font-semibold text-slate-700 transition hover:border-blue-700 hover:text-blue-700"
              >
                View Our Work
              </a>

            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm text-slate-600">

              <div>
                <span className="font-bold text-slate-900">Finance</span>
                <br />
                Accounting Support
              </div>

              <div>
                <span className="font-bold text-slate-900">Technology</span>
                <br />
                Digital Solutions
              </div>

              <div>
                <span className="font-bold text-slate-900">Business</span>
                <br />
                Operational Support
              </div>

            </div>

          </div>


          {/* Hero visual */}
          <div className="relative">

            <div className="rounded-3xl bg-slate-900 p-8 shadow-2xl">

              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">
                    Business Overview
                  </p>

                  <p className="mt-1 text-2xl font-bold text-white">
                    Financial & Business Support
                  </p>
                </div>

                <div className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white">
                  APEX
                </div>
              </div>


              <div className="grid gap-4 sm:grid-cols-2">

                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">
                    Bookkeeping
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Organized
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-4/5 rounded-full bg-blue-500" />
                  </div>
                </div>


                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">
                    Reporting
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Insightful
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-3/4 rounded-full bg-blue-500" />
                  </div>
                </div>


                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">
                    Operations
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Efficient
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-5/6 rounded-full bg-blue-500" />
                  </div>
                </div>


                <div className="rounded-xl bg-white/10 p-5">
                  <p className="text-sm text-slate-400">
                    Business
                  </p>

                  <p className="mt-2 text-lg font-bold text-white">
                    Supported
                  </p>

                  <div className="mt-4 h-2 rounded-full bg-slate-700">
                    <div className="h-2 w-4/5 rounded-full bg-blue-500" />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          TRUST STRIP
      ========================== */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:grid-cols-3">

          <div className="text-center">
            <p className="text-2xl font-bold text-blue-700">
              Finance
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Bookkeeping & Accounting Support
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-blue-700">
              Business
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Administrative & Operational Support
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-blue-700">
              Technology
            </p>

            <p className="mt-1 text-sm text-slate-600">
              Data & Digital Business Solutions
            </p>
          </div>

        </div>
      </section>


      {/* =========================
          ABOUT
      ========================== */}
      <section id="about" className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-semibold uppercase tracking-widest text-blue-700">
              About Apex
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
              One Partner. Multiple Business Solutions.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Apex Business Solutions is focused on helping businesses
              manage their financial, administrative, and operational
              requirements through practical and technology-enabled
              solutions.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              From bookkeeping and financial reporting to business
              administration and data-driven support, our objective is
              to provide dependable services that help businesses stay
              organized and make informed decisions.
            </p>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="text-3xl">01</div>

              <h3 className="mt-5 text-xl font-bold">
                Professional
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Structured processes and professional business support.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="text-3xl">02</div>

              <h3 className="mt-5 text-xl font-bold">
                Technology-Enabled
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Modern accounting, reporting, data, and digital tools.
              </p>
            </div>


            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="text-3xl">03</div>

              <h3 className="mt-5 text-xl font-bold">
                Business-Focused
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Solutions designed around practical business needs.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          SERVICES
      ========================== */}
      <section id="services" className="bg-slate-50 px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Our Services
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Comprehensive Business Support
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Flexible services covering finance, administration,
              reporting, and business operations.
            </p>

          </div>


          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                title: "Bookkeeping",
                text: "Organized recording and management of business financial transactions.",
              },
              {
                title: "Accounting Support",
                text: "Practical support for accounts payable, receivable, reconciliations, and financial records.",
              },
              {
                title: "Financial Reporting",
                text: "Clear financial reports including Profit & Loss and Balance Sheet reporting.",
              },
              {
                title: "Business Administration",
                text: "Administrative support designed to keep business processes organized.",
              },
              {
                title: "Accounts Payable",
                text: "Supplier bills, payments, records, and payable workflow support.",
              },
              {
                title: "Accounts Receivable",
                text: "Customer invoicing, payment tracking, and receivables support.",
              },
              {
                title: "Budgeting & Planning",
                text: "Financial planning and budgeting support for business decision-making.",
              },
              {
                title: "Data & Business Analysis",
                text: "Excel, Power BI, and data-driven reporting for better business insight.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 font-bold text-blue-700">
                  A
                </div>

                <h3 className="mt-6 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          TECHNOLOGY
      ========================== */}
      <section className="bg-slate-900 px-6 py-24 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="font-semibold uppercase tracking-widest text-blue-400">
              Technology
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Modern Tools for Modern Businesses
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-300">
              We use widely adopted business, accounting, reporting,
              and data tools to support efficient workflows.
            </p>

          </div>


          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "QuickBooks Online",
              "Xero",
              "Microsoft Excel",
              "Power BI",
              "Tally Prime",
              "Data & Reporting Tools",
            ].map((tool) => (
              <div
                key={tool}
                className="rounded-xl border border-slate-700 bg-slate-800 p-5"
              >
                <p className="font-semibold">
                  {tool}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          PORTFOLIO
      ========================== */}
      <section id="portfolio" className="bg-white px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Portfolio
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Demonstrated Work
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Selected practice projects demonstrating accounting,
              bookkeeping, reconciliation, and financial reporting
              capabilities.
            </p>

          </div>


          <div className="mt-14 grid gap-8 lg:grid-cols-3">

            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

              <div className="bg-blue-700 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Xero
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Full Accounting Cycle
                </h3>
              </div>

              <div className="p-7">

                <p className="leading-7 text-slate-600">
                  Practice project covering transactions, invoices,
                  bills, bank reconciliation, trial balance, Profit &
                  Loss, and Balance Sheet reporting.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Reconciliation
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    P&L
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Balance Sheet
                  </span>
                </div>

              </div>

            </div>


            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

              <div className="bg-slate-900 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  QuickBooks
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Bookkeeping Workflow
                </h3>
              </div>

              <div className="p-7">

                <p className="leading-7 text-slate-600">
                  Practice workflow covering transaction categorization,
                  account reconciliation, accounts payable, and
                  financial reporting.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    QBO
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Bookkeeping
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Reporting
                  </span>
                </div>

              </div>

            </div>


            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">

              <div className="bg-blue-700 p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
                  Analytics
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Financial Analysis
                </h3>
              </div>

              <div className="p-7">

                <p className="leading-7 text-slate-600">
                  Business data organized into useful reports to
                  understand revenue, expenses, profitability, and
                  financial trends.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Excel
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Power BI
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium">
                    Analysis
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================
          CERTIFICATIONS
      ========================== */}
      <section
        id="certifications"
        className="bg-slate-50 px-6 py-24"
      >

        <div className="mx-auto max-w-7xl">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Credentials
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Professional Certifications
            </h2>

          </div>


          <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "QuickBooks Online ProAdvisor — Level 2",
              "Intuit Bookkeeping Certification",
              "Google Professional Project Management",
              "IBM IT Project Management",
              "Google Cybersecurity",
              "AI & Data Analytics Training",
            ].map((certification) => (
              <div
                key={certification}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-700">
                  ✓
                </div>

                <h3 className="mt-5 font-bold leading-6">
                  {certification}
                </h3>

              </div>
            ))}

          </div>

        </div>
      </section>


      {/* =========================
          CTA
      ========================== */}
      <section className="bg-blue-700 px-6 py-20 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <p className="font-semibold uppercase tracking-widest text-blue-200">
            Let's Work Together
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-5xl">
            Focus on Your Business.
            <br />
            We'll Help With the Rest.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Whether you need accounting support, bookkeeping,
            financial reporting, administration, or business analysis,
            Apex Business Solutions is ready to help.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-block rounded-lg bg-white px-8 py-3.5 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Start a Conversation
          </a>

        </div>

      </section>


      {/* =========================
          CONTACT
      ========================== */}
      <section id="contact" className="bg-white px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="text-center">

            <p className="font-semibold uppercase tracking-widest text-blue-700">
              Contact
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-5xl">
              Let's Discuss Your Business Needs
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Tell us what your business needs and let's explore
              how Apex Business Solutions can provide practical support.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <a
              href="mailto:contact@apexbusinesssolutions.com"
              className="rounded-2xl border border-slate-200 p-7 text-center transition hover:border-blue-700 hover:shadow-lg"
            >
              <p className="font-semibold text-blue-700">
                Email
              </p>

              <p className="mt-2 text-sm text-slate-600">
                contact@apexbusinesssolutions.com
              </p>
            </a>


            <a
              href="#home"
              className="rounded-2xl border border-slate-200 p-7 text-center transition hover:border-blue-700 hover:shadow-lg"
            >
              <p className="font-semibold text-blue-700">
                Online Support
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Remote business support
              </p>
            </a>


            <a
              href="#portfolio"
              className="rounded-2xl border border-slate-200 p-7 text-center transition hover:border-blue-700 hover:shadow-lg"
            >
              <p className="font-semibold text-blue-700">
                Portfolio
              </p>

              <p className="mt-2 text-sm text-slate-600">
                View our demonstrated work
              </p>
            </a>

          </div>

        </div>
      </section>


      {/* =========================
          FOOTER
      ========================== */}
      <footer className="bg-slate-950 px-6 py-10 text-slate-400">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

          <div>
            <p className="font-bold text-white">
              Apex Business Solutions
            </p>

            <p className="mt-1 text-sm">
              Finance • Business • Advisory
            </p>
          </div>

          <p className="text-sm">
            © {new Date().getFullYear()} Apex Business Solutions.
            All rights reserved.
          </p>

        </div>

      </footer>

    </main>
  );
}

