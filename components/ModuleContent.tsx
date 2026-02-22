"use client";

import { mockModules } from "@/lib/data";
import { mockModules as mockModulesEn } from "@/lib/data-en";
import { KeyRound, ChevronLeft, Sparkles } from "lucide-react";
import Link from "next/link";
import { Quiz } from "@/components/Quiz";
import { useLanguage } from "@/components/i18n-provider";

export function ModuleContent({ id }: { id: string }) {
    const { t, language } = useLanguage();

    // Choose data source based on language
    const currentModules = language === "en" ? mockModulesEn : mockModules;
    const moduleData = currentModules[id];

    if (!moduleData) {
        return <div>Error loading module data.</div>;
    }

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
            {/* Top Navigation Bar */}
            <div className="flex items-center justify-between mb-4">
                <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-600 transition-colors font-bold text-xs tracking-widest uppercase">
                    <ChevronLeft size={18} />
                    {t("nav.dashboard")}
                </Link>

                <div className="bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2 shadow-sm border border-indigo-100">
                    <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></div>
                    Mariana Lopez
                </div>
            </div>

            <header className="bg-white rounded-[2.5rem] p-10 md:p-14 border border-slate-100 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-100 to-purple-50 rounded-full blur-3xl opacity-60 -mr-20 -mt-20"></div>

                <div className="flex items-center gap-2 text-indigo-600 mb-6 bg-indigo-50 w-fit px-4 py-1.5 rounded-full">
                    <Sparkles size={16} />
                    <span className="text-xs font-black uppercase tracking-widest">
                        {language === "en" ? "Interactive Course" : "Curso Interactivo"}
                    </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-none relative z-10">{moduleData.title}</h1>
                <p className="text-xl md:text-2xl text-slate-500 mt-6 max-w-3xl leading-relaxed relative z-10 font-medium">{moduleData.description}</p>
            </header>

            <div className="flex flex-col xl:flex-row gap-10 md:gap-14">
                {/* Main Content */}
                <div className="flex-1 space-y-12">
                    {/* HTML Content */}
                    <div className="bg-white p-8 md:p-14 rounded-[3rem] border border-slate-100 shadow-sm custom-content-wrapper relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-20"></div>
                        <article
                            dangerouslySetInnerHTML={{ __html: moduleData.contentHtml }}
                        />
                    </div>

                    {/* Quiz Interactive Section */}
                    {moduleData.questions && moduleData.questions.length > 0 && (
                        <section className="space-y-8 scroll-mt-10" id="quiz-section">
                            <div className="flex items-center gap-4 px-6">
                                <div className="h-px flex-1 bg-slate-200"></div>
                                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.3em]">{t("module.knowledgeCheck")}</span>
                                <div className="h-px flex-1 bg-slate-200"></div>
                            </div>
                            <Quiz questions={moduleData.questions} />
                        </section>
                    )}

                    {/* Completion Button */}
                    <div className="flex justify-center md:justify-end pt-8">
                        <Link href="/" className="bg-slate-900 hover:bg-indigo-600 text-white px-10 py-5 rounded-[2rem] text-xl font-black transition-all shadow-2xl hover:shadow-indigo-500/20 hover:-translate-y-1 flex items-center gap-3">
                            {t("nav.dashboard")}
                            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                <ChevronLeft size={20} className="rotate-180" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Key Concepts Sidebar */}
                <aside className="w-full xl:w-96 shrink-0">
                    <div className="bg-gradient-to-b from-slate-50 to-white rounded-[2.5rem] p-8 md:p-10 border border-slate-100 xl:sticky xl:top-8 shadow-sm">
                        <div className="flex items-center gap-3 text-slate-900 mb-10 border-b border-slate-100 pb-8">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-xl shadow-slate-200 border border-slate-50">
                                <KeyRound size={28} />
                            </div>
                            <div>
                                <h3 className="font-black text-2xl tracking-tighter">{t("module.keyConcepts")}</h3>
                                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">{language === "en" ? "Vocabulary" : "Vocabulario"}</p>
                            </div>
                        </div>

                        <ul className="space-y-6">
                            {moduleData.keyConcepts.map((concept, idx) => (
                                <li key={idx} className="group bg-white p-6 rounded-[1.5rem] border border-slate-50 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all cursor-default">
                                    <h4 className="font-bold text-indigo-900 text-sm uppercase tracking-wider mb-2 flex items-center gap-2 group-hover:text-indigo-600 transition-colors">
                                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover:bg-indigo-600 transition-colors"></div>
                                        {concept.term}
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed font-medium">
                                        {concept.definition}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}
