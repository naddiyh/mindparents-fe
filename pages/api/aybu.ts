import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

type Data = {
  completion?: string;
  error?: string;
};

const MAX_RETRIES = 3;

const ALLOWED_TOPICS = [
  "parenting",
  "anak",
  "masalah anak",
  "kesehatan",
  "kehamilan",
  "perkembangan anak",
  "masalah anak",
  "masalah kehamilan",
  "persiapan",
  "orang tua",
  "baby blues",
  "mental",
  "hubungan anak",
  "hubungan orang tua",
  "keluarga",
  "perempuan",
  "persiapan intelektual",
  "tantrum",
  "penyakit",
  "demam",
  "ahli psikologis",
  "sakit",
  "sehat",
  "aybu",
  "forum orang tua",
  "masalah orang tua",
  "anak sakit",
  "anak cengeng",
  "komunikasih anak",
  "gizi anak",
  "pola asuh",
  "tumbuh kembang",
  "pertumbuhan anak",
  "pengasuhan anak",
  "pernikahan",
  "finansial keluarga",
];

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

  // Check if the prompt is related to allowed topics
  const isTopicAllowed = ALLOWED_TOPICS.some((topic) =>
    prompt.toLowerCase().includes(topic),
  );
  if (!isTopicAllowed) {
    return res.status(200).json({
      completion: "Maaf, saya belum punya pengetahuan tentang hal tersebut",
    });
  }

  const fetchResponse = async (retryCount = 0): Promise<any> => {
    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [{ role: "user", content: prompt }],
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
        return response.data.choices[0].message.content;
      } else {
        return "No response from OpenAI.";
      }
    } catch (err: any) {
      if (
        err.response &&
        err.response.status === 504 &&
        retryCount < MAX_RETRIES
      ) {
        console.warn(
          `Retrying due to 504 error... (${retryCount + 1}/${MAX_RETRIES})`,
        );
        return fetchResponse(retryCount + 1);
      } else {
        throw err;
      }
    }
  };

  try {
    const completion = await fetchResponse(0);
    res.status(200).json({ completion });
  } catch (err: any) {
    console.error(
      "Error generating response:",
      err.response ? err.response.data : err.message,
    );
    res.status(500).json({ error: "Error generating response" });
  }
}