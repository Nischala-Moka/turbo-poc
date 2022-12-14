exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 225:
/***/ ((module) => {

// Exports
module.exports = {
	"nav_wrapper": "style_nav_wrapper__7fdyZ",
	"nav_ulist": "style_nav_ulist__nM21P",
	"mainContent": "style_mainContent__IUNHX",
	"para": "style_para__yZtpa",
	"card_one": "style_card_one__cwxZg",
	"card": "style_card__4bDq8"
};


/***/ }),

/***/ 824:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Csr)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(940);
/* harmony import */ var _global_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(225);
/* harmony import */ var _global_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_global_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(611);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_4__]);
nanoid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

 //react,state
 //shared library - btn
 //css
 //loadash (NEW VERSION 4.17)
 //nanoid (NEW VERSION 4)
//lodash and nanoid
let word = "turborepo";
let randomID = (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)();
//component
function Csr() {
    const [todo, setTodo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const apiCall = async ()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await response.json();
            setTodo(data);
        };
        setTimeout(()=>apiCall(), 3000);
        //return
        return ()=>{};
    }, []);
    console.log(randomID);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                children: [
                    "Nextjs CSR : ",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        style: {
                            color: "red"
                        },
                        children: lodash__WEBPACK_IMPORTED_MODULE_3___default().capitalize(word)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                children: todo.length === 0 && "Loading... ...."
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_global_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card_one),
                children: todo.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_global_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                children: item.email
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: item.username
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ui__WEBPACK_IMPORTED_MODULE_2__/* .Buttons */ .E, {})
                        ]
                    }, item.id))
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "E": () => (/* reexport */ Buttons)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ../../packages/ui/Buttons.tsx


const Buttons = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        style: {
            backgroundColor: "green",
            padding: "0.8rem",
            border: "none",
            borderRadius: "0.5rem",
            color: "white",
            fontWeight: "bold",
            cursor: "pointer"
        },
        onClick: ()=>console.log("event triggred!"),
        children: "shareBtn"
    });
};

;// CONCATENATED MODULE: ../../packages/ui/CounterButton.tsx


const CounterButton = ()=>{
    //state
    const [count, setCount] = useState(4);
    return /*#__PURE__*/ _jsxs("button", {
        style: {
            margin: "0.2rem",
            padding: "0.6rem",
            fontWeight: "bold",
            width: "9rem",
            cursor: "pointer"
        },
        type: "button",
        onClick: ()=>setCount((prev)=>prev + 1),
        children: [
            "incrementing:",
            count
        ]
    });
};
/* harmony default export */ const ui_CounterButton = ((/* unused pure expression or super */ null && (CounterButton)));

;// CONCATENATED MODULE: ../../packages/ui/index.tsx





/***/ })

};
;