"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "es";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    en: {
        "nav.dashboard": "Dashboard",
        "nav.modules": "Modules",
        "nav.simulator": "Simulator",
        "nav.tutor": "AI Tutor",
        "dashboard.greeting": "Welcome back, Mariana",
        "dashboard.subtitle": "Let's conquer your 2-14 License.",
        "dashboard.progress": "Overall Progress",
        "dashboard.exams": "Practice Exams",
        "dashboard.continue": "Continue to Module",
        "dashboard.comingSoon": "Coming Soon",
        "dashboard.startModule": "Start Module",
        "dashboard.mainGoal": "Pass on the First Try",
        "dashboard.mainGoalLabel": "Main Goal",
        "dashboard.completed": "Completed",
        "dashboard.courseStart": "COURSE START",
        "dashboard.timeIsNow": "The time is now",
        "dashboard.noExpNeeded": "You don't need any prior knowledge. We designed this course for you, Mariana. We will go step by step, from the simplest concepts until you master the complete manual.",
        "dashboard.startModule1": "Start Module 1",
        "dashboard.learningPath": "Learning Path",
        "dashboard.followOrder": "Follow the designed order to guarantee your success.",
        "dashboard.estimated": "estimated",
        "dashboard.examSimulator": "Exam Simulator",
        "dashboard.lockedUntil": "Locked until completing 50% of the course.",
        "dashboard.requiresProgress": "Requires progress",
        "dashboard.teachingMethod": "Teaching Methodology",
        "dashboard.methodDesc": "Each module contains visual analogies, flashcards, and challenges to ensure you absorb the information without getting bored.",
        "module.title": "Module",
        "module.keyConcepts": "Key Concepts",
        "module.flashcards": "Flashcards",
        "module.knowledgeCheck": "Knowledge Check",
        "module.checkAnswer": "Check Answer",
        "module.nextQuestion": "Next Question",
        "module.correct": "Correct! Great job.",
        "module.incorrect": "Incorrect. Read the explanation below.",
        "module.quizCompleted": "Module Completed!",
        "module.quizPassed": "Mariana, you have demonstrated a great mastery of this topic.",
        "module.finalScore": "Final Score",
        "module.retry": "Retry",
        "module.nextModule": "Next Module",
        "module.question": "Question",
        "module.of": "of",
        "module.points": "Points",
        "module.finishReview": "Finish Review",
        "tutor.title": "AI Tutor 2-14",
        "tutor.subtitle": "Specialized in Florida Insurance. Ask anything.",
        "tutor.mode.concrete": "Concrete Mode",
        "tutor.mode.concreteDesc": "Simple, direct answers with analogies.",
        "tutor.mode.technical": "Technical Mode",
        "tutor.mode.technicalDesc": "Precise terms and legal references.",
        "tutor.placeholder": "Ask a question about Florida Insurance...",
        "tutor.send": "Send",
        "simulator.title": "State Exam Simulator",
        "simulator.subtitle": "Florida 2-14 License - 24 Questions",
        "simulator.start": "Start Simulator",
        "simulator.question": "Question",
        "simulator.score": "Your Score",
        "simulator.pass": "PASS",
        "simulator.fail": "FAIL",
        "simulator.requirements": "Passing Score: 80% (19/24)",
        "simulator.retake": "Retake Exam",
        "simulator.review": "Review Answers",
    },
    es: {
        "nav.dashboard": "Inicio",
        "nav.modules": "Módulos",
        "nav.simulator": "Simulador",
        "nav.tutor": "Tutor IA",
        "dashboard.greeting": "Hola de nuevo, Mariana",
        "dashboard.subtitle": "Vamos a conquistar tu Licencia 2-14.",
        "dashboard.progress": "Progreso General",
        "dashboard.exams": "Exámenes de Práctica",
        "dashboard.continue": "Continuar al Módulo",
        "dashboard.comingSoon": "Próximamente",
        "dashboard.startModule": "Empezar Módulo",
        "dashboard.mainGoal": "Aprobar a la Primera",
        "dashboard.mainGoalLabel": "Meta Principal",
        "dashboard.completed": "Completado",
        "dashboard.courseStart": "INICIO DEL CURSO",
        "dashboard.timeIsNow": "El momento es ahora",
        "dashboard.noExpNeeded": "No necesitas saber nada previo. Hemos diseñado este curso para ti, Mariana. Iremos paso a paso, desde los conceptos más simples hasta que domines el manual completo.",
        "dashboard.startModule1": "Empezar Módulo 1",
        "dashboard.learningPath": "Ruta de Aprendizaje",
        "dashboard.followOrder": "Sigue el orden diseñado para garantizar tu éxito.",
        "dashboard.estimated": "estimado",
        "dashboard.examSimulator": "Simulador de Examen",
        "dashboard.lockedUntil": "Bloqueado hasta completar el 50% del curso.",
        "dashboard.requiresProgress": "Requiere progreso",
        "dashboard.teachingMethod": "Metodología Didáctica",
        "dashboard.methodDesc": "Cada módulo contiene analogías visuales, tarjetas de memoria y retos para asegurar que absorbes la información sin aburrirte.",
        "module.title": "Módulo",
        "module.keyConcepts": "Conceptos Clave",
        "module.flashcards": "Tarjetas de Memoria",
        "module.knowledgeCheck": "Prueba de Conocimiento",
        "module.checkAnswer": "Verificar Respuesta",
        "module.nextQuestion": "Siguiente Pregunta",
        "module.correct": "¡Correcto! Excelente trabajo.",
        "module.incorrect": "Incorrecto. Lee la explicación abajo.",
        "module.quizCompleted": "¡Módulo Completado!",
        "module.quizPassed": "Mariana, has demostrado un gran dominio de este tema.",
        "module.finalScore": "Puntuación Final",
        "module.retry": "Reintentar",
        "module.nextModule": "Siguiente Módulo",
        "module.question": "Pregunta",
        "module.of": "de",
        "module.points": "Puntos",
        "module.finishReview": "Finalizar Repaso",
        "tutor.title": "Tutor IA 2-14",
        "tutor.subtitle": "Especialista en Seguros de Florida.",
        "tutor.mode.concrete": "Modo Concreto",
        "tutor.mode.concreteDesc": "Respuestas simples con analogías.",
        "tutor.mode.technical": "Modo Técnico",
        "tutor.mode.technicalDesc": "Términos precisos y ley.",
        "tutor.placeholder": "Escribe una pregunta sobre seguros...",
        "tutor.send": "Enviar",
        "simulator.title": "Simulador Estatal",
        "simulator.subtitle": "Licencia Florida 2-14 - 24 Preguntas",
        "simulator.start": "Iniciar Simulador",
        "simulator.question": "Pregunta",
        "simulator.score": "Tu Puntuación",
        "simulator.pass": "APROBADO",
        "simulator.fail": "REPROBADO",
        "simulator.requirements": "Puntaje Mínimo: 80% (19/24)",
        "simulator.retake": "Repetir Examen",
        "simulator.review": "Revisar Respuestas",
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Default to English as per user request
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Load preference from localStorage if available
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && (savedLang === "en" || savedLang === "es")) {
            setLanguage(savedLang);
        }
        setMounted(true);
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    const t = (key: string): string => {
        const dict = translations[language];
        // Cast dict to record to avoid TypeScript index error 
        return (dict as Record<string, string>)[key] || key;
    };

    // Prevent hydration mismatch by rendering default initially
    if (!mounted) {
        return (
            <LanguageContext.Provider value={{ language: "en", setLanguage: handleSetLanguage, t }}>
                {children}
            </LanguageContext.Provider>
        );
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
