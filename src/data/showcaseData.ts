export type LlmScenario = {
  id: string;
  label: string;
  prompt: string;
  recommendedModel: string;
  whyItWins: string;
  strengths: string[];
  sampleOutput: string;
};

export type FantasyPrediction = {
  player: string;
  team: string;
  opponent: string;
  projectedFantasyPoints: number;
  range: string;
  confidence: "High" | "Medium";
  trend: number;
  keyDrivers: string[];
  note: string;
};

export const llmScenarios: LlmScenario[] = [
  {
    id: "coding",
    label: "Coding help",
    prompt: "Write a Python function that batches API requests with exponential backoff.",
    recommendedModel: "Qwen",
    whyItWins:
      "For code-heavy prompts, Qwen is the strongest option in this local stack because it gives more structured code and better follows implementation constraints.",
    strengths: [
      "Produces cleaner code scaffolds",
      "Handles multi-step instructions well",
      "Needs fewer retries on developer tasks"
    ],
    sampleOutput:
      "Suggested a retry helper, a bounded backoff strategy, and a small testable function surface for the request loop."
  },
  {
    id: "summarization",
    label: "Summarization",
    prompt: "Summarize an experiment log into five decisions and two follow-up questions.",
    recommendedModel: "Gemma",
    whyItWins:
      "Gemma tends to be the most balanced model for concise synthesis, especially when the goal is readability over maximum detail.",
    strengths: [
      "Good compression of long context",
      "Clear bullet-style summaries",
      "Stable tone for product-facing outputs"
    ],
    sampleOutput:
      "Collapsed the log into a short decision memo with action items, risk notes, and a clean summary for non-technical readers."
  },
  {
    id: "extraction",
    label: "Structured extraction",
    prompt: "Extract entities, dates, and action items from a raw notes file into JSON.",
    recommendedModel: "Bonsai",
    whyItWins:
      "For small structured extraction tasks, Bonsai is a good low-latency choice when you want predictable formatting on a local machine.",
    strengths: [
      "Fast turnaround on lightweight prompts",
      "Works well with constrained output formats",
      "Useful for routing lower-cost utility tasks"
    ],
    sampleOutput:
      "Returned a compact JSON object with entity groups, due dates, and task ownership fields ready for downstream use."
  }
];

export const fantasyPredictions: FantasyPrediction[] = [
  {
    player: "Nikola Jokic",
    team: "DEN",
    opponent: "LAL",
    projectedFantasyPoints: 58.4,
    range: "53 - 63",
    confidence: "High",
    trend: 4.1,
    keyDrivers: [
      "High projected usage rate",
      "Strong rebounding matchup",
      "Stable 36-minute expectation"
    ],
    note: "Illustrative exported prediction sample for the portfolio demo."
  },
  {
    player: "Jalen Brunson",
    team: "NYK",
    opponent: "MIA",
    projectedFantasyPoints: 44.7,
    range: "39 - 49",
    confidence: "Medium",
    trend: 1.8,
    keyDrivers: [
      "Primary ball-handler role",
      "Shot volume remains elevated",
      "Opponent slows pace slightly"
    ],
    note: "Illustrative exported prediction sample for the portfolio demo."
  },
  {
    player: "Domantas Sabonis",
    team: "SAC",
    opponent: "PHX",
    projectedFantasyPoints: 49.2,
    range: "45 - 54",
    confidence: "High",
    trend: -1.2,
    keyDrivers: [
      "Assist floor remains strong",
      "Rebounding base keeps variance lower",
      "Slight pace downgrade in matchup"
    ],
    note: "Illustrative exported prediction sample for the portfolio demo."
  }
];
