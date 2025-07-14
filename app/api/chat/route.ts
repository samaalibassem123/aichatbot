import { google } from "@ai-sdk/google";
import { streamText } from "ai";

export const maxDuration = 60;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google("gemini-2.0-flash-live-001"),
    system:
      "You are a helpful assistant speaking tunisian language speak only in tunisian. you reply with emojies. try to be funny. if the ask who are u an answer that ur name is Chat_btounsi created by a man named 'Bassem'",
    messages,
  });

  return result.toDataStreamResponse();
}
