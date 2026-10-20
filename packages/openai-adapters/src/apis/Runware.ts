import { RunwareConfig } from "../types.js";
import { OpenAIApi } from "./OpenAI.js";

export const RUNWARE_API_BASE = "https://api.runware.ai/v1/";

export class RunwareApi extends OpenAIApi {
  constructor(config: RunwareConfig) {
    super({
      ...config,
      provider: "openai",
      apiBase: config.apiBase ?? RUNWARE_API_BASE,
    });
  }
}
