"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Target, MessageSquare, LayoutDashboard, ShieldCheck, Languages } from "lucide-react";
import { useLanguage } from "./i18n-provider";

export function Sidebar() {
    const pathname = usePathname();
    const { t, language, setLanguage } = useLanguage();

    const navItems = [
        { name: t("nav.dashboard"), href: "/", icon: <LayoutDashboard size={20} /> },
        { name: t("nav.modules"), href: "/modules/1", icon: <BookOpen size={20} /> },
        { name: t("nav.simulator"), href: "/simulator", icon: <Target size={20} /> },
        { name: t("nav.tutor"), href: "/tutor", icon: <MessageSquare size={20} /> },
    ];

    return (
        <>
            {/* Desktop Sidebar (Hidden on mobile) */}
            <aside className="hidden md:flex w-72 bg-white border-r border-slate-100 flex-col h-full shrink-0 shadow-sm z-20">
                <div className="p-8">
                    <div className="flex items-center gap-2.5 text-indigo-600 font-black text-2xl tracking-tighter">
                        <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                            <ShieldCheck size={24} />
                        </div>
                        <span>EduSeguros</span>
                    </div>
                </div>

                <nav className="flex-1 px-4 space-y-1.5">
                    <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">{t("nav.mainMenu")}</p>
                    {navItems.map((item) => {
                        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl transition-all duration-300 group ${isActive
                                    ? "bg-indigo-600 text-white shadow-xl shadow-indigo-200"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-indigo-600"
                                    }`}
                            >
                                <span className={`${isActive ? "text-white" : "text-slate-400 group-hover:text-indigo-600"} transition-colors`}>
                                    {item.icon}
                                </span>
                                <span className="font-bold tracking-tight">{item.name}</span>
                            </Link>
                        );
                    })}
                </nav>

                <div className="px-6 pb-2">
                    <button
                        onClick={() => setLanguage(language === "en" ? "es" : "en")}
                        className="w-full flex items-center justify-between p-3 rounded-2xl border border-slate-200 bg-slate-50 hover:bg-indigo-50 hover:border-indigo-200 transition-colors text-slate-600 hover:text-indigo-700"
                    >
                        <div className="flex items-center gap-2 font-bold text-sm">
                            <Languages size={18} />
                            {language === "en" ? "English" : "Español"}
                        </div>
                        <span className="text-[10px] uppercase font-black tracking-widest bg-white shadow-sm border px-2 py-1 rounded-lg">
                            {language === "en" ? "EN" : "ES"}
                        </span>
                    </button>
                </div>

                <div className="p-6">
                    <div className="bg-slate-900 rounded-3xl p-5 flex items-center gap-4 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 p-0.5 shrink-0">
                            <div className="w-full h-full rounded-full border-2 border-slate-900 overflow-hidden bg-white flex items-center justify-center">
                                <span className="text-sm font-black text-pink-500 font-sans">M</span>
                            </div>
                        </div>
                        <div className="flex flex-col min-w-0">
                            <span className="text-sm font-bold text-white truncate">Mariana Lopez</span>
                            <span className="text-[10px] text-indigo-400 font-black uppercase tracking-widest">{t("nav.student")}</span>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile Bottom Navigation Bar (Hidden on Desktop) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-800 pb-safe z-50 flex justify-around items-center h-16 px-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${isActive ? "text-blue-400" : "text-slate-400 hover:text-slate-200"}`}
                        >
                            {/* Cloned icon with responsive size */}
                            <div className={`${isActive ? "scale-110" : ""} transition-transform`}>
                                {item.name === t("nav.dashboard") ? <LayoutDashboard size={20} /> :
                                    item.name === t("nav.modules") ? <BookOpen size={20} /> :
                                        item.name === t("nav.simulator") ? <Target size={20} /> : <MessageSquare size={20} />}
                            </div>
                            <span className="text-[10px] font-medium">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </>
    );
}
