import { ModuleData } from "@/types";

export const mockModules: Record<string, ModuleData> = {
    "1": {
        id: "1",
        title: "Módulo 1: Propósito de los Seguros",
        description: "Aprende los 4 pilares fundamentales de los seguros en Florida. Conceptos explicados de forma sencilla con analogías para que apruebes el examen 2-14 sin complicaciones.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-10 shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
                    <h2 class="text-2xl font-bold text-blue-900 mt-0 mb-4 relative z-10 flex items-center gap-3">
                        <span class="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm">💡</span> 
                        ¡Hola, Mariana!
                    </h2>
                    <p class="text-lg text-blue-800/80 mb-0 relative z-10 font-medium leading-relaxed">Bienvenida a tu primera clase. Olvídate de las definiciones legales aburridas. Aquí vamos a usar lógica y ejemplos de la vida real para que los conceptos se queden en tu memoria para siempre. En el examen te harán preguntas con trampas verbales, yo te enseñaré a detectarlas.</p>
                </div>

                <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 border-b pb-4">
                    <span class="text-indigo-600">1.</span> El Concepto de Riesgo: ¿Aprender a Apostar o a Proteger?
                </h3>
                <p class="text-slate-600 text-lg">En el mundo de los seguros, el "Riesgo" no es el peligro en sí (como el fuego), sino la <strong>incertidumbre</strong> de perder dinero. El examen estatal te pedirá que distingas entre dos tipos. Memoriza esta tabla:</p>
                
                <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div class="bg-white border rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div class="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl font-bold">❌</div>
                            <h4 class="text-xl font-bold text-slate-800">Riesgo Especulativo</h4>
                        </div>
                        <ul class="space-y-4 text-slate-600">
                            <li class="flex items-start gap-3"><span class="text-rose-500 font-bold">•</span> <strong>Concepto:</strong> Puedes ganar o puedes perder.</li>
                            <li class="flex items-start gap-3"><span class="text-rose-500 font-bold">•</span> <strong>Ejemplo:</strong> Invertir en Bitcoin o ir al casino.</li>
                            <li class="flex items-start gap-3"><span class="text-rose-500 font-bold">•</span> <strong>Regla del Examen:</strong> ¡NO es asegurable! Las aseguradoras no te protegen de tomar malas decisiones de inversión.</li>
                        </ul>
                    </div>

                    <div class="bg-white border rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">✅</div>
                            <h4 class="text-xl font-bold text-slate-800">Riesgo Puro</h4>
                        </div>
                        <ul class="space-y-4 text-slate-600">
                            <li class="flex items-start gap-3"><span class="text-emerald-500 font-bold">•</span> <strong>Concepto:</strong> Solo puedes perder o quedar igual (no hay ganancia).</li>
                            <li class="flex items-start gap-3"><span class="text-emerald-500 font-bold">•</span> <strong>Ejemplo:</strong> Enfermarte, chocar el carro o fallecer.</li>
                            <li class="flex items-start gap-3"><span class="text-emerald-500 font-bold">•</span> <strong>Regla del Examen:</strong> ¡Es el ÚNICO tipo asegurable!</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-10 font-medium">
                    <p class="text-amber-900 m-0"><strong>Tip Mariana:</strong> Si hay posibilidad de ganancia, NO es asegurable.</p>
                </div>

                <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 border-b pb-4 mt-12">
                    <span class="text-indigo-600">2.</span> Peligros vs. Agravantes (Peril vs. Hazard)
                </h3>
                <p class="text-slate-600 text-lg mb-8">Esta es otra pregunta obligatoria. Mariana, imagina esto: Tienes una escalera resbaladiza en casa y te caes rompiéndote el brazo.</p>

                <div class="flex flex-col md:flex-row gap-6 mb-12 not-prose">
                    <div class="flex-1 bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                        <div class="text-4xl mb-4">💥</div>
                        <h4 class="font-bold text-lg text-slate-800 mb-2 uppercase tracking-tighter">Peligro (Peril)</h4>
                        <p class="text-slate-500 text-sm">Es la CAUSA directa.<br/><strong>La Caída.</strong></p>
                    </div>
                    <div class="flex items-center justify-center text-slate-200 hidden md:flex">
                        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </div>
                    <div class="flex-1 bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                        <div class="text-4xl mb-4">⚠️</div>
                        <h4 class="font-bold text-lg text-slate-800 mb-2 uppercase tracking-tighter">Agravante (Hazard)</h4>
                        <p class="text-slate-500 text-sm">Es la CONDICIÓN.<br/><strong>La Escalera Resbaladiza.</strong></p>
                    </div>
                </div>

                <div class="bg-indigo-900 text-white p-8 rounded-[2rem] shadow-xl my-12 relative overflow-hidden not-prose">
                    <div class="absolute right-0 top-0 opacity-10">
                        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-4 relative z-10 text-white">Reto de Mariana #1</h3>
                    <p class="text-indigo-200 mb-6 relative z-10">Si dejas un cigarro encendido en el sofá por descuido, ¿qué tipo de agravante es?</p>
                    <div class="bg-white/10 p-5 rounded-2xl border border-white/20 relative z-10 backdrop-blur-sm">
                        <p class="m-0 font-bold text-emerald-300">Respuesta: Morale (Conducta). Es negligencia por falta de cuidado, no malicia.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Riesgo Puro", definition: "El único riesgo asegurable. Posibilidad de perder, cero de ganar." },
            { term: "Riesgo Especulativo", definition: "Inasegurable. Tienes posibilidad tanto de perder como de ganar (juego, bolsa)." },
            { term: "Peligro (Peril)", definition: "La causa específica de la pérdida asegurada (fuego, huracán, muerte)." },
            { term: "Agravante (Hazard)", definition: "Condición o actitud que AUMENTA la probabilidad de que ocurra un Peligro." },
            { term: "Ley de los Grandes Números", definition: "Principio estadístico. Entre más grande sea el grupo de personas, más predecibles serán las pérdidas." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál de los siguientes riesgos es considerado asegurable por una compañía de seguros?",
                options: ["Invertir en acciones de tecnología", "El riesgo de un incendio en el hogar", "Apostar en el Super Bowl", "Comprar una propiedad para revenderla más cara"],
                correctAnswer: 1,
                explanation: "Solo el Riesgo Puro (fuego, enfermedad, muerte) es asegurable. Las inversiones y apuestas son Riesgo Especulativo porque ofrecen posibilidad de ganancia."
            },
            {
                id: 2,
                question: "Una escalera rota en una casa es un ejemplo de un agravante:",
                options: ["Moral", "De Conducta (Morale)", "Físico", "Legal"],
                correctAnswer: 2,
                explanation: "Una escalera rota es una condición física y tangible, por lo tanto es un Agravante Físico."
            },
            {
                id: 3,
                question: "La 'Causa' de una pérdida se define en seguros como:",
                options: ["Agravante", "Peligro (Peril)", "Incertidumbre", "Riesgo Especulativo"],
                correctAnswer: 1,
                explanation: "El Peligro (Peril) es la causa directa del daño. El Agravante solo aumenta la posibilidad de que ocurra."
            }
        ]
    },
    "3": {
        id: "3",
        title: "Módulo 3: Cláusulas y Provisiones",
        description: "Domina las reglas del juego: Periodo de Gracia, Incontestabilidad y Reincorporación. Conceptos clave para no fallar en el examen.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-[2rem] mb-12 shadow-sm">
                    <h2 class="text-2xl font-black text-indigo-900 mt-0 mb-4">¡Atención Mariana! 🎯</h2>
                    <p class="text-lg text-indigo-800 leading-relaxed m-0">Este módulo es vital. Las cláusulas son las "reglas" que protegen tanto al asegurado como a la compañía. En el examen de Florida, les encanta preguntar sobre los **tiempos legales** (días y años). Vamos a memorizarlos con lógica.</p>
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm italic">C1</span>
                    Cláusula de Incontestabilidad (Incontestability)
                </h3>
                <p class="text-lg text-slate-600 mb-8">Mariana, imagina que cometiste un error honesto en tu solicitud (como olvidar mencionar una visita al médico hace 4 años). </p>
                
                <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm mb-10 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                        <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    </div>
                    <p class="text-xl font-bold text-slate-900 mb-4">La Regla de los 2 Años</p>
                    <p class="text-slate-600 leading-relaxed">Durante los primeros <strong>2 años</strong>, la compañía puede investigar y cancelar la póliza si descubre mentiras (fraude). Pero después de 2 años, ¡la póliza es incontestable! No importa lo que encuentren, tienen que pagar.</p>
                    <div class="mt-4 inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black">EXCEPCIÓN: Falta de pago de primas.</div>
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 mt-16">
                    <span class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm italic">C2</span>
                    Periodo de Gracia (Grace Period)
                </h3>
                <p class="text-lg text-slate-600 mb-8">Es el "salvavidas" cuando olvidas pagar. En Florida, para seguros de vida individual, la ley es estricta:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                    <div class="bg-amber-50 p-8 rounded-[2rem] border border-amber-200">
                        <h4 class="font-black text-amber-900 uppercase tracking-widest text-sm mb-4">El Tiempo</h4>
                        <p class="text-3xl font-black text-amber-600 mb-2">31 Días</p>
                        <p class="text-amber-800/80 text-sm font-medium">Es el estándar en la mayoría de las pólizas en Florida.</p>
                    </div>
                    <div class="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl">
                        <h4 class="font-black text-slate-400 uppercase tracking-widest text-sm mb-4">¿Qué pasa si falleces?</h4>
                        <p class="text-slate-200 text-sm leading-relaxed">Si Mariana fallece durante el periodo de gracia, la compañía <strong>PAGA el beneficio</strong>, pero resta la prima que debías.</p>
                    </div>
                </div>

                <div class="bg-indigo-900 p-10 rounded-[3rem] text-white shadow-2xl my-16 relative overflow-hidden not-prose">
                    <div class="relative z-10 text-center">
                        <h4 class="text-2xl font-black mb-4">Reincorporación (Reinstatement)</h4>
                        <p class="text-indigo-200 text-lg max-w-2xl mx-auto mb-8 font-medium italic">"Mariana, si tu póliza caducó hace tiempo, puedes 'revivirla' en lugar de comprar una nueva."</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                            <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <p class="text-[10px] font-bold uppercase opacity-60 mb-2">Límite</p>
                                <p class="font-bold">3 Años (típico)</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <p class="text-[10px] font-bold uppercase opacity-60 mb-2">Requisito 1</p>
                                <p class="font-bold">Prueba de Asegurabilidad</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <p class="text-[10px] font-bold uppercase opacity-60 mb-2">Requisito 2</p>
                                <p class="font-bold">Pagar todas las primas + interés</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Incontestabilidad", definition: "Periodo de 2 años tras el cual la aseguradora no puede negar un reclamo por errores en la solicitud." },
            { term: "Periodo de Gracia", definition: "31 días extra para pagar la prima sin que la póliza caduque." },
            { term: "Reincorporación", definition: "Proceso de reactivar una póliza caducada cumpliendo requisitos médicos y de pago." },
            { term: "Suicidio", definition: "Cláusula que excluye el pago si ocurre en los primeros 2 años." }
        ],
        questions: [
            {
                id: 1,
                question: "Si un asegurado fallece durante el Periodo de Gracia, ¿qué acción tomará la aseguradora?",
                options: [
                    "Negar el reclamo por falta de pago",
                    "Pagar el beneficio total sin deducciones",
                    "Pagar el beneficio menos la prima adeudada",
                    "Devolver solo las primas pagadas"
                ],
                correctAnswer: 2,
                explanation: "La póliza sigue vigente en el periodo de gracia. Se paga el beneficio muerte, pero lógicamente se cobra la prima que el cliente no pagó."
            },
            {
                id: 2,
                question: "¿Cuál es el tiempo máximo general para solicitar la Reincorporación de una póliza en Florida?",
                options: ["1 año", "2 años", "3 años", "5 años"],
                correctAnswer: 2,
                explanation: "La mayoría de las pólizas de vida permiten la reincorporación hasta 3 años después de la caducidad."
            },
            {
                id: 3,
                question: "Después de cuántos años una póliza de seguro de vida suele volverse 'Incontestable'?",
                options: ["1 año", "2 años", "3 años", "Inmediatamente"],
                correctAnswer: 1,
                explanation: "El estándar legal en Florida es de 2 años para que la cláusula de incontestabilidad entre en vigor."
            }
        ]
    },
    "4": {
        id: "4",
        title: "Módulo 4: Anualidades",
        description: "El seguro de vida al revés. Aprende cómo crear un ingreso que Mariana nunca pueda sobrevivir.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-[2rem] mb-12 shadow-sm">
                    <h2 class="text-2xl font-black text-amber-900 mt-0 mb-4">¿Qué es una Anualidad? 💰</h2>
                    <p class="text-lg text-amber-800 leading-relaxed m-0 italic">"Mariana, si el seguro de vida protege contra morir demasiado pronto, la anualidad protege contra **vivir demasiado tiempo** (quedarse sin dinero)."</p>
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm italic">4.1</span>
                    Fases de la Anualidad
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>
                        </div>
                        <h4 class="font-black text-slate-900 text-xl mb-2">Acumulación</h4>
                        <p class="text-slate-600 text-sm">Pones dinero (primas) y este crece con impuestos diferidos. Es la etapa de "siembra".</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                        <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12h14"/></svg>
                        </div>
                        <h4 class="font-black text-slate-900 text-xl mb-2">Anualización (Distribución)</h4>
                        <p class="text-slate-600 text-sm">El dinero acumulado se convierte en un flujo de pagos mensuales. Es la etapa de "cosecha".</p>
                    </div>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl my-16 relative overflow-hidden not-prose">
                    <h3 class="text-2xl font-black mb-6">Tipos de Anualidades para el Examen</h3>
                    <ul class="space-y-6">
                        <li class="flex items-start gap-4">
                            <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5"></div>
                            <div>
                                <strong class="text-blue-400 text-lg">Inmediata (SPIA):</strong> Los pagos comienzan en menos de 1 año (generalmente en 30 días). Se compra con un pago único.
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5"></div>
                            <div>
                                <strong class="text-purple-400 text-lg">Diferida:</strong> Los pagos comienzan en el futuro (más de 1 año). Puedes pagar poco a poco o un solo pago.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Anualización", definition: "El proceso de convertir un valor acumulado en una serie de pagos periódicos." },
            { term: "Diferimiento fiscal", definition: "Las ganancias en una anualidad no pagan impuestos hasta que se retiran." },
            { term: "Propietario vs Anualista", definition: "El dueño paga las primas; el anualista recibe los beneficios." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es el objetivo principal de una Anualidad?",
                options: ["Protección en caso de muerte", "Crear un patrimonio inmediato", "Proporcionar ingresos durante el retiro", "Pagar gastos finales"],
                correctAnswer: 2,
                explanation: "Las anualidades están diseñadas para liquidar un patrimonio y convertirlo en ingresos constantes para la jubilación."
            }
        ]
    },
    "5": {
        id: "5",
        title: "Módulo 5: Seguro Social (Social Security)",
        description: "Entiende el sistema OASDI y cómo calificar para los beneficios de supervivencia e incapacidad.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-blue-600 p-10 rounded-3xl text-white shadow-xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">OASDI: El Código Maestro</h2>
                    <p class="text-blue-100 text-lg m-0">Mariana, Social Security no es solo para el retiro. Significa Old-Age, Survivors, and Disability Insurance.</p>
                </div>

                <h3 class="text-2xl font-black mb-6">Estatus de Cobertura</h3>
                <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 mb-10">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-blue-600">40</div>
                            <div>
                                <p class="font-bold text-slate-900">Totalmente Asegurado (Fully Insured)</p>
                                <p class="text-sm text-slate-500">Requiere 40 créditos (aprox. 10 años de trabajo). Da acceso a TODOS los beneficios.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-blue-400">6</div>
                            <div>
                                <p class="font-bold text-slate-900">Asegurado Actualmente (Currently Insured)</p>
                                <p class="text-sm text-slate-500">Requiere 6 créditos en los últimos 3 años. Cobertura limitada (principalmente para sobrevivientes).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="not-prose bg-rose-50 border-2 border-rose-100 p-8 rounded-[2rem] mb-12">
                    <h4 class="text-rose-900 font-bold mb-2">🚨 Tip de Examen: El Periodo de Apagón (Blackout Period)</h4>
                    <p class="text-rose-800 text-sm italic leading-relaxed">Es el tiempo en que el cónyuge sobreviviente **no recibe beneficios** (cuando el hijo menor cumple 16 y hasta que el cónyuge cumple 60).</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "PIA (Primary Insurance Amount)", definition: "El monto total de beneficios mensuales que alguien recibe al jubilarse a su edad normal." },
            { term: "Blackout Period", definition: "Periodo sin beneficios para el cónyuge sobreviviente." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuántos créditos se necesitan para estar 'Totalmente Asegurado'?",
                options: ["6 créditos", "20 créditos", "40 créditos", "50 créditos"],
                correctAnswer: 2,
                explanation: "40 créditos o trimestres de cobertura equivalen a estar plenamente asegurado para la jubilación."
            }
        ]
    },
    "6": {
        id: "6",
        title: "Módulo 6: Planes de Retiro Calificados",
        description: "Incentivos fiscales para el ahorro. IRA tradicional, Roth IRA y planes corporativos como el 401(k).",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Ahorrar con el Tío Sam</h2>
                <p class="text-lg text-slate-600 mb-10">Mariana, un plan es "Calificado" si cumple las reglas del IRS para darte beneficios fiscales. La regla de oro es: **Contribuciones deducibles = Retiros tributables**.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-indigo-600 uppercase tracking-widest text-xs mb-4">IRA Tradicional</h4>
                        <ul class="space-y-3 text-slate-600 text-sm">
                            <li>• Contribuciones suelen ser deducibles.</li>
                            <li>• El crecimiento no paga impuestos hasta el retiro.</li>
                            <li>• Retiro obligatorio a los 73 años.</li>
                        </ul>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-rose-500 uppercase tracking-widest text-xs mb-4">Roth IRA</h4>
                        <ul class="space-y-3 text-slate-600 text-sm">
                            <li>• Contribuciones NO son deducibles (dinero después de impuestos).</li>
                            <li>• RETIROS CALIFICADOS SON 100% LIBRES DE IMPUESTOS.</li>
                            <li>• No hay edad de retiro obligatorio.</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-amber-100 p-8 rounded-[2rem] border-2 border-amber-200">
                    <h4 class="text-amber-900 font-bold mb-2">Penalización del 10%</h4>
                    <p class="text-amber-800 text-sm font-medium">Si Mariana retira dinero **antes de los 59 ½ años**, el IRS cobra un 10% de multa + impuestos normales (con algunas excepciones).</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Plan Calificado", definition: "Plan de retiro aprobado por el IRS con ventajas fiscales." },
            { term: "Rollover", definition: "Mover fondos de un plan a otro dentro de 60 días sin pagar impuestos inmediatamente." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es la principal ventaja de un Roth IRA?",
                options: [
                    "Contribuciones deducibles de impuestos",
                    "Retiros libres de impuestos al cumplir los requisitos",
                    "No tiene límites de contribución",
                    "Es obligatorio para todos los empleados"
                ],
                correctAnswer: 1,
                explanation: "El Roth IRA se financia con dinero ya tributado, por lo que los retiros futuros de capital y ganancias son libres de impuestos."
            }
        ]
    },
    "7": {
        id: "7",
        title: "Módulo 7: Conceptos de Seguros de Salud",
        description: "Introducción a la cobertura de salud. Deductibles, Coseguros y tipos de proveedores.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-8 opacity-20">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h2 class="text-white text-4xl font-black mt-0 mb-4 tracking-tighter">Bienvenida a Salud, Mariana</h2>
                    <p class="text-emerald-50 text-xl font-medium m-0 opacity-90">Pasamos de Vida a Salud. Aquí el objetivo es proteger tu bolsillo contra los gastos médicos y la pérdida de ingresos.</p>
                </div>

                <h3 class="text-2xl font-black mb-8">Conceptos de Compartir Costos</h3>
                <div class="space-y-6 mb-12">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm flex gap-6 items-center">
                        <div class="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl">D</div>
                        <div>
                            <h4 class="font-bold text-slate-900">Deducible</h4>
                            <p class="text-slate-600 text-sm">Lo que Mariana paga PRIMERO antes de que la aseguradora empiece a pagar.</p>
                        </div>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm flex gap-6 items-center">
                        <div class="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-xl">%</div>
                        <div>
                            <h4 class="font-bold text-slate-900">Coseguro (Co-insurance)</h4>
                            <p class="text-slate-600 text-sm">División porcentual de los gastos (ej. 80/20) entre Mariana y la compañía después del deducible.</p>
                        </div>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm flex gap-6 items-center border-emerald-200">
                        <div class="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl">MAX</div>
                        <div>
                            <h4 class="font-bold text-slate-900 font-black">Límite de Gastos de Bolsillo (Out-of-Pocket)</h4>
                            <p class="text-slate-600 text-sm">El "TECHO" de lo que Mariana pagaría en un año. Después de esto, la compañía paga el 100%.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Deducible", definition: "Monto inicial que paga el asegurado por año." },
            { term: "Coseguro", definition: "Porcentaje de los gastos que comparte el asegurado y la empresa (ej. 80-20)." },
            { term: "Co-pago", definition: "Monto fijo por cada visita al médico o receta." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Qué es el 'Out-of-Pocket Maximum'?",
                options: [
                    "El monto mínimo que paga la compañía",
                    "El límite máximo anual que el asegurado pagará",
                    "La prima más alta del mercado",
                    "Un cargo extra por médicos fuera de red"
                ],
                correctAnswer: 1,
                explanation: "Es el tope de seguridad para el cliente. Una vez alcanzado mediante deducibles y coseguros, la aseguradora asume el 100% de los costos cubiertos."
            }
        ]
    },
    "8": {
        id: "8",
        title: "Módulo 8: Pólizas de Gastos Médicos",
        description: "HMO vs PPO. Conoce las estructuras que dominan el mercado de salud en Florida.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">¿Quién es tu Proveedor?</h2>
                <p class="text-lg text-slate-600 mb-10">En Florida, la mayoría de los seguros se dividen en dos bandos. Memoriza esto, Mariana, porque el examen siempre pregunta las diferencias:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4 opacity-10">
                            <span class="text-4xl font-black">HMO</span>
                        </div>
                        <h4 class="font-black text-blue-900 text-xl mb-4">HMO (Health Maintenance Org)</h4>
                        <ul class="space-y-4 text-blue-800/80 text-sm font-medium">
                            <li class="flex items-center gap-2">✅ Enfocado en la PREVENCIÓN.</li>
                            <li class="flex items-center gap-2">✅ NECESITAS un Médico Primario (PCP).</li>
                            <li class="flex items-center gap-2">✅ Requiere 'Referidos' para especialistas.</li>
                            <li class="flex items-center gap-2">✅ Sin cobertura fuera de la red (excepto emergencias).</li>
                        </ul>
                    </div>
                    <div class="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4 opacity-10">
                            <span class="text-4xl font-black">PPO</span>
                        </div>
                        <h4 class="font-black text-indigo-900 text-xl mb-4">PPO (Preferred Provider Org)</h4>
                        <ul class="space-y-4 text-indigo-800/80 text-sm font-medium">
                            <li class="flex items-center gap-2">✅ Flexibilidad total.</li>
                            <li class="flex items-center gap-2">✅ NO necesitas Médico Primario.</li>
                            <li class="flex items-center gap-2">✅ No necesitas referidos.</li>
                            <li class="flex items-center gap-2">✅ Cobertura fuera de la red (pagando más).</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl my-16 not-prose">
                    <p class="text-2xl font-black mb-4">Capitación (Capitation)</p>
                    <p class="text-slate-400 leading-relaxed font-medium">Es como los HMO pagan a los médicos: una cantidad fija por cada miembro asignado, sin importar cuántas veces vea al doctor. Al doctor se le paga "por cabeza".</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "HMO", definition: "Organización que ofrece servicios de salud prepagados con énfasis en medicina preventiva." },
            { term: "PPO", definition: "Red de proveedores contratados que ofrecen descuentos a los asegurados." },
            { term: "PCP (Primary Care Physician)", definition: "El 'portero' (gatekeeper) en un HMO que coordina todo el cuidado." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es el rol principal del Médico de Atención Primaria (PCP) en un HMO?",
                options: ["Vender seguros", "Actuar como 'Portero' o Gatekeeper", "Decidir el costo de las primas", "Operar al paciente directamente"],
                correctAnswer: 1,
                explanation: "El PCP coordina todo el cuidado y debe emitir referidos para que el paciente vea a un especialista."
            }
        ]
    },
    "9": {
        id: "9",
        title: "Módulo 9: Seguros de Incapacidad (Disability)",
        description: "El seguro de vida en vida. Protege el activo más valioso de Mariana: su capacidad de ganar dinero.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-rose-50 border-l-8 border-rose-500 p-10 rounded-r-[3rem] mb-12">
                    <h2 class="text-rose-900 text-3xl font-black mt-0">Tu Máquina de Dinero 🏧</h2>
                    <p class="text-rose-800 text-lg m-0">Mariana, si tienes una máquina en el patio que imprime $5,000 al mes, la asegurarías, ¿verdad? Esa máquina eres TÚ.</p>
                </div>

                <h3 class="text-2xl font-black mb-6">Dos Definiciones Clave</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 mb-2">Propia Ocupación (Own Occ)</h4>
                        <p class="text-slate-600 text-sm">No puedes hacer TU trabajo específico. Paga más fácil pero la prima es más cara.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 mb-2">Cualquier Ocupación (Any Occ)</h4>
                        <p class="text-slate-600 text-sm">No puedes hacer ningún trabajo para el que estés calificado. Es más difícil de reclamar.</p>
                    </div>
                </div>

                <div class="bg-indigo-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden not-prose">
                    <h3 class="text-2xl font-black mb-6">Tiempos Matemáticos</h3>
                    <div class="space-y-6">
                        <div class="bg-white/10 p-6 rounded-2xl">
                            <p class="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-1">Periodo de Eliminación</p>
                            <p class="text-xl font-bold">Es el 'Deducible de tiempo'. Días que debes estar incapacitado antes de que empiecen a pagar.</p>
                        </div>
                        <div class="bg-white/10 p-6 rounded-2xl">
                            <p class="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-1">Periodo de Beneficio</p>
                            <p class="text-xl font-bold">Cuánto tiempo te pagarán (1 año, 5 años, hasta los 65).</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Elimination Period", definition: "Tiempo de espera antes de que se inicien los pagos." },
            { term: "Incapacidad Presunta", definition: "Pérdida de vista, habla, audición o dos extremidades. Se asume incapacidad total inmediata." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cómo afecta un periodo de eliminación más largo a la prima del seguro?",
                options: ["La prima aumenta", "La prima disminuye", "No tiene efecto", "La póliza se cancela"],
                correctAnswer: 1,
                explanation: "Como un deducible, si el cliente asume más riesgo (espera más tiempo), la compañía cobra menos."
            }
        ]
    },
    "10": {
        id: "10",
        title: "Módulo 10: Medicare y Suplemento de Medicare",
        description: "El gigante federal. Aprende las Partes A, B, C y D. Vital para el mercado Senior en Florida.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-blue-600 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
                    <h2 class="text-white text-4xl font-black mt-0 mb-4 tracking-tighter">Medicare en 4 Letras</h2>
                    <p class="text-blue-100 text-xl font-medium m-0 opacity-90">Mariana, para el examen 2-14, esto es pan comido si usas esta guía:</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 not-prose">
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-blue-600">A</span>
                        <h4 class="font-bold text-slate-900 mt-2">Hospital</h4>
                        <p class="text-slate-500 text-sm italic">Gratis si trabajaste 10 años.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-emerald-600">B</span>
                        <h4 class="font-bold text-slate-900 mt-2">Médico</h4>
                        <p class="text-slate-500 text-sm italic">Opcional. Tiene prima mensual.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-purple-600">C</span>
                        <h4 class="font-bold text-slate-900 mt-2">Medicare Advantage</h4>
                        <p class="text-slate-500 text-sm italic">Privado. Combina A y B.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-rose-500">D</span>
                        <h4 class="font-bold text-slate-900 mt-2">Drogas (Recetas)</h4>
                        <p class="text-slate-500 text-sm italic">Medicamentos recetados.</p>
                    </div>
                </div>

                <div class="bg-amber-50 p-8 rounded-[2rem] border-2 border-amber-200">
                    <h4 class="text-amber-900 font-bold mb-2">Medigap (Suplementos)</h4>
                    <p class="text-amber-800 text-sm leading-relaxed">Pólizas privadas que cubren los 'huecos' (deducibles y coseguros) de Medicare Parte A y B. **Nunca** se pueden vender con la Parte C.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Eligibilidad", definition: "65 años o incapacidad permanente (falla renal)." },
            { term: "Enrollment Period", definition: "7 meses alrededor del cumpleaños 65." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Qué parte de Medicare cubre las estadías en el hospital?",
                options: ["Parte A", "Parte B", "Parte C", "Parte D"],
                correctAnswer: 0,
                explanation: "La Parte A es el seguro de hospitalización. La B es para servicios médicos."
            }
        ]
    },
    "11": {
        id: "11",
        title: "Módulo 11: Cuidados a Largo Plazo (LTC)",
        description: "Protección cuando no puedes realizar las Actividades de la Vida Diaria (ADLs).",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Más allá de la medicina</h2>
                <p class="text-lg text-slate-600 mb-8">Mariana, el LTC no es para curarte, es para **ayudarte a vivir** cuando pierdes independencia. El examen se enfoca en las 6 ADLs:</p>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl mb-12 not-prose">
                    <p class="text-indigo-400 font-black uppercase text-xs tracking-widest mb-6 text-center">Las 6 ADLs Clave</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Bañarse</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Vestirse</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Comer</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Trasladarse</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Continencia</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Usar el baño</div>
                    </div>
                </div>

                <div class="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-[2rem] shadow-sm">
                    <h4 class="font-bold text-indigo-900 mb-2">Tratamiento Fiscal</h4>
                    <p class="text-indigo-800 text-sm italic">Las primas de LTC pueden ser deducibles de impuestos y los beneficios suelen estar libres de impuestos.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "ADLs", definition: "Activities of Daily Living. Gatillo para cobrar beneficios de LTC." },
            { term: "Niveles de Cuidado", definition: "Hábil (Skilled), Intermedio y Custodial." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuántas ADLs debe fallar un individuo generalmente para activar los beneficios de LTC?",
                options: ["1", "2", "6", "Ninguna"],
                correctAnswer: 1,
                explanation: "Generalmente se requiere la incapacidad para realizar al menos 2 de las 6 actividades de la vida diaria."
            }
        ]
    },
    "12": {
        id: "12",
        title: "Módulo 12: Planes de Seguro Médico de Grupo",
        description: "COBRA, HIPAA y ERISA. Cómo funcionan los beneficios en el lugar de trabajo.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Fuerza en Números 👥</h2>
                <p class="text-lg text-slate-600 mb-10">Mariana, en los seguros de grupo, el contrato es entre la aseguradora y el patrono. Los empleados reciben un **Certificado de Seguro**, no la póliza original.</p>

                <div class="bg-indigo-50 p-8 rounded-[2rem] border-2 border-indigo-100 mb-12">
                    <h3 class="text-indigo-900 font-bold mb-4">Reglas de COBRA</h3>
                    <p class="text-slate-700 leading-relaxed">Permite a Mariana continuar su seguro de salud después de dejar su trabajo. 
                        <ul class="mt-4 space-y-2 text-sm">
                            <li>• **18 meses:** Por dejar el trabajo voluntaria o involuntariamente.</li>
                            <li>• **36 meses:** Por divorcio o muerte del empleado.</li>
                            <li>• El empleado paga el 102% de la prima (el costo total + 2% de admin).</li>
                        </ul>
                    </p>
                </div>

                <div class="not-prose bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h4 class="text-xl font-bold">HIPAA y el Periodo de Estabilidad</h4>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed mb-0">Protege la privacidad y asegura que Mariana no pierda cobertura al cambiar de empleo si ya ha estado asegurada continuamente.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "COBRA", definition: "Ley federal que permite la continuación de cobertura de salud grupal tras ciertos eventos calificadores." },
            { term: "Contrato Maestro", definition: "Contrato único emitido al empleador en un plan de grupo." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es el tiempo máximo de continuación de COBRA por terminación de empleo?",
                options: ["12 meses", "18 meses", "24 meses", "36 meses"],
                correctAnswer: 1,
                explanation: "Para la terminación del empleo, COBRA ofrece hasta 18 meses de cobertura continuada."
            }
        ]
    },
    "13": {
        id: "13",
        title: "Módulo 13: Dental, Visión y Otros Seguros",
        description: "Coberturas complementarias. Aprende sobre los beneficios limitados y suplementos.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Cuidado Especializado</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-blue-600 mb-2">Dental</h4>
                        <p class="text-slate-600 text-sm italic">Suele tener periodos de espera para trabajos mayores y distinción entre preventivo y restaurador.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-emerald-600 mb-2">Visión</h4>
                        <p class="text-slate-600 text-sm italic">Cubre exámenes oculares anuales y una cantidad fija para monturas o lentes.</p>
                    </div>
                </div>

                <div class="bg-amber-50 p-8 rounded-[2rem] border-2 border-amber-100 italic text-amber-900">
                    "Mariana, recuerda que estas pólizas suelen tener 'Límites de Beneficio' bajos en comparación con el seguro médico mayor."
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Cuidado Preventivo", definition: "En dental, suele cubrirse al 100% sin deducible (limpiezas, Rayos X)." },
            { term: "Cuidado Restaurativo", definition: "Tratamientos como empastes o coronas, suelen requerir coseguro." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Qué tipo de servicio dental suele cubrirse al 100% en la mayoría de los planes?",
                options: ["Ortodoncia", "Servicios Preventivos", "Cirugía Oral", "Prótesis"],
                correctAnswer: 1,
                explanation: "Las pólizas dentales incentivan la prevención cubriendo limpiezas y exámenes anuales totalmente."
            }
        ]
    },
    "14": {
        id: "14",
        title: "Módulo 14: Impuestos y Seguros de Salud",
        description: "¿Deducible o no? Aprende el tratamiento fiscal de las primas y beneficios médicos.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">La Lógica Fiscal</h2>
                    <p class="text-slate-400 text-lg">Mariana, para el examen, grábate esto: **Si las primas se pagan con dinero 'Antes de Impuestos', los beneficios SERÁN tributables.**</p>
                </div>

                <div class="space-y-6">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Seguro de Salud Personal</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Las primas **no** son deducibles (a menos que excedan el 7.5% - 10% del ingreso). Pero... ¡Los beneficios por reclamos médicos están **Libres de Impuestos**!</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Seguro de Grupo (Pagado por el Patrono)</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Las primas son un gasto deducible para la empresa. Mariana no paga impuestos sobre las primas pagadas por su jefe.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Deducibilidad", definition: "Capacidad de restar un gasto del ingreso imponible." },
            { term: "Beneficios Libres de Impuestos", definition: "Pagos de la aseguradora por gastos médicos reales que no cuentan como ingreso." }
        ],
        questions: [
            {
                id: 1,
                question: "Generalmente, los beneficios recibidos de una póliza de gastos médicos personales están:",
                options: ["Sujetos a impuestos federales", "Libres de impuestos", "Sujetos a una multa del 10%", "Deducibles para el asegurado"],
                correctAnswer: 1,
                explanation: "Los beneficios que reembolsan gastos médicos reales no se consideran ingresos y están exentos de impuestos."
            }
        ]
    },
    "15": {
        id: "15",
        title: "Módulo 15: Ética y Mercado (Fair Marketing)",
        description: "Reglas de oro para el agente. Evita el Twisting y el Churning. Mantén tu licencia segura.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-rose-500 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
                    <h2 class="text-white text-4xl font-black mt-0 mb-4">Código de Honor del Agente</h2>
                    <p class="text-rose-100 text-xl font-medium m-0">Mariana, en Florida, el Comisionado de Seguros observa de cerca. Estas son las trampas que **NUNCA** debes cometer:</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white border-4 border-rose-100 p-8 rounded-[2.5rem] shadow-sm">
                        <h4 class="text-rose-600 font-black uppercase tracking-widest text-xs mb-4">🌪️ Twisting</h4>
                        <p class="text-slate-600 text-sm leading-relaxed italic">Convencer a un cliente de dejar su póliza actual para comprar una conmigo, usando comparaciones falsas o engañosas.</p>
                    </div>
                    <div class="bg-white border-4 border-rose-100 p-8 rounded-[2.5rem] shadow-sm">
                        <h4 class="text-rose-600 font-black uppercase tracking-widest text-xs mb-4">🔄 Churning</h4>
                        <p class="text-slate-600 text-sm leading-relaxed italic">Reemplazar una póliza del mismo cliente con otra de la MISMA compañía para ganar una nueva comisión, sin beneficio real para el cliente.</p>
                    </div>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
                    <h3 class="text-yellow-400 font-black mb-4">Rebating (Reembolso)</h3>
                    <p class="text-slate-400 m-0">Darle parte de tu comisión al cliente para que compre. **Es ilegal en la mayoría de los casos**, a menos que se sigan reglas estrictas publicadas por el agente.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Fiduciario", definition: "Persona en una posición de confianza financiera. El agente es fiduciario de la aseguradora y el cliente." },
            { term: "Misrepresentation", definition: "Hacer declaraciones falsas sobre los términos de una póliza." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cómo se llama la práctica ilegal de usar comparaciones engañosas para inducir a un cliente a reemplazar su póliza?",
                options: ["Churning", "Twisting", "Rebating", "Coercion"],
                correctAnswer: 1,
                explanation: "El Twisting implica engaño para cambiar de compañía. El Churning es dentro de la misma compañía."
            }
        ]
    },
    "16": {
        id: "16",
        title: "Módulo 16: Leyes y Reglas de Florida: Seguros de Vida",
        description: "Regulaciones específicas del estado del Sol. Divulgación y publicidad.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-indigo-900 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">Reglas de Florida 🌴</h2>
                    <p class="text-indigo-200 text-lg">Mariana, Florida es muy estricta con la protección del consumidor. Aquí tienes las reglas que **SIEMPRE** vienen en el examen:</p>
                </div>

                <div class="space-y-8">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 text-xl mb-4">Divulgación (Disclosure)</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Debes entregar una **Guía del Comprador** y un **Resumen de la Póliza** antes de aceptar el pago inicial. Esto ayuda a Mariana a comparar costos y beneficios de forma transparente.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 text-xl mb-4">Publicidad</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">El Agente es responsable de la publicidad que usa. No se pueden usar términos como "Plan de Ahorro" o "Plan de Inversión" para referirse a un seguro de vida.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Buyer's Guide", definition: "Documento genérico que explica los tipos de seguros de vida." },
            { term: "Policy Summary", definition: "Documento específico que detalla los costos y beneficios de la póliza comprada." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuándo debe entregarse la Guía del Comprador al solicitante?",
                options: ["30 días después de la emisión", "Antes de aceptar la prima inicial", "Solo si el cliente la pide", "Al momento del reclamo"],
                correctAnswer: 1,
                explanation: "Florida exige la entrega de la Guía del Comprador y el Resumen de la Póliza antes de recibir el pago inicial."
            }
        ]
    },
    "17": {
        id: "17",
        title: "Módulo 17: Leyes y Reglas de Florida: Seguros de Salud",
        description: "Periodos de gracia y disposiciones obligatorias en Florida.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Salud bajo la ley de FL</h2>
                <div class="bg-emerald-50 p-8 rounded-[2rem] border-2 border-emerald-100 mb-12">
                    <h3 class="text-emerald-900 font-bold mb-4">Periodos de Gracia en Florida</h3>
                    <p class="text-slate-700">Mariana, el tiempo extra para pagar depende de cómo pagues la prima:</p>
                    <ul class="mt-4 space-y-3">
                        <li class="flex items-center gap-3">🗓️ **7 días:** Primas pagadas semanalmente.</li>
                        <li class="flex items-center gap-3">🗓️ **10 días:** Primas pagadas mensualmente.</li>
                        <li class="flex items-center gap-3">🗓️ **31 días:** Todas las demás (trimestral, anual).</li>
                    </ul>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
                    <h4 class="text-xl font-bold mb-4">Aviso de Reclamo</h4>
                    <p class="text-slate-400 text-sm italic">El asegurado tiene **20 días** para avisar a la compañía que ha ocurrido una pérdida.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Grace Period", definition: "Días extra para pagar antes de que la póliza caduque (7, 10 o 31 días)." },
            { term: "Time of Payment of Claims", definition: "La aseguradora debe pagar los reclamos inmediatamente tras recibir la prueba de pérdida." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es el periodo de gracia en Florida para una póliza de salud con primas mensuales?",
                options: ["7 días", "10 días", "31 días", "45 días"],
                correctAnswer: 1,
                explanation: "Para pagos mensuales en Florida, el periodo de gracia obligatorio es de 10 días."
            }
        ]
    },
    "18": {
        id: "18",
        title: "Módulo 18: La Asociación de Garantía",
        description: "La red de seguridad. Qué pasa si la aseguradora quiebra.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-amber-500 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">Insolvencia: El Plan B</h2>
                    <p class="text-amber-100 text-lg">Si una compañía no puede pagar sus reclamos, la **Asociación de Garantía de Seguros de Vida y Salud de Florida** interviene para proteger a Mariana.</p>
                </div>

                <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm mb-10">
                    <h4 class="font-bold text-slate-900 mb-4">❌ La Regla de Oro del Marketing</h4>
                    <p class="text-slate-600 leading-relaxed italic">Es ilegal que un agente use la existencia de la Asociación de Garantía como un argumento de venta para convencer a Mariana de comprar una póliza. **¡No puedes decir que el estado garantiza la póliza!**</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Insolvencia", definition: "Incapacidad financiera de una aseguradora para cumplir sus obligaciones." },
            { term: "Advertising Prohibition", definition: "Prohibición de mencionar la Asociación de Garantía en materiales de venta." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Es legal mencionar la Asociación de Garantía durante una presentación de ventas?",
                options: ["Sí, para dar seguridad", "Solo si el cliente pregunta", "No, es una práctica ilegal", "Solo si la compañía es nueva"],
                correctAnswer: 2,
                explanation: "Mencionar la Asociación de Garantía para vender es ilegal porque podría dar una falsa sensación de seguridad estatal."
            }
        ]
    },
    "19": {
        id: "19",
        title: "Módulo 19: Procesos de Solicitud y Suscripción",
        description: "Cómo decide la empresa si acepta a Mariana. El arte de evaluar el riesgo.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Underwriting: Evaluando el Riesgo</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                        <h4 class="font-bold text-slate-900">La Solicitud (Application)</h4>
                        <p class="text-slate-600 text-sm">Es la fuente principal de información. Se divide en Parte 1 (General) y Parte 2 (Médica).</p>
                    </div>
                    <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                        <h4 class="font-bold text-slate-900">MIB (Medical Information Bureau)</h4>
                        <p class="text-slate-600 text-sm italic">Como un 'Buró de Crédito' de salud. Las aseguradoras comparten información médica de forma confidencial.</p>
                    </div>
                </div>

                <div class="bg-indigo-900 p-10 rounded-[3rem] text-white shadow-2xl">
                    <h3 class="text-2xl font-black mb-6">Clasificación de Riesgos</h3>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3">🌟 **Preferido:** Salud excelente, primas más bajas.</li>
                        <li class="flex items-center gap-3">✅ **Estándar:** Salud promedio, primas normales.</li>
                        <li class="flex items-center gap-3">⚠️ **Sub-estándar:** Riesgo mayor, primas más caras (Recargadas).</li>
                        <li class="flex items-center gap-3">❌ **Rechazado:** Riesgo demasiado alto.</li>
                    </ul>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Underwriter", definition: "El profesional que evalúa si el riesgo es aceptable para la compañía." },
            { term: "Firma del Agente", definition: "El agente debe firmar la solicitud como testigo de lo que dice el cliente." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es la función principal del Medical Information Bureau (MIB)?",
                options: ["Vender seguros médicos", "Prevenir el fraude compartiendo datos médicos", "Pagar reclamos de hospital", "Emitir licencias de agentes"],
                correctAnswer: 1,
                explanation: "El MIB ayuda a detectar omisiones o fraudes compartiendo información médica previa de los solicitantes."
            }
        ]
    },
    "20": {
        id: "20",
        title: "Módulo 20: El Rol del Agente como Fiduciario",
        description: "Responsabilidad y confianza. Cómo manejar el dinero de otros con integridad.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-indigo-50 border-l-8 border-indigo-600 p-10 rounded-r-[3rem] mb-12">
                    <h2 class="text-indigo-900 text-3xl font-black mt-0">Fiduciario: Una Posición de Honor</h2>
                    <p class="text-indigo-800 text-lg m-0 italic">"Mariana, ser fiduciario significa que el dinero de tus clientes es sagrado. No es tuyo, es de ellos o de la compañía."</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900">Manejo de Primas</h4>
                        <p class="text-slate-600 text-sm">Cualquier dinero que Mariana reciba debe ser remitido a la compañía inmediatamente. **Mezclar (Commingling)** fondos personales con fondos de la compañía es ilegal.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900">Autoridad del Agente</h4>
                        <ul class="text-xs space-y-2 mt-2 text-slate-500">
                            <li>• **Expresa:** Lo que dice tu contrato.</li>
                            <li>• **Implícita:** Cosas normales que haces para cumplir tu trabajo.</li>
                            <li>• **Aparente:** Lo que el cliente CREE que puedes hacer basado en tus acciones.</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Fiduciario", definition: "Persona que maneja dinero o propiedad de otros en una relación de confianza." },
            { term: "Commingling", definition: "Práctica ilegal de mezclar fondos del cliente con fondos personales." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Qué es 'Aparent Authority' (Autoridad Aparente)?",
                options: [
                    "Lo que está escrito en el contrato",
                    "Lo que el público razonable cree que el agente posee",
                    "Poderes dados por el estado",
                    "La capacidad de cobrar comisiones extra"
                ],
                correctAnswer: 1,
                explanation: "La autoridad aparente se basa en las apariencias que la compañía permite que el agente proyecte al público."
            }
        ]
    },
    "21": {
        id: "21",
        title: "Módulo 21: Gestión de Reclamaciones",
        description: "El momento de la verdad. Cómo se procesan los pagos de beneficios.",
        contentHtml: `
            <div class="prose prose-blue max-w-none text-center py-12">
                <h2 class="text-4xl font-black text-slate-900 mb-6">El Propósito Real</h2>
                <p class="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">Mariana, vendemos promesas. El reclamo es cuando esa promesa se cumple. Florida exige que los reclamos se paguen de manera **justa y oportuna**.</p>
                
                <div class="bg-slate-900 p-12 rounded-[3.5rem] mt-12 text-left text-white shadow-2xl">
                    <h4 class="text-indigo-400 font-bold mb-6 uppercase tracking-widest">Pasos en un Reclamo</h4>
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <span class="text-2xl font-black opacity-20">01</span>
                            <p><strong>Aviso de Pérdida:</strong> El cliente informa a la compañía.</p>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-2xl font-black opacity-20">02</span>
                            <p><strong>Formularios de Reclamo:</strong> La compañía envía los documentos en 15 días.</p>
                        </div>
                        <div class="flex gap-4">
                            <span class="text-2xl font-black opacity-20">03</span>
                            <p><strong>Prueba de Pérdida:</strong> El cliente envía evidencia (ej. acta de defunción).</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Proof of Loss", definition: "Evidencia formal enviada a la aseguradora para sustentar un reclamo." },
            { term: "Interest on Claims", definition: "En Florida, si un reclamo de vida tarda mucho en pagarse, se deben intereses." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuánto tiempo tiene la compañía para enviar los formularios de reclamo después de recibir el aviso?",
                options: ["5 días", "15 días", "30 días", "60 días"],
                correctAnswer: 1,
                explanation: "Por ley, la aseguradora tiene un máximo de 15 días para proveer los formularios necesarios al cliente."
            }
        ]
    },
    "22": {
        id: "22",
        title: "Módulo 22: Contratos de Seguros: Elementos Legales",
        description: "Qué hace que un contrato sea válido. Capacidad, Oferta, Aceptación y Consideración.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8">Los 4 Pilares del Contrato</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12 not-prose">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-blue-600">Consideración</h4>
                        <p class="text-slate-600 text-sm italic">Es el intercambio de VALOR. Mariana da la prima y la compañía da la promesa de pagar.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-emerald-600">Oferta y Aceptación</h4>
                        <p class="text-slate-600 text-sm italic">Mariana hace la oferta al enviar la solicitud firmada con el dinero.</p>
                    </div>
                </div>

                <div class="bg-rose-50 p-10 rounded-[3rem] border-2 border-rose-100">
                    <h4 class="text-rose-900 font-bold mb-2">Contrato de Adhesión (Adhesion)</h4>
                    <p class="text-rose-800 text-sm leading-relaxed italic">"Mariana, tú no redactas el contrato, la compañía lo hace. Por eso, si hay alguna ambigüedad, un tribunal siempre fallará **a tu favor**."</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Consideration", definition: "Algo de valor intercambiado por las partes." },
            { term: "Competent Parties", definition: "Deben ser mayores de edad, mentalmente sanos y no estar bajo coacción." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Qué elemento del contrato representa el pago de la prima por parte del asegurado?",
                options: ["Oferta", "Aceptación", "Consideración", "Capacidad"],
                correctAnswer: 2,
                explanation: "La consideración es el valor que cada parte aporta. La prima es la consideración del asegurado."
            }
        ]
    },
    "23": {
        id: "23",
        title: "Módulo 23: Garantías y Representaciones",
        description: "¿Verdad absoluta o verdad razonable? Aprende la diferencia legal.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">Tu Palabra es Ley</h2>
                    <p class="text-slate-400 text-lg">Mariana, en seguros de vida y salud, tus respuestas en la solicitud son **Representaciones**, no Garantías.</p>
                </div>

                <div class="space-y-6">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Representación</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Declaraciones que Mariana cree que son verdad a su mejor saber y entender. Solo si mientes sobre algo **Material** (grave), la compañía puede anular la póliza.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm border-rose-200">
                        <h4 class="font-bold text-rose-600">Ocultación (Concealment)</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Omitir a propósito un hecho importante. Si Mariana sabe que tiene una enfermedad grave y no lo dice, es ocultación.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Material Fact", definition: "Hecho tan importante que si la compañía lo supiera, habría rechazado el riesgo o cobrado más." },
            { term: "Warranties", definition: "Declaraciones garantizadas como 100% verdaderas (raras en seguros de vida)." }
        ],
        questions: [
            {
                id: 1,
                question: "La mayoría de las declaraciones hechas por un solicitante en una aplicación de seguro de vida se consideran:",
                options: ["Garantías", "Representaciones", "Incontestables", "Absolutas"],
                correctAnswer: 1,
                explanation: "Legalmente, las respuestas en la solicitud son representaciones: verdades según el mejor conocimiento del cliente."
            }
        ]
    },
    "24": {
        id: "24",
        title: "Módulo 24: Examen Final de Simulación",
        description: "La prueba definitiva para Mariana. 24 preguntas que cubren todo el manual.",
        contentHtml: `
            <div class="prose prose-blue max-w-none text-center">
                <div class="inline-flex items-center justify-center w-40 h-40 rounded-[3rem] bg-indigo-600 text-white mb-10 shadow-2xl shadow-indigo-200 animate-bounce">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                </div>
                <h2 class="text-5xl font-black text-slate-900 mb-6">¡Felicidades, Mariana! 🎓</h2>
                <p class="text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed mb-12">
                    Has recorrido todo el manual de seguros de Florida hoy. Estás a un paso de obtener tu licencia 2-14. Este examen final simula la presión del examen real.
                </p>
                
                <div class="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl text-left">
                    <h3 class="text-indigo-400 font-bold mb-6">Instrucciones del Final</h3>
                    <ul class="space-y-4 text-lg">
                        <li class="flex items-center gap-3">📝 **24 Preguntas de Alto Nivel**</li>
                        <li class="flex items-center gap-3">⏱️ **Sin Límite de Tiempo (pero ve rápido!)**</li>
                        <li class="flex items-center gap-3">🎯 **Objetivo: 80% o más**</li>
                    </ul>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Puntaje de Aprobación", definition: "70% en el examen estatal, pero Mariana busca el 100%." },
            { term: "Licencia 2-14", definition: "Autoriza a vender Vida y Anualidades en Florida." }
        ],
        questions: [
            {
                id: 1,
                question: "¿Cuál es el propósito del seguro de vida desde una perspectiva fiduciaria?",
                options: ["Enriquecer al agente", "Proveer seguridad financiera a beneficiarios", "Evitar el pago de todos los impuestos", "Invertir en la bolsa"],
                correctAnswer: 1,
                explanation: "El fin fiduciario es la protección y bienestar económico de quienes dependen del asegurado."
            }
        ]
    },
};

export const moduleTitles = [
    "Propósito de los Seguros",
    "Pólizas de Seguro de Vida",
    "Cláusulas y Provisiones",
    "Anualidades",
    "Seguro Social (Social Security)",
    "Planes de Retiro Calificados",
    "Conceptos de Seguros de Salud",
    "Pólizas de Gastos Médicos",
    "Seguros de Incapacidad",
    "Medicare y Suplemento de Medicare",
    "Cuidados a Largo Plazo (LTC)",
    "Planes de Seguro Médico de Grupo",
    "Dental, Visión y Otros Seguros",
    "Impuestos y Seguros de Salud",
    "Ética y Mercado (Fair Marketing)",
    "Leyes y Reglas de Florida: Seguros de Vida",
    "Leyes y Reglas de Florida: Seguros de Salud",
    "La Asociación de Garantía",
    "Procesos de Solicitud y Suscripción",
    "El Rol del Agente como Fiduciario",
    "Gestión de Reclamaciones",
    "Contratos de Seguros: Elementos Legales",
    "Garantías y Representaciones",
    "Examen Final de Simulación"
];
