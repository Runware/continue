import { ModelProvider } from "../types.js";

export const Runware: ModelProvider = {
  id: "runware",
  displayName: "Runware",
  models: [
    {
      model: "openai-gpt-5-4-mini",
      displayName: "GPT-5.4 Mini",
      contextLength: 400000,
      maxCompletionTokens: 128000,
      description:
        "Compact, efficient variant of GPT-5.4 designed for coding assistants and subagent orchestration.",
      regex: /^openai-gpt-5-4-mini$/i,
      recommendedFor: ["chat"],
    },
    {
      model: "anthropic-claude-sonnet-4-6",
      displayName: "Claude Sonnet 4.6",
      contextLength: 1000000,
      maxCompletionTokens: 128000,
      description:
        "Anthropic's most capable Sonnet model, built for daily production use across coding and agentic tasks.",
      regex: /^anthropic-claude-sonnet-4-6$/i,
      recommendedFor: ["chat"],
    },
    {
      model: "google-gemini-3-1-pro",
      displayName: "Google Gemini 3.1 Pro",
      contextLength: 1048576,
      maxCompletionTokens: 65536,
      description:
        "Google's flagship multimodal language model with high-performance reasoning and deep contextual understanding.",
      regex: /^google-gemini-3-1-pro$/i,
      recommendedFor: ["chat"],
    },
    {
      model: "deepseek-v4-pro",
      displayName: "DeepSeek-V4-Pro",
      contextLength: 1048576,
      maxCompletionTokens: 384000,
      description:
        "DeepSeek's flagship V4 language model for coding, reasoning, and agent workflows.",
      regex: /^deepseek-v4-pro$/i,
      recommendedFor: ["chat"],
    },
    {
      model: "xai-grok-4-3",
      displayName: "Grok 4.3",
      contextLength: 1048576,
      maxCompletionTokens: 131072,
      description:
        "xAI's flagship language model for agentic reasoning and strong instruction following.",
      regex: /^xai-grok-4-3$/i,
      recommendedFor: ["chat"],
    },
    {
      model: "minimax-m2-7",
      displayName: "MiniMax-M2.7",
      contextLength: 204800,
      maxCompletionTokens: 131072,
      description:
        "MiniMax M2.7 is a long-context LLM designed for agentic workflows across software engineering and tool use.",
      regex: /^minimax-m2-7$/i,
      recommendedFor: ["chat"],
    },
  ],
};
