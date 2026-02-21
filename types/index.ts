export interface KeyConcept {
    term: string;
    definition: string;
}

export interface VideoContent {
    type: "youtube" | "local";
    url: string;
}

export interface ModuleData {
    id: string;
    title: string;
    description: string;
    video?: VideoContent;
    contentHtml: string;
    keyConcepts: KeyConcept[];
    questions: {
        id: number;
        question: string;
        options: string[];
        correctAnswer: number;
        explanation: string;
    }[];
}

export interface QuizOption {
    id: string;
    text: string;
    isCorrect: boolean;
    explanation: string;
}

export interface QuizQuestion {
    id: string;
    text: string;
    options: QuizOption[];
}

export interface TutorMessage {
    id: string;
    role: "user" | "assistant";
    content: string;
    timestamp: Date;
}
