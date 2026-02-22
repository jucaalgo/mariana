"use client";

import { useState, useRef, useEffect } from "react";
import { Camera, Send, Mic, Image as ImageIcon, X, Loader2, Bot, User, Volume2, Square } from "lucide-react";
import { useChat } from "ai/react";
import { useLanguage } from "@/components/i18n-provider";

export default function TutorEngine() {
    const [mode, setMode] = useState<"concreto" | "tecnico">("concreto");
    const [isRecording, setIsRecording] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [speakingId, setSpeakingId] = useState<string | null>(null);

    const { t, language } = useLanguage();

    const { messages, input, handleInputChange, handleSubmit, isLoading, setInput } = useChat({
        api: "/api/chat",
        body: { mode, language },
        initialMessages: [
            {
                id: "init",
                role: "assistant",
                content: t("tutor.subtitle"),
            }
        ]
    });

    // Auto-scroll to bottom when messages change
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const handleCameraCapture = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });

            // Create a temporary video element to capture the frame
            const video = document.createElement('video');
            video.srcObject = stream;
            await video.play();

            const canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d')?.drawImage(video, 0, 0);

            const imageUrl = canvas.toDataURL('image/jpeg');
            setSelectedImage(imageUrl);

            stream.getTracks().forEach(track => track.stop());
        } catch (err) {
            console.error("Error accessing camera:", err);
            alert("No se pudo acceder a la cámara. Por favor verifica los permisos.");
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setSelectedImage(imageUrl);
        }
    };

    const startSpeechRecognition = () => {
        if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
            alert(language === "en" ? "Voice recognition is not supported in this browser." : "El reconocimiento de voz no está soportado en este navegador.");
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        const recognition = new SpeechRecognition();

        recognition.lang = language === "en" ? 'en-US' : 'es-ES';
        recognition.interimResults = true;
        recognition.continuous = false;

        recognition.onstart = () => {
            setIsRecording(true);
        };

        recognition.onresult = (event: any) => {
            const transcript = Array.from(event.results)
                .map((result: any) => result[0])
                .map((result: any) => result.transcript)
                .join('');

            // Reemplaza el input actual temporalmente mientras hables
            setInput(transcript);
        };

        recognition.onerror = (event: any) => {
            console.error('Speech recognition error', event.error);
            setIsRecording(false);
        };

        recognition.onend = () => {
            setIsRecording(false);
        };

        recognition.start();
    };

    const speakMessage = (id: string, text: string) => {
        if (!('speechSynthesis' in window)) {
            alert(language === "en" ? "Text to speech is not supported in this browser." : "Texto a voz no está soportado en este navegador.");
            return;
        }

        // Cancel any ongoing speech
        window.speechSynthesis.cancel();

        // If clicking the currently speaking message, just stop
        if (speakingId === id) {
            setSpeakingId(null);
            return;
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === "en" ? 'en-US' : 'es-ES';
        // Ajustes para voz de tutor más natural (varía por SO/Navegador)
        utterance.rate = 1.05;
        utterance.pitch = 1.0;

        utterance.onend = () => {
            setSpeakingId(null);
        };

        utterance.onerror = () => {
            setSpeakingId(null);
        };

        setSpeakingId(id);
        window.speechSynthesis.speak(utterance);
    };

    return (
        <div className="max-w-5xl mx-auto h-[calc(100vh-8rem)] md:h-[calc(100vh-6rem)] flex flex-col animate-in fade-in zoom-in-95 duration-500 bg-white md:rounded-3xl border border-slate-200 overflow-hidden shadow-sm -mx-4 md:mx-auto mt-[-1rem] md:mt-0">

            {/* Header Setup */}
            <header className="px-4 md:px-6 py-3 md:py-4 border-b border-slate-200 flex flex-col md:flex-row justify-between items-center bg-slate-50 shrink-0 gap-3">
                <div className="flex items-center self-start md:self-auto gap-3 w-full md:w-auto">
                    <div className="w-8 h-8 md:w-10 md:h-10 shrink-0 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center text-white shadow-md shadow-blue-200">
                        <Bot size={20} className="md:w-6 md:h-6" />
                    </div>
                    <div>
                        <h2 className="font-bold text-slate-800 text-base md:text-lg leading-tight md:leading-normal">{t("tutor.title")}</h2>
                        <div className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-[10px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide md:normal-case md:tracking-normal">{t("nav.tutor")}</span>
                        </div>
                    </div>
                </div>

                {/* Toggle Modo */}
                <div className="flex bg-slate-200 rounded-lg p-1 self-stretch md:self-auto mt-1 md:mt-0">
                    <button
                        onClick={() => setMode("concreto")}
                        className={`flex-1 md:flex-none px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-bold transition-all ${mode === "concreto" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            }`}
                    >
                        {t("tutor.mode.concrete")}
                    </button>
                    <button
                        onClick={() => setMode("tecnico")}
                        className={`flex-1 md:flex-none px-3 md:px-4 py-1.5 md:py-2 rounded-md text-xs md:text-sm font-bold transition-all ${mode === "tecnico" ? "bg-white text-blue-600 shadow-sm" : "text-slate-500 hover:text-slate-700"
                            }`}
                    >
                        {t("tutor.mode.technical")}
                    </button>
                </div>
            </header>

            {/* Área de Chat */}
            <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 scroll-smooth"
            >
                {messages.map((msg: any) => (
                    <div key={msg.id} className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                        {/* Avatar */}
                        <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center text-white shadow-sm ${msg.role === "assistant" ? "bg-blue-600" : "bg-slate-800"}`}>
                            {msg.role === "assistant" ? <Bot size={20} /> : <User size={20} />}
                        </div>

                        {/* Burbuja */}
                        <div className={`max-w-[80%] rounded-2xl p-4 shadow-sm relative group ${msg.role === "assistant"
                            ? "bg-white border text-slate-800 rounded-tl-none border-slate-200 prose prose-slate prose-sm"
                            : "bg-blue-600 text-white rounded-tr-none"
                            }`}>
                            {msg.content}
                            <div className={`text-[10px] font-medium mt-3 uppercase tracking-wider flex items-center justify-between ${msg.role === "assistant" ? "text-slate-400" : "text-blue-300"
                                }`}>
                                <span>{msg.role === "assistant" ? "Tutor" : "Mariana"}</span>

                                {msg.role === "assistant" && (
                                    <button
                                        onClick={() => speakMessage(msg.id, msg.content)}
                                        className="text-slate-400 hover:text-blue-600 transition-colors bg-slate-100 p-1.5 rounded-md opacity-0 group-hover:opacity-100 focus:opacity-100"
                                        title={speakingId === msg.id ? "Detener audio" : "Leer en voz alta"}
                                    >
                                        {speakingId === msg.id ? <Square size={14} className="fill-current" /> : <Volume2 size={14} />}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {isLoading && (
                    <div className="flex gap-4">
                        <div className="w-10 h-10 shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white">
                            <Bot size={20} />
                        </div>
                        <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-none p-4 flex gap-2 w-20 justify-center">
                            <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce"></span>
                            <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce delay-75"></span>
                            <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce delay-150"></span>
                        </div>
                    </div>
                )}
            </div>

            {/* Input de Imagen Seleccionada */}
            {selectedImage && (
                <div className="p-4 border-t border-slate-200 bg-white flex shrink-0">
                    <div className="relative group rounded-xl overflow-hidden border-2 border-slate-200 shadow-sm h-32 w-32 shrink-0">
                        <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* Input Area */}
            <footer className="p-4 border-t border-slate-200 bg-white shrink-0">
                <form
                    onSubmit={handleSubmit}
                    className="flex items-end gap-3 bg-slate-100 rounded-2xl p-2 border border-slate-200 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100 transition-all"
                >

                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                    />

                    <button
                        type="button"
                        onClick={handleCameraCapture}
                        className="p-3 text-slate-500 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
                        title="Tomar foto de material de estudio"
                    >
                        <Camera size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="p-3 text-slate-500 hover:text-blue-600 hover:bg-white rounded-xl transition-all"
                        title="Subir foto de galería"
                    >
                        <ImageIcon size={22} />
                    </button>

                    <button
                        type="button"
                        onClick={startSpeechRecognition}
                        className={`p-3 rounded-xl transition-all ${isRecording ? "text-red-500 bg-red-100 animate-pulse" : "text-slate-500 hover:text-blue-600 hover:bg-white"}`}
                        title="Dictar pregunta"
                    >
                        {isRecording ? <Loader2 size={22} className="animate-spin" /> : <Mic size={22} />}
                    </button>

                    <textarea
                        className="flex-1 bg-transparent border-none focus:ring-0 resize-none max-h-32 min-h-[48px] p-3 text-slate-800 placeholder-slate-400 placeholder:font-medium"
                        placeholder={t("tutor.placeholder")}
                        value={input}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                handleSubmit(e as any);
                            }
                        }}
                    />

                    <button
                        type="submit"
                        disabled={!input.trim() || isLoading}
                        className="p-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-sm shadow-blue-200 mb-1 mr-1"
                    >
                        {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
                    </button>
                </form>
            </footer>
        </div>
    );
}
