(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-app/utils/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createApplication",
    ()=>createApplication,
    "createJob",
    ()=>createJob,
    "deleteApplication",
    ()=>deleteApplication,
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
    ()=>signupUser,
    "updateApplication",
    ()=>updateApplication
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
    if (!res.ok) throw new Error("Failed to fetch job");
    return res.json();
};
const createApplication = async (data, token)=>{
    const formData = new FormData();
    formData.append("job", data.job);
    formData.append("cover_letter", data.cover_letter);
    if (data.resume) formData.append("resume", data.resume);
    const headers = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`${BASE_URL}/api/applications/create/`, {
        method: "POST",
        headers,
        body: formData
    });
    let responseData;
    try {
        responseData = await res.json();
    } catch (err) {
        const text = await res.text();
        console.error("Non-JSON response from server:", text);
        responseData = {
            error: "Invalid JSON response from server",
            raw: text
        };
    }
    if (!res.ok) throw responseData;
    return responseData;
};
const getAllApplications = async ()=>{
    const res = await fetch(`${BASE_URL}/api/applications/all/`);
    return res.json();
};
const getApplication = async (id)=>{
    const res = await fetch(`${BASE_URL}/api/applications/${id}/`);
    return res.json();
};
const updateApplication = async (id, data)=>{
    const formData = new FormData();
    if (data.cover_letter) formData.append("cover_letter", data.cover_letter);
    if (data.resume) formData.append("resume", data.resume);
    const res = await fetch(`${BASE_URL}/api/applications/${id}/`, {
        method: "PUT",
        body: formData
    });
    let responseData;
    try {
        responseData = await res.json();
    } catch (err) {
        const text = await res.text();
        console.error("Non-JSON response from server:", text);
        responseData = {
            error: "Invalid JSON response from server",
            raw: text
        };
    }
    if (!res.ok) throw responseData;
    return responseData;
};
const deleteApplication = async (id)=>{
    const res = await fetch(`${BASE_URL}/api/applications/${id}/`, {
        method: "DELETE"
    });
    if (!res.ok) {
        const text = await res.text();
        throw {
            error: "Failed to delete application",
            raw: text
        };
    }
    return {
        message: "Deleted successfully"
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-app/app/jobs/[id]/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobDetails
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-app/utils/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function JobDetails() {
    _s();
    const { id } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [job, setJob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobDetails.useEffect": ()=>{
            const fetchJob = {
                "JobDetails.useEffect.fetchJob": async ()=>{
                    try {
                        const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getJob"])(id);
                        setJob(data);
                    } catch (error) {
                        console.error("Error fetching job details:", error);
                    } finally{
                        setLoading(false);
                    }
                }
            }["JobDetails.useEffect.fetchJob"];
            if (id) fetchJob();
        }
    }["JobDetails.useEffect"], [
        id
    ]);
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-screen text-gray-600",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Loading job details..."
            }, void 0, false, {
                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                lineNumber: 29,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 28,
            columnNumber: 12
        }, this);
    }
    if (!job || job.detail === "Not found.") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-screen text-gray-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "Job not found."
                }, void 0, false, {
                    fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                    lineNumber: 34,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>router.push("/jobs"),
                    className: "text-blue-600 mt-4 hover:underline",
                    children: "← Back to jobs"
                }, void 0, false, {
                    fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
            lineNumber: 33,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "max-w-3xl mx-auto py-12 px-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>router.back(),
                className: "text-blue-600 hover:underline mb-6",
                children: "← Back to jobs"
            }, void 0, false, {
                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow-md rounded-2xl p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 mb-2",
                        children: job.title
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                        lineNumber: 46,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 mb-4",
                        children: [
                            job.company_name,
                            " • ",
                            job.location,
                            " •",
                            " ",
                            job.job_type?.replace("_", " ").toUpperCase()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-800 mb-2",
                                children: "Description"
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 leading-relaxed",
                                children: job.description
                            }, void 0, false, {
                                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    job.salary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-medium text-gray-900 mb-4",
                        children: [
                            "💰 ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: [
                                    "₦",
                                    job.salary
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                                lineNumber: 58,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                        lineNumber: 57,
                        columnNumber: 32
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-end mt-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/jobs/${job.id}/apply`,
                            className: "bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition",
                            children: "Apply Now"
                        }, void 0, false, {
                            fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                            lineNumber: 62,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-app/app/jobs/[id]/page.jsx",
        lineNumber: 40,
        columnNumber: 10
    }, this);
}
_s(JobDetails, "dqgcT9D6V8eCSmjIGAmspS6oAsw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = JobDetails;
var _c;
__turbopack_context__.k.register(_c, "JobDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=my-app_37cc0d39._.js.map