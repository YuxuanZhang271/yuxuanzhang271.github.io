
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, PUBLICATIONS, RESEARCH_AREAS, EXPERIENCES, SKILLS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_PROMPT = `
You are the AI assistant of Yuxuan Zhang, a researcher in Embodied AI and Robotics at NUS.
Your goal is to answer questions about Yuxuan's research, background, and publications.

Yuxuan's Background:
- Title: ${PERSONAL_INFO.title}
- Institution: ${PERSONAL_INFO.institution}
- Bio: ${PERSONAL_INFO.bio}

Education:
- Master in AI Systems, NUS (Aug 2025 - Present)
- Grad Dip in System Analysis, NUS (Jul 2023 - Jan 2025, GPA 4.11/5.0)
- Bachelor in Intelligent Test & Control Engineering, HIT (Sep 2020 - Jun 2024, GPA 4.02/5.0)

Key Skills:
- Programming: ${SKILLS.programming.join(', ')}
- Robotics Tools: ${SKILLS.tools.join(', ')}

Research Areas:
${RESEARCH_AREAS.map(ra => `- ${ra.title}: ${ra.description}`).join('\n')}

Recent Work:
- VLA-OS (NeurIPS 2025): Structuring planning in Vision-Language-Action models.
- ManiLadder: Benchmarking manipulation intelligence.
- Experiences at AMD, FatFish Technology, and AdaComp Lab (NUS).

Answer professionally and concisely. If asked about contact info, use: ${PERSONAL_INFO.email}.
`;

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm having trouble connecting to my knowledge base. Please reach out to Yuxuan directly.";
  }
};
