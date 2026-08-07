export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-700">
          Apex Business Solutions
        </h1>

        <h2 className="mt-5 max-w-4xl text-3xl font-semibold">
          Reliable Remote Bookkeeping & Accounting Support for Growing Businesses
        </h2>

        <p className="mt-6 max-w-3xl text-xl text-gray-600">
          Professional bookkeeping services powered by Xero and QuickBooks.
          We help businesses manage accounts, bank reconciliation, payroll,
          financial reporting, and day-to-day accounting operations with accuracy.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-blue-600 px-8 py-3 text-white hover:bg-blue-700"
          >
            Get Started
          </a>

          <a
            href="#services"
            className="rounded-lg border border-blue-600 px-8 py-3 text-blue-600 hover:bg-blue-50"
          >
            Our Services
          </a>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-4xl font-bold text-blue-700">
            About Apex Business Solutions
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Apex Business Solutions provides reliable remote bookkeeping and
            accounting support for small businesses, startups, and growing
            companies. Our focus is accurate records, timely reporting,
            and helping business owners make better financial decisions.
          </p>
        </div>
      </section>


      {/* Services Section */}
      <section id="services" className="px-6 py-20">
        <h2 className="text-center text-4xl font-bold text-blue-700">
          Our Services
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold text-blue-700">
              Xero Bookkeeping
            </h3>
            <p className="mt-3 text-gray-600">
              Bank reconciliation, transaction categorization,
              financial reports, and monthly bookkeeping support.
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold text-blue-700">
              QuickBooks Support
            </h3>
            <p className="mt-3 text-gray-600">
              QuickBooks setup, cleanup, account management,
              transaction review, and reporting.
            </p>
          </div>


          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="text-xl font-bold text-blue-700">
              Accounting Operations
            </h3>
            <p className="mt-3 text-gray-600">
              Accounts payable, accounts receivable,
              payroll support, and financial reporting.
            </p>
          </div>

        </div>
      </section>


      {/* Portfolio Section */}
      <section id="portfolio" className="bg-white px-6 py-20">

        <h2 className="text-center text-4xl font-bold text-blue-700">
          Portfolio & Practice Projects
        </h2>

        <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">

          <div className="rounded-xl border p-6">
            <h3 className="font-bold">
              Bank Reconciliation
            </h3>
            <p className="mt-2 text-gray-600">
              Completed reconciliation workflows and transaction matching
              using accounting software.
            </p>
          </div>


          <div className="rounded-xl border p-6">
            <h3 className="font-bold">
              Financial Reports
            </h3>
            <p className="mt-2 text-gray-600">
              Profit & Loss, Balance Sheet, and accounting analysis reports.
            </p>
          </div>


          <div className="rounded-xl border p-6">
            <h3 className="font-bold">
              Month-End Close
            </h3>
            <p className="mt-2 text-gray-600">
              Checklists and workflows for accurate monthly accounting closure.
            </p>
          </div>

        </div>

      </section>


      {/* Certifications Section */}
      <section id="certifications" className="px-6 py-20">

        <h2 className="text-center text-4xl font-bold text-blue-700">
          Certifications & Tools
        </h2>

        <div className="mx-auto mt-8 max-w-3xl text-center text-lg text-gray-600">

          <p>
            ✓ QuickBooks Online ProAdvisor Level 2
          </p>

          <p>
            ✓ Intuit Bookkeeping Certification
          </p>

          <p>
            ✓ Xero Bookkeeping Practice Experience
          </p>

          <p>
            ✓ Excel | Power BI | Tally Prime | Accounting Systems
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section id="contact" className="bg-blue-700 px-6 py-20 text-center text-white">

        <h2 className="text-4xl font-bold">
          Contact Apex Business Solutions
        </h2>

        <p className="mt-5 text-lg">
          Ready to improve your bookkeeping and accounting workflow?
          Let's connect.
        </p>

        <a
          href="mailto:hvachemgamot5@gmail.com"
          className="mt-8 inline-block rounded-lg bg-white px-8 py-3 text-blue-700"
        >
          Contact Us
        </a>

      </section>

    </main>
  );
}