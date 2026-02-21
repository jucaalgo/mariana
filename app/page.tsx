import Link from "next/link";
import { BookOpen, Target, Award, PlayCircle, ArrowRight, Sparkles, BookMarked, BrainCircuit, Rocket, Clock } from "lucide-react";
import { mockModules } from "@/lib/data";

export default function Dashboard() {
  const progress = 0;

  // Convert modules to a list and sort by ID
  const allModules = Object.values(mockModules).sort((a, b) => Number(a.id) - Number(b.id));

  const coursePlan = allModules.map((m, idx) => ({
    id: m.id,
    title: m.title,
    status: idx === 0 ? "next" : "locked",
    time: idx < 3 ? (idx === 0 ? "45 min" : idx === 1 ? "1h 20m" : "2h") : "1h 30m"
  }));

  return (
    <div className="max-w-6xl mx-auto space-y-8 md:space-y-10 animate-in fade-in duration-700">
      {/* Header Profile */}
      <header className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6 pb-6 border-b border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-500 to-rose-400 p-1 shadow-lg shadow-pink-200">
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-white flex items-center justify-center">
              <span className="text-2xl font-black text-pink-500">M</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">¡Hola, Mariana Lopez!</h1>
              <Sparkles className="text-amber-400" size={24} />
            </div>
            <p className="text-slate-500 mt-1 text-base md:text-lg">Tu viaje hacia la Licencia 2-14 comienza hoy. Paso a paso.</p>
          </div>
        </div>
        <div className="bg-slate-900 px-6 py-3 rounded-2xl flex items-center gap-3 shadow-xl">
          <Rocket className="text-emerald-400" size={24} />
          <div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Meta Principal</p>
            <p className="text-lg font-bold text-white">Aprobar a la Primera</p>
          </div>
        </div>
      </header>

      {/* Tarjeta de Progreso Premium */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-blue-900/20 text-white relative overflow-hidden flex flex-col md:flex-row items-center gap-8 md:gap-12 group">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white opacity-5 mix-blend-overlay rounded-full blur-3xl -mr-40 -mt-40 transition-transform duration-1000 group-hover:scale-110"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-20 mix-blend-overlay rounded-full blur-2xl -ml-20 -mb-20"></div>

        {/* Círculo de porcentaje animado (desde 0) */}
        <div className="relative shrink-0 w-40 h-40 md:w-52 md:h-52 flex items-center justify-center z-10 bg-white/10 rounded-full backdrop-blur-md border border-white/20 p-2 shadow-inner">
          <svg className="w-full h-full transform -rotate-90 drop-shadow-lg" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.2)" strokeWidth="6" fill="transparent" />
            <circle
              cx="50" cy="50" r="42" stroke="white" strokeWidth="6" fill="transparent"
              strokeDasharray="263.89" strokeDashoffset={263.89} // 0 progress
              className="transition-all duration-1000 ease-out" strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center justify-center text-white drop-shadow-md">
            <span className="text-4xl md:text-6xl font-black tracking-tighter">{progress}%</span>
            <span className="text-xs font-semibold uppercase tracking-widest opacity-80 mt-1">Completado</span>
          </div>
        </div>

        <div className="flex-1 relative z-10 w-full text-center md:text-left space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10 mb-2">
            <Target size={16} className="text-amber-300" />
            <span className="text-sm font-semibold tracking-wide text-white">INICIO DEL CURSO</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight drop-shadow-sm">El momento es ahora</h2>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl leading-relaxed mx-auto md:mx-0 font-medium">
            No necesitas saber nada previo. Hemos diseñado este curso para ti, Mariana. Iremos paso a paso, desde los conceptos más simples hasta que domines el manual completo.
          </p>

          <div className="pt-4 flex justify-center md:justify-start gap-4">
            <Link href="/modules/1" className="bg-white hover:bg-slate-50 text-blue-700 px-8 py-4 rounded-2xl text-lg font-bold transition-all flex items-center gap-3 shadow-xl hover:shadow-2xl hover:-translate-y-1 group">
              Empezar Módulo 1
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Ruta de Aprendizaje (Path) */}
        <div className="lg:col-span-2 bg-white rounded-[2rem] p-8 border border-slate-200 shadow-sm relative">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <BookMarked size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">Ruta de Aprendizaje</h3>
              <p className="text-slate-500 font-medium">Sigue el orden diseñado para garantizar tu éxito.</p>
            </div>
          </div>

          <div className="space-y-4 relative">
            {/* Línea vertical de conexión */}
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-slate-100 z-0"></div>

            {coursePlan.map((modulo, index) => (
              <div key={modulo.id} className={`relative z-10 group flex items-center p-4 rounded-2xl border transition-all ${modulo.status === 'next' ? 'bg-white border-indigo-200 shadow-md scale-100 ring-4 ring-indigo-50' : 'bg-white/50 border-slate-100 opacity-70'}`}>
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-sm mr-6 transition-colors ${modulo.status === 'next' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  <p className="text-2xl font-black">{index + 1}</p>
                </div>

                <div className="flex-1">
                  <h4 className={`text-lg font-bold ${modulo.status === 'next' ? 'text-indigo-900' : 'text-slate-600'}`}>{modulo.title}</h4>
                  <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
                    <Clock size={14} /> {modulo.time} estimado
                  </p>
                </div>

                {modulo.status === 'next' ? (
                  <Link href={`/modules/${modulo.id}`} className="ml-4 w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors">
                    <PlayCircle size={24} />
                  </Link>
                ) : (
                  <div className="ml-4 text-slate-300">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Herramientas Interactivos Sidebar */}
        < div className="space-y-6" >
          <Link href="/simulator" className="block w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 text-white shadow-xl hover:-translate-y-1 transition-transform group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10 transform group-hover:rotate-12 transition-transform duration-500">
              <BrainCircuit size={100} />
            </div>
            <BrainCircuit className="mb-4 text-emerald-400" size={32} />
            <h3 className="text-2xl font-bold mb-2">Simulador de Examen</h3>
            <p className="text-slate-300 font-medium mb-6">Bloqueado hasta completar el 50% del curso.</p>
            <div className="inline-flex items-center gap-2 font-bold text-sm bg-white/10 w-fit px-4 py-2 rounded-xl text-slate-400">
              Requiere progreso
            </div>
          </Link>

          <div className="bg-amber-50 rounded-[2rem] p-8 border border-amber-200">
            <h3 className="text-xl font-bold text-amber-900 mb-2">Metodología Didáctica</h3>
            <p className="text-amber-800/80 font-medium">Cada módulo contiene analogías visuales, tarjetas de memoria y retos para asegurar que absorbes la información sin aburrirte.</p>
          </div>
        </div >
      </div >
    </div >
  );
}
