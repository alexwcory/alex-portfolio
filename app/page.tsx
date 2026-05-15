import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-5xl mx-auto">
      <section className="mb-16">
        <p className="text-sm uppercase tracking-wide text-gray-700 dark:text-gray-300">
          Software Engineer
        </p>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Alex Cory
        </h1>

        <p className="text-xl text-gray-800 dark:text-gray-200 max-w-3xl">
          I build data-intensive financial products, reproducible ingestion
          pipelines, and forecasting systems from messy real-world datasets.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Real-Time Financial Desktop App
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              Cross-platform desktop application work involving Rust, Qt/QML,
              OAuth, WebSockets, UI architecture, and performance optimization.
            </p>
          </div>

          <Link
            href="/rb-volume-model"
            className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6 block transition hover:border-gray-500 dark:hover:border-gray-400 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
          >
            <h3 className="text-xl font-semibold mb-2">
              NFL RB Volume Model
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              End-to-end ingestion and modeling pipeline spanning multi-source
              parsing, normalization, data quality checks, and NFL rush-attempt
              forecasting.
            </p>
          </Link>

          <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              GreenWallet
            </h3>
            <p className="text-gray-800 dark:text-gray-200">
              Blockchain project exploring wallet behavior, DeFi identity,
              cross-chain activity, and Soulbound Token-based reputation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}