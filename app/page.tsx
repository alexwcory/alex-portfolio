export default function Home() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-5xl mx-auto">
      <section className="mb-16">
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Software Engineer
        </p>

        <h1 className="text-5xl font-bold mt-4 mb-6">
          Alex Cory
        </h1>

        <p className="text-xl text-gray-700 max-w-3xl">
          I build real-time financial applications, data-driven forecasting
          systems, and blockchain/DeFi projects.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">
          Featured Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              Real-Time Financial Desktop App
            </h3>
            <p className="text-gray-600">
              Cross-platform desktop application work involving Rust, Qt/QML,
              OAuth, WebSockets, UI architecture, and performance optimization.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              NFL RB Volume Model
            </h3>
            <p className="text-gray-600">
              Forecasting model using play-by-play data, odds, roster context,
              PyTorch sequence modeling, LightGBM, and bucketed evaluation.
            </p>
          </div>

          <div className="border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-2">
              GreenWallet
            </h3>
            <p className="text-gray-600">
              Blockchain project exploring wallet behavior, DeFi identity,
              cross-chain activity, and Soulbound Token-based reputation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}