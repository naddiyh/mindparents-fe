import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

type Data = {
  completion?: string;
  error?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4", // Specify the model here
        messages: [{ role: "user", content: prompt }], // The format for Chat API
        max_tokens: 350,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      },
    );

    if (response.data.choices && response.data.choices.length > 0) {
      const completion = response.data.choices[0].message.content;
      res.status(200).json({ completion });
    } else {
      res.status(200).json({ completion: "No response from OpenAI." });
    }
  } catch (err: any) {
    console.error(
      "Error generating response:",
      err.response ? err.response.data : err.message,
    );
    res.status(500).json({ error: "Error generating response" });
  }
}
