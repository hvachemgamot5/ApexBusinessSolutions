export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold text-blue-700">
          Apex Business Solutions
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-gray-600">
          Professional Bookkeeping, Xero, QuickBooks, Payroll,
          Bank Reconciliation and Financial Reporting Services.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="rounded-lg bg-blue-600 px-6 py-3 text-white">
            Get Started
          </button>

          <button className="rounded-lg border border-blue-600 px-6 py-3 text-blue-600">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}