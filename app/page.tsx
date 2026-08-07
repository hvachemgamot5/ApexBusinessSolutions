export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white shadow">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

          <h1 className="text-xl font-bold text-blue-700">
            Apex Business Solutions
          </h1>

          <div className="hidden gap-6 md:flex">
            <a href="#" className="hover:text-blue-600">
              Home
            </a>

            <a href="#about" className="hover:text-blue-600">
              About
            </a>

            <a href="#services" className="hover:text-blue-600">
              Services
            </a>

            <a href="#portfolio" className="hover:text-blue-600">
              Portfolio
            </a>

            <a href="#certifications" className="hover:text-blue-600">
              Certifications
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </div>

        </div>
      </nav>
      {/* Hero Section */}
          </main>
  );
}
