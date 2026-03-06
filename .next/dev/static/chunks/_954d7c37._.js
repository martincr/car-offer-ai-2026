(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/cn.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('rounded-3xl border border-zinc-200/80 bg-white/80 shadow-card backdrop-blur', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Card.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Card;
var _c;
__turbopack_context__.k.register(_c, "Card");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Chip.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Chip",
    ()=>Chip
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
function Chip({ selected, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-10 rounded-2xl border px-4 text-sm transition', selected ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-200 bg-white text-zinc-900 hover:bg-zinc-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/Chip.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Chip;
var _c;
__turbopack_context__.k.register(_c, "Chip");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Divider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Divider",
    ()=>Divider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Divider() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "my-4 h-px w-full bg-zinc-200/70"
    }, void 0, false, {
        fileName: "[project]/components/ui/Divider.tsx",
        lineNumber: 2,
        columnNumber: 10
    }, this);
}
_c = Divider;
var _c;
__turbopack_context__.k.register(_c, "Divider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
function Input({ className, label, hint, error, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1.5 text-sm font-medium text-zinc-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 13,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('h-14 w-full rounded-2xl border bg-white px-4 text-base outline-none transition', error ? 'border-red-300 focus:border-red-400' : 'border-zinc-200 focus:border-zinc-400', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 text-xs text-red-600",
                children: error
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 22,
                columnNumber: 16
            }, this) : null,
            !error && hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 text-xs text-zinc-500",
                children: hint
            }, void 0, false, {
                fileName: "[project]/components/ui/Input.tsx",
                lineNumber: 23,
                columnNumber: 25
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Input.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = Input;
var _c;
__turbopack_context__.k.register(_c, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Progress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Progress",
    ()=>Progress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Progress({ value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-2 w-full overflow-hidden rounded-full bg-zinc-200/70",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "h-full rounded-full bg-zinc-900 transition-all",
            style: {
                width: `${Math.min(100, Math.max(0, value))}%`
            }
        }, void 0, false, {
            fileName: "[project]/components/ui/Progress.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/Progress.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Progress;
var _c;
__turbopack_context__.k.register(_c, "Progress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ui/Textarea.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/cn.ts [app-client] (ecmascript)");
;
;
function Textarea({ className, label, hint, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        className: "block",
        children: [
            label ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1.5 text-sm font-medium text-zinc-900",
                children: label
            }, void 0, false, {
                fileName: "[project]/components/ui/Textarea.tsx",
                lineNumber: 12,
                columnNumber: 16
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$cn$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])('min-h-[120px] w-full resize-none rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-base outline-none transition focus:border-zinc-400', className),
                ...props
            }, void 0, false, {
                fileName: "[project]/components/ui/Textarea.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            hint ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-1.5 text-xs text-zinc-500",
                children: hint
            }, void 0, false, {
                fileName: "[project]/components/ui/Textarea.tsx",
                lineNumber: 20,
                columnNumber: 15
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/Textarea.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Textarea;
var _c;
__turbopack_context__.k.register(_c, "Textarea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/validators.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cleanVin",
    ()=>cleanVin,
    "formatPhone",
    ()=>formatPhone,
    "isNo",
    ()=>isNo,
    "isProbablyPhone",
    ()=>isProbablyPhone,
    "isValidVin",
    ()=>isValidVin,
    "isYes",
    ()=>isYes
]);
function cleanVin(input) {
    return input.toUpperCase().replace(/\s+/g, '');
}
function isValidVin(vin) {
    const v = cleanVin(vin);
    // VINs are typically 17 chars; exclude I, O, Q.
    return /^[A-HJ-NPR-Z0-9]{17}$/.test(v);
}
function isProbablyPhone(input) {
    const digits = input.replace(/\D/g, '');
    return digits.length >= 10;
}
function formatPhone(input) {
    const digits = input.replace(/\D/g, '');
    if (digits.length <= 3) return digits;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}
function isYes(text) {
    return /^(y|yes|yeah|yep|correct|right|sure|ok)$/i.test(text.trim());
}
function isNo(text) {
    return /^(n|no|nope|nah|incorrect|wrong)$/i.test(text.trim());
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sell/PhotoPicker.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PhotoPicker",
    ()=>PhotoPicker
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function uniqByKey(arr, key) {
    const seen = new Set();
    const out = [];
    for (const item of arr){
        const k = key(item);
        if (seen.has(k)) continue;
        seen.add(k);
        out.push(item);
    }
    return out;
}
function PhotoPicker({ files, setFiles }) {
    _s();
    const previews = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PhotoPicker.useMemo[previews]": ()=>{
            return files.map({
                "PhotoPicker.useMemo[previews]": (f)=>({
                        file: f,
                        url: URL.createObjectURL(f)
                    })
            }["PhotoPicker.useMemo[previews]"]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["PhotoPicker.useMemo[previews]"], [
        files.map({
            "PhotoPicker.useMemo[previews]": (f)=>`${f.name}-${f.size}-${f.lastModified}`
        }["PhotoPicker.useMemo[previews]"]).join('|')
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl border border-zinc-200 bg-white p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-medium text-zinc-900",
                                        children: "Add photos"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-0.5 text-xs text-zinc-500",
                                        children: "Camera or gallery • jpg/png/heic"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sell/PhotoPicker.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-zinc-600",
                                children: [
                                    files.length,
                                    " selected"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sell/PhotoPicker.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "mt-3 block w-full text-sm",
                        type: "file",
                        accept: "image/*",
                        multiple: true,
                        capture: "environment",
                        onChange: (e)=>{
                            const next = Array.from(e.target.files ?? []);
                            if (!next.length) return;
                            const merged = uniqByKey([
                                ...files,
                                ...next
                            ], (f)=>`${f.name}-${f.size}-${f.lastModified}`);
                            setFiles(merged.slice(0, 12)); // keep it sane
                            e.currentTarget.value = '';
                        }
                    }, void 0, false, {
                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    files.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 grid grid-cols-3 gap-2",
                        children: previews.map((p, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: p.url,
                                        alt: `Photo ${idx + 1}`,
                                        className: "h-24 w-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "absolute right-1 top-1 rounded-full bg-white/90 px-2 py-1 text-xs text-zinc-900 shadow",
                                        onClick: ()=>setFiles(files.filter((_, i)=>i !== idx)),
                                        type: "button",
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                                        lineNumber: 68,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/components/sell/PhotoPicker.tsx",
                                lineNumber: 62,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 p-4 text-center text-xs text-zinc-500",
                        children: "No photos yet."
                    }, void 0, false, {
                        fileName: "[project]/components/sell/PhotoPicker.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sell/PhotoPicker.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            files.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "ghost",
                    onClick: ()=>setFiles([]),
                    type: "button",
                    className: "w-full justify-center",
                    children: "Remove all"
                }, void 0, false, {
                    fileName: "[project]/components/sell/PhotoPicker.tsx",
                    lineNumber: 87,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sell/PhotoPicker.tsx",
                lineNumber: 86,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/sell/PhotoPicker.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_s(PhotoPicker, "i5at8kjeMVmHG1p0qdtQa/O/mqs=");
_c = PhotoPicker;
var _c;
__turbopack_context__.k.register(_c, "PhotoPicker");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/sell/ChatAgent.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatAgent",
    ()=>ChatAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Chip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sell$2f$PhotoPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sell/PhotoPicker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
async function decodeVin(vin) {
    const res = await fetch(`/api/vin?vin=${encodeURIComponent(vin)}`);
    const json = await res.json();
    if (!res.ok) throw new Error(json?.error ?? 'VIN decode failed');
    return json.vehicle;
}
function ChatAgent({ draft, setDraft, photoFiles, setPhotoFiles, offerFiles, setOfferFiles, onSubmit }) {
    _s();
    const [stage, setStage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "ChatAgent.useState": ()=>{
            if (draft.vin && draft.vehicle && draft.confirmedVehicle) return 'name';
            return 'vin';
        }
    }["ChatAgent.useState"]);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [input, setInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [listening, setListening] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const endRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAgent.useEffect": ()=>{
            // boot message
            if (messages.length) return;
            setMessages([
                {
                    role: 'assistant',
                    text: 'Hi — I’m Car Offer AI. What’s your VIN? (17 characters)'
                }
            ]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatAgent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAgent.useEffect": ()=>{
            endRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'end'
            });
        }
    }["ChatAgent.useEffect"], [
        messages,
        stage
    ]);
    function push(role, text) {
        setMessages((m)=>[
                ...m,
                {
                    role,
                    text
                }
            ]);
    }
    function update(next) {
        setDraft({
            ...draft,
            ...next
        });
    }
    function updateContact(next) {
        setDraft({
            ...draft,
            contact: {
                ...draft.contact,
                ...next
            }
        });
    }
    function updateLocation(zip) {
        setDraft({
            ...draft,
            location: {
                ...draft.location ?? {},
                zip
            }
        });
    }
    function updateTitle(next) {
        setDraft({
            ...draft,
            title: {
                ...draft.title ?? {},
                ...next
            }
        });
    }
    function updateExistingOffer(next) {
        setDraft({
            ...draft,
            existingOffer: {
                ...draft.existingOffer ?? {},
                ...next
            }
        });
    }
    const quickReplies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ChatAgent.useMemo[quickReplies]": ()=>{
            if (stage === 'confirm') return [
                'Yes',
                'No'
            ];
            if (stage === 'title') return [
                'Yes',
                'No'
            ];
            if (stage === 'loan') return [
                'Yes',
                'No'
            ];
            if (stage === 'condition') return [
                'Excellent',
                'Good',
                'Fair',
                'Needs work'
            ];
            if (stage === 'accidents') return [
                'No',
                'Yes',
                'Not sure'
            ];
            if (stage === 'offer') return [
                'No',
                'Carvana',
                'CarMax'
            ];
            return [];
        }
    }["ChatAgent.useMemo[quickReplies]"], [
        stage
    ]);
    async function handleSend(textRaw) {
        const text = (textRaw ?? input).trim();
        if (!text || busy) return;
        push('user', text);
        setInput('');
        try {
            setBusy(true);
            if (stage === 'vin') {
                const vin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanVin"])(text);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidVin"])(vin)) {
                    push('assistant', 'That VIN doesn’t look right. It should be 17 characters (letters & numbers). Try again.');
                    return;
                }
                update({
                    vin
                });
                push('assistant', 'Decoding VIN…');
                const vehicle = await decodeVin(vin);
                update({
                    vehicle
                });
                const summary = `${vehicle?.year ?? '—'} ${vehicle?.make ?? ''} ${vehicle?.model ?? ''}${vehicle?.trim ? ` (${vehicle.trim})` : ''}`.trim();
                push('assistant', `I found: ${summary}. Is that your car?`);
                setStage('confirm');
                return;
            }
            if (stage === 'confirm') {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isYes"])(text)) {
                    update({
                        confirmedVehicle: true
                    });
                    push('assistant', 'Perfect. What’s your name?');
                    setStage('name');
                    return;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNo"])(text)) {
                    update({
                        vin: '',
                        vehicle: undefined,
                        confirmedVehicle: undefined
                    });
                    push('assistant', 'No worries. Send me the VIN again.');
                    setStage('vin');
                    return;
                }
                push('assistant', 'Just reply Yes or No 🙂');
                return;
            }
            if (stage === 'name') {
                updateContact({
                    name: text
                });
                push('assistant', 'What’s the best mobile number to text offers to?');
                setStage('phone');
                return;
            }
            if (stage === 'phone') {
                const phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPhone"])(text);
                if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProbablyPhone"])(phone)) {
                    push('assistant', 'That phone number looks short. Try again (include area code).');
                    return;
                }
                updateContact({
                    phone,
                    phoneVerified: false
                });
                push('assistant', 'Quick verify: enter any 6‑digit code (prototype UI).');
                setStage('otp');
                return;
            }
            if (stage === 'otp') {
                if (!/^\d{6}$/.test(text)) {
                    push('assistant', 'Enter a 6‑digit code (like 123456).');
                    return;
                }
                updateContact({
                    phoneVerified: true
                });
                push('assistant', 'Nice. What ZIP code is the car located in?');
                setStage('zip');
                return;
            }
            if (stage === 'zip') {
                updateLocation(text);
                push('assistant', 'Mileage?');
                setStage('mileage');
                return;
            }
            if (stage === 'mileage') {
                update({
                    mileage: text
                });
                push('assistant', 'Do you have the title in hand?');
                setStage('title');
                return;
            }
            if (stage === 'title') {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isYes"])(text)) {
                    updateTitle({
                        titleInHand: 'Yes',
                        hasLoan: undefined,
                        lienholder: '',
                        payoffAmount: ''
                    });
                    push('assistant', 'How would you describe the condition?');
                    setStage('condition');
                    return;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNo"])(text)) {
                    updateTitle({
                        titleInHand: 'No'
                    });
                    push('assistant', 'Is there a loan on it?');
                    setStage('loan');
                    return;
                }
                push('assistant', 'Reply Yes or No 🙂');
                return;
            }
            if (stage === 'loan') {
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isYes"])(text)) {
                    updateTitle({
                        hasLoan: 'Yes'
                    });
                    push('assistant', 'What bank/lender is the loan with?');
                    setStage('bank');
                    return;
                }
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNo"])(text)) {
                    updateTitle({
                        hasLoan: 'No',
                        lienholder: '',
                        payoffAmount: ''
                    });
                    push('assistant', 'How would you describe the condition?');
                    setStage('condition');
                    return;
                }
                push('assistant', 'Reply Yes or No 🙂');
                return;
            }
            if (stage === 'bank') {
                updateTitle({
                    lienholder: text
                });
                push('assistant', 'Approx payoff amount? (optional — you can type ‘skip’)');
                setStage('payoff');
                return;
            }
            if (stage === 'payoff') {
                if (text.toLowerCase() !== 'skip') updateTitle({
                    payoffAmount: text
                });
                push('assistant', 'How would you describe the condition?');
                setStage('condition');
                return;
            }
            if (stage === 'condition') {
                const normalized = text.toLowerCase();
                let chosen = null;
                if (normalized.includes('excel')) chosen = 'Excellent';
                else if (normalized.includes('good')) chosen = 'Good';
                else if (normalized.includes('fair')) chosen = 'Fair';
                else if (normalized.includes('work') || normalized.includes('fix') || normalized.includes('needs')) chosen = 'Needs work';
                if (!chosen) {
                    push('assistant', 'Pick one: Excellent, Good, Fair, or Needs work.');
                    return;
                }
                update({
                    condition: chosen
                });
                push('assistant', 'Any accidents?');
                setStage('accidents');
                return;
            }
            if (stage === 'accidents') {
                const t = text.toLowerCase();
                if (t.startsWith('y')) update({
                    accidents: 'Yes'
                });
                else if (t.startsWith('n')) update({
                    accidents: 'No'
                });
                else update({
                    accidents: 'Not sure'
                });
                push('assistant', 'Last step: add photos (at least 3). Use the picker below.');
                setStage('photos');
                return;
            }
            if (stage === 'offer') {
                const t = text.trim();
                if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNo"])(t) || t.toLowerCase() === 'none') {
                    updateExistingOffer({
                        source: 'None'
                    });
                    push('assistant', 'All set. Ready to submit for dealer bids.');
                    setStage('done');
                    return;
                }
                if (/carvana/i.test(t)) {
                    updateExistingOffer({
                        source: 'Carvana'
                    });
                    push('assistant', 'What’s the offer amount?');
                    setStage('offerAmount');
                    return;
                }
                if (/carmax/i.test(t) || /car max/i.test(t)) {
                    updateExistingOffer({
                        source: 'CarMax'
                    });
                    push('assistant', 'What’s the offer amount?');
                    setStage('offerAmount');
                    return;
                }
                // fallback
                updateExistingOffer({
                    source: 'Other'
                });
                push('assistant', 'What’s the offer amount?');
                setStage('offerAmount');
                return;
            }
            if (stage === 'offerAmount') {
                updateExistingOffer({
                    amount: text
                });
                push('assistant', 'Upload the offer PDF/screenshot (don’t edit it — dealers verify).');
                setStage('offerUpload');
                return;
            }
        // file-driven stages handled by UI below
        } catch (e) {
            push('assistant', e?.message ?? 'Something went wrong. Try again.');
        } finally{
            setBusy(false);
        }
    }
    // When photos stage gets enough photos, move on automatically
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAgent.useEffect": ()=>{
            if (stage === 'photos' && photoFiles.length >= 3) {
                push('assistant', 'Got the photos. Do you already have a Carvana or CarMax offer?');
                setStage('offer');
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatAgent.useEffect"], [
        stage,
        photoFiles.length
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatAgent.useEffect": ()=>{
            if (stage === 'offerUpload' && offerFiles.length >= 1) {
                push('assistant', 'Offer uploaded. Ready to submit for dealer bids.');
                setStage('done');
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ChatAgent.useEffect"], [
        stage,
        offerFiles.length
    ]);
    function startVoice() {
        if (listening) return;
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRecognition) {
            alert('Voice input isn’t supported in this browser.');
            return;
        }
        const rec = new SpeechRecognition();
        rec.lang = 'en-US';
        rec.interimResults = false;
        rec.maxAlternatives = 1;
        setListening(true);
        rec.onresult = (event)=>{
            const transcript = event?.results?.[0]?.[0]?.transcript;
            if (transcript) setInput((prev)=>prev ? `${prev} ${transcript}` : transcript);
        };
        rec.onerror = ()=>{
            setListening(false);
        };
        rec.onend = ()=>{
            setListening(false);
        };
        rec.start();
    }
    const showSubmit = stage === 'done';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-zinc-200/70 bg-white/60 px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm font-medium text-zinc-900",
                        children: "Chat / voice"
                    }, void 0, false, {
                        fileName: "[project]/components/sell/ChatAgent.tsx",
                        lineNumber: 380,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-0.5 text-xs text-zinc-500",
                        children: "Same questions, just conversational."
                    }, void 0, false, {
                        fileName: "[project]/components/sell/ChatAgent.tsx",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sell/ChatAgent.tsx",
                lineNumber: 379,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-h-[62vh] overflow-y-auto px-4 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-3",
                    children: [
                        messages.map((m, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex ${m.role === 'assistant' ? 'justify-start' : 'justify-end'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed ${m.role === 'assistant' ? 'bg-zinc-100 text-zinc-900' : 'bg-zinc-900 text-white'}`,
                                    children: m.text
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 391,
                                    columnNumber: 15
                                }, this)
                            }, idx, false, {
                                fileName: "[project]/components/sell/ChatAgent.tsx",
                                lineNumber: 387,
                                columnNumber: 13
                            }, this)),
                        stage === 'photos' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sell$2f$PhotoPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoPicker"], {
                                    files: photoFiles,
                                    setFiles: setPhotoFiles
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 403,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-zinc-500",
                                    children: "Need at least 3 photos to continue."
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 404,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sell/ChatAgent.tsx",
                            lineNumber: 402,
                            columnNumber: 13
                        }, this) : null,
                        stage === 'offerUpload' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 rounded-3xl border border-zinc-200 bg-white p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-zinc-900",
                                    children: "Upload offer"
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 410,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-zinc-500",
                                    children: "PDF or screenshot. Don’t edit it — dealers verify."
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 411,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    className: "mt-3 block w-full text-sm",
                                    type: "file",
                                    accept: "image/*,application/pdf",
                                    onChange: (e)=>setOfferFiles(Array.from(e.target.files ?? []))
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 414,
                                    columnNumber: 15
                                }, this),
                                offerFiles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-zinc-600",
                                    children: [
                                        offerFiles.length,
                                        " file selected"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sell/ChatAgent.tsx",
                            lineNumber: 409,
                            columnNumber: 13
                        }, this) : null,
                        showSubmit ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 rounded-3xl border border-zinc-200 bg-white p-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium text-zinc-900",
                                    children: "Ready to submit"
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 428,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-1 text-xs text-zinc-500",
                                    children: "We’ll syndicate this to dealers and text you bids."
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 429,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 grid gap-2 text-xs text-zinc-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "VIN:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 435,
                                                    columnNumber: 19
                                                }, this),
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-mono",
                                                    children: draft.vin
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 436,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sell/ChatAgent.tsx",
                                            lineNumber: 434,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "Car:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                draft.vehicle?.year ?? '—',
                                                ' ',
                                                draft.vehicle?.make ?? '',
                                                " ",
                                                draft.vehicle?.model ?? '',
                                                ' ',
                                                draft.vehicle?.trim ? `(${draft.vehicle.trim})` : ''
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sell/ChatAgent.tsx",
                                            lineNumber: 438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "Contact:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 444,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                draft.contact.name ?? '—',
                                                " •",
                                                ' ',
                                                draft.contact.phone ?? '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sell/ChatAgent.tsx",
                                            lineNumber: 443,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "ZIP:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 448,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                draft.location?.zip ?? '—',
                                                " •",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "Mileage:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 449,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                draft.mileage ?? '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sell/ChatAgent.tsx",
                                            lineNumber: 447,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "Condition:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 452,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                draft.condition ?? '—',
                                                " •",
                                                ' ',
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "Accidents:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 453,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                draft.accidents ?? '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sell/ChatAgent.tsx",
                                            lineNumber: 451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-zinc-500",
                                                    children: "Photos:"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 19
                                                }, this),
                                                " ",
                                                photoFiles.length
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sell/ChatAgent.tsx",
                                            lineNumber: 455,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 433,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "flex-1",
                                        size: "lg",
                                        onClick: onSubmit,
                                        children: "Submit for bids"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sell/ChatAgent.tsx",
                                        lineNumber: 461,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 460,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sell/ChatAgent.tsx",
                            lineNumber: 427,
                            columnNumber: 13
                        }, this) : null,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: endRef
                        }, void 0, false, {
                            fileName: "[project]/components/sell/ChatAgent.tsx",
                            lineNumber: 468,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sell/ChatAgent.tsx",
                    lineNumber: 385,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sell/ChatAgent.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-zinc-200/70 bg-white/70 px-3 py-3",
                children: [
                    quickReplies.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-2 flex flex-wrap gap-2",
                        children: quickReplies.map((q)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                onClick: ()=>handleSend(q),
                                children: q
                            }, q, false, {
                                fileName: "[project]/components/sell/ChatAgent.tsx",
                                lineNumber: 476,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sell/ChatAgent.tsx",
                        lineNumber: 474,
                        columnNumber: 11
                    }, this) : null,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-end gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    label: undefined,
                                    placeholder: stage === 'vin' ? 'Type VIN…' : 'Type your answer…',
                                    value: input,
                                    onChange: (e)=>setInput(e.target.value),
                                    onKeyDown: (e)=>{
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSend();
                                        }
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/components/sell/ChatAgent.tsx",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sell/ChatAgent.tsx",
                                lineNumber: 484,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                className: "h-14 w-14 flex-shrink-0 rounded-2xl",
                                type: "button",
                                onClick: startVoice,
                                title: "Voice",
                                children: listening ? '…' : '🎤'
                            }, void 0, false, {
                                fileName: "[project]/components/sell/ChatAgent.tsx",
                                lineNumber: 499,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                className: "h-14 w-14 flex-shrink-0 rounded-2xl",
                                type: "button",
                                onClick: ()=>handleSend(),
                                disabled: busy,
                                children: "➤"
                            }, void 0, false, {
                                fileName: "[project]/components/sell/ChatAgent.tsx",
                                lineNumber: 509,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sell/ChatAgent.tsx",
                        lineNumber: 483,
                        columnNumber: 9
                    }, this),
                    !draft.contact.phoneVerified && draft.contact.phone && stage !== 'vin' && stage !== 'confirm' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-2 text-xs text-zinc-500",
                        children: "Note: phone verification is a prototype UI right now — no real SMS sent."
                    }, void 0, false, {
                        fileName: "[project]/components/sell/ChatAgent.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/components/sell/ChatAgent.tsx",
                lineNumber: 472,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sell/ChatAgent.tsx",
        lineNumber: 378,
        columnNumber: 5
    }, this);
}
_s(ChatAgent, "BLdh6QEc6mJ1495N2StxBlJkL/M=");
_c = ChatAgent;
var _c;
__turbopack_context__.k.register(_c, "ChatAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SellFlow.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SellFlow",
    ()=>SellFlow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Chip.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Divider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Divider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Progress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Textarea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/validators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sell$2f$ChatAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sell/ChatAgent.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sell$2f$PhotoPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sell/PhotoPicker.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const TOTAL_STEPS = 8;
function emptyDraft(initialVin) {
    return {
        vin: initialVin ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanVin"])(initialVin) : '',
        contact: {},
        existingOffer: {
            source: 'None'
        }
    };
}
async function fileToDataUrl(file) {
    return await new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result));
        reader.onerror = ()=>reject(new Error('Failed to read file'));
        reader.readAsDataURL(file);
    });
}
function SellFlow({ initialVin }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('quick');
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [draft, setDraft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "SellFlow.useState": ()=>emptyDraft(initialVin)
    }["SellFlow.useState"]);
    const [vinLoading, setVinLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [vinError, setVinError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Phone OTP (UI placeholder)
    const [otpSent, setOtpSent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [otp, setOtp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [otpError, setOtpError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Files (keep originals for preview; data URLs stored in draft on submit)
    const [photoFiles, setPhotoFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [offerFiles, setOfferFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const vinClean = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SellFlow.useMemo[vinClean]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanVin"])(draft.vin)
    }["SellFlow.useMemo[vinClean]"], [
        draft.vin
    ]);
    const vinOk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SellFlow.useMemo[vinOk]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidVin"])(vinClean)
    }["SellFlow.useMemo[vinOk]"], [
        vinClean
    ]);
    const progress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SellFlow.useMemo[progress]": ()=>{
            return Math.round((step + 1) / TOTAL_STEPS * 100);
        }
    }["SellFlow.useMemo[progress]"], [
        step
    ]);
    // Auto-decode if initial VIN passed in
    const didAutoDecode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SellFlow.useEffect": ()=>{
            if (!didAutoDecode.current && vinOk && !draft.vehicle) {
                didAutoDecode.current = true;
                decodeVin();
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["SellFlow.useEffect"], [
        vinOk
    ]);
    function updateDraft(next) {
        setDraft((d)=>({
                ...d,
                ...next
            }));
    }
    function updateContact(next) {
        setDraft((d)=>({
                ...d,
                contact: {
                    ...d.contact,
                    ...next
                }
            }));
    }
    function updateLocation(next) {
        setDraft((d)=>({
                ...d,
                location: {
                    ...d.location ?? {},
                    ...next
                }
            }));
    }
    function updateTitle(next) {
        setDraft((d)=>({
                ...d,
                title: {
                    ...d.title ?? {},
                    ...next
                }
            }));
    }
    function updateExistingOffer(next) {
        setDraft((d)=>({
                ...d,
                existingOffer: {
                    ...d.existingOffer ?? {},
                    ...next
                }
            }));
    }
    async function decodeVin() {
        setVinError(null);
        const vin = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanVin"])(draft.vin);
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidVin"])(vin)) {
            setVinError('VIN must be 17 characters (letters & numbers). No I/O/Q.');
            return;
        }
        setVinLoading(true);
        try {
            const res = await fetch(`/api/vin?vin=${encodeURIComponent(vin)}`);
            const json = await res.json();
            if (!res.ok) throw new Error(json?.error ?? 'VIN decode failed');
            const vehicle = json.vehicle ?? {};
            updateDraft({
                vin,
                vehicle
            });
            setStep(1);
        } catch (e) {
            setVinError(e?.message ?? 'VIN decode failed');
        } finally{
            setVinLoading(false);
        }
    }
    const canContinue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SellFlow.useMemo[canContinue]": ()=>{
            // Gate minimal required info per step
            if (mode === 'chat') return true;
            switch(step){
                case 0:
                    return vinOk && !vinLoading;
                case 1:
                    return draft.confirmedVehicle === true;
                case 2:
                    return Boolean(draft.contact.name?.trim()) && Boolean(draft.contact.phone?.trim()) && draft.contact.phoneVerified === true;
                case 3:
                    return Boolean(draft.location?.zip?.trim()) && Boolean(draft.mileage?.trim());
                case 4:
                    if (draft.title?.titleInHand === 'Yes') return true;
                    if (draft.title?.titleInHand === 'No' && draft.title?.hasLoan === 'No') return true;
                    if (draft.title?.titleInHand === 'No' && draft.title?.hasLoan === 'Yes') {
                        return Boolean(draft.title?.lienholder?.trim());
                    }
                    return false;
                case 5:
                    return Boolean(draft.condition);
                case 6:
                    return photoFiles.length >= 3;
                case 7:
                    if ((draft.existingOffer?.source ?? 'None') === 'None') return true;
                    // If they claim an offer, require amount + file
                    return Boolean(draft.existingOffer?.amount?.trim()) && offerFiles.length >= 1;
                default:
                    return false;
            }
        }
    }["SellFlow.useMemo[canContinue]"], [
        mode,
        step,
        vinOk,
        vinLoading,
        draft,
        photoFiles.length,
        offerFiles.length
    ]);
    async function onSubmit() {
        // Convert files to data URLs (prototype)
        const photos = await Promise.all(photoFiles.map(fileToDataUrl));
        const offerUploads = await Promise.all(offerFiles.map(fileToDataUrl));
        const payload = {
            ...draft,
            vin: vinClean,
            photos,
            existingOffer: {
                ...draft.existingOffer ?? {
                    source: 'None'
                },
                files: offerUploads
            }
        };
        const res = await fetch('/api/leads', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });
        const json = await res.json();
        if (!res.ok) {
            alert(json?.error ?? 'Failed to submit. Try again.');
            return;
        }
        router.push(`/thank-you/${json.id}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-2xl font-semibold tracking-tight text-zinc-900",
                        children: "Get a cash offer"
                    }, void 0, false, {
                        fileName: "[project]/components/SellFlow.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-1 text-sm text-zinc-600",
                        children: "Fast, simple, mobile-first."
                    }, void 0, false, {
                        fileName: "[project]/components/SellFlow.tsx",
                        lineNumber: 185,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SellFlow.tsx",
                lineNumber: 183,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode('quick'),
                            className: `flex-1 rounded-2xl px-3 py-2 text-sm font-medium transition ${mode === 'quick' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'}`,
                            children: "Quick questions"
                        }, void 0, false, {
                            fileName: "[project]/components/SellFlow.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setMode('chat'),
                            className: `flex-1 rounded-2xl px-3 py-2 text-sm font-medium transition ${mode === 'chat' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-700 hover:bg-zinc-50 border border-zinc-200'}`,
                            children: "Chat / voice"
                        }, void 0, false, {
                            fileName: "[project]/components/SellFlow.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/SellFlow.tsx",
                    lineNumber: 189,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/SellFlow.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: mode === 'chat' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sell$2f$ChatAgent$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChatAgent"], {
                    draft: draft,
                    setDraft: setDraft,
                    photoFiles: photoFiles,
                    setPhotoFiles: setPhotoFiles,
                    offerFiles: offerFiles,
                    setOfferFiles: setOfferFiles,
                    onSubmit: onSubmit
                }, void 0, false, {
                    fileName: "[project]/components/SellFlow.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Progress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Progress"], {
                                    value: progress
                                }, void 0, false, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 227,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-xs text-zinc-500",
                                    children: [
                                        "Step ",
                                        step + 1,
                                        " of ",
                                        TOTAL_STEPS
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 228,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SellFlow.tsx",
                            lineNumber: 226,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                            className: "p-5",
                            children: [
                                step === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "What’s your VIN?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 236,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "Dealers need this to verify your exact car."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 237,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                label: "VIN (required)",
                                                placeholder: "17 characters",
                                                value: draft.vin,
                                                onChange: (e)=>updateDraft({
                                                        vin: e.target.value
                                                    }),
                                                autoCapitalize: "characters",
                                                autoCorrect: "off",
                                                spellCheck: false,
                                                inputMode: "text",
                                                error: vinError ?? undefined,
                                                hint: "Usually on the driver-side dashboard (near the windshield) or driver door jamb."
                                            }, void 0, false, {
                                                fileName: "[project]/components/SellFlow.tsx",
                                                lineNumber: 242,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 241,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    disabled: !vinOk || vinLoading,
                                                    onClick: decodeVin,
                                                    className: "flex-1",
                                                    children: vinLoading ? 'Decoding…' : 'Continue'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 257,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "secondary",
                                                    onClick: ()=>alert('Look on your dashboard near the windshield, the driver door jamb, or your insurance/registration.'),
                                                    children: "Where is it?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 256,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this) : null,
                                step === 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Is this your car?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 282,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "We decoded your VIN."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 283,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-2xl border border-zinc-200 bg-white p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm text-zinc-500",
                                                    children: "VIN"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 286,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 font-mono text-sm text-zinc-900",
                                                    children: vinClean
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 287,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 text-sm text-zinc-500",
                                                    children: "Vehicle"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-base font-semibold text-zinc-900",
                                                    children: [
                                                        draft.vehicle?.year ?? '—',
                                                        " ",
                                                        draft.vehicle?.make ?? '',
                                                        ' ',
                                                        draft.vehicle?.model ?? '',
                                                        ' ',
                                                        draft.vehicle?.trim ? `(${draft.vehicle?.trim})` : ''
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 285,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    className: "flex-1",
                                                    onClick: ()=>{
                                                        updateDraft({
                                                            confirmedVehicle: true
                                                        });
                                                        setStep(2);
                                                    },
                                                    children: "Yes, that’s it"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "lg",
                                                    variant: "secondary",
                                                    className: "flex-1",
                                                    onClick: ()=>{
                                                        updateDraft({
                                                            vin: '',
                                                            vehicle: undefined,
                                                            confirmedVehicle: undefined
                                                        });
                                                        setStep(0);
                                                    },
                                                    children: "Nope"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 297,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 281,
                                    columnNumber: 17
                                }, this) : null,
                                step === 2 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Where should dealers reach you?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 325,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "Dealers will text you a cash offer. We keep this simple."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 328,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    label: "Your name",
                                                    placeholder: "First + last",
                                                    value: draft.contact.name ?? '',
                                                    onChange: (e)=>updateContact({
                                                            name: e.target.value
                                                        })
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 333,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    label: "Mobile phone (required)",
                                                    placeholder: "(555) 555-5555",
                                                    value: draft.contact.phone ?? '',
                                                    onChange: (e)=>updateContact({
                                                            phone: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatPhone"])(e.target.value),
                                                            phoneVerified: false
                                                        }),
                                                    inputMode: "tel",
                                                    hint: draft.contact.phoneVerified ? 'Verified ✓' : 'We’ll send a quick code to verify.'
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 340,
                                                    columnNumber: 21
                                                }, this),
                                                !draft.contact.phoneVerified ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-2xl border border-zinc-200 bg-white p-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm font-medium text-zinc-900",
                                                            children: "Verify your number"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 357,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-1 text-xs text-zinc-500",
                                                            children: "Prototype UI: no real SMS yet. Enter any 6 digits to “verify”."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 358,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    variant: "secondary",
                                                                    onClick: ()=>{
                                                                        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$validators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isProbablyPhone"])(draft.contact.phone ?? '')) {
                                                                            setOtpError('Enter a valid phone number first.');
                                                                            return;
                                                                        }
                                                                        setOtpError(null);
                                                                        setOtpSent(true);
                                                                    },
                                                                    children: otpSent ? 'Resend code' : 'Text me a code'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 363,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 377,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 25
                                                        }, this),
                                                        otpSent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex items-end gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex-1",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                                        label: "6‑digit code",
                                                                        placeholder: "123456",
                                                                        value: otp,
                                                                        onChange: (e)=>setOtp(e.target.value),
                                                                        inputMode: "numeric",
                                                                        error: otpError ?? undefined
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/SellFlow.tsx",
                                                                        lineNumber: 383,
                                                                        columnNumber: 31
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 382,
                                                                    columnNumber: 29
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                                    onClick: ()=>{
                                                                        if (!/^\d{6}$/.test(otp.trim())) {
                                                                            setOtpError('Enter a 6‑digit code.');
                                                                            return;
                                                                        }
                                                                        setOtpError(null);
                                                                        updateContact({
                                                                            phoneVerified: true
                                                                        });
                                                                    },
                                                                    children: "Verify"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 392,
                                                                    columnNumber: 29
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 381,
                                                            columnNumber: 27
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 356,
                                                    columnNumber: 23
                                                }, this) : null,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    label: "Email (optional)",
                                                    placeholder: "you@email.com",
                                                    value: draft.contact.email ?? '',
                                                    onChange: (e)=>updateContact({
                                                            email: e.target.value
                                                        }),
                                                    inputMode: "email"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 409,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 332,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 324,
                                    columnNumber: 17
                                }, this) : null,
                                step === 3 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Basics"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 422,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "Dealers mostly care about location + mileage."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 423,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    label: "ZIP code",
                                                    placeholder: "90210",
                                                    value: draft.location?.zip ?? '',
                                                    onChange: (e)=>updateLocation({
                                                            zip: e.target.value
                                                        }),
                                                    inputMode: "numeric",
                                                    hint: "Where the car is located."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 428,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                    label: "Mileage",
                                                    placeholder: "e.g. 52,340",
                                                    value: draft.mileage ?? '',
                                                    onChange: (e)=>updateDraft({
                                                            mileage: e.target.value
                                                        }),
                                                    inputMode: "numeric"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 437,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 427,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 421,
                                    columnNumber: 17
                                }, this) : null,
                                step === 4 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Title & loan"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 450,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "This affects how fast a dealer can pay you."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 451,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-zinc-900",
                                                    children: "Do you have the title in hand?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 456,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.title?.titleInHand === 'Yes',
                                                            onClick: ()=>updateTitle({
                                                                    titleInHand: 'Yes',
                                                                    hasLoan: undefined,
                                                                    lienholder: '',
                                                                    payoffAmount: ''
                                                                }),
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 460,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.title?.titleInHand === 'No',
                                                            onClick: ()=>updateTitle({
                                                                    titleInHand: 'No'
                                                                }),
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 473,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 459,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 455,
                                            columnNumber: 19
                                        }, this),
                                        draft.title?.titleInHand === 'No' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-2xl border border-zinc-200 bg-white p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-zinc-900",
                                                    children: "Is there a loan on it?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 484,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.title?.hasLoan === 'Yes',
                                                            onClick: ()=>updateTitle({
                                                                    hasLoan: 'Yes'
                                                                }),
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 488,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.title?.hasLoan === 'No',
                                                            onClick: ()=>updateTitle({
                                                                    hasLoan: 'No',
                                                                    lienholder: '',
                                                                    payoffAmount: ''
                                                                }),
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 494,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 487,
                                                    columnNumber: 23
                                                }, this),
                                                draft.title?.hasLoan === 'Yes' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 grid gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            label: "What bank/lender?",
                                                            placeholder: "e.g. Chase, Capital One, Navy Federal",
                                                            value: draft.title?.lienholder ?? '',
                                                            onChange: (e)=>updateTitle({
                                                                    lienholder: e.target.value
                                                                })
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 506,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            label: "Approx payoff amount (optional)",
                                                            placeholder: "e.g. 18,500",
                                                            value: draft.title?.payoffAmount ?? '',
                                                            onChange: (e)=>updateTitle({
                                                                    payoffAmount: e.target.value
                                                                }),
                                                            inputMode: "numeric"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 512,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 505,
                                                    columnNumber: 25
                                                }, this) : null
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 483,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 449,
                                    columnNumber: 17
                                }, this) : null,
                                step === 5 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Condition"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 528,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "Pick the closest match. No overthinking."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 529,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 grid gap-2",
                                            children: [
                                                'Excellent',
                                                'Good',
                                                'Fair',
                                                'Needs work'
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: `rounded-2xl border p-4 text-left transition ${draft.condition === c ? 'border-zinc-900 bg-zinc-900 text-white' : 'border-zinc-200 bg-white hover:bg-zinc-50'}`,
                                                    onClick: ()=>updateDraft({
                                                            condition: c
                                                        }),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-medium",
                                                            children: c
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 544,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `mt-1 text-xs ${draft.condition === c ? 'text-zinc-200' : 'text-zinc-500'}`,
                                                            children: [
                                                                c === 'Excellent' ? 'Like-new. No issues.' : null,
                                                                c === 'Good' ? 'Normal wear. Runs great.' : null,
                                                                c === 'Fair' ? 'Noticeable wear or small issues.' : null,
                                                                c === 'Needs work' ? 'Mechanical / body work needed.' : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 545,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, c, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 535,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 533,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Divider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Divider"], {}, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 557,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-zinc-900",
                                                    children: "Any accidents?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 560,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.accidents === 'No',
                                                            onClick: ()=>updateDraft({
                                                                    accidents: 'No'
                                                                }),
                                                            children: "No"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 562,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.accidents === 'Yes',
                                                            onClick: ()=>updateDraft({
                                                                    accidents: 'Yes'
                                                                }),
                                                            children: "Yes"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 568,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: draft.accidents === 'Not sure',
                                                            onClick: ()=>updateDraft({
                                                                    accidents: 'Not sure'
                                                                }),
                                                            children: "Not sure"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 574,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 561,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 559,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Textarea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                                                label: "Anything else a dealer should know? (optional)",
                                                placeholder: "Examples: new tires, check engine light, smoke smell, aftermarket wheels…",
                                                value: draft.notes ?? '',
                                                onChange: (e)=>updateDraft({
                                                        notes: e.target.value
                                                    })
                                            }, void 0, false, {
                                                fileName: "[project]/components/SellFlow.tsx",
                                                lineNumber: 584,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 583,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 527,
                                    columnNumber: 17
                                }, this) : null,
                                step === 6 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Photos"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 596,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "Upload at least 3. More = better offers."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 597,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sell$2f$PhotoPicker$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PhotoPicker"], {
                                                    files: photoFiles,
                                                    setFiles: setPhotoFiles
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 602,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 text-xs text-zinc-500",
                                                    children: "Tips: 4 corners, interior, odometer, any damage."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 603,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 601,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 595,
                                    columnNumber: 17
                                }, this) : null,
                                step === 7 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-lg font-semibold text-zinc-900",
                                            children: "Existing offer?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 612,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-1 text-sm text-zinc-600",
                                            children: "If you already have a Carvana or CarMax offer, upload it. Dealers will verify it."
                                        }, void 0, false, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 613,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-zinc-900",
                                                    children: "Do you have a valid offer?"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 619,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 flex flex-wrap gap-2",
                                                    children: [
                                                        'None',
                                                        'Carvana',
                                                        'CarMax',
                                                        'Other'
                                                    ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Chip$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Chip"], {
                                                            selected: (draft.existingOffer?.source ?? 'None') === s,
                                                            onClick: ()=>updateExistingOffer({
                                                                    source: s,
                                                                    amount: '',
                                                                    expires: ''
                                                                }),
                                                            children: s === 'None' ? 'No' : s
                                                        }, s, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 624,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 622,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 618,
                                            columnNumber: 19
                                        }, this),
                                        (draft.existingOffer?.source ?? 'None') !== 'None' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 rounded-2xl border border-zinc-200 bg-white p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-medium text-zinc-900",
                                                    children: "Offer details"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 639,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1 text-xs text-zinc-500",
                                                    children: "⚠️ Don’t edit screenshots / PDFs. Dealers check."
                                                }, void 0, false, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 640,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 grid gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            label: "Offer amount",
                                                            placeholder: "e.g. 26,500",
                                                            value: draft.existingOffer?.amount ?? '',
                                                            onChange: (e)=>updateExistingOffer({
                                                                    amount: e.target.value
                                                                }),
                                                            inputMode: "numeric"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 645,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                            label: "Expiration (optional)",
                                                            placeholder: "e.g. 2026-03-12",
                                                            value: draft.existingOffer?.expires ?? '',
                                                            onChange: (e)=>updateExistingOffer({
                                                                    expires: e.target.value
                                                                }),
                                                            inputMode: "text"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 652,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "rounded-2xl border border-zinc-200 bg-white p-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm font-medium text-zinc-900",
                                                                    children: "Upload offer"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 661,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-xs text-zinc-500",
                                                                    children: "PDF or screenshot."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 662,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    className: "mt-3 block w-full text-sm",
                                                                    type: "file",
                                                                    accept: "image/*,application/pdf",
                                                                    onChange: (e)=>setOfferFiles(Array.from(e.target.files ?? []))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 663,
                                                                    columnNumber: 27
                                                                }, this),
                                                                offerFiles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2 text-xs text-zinc-600",
                                                                    children: [
                                                                        offerFiles.length,
                                                                        " file selected"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/SellFlow.tsx",
                                                                    lineNumber: 670,
                                                                    columnNumber: 29
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/SellFlow.tsx",
                                                            lineNumber: 660,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/SellFlow.tsx",
                                                    lineNumber: 644,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/SellFlow.tsx",
                                            lineNumber: 638,
                                            columnNumber: 21
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/SellFlow.tsx",
                                    lineNumber: 611,
                                    columnNumber: 17
                                }, this) : null
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SellFlow.tsx",
                            lineNumber: 233,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "fixed bottom-0 left-0 right-0 border-t border-zinc-200/70 bg-white/80 backdrop-blur safe-bottom",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mx-auto flex max-w-md items-center gap-2 px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        variant: "secondary",
                                        className: "w-24",
                                        disabled: step === 0,
                                        onClick: ()=>setStep((s)=>Math.max(0, s - 1)),
                                        children: "Back"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SellFlow.tsx",
                                        lineNumber: 684,
                                        columnNumber: 17
                                    }, this),
                                    step < TOTAL_STEPS - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "flex-1",
                                        disabled: !canContinue,
                                        onClick: ()=>{
                                            if (step === 0) {
                                                decodeVin();
                                                return;
                                            }
                                            setStep((s)=>Math.min(TOTAL_STEPS - 1, s + 1));
                                        },
                                        size: "lg",
                                        children: "Continue"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SellFlow.tsx",
                                        lineNumber: 694,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        className: "flex-1",
                                        size: "lg",
                                        disabled: !canContinue,
                                        onClick: onSubmit,
                                        children: "Submit for bids"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SellFlow.tsx",
                                        lineNumber: 709,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SellFlow.tsx",
                                lineNumber: 683,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/SellFlow.tsx",
                            lineNumber: 682,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/components/SellFlow.tsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SellFlow.tsx",
        lineNumber: 182,
        columnNumber: 5
    }, this);
}
_s(SellFlow, "EeIXNcouPhbxyBWEd9IJS5UH7/U=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SellFlow;
var _c;
__turbopack_context__.k.register(_c, "SellFlow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_954d7c37._.js.map