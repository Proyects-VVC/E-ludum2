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
  // const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);

  console.log(data);
  console.log(loading);
  console.log(error); // Proteger que no accedamos a data antes de tener resultados
  // //Si no hay informacion
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

_s(Index, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0JURU5FUl9DTElFTlRFU19VU1VBUklPIiwiZ3FsIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsd0JBQXdCLEdBQUdDLDBEQUFILG1CQUE5Qjs7QUFXQSxJQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxHQUFNO0FBQUE7O0FBRW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QixDQUhtQixDQUtuQjtBQUNBOztBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBRixTQUFPLENBQUNDLEdBQVIsQ0FBWUUsT0FBWjtBQUNBSCxTQUFPLENBQUNDLEdBQVIsQ0FBWUcsS0FBWixFQVZtQixDQVluQjtBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUksYUFBUyxFQUFDLG1DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERCxFQUdDLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsYUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxhQUFTLEVBQUMsK0dBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERCxDQUhELEVBT0M7QUFBTyxhQUFTLEVBQUMsd0NBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFPLGFBQVMsRUFBQyxhQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsRUFFQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkQsRUFHQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRCxFQUlDO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRCxFQUtDO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUxELENBREQsQ0FERCxFQVVDO0FBQU8sYUFBUyxFQUFDLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWRCxDQVBELENBREQsQ0FERDtBQTBCQSxDQS9DRDs7R0FBTVAsSztVQUdVRSxxRDs7O0tBSFZGLEs7QUFpRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE5YjA5ZjU1NGZlYzRlYzRlMTZiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFJlZ2xhIGZyb20gJy4uL2NvbXBvbmVudHMvUmVnbGEnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBPQlRFTkVSX0NMSUVOVEVTX1VTVUFSSU8gPSBncWwgYFxyXG5cdHF1ZXJ5IG9idGVuZXJSZWdsYXNVc3VhcmlvIHtcclxuXHRcdG9idGVuZXJSZWdsYXNVc3VhcmlvIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0dGlwb1xyXG5cdFx0XHRjb25kaWNpb25cclxuXHRcdFx0cmVnbGFcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcblx0Ly8gUm91dGluZ1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1x0XHJcblxyXG5cdC8vIENvbnN1bHRhIGRlIEFwb2xsb1xyXG5cdC8vIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KE9CVEVORVJfQ0xJRU5URVNfVVNVQVJJTyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdGNvbnNvbGUubG9nKGxvYWRpbmcpO1xyXG5cdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcblx0Ly8gUHJvdGVnZXIgcXVlIG5vIGFjY2VkYW1vcyBhIGRhdGEgYW50ZXMgZGUgdGVuZXIgcmVzdWx0YWRvc1xyXG5cclxuXHJcblx0Ly8gLy9TaSBubyBoYXkgaW5mb3JtYWNpb25cclxuXHQvLyBpZighZGF0YS5vYnRlbmVyUmVnbGFzVXN1YXJpbykge1xyXG5cdC8vIFx0cmV0dXJuIHJvdXRlci5wdXNoKCcvbG9naW4nKTtcclxuXHQvLyB9XHJcblxyXG5cclxuXHRyZXR1cm4oXHJcblx0XHQ8ZGl2PlxyXG5cdFx0XHQ8TGF5b3V0PlxyXG5cdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LWdyYXktODAwIGZvbnQtbGlnaHRcIj5SZWdsYXM8L2gxPlxyXG5cclxuXHRcdFx0XHQ8TGluayBocmVmPVwiL251ZXZhcmVnbGFcIj5cclxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT1cImJnLWJsdWUtODAwIHB5LTIgcHgtNSBtdC0zIGlubGluZS1ibG9jayB0ZXh0LXdoaXRlIHJvdW5kZWQgdGV4dC1zbSBob3ZlcjpiZy1ncmF5LTgwMCBtYi0zIHVwcGVyY2FzZSBmb250LWJvbGRcIj5OdWV2YSBSZWdsYTwvYT5cclxuXHRcdFx0XHQ8L0xpbms+XHJcblxyXG5cdFx0XHRcdDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZS1hdXRvIHNoYWRvdy1tZCBtdC0xMCB3LWZ1bGwgdy1sZ1wiPlxyXG5cdFx0XHRcdFx0PHRoZWFkIGNsYXNzTmFtZT1cImJnLWdyYXktODAwXCI+XHJcblx0XHRcdFx0XHRcdDx0ciBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5UaXBvPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidy0xLzUgcHktMlwiPmNvbmRpY2lvbjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5SZWdsYTwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5FbGltaW5hcjwvdGg+XHJcblx0XHRcdFx0XHRcdFx0PHRoIGNsYXNzTmFtZT1cInctMS81IHB5LTJcIj5FZGl0YXI8L3RoPlxyXG5cdFx0XHRcdFx0XHQ8L3RyPlxyXG5cdFx0XHRcdFx0PC90aGVhZD5cclxuXHRcdFx0XHRcdDx0Ym9keSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ8L3Rib2R5PlxyXG5cdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdDwvTGF5b3V0PlxyXG5cdFx0PC9kaXY+XHRcdFxyXG5cdClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=