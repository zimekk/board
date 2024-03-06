import { fileURLToPath } from "url";
import path from "path";
import {
  LlamaModel,
  LlamaContext,
  LlamaChatSession,
  LlamaChatPromptWrapper,
} from "node-llama-cpp";

// https://withcatai.github.io/node-llama-cpp/guide/chat-prompt-wrapper
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const prompt = async (q1 = "Hi there, how are you?") => {
  console.log(["prompt"], { q1 });

  const model = new LlamaModel({
    // https://huggingface.co/TheBloke/TinyLlama-1.1B-Chat-v1.0-GGUF/resolve/main/tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf
    // modelPath: path.resolve(__dirname, "../..", "models", "tinyllama-1.1b-chat-v1.0.Q5_K_M.gguf")
    // https://huggingface.co/TheBloke/zephyr-7B-beta-pl-GGUF/resolve/main/zephyr-7b-beta-pl.Q4_K_M.gguf
    modelPath: path.resolve(
      __dirname,
      "../..",
      "models",
      "zephyr-7b-beta-pl.Q4_K_M.gguf",
    ),
    // modelPath: path.join(__dirname, "models", "codellama-13b.Q3_K_M.gguf")
  });
  const context = new LlamaContext({ model });
  const session = new LlamaChatSession({
    context,
    promptWrapper: new LlamaChatPromptWrapper(), // by default, GeneralChatPromptWrapper is used
  });

  // const q1 = "Hi there, how are you?";
  console.log("User: " + q1);

  const a1 = await session.prompt(q1);
  console.log("AI: " + a1);

  const q2 = "Summerize what you said";
  console.log("User: " + q2);

  const a2 = await session.prompt(q2);
  console.log("AI: " + a2);
};
