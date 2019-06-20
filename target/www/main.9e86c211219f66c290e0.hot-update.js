webpackHotUpdate("main",{

/***/ "./src/main/webapp/app/entities/cliente/cliente.tsx":
/*!**********************************************************!*\
  !*** ./src/main/webapp/app/entities/cliente/cliente.tsx ***!
  \**********************************************************/
/*! exports provided: Cliente, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cliente", function() { return Cliente; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-jhipster */ "./node_modules/react-jhipster/lib/index.js");
/* harmony import */ var react_jhipster__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jhipster__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _cliente_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cliente.reducer */ "./src/main/webapp/app/entities/cliente/cliente.reducer.ts");
/* harmony import */ var app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/util/pagination.constants */ "./src/main/webapp/app/shared/util/pagination.constants.ts");





// tslint:disable-next-line:no-unused-variable




var Cliente = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Cliente, _super);
    function Cliente() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, Object(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["getSortState"])(_this.props.location, app_shared_util_pagination_constants__WEBPACK_IMPORTED_MODULE_8__["ITEMS_PER_PAGE"]));
        _this.sort = function (prop) { return function () {
            _this.setState({
                order: _this.state.order === 'asc' ? 'desc' : 'asc',
                sort: prop
            }, function () { return _this.sortEntities(); });
        }; };
        _this.handlePagination = function (activePage) { return _this.setState({ activePage: activePage }, function () { return _this.sortEntities(); }); };
        _this.getEntities = function () {
            var _a = _this.state, activePage = _a.activePage, itemsPerPage = _a.itemsPerPage, sort = _a.sort, order = _a.order;
            _this.props.getEntities(activePage - 1, itemsPerPage, sort + "," + order);
        };
        return _this;
    }
    Cliente.prototype.componentDidMount = function () {
        this.getEntities();
    };
    Cliente.prototype.sortEntities = function () {
        this.getEntities();
        this.props.history.push(this.props.location.pathname + "?page=" + this.state.activePage + "&sort=" + this.state.sort + "," + this.state.order);
    };
    Cliente.prototype.render = function () {
        var _a = this.props, clienteList = _a.clienteList, match = _a.match, totalItems = _a.totalItems;
        return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", { id: "cliente-heading" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.home.title" }, "Clientes"),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: match.url + "/new", className: "btn btn-primary float-right jh-create-entity", id: "jh-create-entity" },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "plus" }),
                    "\u00A0",
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.home.createLabel" }, "Create new Cliente"))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "table-responsive" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], { responsive: true },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('id') },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "global.field.id" }, "ID"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('numeroDocumento') },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.numeroDocumento" }, "Numero Documento"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('primerNombre') },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.primerNombre" }, "Primer Nombre"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('segundoNombre') },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.segundoNombre" }, "Segundo Nombre"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('primerApellido') },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.primerApellido" }, "Primer Apellido"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", { className: "hand", onClick: this.sort('segundoApellido') },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.segundoApellido" }, "Segundo Apellido"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null,
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "ghostceetApp.cliente.documento" }, "Documento"),
                                " ",
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "sort" })),
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", null))),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", null, clienteList.map(function (cliente, i) { return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", { key: "entity-" + i },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null,
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + cliente.id, color: "link", size: "sm" }, cliente.id)),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, cliente.numeroDocumento),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, cliente.primerNombre),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, cliente.segundoNombre),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, cliente.primerApellido),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, cliente.segundoApellido),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { id:  true ? 'msg' : undefined }, "Hello World!"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", null, cliente.documento ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], { to: "documento/" + cliente.documento.id }, cliente.documento.nombre) : ''),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", { className: "text-right" },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: "btn-group flex-btn-group-container" },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + cliente.id, color: "info", size: "sm" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "eye" }),
                                    ' ',
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "entity.action.view" }, "View"))),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + cliente.id + "/edit", color: "primary", size: "sm" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "pencil-alt" }),
                                    ' ',
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "entity.action.edit" }, "Edit"))),
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], { tag: react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], to: match.url + "/" + cliente.id + "/delete", color: "danger", size: "sm" },
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], { icon: "trash" }),
                                    ' ',
                                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", { className: "d-none d-md-inline" },
                                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["Translate"], { contentKey: "entity.action.delete" }, "Delete"))))))); })))),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], { className: "justify-content-center" },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["JhiPagination"], { items: Object(react_jhipster__WEBPACK_IMPORTED_MODULE_5__["getPaginationItemsNumber"])(totalItems, this.state.itemsPerPage), activePage: this.state.activePage, onSelect: this.handlePagination, maxButtons: 5 }))));
    };
    return Cliente;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component));

var mapStateToProps = function (_a) {
    var cliente = _a.cliente;
    return ({
        clienteList: cliente.entities,
        totalItems: cliente.totalItems
    });
};
var mapDispatchToProps = {
    getEntities: _cliente_reducer__WEBPACK_IMPORTED_MODULE_7__["getEntities"]
};
function f(r) {
    if (r === null) {
        return false;
    }
    else {
        return true;
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Cliente));


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\agomez\\Documents\\temp\\jhipster\\JHIPSTER2\\src\\main\\webapp\\app\\entities\\cliente\\cliente.tsx"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\agomez\\Documents\\temp\\jhipster\\JHIPSTER2\\src\\main\\webapp\\app\\entities\\cliente\\cliente.tsx"); } } })();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=main.9e86c211219f66c290e0.hot-update.js.map