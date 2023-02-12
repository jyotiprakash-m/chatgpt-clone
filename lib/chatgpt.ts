import { defaultConfig } from "next/dist/server/config-shared";
import { Configuration, OpenAIApi } from "openai";
// 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

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;
