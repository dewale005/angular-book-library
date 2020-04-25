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
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/table/table.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/component/table/table.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table mat-table [dataSource]=\"dataSource\" matSort>\n\n    <!-- Image Column -->\n    <ng-container matColumnDef=\"image\">\n        <td mat-cell *matCellDef=\"let element\" class=\"photo\">\n            <div class=\"imageContainer\" style=\"cursor: pointer;\" (click)=\"openModal(element)\">\n                <img src={{element.image}} class=\"img-fluid\" alt=\"\">\n            </div>\n        </td>\n    </ng-container>\n\n    <!-- Details Column -->\n    <ng-container matColumnDef=\"details\">\n        <td mat-cell *matCellDef=\"let element\">\n            <div class=\"container\">\n                <h5>{{element.title}}</h5>\n                <p>{{element.description}}</p>\n                <p>Author: {{element.authur}}</p>\n            </div>\n        </td>\n    </ng-container>\n\n    <!-- Actions Column -->\n    <ng-container matColumnDef=\"actions\">\n        <td mat-cell *matCellDef=\"let element; let i=index\">\n            <div class=\"container\">\n                <h6>{{element.price | currency: \"₦ \"}}</h6>\n                <button *ngIf='!libarian' mat-flat-button color=\"primary\">Borrow Book</button>\n                <div class=\"sidebutton\" *ngIf='libarian'>\n                    <button mat-button (click)=\"editData(element)\" color=\"primary\">Edit</button>\n                    <button mat-button (click)=\"deleteData(element.id)\" color=\"warn\">Delete</button>\n                </div>\n            </div>\n        </td>\n    </ng-container>\n\n\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/book/book.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/book/book.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"row\" *ngIf=\"data\">\n        <div class=\"col-sm-4\">\n            <img src={{data.image}} alt=\"\" width=\"100%\">\n        </div>\n        <div class=\"col-sm-8\">\n            <h3>{{data.title}}</h3>\n            <p>{{data.description}}</p>\n            <p>By <span>{{data.authur}}</span></p>\n            <p>Added: <span>{{data.DateAdded | date:'fullDate'}}</span></p>\n            <h5>{{data.price | currency: \"₦ \"}}</h5>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar class=\"mat-elevation-z8\" color=\"primary\">\n    <mat-toolbar-row class=\"container\">\n        <mat-icon>library_books</mat-icon>\n        <span>Book Library</span>\n        <span class=\"example-spacer\"></span>\n        <button mat-button *ngIf=\"!libarian\" (click)=\"switchUser()\">Switch to librarian</button>\n        <button mat-button *ngIf=\"libarian\" (click)=\"switchUser()\">Switch to User</button>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n\n<div class=\"container\">\n    <div class=\"topPadding\">\n        <mat-card class=\"mat-elevation-z8\">\n            <div class=\"form-group search\">\n                <div class=\"search-Icon\">\n                    <mat-icon>search</mat-icon>\n                </div>\n                <input (keyup)=\"applyFilter($event.target.value)\" type=\"text\" class=\"form-control no-border\" placeholder=\"Search Keyword\">\n            </div>\n        </mat-card>\n    </div>\n    <div class=\"row topPaddingsm\">\n        <div class=\"col-sm-4\" *ngIf=\"libarian\">\n            <div class=\"mat-elevation-z8\">\n                <mat-toolbar color=\"primary\">\n                    <mat-toolbar-row>\n                        <span *ngIf=\"!editMode\">Add A Book</span>\n                        <span *ngIf=\"editMode\">Edit This Book</span>\n                        <span class=\"example-spacer\"></span>\n                        <mat-icon *ngIf=\"!editMode\" class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">add_circle</mat-icon>\n                        <mat-icon *ngIf=\"editMode\" class=\"example-icon\" aria-hidden=\"false\" aria-label=\"Example heart icon\">edit</mat-icon>\n                    </mat-toolbar-row>\n                </mat-toolbar>\n                <div class=\"conatiner formData\">\n                    <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"ngform\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" formControlName=\"title\" class=\"form-control formStyle\" placeholder=\"Enter Book Title\">\n                        </div>\n                        <div class=\"form-group\">\n                            <textarea class=\"form-control formStyle\" formControlName=\"description\" rows=\"4\" placeholder=\"Enter Book Description\"></textarea>\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"text\" formControlName=\"authur\" class=\"form-control formStyle\" placeholder=\"Enter Book Authur\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"number\" formControlName=\"price\" class=\"form-control formStyle\" placeholder=\"Enter Price\">\n                        </div>\n                        <div class=\"form-group\">\n                            <input type=\"file\" #userPhoto accept=\"image/x-png,image/gif,image/jpeg\" class=\"form-control-file formStyle\" (change)=\"onFileSelected($event)\">\n                        </div>\n                        <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!ngform.valid\">Submit</button>\n                    </form>\n                </div>\n            </div>\n        </div>\n        <div [ngClass]=\"libarian ? 'col-sm-8' :  'col-sm-12'\">\n            <div class=\" mat-elevation-z8 \">\n                <div class=\"selectFilter container\">\n                    <div class=\" \" style=\"padding-bottom: 10px; padding-top: 10px; \">\n                        <button class=\"matStroke\" mat-stroked-button color=\"primary\" (click)=\"arrangeByNewest()\">Newest</button>\n                        <button class=\"matStroke\" mat-stroked-button color=\"primary\" (click)=\"arrangeByOldest()\">Oldest</button>\n                        <button class=\"matStroke\" mat-stroked-button color=\"primary\" (click)=\"arrangeByLowest()\">Lower Price</button>\n                        <button class=\"matStroke\" mat-stroked-button color=\"primary\" (click)=\"arrangeByHighest()\">Higest Price</button>\n                    </div>\n                </div>\n                <app-table [dataSource]='dataSource' [libarian]='libarian' (delete)='onDelete($event)' (edit)='onEdit($event)'></app-table>\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 20] \" showFirstLastButtons></mat-paginator>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
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
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _page_book_book_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/book/book.component */ "./src/app/page/book/book.component.ts");





const routes = [
    {
        path: '',
        component: _page_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
    },
    {
        path: ':id',
        component: _page_book_book_component__WEBPACK_IMPORTED_MODULE_4__["BookComponent"],
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
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
/* harmony import */ var _page_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/home/home.component */ "./src/app/page/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _page_book_book_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/book/book.component */ "./src/app/page/book/book.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _component_table_table_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/table/table.component */ "./src/app/component/table/table.component.ts");
/* harmony import */ var _service_books_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./service/books.service */ "./src/app/service/books.service.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _page_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _page_book_book_component__WEBPACK_IMPORTED_MODULE_9__["BookComponent"], _component_table_table_component__WEBPACK_IMPORTED_MODULE_11__["TableComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        ],
        providers: [_service_books_service__WEBPACK_IMPORTED_MODULE_12__["BooksService"], _page_book_book_component__WEBPACK_IMPORTED_MODULE_9__["BookComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/component/table/table.component.scss":
/*!******************************************************!*\
  !*** ./src/app/component/table/table.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/component/table/table.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/table/table.component.ts ***!
  \****************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_page_book_book_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/page/book/book.component */ "./src/app/page/book/book.component.ts");
/* harmony import */ var src_app_service_books_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/books.service */ "./src/app/service/books.service.ts");





let TableComponent = class TableComponent {
    constructor(dialog, book) {
        this.dialog = dialog;
        this.book = book;
        this.displayedColumns = ['image', 'details', 'actions'];
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() { }
    openModal(data) {
        this.dialog.open(src_app_page_book_book_component__WEBPACK_IMPORTED_MODULE_3__["BookComponent"], { data });
    }
    editData(data) {
        this.edit.emit(data);
    }
    deleteData(data) {
        this.book.deleteBook(data);
        this.delete.emit();
    }
};
TableComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_service_books_service__WEBPACK_IMPORTED_MODULE_4__["BooksService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "dataSource", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TableComponent.prototype, "libarian", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "delete", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TableComponent.prototype, "edit", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/component/table/table.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.scss */ "./src/app/component/table/table.component.scss")).default]
    })
], TableComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm2015/a11y.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/observers */ "./node_modules/@angular/cdk/esm2015/observers.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm2015/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");













let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            // CDK
            _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_3__["A11yModule"],
            _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["BidiModule"],
            _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_5__["ObserversModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_6__["OverlayModule"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_7__["PlatformModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_8__["PortalModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_10__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_11__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
            // Material
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/page/book/book.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/book/book.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYm9vay9ib29rLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/page/book/book.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/book/book.component.ts ***!
  \*********************************************/
/*! exports provided: BookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookComponent", function() { return BookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let BookComponent = class BookComponent {
    constructor(data) {
        this.data = data;
        this.details = {};
    }
    ngOnInit() {
        this.details = this.data;
    }
    ngOnDestroy() { }
};
BookComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
BookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-book',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./book.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/book/book.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./book.component.scss */ "./src/app/page/book/book.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], BookComponent);



/***/ }),

/***/ "./src/app/page/home/home.component.scss":
/*!***********************************************!*\
  !*** ./src/app/page/home/home.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZXd1c2VyL0Rlc2t0b3AvbGlicmFyeS9zcmMvYXBwL3BhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */");

/***/ }),

/***/ "./src/app/page/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm2015/sort.js");
/* harmony import */ var src_app_service_books_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/books.service */ "./src/app/service/books.service.ts");







let HomeComponent = class HomeComponent {
    constructor(book, fb) {
        this.book = book;
        this.fb = fb;
        this.libarian = false;
        this.editMode = false;
        this.ngform = this.fb.group({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            authur: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            price: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
        });
    }
    ngOnInit() {
        this.getBooks();
    }
    getBooks() {
        const BOOK_DATA = this.book.getAllBook().sort((a, b) => {
            const aDate = new Date(a.DateAdded);
            const bDate = new Date(b.DateAdded);
            return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](BOOK_DATA);
        this.dataSource.paginator = this.paginator;
    }
    onDelete(event) {
        console.log(event);
        this.getBooks();
    }
    onEdit(event) {
        console.log(event);
        this.editId = event.id;
        this.editMode = true;
        this.ngform.patchValue({
            title: event.title,
            description: event.description,
            authur: event.authur,
            price: event.price,
        });
        this.image = event.image;
    }
    switchUser() {
        switch (this.libarian) {
            case false:
                this.libarian = true;
                break;
            case true:
                this.libarian = false;
                break;
            default:
                return;
        }
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    onFileSelected(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            // tslint:disable-next-line: no-shadowed-variable
            reader.onload = (event) => {
                this.image = event.target.result;
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    arrangeByNewest() {
        const newestDate = this.dataSource.data.sort((a, b) => {
            const aDate = new Date(a.DateAdded);
            const bDate = new Date(b.DateAdded);
            return aDate > bDate ? -1 : aDate < bDate ? 1 : 0;
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](newestDate);
        this.dataSource.paginator = this.paginator;
    }
    arrangeByOldest() {
        const oldestDate = this.dataSource.data.sort((a, b) => {
            const aDate = new Date(a.DateAdded);
            const bDate = new Date(b.DateAdded);
            return aDate < bDate ? -1 : aDate > bDate ? 1 : 0;
        });
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](oldestDate);
        this.dataSource.paginator = this.paginator;
    }
    arrangeByLowest() {
        const lowestPrice = this.dataSource.data.sort((a, b) => a.price - b.price);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](lowestPrice);
        this.dataSource.paginator = this.paginator;
    }
    arrangeByHighest() {
        const highestPrice = this.dataSource.data.sort((a, b) => b.price - a.price);
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](highestPrice);
        this.dataSource.paginator = this.paginator;
    }
    onSubmit() {
        const payload = {
            id: this.ngform.value.title.split(' ').join('-').toLowerCase(),
            title: this.ngform.value.title,
            price: this.ngform.value.price,
            description: this.ngform.value.description,
            authur: this.ngform.value.authur,
            image: this.image,
            DateAdded: new Date().toString(),
        };
        if (!this.editMode) {
            this.book.addBook(payload);
        }
        else {
            this.book.editBook(this.editId, payload);
            this.editMode = false;
        }
        this.getBooks();
        this.clearData();
        this.image = '';
    }
    clearData() {
        this.ngform.patchValue({
            title: '',
            description: '',
            authur: '',
            price: '',
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_service_books_service__WEBPACK_IMPORTED_MODULE_6__["BooksService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
], HomeComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], { static: true })
], HomeComponent.prototype, "sort", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/page/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/service/books.service.ts":
/*!******************************************!*\
  !*** ./src/app/service/books.service.ts ***!
  \******************************************/
/*! exports provided: BooksService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksService", function() { return BooksService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BooksService = class BooksService {
    constructor() {
        this.books = [
            {
                id: 'intelligent-fresh-salad',
                title: 'Intelligent Fresh Salad',
                price: '674.00',
                description: 'Ex dolor aut et sequi temporibus maxime recusandae nulla dolores. Dolorem officiis mollitia magnam qui voluptatem. Voluptates ratione et voluptatum et labore quam assumenda. Fugit placeat est molestiae omnis adipisci qui tempore facilis nostrum. Doloremque quis iusto cum sit ipsam vero.',
                authur: 'Eino Cummerata',
                image: 'http://covers.openlibrary.org/b/id/0000000010-L.jpg',
                DateAdded: 'Sun Apr 19 2020 11:58:53 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'awesome-soft-bike',
                title: 'Awesome Soft Bike',
                price: '2636.00',
                description: 'Laboriosam aut autem sed consequatur id blanditiis consequatur autem quas. Fugiat non et animi. Officia dignissimos in ea est quidem. Explicabo deleniti impedit reprehenderit non praesentium perspiciatis nihil minus. Qui voluptatibus quos quos vel est.',
                authur: 'Crawford Considine',
                image: 'http://covers.openlibrary.org/b/id/0000000011-L.jpg',
                DateAdded: 'Tue Apr 07 2020 13:19:53 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'licensed-wooden-fish',
                title: 'Licensed Wooden Fish',
                price: '1538.00',
                description: 'Quam repellat tenetur. Beatae possimus cumque dolore iusto laboriosam quia iure. Quae et corporis ut occaecati architecto illum et enim. Quia blanditiis quod quas quis voluptatem libero ut dolorum rerum. Quidem quia corrupti eligendi beatae qui voluptatem.',
                authur: 'Jefferey Stokes',
                image: 'http://covers.openlibrary.org/b/id/0000000012-L.jpg',
                DateAdded: 'Tue Apr 14 2020 01:35:32 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'handmade-frozen-table',
                title: 'Handmade Frozen Table',
                price: '2176.00',
                description: 'Atque fugiat eum odio incidunt dolores ad. Consectetur sint autem incidunt aut harum perferendis. Ut et quidem. Sit incidunt dolor sed. Pariatur aut in voluptate dicta odit.',
                authur: 'Merl Cronin',
                image: 'http://covers.openlibrary.org/b/id/0000000013-L.jpg',
                DateAdded: 'Thu Apr 09 2020 18:28:17 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'ergonomic-soft-keyboard',
                title: 'Ergonomic Soft Keyboard',
                price: '2206.00',
                description: 'Quo veritatis sit. Dolorum quo praesentium. Possimus illo modi illo. Vel et magni aut. Eum minima odit et et.',
                authur: 'Danyka Hickle',
                image: 'http://covers.openlibrary.org/b/id/0000000014-L.jpg',
                DateAdded: 'Wed Apr 22 2020 01:42:51 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'rustic-frozen-mouse',
                title: 'Rustic Frozen Mouse',
                price: '2026.00',
                description: 'Rem libero sint quaerat blanditiis perferendis recusandae sunt molestiae. Possimus animi cum enim. Et fuga eius id nobis. Eius eos debitis laboriosam. Et reiciendis aut velit aut deleniti id inventore omnis.',
                authur: 'Piper Hand',
                image: 'http://covers.openlibrary.org/b/id/0000000015-L.jpg',
                DateAdded: 'Tue Apr 21 2020 22:03:21 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'handmade-plastic-shoes',
                title: 'Handmade Plastic Shoes',
                price: '2871.00',
                description: 'Rem reiciendis eos. Placeat nobis similique vero sit. Vitae quis sequi dolorem sit sint ea. Velit delectus non ad voluptatem est qui. Sit ut est iusto ut ipsum provident.',
                authur: 'Richmond Bechtelar',
                image: 'http://covers.openlibrary.org/b/id/0000000016-L.jpg',
                DateAdded: 'Sat Apr 11 2020 15:35:29 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'licensed-steel-bacon',
                title: 'Licensed Steel Bacon',
                price: '2100.00',
                description: 'Labore et consequatur qui aut accusantium dolorem et. Facere et non non qui id eum. Et nesciunt rerum voluptatibus neque. Aliquam aliquam optio blanditiis eum non laboriosam beatae cum. Velit animi quis illo quo corporis molestias alias et.',
                authur: 'Connor Nitzsche',
                image: 'http://covers.openlibrary.org/b/id/0000000017-L.jpg',
                DateAdded: 'Thu Apr 09 2020 04:39:14 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'intelligent-steel-sausages',
                title: 'Intelligent Steel Sausages',
                price: '976.00',
                description: 'Quo quam laborum accusantium quaerat natus ut iusto veniam. Expedita sed nihil doloribus. Quasi non vero. Non et velit dignissimos aperiam iusto eveniet eos ipsam. Pariatur voluptatibus quisquam alias iusto eum ducimus nam.',
                authur: 'Eldridge Murphy',
                image: 'http://covers.openlibrary.org/b/id/0000000018-L.jpg',
                DateAdded: 'Thu Apr 09 2020 00:47:02 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'licensed-metal-table',
                title: 'Licensed Metal Table',
                price: '2747.00',
                description: 'Sit perferendis et consequatur. Voluptas impedit maxime asperiores excepturi ea ipsum molestiae sed. Suscipit tenetur sapiente quas. Odit ut corporis. Alias id porro laboriosam sed consectetur voluptatem.',
                authur: 'Angel Considine',
                image: 'http://covers.openlibrary.org/b/id/0000000019-L.jpg',
                DateAdded: 'Sun Apr 19 2020 15:26:44 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'tasty-granite-salad',
                title: 'Tasty Granite Salad',
                price: '2323.00',
                description: 'Beatae aut aspernatur. Delectus velit quia ut sit et quia. Ab omnis dicta aut eos. Ex libero saepe nobis et ipsam ratione eveniet velit. Aut voluptate sit ut.',
                authur: 'Aiden Hyatt',
                image: 'http://covers.openlibrary.org/b/id/00000000110-L.jpg',
                DateAdded: 'Sun Apr 19 2020 15:02:36 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'fantastic-plastic-shirt',
                title: 'Fantastic Plastic Shirt',
                price: '1189.00',
                description: 'Consequatur blanditiis sint minima. Cupiditate alias est exercitationem quod. Repellendus magnam et quaerat itaque non et accusamus in. Iusto sit repellendus ea modi. Ipsam nihil et magnam.',
                authur: 'Favian Romaguera',
                image: 'http://covers.openlibrary.org/b/id/00000000111-L.jpg',
                DateAdded: 'Thu Apr 09 2020 15:28:11 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'handmade-rubber-chicken',
                title: 'Handmade Rubber Chicken',
                price: '2925.00',
                description: 'Culpa totam ad esse omnis pariatur consequuntur id. Aut sint quas dolorem quibusdam. Quia molestias ut inventore sint et. Esse consectetur quis consectetur aliquid. Quia et quas nesciunt et quo quia.',
                authur: 'Hollis Gutmann',
                image: 'http://covers.openlibrary.org/b/id/00000000112-L.jpg',
                DateAdded: 'Tue Apr 07 2020 17:21:08 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'gorgeous-soft-shoes',
                title: 'Gorgeous Soft Shoes',
                price: '766.00',
                description: 'Natus amet atque eos magni mollitia consectetur sed non autem. Aliquam et laboriosam perferendis expedita facere adipisci mollitia consequatur. Quos incidunt iure iusto distinctio nam nesciunt veniam vero atque. Occaecati ex quaerat quia dolores reiciendis inventore natus. Impedit ut doloribus officia molestias architecto.',
                authur: 'Brenden Harris',
                image: 'http://covers.openlibrary.org/b/id/00000000113-L.jpg',
                DateAdded: 'Wed Apr 08 2020 03:53:19 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'small-fresh-tuna',
                title: 'Small Fresh Tuna',
                price: '2963.00',
                description: 'Voluptatem provident rem blanditiis enim sunt nobis cum omnis. Necessitatibus veritatis voluptas consequatur necessitatibus repellendus. Totam perspiciatis inventore corporis voluptas velit odio repellat et. Sit asperiores sed rerum. Non quia unde ratione sed voluptatem natus et qui dolores.',
                authur: 'Hollie McDermott',
                image: 'http://covers.openlibrary.org/b/id/00000000114-L.jpg',
                DateAdded: 'Tue Apr 21 2020 11:39:51 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'practical-fresh-table',
                title: 'Practical Fresh Table',
                price: '2032.00',
                description: 'Dolor eos quia asperiores sint officiis ut. Et ut est voluptatibus nihil rem rerum beatae. Exercitationem error cupiditate assumenda tenetur. Quasi beatae labore soluta quaerat sapiente. Ab recusandae a eos quaerat ea quia.',
                authur: 'Susana Hoeger',
                image: 'http://covers.openlibrary.org/b/id/00000000115-L.jpg',
                DateAdded: 'Tue Apr 21 2020 00:19:44 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'incredible-metal-shoes',
                title: 'Incredible Metal Shoes',
                price: '2311.00',
                description: 'Deserunt nisi repellat eum minima ipsum. Dolorum numquam soluta soluta nemo pariatur quasi aliquid possimus inventore. Illo aut adipisci corrupti nihil esse. Quis officiis nobis illum consequatur aut. Quod vitae fuga non et impedit.',
                authur: 'Susan Christiansen',
                image: 'http://covers.openlibrary.org/b/id/00000000116-L.jpg',
                DateAdded: 'Tue Apr 14 2020 01:55:22 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'fantastic-fresh-bike',
                title: 'Fantastic Fresh Bike',
                price: '2019.00',
                description: 'Voluptas totam perferendis est ut autem molestiae et accusantium impedit. Porro recusandae quasi nihil earum et corrupti beatae. Exercitationem in omnis fuga non voluptate similique modi nisi libero. Deleniti nihil et laudantium et porro. Omnis et nemo minima et excepturi.',
                authur: 'Albina Satterfield',
                image: 'http://covers.openlibrary.org/b/id/00000000117-L.jpg',
                DateAdded: 'Wed Apr 22 2020 16:05:09 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'handcrafted-wooden-hat',
                title: 'Handcrafted Wooden Hat',
                price: '2421.00',
                description: 'At cum aut commodi mollitia ea. Minus repellendus voluptatibus sit tempore est. Magni voluptatem ipsa minus natus. Et sed nihil in harum dolorem totam laboriosam a. Impedit in quia voluptatem voluptas.',
                authur: 'Christ Pfannerstill',
                image: 'http://covers.openlibrary.org/b/id/00000000118-L.jpg',
                DateAdded: 'Mon Apr 13 2020 14:18:38 GMT+0100 (West Africa Standard Time)',
            },
            {
                id: 'unbranded-plastic-pants',
                title: 'Unbranded Plastic Pants',
                price: '603.00',
                description: 'Laboriosam autem eligendi officia voluptatum temporibus nemo. Qui qui quae et quibusdam ut eum et est. Velit qui in amet adipisci voluptates quia totam. Itaque ad in repudiandae et et repudiandae voluptatibus. Minus est praesentium facilis nostrum atque necessitatibus saepe.',
                authur: 'Mellie Langosh',
                image: 'http://covers.openlibrary.org/b/id/00000000119-L.jpg',
                DateAdded: 'Mon Apr 20 2020 17:47:04 GMT+0100 (West Africa Standard Time)',
            },
        ];
    }
    getAllBook() {
        return this.books;
    }
    addBook(payload) {
        this.books.push(payload);
    }
    editBook(id, payload) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                this.books[i] = payload;
            }
        }
    }
    deleteBook(id) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].id === id) {
                this.books.splice(i, 1);
            }
        }
    }
};
BooksService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], BooksService);



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
    production: false,
    BASE_URL: 'http://localhost:3000/books',
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/newuser/Desktop/library/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map