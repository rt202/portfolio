import { useMemo, useState } from "react";
import { fantasyPredictions, llmScenarios } from "../../data/showcaseData";
import { useInView } from "../../hooks/useInView";

export const Demos = () => {
  const { ref, isInView } = useInView({ threshold: 0.1 });
  const [selectedScenarioId, setSelectedScenarioId] = useState(llmScenarios[0]?.id ?? "");
  const [selectedPlayer, setSelectedPlayer] = useState(
    fantasyPredictions[0]?.player ?? ""
  );

  const selectedScenario = useMemo(
    () =>
      llmScenarios.find((scenario) => scenario.id === selectedScenarioId) ??
      llmScenarios[0],
    [selectedScenarioId]
  );

  const selectedPrediction = useMemo(
    () =>
      fantasyPredictions.find((prediction) => prediction.player === selectedPlayer) ??
      fantasyPredictions[0],
    [selectedPlayer]
  );

  return (
    <section
      id="demos"
      ref={ref}
      className="relative bg-[#030318] py-24"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-20 h-[320px] w-[320px] rounded-full bg-purple-900/10 blur-[120px]" />
        <div className="absolute bottom-0 right-10 h-[280px] w-[280px] rounded-full bg-indigo-900/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div
          className={`text-center transition-all duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Interactive Samples
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
            Lightweight Demos
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            These front-end demos use static sample data so the portfolio can show
            how I think about model routing and prediction interfaces without needing
            a live backend.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <article
            className={`rounded-3xl border border-white/10 bg-[#0a0d24] p-8 transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
                  Local LLM Stack
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Prompt Routing Preview
                </h3>
              </div>
              <span className="rounded-full bg-purple-600/15 px-3 py-1 text-xs font-semibold text-purple-200">
                Bonsai / Gemma / Qwen
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {llmScenarios.map((scenario) => (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setSelectedScenarioId(scenario.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    selectedScenario?.id === scenario.id
                      ? "bg-purple-600 text-white"
                      : "bg-white/5 text-gray-300 hover:bg-white/10"
                  }`}
                >
                  {scenario.label}
                </button>
              ))}
            </div>

            {selectedScenario && (
              <div className="mt-8 space-y-6">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Prompt
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-200">
                    {selectedScenario.prompt}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Why this model
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-gray-200">
                      {selectedScenario.whyItWins}
                    </p>
                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {selectedScenario.strengths.map((strength) => (
                        <li key={strength}>- {strength}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-purple-200">
                      Recommended model
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {selectedScenario.recommendedModel}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Sample output shape
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-200">
                    {selectedScenario.sampleOutput}
                  </p>
                </div>
              </div>
            )}
          </article>

          <article
            className={`rounded-3xl border border-white/10 bg-[#0a0d24] p-8 transition-all duration-700 delay-100 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
                  Fantasy Basketball
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-white">
                  Prediction Snapshot
                </h3>
              </div>
              <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs font-semibold text-indigo-200">
                Static export demo
              </span>
            </div>

            <div className="mt-6">
              <label
                htmlFor="player-prediction"
                className="text-xs uppercase tracking-[0.2em] text-gray-500"
              >
                Select player
              </label>
              <select
                id="player-prediction"
                value={selectedPlayer}
                onChange={(event) => setSelectedPlayer(event.target.value)}
                className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors focus:border-purple-500"
              >
                {fantasyPredictions.map((prediction) => (
                  <option
                    key={prediction.player}
                    value={prediction.player}
                    className="bg-[#0a0d24]"
                  >
                    {prediction.player}
                  </option>
                ))}
              </select>
            </div>

            {selectedPrediction && (
              <div className="mt-8 space-y-6">
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Projection
                    </p>
                    <p className="mt-3 text-3xl font-semibold text-white">
                      {selectedPrediction.projectedFantasyPoints.toFixed(1)}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Range
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {selectedPrediction.range}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                      Confidence
                    </p>
                    <p className="mt-3 text-lg font-semibold text-white">
                      {selectedPrediction.confidence}
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <p className="text-sm text-gray-400">
                        {selectedPrediction.team} vs {selectedPrediction.opponent}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-gray-200">
                        {selectedPrediction.note}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        selectedPrediction.trend >= 0
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-amber-500/15 text-amber-300"
                      }`}
                    >
                      {selectedPrediction.trend >= 0 ? "+" : ""}
                      {selectedPrediction.trend.toFixed(1)} trend
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                    Key drivers
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-gray-300">
                    {selectedPrediction.keyDrivers.map((driver) => (
                      <li key={driver}>- {driver}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </section>
  );
};
