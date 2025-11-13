(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-app/utils/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createApplication",
    ()=>createApplication,
    "createJob",
    ()=>createJob,
    "getAllApplications",
    ()=>getAllApplications,
    "getAllJobs",
    ()=>getAllJobs,
    "getAllUsers",
    ()=>getAllUsers,
    "getApplication",
    ()=>getApplication,
    "getJob",
    ()=>getJob,
    "getUser",
    ()=>getUser,
    "loginUser",
    ()=>loginUser,
    "signupUser",
    ()=>signupUser
]);
const BASE_URL = "http://127.0.0.1:8000";
const signupUser = async (data)=>{
    const res = await fetch(`${BASE_URL}/api/users/create/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
};
const loginUser = async (data)=>{
    const res = await fetch(`${BASE_URL}/api/token/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    return res.json();
};
const getAllUsers = async ()=>{
    const res = await fetch(`${BASE_URL}/api/users/all/`);
    return res.json();
};
const getUser = async (id)=>{
    const res = await fetch(`${BASE_URL}/api/users/${id}/`);
    return res.json();
};
const createJob = async (data, token)=>{
    const res = await fetch(`${BASE_URL}/api/jobs/create/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
    });
    return res.json();
};
const getAllJobs = async ()=>{
    const res = await fetch(`${BASE_URL}/api/jobs/all/`);
    return res.json();
};
const getJob = async (id)=>{
    const res = await fetch(`${BASE_URL}/api/jobs/${id}/`);
    return res.json();
};
const createApplication = async (data, token)=>{
    const formData = new FormData();
    formData.append("job", data.job);
    formData.append("applicant", data.applicant);
    formData.append("cover_letter", data.cover_letter);
    if (data.resume) formData.append("resume", data.resume);
    const res = await fetch(`${BASE_URL}/api/applications/create/`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: formData
    });
    return res.json();
};
const getAllApplications = async ()=>{
    const res = await fetch(`${BASE_URL}/api/applications/all/`);
    return res.json();
};
const getApplication = async (id)=>{
    const res = await fetch(`${BASE_URL}/api/applications/${id}/`);
    return res.json();
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/context/AuthContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthProvider",
    ()=>AuthProvider,
    "useAuth",
    ()=>useAuth
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
const AuthContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
const AuthProvider = (t0)=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(12);
    if ($[0] !== "6473b290c465e6e1f8790aa4e71de479a0d9c89281c35f5d1fabb908b8125865") {
        for(let $i = 0; $i < 12; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6473b290c465e6e1f8790aa4e71de479a0d9c89281c35f5d1fabb908b8125865";
    }
    const { children } = t0;
    const [user, setUser] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [token, setToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    let t1;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = ()=>{
            const storedUser = localStorage.getItem("user");
            const storedToken = localStorage.getItem("token");
            if (storedUser && storedToken) {
                setUser(JSON.parse(storedUser));
                setToken(storedToken);
            }
            setLoading(false);
        };
        t2 = [];
        $[1] = t1;
        $[2] = t2;
    } else {
        t1 = $[1];
        t2 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t1, t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = (userData, jwtToken)=>{
            setUser(userData);
            setToken(jwtToken);
            localStorage.setItem("user", JSON.stringify(userData));
            localStorage.setItem("token", jwtToken);
        };
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const login = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            setUser(null);
            setToken(null);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const logout = t4;
    let t5;
    if ($[5] !== loading || $[6] !== token || $[7] !== user) {
        t5 = {
            user,
            token,
            login,
            logout,
            loading
        };
        $[5] = loading;
        $[6] = token;
        $[7] = user;
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] !== children || $[10] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthContext.Provider, {
            value: t5,
            children: children
        }, void 0, false, {
            fileName: "[project]/my-app/context/AuthContext.js",
            lineNumber: 84,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[9] = children;
        $[10] = t5;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    return t6;
};
_s(AuthProvider, "uAkFQMmIUxfxJcQTEb8tCM/KFt4=");
_c = AuthProvider;
const useAuth = ()=>{
    _s1();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(1);
    if ($[0] !== "6473b290c465e6e1f8790aa4e71de479a0d9c89281c35f5d1fabb908b8125865") {
        for(let $i = 0; $i < 1; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6473b290c465e6e1f8790aa4e71de479a0d9c89281c35f5d1fabb908b8125865";
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(AuthContext);
};
_s1(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "AuthProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/jobs/[id]/apply/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/utils/api.js [app-client] (ecmascript)"); // You already have this!
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/context/AuthContext.js [app-client] (ecmascript)"); // if you’re storing token in context
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ApplyPage() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])(); // job ID
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [coverLetter, setCoverLetter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [resume, setResume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { token, user } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])(); // assuming you have auth context
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const data = {
            job: id,
            applicant: user?.id,
            cover_letter: coverLetter,
            resume
        };
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createApplication"])(data, token);
            if (response.id) {
                setMessage("✅ Application submitted successfully!");
                setTimeout(()=>router.push("/jobs"), 2000);
            } else {
                setMessage("❌ Failed to apply. Please try again.");
            }
        } catch (error) {
            console.error("Error applying:", error);
            setMessage("⚠️ Something went wrong.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-xl mx-auto py-12 px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-3xl font-bold mb-6 text-gray-900",
                children: [
                    "Apply for Job #",
                    id
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "space-y-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium mb-1 text-gray-700",
                                children: "Cover Letter"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: coverLetter,
                                onChange: (e_0)=>setCoverLetter(e_0.target.value),
                                required: true,
                                className: "w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500",
                                rows: "5"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block font-medium mb-1 text-gray-700",
                                children: "Upload Resume"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "file",
                                onChange: (e_1)=>setResume(e_1.target.files[0]),
                                required: true,
                                className: "block w-full border border-gray-300 rounded-lg p-2"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: loading,
                        className: "w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition",
                        children: loading ? "Submitting..." : "Submit Application"
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-center text-gray-700",
                children: message
            }, void 0, false, {
                fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
                lineNumber: 71,
                columnNumber: 19
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/jobs/[id]/apply/page.jsx",
        lineNumber: 46,
        columnNumber: 10
    }, this);
}
_s(ApplyPage, "na+Q0Jk8DwTyzBqd7hDxdz99O9Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$context$2f$AuthContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = ApplyPage;
var _c;
__turbopack_context__.k.register(_c, "ApplyPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-app_0eb6a289._.js.map