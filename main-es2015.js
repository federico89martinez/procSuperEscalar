(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <figure class=\"figure\">\n  <img [src]= \"netImage\" class=\"figure-img img-fluid rounded\" alt=\"A generic square placeholder image with rounded corners in a figure.\">\n  <figcaption class=\"figure-caption\">A camption for the above image</figcaption>\n</figure> -->\n   <img src=\"{{imageSrc}}\" alt=\"{{imageAlt}}\"> \n\n\n\n<h2 style=\"margin-left: 500px\">Procesador Super Escalar</h2>\n\n<h5  style=\"margin-left: 50px\">Número de ciclos de reloj de cada instrucción</h5>\n\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 50px\" type=\"button\" class=\"btn btn-outline-primary\"  >ADD:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\" >\n    <option (click)=\"agregarAdd(1)\">1</option>\n    <option (click)=\"agregarAdd(2)\">2</option>\n    <option (click)=\"agregarAdd(3)\">3</option>\n    <option (click)=\"agregarAdd(4)\">4</option>\n    <option (click)=\"agregarAdd(5)\">5</option>\n    <option (click)=\"agregarAdd(6)\">6</option>\n    <option (click)=\"agregarAdd(7)\">7</option>\n    <option (click)=\"agregarAdd(8)\">8</option>\n    <option (click)=\"agregarAdd(9)\">9</option>\n    <option (click)=\"agregarAdd(10)\">10</option>\n </select>\n  </div>\n\n  <div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >SUBD:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n    <option (click)=\"agregarSub(1)\">1</option>\n    <option (click)=\"agregarSub(2)\">2</option>\n    <option (click)=\"agregarSub(3)\">3</option>\n    <option (click)=\"agregarSub(4)\">4</option>\n    <option (click)=\"agregarSub(5)\">5</option>\n    <option (click)=\"agregarSub(6)\">6</option>\n    <option (click)=\"agregarSub(7)\">7</option>\n    <option (click)=\"agregarSub(8)\">8</option>\n    <option (click)=\"agregarSub(9)\">9</option>\n    <option (click)=\"agregarSub(10)\">10</option>\n  </select> \n  </div> \n\n  <div class=\"btn-group\" role=\"group\">\n    <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >MULD:</button>\n    <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n      <option (click)=\"agregarMul(1)\">1</option>\n      <option (click)=\"agregarMul(2)\">2</option>\n      <option (click)=\"agregarMul(3)\">3</option>\n      <option (click)=\"agregarMul(4)\">4</option>\n      <option (click)=\"agregarMul(5)\">5</option>\n      <option (click)=\"agregarMul(6)\">6</option>\n      <option (click)=\"agregarMul(7)\">7</option>\n      <option (click)=\"agregarMul(8)\">8</option>\n      <option (click)=\"agregarMul(9)\">9</option>\n      <option (click)=\"agregarMul(10)\">10</option>\n    </select> \n    </div> \n\n    <div class=\"btn-group\" role=\"group\">\n      <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >DIV:</button>\n      <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n        <option (click)=\"agregarDiv(1)\">1</option>\n        <option (click)=\"agregarDiv(2)\">2</option>\n        <option (click)=\"agregarDiv(3)\">3</option>\n        <option (click)=\"agregarDiv(4)\">4</option>\n        <option (click)=\"agregarDiv(5)\">5</option>\n        <option (click)=\"agregarDiv(6)\">6</option>\n        <option (click)=\"agregarDiv(7)\">7</option>\n        <option (click)=\"agregarDiv(8)\">8</option>\n        <option (click)=\"agregarDiv(9)\">9</option>\n        <option (click)=\"agregarDiv(10)\">10</option>\n      </select> \n      </div> \n\n        <div class=\"btn-group\" role=\"group\">\n          <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >STD:</button>\n          <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n            <option (click)=\"agregarStd(1)\">1</option>\n            <option (click)=\"agregarStd(2)\">2</option>\n            <option (click)=\"agregarStd(3)\">3</option>\n            <option (click)=\"agregarStd(4)\">4</option>\n            <option (click)=\"agregarStd(5)\">5</option>\n            <option (click)=\"agregarStd(6)\">6</option>\n            <option (click)=\"agregarStd(7)\">7</option>\n            <option (click)=\"agregarStd(8)\">8</option>\n            <option (click)=\"agregarStd(9)\">9</option>\n            <option (click)=\"agregarStd(10)\">10</option>\n          </select> \n          </div> \n\n          <div class=\"btn-group\" role=\"group\">\n            <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >LDD:</button>\n            <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n              <option (click)=\"agregarLdd(1)\">1</option>\n              <option (click)=\"agregarLdd(2)\">2</option>\n              <option (click)=\"agregarLdd(3)\">3</option>\n              <option (click)=\"agregarLdd(4)\">4</option>\n              <option (click)=\"agregarLdd(5)\">5</option>\n              <option (click)=\"agregarLdd(6)\">6</option>\n              <option (click)=\"agregarLdd(7)\">7</option>\n              <option (click)=\"agregarLdd(8)\">8</option>\n              <option (click)=\"agregarLdd(9)\">9</option>\n              <option (click)=\"agregarLdd(10)\">10</option>\n            </select> \n            </div> \n\n<br>\n\n\n<br/>\n<h5 style=\"margin-left: 50px\">Agregar una instrucción</h5>\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 50px\" type=\"button\" class=\"btn btn-outline-primary\" >INSTRUCTION:</button>\n  <select   type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n    <option selected>---</option>\n    <option (click)=\"agregarInst(0)\">ADD</option>\n    <option (click)=\"agregarInst(1)\">SUBD</option>\n    <option (click)=\"agregarInst(2)\">MULD</option>\n    <option (click)=\"agregarInst(3)\">DIV</option>\n    <option (click)=\"agregarInst(4)\" (click)=\"agregarOp2(-1)\">STD</option>\n    <option (click)=\"agregarInst(5)\" (click)=\"agregarOp2(-1)\">LDD</option>\n  </select> \n</div>\n\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >DST:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n    <option selected>---</option>\n    <option (click)=\"agregarDst(0)\">r0</option>\n    <option (click)=\"agregarDst(1)\">r1</option>\n    <option (click)=\"agregarDst(2)\">r2</option>\n    <option (click)=\"agregarDst(3)\">r3</option>\n    <option (click)=\"agregarDst(4)\">r4</option>\n    <option (click)=\"agregarDst(5)\">r5</option>\n    <option (click)=\"agregarDst(6)\">r6</option>\n    <option (click)=\"agregarDst(7)\">r7</option>\n    <option (click)=\"agregarDst(8)\">r8</option>\n    <option (click)=\"agregarDst(9)\">r9</option>\n    <option (click)=\"agregarDst(10)\">r10</option>\n    <option (click)=\"agregarDst(11)\">r11</option>\n    <option (click)=\"agregarDst(12)\">r12</option>\n    <option (click)=\"agregarDst(13)\">r13</option>\n    <option (click)=\"agregarDst(14)\">r14</option>\n    <option (click)=\"agregarDst(15)\">r15</option>\n    <option (click)=\"agregarDst(16)\">r16</option>\n    <option (click)=\"agregarDst(17)\">r17</option>\n    <option (click)=\"agregarDst(18)\">r18</option>\n    <option (click)=\"agregarDst(19)\">r19</option>\n    <option (click)=\"agregarDst(20)\">r20</option>\n    <option (click)=\"agregarDst(21)\">r21</option>\n    <option (click)=\"agregarDst(22)\">r22</option>\n    <option (click)=\"agregarDst(23)\">r23</option>\n    <option (click)=\"agregarDst(24)\">r24</option>\n    <option (click)=\"agregarDst(25)\">r25</option>\n    <option (click)=\"agregarDst(26)\">r26</option>\n    <option (click)=\"agregarDst(27)\">r27</option>\n    <option (click)=\"agregarDst(28)\">r28</option>\n    <option (click)=\"agregarDst(29)\">r29</option>\n    <option (click)=\"agregarDst(30)\">r30</option>\n   </select> \n</div> \n\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >OP1:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\">\n    <option selected>---</option>\n    <option (click)=\"agregarOp1(0)\">r0</option>\n    <option (click)=\"agregarOp1(1)\">r1</option>\n    <option (click)=\"agregarOp1(2)\">r2</option>\n    <option (click)=\"agregarOp1(3)\">r3</option>\n    <option (click)=\"agregarOp1(4)\">r4</option>\n    <option (click)=\"agregarOp1(5)\">r5</option>\n    <option (click)=\"agregarOp1(6)\">r6</option>\n    <option (click)=\"agregarOp1(7)\">r7</option>\n    <option (click)=\"agregarOp1(8)\">r8</option>\n    <option (click)=\"agregarOp1(9)\">r9</option>\n    <option (click)=\"agregarOp1(10)\">r10</option>\n    <option (click)=\"agregarOp1(11)\">r11</option>\n    <option (click)=\"agregarOp1(12)\">r12</option>\n    <option (click)=\"agregarOp1(13)\">r13</option>\n    <option (click)=\"agregarOp1(14)\">r14</option>\n    <option (click)=\"agregarOp1(15)\">r15</option>\n    <option (click)=\"agregarOp1(16)\">r16</option>\n    <option (click)=\"agregarOp1(17)\">r17</option>\n    <option (click)=\"agregarOp1(18)\">r18</option>\n    <option (click)=\"agregarOp1(19)\">r19</option>\n    <option (click)=\"agregarOp1(20)\">r20</option>\n    <option (click)=\"agregarOp1(21)\">r21</option>\n    <option (click)=\"agregarOp1(22)\">r22</option>\n    <option (click)=\"agregarOp1(23)\">r23</option>\n    <option (click)=\"agregarOp1(24)\">r24</option>\n    <option (click)=\"agregarOp1(25)\">r25</option>\n    <option (click)=\"agregarOp1(26)\">r26</option>\n    <option (click)=\"agregarOp1(27)\">r27</option>\n    <option (click)=\"agregarOp1(28)\">r28</option>\n    <option (click)=\"agregarOp1(29)\">r29</option>\n    <option (click)=\"agregarOp1(30)\">r30</option>\n   </select> \n</div> \n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 10px\" type=\"button\" class=\"btn btn-outline-primary\" >OP2:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"op2Disabled\" [disabled]=\"buttonDisabled\">\n    <option selected>---</option>\n    <option (click)=\"agregarOp2(0)\">r0</option>\n    <option (click)=\"agregarOp2(1)\">r1</option>\n    <option (click)=\"agregarOp2(2)\">r2</option>\n    <option (click)=\"agregarOp2(3)\">r3</option>\n    <option (click)=\"agregarOp2(4)\">r4</option>\n    <option (click)=\"agregarOp2(5)\">r5</option>\n    <option (click)=\"agregarOp2(6)\">r6</option>\n    <option (click)=\"agregarOp2(7)\">r7</option>\n    <option (click)=\"agregarOp2(8)\">r8</option>\n    <option (click)=\"agregarOp2(9)\">r9</option>\n    <option (click)=\"agregarOp2(10)\">r10</option>\n    <option (click)=\"agregarOp2(11)\">r11</option>\n    <option (click)=\"agregarOp2(12)\">r12</option>\n    <option (click)=\"agregarOp2(13)\">r13</option>\n    <option (click)=\"agregarOp2(14)\">r14</option>\n    <option (click)=\"agregarOp2(15)\">r15</option>\n    <option (click)=\"agregarOp2(16)\">r16</option>\n    <option (click)=\"agregarOp2(17)\">r17</option>\n    <option (click)=\"agregarOp2(18)\">r18</option>\n    <option (click)=\"agregarOp2(19)\">r19</option>\n    <option (click)=\"agregarOp2(20)\">r20</option>\n    <option (click)=\"agregarOp2(21)\">r21</option>\n    <option (click)=\"agregarOp2(22)\">r22</option>\n    <option (click)=\"agregarOp2(23)\">r23</option>\n    <option (click)=\"agregarOp2(24)\">r24</option>\n    <option (click)=\"agregarOp2(25)\">r25</option>\n    <option (click)=\"agregarOp2(26)\">r26</option>\n    <option (click)=\"agregarOp2(27)\">r27</option>\n    <option (click)=\"agregarOp2(28)\">r28</option>\n    <option (click)=\"agregarOp2(29)\">r29</option>\n    <option (click)=\"agregarOp2(30)\">r30</option>\n   </select>\n</div> \n<div class=\"btn-group\" role=\"group\">\n\n  <button  style=\"margin-left: 10px\" type=\"button\"  class=\"btn btn-secondary\"  (click)=\"mostrarIns()\" [disabled]=\"buttonDisabled\" >Agregar</button>\n\n</div>\n<br><br/>\n\n<h5 style=\"margin-left: 50px\">Tabla de instrucciones</h5>\n<div  class=\"tabla\" >\n<table >\n    <tr>\n        <th>#</th>\n        <th>Instrucción</th>\n        <th>Dst</th>\n        <th>Op1</th>\n        <th>Op2</th>\n        <th>Eliminar</th>\n    </tr>\n     <tr *ngFor=\"let instru of instruccion; index as i\">\n        <!-- <td scope=\"row\">S{{i+1}}</td> -->\n        <td>{{instru.s}}</td>\n        <td>{{instru.i}}</td>\n        <td>{{instru.d}}</td>\n        <td>{{instru.op1}}</td>\n        <td>{{instru.op2}}</td> \n        <td><button (click)=\"deleteIns(instru)\" [disabled]=\"buttonDisabled\">X</button></td>\n    </tr> \n \n</table>\n</div>\n\n\n<br>\n<br/>\n<h5 style=\"margin-left: 100px\">Despacho</h5>\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 100px\" type=\"button\" class=\"btn btn-outline-primary\"  >GRADO:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\" >\n    <option (click)=\"agregarDesp(1)\">1</option>\n    <option (click)=\"agregarDesp(2)\">2</option>\n    <option (click)=\"agregarDesp(3)\">3</option>\n    <option (click)=\"agregarDesp(4)\">4</option>\n    <option (click)=\"agregarDesp(5)\">5</option>\n </select>\n  </div>\n  <br>\n  <br/>\n  <h5 style=\"margin-left: 100px\">Estaciones de Reserva</h5>\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 100px\" type=\"button\" class=\"btn btn-outline-primary\"  >Estaciones:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\" >\n    <option (click)=\"agregarEstReser(1)\">1</option>\n    <option (click)=\"agregarEstReser(2)\">2</option>\n    <option (click)=\"agregarEstReser(3)\">3</option>\n    <option (click)=\"agregarEstReser(4)\">4</option>\n    <option (click)=\"agregarEstReser(5)\">5</option>\n </select>\n  </div>\n  <br>\n  <br/>\n  <h5 style=\"margin-left: 100px\">Unidades Funcionales</h5>\n<div class=\"btn-group\" role=\"group\">\n  <button style=\"margin-left: 100px\" type=\"button\" class=\"btn btn-outline-primary\"  >Multifuncion:</button>\n  <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\" >\n    <option (click)=\"agregarUFMultFunc(0)\">0</option>\n    <option (click)=\"agregarUFMultFunc(1)\">1</option>\n    <option (click)=\"agregarUFMultFunc(2)\">2</option>\n    <option (click)=\"agregarUFMultFunc(3)\">3</option>\n    <option (click)=\"agregarUFMultFunc(4)\">4</option>\n    <option (click)=\"agregarUFMultFunc(5)\">5</option>\n </select>\n  </div>\n  <br>\n  <br/>\n  <div class=\"btn-group\" role=\"group\">\n    <button style=\"margin-left: 100px\" type=\"button\" class=\"btn btn-outline-primary\"  >Aritmetica:</button>\n    <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\" >\n      <option (click)=\"agregarUFAritmetica(0)\">0</option>\n      <option (click)=\"agregarUFAritmetica(1)\">1</option>\n      <option (click)=\"agregarUFAritmetica(2)\">2</option>\n      <option (click)=\"agregarUFAritmetica(3)\">3</option>\n      <option (click)=\"agregarUFAritmetica(4)\">4</option>\n      <option (click)=\"agregarUFAritmetica(5)\">5</option>\n   </select>\n    </div>\n  <br>\n  <br/>\n  <div class=\"btn-group\" role=\"group\">\n    <button style=\"margin-left: 100px\" type=\"button\" class=\"btn btn-outline-primary\"  >Memoria:</button>\n    <select type=\"button\" class=\"btn btn-outline-primary dropdown-toggle\" [disabled]=\"buttonDisabled\" >\n      <option (click)=\"agregarUFMemoria(0)\">0</option>\n      <option (click)=\"agregarUFMemoria(1)\">1</option>\n      <option (click)=\"agregarUFMemoria(2)\">2</option>\n      <option (click)=\"agregarUFMemoria(3)\">3</option>\n      <option (click)=\"agregarUFMemoria(4)\">4</option>\n      <option (click)=\"agregarUFMemoria(5)\">5</option>\n   </select>\n    </div>\n  <br>\n  <br/>\n<h5 style=\"margin-left: 100px\">Control:</h5>\n<div class=\"btn-group\" role=\"group\">\n<button  type=\"button\"  style=\"margin-left: 100px\"  class=\"btn btn-secondary\"  (click)=\"guardarCiclos()\" (click)=\"ejecutar()\" >Guardar </button>  \n<!-- (click)=\"guardar()\" -->\n<button  type=\"button\"   class=\"btn btn-secondary\" (click)=\"editar()\" >Editar</button>\n</div>\n\n\n\n<br>\n<br/>\n   <br>\n   <br/>\n   <div class=\"row\">\n    <div class = \"col-md-12 bpadding-10\">\n    <button id=\"btn-next\" type=\"button\"  style=\"margin-left: 100px;\" class=\"btn btn-secondary\" (click)=\"siguienteCiclo()\" *ngIf=\"mostrarTabla\">Siguiente ciclo</button>\n  </div>\n  </div>\n\n<div style=\"margin-left: 50px\" class=\"class row\">\n  <div class=\"col\">\n    <div id = \"tabla-superEscalar\" >\n      <div class=\" superEscalar-table \">      \n        <table id =\"tablaCiclos\" class=\"egt\"  *ngIf=\"mostrarTabla\"  >  \n          <thead>\n            <tr>\n              <th scope = \"col\">Ciclo</th>\n            </tr>\n          </thead>\n          <tbody>\n            {{filasCiclos}}\n          </tbody>\n        </table>\n\n        <table id=\"tablaDespacho\" class=\"egt\" *ngIf=\"mostrarTabla\">  \n          <thead>\n            <th *ngFor=\"let despacho of Despacho\">\n              {{despacho}}\n            </th>\n          </thead>\n        </table>\n\n\n        <table id=\"tablaEstacionReserva\" class=\"egt\" *ngIf=\"mostrarTabla\">  \n          <thead>\n            <th *ngFor=\"let estacionReserva of EstacionReserva\">\n              {{estacionReserva}}\n            </th>\n          </thead>\n        </table>\n\n        <table id=\"tablaUnidadFuncional\" class=\"egt\" *ngIf=\"mostrarTabla\" >  \n          <thead>\n            <th *ngFor=\"let unidadFuncional of UnidadFuncional\">\n              {{unidadFuncional}}\n            </th>\n          </thead>\n        </table>\n\n        <table id=\"tablaROB\" class=\"egt\" *ngIf=\"mostrarTabla\" >  \n          <thead>\n            <th *ngFor=\"let rob of ROB\">\n              {{rob}}\n            </th>\n          </thead>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n  <br>\n<br/>\n\n\n<hr />\n\n  <div class=\"container p-3 my-3 bg-dark text-white\">\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-md-6\">\n          <h6 >Cátedra:</h6>\n          <h6 >\n            Arquitectura de Computadoras y Técnicas Digitales <br>\n          </h6>\n      </div>\n      <div class=\"col-xs-12 col-md-6\">\n      <div class=\"pull-right\">\n      <h6 >Desarrollado por el alumno:</h6>\n      <h6 >\n        Federico Enrique Martinez <br>\n      </h6>\n      </div>\n      \n  </div>\n</div>  \n  </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/ColumnaRob.ts":
/*!*******************************!*\
  !*** ./src/app/ColumnaRob.ts ***!
  \*******************************/
/*! exports provided: ColumnaRob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnaRob", function() { return ColumnaRob; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ColumnaRob {
    constructor() {
        this.instruccion = null;
        this.ocupado = false;
    }
    addInstruccion(instruccion) {
        this.instruccion = instruccion;
    }
    addOtraInstruccion(instruccion) {
        this.otraInstruccion = instruccion;
    }
    setInstruccion() {
        this.instruccion = null;
    }
    getInstruccion() {
        return this.instruccion;
    }
    getOtraInstruccion() {
        return this.otraInstruccion;
    }
    setOtraInstruccion() {
        return this.otraInstruccion = null;
    }
}


/***/ }),

/***/ "./src/app/Despacho.ts":
/*!*****************************!*\
  !*** ./src/app/Despacho.ts ***!
  \*****************************/
/*! exports provided: Despacho */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Despacho", function() { return Despacho; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Despacho {
    constructor(grado) {
        //cargamos el grado en 0 y creamos un arreglo en la instruccion
        this.grado = 0;
        this.instruccion = new Array();
        this.grado = grado;
    }
    isOcupado() {
        if (this.instruccion.length == this.grado)
            return true;
        else
            return false;
    }
    addInstruccion(i) {
        this.instruccion.push(i);
    }
    getSize() {
        return this.instruccion.length;
    }
    getInstruccion() {
        return this.instruccion.shift();
    }
    getGrado() {
        return this.grado;
    }
}


/***/ }),

/***/ "./src/app/EstacionReserva.ts":
/*!************************************!*\
  !*** ./src/app/EstacionReserva.ts ***!
  \************************************/
/*! exports provided: EstacionReserva */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstacionReserva", function() { return EstacionReserva; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EstacionReserva {
    constructor(numeroEstacionReserva) {
        this.instruccion = new Array();
        this.numeroEstacionReserva = numeroEstacionReserva;
    }
    getInstruccion() {
        return this.instruccion.shift();
    }
    addInstruccion(i) {
        this.instruccion.push(i);
    }
    setNumeroEstacionReserva(valor) {
        this.numeroEstacionReserva = valor;
    }
    getNumeroEstacionReserva() {
        return this.numeroEstacionReserva;
    }
    removerInstruccion(i) {
        this.instruccion.splice(i, 1);
    }
    isOcupado() {
        if (this.instruccion.length == this.numeroEstacionReserva) {
            return true;
        }
        else
            return false;
    }
}


/***/ }),

/***/ "./src/app/Instruccion.ts":
/*!********************************!*\
  !*** ./src/app/Instruccion.ts ***!
  \********************************/
/*! exports provided: Instruccion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Instruccion", function() { return Instruccion; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Instruccion {
    constructor(id, tipo, dst, op1, op2, tipoUF) {
        this.dependencias = new Array;
        this.id = id;
        this.tipo = tipo;
        this.dst = dst;
        this.op1 = op1;
        this.op2 = op2;
        this.tipoUF = tipoUF;
    }
    addDependecia(i) {
        this.dependencias.push(i);
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getTipo() {
        return this.tipo;
    }
    setDst(dst) {
        this.dst = dst;
    }
    getDst() {
        return this.dst;
    }
    setOp1(op1) {
        this.op1 = op1;
    }
    getOp1() {
        return this.op1;
    }
    setOp2(op2) {
        this.op2 = op2;
    }
    getOp2() {
        return this.op2;
    }
    setCiclos(ciclos) {
        this.ciclos = ciclos;
    }
    getCiclos() {
        return this.ciclos;
    }
    setEstados(estado) {
        this.estado = estado;
    }
    getEstado() {
        return this.estado;
    }
    setTipoUF(tipoUF) {
        this.tipoUF = tipoUF;
    }
    getTipoUF() {
        return this.tipoUF;
    }
    descontarCiclos() {
        this.ciclos--;
    }
    existeDependencia(inst) {
        //pregunto si en el arreglo de depencias esta incluido la instruccion
        return (this.dependencias.includes(inst.id));
    }
}


/***/ }),

/***/ "./src/app/ProcesadorSuperEscalar.ts":
/*!*******************************************!*\
  !*** ./src/app/ProcesadorSuperEscalar.ts ***!
  \*******************************************/
/*! exports provided: ProcesadorSuperEscalar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcesadorSuperEscalar", function() { return ProcesadorSuperEscalar; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Despacho__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Despacho */ "./src/app/Despacho.ts");
/* harmony import */ var _EstacionReserva__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EstacionReserva */ "./src/app/EstacionReserva.ts");
/* harmony import */ var _UnidadFuncional__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnidadFuncional */ "./src/app/UnidadFuncional.ts");
/* harmony import */ var _reordenamientoProcesso__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reordenamientoProcesso */ "./src/app/reordenamientoProcesso.ts");





class ProcesadorSuperEscalar {
    constructor(instrucciones, cantidadDespacho, cantidadER, robSize) {
        this.ciclo = -1;
        this.instruccion = instrucciones.slice(0);
        //Cargamos las dependencias una vez que se lleno la tabla de instrucciones
        this.dependeciasRAW();
        //despacho + er + uf + rob
        this.despacho = new _Despacho__WEBPACK_IMPORTED_MODULE_1__["Despacho"](cantidadDespacho);
        this.estacionReserva = new _EstacionReserva__WEBPACK_IMPORTED_MODULE_2__["EstacionReserva"](cantidadER);
        this.unidadFuncional = new Array();
        this.rob = new _reordenamientoProcesso__WEBPACK_IMPORTED_MODULE_4__["reordenamientoProcesso"](robSize, cantidadDespacho, instrucciones);
    }
    dependeciasRAW() {
        let entro = false;
        //Se hace una pasada con la primera instruccion con todas y luego con otra y asi sucesivamente
        for (let i = 0; i < this.instruccion.length - 1; i++) {
            if (this.instruccion[i].getTipo() != "STD")
                for (let j = i + 1; j < this.instruccion.length && !entro; j++) {
                    if (this.instruccion[j].getTipo() != "STD") {
                        //verificar este if
                        if (this.instruccion[i].getDst() == this.instruccion[j].getOp1()
                            || this.instruccion[i].getDst() == this.instruccion[j].getOp2()) {
                            this.instruccion[i].addDependecia(this.instruccion[j].getId());
                        }
                        if (this.instruccion[i].getDst() == this.instruccion[j].getDst()) {
                            entro = true;
                            // break;????
                        }
                        if (this.instruccion[j].getTipo() == "LDD")
                            //si es LDD
                            if (this.instruccion[j].getOp1() == this.instruccion[i].getDst()
                                || this.instruccion[i].getDst() == this.instruccion[j].getOp2()) {
                                this.instruccion[i].addDependecia(this.instruccion[j].getId());
                            }
                    }
                    else {
                        //si es STD 
                        if (this.instruccion[j].getDst() == this.instruccion[i].getDst()
                            || this.instruccion[i].getDst() == this.instruccion[j].getOp1()) {
                            this.instruccion[i].addDependecia(this.instruccion[j].getId());
                        }
                    }
                }
            entro = false;
        }
    }
    siguienteCiclo() {
        //Primero corroboramos para ver las instrucciones que se completaron o finalizaron
        this.rob.instruccionesFinalizadas();
        //Decrementamos los ciclos
        for (let i = 0; i < this.unidadFuncional.length; i++) {
            if (this.unidadFuncional[i].getInstruccion() != null
                && this.unidadFuncional[i].getInstruccion().getCiclos() != 0) {
                this.unidadFuncional[i].getInstruccion().descontarCiclos();
            }
        }
        //Actualizamos a la estacion de reserva y al rob
        this.actualizamosERyROB();
        //Corroboramos remover las instrucciones de la unidad funcional
        this.removerUF();
        //Actualizo la unidad funcional
        this.actualizarUF();
        //Actualizamos de nuevo las instrucciones de la er y rob
        this.actualizamosERyROB();
        let tamanioDespacho = this.despacho.getSize();
        //Guardo en una variable auxiliar las instrucciones
        let auxiliar = this.rob.getInstruccionesCargadas();
        for (let i = 0; i < tamanioDespacho; i++) {
            let indice = this.rob.intruccionesCompletas(auxiliar);
            //Luego se agrega una instruccion finalizada a la er y rob
            if (!this.estacionReserva.isOcupado() && indice != -1) {
                let inst = this.despacho.getInstruccion();
                //Eleminamos la instruccion de auxiliar
                auxiliar.shift();
                inst.setEstados("I");
                this.estacionReserva.addInstruccion(inst);
                this.rob.getColumbaRob()[indice].addOtraInstruccion(inst);
            }
        }
        //Actualizo la unidad funcional
        this.actualizarUF();
        //Actualizo el despacho
        for (let i = 0; i < this.despacho.getGrado() && this.instruccion.length != 0 && !this.despacho.isOcupado(); i++) {
            //Agregamos la istruccion al despacho y luego la sacamos de el arreglo de isntrucciones
            this.despacho.addInstruccion(this.instruccion.shift());
        }
        this.ciclo++;
    }
    actualizamosERyROB() {
        let i = 0;
        while (i < this.despacho.getSize()) {
            if (!this.estacionReserva.isOcupado() && !this.rob.isOcupado()) {
                let instruccion = this.despacho.getInstruccion();
                instruccion.setEstados("I");
                //Mientras que no este ocupado la er y el rob, le agregamos la instruccion a cada componente
                this.estacionReserva.addInstruccion(instruccion);
                this.rob.addInstruccion(instruccion);
            }
            else
                i++;
        }
    }
    removerUF() {
        for (let i = 0; i < this.unidadFuncional.length; i++) {
            if (this.unidadFuncional[i].getInstruccion() != null) {
                if (this.unidadFuncional[i].getInstruccion().getCiclos() == 0) {
                    this.unidadFuncional[i].getInstruccion().setEstados("F");
                    //Dejo en null la instruccion
                    this.unidadFuncional[i].removerInstruccion();
                    //La seteo como ocupada
                    this.unidadFuncional[i].setOcupado(false);
                }
            }
        }
    }
    actualizarUF() {
        let i = 0;
        while (i < this.estacionReserva.instruccion.length) {
            let indice = this.obtenerUF(this.estacionReserva.instruccion[i]);
            if (indice != -1) {
                let inst = this.estacionReserva.instruccion[i];
                //Corroboro que no haya una dependencia para que no entre a la uf
                if (!this.dependenciaER(inst)
                    && !this.dependencia(inst)) {
                    this.unidadFuncional[indice].addInstruccion(inst);
                    this.unidadFuncional[indice].setOcupado(true);
                    inst.setEstados("X");
                    this.estacionReserva.removerInstruccion(i);
                }
                else {
                    i++;
                }
            }
            else {
                i++;
            }
        }
    }
    obtenerUF(inst) {
        //Obtenemos la instruccion en la uf
        for (let i = 0; i < this.unidadFuncional.length; i++) {
            if (((this.unidadFuncional[i].getTipo() == inst.getTipoUF()) && (!this.unidadFuncional[i].isOcupado()))) {
                return i;
            }
            else if ((this.unidadFuncional[i].getTipo() == "MULTIFUNCT") && (!this.unidadFuncional[i].isOcupado())) {
                return i;
            }
        }
        return -1;
    }
    dependencia(inst) {
        for (let i = 0; i < this.unidadFuncional.length; i++) {
            if (this.unidadFuncional[i].getInstruccion() != null) {
                if (this.unidadFuncional[i].getInstruccion().existeDependencia(inst))
                    return true;
            }
        }
        return false;
    }
    dependenciaER(inst) {
        for (let i = 0; i < this.estacionReserva.instruccion.length; i++) {
            if (this.estacionReserva.instruccion[i].getId() != inst.getId()) {
                if (this.estacionReserva.instruccion[i].existeDependencia(inst))
                    return true;
            }
        }
        return false;
    }
    agregarUF(cantidadMultiFuncion, cantidadAritmetica, cantidadMemoria) {
        let i = 0;
        let j = 0;
        let m = 0;
        //agregamos a la UF la cantidad de UF seteadas
        while (i < cantidadMultiFuncion) {
            this.unidadFuncional.push(new _UnidadFuncional__WEBPACK_IMPORTED_MODULE_3__["UnidadFuncional"]("MULTIFUNCT"));
            i++;
        }
        while (j < cantidadAritmetica) {
            this.unidadFuncional.push(new _UnidadFuncional__WEBPACK_IMPORTED_MODULE_3__["UnidadFuncional"]("ARITMETICA"));
            j++;
        }
        while (m < cantidadMemoria) {
            this.unidadFuncional.push(new _UnidadFuncional__WEBPACK_IMPORTED_MODULE_3__["UnidadFuncional"]("MEMORIA"));
            m++;
        }
    }
    // ----------------- GETTERS AND SETTERS ---------------------
    termino() {
        return this.rob.isCompletada();
    }
    getDespacho() {
        return this.despacho;
    }
    getER() {
        return this.estacionReserva;
    }
    getUF() {
        return this.unidadFuncional;
    }
    getROB() {
        return this.rob;
    }
    getCiclo() {
        return this.ciclo;
    }
}


/***/ }),

/***/ "./src/app/UnidadFuncional.ts":
/*!************************************!*\
  !*** ./src/app/UnidadFuncional.ts ***!
  \************************************/
/*! exports provided: UnidadFuncional */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnidadFuncional", function() { return UnidadFuncional; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class UnidadFuncional {
    constructor(tipo) {
        this.tipo = tipo;
        this.ocupado = false;
        this.instruccion = null;
    }
    isOcupado() {
        return this.ocupado;
    }
    setOcupado(ocupado) {
        this.ocupado = ocupado;
    }
    getTipo() {
        return this.tipo;
    }
    addInstruccion(i) {
        this.instruccion = i;
    }
    getInstruccion() {
        return this.instruccion;
    }
    removerInstruccion() {
        this.instruccion = null;
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tabla table{\n    font-family: arial, sans-serif;\n      border-collapse: collapse;\n      width: 30%;\n      margin-left: 50px;\n     }\n      td, th {\n        border: 1px solid #dddddd;\n        text-align: left;\n        padding: 8px;\n      }\n      tr:nth-child(even) {\n        background-color: #dddddd;\n      }\n      .tabla2 table{\n  font-family: arial, sans-serif;\n      border-collapse: collapse;\n      width: 70%;\n      margin-left: 50px;\n     }\n      td, th {\n        border: 1px solid #dddddd;\n        text-align: center;\n        padding: 8px;\n      }\n      tr:nth-child(even) {\n        background-color: #dddddd;\n      }\n      .b1 {\n  text-align: left;\n}\n      #tabla-superEscalar {\n  width: auto;\n  overflow-x: auto;\n}\n      #tabla-superEscalar table {\n  display: table-cell;\n  width: auto;\n}\n      .superEscalar-table {\n  padding: 0 20px 0 0 !important;\n  border: none !important;   \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7TUFDNUIseUJBQXlCO01BQ3pCLFVBQVU7TUFDVixpQkFBaUI7S0FDbEI7TUFDQztRQUNFLHlCQUF5QjtRQUN6QixnQkFBZ0I7UUFDaEIsWUFBWTtNQUNkO01BRUE7UUFDRSx5QkFBeUI7TUFDM0I7TUFFTjtFQUNFLDhCQUE4QjtNQUMxQix5QkFBeUI7TUFDekIsVUFBVTtNQUNWLGlCQUFpQjtLQUNsQjtNQUNDO1FBQ0UseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixZQUFZO01BQ2Q7TUFFQTtRQUNFLHlCQUF5QjtNQUMzQjtNQUdOO0VBQ0UsZ0JBQWdCO0FBQ2xCO01BTUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCO01BRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiO01BRUE7RUFDRSw4QkFBOEI7RUFDOUIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGEgdGFibGV7XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgfVxuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuICAgICAgXG4gICAgICB0cjpudGgtY2hpbGQoZXZlbikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xuICAgICAgfVxuICAgIFxuLnRhYmxhMiB0YWJsZXtcbiAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xuICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgICAgfVxuICAgICAgdGQsIHRoIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgIHRyOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkZGRkZGQ7XG4gICAgICB9XG5cbiAgIFxuLmIxIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG5cblxuXG4jdGFibGEtc3VwZXJFc2NhbGFyIHtcbiAgd2lkdGg6IGF1dG87XG4gIG92ZXJmbG93LXg6IGF1dG87XG59XG5cbiN0YWJsYS1zdXBlckVzY2FsYXIgdGFibGUge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB3aWR0aDogYXV0bztcbn1cblxuLnN1cGVyRXNjYWxhci10YWJsZSB7XG4gIHBhZGRpbmc6IDAgMjBweCAwIDAgIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7ICAgXG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Instruccion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Instruccion */ "./src/app/Instruccion.ts");
/* harmony import */ var _ProcesadorSuperEscalar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProcesadorSuperEscalar */ "./src/app/ProcesadorSuperEscalar.ts");





let AppComponent = class AppComponent {
    constructor() {
        this.title = 'procSuperEscalar';
        // netImage:any = "../assets/images/Seleccion_044.png";
        this.imageAlt = 'Seleccion_044.png';
        this.imageSrc = 'assets/images/Seleccion_044.png';
        // VARIABLES 
        this.i = 0;
        this.ii = 1;
        //inicilizamos la cantidad de despacho y la er
        this.cantidadDespacho = 1;
        this.cantidadER = 1;
        this.cantidadUF = 1;
        this.ciclos = -1;
        this.instruccion = new Array();
        this.instrucciones2 = new Array();
        this.instrucciones3 = new Array();
        this.instrucciones4 = new Array();
        this.instrucciones5 = new Array();
        this.robb = new Array();
        this.valido = false;
        this.validar1 = false;
        this.instru = {
            s: '',
            i: '',
            d: '',
            op1: '',
            op2: '',
        };
        this.instrucciones = {
            ss: '',
            c: 0
        };
        this.rob = {
            d1: '', d2: '', d3: '', e1: '', e2: '', e3: '', e4: '', uf1: '', uf2: '',
            i1: '', s1: '', i2: '', s2: '', i3: '', s3: '', i4: '', s4: '', i5: '', s5: '', i6: '', s6: ''
        };
        this.Instrucciones = [
            { tipo: "ADD",
                ciclo: 1 },
            { tipo: "SUBD",
                ciclo: 1 },
            { tipo: "MULD",
                ciclo: 1 },
            { tipo: "DIV",
                ciclo: 1 },
            { tipo: "STD",
                ciclo: 1 },
            { tipo: "LDD",
                ciclo: 1 }
        ];
        this.sizeROB = 0;
        this.cantidadMultiFuncion = 0;
        this.cantidadMemoria = 0;
        this.cantidadAritmetica = 0;
        this.listInstrucciones = new Array();
        this.idInstruccion = 1;
        this.mostrarTabla = false;
        this.buttonDisabled = false;
        this.buttonEjecutar = true;
        this.op2Disabled = false;
        this.verTabla = false;
        ///////////////////////////////////////ROB///////////////////////////////
        this.ins1ss = '';
        this.ins1c = 0;
        this.ins2ss = '';
        this.ins2c = 0;
        this.ins3ss = '';
        this.ins3c = 0;
        this.ins4ss = '';
        this.ins4c = 0;
        this.ins5ss = '';
        this.ins5c = 0;
        this.ins6ss = '';
        this.ins6c = 0;
        this.ins7ss = '';
        this.ins7c = 0;
        this.ins8ss = '';
        this.ins8c = 0;
        this.ins9ss = '';
        this.ins9c = 0;
        this.v = true;
        this.v1 = true;
        this.v2 = true;
        this.v3 = true;
        this.v4 = true;
        //Inicializamos los ciclos de cada instruccion
        this.ciclosAdd = 1;
        this.ciclosSubd = 1;
        this.ciclosMuld = 1;
        this.ciclosDiv = 1;
        this.ciclosStd = 1;
        this.ciclosLdd = 1;
    }
    ngOnInit() {
    }
    validar() {
        this.valido = true;
    }
    ;
    validar11() {
        this.validar1 = true;
    }
    agregarCiclos() {
        this.validar1 = false;
        alert('se agregaron los ciclos de reloj');
    }
    agregarAdd(add) {
        this.ciclosAdd = add;
    }
    agregarSub(sub) {
        this.ciclosSubd = sub;
    }
    agregarMul(mul) {
        this.ciclosMuld = mul;
    }
    agregarDiv(div) {
        this.ciclosDiv = div;
    }
    agregarStd(std) {
        this.ciclosStd = std;
    }
    agregarLdd(ldd) {
        this.ciclosLdd = ldd;
    }
    guardar() {
        //alert('Se guardaron los datos');
        this.buttonDisabled = true;
        this.buttonEjecutar = false;
        if (this.cantidadMultiFuncion == 0 && this.cantidadAritmetica == 0 && this.cantidadMemoria == 0) {
            alert('Se precisa seleccionar al menos una unidad funcional');
            this.mostrarTabla = false;
        }
        else
            this.mostrarTabla = true;
    }
    editar() {
        this.buttonDisabled = false;
        this.buttonEjecutar = true;
    }
    obtenerInstru(ins) {
        if (ins == "STD")
            this.op2Disabled = true;
        if (ins == "LDD")
            this.op2Disabled = true;
        if (ins == "ADD")
            this.op2Disabled = false;
        if (ins == "SUBD")
            this.op2Disabled = false;
        if (ins == "MULD")
            this.op2Disabled = false;
        if (ins == "DIV")
            this.op2Disabled = false;
    }
    agregarInst(ins) {
        if (ins == 0)
            this.ins = "ADD";
        if (ins == 1)
            this.ins = "SUBD";
        if (ins == 2)
            this.ins = "MULD";
        if (ins == 3)
            this.ins = "DIV";
        if (ins == 4)
            this.ins = "STD";
        if (ins == 5)
            this.ins = "LDD";
        this.obtenerInstru(this.ins);
    }
    agregarDst(dst) {
        if (dst == 0)
            this.dst = "r0";
        if (dst == 1)
            this.dst = "r1";
        if (dst == 2)
            this.dst = "r2";
        if (dst == 3)
            this.dst = "r3";
        if (dst == 4)
            this.dst = "r4";
        if (dst == 5)
            this.dst = "r5";
        if (dst == 6)
            this.dst = "r6";
        if (dst == 7)
            this.dst = "r7";
        if (dst == 8)
            this.dst = "r8";
        if (dst == 9)
            this.dst = "r9";
        if (dst == 10)
            this.dst = "r10";
        if (dst == 11)
            this.dst = "r11";
        if (dst == 12)
            this.dst = "r12";
        if (dst == 13)
            this.dst = "r13";
        if (dst == 14)
            this.dst = "r14";
        if (dst == 15)
            this.dst = "r15";
        if (dst == 16)
            this.dst = "r16";
        if (dst == 17)
            this.dst = "r17";
        if (dst == 18)
            this.dst = "r18";
        if (dst == 19)
            this.dst = "r19";
        if (dst == 20)
            this.dst = "r20";
        if (dst == 21)
            this.dst = "r21";
        if (dst == 22)
            this.dst = "r22";
        if (dst == 23)
            this.dst = "r23";
        if (dst == 24)
            this.dst = "r24";
        if (dst == 25)
            this.dst = "r25";
        if (dst == 26)
            this.dst = "r26";
        if (dst == 27)
            this.dst = "r27";
        if (dst == 28)
            this.dst = "r28";
        if (dst == 29)
            this.dst = "r29";
        if (dst == 30)
            this.dst = "r30";
    }
    agregarOp1(op1) {
        if (op1 == 0)
            this.op1 = "r0";
        if (op1 == 1)
            this.op1 = "r1";
        if (op1 == 2)
            this.op1 = "r2";
        if (op1 == 3)
            this.op1 = "r3";
        if (op1 == 4)
            this.op1 = "r4";
        if (op1 == 5)
            this.op1 = "r5";
        if (op1 == 6)
            this.op1 = "r6";
        if (op1 == 7)
            this.op1 = "r7";
        if (op1 == 8)
            this.op1 = "r8";
        if (op1 == 9)
            this.op1 = "r9";
        if (op1 == 10)
            this.op1 = "r10";
        if (op1 == 11)
            this.op1 = "r11";
        if (op1 == 12)
            this.op1 = "r12";
        if (op1 == 13)
            this.op1 = "r13";
        if (op1 == 14)
            this.op1 = "r14";
        if (op1 == 15)
            this.op1 = "r15";
        if (op1 == 16)
            this.op1 = "r16";
        if (op1 == 17)
            this.op1 = "r17";
        if (op1 == 18)
            this.op1 = "r18";
        if (op1 == 19)
            this.op1 = "r19";
        if (op1 == 20)
            this.op1 = "r20";
        if (op1 == 21)
            this.op1 = "r21";
        if (op1 == 22)
            this.op1 = "r22";
        if (op1 == 23)
            this.op1 = "r23";
        if (op1 == 24)
            this.op1 = "r24";
        if (op1 == 25)
            this.op1 = "r25";
        if (op1 == 26)
            this.op1 = "r26";
        if (op1 == 27)
            this.op1 = "r27";
        if (op1 == 28)
            this.op1 = "r28";
        if (op1 == 29)
            this.op1 = "r29";
        if (op1 == 30)
            this.op1 = "r30";
    }
    agregarOp2(op2) {
        if (op2 == -1)
            this.op2 = "--";
        if (op2 == 0)
            this.op2 = "r0";
        if (op2 == 1)
            this.op2 = "r1";
        if (op2 == 2)
            this.op2 = "r2";
        if (op2 == 3)
            this.op2 = "r3";
        if (op2 == 4)
            this.op2 = "r4";
        if (op2 == 5)
            this.op2 = "r5";
        if (op2 == 6)
            this.op2 = "r6";
        if (op2 == 7)
            this.op2 = "r7";
        if (op2 == 8)
            this.op2 = "r8";
        if (op2 == 9)
            this.op2 = "r9";
        if (op2 == 10)
            this.op2 = "r10";
        if (op2 == 11)
            this.op2 = "r11";
        if (op2 == 12)
            this.op2 = "r12";
        if (op2 == 13)
            this.op2 = "r13";
        if (op2 == 14)
            this.op2 = "r14";
        if (op2 == 15)
            this.op2 = "r15";
        if (op2 == 16)
            this.op2 = "r16";
        if (op2 == 17)
            this.op2 = "r17";
        if (op2 == 18)
            this.op2 = "r18";
        if (op2 == 19)
            this.op2 = "r19";
        if (op2 == 20)
            this.op2 = "r20";
        if (op2 == 21)
            this.op2 = "r21";
        if (op2 == 22)
            this.op2 = "r22";
        if (op2 == 23)
            this.op2 = "r23";
        if (op2 == 24)
            this.op2 = "r24";
        if (op2 == 25)
            this.op2 = "r25";
        if (op2 == 26)
            this.op2 = "r26";
        if (op2 == 27)
            this.op2 = "r27";
        if (op2 == 28)
            this.op2 = "r28";
        if (op2 == 29)
            this.op2 = "r29";
        if (op2 == 30)
            this.op2 = "r30";
    }
    deleteIns(ins) {
        for (let i = 0; i < this.instruccion.length; i++) {
            if (ins == this.instruccion[i]) {
                this.instruccion.splice(i, 1);
            }
        }
    }
    generarS() {
        this.s = "S" + this.ii;
        this.ii++;
    }
    generarInsCicl() {
        this.instrucciones.ss = this.s;
        if (this.ins == "ADD") {
            this.instrucciones.c = this.ciclosAdd;
        }
        if (this.ins == "SUBD") {
            this.instrucciones.c = this.ciclosSubd;
        }
        if (this.ins == "MULD") {
            this.instrucciones.c = this.ciclosMuld;
        }
        if (this.ins == "DIV") {
            this.instrucciones.c = this.ciclosDiv;
        }
        if (this.ins == "STD") {
            this.instrucciones.c = this.ciclosStd;
        }
        if (this.ins == "LDD") {
            this.instrucciones.c = this.ciclosLdd;
        }
        this.instrucciones2.push(this.instrucciones);
    }
    mostrarIns() {
        //seteamos el objeto
        this.instru = new Object;
        this.instrucciones = new Object;
        this.generarS();
        this.generarInsCicl();
        this.instru.s = this.s;
        this.instru.i = this.ins;
        this.instru.d = this.dst;
        this.instru.op1 = this.op1;
        this.instru.op2 = this.op2;
        //ingresamos al arreglo el objeto
        this.instruccion.push(this.instru);
        this.valido = false;
        //this.listInstrucciones.push(this.instru);
        this.idInstruccion = this.listInstrucciones.length + 1;
        //let instNueva = new  Instruccion("S" + this.idInstruccion,this.ins, this.instru.d,this.instru.op1,this.instru.op2,"MULTIFUNCT");
        if (this.ins == "ADD") {
            let instruccionIngresar = new _Instruccion__WEBPACK_IMPORTED_MODULE_3__["Instruccion"]("S" + this.idInstruccion, this.ins, this.instru.d, this.instru.op1, this.instru.op2, "ARITMETICA");
            this.listInstrucciones.push(instruccionIngresar);
            for (const tipoInstruccion of this.Instrucciones) {
                //seteamos los ciclos a la instruccion
                if (tipoInstruccion.tipo == "ADD") {
                    tipoInstruccion.ciclo = this.ciclosAdd;
                }
            }
        }
        else if (this.ins == "SUBD") {
            let instruccionIngresar = new _Instruccion__WEBPACK_IMPORTED_MODULE_3__["Instruccion"]("S" + this.idInstruccion, this.ins, this.instru.d, this.instru.op1, this.instru.op2, "ARITMETICA");
            this.listInstrucciones.push(instruccionIngresar);
            for (let tipoInstruccion of this.Instrucciones) {
                //seteamos los ciclos a la instruccion
                if (tipoInstruccion.tipo == "SUBD") {
                    tipoInstruccion.ciclo = this.ciclosSubd;
                }
            }
        }
        else if (this.ins == "MULD") {
            let instruccionIngresar = new _Instruccion__WEBPACK_IMPORTED_MODULE_3__["Instruccion"]("S" + this.idInstruccion, this.ins, this.instru.d, this.instru.op1, this.instru.op2, "ARITMETICA");
            this.listInstrucciones.push(instruccionIngresar);
            for (let tipoInstruccion of this.Instrucciones) {
                //seteamos los ciclos a la instruccion
                if (tipoInstruccion.tipo == "MULD")
                    tipoInstruccion.ciclo = this.ciclosMuld;
            }
        }
        else if (this.ins == "DIV") {
            let instruccionIngresar = new _Instruccion__WEBPACK_IMPORTED_MODULE_3__["Instruccion"]("S" + this.idInstruccion, this.ins, this.instru.d, this.instru.op1, this.instru.op2, "ARITMETICA");
            this.listInstrucciones.push(instruccionIngresar);
            for (let tipoInstruccion of this.Instrucciones) {
                //seteamos los ciclos a la instruccion
                if (tipoInstruccion.tipo == "DIV")
                    tipoInstruccion.ciclo = this.ciclosDiv;
            }
        }
        else if (this.ins == "STD") {
            let instruccionIngresar = new _Instruccion__WEBPACK_IMPORTED_MODULE_3__["Instruccion"]("S" + this.idInstruccion, this.ins, this.instru.d, this.instru.op1, this.instru.op2, "MEMORIA");
            this.listInstrucciones.push(instruccionIngresar);
            for (let tipoInstruccion of this.Instrucciones) {
                //seteamos los ciclos a la instruccion
                if (tipoInstruccion.tipo == "STD")
                    tipoInstruccion.ciclo = this.ciclosStd;
            }
        }
        else if (this.ins == "LDD") {
            let instruccionIngresar = new _Instruccion__WEBPACK_IMPORTED_MODULE_3__["Instruccion"]("S" + this.idInstruccion, this.ins, this.instru.d, this.instru.op1, this.instru.op2, "MEMORIA");
            this.listInstrucciones.push(instruccionIngresar);
            for (let tipoInstruccion of this.Instrucciones) {
                //seteamos los ciclos a la instruccion
                if (tipoInstruccion.tipo == "LDD")
                    tipoInstruccion.ciclo = this.ciclosLdd;
            }
        }
        //let instNueva = new  Instruccion("S" + this.idInstruccion,"ADD", "DST","OP1","","MULTIFUNCT");
    }
    guardarCiclos() {
        this.saveCiclos();
    }
    agregarDespacho1() {
        //agregamos en el primer ciclo las intrucciones dependiendo de la cantidad de despachos
        //ins1ss es la isntruccion y ins1c es la cantidad de ciclos que tiene
        if (this.cantidadDespacho == 1) {
            if (this.ciclos == -1) {
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d1) && this.instrucciones2.length != 0) {
                    this.ins1ss = this.instrucciones2[this.i].ss;
                    this.ins1c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins1ss;
                    this.ciclos++;
                }
            }
            //if(this.ciclos > 0 && this.ciclos < 2){
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d1) && this.instrucciones2.length != 0) {
                if (this.ins2ss == "") {
                    this.ins2ss = this.instrucciones2[this.i].ss;
                    this.ins2c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins2ss;
                }
                else if (this.ins3ss == '') {
                    this.ins3ss = this.instrucciones2[this.i].ss;
                    this.ins3c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins3ss;
                }
                else if (this.ins4ss == '') {
                    this.ins4ss = this.instrucciones2[this.i].ss;
                    this.ins4c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins4ss;
                }
                else if (this.ins5ss == '') {
                    this.ins5ss = this.instrucciones2[this.i].ss;
                    this.ins5c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins5ss;
                }
                else if (this.ins6ss == '') {
                    this.ins6ss = this.instrucciones2[this.i].ss;
                    this.ins6c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins6ss;
                }
                else if (this.ins7ss == '') {
                    this.ins7ss = this.instrucciones2[this.i].ss;
                    this.ins7c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins7ss;
                }
            }
        }
    }
    agregarDespacho2() {
        if (this.cantidadDespacho == 2) {
            if (this.ciclos == -1) {
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d1) && this.instrucciones2.length != 0) {
                    this.ins1ss = this.instrucciones2[this.i].ss;
                    this.ins1c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins1ss;
                    this.ciclos++;
                }
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d2) && this.instrucciones2.length != 0) {
                    this.ins2ss = this.instrucciones2[this.i].ss;
                    this.ins2c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d2 = this.ins2ss;
                }
            }
            if (this.ciclos > 0) {
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d3) && this.instrucciones2.length != 0) {
                    this.ins3ss = this.instrucciones2[this.i].ss;
                    this.ins3c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d1 = this.ins3ss;
                }
                if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d4) && this.instrucciones2.length != 0) {
                    this.ins4ss = this.instrucciones2[this.i].ss;
                    this.ins4c = this.instrucciones2[this.i].c;
                    this.instrucciones2.splice(this.i, 1);
                    this.rob.d2 = this.ins4ss;
                }
            }
        }
    }
    agregarDespacho3() {
        if (this.ciclos == -1) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d1) && this.instrucciones2.length != 0) {
                this.ins1ss = this.instrucciones2[this.i].ss;
                this.ins1c = this.instrucciones2[this.i].c;
                this.instrucciones2.splice(this.i, 1);
                this.rob.d1 = this.ins1ss;
                this.ciclos++;
            }
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d2) && this.instrucciones2.length != 0) {
                this.ins2ss = this.instrucciones2[this.i].ss;
                this.ins2c = this.instrucciones2[this.i].c;
                this.instrucciones2.splice(this.i, 1);
                this.rob.d2 = this.ins2ss;
            }
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d3) && this.instrucciones2.length != 0) {
                this.ins3ss = this.instrucciones2[this.i].ss;
                this.ins3c = this.instrucciones2[this.i].c;
                this.instrucciones2.splice(this.i, 1);
                this.rob.d3 = this.ins3ss;
            }
            if (this.instrucciones2.length != 0) {
                this.ins4ss = this.instrucciones2[this.i].ss;
                this.ins4c = this.instrucciones2[this.i].c;
                this.instrucciones2.splice(this.i, 1);
            }
        }
        if (this.ciclos > 0) {
            if (Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.rob.d3) && (this.robb[this.ciclos - 1].d3 != this.robb[this.ciclos - 1].e1)
                && (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.robb[this.ciclos - 1].d3))) {
                this.rob.d3 = this.ins3ss;
            }
            //if(this.ciclos>1){
            if ((this.robb[this.ciclos - 1].d2 != this.robb[this.ciclos - 1].e1)
                && (!Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(this.robb[this.ciclos - 1].d2))) {
                this.rob.d2 = this.ins4ss;
            }
            //}
        }
    }
    agregarER1() {
        if (this.ciclos > 0) {
            // if((this.robb[this.ciclos-1].uf1 == '') && (this.ins1c != 0)){
            //   if(this.ins1ss != '')
            //   this.rob.e1=this.ins1ss;
            //   else if(this.ins2ss!= '')
            //   this.rob.e1=this.ins2ss;
            // }
            if (this.ciclos > 1) {
                if (this.ins1c != 0) {
                    if (this.ins2c != 0 && this.ins1c != 0) {
                        this.rob.e1 = this.ins2ss;
                        this.rob.uf1 = this.ins1ss;
                    }
                }
                else if (this.ins1c == 0 && this.ins2c != 0 && this.ins3c != 0) {
                    this.rob.e1 = this.ins3ss;
                    this.rob.uf1 = this.ins2ss;
                }
                else if (this.ins2c == 0 && this.ins3c != 0) {
                    if (this.ins4c != 0) {
                        this.rob.e1 = this.ins4ss;
                    }
                    this.rob.uf1 = this.ins3ss;
                }
                else if (this.ins3c == 0 && this.ins4c != 0) {
                    this.rob.e1 = this.ins4ss;
                    this.rob.uf1 = this.ins4ss;
                }
                else if (this.ins4c == 0 && this.ins5c != 0) {
                    this.rob.e1 = this.ins5ss;
                    this.rob.uf1 = this.ins5ss;
                }
            }
            if (this.cantidadER == 2) {
                if ((this.robb[this.ciclos - 1].uf1 == '') && (this.ins1c != 0)) {
                    this.rob.e1 = this.ins1ss;
                }
                if ((this.robb[this.ciclos - 1].uf2 == '') && (this.ins2c != 0)) {
                    this.rob.e2 = this.ins2ss;
                }
            }
            //parche para solo probar con ER
            if (this.cantidadER != 1) {
                if (this.ciclos > 1) {
                    //if((this.rob.e1 == this.rob.uf1))
                    // console.log(this.robb[this.ciclos-1].e1 == this.robb[this.ciclos-1].uf1) 
                    //console.log(this.ins3ss != this.robb[this.ciclos-1].uf1)
                    if ((this.ins3ss != '') && (this.ins3c != 0)) {
                        if ((this.robb[this.ciclos - 1].e1 == this.robb[this.ciclos - 1].uf1) && (this.ins3ss != this.robb[this.ciclos - 1].uf1)
                            && (((this.robb[this.ciclos - 1].e1 != '') && (this.robb[this.ciclos - 1].uf1 != '')))) {
                            //this.rob.e1=this.ins3ss;
                            if ((this.rob.i1 == '') || (this.rob.i2 == '') || (this.rob.i3 == '') || (this.rob.i4 == '')) {
                                if (this.rob.i1 == '') { }
                                if (this.rob.i2 == '') { }
                                if (this.rob.i3 == '') {
                                    this.rob.e1 = this.ins3ss;
                                }
                                if (this.rob.i4 == '') {
                                    this.rob.e2 = this.ins4ss;
                                }
                                //if(this.rob.i5 == '' ){this.rob.e3=this.ins5ss; }
                            }
                        }
                    }
                    /* else{if(this.robb[this.ciclos-1].e1 != this.robb[this.ciclos-1].uf1){
                      if(this.rob.i3 == '' ){this.rob.i3=this.ins3ss; this.rob.s3="I"; this.rob.e1=this.ins3ss};
                    } */
                }
                if (this.ciclos > 2) {
                    {
                        if ((this.ins5ss != '') && (this.ins5c != 0)) {
                            if ((this.robb[this.ciclos - 1].e1 == this.robb[this.ciclos - 1].uf1) && (this.ins5ss != this.robb[this.ciclos - 1].uf1)) {
                                if (this.rob.i5 == '') {
                                    this.rob.e3 = this.ins5ss;
                                }
                                if (this.rob.i6 == '') {
                                    this.rob.e4 = this.ins6ss;
                                }
                            }
                        }
                    }
                }
                if (this.ciclos > 3) {
                    if ((this.ins7ss != '') && (this.ins7c != 0)) {
                        if ((this.robb[this.ciclos - 1].e1 == this.robb[this.ciclos - 1].uf1)
                            || (this.robb[this.ciclos - 1].e2 == this.robb[this.ciclos - 1].uf1)
                            || (this.robb[this.ciclos - 1].e3 == this.robb[this.ciclos - 1].uf1)
                            || (this.robb[this.ciclos - 1].e4 == this.robb[this.ciclos - 1].uf1)
                                && (this.ins7ss != this.robb[this.ciclos - 1].uf1)) {
                            if (this.rob.i1 == '') {
                                this.rob.e1 = this.ins7ss;
                            }
                        }
                    }
                }
            }
        }
    }
    agregarER2() {
        if (this.ciclos > 0) {
            if (this.ciclos == 1) {
                this.rob.e1 = this.ins1ss;
                this.rob.e2 = this.ins2ss;
            }
            if (this.ciclos > 1) {
                if (this.ins1c != 0) {
                    if (this.ins2c != 0 && this.instrucciones2.length == 0) {
                        this.rob.e2 = this.ins2ss;
                    }
                    if (this.ins2c != 0 && this.ins3c != 0 && this.ins1c != 0) {
                        this.rob.e1 = this.ins2ss;
                        this.rob.e2 = this.ins3ss;
                        this.rob.uf1 = this.ins1ss;
                    }
                }
                else if (this.ins1c == 0 && this.ins2c != 0 && this.ins3c != 0) {
                    this.rob.e1 = this.ins3ss;
                    if (this.ins4c != 0) {
                        this.rob.e2 = this.ins4ss;
                    }
                    this.rob.uf1 = this.ins2ss;
                }
                else if (this.ins2c == 0 && this.ins3c != 0) {
                    if (this.ins4c != 0) {
                        this.rob.e2 = this.ins4ss;
                    }
                    this.rob.uf1 = this.ins3ss;
                }
                else if (this.ins3c == 0 && this.ins4c != 0) {
                    this.rob.e2 = this.ins4ss;
                    this.rob.uf1 = this.ins4ss;
                }
                else if (this.ins4c == 0 && this.ins5c != 0) {
                    this.rob.e1 = this.ins5ss;
                    this.rob.uf1 = this.ins5ss;
                }
            }
        }
    }
    agregarUf1() {
        if (this.ciclos > 0) {
            if (this.cantidadUF == 1) {
                if (this.ins1c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                    this.rob.uf1 = this.ins1ss;
                }
                if (this.ciclos > 1) {
                    if (this.ins1c != 0 && this.robb[this.ciclos - 1].uf1 != '') {
                        this.rob.uf1 = this.ins1ss;
                    }
                    if (this.ins2c != 0 && this.ins1c == 0 && this.robb[this.ciclos - 1].uf1 != '') {
                        this.rob.uf1 = this.ins2ss;
                    }
                    if (this.ins3c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                        this.rob.uf1 = this.ins3ss;
                    }
                    if (this.ins4c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                        this.rob.uf1 = this.ins4ss;
                    }
                    if (this.ins5c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                        this.rob.uf1 = this.ins5ss;
                    }
                }
            }
        }
    }
    agregarUf2() {
        if (this.ciclos > 0) {
            if (this.ins1c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                this.rob.uf1 = this.ins1ss;
            }
            if (this.ins2c != 0 && this.robb[this.ciclos - 1].uf2 == '') {
                this.rob.uf2 = this.ins2ss;
            }
            if (this.ciclos > 1) {
                if (this.ins1c != 0 && this.robb[this.ciclos - 1].uf1 != '') {
                    this.rob.uf1 = this.ins1ss;
                }
                if (this.ins2c != 0 && this.robb[this.ciclos - 1].uf1 != '') {
                    this.rob.uf2 = this.ins2ss;
                }
                if (this.ins3c != 0 && this.ins1c == 0 && this.robb[this.ciclos - 1].uf1 != '') {
                    this.rob.uf1 = this.ins3ss;
                }
                else if (this.ins3c != 0 && this.ins2c == 0 && this.robb[this.ciclos - 1].uf1 != '') {
                    this.rob.uf2 = this.ins3ss;
                }
                if (this.ins4c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                    this.rob.uf1 = this.ins4ss;
                }
                if (this.ins5c != 0 && this.robb[this.ciclos - 1].uf1 == '') {
                    this.rob.uf1 = this.ins5ss;
                }
            }
        }
    }
    agregarRob4(cantidadER, cantidadUF) {
        // ER == 1 && UF == 1  ROB 4
        // ER == 2 && UF == 1 || ER == 1 && UF == 2  ROB 6
        // ER == 2 && UF == 2  || ER == 3 && UF == 1 || ER == 1 && UF == 3 ROB 8 PODEMOS HACERLO HASTA ACA?
        // ER == 1 && UF == 4 || ER == 2 && UF == 3  || ER == 3 && UF == 2 || ER == 4 && UF == 1 ROB 10
        // ER == 1 && UF == 5  || ER = 2 && UF=4 || cantidadER == 3 && cantidadUF==3 || cantidadER == 4 && cantidadUF==2  || cantidadER == 5 && cantidadUF==1 ROB 12
        // cantidadER == 2 && cantidadUF==5 ||  cantidadER == 3 && cantidadUF==4 || cantidadER == 4 && cantidadUF==3 || cantidadER == 5 && cantidadUF==2 ROB 14 
        // cantidadER == 3 && cantidadUF==5 || "cantidadER == 4 && cantidadUF==4 || cantidadER == 5 && cantidadUF==3 ROB 16
        // cantidadER == 4 && cantidadUF==5 ||  cantidadER == 5 && cantidadUF==4 ROB 18
        // cantidadER == 5 && cantidadUF==5  ROB 20
        if (this.ciclos > 0) {
            //ROB 4
            if (cantidadER == 1 && cantidadUF == 1) {
                if (this.rob.i1 == '') {
                    if (this.ins1c != 0) {
                        this.ins1c--;
                        this.rob.i1 = this.rob.uf1;
                        this.rob.s1 = "X";
                        //if(this.ins2ss == ''){ 
                        if ((this.ins2c == 0) && (this.ins3c == 0)) {
                            //this.robb.push(this.rob);
                        }
                    }
                    else {
                        if ((this.ins1c == 0) && (this.v1)) {
                            this.rob.i1 = this.ins1ss;
                            this.rob.s1 = "F";
                            this.v1 = false;
                            if ((this.ins2c == 0) && (this.ins3c == 0) && (this.ins2ss == '') || (this.ins2c == 0) && (this.ins3c == 0) && (this.ins2ss != '')) {
                                //this.robb.push(this.rob);
                            }
                        }
                    }
                    if ((this.ins1c == 0 && !this.v) && (this.rob.s1 != "F") && this.ins2c != 0) {
                        this.ins2c--;
                        this.rob.i1 = this.rob.uf1;
                        this.rob.s1 = "X";
                    }
                    else {
                        if ((this.ins2c == 0) && (this.v2) && (this.robb[this.ciclos - 1].i2 != this.ins2ss)) { //no debe entrar s2
                            this.rob.i1 = this.ins2ss;
                            this.rob.s1 = "F";
                            this.v2 = false;
                        }
                    }
                    if ((this.ins1c == 0 && !this.v1) && (this.ins2c == 0 && !this.v1) && (this.ins3c != 0)) {
                        this.ins3c--;
                        this.rob.i1 = this.rob.uf1;
                        this.rob.s1 = "X";
                    }
                    else if ((this.ins3c == 0) && ("" != this.ins3ss) && (this.v3)) {
                        this.rob.i1 = this.ins3ss;
                        this.rob.s1 = "F";
                        this.v3 = false;
                    } //se pone en espera la instruccion en el rob
                    else if (this.ins3c != 0 && (this.rob.e1 == this.ins3ss)) {
                        this.rob.i1 = this.rob.e1;
                        this.rob.s1 = "I";
                    }
                    if ((this.ins1c == 0 && !this.v) && (this.ins2c == 0 && !this.v2) && (this.ins3c == 0 && !this.v3) && (this.ins4c != 0)) {
                        this.ins4c--;
                        this.rob.i1 = this.rob.uf1;
                        this.rob.s1 = "X";
                    }
                    else if ((this.ins4c == 0) && ((this.robb[this.ciclos - 1].i1 == this.ins4ss)) && ("" != this.ins4ss) && (this.v4)) {
                        this.rob.i1 = this.ins4ss;
                        this.rob.s1 = "F";
                        this.v4 = false;
                    }
                    else if (this.ins3c == 0 && this.ins4c != 0 && (this.rob.e1 == this.ins4ss) && (this.robb[this.ciclos - 1].i2 != this.ins4ss)) {
                        this.rob.i1 = this.rob.e1;
                        this.rob.s1 = "I";
                    }
                    if ((this.ins1c == 0 && !this.v1) && (this.ins2c == 0 && !this.v2) && (this.ins3c == 0 && !this.v3) && (this.ins4c == 0 && !this.v4)
                        && (this.ins5c != 0)) {
                        this.ins5c--;
                        this.rob.i1 = this.rob.uf1;
                        this.rob.s1 = "X";
                        //
                    }
                    else if ((this.ins5c == 0) && ((this.robb[this.ciclos - 1].i1 == this.ins5ss) || (this.robb[this.ciclos - 1].i2 == this.ins5ss)) && ("" != this.ins5ss)) {
                        this.rob.i1 = this.ins5ss;
                        this.rob.s1 = "F";
                        // this.v5 = false;
                    }
                }
                if (this.rob.i2 == '') {
                    if ((this.rob.uf1 == this.rob.e1 || this.rob.uf1 != "") && ((this.ins2ss == this.rob.uf1) || (this.ins4ss == this.rob.uf1))) {
                        if (this.ins2c != 0) {
                            this.ins2c--;
                            this.rob.i2 = this.rob.uf1;
                            this.rob.s2 = "X";
                        }
                        else if ((this.ins2c == 0) && (this.ins2ss != "") && (this.v2)) {
                            this.rob.i2 = this.ins2ss;
                            this.rob.s2 = "F";
                            this.v2 = false;
                        }
                        else if (this.ins4c != 0) {
                            this.ins4c--;
                            this.rob.i2 = this.rob.uf1;
                            this.rob.s2 = "X";
                        }
                        else if (this.ins5c != 0) {
                            this.ins5c--;
                            this.rob.i2 = this.rob.uf1;
                            this.rob.s2 = "X";
                        }
                        //le ponemos en espera al rob con la instruccion 
                    }
                    else if (this.ins2c != 0 && (this.rob.e1 == this.ins2ss)) {
                        this.rob.i2 = this.rob.e1;
                        this.rob.s2 = "I";
                    }
                    else if (this.ins3c != 0 && (this.rob.e1 == this.ins3ss)) {
                        this.rob.i2 = this.rob.e1;
                        this.rob.s2 = "I";
                    }
                    else if (this.ins4c != 0 && (this.rob.e1 == this.ins4ss)) {
                        this.rob.i2 = this.rob.e1;
                        this.rob.s2 = "I";
                    }
                    else if ((this.ins2c == 0) && ("" != this.ins2ss) && (this.robb[this.ciclos - 1].i2 == this.ins2ss) && (this.v2)) {
                        this.rob.i2 = this.ins2ss;
                        this.rob.s2 = "F";
                        this.v2 = false;
                    }
                    else if ((this.ins4c == 0) && ("" != this.ins4ss) && (this.robb[this.ciclos - 1].i2 == this.ins4ss) && (this.v4)) {
                        this.rob.i2 = this.ins4ss;
                        this.rob.s2 = "F";
                        this.v4 = false;
                    }
                    else if ((this.ins5c == 0) && ("" != this.ins5ss) && (this.robb[this.ciclos - 1].i2 == this.ins5ss)) {
                        this.rob.i2 = this.ins5ss;
                        this.rob.s2 = "F";
                        //this.v5 = false;
                    }
                }
            }
        }
    }
    // agregamos la cantidad de despacho, ER, UF
    agregarDesp(cantidadDespacho) {
        this.cantidadDespacho = cantidadDespacho;
    }
    agregarEstReser(cantidadER) {
        this.cantidadER = cantidadER;
    }
    agregarUFMultFunc(cantidadMultiFuncion) {
        this.cantidadMultiFuncion = cantidadMultiFuncion;
    }
    agregarUFAritmetica(cantidadAritmetica) {
        this.cantidadAritmetica = cantidadAritmetica;
    }
    agregarUFMemoria(cantidadMemoria) {
        this.cantidadMemoria = cantidadMemoria;
    }
    agregarComponente(inst, cant, id) {
        let tr = document.createElement("tr");
        for (let i = 0; i < cant; i++) {
            let td = document.createElement("td");
            if (i < inst.length) {
                td.appendChild(document.createTextNode(inst[i].getId()));
                tr.appendChild(td);
            }
            else {
                td.appendChild(document.createTextNode("-"));
                tr.appendChild(td);
            }
        }
        document.getElementById(id).appendChild(tr);
    }
    agregarUF(uf) {
        let tr = document.createElement("tr");
        for (let i = 0; i < uf.length; i++) {
            let td = document.createElement("td");
            if (uf[i].getInstruccion() != null) {
                td.appendChild(document.createTextNode(uf[i].getInstruccion().getId()));
                tr.appendChild(td);
            }
            else {
                td.appendChild(document.createTextNode("-"));
                tr.appendChild(td);
            }
        }
        document.getElementById("tablaUnidadFuncional").appendChild(tr);
    }
    agregarROB(rob, cant, id) {
        let tr = document.createElement("tr");
        for (let i = 0; i < cant; i++) {
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            if (rob.getColumbaRob()[i].getInstruccion() != null) {
                if (rob.getColumbaRob()[i].getOtraInstruccion() == null) {
                    //le insgresamos la instruccion y el estado a la columna del rob
                    td1.appendChild(document.createTextNode(rob.getColumbaRob()[i].getInstruccion().getId()));
                    td2.appendChild(document.createTextNode(rob.getColumbaRob()[i].getInstruccion().getEstado()));
                }
                tr.appendChild(td1);
                tr.appendChild(td2);
            }
            else {
                td1.appendChild(document.createTextNode("-"));
                td2.appendChild(document.createTextNode("-"));
                tr.appendChild(td1);
                tr.appendChild(td2);
            }
        }
        document.getElementById(id).appendChild(tr);
    }
    siguienteCiclo() {
        if (!this.procesador.termino()) {
            this.procesador.siguienteCiclo();
            this.agregarFilaCiclos(this.procesador.getCiclo());
            //agregamos en la tabla con la cantidad de despacho
            this.agregarComponente(this.procesador.getDespacho().instruccion, this.cantidadDespacho, "tablaDespacho");
            //agregamos en la tabla con la cantidad de er
            this.agregarComponente(this.procesador.getER().instruccion, this.cantidadER, "tablaEstacionReserva");
            this.agregarUF(this.procesador.getUF());
            this.agregarROB(this.procesador.getROB(), this.sizeROB, "tablaROB");
        }
    }
    saveCiclos() {
        for (let i = 0; i < this.listInstrucciones.length; i++) {
            for (let l = 0; l < this.Instrucciones.length; l++)
                if (this.listInstrucciones[i].getTipo() == this.Instrucciones[l].tipo) {
                    this.listInstrucciones[i].setCiclos(this.Instrucciones[l].ciclo);
                }
        }
    }
    agregarFilaCiclos(ciclos) {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        td.appendChild(document.createTextNode("" + ciclos));
        tr.appendChild(td);
        document.getElementById("tablaCiclos").appendChild(tr);
    }
    crearTablaComponente(tipo, num) {
        let j = [];
        for (let i = 0; i < num; i++) {
            j.push(tipo + i);
        }
        this[tipo] = j;
    }
    crearTablaUnidadFuncional(tipo, cantidadMultiFuncion, cantidadAritmetica, cantidadMemoria) {
        let j = [];
        for (let i = 0; i < cantidadMultiFuncion; i++) {
            j.push(tipo + "MultiFunc" + i);
        }
        for (let i = 0; i < cantidadAritmetica; i++) {
            j.push(tipo + "Aritmetica" + i);
        }
        for (let i = 0; i < cantidadMemoria; i++) {
            j.push(tipo + "Memoria" + i);
        }
        this[tipo] = j;
    }
    crearTablaRob() {
        const j = [];
        for (let i = 0; i < this.sizeROB; i++) {
            j.push('I');
            j.push('S');
        }
        this['ROB'] = j;
    }
    ejecutar() {
        this.guardar();
        //seteamos la tabla de despacho pasandole la cantidad de despacho. 
        this.crearTablaComponente("Despacho", this.cantidadDespacho);
        //seteamos la tabla de la estacion de reserva
        this.crearTablaComponente("EstacionReserva", this.cantidadER);
        //seteamos la tabla de la unidad funcional
        this.crearTablaUnidadFuncional("UnidadFuncional", this.cantidadMultiFuncion, this.cantidadAritmetica, this.cantidadMemoria);
        //calculamos el tamaño del rob
        this.sizeROB = this.cantidadER + this.cantidadMultiFuncion + this.cantidadAritmetica + this.cantidadMemoria;
        //seteamos la tabla del rob
        this.crearTablaRob();
        //inicializamos el procesador super escalar con las intrucciones y el despacho, cantidad ER y el tamaño del rob
        this.procesador = new _ProcesadorSuperEscalar__WEBPACK_IMPORTED_MODULE_4__["ProcesadorSuperEscalar"](this.listInstrucciones, this.cantidadDespacho, this.cantidadER, this.sizeROB);
        //agregamos la unidad funcional al procesador
        this.procesador.agregarUF(this.cantidadMultiFuncion, this.cantidadAritmetica, this.cantidadMemoria);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/reordenamientoProcesso.ts":
/*!*******************************************!*\
  !*** ./src/app/reordenamientoProcesso.ts ***!
  \*******************************************/
/*! exports provided: reordenamientoProcesso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reordenamientoProcesso", function() { return reordenamientoProcesso; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ColumnaRob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColumnaRob */ "./src/app/ColumnaRob.ts");


class reordenamientoProcesso {
    constructor(tamanioRob, numeroGrado, instrucciones) {
        this.instruccion = new Array();
        this.columnaRob = new Array();
        this.tamanio = tamanioRob;
        this.numeroGrado = numeroGrado;
        this.instruccionesCargadas = instrucciones.slice(0);
        for (let i = 0; i < tamanioRob; i++)
            this.columnaRob.push(new _ColumnaRob__WEBPACK_IMPORTED_MODULE_1__["ColumnaRob"]);
    }
    addInstruccion(instruccion) {
        let a = false;
        for (let i = 0; i < this.columnaRob.length && !a; i++) {
            if (this.columnaRob[i].getInstruccion() == null) {
                this.columnaRob[i].addInstruccion(instruccion);
                //probar con break
                a = true;
            }
        }
    }
    intruccionesCompletas(aux) {
        let i = 0;
        //tamanio del rob
        while (i < this.tamanio) {
            if (this.columnaRob[i].getInstruccion() != null)
                if (aux[0].getId() == this.columnaRob[i].getInstruccion().getId() &&
                    this.columnaRob[i].getInstruccion().getEstado() == "F")
                    return i;
            i++;
        }
        return -1;
    }
    instruccionesFinalizadas() {
        let count = 0;
        let i = 0;
        //tamanio del rob y la cantidad de despachos
        while ((count < this.numeroGrado) && (i < this.tamanio)) {
            if (this.columnaRob[i].getInstruccion() != null)
                if (this.columnaRob[i].getInstruccion().getId() == this.instruccionesCargadas[0].getId() &&
                    this.columnaRob[i].getInstruccion().getEstado() == "F") {
                    //analizar con 2 arreglos de instrucciones
                    if (this.columnaRob[i].getOtraInstruccion() == null) {
                        //seteamos en vacio la instruccion
                        this.columnaRob[i].setInstruccion();
                        // break;
                        i = -1;
                    }
                    else {
                        this.columnaRob[i].addInstruccion(this.columnaRob[i].getOtraInstruccion());
                        this.columnaRob[i].setOtraInstruccion();
                    }
                    //retiramos la instruccion del arreglo          
                    this.instruccionesCargadas.shift();
                    count++;
                }
            i++;
        }
    }
    //--------- instrucciones si estan ocupadas y completas
    isOcupado() {
        for (let i = 0; i < this.columnaRob.length; i++)
            if (this.columnaRob[i].getInstruccion() == null)
                return false;
        return true;
    }
    isCompletada() {
        if (this.instruccionesCargadas.length == 0)
            return true;
        return false;
    }
    ///  -------------------- getters and setters
    getInstruccionesCargadas() {
        return this.instruccionesCargadas.slice(0);
    }
    getColumbaRob() {
        return this.columnaRob;
    }
    getSize() {
        return this.tamanio;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/femartinez/Facultad/Arqui2/procSuperEscalar/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);