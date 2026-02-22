import { ModuleData } from "@/types";

export const mockModules: Record<string, ModuleData> = {
    "1": {
        id: "1",
        title: "Module 1: Purpose of Insurance",
        description: "Learn the 4 fundamental pillars of insurance in Florida. Concepts explained simply with analogies to help you pass the 2-14 exam without complications.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 md:p-8 mb-10 shadow-sm relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full blur-3xl opacity-50 -mr-10 -mt-10"></div>
                    <h2 class="text-2xl font-bold text-blue-900 mt-0 mb-4 relative z-10 flex items-center gap-3">
                        <span class="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm">💡</span> 
                        Hello, Mariana!
                    </h2>
                    <p class="text-lg text-blue-800/80 mb-0 relative z-10 font-medium leading-relaxed">Welcome to your first class. Forget boring legal definitions. Here we will use logic and real-life examples so that concepts stick in your memory forever. The exam will have trick questions — I will teach you how to spot them.</p>
                </div>

                <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 border-b pb-4">
                    <span class="text-indigo-600">1.</span> The Concept of Risk: Gambling vs. Protection?
                </h3>
                <p class="text-slate-600 text-lg">In the world of insurance, "Risk" is not the danger itself (like fire), but the <strong>uncertainty</strong> of losing money. The state exam will ask you to distinguish between two types. Memorize this table:</p>
                
                <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div class="bg-white border rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div class="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xl font-bold">❌</div>
                            <h4 class="text-xl font-bold text-slate-800">Speculative Risk</h4>
                        </div>
                        <ul class="space-y-4 text-slate-600">
                            <li class="flex items-start gap-3"><span class="text-rose-500 font-bold">•</span> <strong>Concept:</strong> You can win OR lose.</li>
                            <li class="flex items-start gap-3"><span class="text-rose-500 font-bold">•</span> <strong>Example:</strong> Investing in Bitcoin or going to the casino.</li>
                            <li class="flex items-start gap-3"><span class="text-rose-500 font-bold">•</span> <strong>Exam Rule:</strong> NOT insurable! Insurers don't protect you from bad investment decisions.</li>
                        </ul>
                    </div>

                    <div class="bg-white border rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
                        <div class="flex items-center gap-4 mb-6">
                            <div class="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xl font-bold">✅</div>
                            <h4 class="text-xl font-bold text-slate-800">Pure Risk</h4>
                        </div>
                        <ul class="space-y-4 text-slate-600">
                            <li class="flex items-start gap-3"><span class="text-emerald-500 font-bold">•</span> <strong>Concept:</strong> You can only lose or break even (no possibility of gain).</li>
                            <li class="flex items-start gap-3"><span class="text-emerald-500 font-bold">•</span> <strong>Example:</strong> Getting sick, a car accident, or death.</li>
                            <li class="flex items-start gap-3"><span class="text-emerald-500 font-bold">•</span> <strong>Exam Rule:</strong> The ONLY insurable type!</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-10 font-medium">
                    <p class="text-amber-900 m-0"><strong>Mariana's Tip:</strong> If there's a possibility of GAIN, it's NOT insurable.</p>
                </div>

                <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 border-b pb-4 mt-12">
                    <span class="text-indigo-600">2.</span> Perils vs. Hazards
                </h3>
                <p class="text-slate-600 text-lg mb-8">This is another mandatory question. Mariana, imagine this: You have a slippery ladder at home and you fall, breaking your arm.</p>

                <div class="flex flex-col md:flex-row gap-6 mb-12 not-prose">
                    <div class="flex-1 bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                        <div class="text-4xl mb-4">💥</div>
                        <h4 class="font-bold text-lg text-slate-800 mb-2 uppercase tracking-tighter">Peril</h4>
                        <p class="text-slate-500 text-sm">The DIRECT cause.<br/><strong>The Fall.</strong></p>
                    </div>
                    <div class="flex-1 bg-white p-8 rounded-3xl border border-slate-200 text-center shadow-sm">
                        <div class="text-4xl mb-4">⚠️</div>
                        <h4 class="font-bold text-lg text-slate-800 mb-2 uppercase tracking-tighter">Hazard</h4>
                        <p class="text-slate-500 text-sm">The CONDITION.<br/><strong>The Slippery Ladder.</strong></p>
                    </div>
                </div>

                <div class="bg-indigo-900 text-white p-8 rounded-[2rem] shadow-xl my-12 relative overflow-hidden not-prose">
                    <h3 class="text-2xl font-bold mb-4 relative z-10 text-white">Mariana's Challenge #1</h3>
                    <p class="text-indigo-200 mb-6 relative z-10">If you carelessly leave a lit cigarette on the sofa, what type of hazard is this?</p>
                    <div class="bg-white/10 p-5 rounded-2xl border border-white/20 relative z-10 backdrop-blur-sm">
                        <p class="m-0 font-bold text-emerald-300">Answer: Morale Hazard (Behavior). It is negligence due to lack of care, not malice.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Pure Risk", definition: "The only insurable risk. Possibility of loss only, zero chance of gain." },
            { term: "Speculative Risk", definition: "Uninsurable. You have the possibility of both losing and gaining (gambling, stock market)." },
            { term: "Peril", definition: "The specific cause of an insured loss (fire, hurricane, death)." },
            { term: "Hazard", definition: "A condition or attitude that INCREASES the probability of a Peril occurring." },
            { term: "Law of Large Numbers", definition: "Statistical principle. The larger the group of people, the more predictable the losses will be." }
        ],
        questions: [
            {
                id: 1,
                question: "Which of the following risks is considered insurable by an insurance company?",
                options: ["Investing in tech stocks", "The risk of a house fire", "Betting on the Super Bowl", "Buying a property to resell at a higher price"],
                correctAnswer: 1,
                explanation: "Only Pure Risk (fire, illness, death) is insurable. Investments and bets are Speculative Risk because they offer a chance of gain."
            },
            {
                id: 2,
                question: "A broken staircase in a house is an example of a _____ hazard:",
                options: ["Moral", "Morale (Behavioral)", "Physical", "Legal"],
                correctAnswer: 2,
                explanation: "A broken staircase is a physical and tangible condition, therefore it is a Physical Hazard."
            },
            {
                id: 3,
                question: "The 'Cause' of a loss is defined in insurance as:",
                options: ["Hazard", "Peril", "Uncertainty", "Speculative Risk"],
                correctAnswer: 1,
                explanation: "The Peril is the direct cause of the damage. The Hazard only increases the possibility of it occurring."
            }
        ]
    },
    "2": {
        id: "2",
        title: "Module 2: Life Insurance Policies",
        description: "Term vs. Permanent. Understand the different types of life insurance and when to use each one for the exam.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-100 rounded-2xl p-6 md:p-8 mb-10 shadow-sm">
                    <h2 class="text-2xl font-bold text-indigo-900 mt-0 mb-4">The Insurance DNA Test 🧬</h2>
                    <p class="text-lg text-indigo-800/80 mb-0 font-medium leading-relaxed">Mariana, all life insurance policies fall into two categories. Your job is to know them backwards and forwards — because the exam loves to trick you with insurance type scenarios.</p>
                </div>

                <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 border-b pb-4">
                    <span class="text-indigo-600">1.</span> Term Life Insurance
                </h3>
                <p class="text-slate-600 text-lg">Think of Term as "Renting" protection. You pay a low premium for a set period (10, 20, 30 years). If you die during that time — the benefit is paid. If you survive — nothing.</p>
                
                <div class="not-prose grid grid-cols-1 sm:grid-cols-3 gap-4 my-10">
                    <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm text-center">
                        <p class="text-3xl font-black text-blue-600 mb-2">LEVEL</p>
                        <p class="text-sm text-slate-500 font-medium">Same premium and death benefit for the entire term.</p>
                    </div>
                    <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm text-center">
                        <p class="text-3xl font-black text-purple-600 mb-2">DECREASING</p>
                        <p class="text-sm text-slate-500 font-medium">Death benefit decreases over time. Used to cover a mortgage.</p>
                    </div>
                    <div class="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm text-center">
                        <p class="text-3xl font-black text-rose-500 mb-2">RENEWABLE</p>
                        <p class="text-sm text-slate-500 font-medium">Can be renewed without proof of insurability.</p>
                    </div>
                </div>

                <h3 class="flex items-center gap-3 text-2xl font-bold text-slate-800 mb-6 border-b pb-4 mt-12">
                    <span class="text-indigo-600">2.</span> Permanent Life Insurance
                </h3>
                <p class="text-slate-600 text-lg mb-8">This is "Owning" protection. It lasts your ENTIRE life and builds a Cash Value — like a savings account inside your policy.</p>

                <div class="not-prose grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <div class="bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl">
                        <h4 class="text-white font-black text-xl mb-4">Whole Life</h4>
                        <ul class="space-y-3 text-slate-300 text-sm">
                            <li>✅ Fixed premium forever</li>
                            <li>✅ Fixed death benefit</li>
                            <li>✅ Guaranteed cash value growth</li>
                            <li>✅ Most stable and predictable</li>
                        </ul>
                    </div>
                    <div class="bg-indigo-600 text-white p-8 rounded-[2rem] shadow-xl">
                        <h4 class="text-white font-black text-xl mb-4">Universal Life</h4>
                        <ul class="space-y-3 text-indigo-100 text-sm">
                            <li>✅ Flexible premiums</li>
                            <li>✅ Adjustable death benefit</li>
                            <li>✅ Interest-linked cash value</li>
                            <li>✅ More flexibility for the insured</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-2xl my-10 font-medium">
                    <p class="text-amber-900 m-0"><strong>Exam Key:</strong> If the question mentions "Cash Value" — it's always a PERMANENT policy.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Term Life", definition: "Provides coverage for a specified period. Pure death protection, no cash value." },
            { term: "Whole Life", definition: "Permanent coverage with fixed premiums and guaranteed cash value accumulation." },
            { term: "Universal Life", definition: "Flexible premium permanent insurance with adjustable death benefit and interest-sensitive cash value." },
            { term: "Cash Value", definition: "The savings component of a permanent life insurance policy that accumulates over time tax-deferred." },
            { term: "Death Benefit", definition: "The amount paid to beneficiaries upon the insured's death." }
        ],
        questions: [
            {
                id: 1,
                question: "Which type of life insurance policy accumulates cash value?",
                options: ["10-Year Term", "Annual Renewable Term", "Whole Life", "Decreasing Term"],
                correctAnswer: 2,
                explanation: "Permanent policies (Whole Life, Universal Life) accumulate cash value. Term insurance provides only pure death protection."
            },
            {
                id: 2,
                question: "A policyholder wants the most flexible permanent policy that allows premium adjustments. Which one should they choose?",
                options: ["Whole Life", "Term Life", "Universal Life", "Decreasing Term"],
                correctAnswer: 2,
                explanation: "Universal Life is the most flexible permanent policy, allowing the policyholder to adjust both premiums and death benefit amounts."
            }
        ]
    },
    "3": {
        id: "3",
        title: "Module 3: Policy Clauses and Provisions",
        description: "Master the rules of the game: Grace Period, Incontestability, and Reinstatement. Key concepts to not fail on the exam.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-indigo-50 border-l-4 border-indigo-600 p-8 rounded-r-[2rem] mb-12 shadow-sm">
                    <h2 class="text-2xl font-black text-indigo-900 mt-0 mb-4">Attention Mariana! 🎯</h2>
                    <p class="text-lg text-indigo-800 leading-relaxed m-0">This module is vital. Policy provisions are the "rules" that protect both the insured and the company. On the Florida exam, they love to ask about <strong>legal timeframes</strong> (days and years). Let's memorize them logically.</p>
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm italic">C1</span>
                    Incontestability Clause
                </h3>
                <p class="text-lg text-slate-600 mb-8">Mariana, imagine you made an honest mistake on your application (like forgetting to mention a doctor's visit 4 years ago).</p>
                
                <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm mb-10 relative overflow-hidden group">
                    <p class="text-xl font-bold text-slate-900 mb-4">The 2-Year Rule</p>
                    <p class="text-slate-600 leading-relaxed">During the first <strong>2 years</strong>, the company can investigate and cancel the policy if it discovers lies (fraud). But after 2 years, the policy is incontestable! No matter what they find, they must pay.</p>
                    <div class="mt-4 inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-black">EXCEPTION: Non-payment of premiums.</div>
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3 mt-16">
                    <span class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm italic">C2</span>
                    Grace Period
                </h3>
                <p class="text-lg text-slate-600 mb-8">The "lifesaver" when you forget to pay. In Florida, for individual life insurance, the law is strict:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-10 not-prose">
                    <div class="bg-amber-50 p-8 rounded-[2rem] border border-amber-200">
                        <h4 class="font-black text-amber-900 uppercase tracking-widest text-sm mb-4">The Time Period</h4>
                        <p class="text-3xl font-black text-amber-600 mb-2">31 Days</p>
                        <p class="text-amber-800/80 text-sm font-medium">This is the standard for most policies in Florida.</p>
                    </div>
                    <div class="bg-slate-900 p-8 rounded-[2rem] text-white shadow-xl">
                        <h4 class="font-black text-slate-400 uppercase tracking-widest text-sm mb-4">What if you die during this period?</h4>
                        <p class="text-slate-200 text-sm leading-relaxed">If Mariana dies during the grace period, the company <strong>PAYS the benefit</strong>, but deducts the overdue premium.</p>
                    </div>
                </div>

                <div class="bg-indigo-900 p-10 rounded-[3rem] text-white shadow-2xl my-16 relative overflow-hidden not-prose">
                    <div class="relative z-10 text-center">
                        <h4 class="text-2xl font-black mb-4">Reinstatement</h4>
                        <p class="text-indigo-200 text-lg max-w-2xl mx-auto mb-8 font-medium italic">"Mariana, if your policy lapsed a while ago, you can 'bring it back to life' instead of buying a new one."</p>
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                            <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <p class="text-[10px] font-bold uppercase opacity-60 mb-2">Time Limit</p>
                                <p class="font-bold">3 Years (typical)</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <p class="text-[10px] font-bold uppercase opacity-60 mb-2">Requirement 1</p>
                                <p class="font-bold">Proof of Insurability</p>
                            </div>
                            <div class="bg-white/10 p-4 rounded-2xl border border-white/10">
                                <p class="text-[10px] font-bold uppercase opacity-60 mb-2">Requirement 2</p>
                                <p class="font-bold">Pay all back premiums + interest</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Incontestability", definition: "2-year period after which the insurer cannot deny a claim based on errors in the application." },
            { term: "Grace Period", definition: "31 extra days to pay the premium without the policy lapsing." },
            { term: "Reinstatement", definition: "Process of reactivating a lapsed policy by meeting medical and payment requirements." },
            { term: "Suicide Clause", definition: "Clause that excludes payment if death by suicide occurs within the first 2 years." }
        ],
        questions: [
            {
                id: 1,
                question: "If an insured dies during the Grace Period, what action will the insurer take?",
                options: [
                    "Deny the claim for non-payment",
                    "Pay the full benefit without deductions",
                    "Pay the benefit minus the overdue premium",
                    "Return only the premiums paid"
                ],
                correctAnswer: 2,
                explanation: "The policy remains in force during the grace period. The death benefit is paid, but the overdue premium is logically deducted."
            },
            {
                id: 2,
                question: "What is the typical maximum time to apply for Reinstatement of a policy in Florida?",
                options: ["1 year", "2 years", "3 years", "5 years"],
                correctAnswer: 2,
                explanation: "Most life policies allow reinstatement up to 3 years after the lapse date."
            },
            {
                id: 3,
                question: "After how many years does a life insurance policy become 'Incontestable'?",
                options: ["1 year", "2 years", "3 years", "Immediately"],
                correctAnswer: 1,
                explanation: "The legal standard in Florida is 2 years for the incontestability clause to take effect."
            }
        ]
    },
    "4": {
        id: "4",
        title: "Module 4: Annuities",
        description: "Life insurance in reverse. Learn how to create income that Mariana can never outlive.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-amber-50 border-l-4 border-amber-500 p-8 rounded-r-[2rem] mb-12 shadow-sm">
                    <h2 class="text-2xl font-black text-amber-900 mt-0 mb-4">What is an Annuity? 💰</h2>
                    <p class="text-lg text-amber-800 leading-relaxed m-0 italic">"Mariana, if life insurance protects against dying too soon, an annuity protects against <strong>living too long</strong> (running out of money)."</p>
                </div>

                <h3 class="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <span class="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm italic">4.1</span>
                    Annuity Phases
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10 not-prose">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                        <h4 class="font-black text-slate-900 text-xl mb-2">Accumulation Phase</h4>
                        <p class="text-slate-600 text-sm">You put in money (premiums) and it grows tax-deferred. This is the "planting" stage.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm hover:shadow-md transition-all">
                        <h4 class="font-black text-slate-900 text-xl mb-2">Annuitization (Distribution) Phase</h4>
                        <p class="text-slate-600 text-sm">The accumulated money converts into a steady stream of monthly payments. This is the "harvest" stage.</p>
                    </div>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl my-16 relative overflow-hidden not-prose">
                    <h3 class="text-2xl font-black mb-6">Types of Annuities for the Exam</h3>
                    <ul class="space-y-6">
                        <li class="flex items-start gap-4">
                            <div class="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2.5"></div>
                            <div>
                                <strong class="text-blue-400 text-lg">Immediate (SPIA):</strong> Payments begin in less than 1 year (usually within 30 days). Purchased with a single lump-sum payment.
                            </div>
                        </li>
                        <li class="flex items-start gap-4">
                            <div class="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2.5"></div>
                            <div>
                                <strong class="text-purple-400 text-lg">Deferred:</strong> Payments begin in the future (more than 1 year). You can pay periodically or in a lump sum.
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Annuitization", definition: "The process of converting an accumulated value into a series of periodic payments." },
            { term: "Tax Deferral", definition: "Earnings in an annuity are not taxed until they are withdrawn." },
            { term: "Owner vs. Annuitant", definition: "The owner pays the premiums; the annuitant receives the benefits." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the primary purpose of an Annuity?",
                options: ["Death protection", "Building an immediate estate", "Providing income during retirement", "Paying final expenses"],
                correctAnswer: 2,
                explanation: "Annuities are designed to liquidate an estate and convert it into steady income during retirement."
            }
        ]
    },
    "5": {
        id: "5",
        title: "Module 5: Social Security (OASDI)",
        description: "Understand the OASDI system and how to qualify for survivor and disability benefits.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-blue-600 p-10 rounded-3xl text-white shadow-xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">OASDI: The Master Code</h2>
                    <p class="text-blue-100 text-lg m-0">Mariana, Social Security is not just for retirement. It stands for Old-Age, Survivors, and Disability Insurance.</p>
                </div>

                <h3 class="text-2xl font-black mb-6">Coverage Status</h3>
                <div class="bg-slate-50 p-8 rounded-[2rem] border border-slate-200 mb-10">
                    <div class="space-y-6">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-blue-600">40</div>
                            <div>
                                <p class="font-bold text-slate-900">Fully Insured</p>
                                <p class="text-sm text-slate-500">Requires 40 credits (approx. 10 years of work). Grants access to ALL benefits.</p>
                            </div>
                        </div>
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-blue-400">6</div>
                            <div>
                                <p class="font-bold text-slate-900">Currently Insured</p>
                                <p class="text-sm text-slate-500">Requires 6 credits in the last 3 years. Limited coverage (mainly for survivors).</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="not-prose bg-rose-50 border-2 border-rose-100 p-8 rounded-[2rem] mb-12">
                    <h4 class="text-rose-900 font-bold mb-2">🚨 Exam Tip: The Blackout Period</h4>
                    <p class="text-rose-800 text-sm italic leading-relaxed">This is the time when the surviving spouse receives <strong>NO benefits</strong> — when the youngest child turns 16 until the spouse turns 60.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "PIA (Primary Insurance Amount)", definition: "The total amount of monthly benefits someone receives upon retiring at their normal retirement age." },
            { term: "Blackout Period", definition: "Period with no benefits for the surviving spouse." }
        ],
        questions: [
            {
                id: 1,
                question: "How many credits are needed to be 'Fully Insured' for Social Security?",
                options: ["6 credits", "20 credits", "40 credits", "50 credits"],
                correctAnswer: 2,
                explanation: "40 quarters of coverage (credits) is the requirement to be fully insured for retirement benefits."
            }
        ]
    },
    "6": {
        id: "6",
        title: "Module 6: Qualified Retirement Plans",
        description: "Tax incentives for saving. Traditional IRA, Roth IRA, and corporate plans like 401(k).",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Saving with Uncle Sam</h2>
                <p class="text-lg text-slate-600 mb-10">Mariana, a plan is "Qualified" if it meets IRS rules to give you tax benefits. The golden rule is: <strong>Deductible contributions = Taxable withdrawals</strong>.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-indigo-600 uppercase tracking-widest text-xs mb-4">Traditional IRA</h4>
                        <ul class="space-y-3 text-slate-600 text-sm">
                            <li>• Contributions are usually deductible.</li>
                            <li>• Growth is not taxed until withdrawal.</li>
                            <li>• Mandatory withdrawal at age 73 (RMD).</li>
                        </ul>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-rose-500 uppercase tracking-widest text-xs mb-4">Roth IRA</h4>
                        <ul class="space-y-3 text-slate-600 text-sm">
                            <li>• Contributions are NOT deductible (after-tax money).</li>
                            <li>• QUALIFIED WITHDRAWALS ARE 100% TAX-FREE.</li>
                            <li>• No mandatory withdrawal age.</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-amber-100 p-8 rounded-[2rem] border-2 border-amber-200">
                    <h4 class="text-amber-900 font-bold mb-2">10% Penalty</h4>
                    <p class="text-amber-800 text-sm font-medium">If Mariana withdraws money <strong>before age 59 ½</strong>, the IRS charges a 10% penalty + normal taxes (with some exceptions).</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Qualified Plan", definition: "IRS-approved retirement plan with tax advantages." },
            { term: "Rollover", definition: "Moving funds from one plan to another within 60 days without paying taxes immediately." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the main advantage of a Roth IRA?",
                options: [
                    "Tax-deductible contributions",
                    "Tax-free withdrawals when requirements are met",
                    "It has no contribution limits",
                    "It is mandatory for all employees"
                ],
                correctAnswer: 1,
                explanation: "A Roth IRA is funded with after-tax money, so future withdrawals of principal and earnings are tax-free."
            }
        ]
    },
    "7": {
        id: "7",
        title: "Module 7: Health Insurance Concepts",
        description: "Introduction to health coverage. Deductibles, Co-insurance, and provider types.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-br from-emerald-500 to-teal-600 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
                    <div class="absolute top-0 right-0 p-8 opacity-20">
                        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                    <h2 class="text-white text-4xl font-black mt-0 mb-4 tracking-tighter">Welcome to Health, Mariana</h2>
                    <p class="text-emerald-50 text-xl font-medium m-0 opacity-90">We moved from Life to Health. Here the goal is to protect your pocket against medical expenses and loss of income.</p>
                </div>

                <h3 class="text-2xl font-black mb-8">Cost-Sharing Concepts</h3>
                <div class="space-y-6 mb-12">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm flex gap-6 items-center">
                        <div class="w-16 h-16 rounded-2xl bg-slate-900 text-white flex items-center justify-center font-black text-xl">D</div>
                        <div>
                            <h4 class="font-bold text-slate-900">Deductible</h4>
                            <p class="text-slate-600 text-sm">What Mariana pays FIRST before the insurance company starts paying.</p>
                        </div>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm flex gap-6 items-center">
                        <div class="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-black text-xl">%</div>
                        <div>
                            <h4 class="font-bold text-slate-900">Co-insurance (e.g. 80-20)</h4>
                            <p class="text-slate-600 text-sm">Percentage split of expenses (e.g. 80/20) between Mariana and the company after the deductible.</p>
                        </div>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm flex gap-6 items-center border-emerald-200">
                        <div class="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-black text-xl">MAX</div>
                        <div>
                            <h4 class="font-bold text-slate-900 font-black">Out-of-Pocket Maximum</h4>
                            <p class="text-slate-600 text-sm">The "CEILING" of what Mariana would pay in a year. After this, the company pays 100%.</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Deductible", definition: "Initial amount paid by the insured per year." },
            { term: "Co-insurance", definition: "Percentage of expenses shared by the insured and the company (e.g. 80-20)." },
            { term: "Co-pay", definition: "Flat fee for each doctor's visit or prescription." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the 'Out-of-Pocket Maximum'?",
                options: [
                    "The minimum amount the company pays",
                    "The maximum annual limit the insured will pay",
                    "The highest premium in the market",
                    "An extra charge for out-of-network doctors"
                ],
                correctAnswer: 1,
                explanation: "It is the safety cap for the client. Once reached through deductibles and co-insurance, the insurer covers 100% of covered costs."
            }
        ]
    },
    "8": {
        id: "8",
        title: "Module 8: Medical Expense Policies",
        description: "HMO vs PPO. Know the structures that dominate the Florida health market.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Who is your Provider?</h2>
                <p class="text-lg text-slate-600 mb-10">In Florida, most insurance plans fall into two camps. Memorize this, Mariana, because the exam always asks the differences:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4 opacity-10">
                            <span class="text-4xl font-black">HMO</span>
                        </div>
                        <h4 class="font-black text-blue-900 text-xl mb-4">HMO (Health Maintenance Org)</h4>
                        <ul class="space-y-4 text-blue-800/80 text-sm font-medium">
                            <li class="flex items-center gap-2">✅ Focused on PREVENTION.</li>
                            <li class="flex items-center gap-2">✅ YOU NEED a Primary Care Physician (PCP).</li>
                            <li class="flex items-center gap-2">✅ Requires 'Referrals' for specialists.</li>
                            <li class="flex items-center gap-2">✅ No out-of-network coverage (except emergencies).</li>
                        </ul>
                    </div>
                    <div class="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 right-0 p-4 opacity-10">
                            <span class="text-4xl font-black">PPO</span>
                        </div>
                        <h4 class="font-black text-indigo-900 text-xl mb-4">PPO (Preferred Provider Org)</h4>
                        <ul class="space-y-4 text-indigo-800/80 text-sm font-medium">
                            <li class="flex items-center gap-2">✅ Total flexibility.</li>
                            <li class="flex items-center gap-2">✅ YOU DO NOT need a Primary Care Physician.</li>
                            <li class="flex items-center gap-2">✅ No referrals needed.</li>
                            <li class="flex items-center gap-2">✅ Out-of-network coverage (paying more).</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl my-16 not-prose">
                    <p class="text-2xl font-black mb-4">Capitation</p>
                    <p class="text-slate-400 leading-relaxed font-medium">This is how HMOs pay doctors: a fixed amount for each assigned member, regardless of how many times they see the doctor. The doctor is paid "per head".</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "HMO", definition: "Organization that offers prepaid health services with an emphasis on preventive medicine." },
            { term: "PPO", definition: "Network of contracted providers offering discounts to insured individuals." },
            { term: "PCP (Primary Care Physician)", definition: "The 'gatekeeper' in an HMO who coordinates all care." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the primary role of the Primary Care Physician (PCP) in an HMO?",
                options: ["Sell insurance", "Act as a 'Gatekeeper'", "Decide premium costs", "Operate on the patient directly"],
                correctAnswer: 1,
                explanation: "The PCP coordinates all care and must issue referrals for the patient to see a specialist."
            }
        ]
    },
    "9": {
        id: "9",
        title: "Module 9: Disability Insurance",
        description: "Life insurance for the living. Protects Mariana's most valuable asset: her ability to earn money.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-rose-50 border-l-8 border-rose-500 p-10 rounded-r-[3rem] mb-12">
                    <h2 class="text-rose-900 text-3xl font-black mt-0">Your Money Machine 🏧</h2>
                    <p class="text-rose-800 text-lg m-0">Mariana, if you had a machine in your backyard printing $5,000 a month, you'd insure it, right? That machine is YOU.</p>
                </div>

                <h3 class="text-2xl font-black mb-6">Two Key Definitions</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 mb-2">Own Occupation (Own Occ)</h4>
                        <p class="text-slate-600 text-sm">You can't do YOUR specific job. Pays easier but the premium is more expensive.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 mb-2">Any Occupation (Any Occ)</h4>
                        <p class="text-slate-600 text-sm">You can't do any job for which you are qualified. Harder to claim.</p>
                    </div>
                </div>

                <div class="bg-indigo-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden not-prose">
                    <h3 class="text-2xl font-black mb-6">Mathematical Times</h3>
                    <div class="space-y-6">
                        <div class="bg-white/10 p-6 rounded-2xl">
                            <p class="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-1">Elimination Period</p>
                            <p class="text-xl font-bold">This is the 'Time Deductible'. Days you must be disabled before they start paying.</p>
                        </div>
                        <div class="bg-white/10 p-6 rounded-2xl">
                            <p class="text-indigo-300 font-bold uppercase text-xs tracking-widest mb-1">Benefit Period</p>
                            <p class="text-xl font-bold">How long they will pay you (1 year, 5 years, until age 65).</p>
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Elimination Period", definition: "Waiting time before payments start." },
            { term: "Presumptive Disability", definition: "Loss of sight, speech, hearing or two limbs. Implies immediate total disability." }
        ],
        questions: [
            {
                id: 1,
                question: "How does a longer elimination period affect the insurance premium?",
                options: ["Premium increases", "Premium decreases", "No effect", "Policy cancels"],
                correctAnswer: 1,
                explanation: "Like a deductible, if the client assumes more risk (waits longer), the company charges less."
            }
        ]
    },
    "10": {
        id: "10",
        title: "Module 10: Medicare and Supplements",
        description: "The Federal giant. Learn Parts A, B, C, and D. Vital for the Senior market in Florida.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-blue-600 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
                    <h2 class="text-white text-4xl font-black mt-0 mb-4 tracking-tighter">Medicare in 4 Letters</h2>
                    <p class="text-blue-100 text-xl font-medium m-0 opacity-90">Mariana, for the 2-14 exam, this is easy if you use this guide:</p>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 not-prose">
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-blue-600">A</span>
                        <h4 class="font-bold text-slate-900 mt-2">Hospital</h4>
                        <p class="text-slate-500 text-sm italic">Free if you worked 10 years.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-emerald-600">B</span>
                        <h4 class="font-bold text-slate-900 mt-2">Medical</h4>
                        <p class="text-slate-500 text-sm italic">Optional. Has a monthly premium.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-purple-600">C</span>
                        <h4 class="font-bold text-slate-900 mt-2">Medicare Advantage</h4>
                        <p class="text-slate-500 text-sm italic">Private. Combines A and B.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-6 rounded-3xl shadow-sm">
                        <span class="text-3xl font-black text-rose-500">D</span>
                        <h4 class="font-bold text-slate-900 mt-2">Drugs (Prescriptions)</h4>
                        <p class="text-slate-500 text-sm italic">Prescription medications.</p>
                    </div>
                </div>

                <div class="bg-amber-50 p-8 rounded-[2rem] border-2 border-amber-200">
                    <h4 class="text-amber-900 font-bold mb-2">Medigap (Supplements)</h4>
                    <p class="text-amber-800 text-sm leading-relaxed">Private policies that cover the 'gaps' (deductibles and co-insurance) of Medicare Part A and B. <strong>Never</strong> sold with Part C.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Eligibility", definition: "65 years old or permanent disability (kidney failure)." },
            { term: "Enrollment Period", definition: "7 months around the 65th birthday." }
        ],
        questions: [
            {
                id: 1,
                question: "Which part of Medicare covers hospital stays?",
                options: ["Part A", "Part B", "Part C", "Part D"],
                correctAnswer: 0,
                explanation: "Part A is hospital insurance. Part B is for medical services."
            }
        ]
    },
    "11": {
        id: "11",
        title: "Module 11: Long-Term Care (LTC)",
        description: "Protection when you can't perform Activities of Daily Living (ADLs).",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Beyond Medicine</h2>
                <p class="text-lg text-slate-600 mb-8">Mariana, LTC isn't to cure you, it's to <strong>help you live</strong> when you lose independence. The exam focuses on the 6 ADLs:</p>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl mb-12 not-prose">
                    <p class="text-indigo-400 font-black uppercase text-xs tracking-widest mb-6 text-center">The 6 Key ADLs</p>
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Bathing</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Dressing</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Eating</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Transferring</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Continence</div>
                        <div class="p-4 border border-white/10 rounded-2xl bg-white/5">Toileting</div>
                    </div>
                </div>

                <div class="bg-indigo-50 border-l-4 border-indigo-500 p-8 rounded-r-[2rem] shadow-sm">
                    <h4 class="font-bold text-indigo-900 mb-2">Tax Treatment</h4>
                    <p class="text-indigo-800 text-sm italic">LTC premiums may be tax-deductible and benefits are usually tax-free.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "ADLs", definition: "Activities of Daily Living. Trigger to claim LTC benefits." },
            { term: "Levels of Care", definition: "Skilled, Intermediate, and Custodial." }
        ],
        questions: [
            {
                id: 1,
                question: "How many ADLs must an individual generally fail to perform to trigger LTC benefits?",
                options: ["1", "2", "6", "None"],
                correctAnswer: 1,
                explanation: "Typically, the inability to perform at least 2 of the 6 activities of daily living is required."
            }
        ]
    },
    "12": {
        id: "12",
        title: "Module 12: Group Health Insurance Plans",
        description: "COBRA, HIPAA and ERISA. How workplace benefits function.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Strength in Numbers 👥</h2>
                <p class="text-lg text-slate-600 mb-10">Mariana, in group insurance, the contract is between the insurer and the employer. Employees receive a <strong>Certificate of Coverage</strong>, not the master policy.</p>

                <div class="bg-indigo-50 p-8 rounded-[2rem] border-2 border-indigo-100 mb-12">
                    <h3 class="text-indigo-900 font-bold mb-4">COBRA Rules</h3>
                    <p class="text-slate-700 leading-relaxed">Allows Mariana to continue her health insurance after leaving her job. 
                        <ul class="mt-4 space-y-2 text-sm">
                            <li>• <strong>18 months:</strong> For leaving the job voluntarily or involuntarily.</li>
                            <li>• <strong>36 months:</strong> For divorce or death of the employee.</li>
                            <li>• The employee pays 102% of the premium (total cost + 2% admin fee).</li>
                        </ul>
                    </p>
                </div>

                <div class="not-prose bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                    <div class="flex items-center gap-4 mb-6">
                        <div class="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-blue-400">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </div>
                        <h4 class="text-xl font-bold">HIPAA and Creditable Coverage</h4>
                    </div>
                    <p class="text-slate-400 text-sm leading-relaxed mb-0">Protects privacy and ensures Mariana doesn't lose coverage for pre-existing conditions when changing jobs if she has maintained continuous coverage.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "COBRA", definition: "Federal law that allows continuation of group health coverage after certain qualifying events." },
            { term: "Master Contract", definition: "Single contract issued to the employer in a group plan." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the maximum COBRA continuation period for employment termination?",
                options: ["12 months", "18 months", "24 months", "36 months"],
                correctAnswer: 1,
                explanation: "For employment termination (other than gross misconduct), COBRA offers up to 18 months of continued coverage."
            }
        ]
    },
    "13": {
        id: "13",
        title: "Module 13: Dental, Vision and Other Insurance",
        description: "Supplemental coverages. Learn about limited benefits and supplements.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Specialized Care</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-blue-600 mb-2">Dental</h4>
                        <p class="text-slate-600 text-sm italic">Usually has waiting periods for major work and distinguishes between preventive, basic, and major restorative care.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-emerald-600 mb-2">Vision</h4>
                        <p class="text-slate-600 text-sm italic">Covers annual eye exams and a fixed allowance for frames or lenses.</p>
                    </div>
                </div>

                <div class="bg-amber-50 p-8 rounded-[2rem] border-2 border-amber-100 italic text-amber-900">
                    "Mariana, remember that these limited policies usually have low 'Benefit Limits' compared to major medical insurance."
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Preventive Care", definition: "In dental, usually covered at 100% with no deductible (cleanings, X-Rays)." },
            { term: "Restorative Care", definition: "Treatments like fillings or crowns, usually requiring co-insurance." }
        ],
        questions: [
            {
                id: 1,
                question: "What type of dental service is usually covered at 100% in most plans?",
                options: ["Orthodontics", "Preventive Services", "Oral Surgery", "Prosthodontics"],
                correctAnswer: 1,
                explanation: "Dental policies incentivize prevention by fully covering cleanings and annual exams."
            }
        ]
    },
    "14": {
        id: "14",
        title: "Module 14: Taxes and Health Insurance",
        description: "Deductible or not? Learn the tax treatment of medical premiums and benefits.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">Tax Logic</h2>
                    <p class="text-slate-400 text-lg">Mariana, for the exam, engrave this: <strong>If premiums are paid with 'Pre-Tax' money, the benefits WILL BE taxable.</strong></p>
                </div>

                <div class="space-y-6">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Personal Health Insurance</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Premiums are <strong>not</strong> deductible (unless they exceed a certain percentage of your income). But... Claim benefits paid for medical expenses are <strong>Tax-Free</strong>!</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Group Medical (Employer Paid)</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">Premiums are a deductible business expense for the company. Mariana does not pay taxes on the premiums paid by her boss, and benefits are still tax-free.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Deductibility", definition: "Ability to subtract an expense from taxable income." },
            { term: "Tax-Free Benefits", definition: "Payments from the insurer for actual medical expenses that do not count as income." }
        ],
        questions: [
            {
                id: 1,
                question: "Generally, benefits received from a personal medical expense policy are:",
                options: ["Subject to federal taxes", "Tax-free", "Subject to a 10% penalty", "Deductible for the insured"],
                correctAnswer: 1,
                explanation: "Benefits that reimburse actual medical expenses are not considered income and are tax-exempt."
            }
        ]
    },
    "15": {
        id: "15",
        title: "Module 15: Ethics and Fair Marketing",
        description: "Golden rules for the agent. Avoid Twisting and Churning. Keep your license safe.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-rose-500 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12 relative overflow-hidden">
                    <h2 class="text-white text-4xl font-black mt-0 mb-4">Agent's Code of Honor</h2>
                    <p class="text-rose-100 text-xl font-medium m-0">Mariana, in Florida, the Insurance Commissioner watches closely. These are the traps you must <strong>NEVER</strong> fall into:</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white border-4 border-rose-100 p-8 rounded-[2.5rem] shadow-sm">
                        <h4 class="text-rose-600 font-black uppercase tracking-widest text-xs mb-4">🌪️ Twisting</h4>
                        <p class="text-slate-600 text-sm leading-relaxed italic">Convincing a client to drop their current policy to buy one from you, using false or misleading comparisons.</p>
                    </div>
                    <div class="bg-white border-4 border-rose-100 p-8 rounded-[2.5rem] shadow-sm">
                        <h4 class="text-rose-600 font-black uppercase tracking-widest text-xs mb-4">🔄 Churning</h4>
                        <p class="text-slate-600 text-sm leading-relaxed italic">Replacing a client's policy with another one from the SAME company just to earn a new commission, with no real benefit to the client.</p>
                    </div>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
                    <h3 class="text-yellow-400 font-black mb-4">Rebating</h3>
                    <p class="text-slate-400 m-0">Giving part of your commission to the client so they buy. <strong>It is illegal in most cases</strong>, unless strict rules published by the agent are followed in Florida.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Fiduciary", definition: "A person in a position of financial trust. The agent is a fiduciary to both the insurer and the client." },
            { term: "Misrepresentation", definition: "Making false statements about the terms of a policy." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the illegal practice of using misleading comparisons to induce a client to replace their policy from another company called?",
                options: ["Churning", "Twisting", "Rebating", "Coercion"],
                correctAnswer: 1,
                explanation: "Twisting involves deceit to switch companies. Churning is within the same company."
            }
        ]
    },
    "16": {
        id: "16",
        title: "Module 16: Florida Regulations: Life Insurance",
        description: "Specific regulations of the Sunshine State. Disclosure and advertising rules.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-indigo-900 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">Florida Rules 🌴</h2>
                    <p class="text-indigo-200 text-lg">Mariana, Florida is very strict about consumer protection. Here are the rules that <strong>ALWAYS</strong> appear on the exam:</p>
                </div>

                <div class="space-y-8">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 text-xl mb-4">Disclosure</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">You must deliver a <strong>Buyer's Guide</strong> and a <strong>Policy Summary</strong> before accepting the initial premium payment. This helps Mariana compare costs and benefits transparently.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-slate-900 text-xl mb-4">Advertising</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">The Agent is responsible for the advertising they use. You cannot use terms like "Savings Plan" or "Investment Plan" to refer to life insurance.</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Buyer's Guide", definition: "Generic document that explains the types of life insurance." },
            { term: "Policy Summary", definition: "Specific document detailing the costs and benefits of the specific policy purchased." }
        ],
        questions: [
            {
                id: 1,
                question: "When must the Buyer's Guide be delivered to the applicant?",
                options: ["30 days after issuance", "Prior to accepting the initial premium", "Only if the client asks for it", "At the time of claim"],
                correctAnswer: 1,
                explanation: "Florida requires delivery of the Buyer's Guide and Policy Summary prior to receiving the initial payment."
            }
        ]
    },
    "17": {
        id: "17",
        title: "Module 17: Florida Regulations: Health Insurance",
        description: "Grace periods and mandatory provisions in Florida health policies.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Health under FL Law</h2>
                <div class="bg-emerald-50 p-8 rounded-[2rem] border-2 border-emerald-100 mb-12">
                    <h3 class="text-emerald-900 font-bold mb-4">Grace Periods in Florida</h3>
                    <p class="text-slate-700">Mariana, the extra time to pay depends on how often you pay the premium:</p>
                    <ul class="mt-4 space-y-3">
                        <li class="flex items-center gap-3">🗓️ <strong>7 days:</strong> Weekly premium payments.</li>
                        <li class="flex items-center gap-3">🗓️ <strong>10 days:</strong> Monthly premium payments.</li>
                        <li class="flex items-center gap-3">🗓️ <strong>31 days:</strong> All other modes (quarterly, annual).</li>
                    </ul>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl">
                    <h4 class="text-xl font-bold mb-4">Notice of Claim</h4>
                    <p class="text-slate-400 text-sm italic">The insured has <strong>20 days</strong> to notify the company that a loss has occurred.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Grace Period", definition: "Extra days to pay before the policy lapses (7, 10, or 31 days)." },
            { term: "Time of Payment of Claims", definition: "The insurer must pay claims immediately upon receipt of written proof of loss." }
        ],
        questions: [
            {
                id: 1,
                question: "What is the mandatory grace period in Florida for a health policy with monthly premiums?",
                options: ["7 days", "10 days", "31 days", "45 days"],
                correctAnswer: 1,
                explanation: "For monthly premium payments in Florida, the mandatory grace period is 10 days."
            }
        ]
    },
    "18": {
        id: "18",
        title: "Module 18: The Guaranty Association",
        description: "The safety net. What happens if the insurance company goes bankrupt.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-amber-500 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-3xl font-black mt-0">Insolvency: Plan B</h2>
                    <p class="text-amber-100 text-lg">If a company cannot pay its claims, the <strong>Florida Life and Health Insurance Guaranty Association</strong> steps in to protect Mariana.</p>
                </div>

                <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm mb-10">
                    <h4 class="font-bold text-slate-900 mb-4">❌ The Golden Rule of Marketing</h4>
                    <p class="text-slate-600 leading-relaxed italic">It is illegal for an agent to use the existence of the Guaranty Association as a sales argument to convince Mariana to buy a policy. <strong>You cannot say the state guarantees the policy!</strong></p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Insolvency", definition: "Financial inability of an insurer to meet its obligations." },
            { term: "Advertising Prohibition", definition: "Strict prohibition against mentioning the Guaranty Association in sales materials." }
        ],
        questions: [
            {
                id: 1,
                question: "Is it legal to mention the Guaranty Association during a sales presentation?",
                options: ["Yes, to provide security", "Only if the client asks", "No, it is an illegal practice", "Only if the company is new"],
                correctAnswer: 2,
                explanation: "Mentioning the Guaranty Association to sell is illegal because it might give a false sense of state-backed security."
            }
        ]
    },
    "19": {
        id: "19",
        title: "Module 19: The Department of Financial Services (DFS)",
        description: "The sheriff of insurance in Florida. CFO, OIR and OFR. Who does what.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">The Regulators 🏛️</h2>
                <p class="text-lg text-slate-600 mb-10">Mariana, the insurance industry in Florida is massive. The state divides regulation into three main branches under the direction of the Chief Financial Officer (CFO).</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 not-prose">
                    <div class="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100 shadow-sm">
                        <h4 class="font-black text-blue-900 text-xl mb-4">DFS (Dept. of Financial Services)</h4>
                        <p class="text-blue-800/80 text-sm font-medium mb-4">Licenses agents and agencies, investigates fraud, protects consumers.</p>
                        <ul class="space-y-2 text-sm text-blue-700">
                            <li>• Issue your 2-14 license.</li>
                            <li>• Approve continuing education courses.</li>
                        </ul>
                    </div>
                    <div class="bg-indigo-50 p-8 rounded-[2.5rem] border border-indigo-100 shadow-sm">
                        <h4 class="font-black text-indigo-900 text-xl mb-4">OIR (Office of Insurance Regulation)</h4>
                        <p class="text-indigo-800/80 text-sm font-medium mb-4">Regulates COMPANIES, not agents. Approves forms and rates.</p>
                        <ul class="space-y-2 text-sm text-indigo-700">
                            <li>• Reviews policy forms.</li>
                            <li>• Ensures companies have enough money (solvency).</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100 italic text-emerald-900 shadow-sm">
                    <strong class="font-black text-emerald-700 block mb-2">Notice to DFS:</strong>
                    If you change your name, address, or email, you have <strong>30 days</strong> to notify the DFS. If you are criminally charged, you also have <strong>30 days</strong> to notify them.
                    <br><br>
                    You must maintain transaction records for <strong>3 years</strong>.
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Agent License", definition: "Issued by the DFS, authorizes you to sell." },
            { term: "Company Appointment", definition: "Required to actually sell a specific company's products. You can't sell without BOTH a license and an appointment." }
        ],
        questions: [
            {
                id: 1,
                question: "Which entity is responsible for approving the rates and policy forms of insurance companies in Florida?",
                options: ["The DFS", "The OIR", "The OFR", "The Governor"],
                correctAnswer: 1,
                explanation: "The Office of Insurance Regulation (OIR) handles the regulation of the companies themselves, including forms and rates."
            }
        ]
    },
    "20": {
        id: "20",
        title: "Module 20: Policy Replacement Rules",
        description: "How to legally replace a life insurance policy in Florida.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-amber-100 border-l-8 border-amber-500 p-10 rounded-r-[3rem] mb-12">
                    <h2 class="text-amber-900 text-3xl font-black mt-0 mb-4">Handling Replacements Safely</h2>
                    <p class="text-amber-800 text-lg m-0">Replacing a policy isn't illegal, Mariana. But doing it <em>wrong</em> is. The state wants to make sure the client knows exactly what they are losing and what they are gaining.</p>
                </div>

                <div class="space-y-6">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Agent Duties</h4>
                        <p class="text-slate-600 text-sm leading-relaxed mb-4">When Mariana takes an application, she MUST ask: "Will this policy replace an existing one?"</p>
                        <p class="text-slate-600 text-sm leading-relaxed">If the answer is YES, she must provide a <strong>Notice Regarding Replacement</strong> and leave a copy with the applicant.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-bold text-slate-900">Company Duties</h4>
                        <p class="text-slate-600 text-sm leading-relaxed">The replacing company must notify the existing insurer of the replacement within <strong>5 working days</strong>.</p>
                        <p class="text-slate-600 text-sm leading-relaxed">The replacing company must offer a <strong>30-day free look period</strong> for the new policy (instead of the standard 14 days in FL).</p>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Notice Regarding Replacement", definition: "Document signed by the applicant and agent acknowledging a replacement is occurring." },
            { term: "Conservation", definition: "Any attempt by the existing insurer to keep the policy in force and prevent the replacement." }
        ],
        questions: [
            {
                id: 1,
                question: "How long is the required Free Look period for a replacement life insurance policy in Florida?",
                options: ["10 days", "14 days", "21 days", "30 days"],
                correctAnswer: 3,
                explanation: "While the standard free look in FL is 14 days, a replacement policy MUST offer a 30-day free look to protect the consumer."
            }
        ]
    },
    "21": {
        id: "21",
        title: "Module 21: Group Health Laws (FL Specific)",
        description: "Florida laws concerning small employers and group health coverages.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Small Business Health</h2>
                <div class="bg-indigo-900 p-10 rounded-[3rem] text-white shadow-2xl mb-12 not-prose">
                    <h3 class="text-2xl font-black mb-4">Florida Health Claims Act</h3>
                    <p class="text-indigo-200 text-sm leading-relaxed mb-6">In Florida, insurance companies must process and pay health claims quickly.</p>
                    <ul class="space-y-3">
                        <li class="bg-white/10 p-4 rounded-xl">📄 <strong>Electronic claims:</strong> Must be paid within 20 days.</li>
                        <li class="bg-white/10 p-4 rounded-xl">✉️ <strong>Paper claims:</strong> Must be paid within 40 days.</li>
                    </ul>
                </div>

                <div class="bg-emerald-50 p-8 rounded-[2rem] border-2 border-emerald-100">
                    <h4 class="font-bold text-emerald-900 mb-2">Newborn Child Coverage</h4>
                    <p class="text-emerald-800 text-sm leading-relaxed">In Florida, health policies MUST cover newborn children of the insured from the <strong>moment of birth</strong>. The insured usually has 31 days to notify the insurer and pay any required premium.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Florida Health Claims Act", definition: "Law establishing strict time limits for paying health insurance claims." },
            { term: "Mini-COBRA", definition: "Florida's version of COBRA for small employers (fewer than 20 employees)." }
        ],
        questions: [
            {
                id: 1,
                question: "Under Florida law, how soon must a health insurer pay an electronically submitted claim?",
                options: ["10 days", "15 days", "20 days", "40 days"],
                correctAnswer: 2,
                explanation: "The Florida Health Claims Act mandates payment of electronic claims within 20 days."
            }
        ]
    },
    "22": {
        id: "22",
        title: "Module 22: General Insurance Principles",
        description: "Core concepts of risk sharing, law of large numbers, and types of insurers.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-br from-slate-800 to-slate-900 p-12 rounded-[3.5rem] text-white shadow-2xl mb-12">
                    <h2 class="text-white text-4xl font-black mt-0 mb-4 tracking-tighter">The Foundation</h2>
                    <p class="text-slate-300 text-xl font-medium m-0">Before selling, Mariana, you must understand WHAT insurance actually is: The transfer of risk.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-blue-600 mb-2">Law of Large Numbers</h4>
                        <p class="text-slate-600 text-sm leading-relaxed italic">The larger the group of people insured, the more accurately the company can predict future losses. This is the math behind insurance.</p>
                    </div>
                    <div class="bg-white border-2 border-slate-100 p-8 rounded-[2rem] shadow-sm">
                        <h4 class="font-black text-emerald-600 mb-2">Methods of Handling Risk</h4>
                        <ul class="text-slate-600 text-sm space-y-2">
                            <li>• Avoidance (not driving)</li>
                            <li>• Retention (self-insuring, deductibles)</li>
                            <li>• Transfer (buying insurance)</li>
                            <li>• Reduction (smoke detectors)</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-indigo-50 p-8 rounded-[2rem] border-2 border-indigo-100 not-prose">
                    <h4 class="font-bold text-indigo-900 mb-4">Types of Companies</h4>
                    <div class="space-y-4">
                        <div class="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
                            <strong>Stock Companies:</strong> Owned by shareholders. Issue non-participating policies.
                        </div>
                        <div class="bg-white p-4 rounded-xl shadow-sm border border-indigo-50">
                            <strong>Mutual Companies:</strong> Owned by policyholders. Issue participating policies (dividends).
                        </div>
                    </div>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Adverse Selection", definition: "The tendency of poorer risks to seek insurance more aggressively than average risks." },
            { term: "Speculative Risk", definition: "Chance of loss OR gain (gambling). Cannot be insured." },
            { term: "Pure Risk", definition: "Chance of loss ONLY. This is the only type of risk that is insurable." }
        ],
        questions: [
            {
                id: 1,
                question: "Which of the following describes the 'Law of Large Numbers'?",
                options: [
                    "Smaller groups are easier to manage and insure.",
                    "The larger the number of exposures, the closer actual losses will match projected losses.",
                    "Insurance companies must insure a large number of bad risks by law.",
                    "Premiums decrease as the number of claims increase."
                ],
                correctAnswer: 1,
                explanation: "Statistical predictability increases as the size of the group increases."
            }
        ]
    },
    "23": {
        id: "23",
        title: "Module 23: Application Pricing and Underwriting",
        description: "The application process from signatures to policy delivery.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <h2 class="text-3xl font-black text-slate-900 mb-8 tracking-tighter">Getting Approved ✍️</h2>
                <div class="bg-rose-50 p-8 rounded-[2rem] border-2 border-rose-100 mb-12">
                    <h3 class="text-rose-900 font-bold mb-4">The Signatures</h3>
                    <p class="text-slate-700 leading-relaxed mb-4">Mariana, an application usually requires 3 signatures:</p>
                    <ul class="space-y-2 mb-4">
                        <li>1. The Applicant</li>
                        <li>2. The Proposed Insured (if different)</li>
                        <li>3. The Agent</li>
                    </ul>
                    <p class="text-rose-800 text-sm font-bold mt-4">NEVER change information on an application without having the applicant initial the change, or complete a new application.</p>
                </div>

                <div class="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl not-prose">
                    <h4 class="text-xl font-bold mb-6">Conditional Receipt</h4>
                    <p class="text-slate-300 text-sm leading-relaxed">Given when Mariana collects the initial premium. It means coverage starts on the date of application OR the date of the medical exam (whichever is later), <strong>CONDITIONED</strong> upon the company approving the policy as applied for.</p>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Binding Receipt", definition: "Provides immediate coverage for a specified time (often used in Property/Casulty, rarely in Life)." },
            { term: "Statement of Good Health", definition: "Required if no premium was collected at application. Signed upon delivery to prove health hasn't changed." },
            { term: "MIB (Medical Information Bureau)", definition: "Non-profit database storing medical info from previous insurance applications." }
        ],
        questions: [
            {
                id: 1,
                question: "If an agent makes a mistake on an application, what is the best course of action?",
                options: [
                    "Use white-out and write over it",
                    "Cross it out and initial it themselves",
                    "Have the applicant cross it out, write the correct info, and initial the change",
                    "Send it to the underwriter to fix"
                ],
                correctAnswer: 2,
                explanation: "Only the applicant has the authority to change their answers on an application, and they must initial any changes."
            }
        ]
    },
    "24": {
        id: "24",
        title: "Module 24: Final Exam Review",
        description: "The ultimate simulation. Mix of 100 questions covering all 23 previous modules.",
        contentHtml: `
            <div class="prose prose-blue max-w-none">
                <div class="bg-gradient-to-r from-emerald-500 to-teal-500 p-12 rounded-[3.5rem] text-white shadow-2xl text-center">
                    <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                        <span class="text-4xl">🏆</span>
                    </div>
                    <h2 class="text-white text-5xl font-black mt-0 mb-4 tracking-tighter">You are ready, Mariana.</h2>
                    <p class="text-emerald-50 text-xl font-medium m-0 max-w-2xl mx-auto opacity-90">This is the final stretch. Below you have a full simulation designed with the exact flow and difficulty of the real state exam in Florida.</p>
                </div>

                <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 not-prose">
                    <div class="bg-white p-6 rounded-3xl border-2 border-slate-100 text-center">
                        <h4 class="font-black text-slate-900 text-lg mb-2">Passing Score</h4>
                        <span class="text-3xl font-black text-blue-600">70%</span>
                        <p class="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">Minimum</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border-2 border-slate-100 text-center">
                        <h4 class="font-black text-slate-900 text-lg mb-2">Time Limit</h4>
                        <span class="text-3xl font-black text-indigo-600">2.5</span>
                        <p class="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">Hours</p>
                    </div>
                    <div class="bg-white p-6 rounded-3xl border-2 border-slate-100 text-center">
                        <h4 class="font-black text-slate-900 text-lg mb-2">Questions</h4>
                        <span class="text-3xl font-black text-emerald-600">100</span>
                        <p class="text-slate-500 text-xs mt-2 uppercase tracking-widest font-bold">Multiple Choice</p>
                    </div>
                </div>

                <div class="mt-16 bg-slate-50 p-8 rounded-[2rem] border border-slate-200">
                    <h3 class="text-slate-900 font-bold mb-4">Exam Strategy:</h3>
                    <ul class="text-slate-600 space-y-3">
                        <li>1. Read the <strong>LAZ (Last Answer Zones - the last sentence of the question)</strong> first.</li>
                        <li>2. Eliminate the two obvious wrong answers immediately.</li>
                        <li>3. If it's a Florida Rules question, pick the exact number you memorized. Do not guess on days.</li>
                        <li>4. Mark questions for review if you are stuck, but ALWAYS pick an answer before moving on.</li>
                    </ul>
                </div>
            </div>
        `,
        keyConcepts: [
            { term: "Confidence", definition: "Your most important tool right now." },
            { term: "Pacing", definition: "Do not spend more than 1 minute per question." }
        ],
        questions: [
            {
                id: 1,
                question: "Which of the following statements about representations is correct?",
                options: [
                    "They are strictly guaranteed to be true in every detail.",
                    "If a representation is false, the contract is automatically voided.",
                    "They are statements believed to be true to the best of one's knowledge.",
                    "Representations are only used in health insurance, not life insurance."
                ],
                correctAnswer: 2,
                explanation: "Representations are statements made by the applicant that they believe to be true. Warranties are guaranteed to be true."
            }
        ]
    }
};

export const moduleTitles: Record<string, string> = {
    "1": "Module 1: Purpose of Insurance",
    "2": "Module 2: Life Insurance Policies",
    "3": "Module 3: Policy Clauses and Provisions",
    "4": "Module 4: Annuities",
    "5": "Module 5: Social Security",
    "6": "Module 6: Qualified Retirement Plans",
    "7": "Module 7: Health Insurance Concepts",
    "8": "Module 8: Medical Expense Policies",
    "9": "Module 9: Disability Insurance",
    "10": "Module 10: Medicare and Supplements",
    "11": "Module 11: Long-Term Care (LTC)",
    "12": "Module 12: Group Health Insurance",
    "13": "Module 13: Dental, Vision and Other Insurance",
    "14": "Module 14: Taxes and Health Insurance",
    "15": "Module 15: Ethics and Fair Marketing",
    "16": "Module 16: Florida Regulations",
    "17": "Module 17: Underwriting and Applications",
    "18": "Module 18: Policy Delivery and Service",
    "19": "Module 19: Beneficiaries and Settlement Options",
    "20": "Module 20: Business Insurance",
    "21": "Module 21: Variable Life and Annuities",
    "22": "Module 22: Health Insurance Regulations",
    "23": "Module 23: Federal Topics",
    "24": "Module 24: Exam Preparation"
};
