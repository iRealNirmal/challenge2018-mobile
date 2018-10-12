(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-view-detail-view-module"],{

/***/ "./src/app/detail-view/detail-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/detail-view/detail-view.module.ts ***!
  \***************************************************/
/*! exports provided: DetailViewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewPageModule", function() { return DetailViewPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _detail_view_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-view.page */ "./src/app/detail-view/detail-view.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _detail_view_page__WEBPACK_IMPORTED_MODULE_5__["DetailViewPage"]
    }
];
var DetailViewPageModule = /** @class */ (function () {
    function DetailViewPageModule() {
    }
    DetailViewPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_detail_view_page__WEBPACK_IMPORTED_MODULE_5__["DetailViewPage"]]
        })
    ], DetailViewPageModule);
    return DetailViewPageModule;
}());



/***/ }),

/***/ "./src/app/detail-view/detail-view.page.html":
/*!***************************************************!*\
  !*** ./src/app/detail-view/detail-view.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>detailView</ion-title>\n    <ion-buttons slot=\"primary\">\n        <ion-button (click)=\"goToCart()\">\n            <ion-icon slot=\"icon-only\" name=\"md-cart\"></ion-icon>\n          </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n        <ion-item  detail-none *ngFor=\"let product of productList\">\n          <ion-label>\n            <h2>{{product.name}} <ion-badge color=\"primary\">{{product.rewards}} <ion-icon name=\"cash\"></ion-icon></ion-badge></h2>\n            <h3>I'm a big deal</h3>\n            <p>{{product.price | currency:'INR'}}</p>\n          </ion-label>\n          <ion-button shape=\"round\" color=\"primary\" fill=\"outline\" item-end (click)=\"addCart(product)\">Add <ion-icon name=\"md-cart\"></ion-icon></ion-button>\n        </ion-item>\n        <ion-item  *ngIf=\"!productList\">\n          <ion-label>\n            <h2>Nothing to show</h2>\n          </ion-label>\n        </ion-item>\n      </ion-list>\n      <ion-button  size=\"block\" color=\"primary\" (click)=\"share()\">SHARE</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/detail-view/detail-view.page.scss":
/*!***************************************************!*\
  !*** ./src/app/detail-view/detail-view.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  text-transform: capitalize; }\n"

/***/ }),

/***/ "./src/app/detail-view/detail-view.page.ts":
/*!*************************************************!*\
  !*** ./src/app/detail-view/detail-view.page.ts ***!
  \*************************************************/
/*! exports provided: DetailViewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailViewPage", function() { return DetailViewPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _service_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/cart.service */ "./src/app/service/cart.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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
};






var DetailViewPage = /** @class */ (function () {
    function DetailViewPage(route, profile, cart, toast, routes, sharing) {
        var _this = this;
        this.route = route;
        this.profile = profile;
        this.cart = cart;
        this.toast = toast;
        this.routes = routes;
        this.sharing = sharing;
        this.route.params.subscribe(function (parmas) { console.log(parmas.id); });
        this.profile.getShopList().subscribe(function (value) {
            _this.productList = value;
        }, function (err) {
            console.log(err);
        });
    }
    DetailViewPage.prototype.ngOnInit = function () {
    };
    DetailViewPage.prototype.addCart = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.cart.add(product);
                        return [4 /*yield*/, this.toast.create({
                                message: 'Product Added in cart.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    DetailViewPage.prototype.goToCart = function () {
        this.routes.navigate(['/cart/']);
    };
    DetailViewPage.prototype.share = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.sharing.share('TechChallenge', '2018', './assets/images/challenge.png').then(function () {
                    // Success!
                }).catch(function () {
                    // Error!
                });
                return [2 /*return*/];
            });
        });
    };
    DetailViewPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-detail-view',
            template: __webpack_require__(/*! ./detail-view.page.html */ "./src/app/detail-view/detail-view.page.html"),
            styles: [__webpack_require__(/*! ./detail-view.page.scss */ "./src/app/detail-view/detail-view.page.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _service_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], DetailViewPage);
    return DetailViewPage;
}());



/***/ }),

/***/ "./src/app/service/cart.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/cart.service.ts ***!
  \*****************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartService = /** @class */ (function () {
    function CartService(http) {
        this.http = http;
        this.cartList = [];
    }
    CartService.prototype.add = function (product) {
        var foundItem = this.cartList.filter(function (item) {
            return item.id === product.id;
        })[0];
        if (foundItem) {
            product.count += product.count;
        }
        else {
            product.count = 1;
            this.cartList.push(product);
        }
    };
    CartService.prototype.getList = function () {
        return this.cartList;
    };
    CartService.prototype.remove = function (index) {
        this.cartList.splice(index, 1);
        return this.cartList;
    };
    CartService.prototype.buy = function () {
        var _this = this;
        var rewards = 0, total = 0;
        this.cartList.forEach(function (val, key) {
            var product = _this.cartList[key];
            rewards += (product.rewards * product.count);
            total += (product.price * product.count);
        });
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var item = this.cartList;
        var date = new Date();
        var order = { item: item, total: total, rewards: rewards, date: date };
        return this.http.post("http://192.168.1.102:3000/application/buy", order, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return console.log(response); }));
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CartService);
    return CartService;
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
//# sourceMappingURL=detail-view-detail-view-module.js.map