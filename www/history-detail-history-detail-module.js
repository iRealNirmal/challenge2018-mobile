(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-detail-history-detail-module"],{

/***/ "./src/app/history-detail/history-detail.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/history-detail/history-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: HistoryDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPageModule", function() { return HistoryDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _history_detail_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./history-detail.page */ "./src/app/history-detail/history-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _history_detail_page__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPage"]
    }
];
var HistoryDetailPageModule = /** @class */ (function () {
    function HistoryDetailPageModule() {
    }
    HistoryDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_history_detail_page__WEBPACK_IMPORTED_MODULE_5__["HistoryDetailPage"]]
        })
    ], HistoryDetailPageModule);
    return HistoryDetailPageModule;
}());



/***/ }),

/***/ "./src/app/history-detail/history-detail.page.html":
/*!*********************************************************!*\
  !*** ./src/app/history-detail/history-detail.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>Order Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item  detail-none *ngFor=\"let order of orders?.products\">\n          <ion-label>\n            <h2> {{order.name}}</h2>\n            <p>Price {{order.price | currency:'INR' }}</p>\n            <p>Number of items {{order.count}}</p>\n            <p>Rewards Earned <ion-icon name=\"cash\"></ion-icon>{{order.rewards}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item  *ngIf=\"!orders\">\n          <ion-label>\n            <h2>Data loading</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/history-detail/history-detail.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/history-detail/history-detail.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/history-detail/history-detail.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/history-detail/history-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: HistoryDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailPage", function() { return HistoryDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/profile.service */ "./src/app/service/profile.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryDetailPage = /** @class */ (function () {
    function HistoryDetailPage(route, profile) {
        var _this = this;
        this.route = route;
        this.profile = profile;
        this.route.params.subscribe(function (parmas) { _this.id = parmas.id; });
        this.profile.order(this.id).subscribe(function (value) {
            _this.orders = value;
        }, function (err) {
            console.log(err);
        });
    }
    HistoryDetailPage.prototype.ngOnInit = function () {
    };
    HistoryDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-detail',
            template: __webpack_require__(/*! ./history-detail.page.html */ "./src/app/history-detail/history-detail.page.html"),
            styles: [__webpack_require__(/*! ./history-detail.page.scss */ "./src/app/history-detail/history-detail.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]])
    ], HistoryDetailPage);
    return HistoryDetailPage;
}());



/***/ }),

/***/ "./src/app/service/profile.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/profile.service.ts ***!
  \********************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfileService = /** @class */ (function () {
    function ProfileService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    ProfileService.prototype.getProfile = function () {
        console.log('get profile');
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.102:3000/application/profile", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.getShop = function (lat, lng) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var location = { lat: lat, lng: lng };
        return this.http.post("http://192.168.1.102:3000/application/shopnear", location, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.getShopAll = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.102:3000/application/shop", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.getShopList = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.102:3000/application/shoplist", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.purchaseHistory = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.102:3000/application/purchaseHistory", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.order = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.102:3000/application/viewOrder", { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ })

}]);
//# sourceMappingURL=history-detail-history-detail-module.js.map