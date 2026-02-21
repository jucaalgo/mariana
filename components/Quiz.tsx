"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, HelpCircle } from "lucide-react";

interface Question {
    id: number;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

interface QuizProps {
    questions: Question[];
}

export function Quiz({ questions }: QuizProps) {
    const [currentStep, setCurrentStep] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);
    const [isFinished, setIsFinished] = useState(false);

    const currentQuestion = questions[currentStep];

    const handleOptionSelect = (index: number) => {
        if (showResult) return;
        setSelectedOption(index);
        setShowResult(true);
        if (index === currentQuestion.correctAnswer) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        if (currentStep + 1 < questions.length) {
            setCurrentStep(currentStep + 1);
            setSelectedOption(null);
            setShowResult(false);
        } else {
            setIsFinished(true);
        }
    };

    const resetQuiz = () => {
        setCurrentStep(0);
        setSelectedOption(null);
        setShowResult(false);
        setScore(0);
        setIsFinished(false);
    };

    if (isFinished) {
        const percentage = Math.round((score / questions.length) * 100);
        return (
            <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white text-center shadow-2xl animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-indigo-500/20">
                    <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black mb-2">¡Módulo Completado!</h3>
                <p className="text-indigo-200 text-lg mb-8 font-medium">Mariana, has demostrado un gran dominio de este tema.</p>

                <div className="bg-white/10 rounded-2xl p-6 mb-10 border border-white/10">
                    <div className="text-5xl font-black mb-1">{percentage}%</div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">Puntuación Final</p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button
                        onClick={resetQuiz}
                        className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 transition-all font-bold flex items-center justify-center gap-2"
                    >
                        <RotateCcw size={20} /> Reintentar
                    </button>
                    <button className="px-8 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition-all font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-900/40">
                        Siguiente Módulo <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-[2rem] border border-slate-200 shadow-xl overflow-hidden animate-in fade-in duration-700">
            <div className="bg-slate-50 p-6 md:p-8 flex items-center justify-between border-b border-slate-100">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white">
                        <HelpCircle size={24} />
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-slate-800 tracking-tight">Comprueba lo aprendido</h3>
                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-0.5">Pregunta {currentStep + 1} de {questions.length}</p>
                    </div>
                </div>
                <div className="text-indigo-600 font-black text-xl">
                    Puntos: {score}
                </div>
            </div>

            <div className="p-8 md:p-12">
                <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-tight">
                    {currentQuestion.question}
                </h4>

                <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => {
                        const isSelected = selectedOption === index;
                        const isCorrect = currentQuestion.correctAnswer === index;

                        let cardStyle = "bg-white border-slate-200 hover:border-indigo-400 hover:bg-indigo-50/30";
                        if (showResult) {
                            if (isCorrect) cardStyle = "bg-emerald-50 border-emerald-500 text-emerald-900";
                            else if (isSelected) cardStyle = "bg-rose-50 border-rose-500 text-rose-900";
                            else cardStyle = "bg-white border-slate-100 opacity-50";
                        }

                        return (
                            <button
                                key={index}
                                disabled={showResult}
                                onClick={() => handleOptionSelect(index)}
                                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${cardStyle}`}
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-100 group-hover:text-indigo-600'}`}>
                                        {String.fromCharCode(65 + index)}
                                    </div>
                                    <span className="font-bold">{option}</span>
                                </div>
                                {showResult && isCorrect && <CheckCircle2 className="text-emerald-600" size={24} />}
                                {showResult && isSelected && !isCorrect && <XCircle className="text-rose-600" size={24} />}
                            </button>
                        );
                    })}
                </div>

                {showResult && (
                    <div className="mt-8 animate-in slide-in-from-top-4 duration-500">
                        <div className={`p-6 rounded-2xl ${selectedOption === currentQuestion.correctAnswer ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'bg-rose-50 text-rose-900 border border-rose-100'}`}>
                            <p className="font-bold mb-1">{selectedOption === currentQuestion.correctAnswer ? '¡Excelente Mariana!' : 'Casi lo logras...'}</p>
                            <p className="text-sm opacity-90">{currentQuestion.explanation}</p>
                        </div>

                        <button
                            onClick={handleNext}
                            className="mt-8 w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 group"
                        >
                            {currentStep + 1 === questions.length ? 'Finalizar Repaso' : 'Siguiente Pregunta'}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
