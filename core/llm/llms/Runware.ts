import { LLMOptions } from "../../index.js";

import OpenAI from "./OpenAI.js";

class Runware extends OpenAI {
  static providerName = "runware";
  static defaultOptions: Partial<LLMOptions> = {
    apiBase: "https://api.runware.ai/v1/",
    useLegacyCompletionsEndpoint: false,
  };
}

export default Runware;
