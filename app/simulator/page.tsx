"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import { QuizQuestion } from "@/types";

const mockQuestions: QuizQuestion[] = [
    {
        id: "q1",
        text: "Según los principios fundamentales del seguro, ¿cuál es la función principal del mecanismo de seguro en relación con el riesgo financiero?",
        options: [
            { id: "a", text: "Eliminar por completo la posibilidad de que ocurra una pérdida financiera.", isCorrect: false, explanation: "El seguro no elimina el riesgo ni la posibilidad de pérdida; es un método para gestionar las consecuencias financieras de dicha pérdida." },
            { id: "b", text: "Transferir el riesgo del individuo a la aseguradora, intercambiando una pérdida grande e incierta por una pérdida pequeña y cierta.", isCorrect: true, explanation: "El seguro se define como un mecanismo de protección financiera diseñado para transferir el riesgo de individuos a una compañía aseguradora. Su función principal es intercambiar una pérdida potencial grande e incierta por una pérdida pequeña y cierta, conocida como prima." },
            { id: "c", text: "Convertir riesgos especulativos en riesgos puros para generar ganancias.", isCorrect: false, explanation: "Los riesgos especulativos (que implican posibilidad de ganancia o pérdida) no son asegurables; el seguro trata con riesgos puros." },
            { id: "d", text: "Retener todo el riesgo financiero por parte del individuo para evitar pagos a terceros.", isCorrect: false, explanation: "La retención del riesgo es lo opuesto a la transferencia; implica que el individuo asume la pérdida, como en el caso de un deducible o no tener seguro." }
        ]
    },
    {
        id: "q2",
        text: "¿Cómo se define el principio estadístico conocido como la 'Ley de los Grandes Números' en el contexto de los seguros?",
        options: [
            { id: "a", text: "Establece que cuanto mayor sea el monto del seguro, mayor será la prima.", isCorrect: false, explanation: "Aunque el monto afecta la prima, la Ley de los Grandes Números se refiere a la predictibilidad basada en el tamaño del grupo, no al costo individual." },
            { id: "b", text: "Indica que es imposible predecir las pérdidas incluso con un grupo grande de asegurados.", isCorrect: false, explanation: "Al contrario, el principio establece que la precisión de la predicción aumenta con el tamaño del grupo." },
            { id: "c", text: "Establece que cuanto mayor sea el grupo de riesgos similares asegurados, más predecibles y precisas serán las estimaciones de pérdidas futuras.", isCorrect: true, explanation: "La Ley de los Grandes Números establece que cuanto mayor sea el grupo de riesgos similares asegurados, más predecibles serán las pérdidas futuras. Esto permite a las aseguradoras calcular las tasas de mortalidad y morbilidad con mayor precisión." },
            { id: "d", text: "Requiere que las aseguradoras aseguren a un número infinito de personas para evitar la bancarrota.", isCorrect: false, explanation: "Se requiere un número 'suficientemente grande', no infinito, para que las predicciones sean estadísticamente confiables." }
        ]
    },
    {
        id: "q3",
        text: "En la clasificación de riesgos, ¿qué distingue a un 'Riesgo Puro' de un 'Riesgo Especulativo' y cuál es asegurable?",
        options: [
            { id: "a", text: "El riesgo puro implica la posibilidad de ganancia o pérdida y es asegurable.", isCorrect: false, explanation: "El riesgo puro no implica posibilidad de ganancia, solo de pérdida o de no cambio." },
            { id: "b", text: "El riesgo especulativo implica solo la posibilidad de pérdida y es el único tipo asegurable.", isCorrect: false, explanation: "El riesgo especulativo implica posibilidad de ganancia (como el juego o inversiones) y no es asegurable." },
            { id: "c", text: "El riesgo puro implica únicamente la posibilidad de pérdida y es el único tipo de riesgo que las aseguradoras aceptan.", isCorrect: true, explanation: "El Riesgo Puro implica solamente la posibilidad de pérdida; nunca habrá posibilidad de ganancias o beneficios y es el único tipo asegurable. El Riesgo Especulativo implica posibilidad de ganancia o pérdida y no es asegurable." },
            { id: "d", text: "Ambos tipos de riesgos son asegurables siempre que la prima sea lo suficientemente alta.", isCorrect: false, explanation: "Las compañías de seguros generalmente no aseguran riesgos especulativos porque buscan proteger contra pérdidas, no garantizar ganancias comerciales o de apuestas." }
        ]
    },
    {
        id: "q4",
        text: "¿Cuál es la característica distintiva principal de una Compañía de Seguros Mutualista (Mutual Insurer) en comparación con una Compañía de Accionistas (Stock Insurer)?",
        options: [
            { id: "a", text: "Es propiedad de inversionistas externos que reciben los dividendos.", isCorrect: false, explanation: "Esta es la definición de una Compañía de Accionistas (Stock Insurer)." },
            { id: "b", text: "Es propiedad de sus asegurados (dueños de pólizas) y emite pólizas participantes donde los excedentes pueden devolverse como dividendos.", isCorrect: true, explanation: "Las Aseguradoras Mutualistas se caracterizan por no tener capital social y ser propiedad de los asegurados. Su propósito es brindar seguro al costo neto más bajo y los excedentes se pueden distribuir como dividendos (pólizas participantes)." },
            { id: "c", text: "Es una organización sin fines de lucro administrada exclusivamente por el gobierno estatal.", isCorrect: false, explanation: "Las mutualistas son aseguradoras privadas, no entidades gubernamentales, aunque están reguladas por el estado." },
            { id: "d", text: "Siempre cobra primas más bajas que las compañías de accionistas y no paga dividendos.", isCorrect: false, explanation: "Las mutualistas suelen cobrar primas iniciales que pueden ser más altas, pero devuelven los excedentes como dividendos, reduciendo el costo neto final. No 'siempre' cobran menos inicialmente." }
        ]
    }
];

export default function Simulator() {
    const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

    const question = mockQuestions[currentQuestionIdx];
    const isAnswered = selectedOptionId !== null;
    const selectedOption = isAnswered ? question.options.find(o => o.id === selectedOptionId) : null;
    const isFinished = currentQuestionIdx >= mockQuestions.length;

    const handleNext = () => {
        setCurrentQuestionIdx(prev => prev + 1);
        setSelectedOptionId(null);
    };

    const handleRestart = () => {
        setCurrentQuestionIdx(0);
        setSelectedOptionId(null);
    };

    if (isFinished) {
        return (
            <div className="max-w-3xl mx-auto py-20 text-center animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                </div>
                <h1 className="text-4xl font-bold text-slate-900 mb-4">¡Prueba Finalizada!</h1>
                <p className="text-slate-500 text-lg mb-8">Has completado esta ronda del simulador del estado de Florida.</p>
                <button
                    onClick={handleRestart}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 mx-auto"
                >
                    <RotateCcw size={20} />
                    Reiniciar Simulador
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 mb-6 md:mb-8 border-b border-slate-200 pb-4">
                <h1 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Simulador del Examen 2-14</h1>
                <div className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest bg-slate-100 px-3 md:px-4 py-1.5 md:py-2 rounded-lg self-end md:self-auto">
                    Pregunta {currentQuestionIdx + 1} de {mockQuestions.length}
                </div>
            </header>

            {/* Pregunta */}
            <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 border border-slate-200 shadow-sm relative z-10">
                <h2 className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-6 md:mb-8">
                    {question.text}
                </h2>

                <div className="space-y-3 md:space-y-4">
                    {question.options.map((option) => {
                        const isSelected = selectedOptionId === option.id;
                        let btnClass = "w-full text-left p-4 md:p-6 rounded-xl md:rounded-2xl border-2 transition-all flex justify-between items-center gap-2";

                        if (!isAnswered) {
                            btnClass += " border-slate-100 hover:border-blue-400 hover:bg-blue-50 cursor-pointer bg-slate-50";
                        } else {
                            btnClass += " cursor-default";
                            if (isSelected) {
                                if (option.isCorrect) btnClass += " border-green-500 bg-green-50 shadow-md shadow-green-100";
                                else btnClass += " border-red-500 bg-red-50 shadow-md shadow-red-100";
                            } else if (option.isCorrect) {
                                btnClass += " border-green-200 bg-green-50/50"; // Highlight correct answer missing
                            } else {
                                btnClass += " border-slate-100 bg-slate-50 opacity-50";
                            }
                        }

                        return (
                            <button
                                key={option.id}
                                onClick={() => !isAnswered && setSelectedOptionId(option.id)}
                                disabled={isAnswered}
                                className={btnClass}
                            >
                                <span className="font-medium text-base md:text-lg text-slate-700">{option.text}</span>
                                {isAnswered && isSelected && (
                                    option.isCorrect ? <CheckCircle2 className="text-green-600 shrink-0" size={24} /> : <XCircle className="text-red-500 shrink-0" size={24} />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Early Return Visual - Explicación */}
            {isAnswered && selectedOption && (
                <div className={`rounded-b-2xl md:rounded-b-3xl p-6 md:p-8 border-2 animate-in slide-in-from-top-4 duration-300 -mt-4 pt-10 md:pt-12 relative -z-10 ${selectedOption?.isCorrect ? "bg-green-50 border-green-200" : "bg-red-50 border-red-200"
                    }`}>
                    <div className="flex flex-col md:flex-row items-start gap-3 md:gap-4">
                        <div className={`mt-1 hidden md:block ${selectedOption?.isCorrect ? "text-green-600" : "text-red-600"}`}>
                            {selectedOption?.isCorrect ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                        </div>
                        <div>
                            <h3 className={`font-bold text-base md:text-lg mb-2 flex items-center gap-2 ${selectedOption?.isCorrect ? "text-green-900" : "text-red-900"}`}>
                                <span className="md:hidden">
                                    {selectedOption?.isCorrect ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
                                </span>
                                {selectedOption?.isCorrect ? "¡Correcto!" : "Incorrecto"}
                            </h3>
                            <p className={`leading-relaxed text-sm md:text-base ${selectedOption?.isCorrect ? "text-green-800" : "text-red-800"}`}>
                                {selectedOption?.explanation}
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 md:mt-8 flex justify-end">
                        <button
                            onClick={handleNext}
                            className={`px-6 md:px-8 py-2.5 md:py-3 rounded-xl font-bold transition-all flex items-center gap-2 text-sm md:text-base w-full md:w-auto justify-center ${selectedOption?.isCorrect
                                ? "bg-green-600 hover:bg-green-700 text-white shadow-md shadow-green-200"
                                : "bg-red-600 hover:bg-red-700 text-white shadow-md shadow-red-200"
                                }`}
                        >
                            Siguiente Pregunta <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
