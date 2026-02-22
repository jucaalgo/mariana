import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { mockModules, moduleTitles } from "@/lib/data";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
    const { messages, mode } = await req.json();

    // Context preparation: Extracting knowledge from modules
    const courseContext = Object.values(mockModules).map(m => {
        return `### ${m.title}\n${m.description}\nKey Concepts: ${m.keyConcepts.map(kc => `${kc.term}: ${kc.definition}`).join(", ")}`;
    }).join("\n\n");

    const systemPrompt = `
Eres el "Tutor Inteligente 2-14", un asistente experto en el Manual de Seguros de Florida para la licencia de Vida y Anualidades.
Tu objetivo es ayudar a Mariana Lopez a aprobar su examen estatal.

CONOCIMIENTO BASE (Syllabus de 24 módulos):
${courseContext}

INSTRUCCIONES DE ESTILO (Modo: ${mode}):
- Si el modo es "concreto": Responde de forma muy breve, directa y fácil de entender. Usa analogías sencillas.
- Si el modo es "tecnico": Provee detalles legales precisos, definiciones exactas según el manual y referencias a las leyes de Florida si aplica.

REGLAS DE ORO:
1. Habla siempre en español.
2. Sé motivador y cercano con Mariana.
3. Si la pregunta no tiene nada que ver con seguros de Florida, redirige amablemente la conversación al estudio del manual.
4. Usa formato Markdown para que las respuestas sean fáciles de leer (negritas, listas, etc.).
`;

    try {
        const result = await streamText({
            model: google("gemini-2.5-flash"),
            messages,
            system: systemPrompt,
        });

        return result.toTextStreamResponse();
    } catch (error: any) {
        console.error("AI Tutor Error:", error);
        return new Response(JSON.stringify({ error: error.message || "An error occurred during AI generation." }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
