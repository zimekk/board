// import { fileURLToPath } from "url";
// import path from "path";

// // https://withcatai.github.io/node-llama-cpp/guide/chat-prompt-wrapper
// import {
//   LlamaModel,
//   LlamaContext,
//   LlamaChatSession,
//   LlamaChatPromptWrapper,
// } from "node-llama-cpp";

// // https://github.com/Atome-FE/llama-node/blob/main/example/ts/llama-cpp/embedding.ts
// // https://github.com/Atome-FE/llama-node/blob/main/example/ts/llama-cpp/inference.ts
// import type { Generate } from "@llama-node/llama-cpp";
// import { LLM } from "llama-node";
// import { LLamaCpp, type LoadConfig } from "llama-node/dist/llm/llama-cpp.js";

// const __dirname = path.dirname(fileURLToPath(import.meta.url));

// // https://huggingface.co/eachadea/ggml-vicuna-7b-1.1/resolve/main/ggml-vic7b-q5_1.bin
// const model = path.resolve(__dirname, "../..", "models", "ggml-vic7b-q5_1.bin");
// // const model = path.resolve(process.cwd(), "../ggml-vic7b-q5_1.bin");

// const llama = new LLM(LLamaCpp);

// const run = async () => {
//   const template = `How are you?`;

//   const prompt = `A chat between a user and an assistant.
// USER: ${template}
// ASSISTANT:`;

//   const config: LoadConfig = {
//     modelPath: model,
//     enableLogging: true,
//     nCtx: 1024,
//     seed: 0,
//     f16Kv: false,
//     logitsAll: false,
//     vocabOnly: false,
//     useMlock: false,
//     embedding: false,
//     useMmap: true,
//     nGpuLayers: 0,
//   };

//   await llama.load(config);

//   const params: Generate = {
//     nThreads: 4,
//     nTokPredict: 2048,
//     topK: 40,
//     topP: 0.1,
//     temp: 0.2,
//     repeatPenalty: 1,
//     prompt,
//   };

//   await llama.createCompletion(params, (response) => {
//     process.stdout.write(response.token);
//   });
// };

export const prompt = async (q1 = "Hi there, how are you?") => {
  console.log(["prompt"], { q1 });

  // run();

  // const model = new LlamaModel({
  //   // https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf
  //   // modelPath: path.resolve(__dirname, "../..", "models", "tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf")
  //   // https://huggingface.co/TheBloke/zephyr-7B-beta-pl-GGUF/resolve/main/zephyr-7b-beta-pl.Q4_K_M.gguf
  //   modelPath: path.resolve(
  //     __dirname,
  //     "../..",
  //     "models",
  //     "zephyr-7b-beta-pl.Q4_K_M.gguf",
  //   ),
  //   // modelPath: path.join(__dirname, "models", "codellama-13b.Q3_K_M.gguf")
  // });
  // const context = new LlamaContext({ model });
  // const session = new LlamaChatSession({
  //   context,
  //   promptWrapper: new LlamaChatPromptWrapper(), // by default, GeneralChatPromptWrapper is used
  // });

  // // const q1 = "Hi there, how are you?";
  // console.log("User: " + q1);

  // const a1 = await session.prompt(q1);
  // console.log("AI: " + a1);

  // const q2 = "Summerize what you said";
  // console.log("User: " + q2);

  // const a2 = await session.prompt(q2);
  // console.log("AI: " + a2);
};
