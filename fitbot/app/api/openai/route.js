import { GoogleGenAI } from "@google/genai";

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Messages are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.OPENAI_API_KEY });

    // For simple single prompt handling
    const prompt = messages.map((msg) => msg.content).join("\n");

    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash", // Or gemini-1.5-flash depending on your quota
      contents: prompt,
      config: {
        systemInstruction: "You are a Fitness trainer. Your name is Zoro.",
      },
    });

    const text = response.text;

    return new Response(JSON.stringify({ result: text.trim() }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("OpenAI API Error:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch AI response." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
