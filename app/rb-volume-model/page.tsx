export default function RbVolumeModelPage() {
  return (
    <main className="min-h-screen px-8 py-16 max-w-4xl mx-auto text-gray-900 dark:text-gray-100">
      <article className="space-y-10">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            NFL Rush Attempts Prediction Engine
          </h1>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            A production-style sports analytics system combining external data
            ingestion, parsing and normalization workflows, schema-aware quality
            checks, and a hybrid modeling stack (PyTorch + LightGBM). It is
            built to turn heterogeneous raw feeds into analysis-ready assets
            for NFL running back rush attempt research.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">The Problem</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Sportsbooks set lines for player props like &quot;will Derrick Henry
            get over/under 14.5 carries?&quot; using a blend of recency, public
            betting sentiment, and internal models. The goal here was to answer
            a more disciplined question: given everything we can observe
            objectively - game script, weather, opponent rush defense, depth
            chart, injury reports, and a player&apos;s recent usage trends - what
            does the distribution of carries actually look like, and is there a
            systematic gap between that and the posted line?
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            This is not a trivial regression. Carry totals are noisy,
            context-dependent, non-stationary (coaching changes, injuries, game
            flow), and correlated across teammates sharing a backfield. Any
            model that ignores the temporal structure of a player&apos;s usage over
            prior weeks will leave signal on the table.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Architecture: TCN + LightGBM Hybrid
          </h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The core prediction stack is a two-stage hybrid model trained on
            NFL play-by-play data from 2019-2024.
          </p>
          <div className="space-y-4">
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Stage 1 - Temporal Convolutional Network (PyTorch)
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                A causal TCN encoder processes the last 6 weeks of per-player
                sequence features (carries, snap share, target share, rushing
                yards, game script, matchup quality, and more) into a
                64-dimensional embedding. The sequence window is zero-padded on
                the left for early-season games, preserving temporal integrity
                without leaking future data. This gives the model a compact
                representation of how the player has been used lately.
              </p>
            </div>
            <div className="border border-gray-300 dark:border-gray-600 rounded-2xl p-5">
              <h3 className="text-xl font-semibold mb-2">
                Stage 2 - LightGBM Regressor
              </h3>
              <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
                The 64-d embedding is concatenated with game context features -
                team spread, over/under, wind speed (dome-adjusted), opponent
                rush yards allowed, opponent EPA allowed per rush, depth chart
                rank, injury flags, and projected starter status - then fed
                into a LightGBM booster trained with MAE loss. This hybrid lets
                the sequence model capture temporal patterns while the GBDT
                handles structured tabular signal efficiently.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Results on 2024 Holdout</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>Overall test MAE: ~3.01 carries, RMSE: ~4.32</li>
            <li>
              Starter-focused slice (predicted or actual &gt; 8 carries): MAE
              ~4.40, RMSE ~5.72
            </li>
            <li>
              The model is intentionally conservative on high-volume outlier
              games (20+ carries), avoiding over-betting rare tail events.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Data Pipeline</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The system ingests from six distinct sources and fuses them into a
            single player-game panel with reproducible transformation logic.
          </p>
          <div className="overflow-x-auto border border-gray-300 dark:border-gray-600 rounded-2xl">
            <table className="w-full text-left text-sm text-gray-900 dark:text-gray-100">
              <thead className="bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-600">
                <tr>
                  <th className="px-4 py-3 font-semibold">Source</th>
                  <th className="px-4 py-3 font-semibold">What it provides</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-3">nflverse (via nfl_data_py)</td>
                  <td className="px-4 py-3">
                    Play-by-play, schedules, rosters, depth charts
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-3">AusSportsBetting</td>
                  <td className="px-4 py-3">
                    Historical game-level odds (spread, total)
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-3">Open-Meteo</td>
                  <td className="px-4 py-3">
                    3-hour historical weather cache keyed to stadium locations
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-3">The Odds API</td>
                  <td className="px-4 py-3">
                    Live game odds + player rush attempts props, appended weekly
                  </td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-600">
                  <td className="px-4 py-3">Madden ratings</td>
                  <td className="px-4 py-3">
                    Offensive line ratings, defensive personnel grades
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3">ESPN</td>
                  <td className="px-4 py-3">
                    Live injury reports and roster snapshots
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Heavy team-name normalization handles historical NFL franchise
            movement (LA/LAR, OAK/LV, SD/LAC, WAS/WSH, etc.) across sources
            with inconsistent naming conventions.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Wind speed is dome-adjusted (set to 0 for enclosed venues), and
            weather lookups are time-aligned to within 3 hours of kickoff.
          </p>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The final modeling layer is stored as analytics-ready parquet,
            with consistent field naming, deterministic cleaning rules, and
            validation checks for missing values, schema shifts, and upstream
            source anomalies.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Weekly Inference Pipeline</h2>
          <ol className="list-decimal pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>
              Odds ingestion - pull current player rush attempts lines from The
              Odds API, storing per-event odds history JSON by matchup.
            </li>
            <li>
              Context assembly - pull injury statuses, depth charts, and game
              weather forecasts; then normalize identifiers across sources.
            </li>
            <li>
              Feature construction - run reproducible joins against the
              historical parquet panel to produce model-ready rows with each
              player&apos;s last 6 weeks of sequence history.
            </li>
            <li>
              Inference + edge scoring - reload trained artifacts (scaler, TCN
              weights, LightGBM booster), generate predicted carries, compare
              against posted lines, and emit OVER / UNDER / NO EDGE with the
              best available book price.
            </li>
          </ol>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            The output is a <code>predictions_curr.json</code> file with
            per-player records including predicted carries, model confidence
            context, edge vs. the line, and book-specific pricing so decisions
            can be made mechanically.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Data Acquisition Engineering Relevance
          </h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>
              End-to-end dataset onboarding: ingest raw feeds, parse fields,
              normalize entities, and publish structured outputs.
            </li>
            <li>
              Reproducible ETL/ELT design: transformation steps are deterministic
              and separated from training and live inference concerns.
            </li>
            <li>
              Data quality focus: explicit checks for missing fields, source
              drift, and inconsistent upstream naming.
            </li>
            <li>
              Analytics-ready storage: parquet-backed feature panels designed
              for downstream modeling and ad hoc research in Python and DuckDB.
            </li>
            <li>
              Clear operational handoff: outputs and assumptions are structured
              so research workflows can consume data without manual cleanup.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Parallel Modeling Track: Multi-Prop Quantile LightGBM
          </h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Alongside rush attempts, a second architecture models receiving
            yards, rushing yards, QB passing yards, targets, and touchdowns
            using quantile regression LightGBM. Instead of only predicting the
            mean, it estimates P10/P25/P50/P75/P90 outcomes per player per
            game, enabling more rigorous risk-aware bet sizing.
          </p>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-2">
            <li>Receiving yards: test MAE ~21.8 yards</li>
            <li>QB passing yards: test MAE ~63.5 yards</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Key Engineering Decisions</h2>
          <ul className="list-disc pl-6 text-gray-800 dark:text-gray-200 space-y-3">
            <li>
              <strong>TCN over LSTM/Transformer:</strong> faster training, more
              parallelism, stable gradients over short 6-week windows, and less
              complexity than attention for this sequence length.
            </li>
            <li>
              <strong>LightGBM prediction head:</strong> robust with missing
              values, mixed feature types, nonlinear tabular interactions, and
              clearer feature importances for interpretation.
            </li>
            <li>
              <strong>Causal, time-aware split:</strong> train through 2022,
              validate on 2023, test on 2024; rolling stats are strictly
              shifted to prevent lookahead leakage.
            </li>
            <li>
              <strong>Separated ETL, training, and inference:</strong> allows
              weekly context updates and live predictions without retriggering
              expensive retraining.
            </li>
          </ul>
        </section>

        <section className="space-y-4 pb-8">
          <h2 className="text-2xl font-semibold">Tech Stack</h2>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Python · PyTorch · LightGBM · pandas · DuckDB · nfl_data_py ·
            scikit-learn · The Odds API · Open-Meteo · Kalshi API
          </p>
        </section>
      </article>
    </main>
  );
}
