(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-app/app/jobs/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function JobDetails() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(37);
    if ($[0] !== "8c575bc822fe9ae7ddc4c8db4faa998db6fb4ece74a914beb6cadb262845ff3a") {
        for(let $i = 0; $i < 37; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8c575bc822fe9ae7ddc4c8db4faa998db6fb4ece74a914beb6cadb262845ff3a";
    }
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = {
            id: 1,
            title: "Frontend Developer",
            company: "CodeHaven",
            location: "Remote - Nigeria",
            type: "Full-time",
            description: "We are seeking a passionate Frontend Developer skilled in React.js and Tailwind CSS to join our fully remote team. You\u2019ll be responsible for building beautiful, responsive web interfaces and collaborating with backend engineers to deliver a smooth user experience.",
            requirements: [
                "2+ years experience with React.js",
                "Good understanding of Tailwind CSS",
                "Strong communication and teamwork skills"
            ],
            salary: "\u20A6300,000 - \u20A6400,000 / month"
        };
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            t0,
            {
                id: 2,
                title: "Backend Developer",
                company: "TechHive",
                location: "Remote - Nigeria",
                type: "Contract",
                description: "Looking for a Node.js developer experienced in REST APIs and MongoDB. Join our team to work on scalable backend systems for global clients.",
                requirements: [
                    "3+ years experience with Node.js",
                    "Familiarity with MongoDB and Express.js",
                    "Ability to work independently"
                ],
                salary: "\u20A6250,000 - \u20A6350,000 / month"
            }
        ];
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const jobs = t1;
    const [job, setJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    let t3;
    if ($[3] !== id) {
        t2 = ({
            "JobDetails[useEffect()]": ()=>{
                const foundJob = jobs.find({
                    "JobDetails[useEffect() > jobs.find()]": (j)=>j.id === parseInt(id)
                }["JobDetails[useEffect() > jobs.find()]"]);
                setJob(foundJob);
            }
        })["JobDetails[useEffect()]"];
        t3 = [
            id
        ];
        $[3] = id;
        $[4] = t2;
        $[5] = t3;
    } else {
        t2 = $[4];
        t3 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    if (!job) {
        let t4;
        if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-screen text-gray-600",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Loading job details..."
                }, void 0, false, {
                    fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                    lineNumber: 75,
                    columnNumber: 98
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                lineNumber: 75,
                columnNumber: 12
            }, this);
            $[6] = t4;
        } else {
            t4 = $[6];
        }
        return t4;
    }
    let t4;
    if ($[7] !== router) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: {
                "JobDetails[<button>.onClick]": ()=>router.back()
            }["JobDetails[<button>.onClick]"],
            className: "text-blue-600 hover:underline mb-6",
            children: "← Back to jobs"
        }, void 0, false, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[7] = router;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] !== job.title) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "text-3xl font-bold text-gray-900 mb-2",
            children: job.title
        }, void 0, false, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 94,
            columnNumber: 10
        }, this);
        $[9] = job.title;
        $[10] = t5;
    } else {
        t5 = $[10];
    }
    let t6;
    if ($[11] !== job.company || $[12] !== job.location || $[13] !== job.type) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-gray-600 mb-4",
            children: [
                job.company,
                " • ",
                job.location,
                " • ",
                job.type
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 102,
            columnNumber: 10
        }, this);
        $[11] = job.company;
        $[12] = job.location;
        $[13] = job.type;
        $[14] = t6;
    } else {
        t6 = $[14];
    }
    let t7;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-800 mb-2",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 112,
            columnNumber: 10
        }, this);
        $[15] = t7;
    } else {
        t7 = $[15];
    }
    let t8;
    if ($[16] !== job.description) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t7,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 leading-relaxed",
                    children: job.description
                }, void 0, false, {
                    fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                    lineNumber: 119,
                    columnNumber: 36
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 119,
            columnNumber: 10
        }, this);
        $[16] = job.description;
        $[17] = t8;
    } else {
        t8 = $[17];
    }
    let t9;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-lg font-semibold text-gray-800 mb-2",
            children: "Requirements"
        }, void 0, false, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 127,
            columnNumber: 10
        }, this);
        $[18] = t9;
    } else {
        t9 = $[18];
    }
    let t10;
    if ($[19] !== job.requirements) {
        t10 = job.requirements.map(_JobDetailsJobRequirementsMap);
        $[19] = job.requirements;
        $[20] = t10;
    } else {
        t10 = $[20];
    }
    let t11;
    if ($[21] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "list-disc list-inside text-gray-700 space-y-1",
                    children: t10
                }, void 0, false, {
                    fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                    lineNumber: 142,
                    columnNumber: 37
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 142,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t11;
    } else {
        t11 = $[22];
    }
    let t12;
    if ($[23] !== job.salary) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "font-medium text-gray-900",
            children: [
                "💰 ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-blue-600",
                    children: job.salary
                }, void 0, false, {
                    fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                    lineNumber: 150,
                    columnNumber: 55
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 150,
            columnNumber: 11
        }, this);
        $[23] = job.salary;
        $[24] = t12;
    } else {
        t12 = $[24];
    }
    let t13;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition",
            children: "Apply Now"
        }, void 0, false, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 158,
            columnNumber: 11
        }, this);
        $[25] = t13;
    } else {
        t13 = $[25];
    }
    let t14;
    if ($[26] !== t12) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between mt-6",
            children: [
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 165,
            columnNumber: 11
        }, this);
        $[26] = t12;
        $[27] = t14;
    } else {
        t14 = $[27];
    }
    let t15;
    if ($[28] !== t11 || $[29] !== t14 || $[30] !== t5 || $[31] !== t6 || $[32] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-md rounded-2xl p-8",
            children: [
                t5,
                t6,
                t8,
                t11,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[28] = t11;
        $[29] = t14;
        $[30] = t5;
        $[31] = t6;
        $[32] = t8;
        $[33] = t15;
    } else {
        t15 = $[33];
    }
    let t16;
    if ($[34] !== t15 || $[35] !== t4) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "max-w-3xl mx-auto py-12 px-6",
            children: [
                t4,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 185,
            columnNumber: 11
        }, this);
        $[34] = t15;
        $[35] = t4;
        $[36] = t16;
    } else {
        t16 = $[36];
    }
    return t16;
}
_s(JobDetails, "V2dHdVgWGM4kimjjSqSYoPQP24M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JobDetails;
function _JobDetailsJobRequirementsMap(req, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        children: req
    }, index, false, {
        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
        lineNumber: 195,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "JobDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-app_app_jobs_%5Bid%5D_page_jsx_16664b6b._.js.map