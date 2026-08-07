export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-blue-700">
          Apex Business Solutions
        </h1>

        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
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

        <div className="mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="font-bold text-blue-700">
              Xero Bookkeeping
            </h3>
            <p className="mt-2 text-gray-600">
              Bank reconciliation, reports, and monthly bookkeeping.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="font-bold text-blue-700">
              QuickBooks Support
            </h3>
            <p className="mt-2 text-gray-600">
              Setup, cleanup, transaction management, and reporting.
            </p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow">
            <h3 className="font-bold text-blue-700">
              Financial Reporting
            </h3>
            <p className="mt-2 text-gray-600">
              Clear insights through accurate financial statements.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}