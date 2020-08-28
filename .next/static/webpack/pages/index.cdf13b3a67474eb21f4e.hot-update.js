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
  }, data.obtenerReglasUsuario.map(function (regla) {
    return __jsx(_components_Regla__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: regla.id,
      regla: regla,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 8
      }
    });
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiT0JURU5FUl9DTElFTlRFU19VU1VBUklPIiwiZ3FsIiwiSW5kZXgiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VRdWVyeSIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwib2J0ZW5lclJlZ2xhc1VzdWFyaW8iLCJtYXAiLCJyZWdsYSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSx3QkFBd0IsR0FBR0MsMERBQUgsbUJBQTlCOztBQVdBLElBQU1DLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFbkI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCLENBSG1CLENBS25COztBQUxtQixrQkFNY0MsK0RBQVEsQ0FBQ0wsd0JBQUQsQ0FOdEI7QUFBQSxNQU1YTSxJQU5XLGFBTVhBLElBTlc7QUFBQSxNQU1MQyxPQU5LLGFBTUxBLE9BTks7QUFBQSxNQU1JQyxLQU5KLGFBTUlBLEtBTko7O0FBUW5CQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUosSUFBWjtBQUNBRyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsT0FBWjtBQUNBRSxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixFQVZtQixDQVluQjs7QUFDQSxNQUFHRCxPQUFILEVBQVksT0FBTyxhQUFQLENBYk8sQ0FlbkI7QUFDQTtBQUNBO0FBQ0E7O0FBR0EsU0FDQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0MsTUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBSSxhQUFTLEVBQUMsbUNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURELEVBR0MsTUFBQyxnREFBRDtBQUFNLFFBQUksRUFBQyxhQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFHLGFBQVMsRUFBQywrR0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELENBSEQsRUFPQztBQUFPLGFBQVMsRUFBQyx3Q0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQU8sYUFBUyxFQUFDLGFBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERCxFQUVDO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRCxFQUdDO0FBQUksYUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUhELEVBSUM7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUpELEVBS0M7QUFBSSxhQUFTLEVBQUMsWUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEQsQ0FERCxDQURELEVBVUM7QUFBTyxhQUFTLEVBQUMsVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFRCxJQUFJLENBQUNLLG9CQUFMLENBQTBCQyxHQUExQixDQUErQixVQUFBQyxLQUFLO0FBQUEsV0FDcEMsTUFBQyx5REFBRDtBQUNDLFNBQUcsRUFBRUEsS0FBSyxDQUFDQyxFQURaO0FBRUMsV0FBSyxFQUFFRCxLQUZSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEb0M7QUFBQSxHQUFwQyxDQURGLENBVkQsQ0FQRCxDQURELENBREQ7QUErQkEsQ0FwREQ7O0dBQU1YLEs7VUFHVUUscUQsRUFHa0JDLHVEOzs7S0FONUJILEs7QUFzRFNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkZjEzYjNhNjc0NzRlYjIxZjRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IFJlZ2xhIGZyb20gJy4uL2NvbXBvbmVudHMvUmVnbGEnO1xyXG5pbXBvcnQgeyB1c2VRdWVyeSwgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBPQlRFTkVSX0NMSUVOVEVTX1VTVUFSSU8gPSBncWwgYFxyXG5cdHF1ZXJ5IG9idGVuZXJSZWdsYXNVc3VhcmlvIHtcclxuXHRcdG9idGVuZXJSZWdsYXNVc3VhcmlvIHtcclxuXHRcdFx0aWRcclxuXHRcdFx0dGlwb1xyXG5cdFx0XHRjb25kaWNpb25cclxuXHRcdFx0cmVnbGFcclxuXHRcdH1cclxuXHR9XHJcbmA7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuXHJcblx0Ly8gUm91dGluZ1xyXG5cdGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1x0XHJcblxyXG5cdC8vIENvbnN1bHRhIGRlIEFwb2xsb1xyXG5cdGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSA9IHVzZVF1ZXJ5KE9CVEVORVJfQ0xJRU5URVNfVVNVQVJJTyk7XHJcblxyXG5cdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdGNvbnNvbGUubG9nKGxvYWRpbmcpO1xyXG5cdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHJcblx0Ly8gUHJvdGVnZXIgcXVlIG5vIGFjY2VkYW1vcyBhIGRhdGEgYW50ZXMgZGUgdGVuZXIgcmVzdWx0YWRvc1xyXG5cdGlmKGxvYWRpbmcpIHJldHVybiAnQ2FyZ2FuZG8uLi4nO1xyXG5cclxuXHQvLyAvL1NpIG5vIGhheSBpbmZvcm1hY2lvblxyXG5cdC8vIGlmKCFkYXRhLm9idGVuZXJSZWdsYXNVc3VhcmlvKSB7XHJcblx0Ly8gXHRyZXR1cm4gcm91dGVyLnB1c2goJy9sb2dpbicpO1xyXG5cdC8vIH1cclxuXHJcblxyXG5cdHJldHVybihcclxuXHRcdDxkaXY+XHJcblx0XHRcdDxMYXlvdXQ+XHJcblx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIHRleHQtZ3JheS04MDAgZm9udC1saWdodFwiPlJlZ2xhczwvaDE+XHJcblxyXG5cdFx0XHRcdDxMaW5rIGhyZWY9XCIvbnVldmFyZWdsYVwiPlxyXG5cdFx0XHRcdFx0PGEgY2xhc3NOYW1lPVwiYmctYmx1ZS04MDAgcHktMiBweC01IG10LTMgaW5saW5lLWJsb2NrIHRleHQtd2hpdGUgcm91bmRlZCB0ZXh0LXNtIGhvdmVyOmJnLWdyYXktODAwIG1iLTMgdXBwZXJjYXNlIGZvbnQtYm9sZFwiPk51ZXZhIFJlZ2xhPC9hPlxyXG5cdFx0XHRcdDwvTGluaz5cclxuXHJcblx0XHRcdFx0PHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlLWF1dG8gc2hhZG93LW1kIG10LTEwIHctZnVsbCB3LWxnXCI+XHJcblx0XHRcdFx0XHQ8dGhlYWQgY2xhc3NOYW1lPVwiYmctZ3JheS04MDBcIj5cclxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidy0xLzUgcHktMlwiPlRpcG88L3RoPlxyXG5cdFx0XHRcdFx0XHRcdDx0aCBjbGFzc05hbWU9XCJ3LTEvNSBweS0yXCI+Y29uZGljaW9uPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidy0xLzUgcHktMlwiPlJlZ2xhPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidy0xLzUgcHktMlwiPkVsaW1pbmFyPC90aD5cclxuXHRcdFx0XHRcdFx0XHQ8dGggY2xhc3NOYW1lPVwidy0xLzUgcHktMlwiPkVkaXRhcjwvdGg+XHJcblx0XHRcdFx0XHRcdDwvdHI+XHJcblx0XHRcdFx0XHQ8L3RoZWFkPlxyXG5cdFx0XHRcdFx0PHRib2R5IGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+XHJcblx0XHRcdFx0XHRcdHtkYXRhLm9idGVuZXJSZWdsYXNVc3VhcmlvLm1hcCggcmVnbGEgPT4gKFxyXG5cdFx0XHRcdFx0XHRcdDxSZWdsYVxyXG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtyZWdsYS5pZH1cclxuXHRcdFx0XHRcdFx0XHRcdHJlZ2xhPXtyZWdsYX1cclxuXHRcdFx0XHRcdFx0XHQvPlxyXG5cdFx0XHRcdFx0XHQpKX1cclxuXHRcdFx0XHRcdDwvdGJvZHk+XHJcblx0XHRcdFx0PC90YWJsZT5cclxuXHRcdFx0PC9MYXlvdXQ+XHJcblx0XHQ8L2Rpdj5cdFx0XHJcblx0KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==