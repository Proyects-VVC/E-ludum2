webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Regla__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Regla */ "./components/Regla.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _this = undefined,
    _jsxFileName = "C:\\RepositoriosDesarrollo\\e-Ludumv4\\WAI-Eludum\\pages\\index.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery obtenerReglasUsuario {\n\t\tobtenerReglasUsuario {\n\t\t\tid\n\t\t\ttipo\n\t\t\tcondicion\n\t\t\tregla\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var OBTENER_CLIENTES_USUARIO = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());

var Index = function Index() {
  _s();

  // Routing
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])(); // Consulta de Apollo

  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(OBTENER_CLIENTES_USUARIO),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error;

  console.log(data);
  console.log(loading);
  console.log(error); // Proteger que no accedamos a data antes de tener resultados

  if (loading) return 'Cargando...'; // //Si no hay informacion
  // if(!data.obtenerReglasUsuario) {
  // 	return router.push('/login');
  // }

  return __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 3
    }
  }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 4
    }
  }, __jsx("h1", {
    className: "text-2xl text-gray-800 font-light",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, "Reglas"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/nuevaregla",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("a", {
    className: "bg-blue-800 py-2 px-5 mt-3 inline-block text-white rounded text-sm hover:bg-gray-800 mb-3 uppercase font-bold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 6
    }
  }, "Nueva Regla")), __jsx("table", {
    className: "table-auto shadow-md mt-10 w-full w-lg",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("thead", {
    className: "bg-gray-800",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 6
    }
  }, __jsx("tr", {
    className: "text-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, __jsx("th", {
    className: "w-1/5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 8
    }
  }, "Tipo"), __jsx("th", {
    className: "w-1/5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 8
    }
  }, "condicion"), __jsx("th", {
    className: "w-1/5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 8
    }
  }, "Regla"), __jsx("th", {
    className: "w-1/5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 8
    }
  }, "Eliminar"), __jsx("th", {
    className: "w-1/5 py-2",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 8
    }
  }, "Editar"))), __jsx("tbody", {
    className: "bg-white",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 6
    }
  }))));
};

_s(Index, "iceLXWjNxjNDYEEqU/kIP9QHhY0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"], _apollo_client__WEBPACK_IMPORTED_MODULE_5__["useQuery"]];
});

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0JURU5FUl9DTElFTlRFU19VU1VBUklPIiwiZ3FsIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx3QkFBd0IsR0FBR0MsMERBQUgsbUJBQTlCOztBQVdBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSG1CLENBS25COztBQUxtQixrQkFNY0MsK0RBQVEsQ0FBQ0wsd0JBQUQsQ0FOdEI7QUFBQSxNQU1YTSxJQU5XLGFBTVhBLElBTlc7QUFBQSxNQU1MQyxPQU5LLGFBTUxBLE9BTks7QUFBQSxNQU1JQyxLQU5KLGFBTUlBLEtBTko7O0FBUW5CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQVZtQixDQVluQjs7QUFDQSxNQUFHRCxPQUFILEVBQVksT0FBTyxhQUFQLENBYk8sQ0FlbkI7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsbUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBR0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQywrR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBSEQsRUFPQztBQUFPLGFBQVMsRUFBQyx3Q0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sYUFBUyxFQUFDLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVDO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxFQUdDO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELEVBSUM7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpELEVBS0M7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsQ0FERCxDQURELEVBVUM7QUFBTyxhQUFTLEVBQUMsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZELENBUEQsQ0FERCxDQUREO0FBMEJBLENBL0NEOztHQUFNTCxLO1VBR1VFLHFELEVBR2tCQyx1RDs7O0tBTjVCSCxLO0FBaURTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMWQ0YTM5NzQzZGM1NWI1ZjEwZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBSZWdsYSBmcm9tICcuLi9jb21wb25lbnRzL1JlZ2xhJztcclxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgT0JURU5FUl9DTElFTlRFU19VU1VBUklPID0gZ3FsIGBcclxuXHRxdWVyeSBvYnRlbmVyUmVnbGFzVXN1YXJpbyB7XHJcblx0XHRvYnRlbmVyUmVnbGFzVXN1YXJpbyB7XHJcblx0XHRcdGlkXHJcblx0XHRcdHRpcG9cclxuXHRcdFx0Y29uZGljaW9uXHJcblx0XHRcdHJlZ2xhXHJcblx0XHR9XHJcblx0fVxyXG5gO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcblxyXG5cdC8vIFJvdXRpbmdcclxuXHRjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcdFxyXG5cclxuXHQvLyBDb25zdWx0YSBkZSBBcG9sbG9cclxuXHRjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeShPQlRFTkVSX0NMSUVOVEVTX1VTVUFSSU8pO1xyXG5cclxuXHRjb25zb2xlLmxvZyhkYXRhKTtcclxuXHRjb25zb2xlLmxvZyhsb2FkaW5nKTtcclxuXHRjb25zb2xlLmxvZyhlcnJvcik7XHJcblxyXG5cdC8vIFByb3RlZ2VyIHF1ZSBubyBhY2NlZGFtb3MgYSBkYXRhIGFudGVzIGRlIHRlbmVyIHJlc3VsdGFkb3NcclxuXHRpZihsb2FkaW5nKSByZXR1cm4gJ0NhcmdhbmRvLi4uJztcclxuXHJcblx0Ly8gLy9TaSBubyBoYXkgaW5mb3JtYWNpb25cclxuXHQvLyBpZighZGF0YS5vYnRlbmVyUmVnbGFzVXN1YXJpbykge1xyXG5cdC8vIFx0cmV0dXJuIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuXHQvLyB9XHJcblxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktODAwIGZvbnQtbGlnaHRcIj5SZWdsYXM8L2gxPlxyXG5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL251ZXZhcmVnbGFcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHB5LTIgcHgtNSBtdC0zIGlubGluZS1ibG9jayB0ZXh0LXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBob3ZlcjpiZy1ncmF5LTgwMCBtYi0zIHVwcGVyY2FzZSBmb250LWJvbGRcIj5OdWV2YSBSZWdsYTwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHNoYWRvdy1tZCBtdC0xMCB3LWZ1bGwgdy1sZ1wiPlxyXG5cdFx0XHRcdFx0PHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5UaXBvPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidy0xLzUgcHktMlwiPmNvbmRpY2lvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5SZWdsYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5FbGltaW5hcjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5FZGl0YXI8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC9kaXY+XHRcdFxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=