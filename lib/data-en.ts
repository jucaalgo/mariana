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
