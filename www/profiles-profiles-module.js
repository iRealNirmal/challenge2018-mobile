(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profiles-profiles-module"],{

/***/ "./src/app/profiles/profiles.module.ts":
/*!*********************************************!*\
  !*** ./src/app/profiles/profiles.module.ts ***!
  \*********************************************/
/*! exports provided: ProfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPageModule", function() { return ProfilesPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _profiles_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profiles.page */ "./src/app/profiles/profiles.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _profiles_page__WEBPACK_IMPORTED_MODULE_5__["ProfilesPage"]
    }
];
var ProfilesPageModule = /** @class */ (function () {
    function ProfilesPageModule() {
    }
    ProfilesPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_profiles_page__WEBPACK_IMPORTED_MODULE_5__["ProfilesPage"]]
        })
    ], ProfilesPageModule);
    return ProfilesPageModule;
}());



/***/ }),

/***/ "./src/app/profiles/profiles.page.html":
/*!*********************************************!*\
  !*** ./src/app/profiles/profiles.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    \n      <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n    <ion-title>profiles</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher slot=\"fixed\" (ionRefresh)=\"loadData($event)\">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <form novalidate (ngSubmit)=\"profileUpdate()\" [formGroup]=\"profileform\">\n    <ion-item>\n      <ion-label   position=\"floating\">First Name </ion-label>\n      <ion-input  readonly type=\"text\" formControlName=\"firstname\" name=\"firstname\" [class.error1]=\"!profileform.controls.firstname.valid && profileform.controls.firstname.dirty\"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf=\"( profileform.get('firstname').hasError('minlength') || profileform.get('firstname').hasError('maxlength') ||profileform.get('firstname').hasError('pattern') ||profileform.get('firstname').hasError('required') ) && profileform.get('firstname').touched\">\n      <div class=\"error\" *ngIf=\"profileform.get('firstname').hasError('required') && profileform.get('firstname').touched\">\n        Please input your first name\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('firstname').hasError('minlength') && profileform.get('firstname').touched\">\n        Minimum 4 characters\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('firstname').hasError('maxlength') && profileform.get('firstname').touched\">\n        Maximum 30 characters\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('firstname').hasError('pattern') && profileform.get('firstname').touched\">\n        Just use alphabet character\n      </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label  position=\"floating\">Last Name </ion-label>\n        <ion-input  readonly type=\"text\" formControlName=\"lastname\" [class.error1]=\"!profileform.controls.lastname.valid && profileform.controls.lastname.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( profileform.get('lastname').hasError('minlength') || profileform.get('lastname').hasError('maxlength') ||profileform.get('lastname').hasError('pattern') ||profileform.get('lastname').hasError('required') ) && profileform.get('lastname').touched\">\n        <div class=\"error\" *ngIf=\"profileform.get('lastname').hasError('required') && profileform.get('lastname').touched\">\n          Please input your last name\n        </div>\n        <div class=\"error\" *ngIf=\"profileform.get('lastname').hasError('minlength') && profileform.get('lastname').touched\">\n          Minimum 4 characters\n        </div>\n        <div class=\"error\" *ngIf=\"profileform.get('lastname').hasError('maxlength') && profileform.get('lastname').touched\">\n          Maximum 30 characters\n        </div>\n        <div class=\"error\" *ngIf=\"profileform.get('lastname').hasError('pattern') && profileform.get('lastname').touched\">\n          Just use alphabet character\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label  position=\"floating\">Email</ion-label>\n        <ion-input readonly type=\"text\" formControlName=\"email\" [class.error1]=\"!profileform.controls.email.valid && profileform.controls.email.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( profileform.get('email').hasError('minlength') || profileform.get('email').hasError('pattern') ||profileform.get('email').hasError('required') ) && profileform.get('email').touched\">\n        <div class=\"error\" *ngIf=\"profileform.get('email').hasError('required') && profileform.get('email').touched\">\n          Please input your email\n        </div>\n        <div class=\"error\" *ngIf=\"profileform.get('email').hasError('pattern') && profileform.get('email').touched\">\n          Email address invalid\n        </div>\n      </ion-item>\n\n    <ion-item>\n      <ion-label  position=\"floating\">Username</ion-label>\n      <ion-input  readonly type=\"text\" name=\"username\" formControlName=\"username\" [class.error1]=\"!profileform.controls.username.valid && profileform.controls.username.dirty\"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines *ngIf=\"( profileform.get('username').hasError('minlength') || profileform.get('username').hasError('maxlength') ||profileform.get('username').hasError('pattern') ||profileform.get('username').hasError('required') ) && profileform.get('username').touched\">\n      <div class=\"error\" *ngIf=\"profileform.get('username').hasError('required') && profileform.get('username').touched\">\n        Please input your username\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('username').hasError('minlength') && profileform.get('username').touched\">\n        Minimum 4 characters\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('username').hasError('maxlength') && profileform.get('username').touched\">\n        Maximum 10 characters\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('username').hasError('pattern') && profileform.get('username').touched\">\n        Just use alphabet character\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label  position=\"floating\">Password</ion-label>\n      <ion-input  readonly type=\"password\" formControlName=\"password\" [class.error1]=\"!profileform.controls.password.valid && profileform.controls.password.dirty\"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines *ngIf=\"( profileform.get('password').hasError('minlength') || profileform.get('password').hasError('maxlength') ||profileform.get('password').hasError('required') ) && profileform.get('password').touched\">\n      <div class=\"error\" *ngIf=\"profileform.get('password').hasError('required') && profileform.get('password').touched\">\n        Please input your password\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('password').hasError('minlength') && profileform.get('password').touched\">\n        Minimum 6 characters\n      </div>\n      <div class=\"error\" *ngIf=\"profileform.get('password').hasError('maxlength') && profileform.get('password').touched\">\n        Maximum 12 characters\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label  position=\"floating\">Membership Number</ion-label>\n      <ion-input type=\"text\" readonly formControlName=\"loyalitNumber\" [class.error1]=\"!profileform.controls.loyalitNumber.valid && profileform.controls.loyalitNumber.dirty\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label  position=\"floating\">Reward Points</ion-label>\n        <ion-input type=\"text\" readonly formControlName=\"points\" [class.error1]=\"!profileform.controls.points.valid && profileform.controls.points.dirty\"></ion-input>\n      </ion-item>\n    <!-- <ion-button  type=\"submit\" size=\"block\" color=\"primary\" [disabled]=\"profileform.invalid\">UPDATE</ion-button> -->\n</form>\n<ion-button  size=\"block\" color=\"danger\" (click)=\"logout()\">LOGOUT</ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/profiles/profiles.page.scss":
/*!*********************************************!*\
  !*** ./src/app/profiles/profiles.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-input[readonly] {\n  background-color: #ddd; }\n"

/***/ }),

/***/ "./src/app/profiles/profiles.page.ts":
/*!*******************************************!*\
  !*** ./src/app/profiles/profiles.page.ts ***!
  \*******************************************/
/*! exports provided: ProfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPage", function() { return ProfilesPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/profile.service */ "./src/app/service/profile.service.ts");
/* harmony import */ var _service_authntication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authntication.service */ "./src/app/service/authntication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var ProfilesPage = /** @class */ (function () {
    function ProfilesPage(profile, auth, route) {
        this.profile = profile;
        this.auth = auth;
        this.route = route;
    }
    ProfilesPage.prototype.ngOnInit = function () {
        this.profileform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)]),
            loyalitNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)]),
            points: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(12)]),
        });
    };
    ProfilesPage.prototype.ionViewWillEnter = function () {
        this.loadData();
    };
    ProfilesPage.prototype.loadData = function (refresher) {
        var _this = this;
        this.profile.getProfile().subscribe(function (value) {
            _this.profiles = value;
            delete _this.profiles._id;
            delete _this.profiles.id;
            _this.profileform.setValue(_this.profiles);
            if (refresher) {
                refresher.target.complete();
            }
        }, function (err) {
            console.log(err);
            if (refresher) {
                refresher.target.complete();
            }
        });
    };
    ProfilesPage.prototype.profileUpdate = function () {
        console.log('profile updated');
    };
    ProfilesPage.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.logout()];
                    case 1:
                        _a.sent();
                        this.route.navigate(['/login']);
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfilesPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.page.html */ "./src/app/profiles/profiles.page.html"),
            styles: [__webpack_require__(/*! ./profiles.page.scss */ "./src/app/profiles/profiles.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], _service_authntication_service__WEBPACK_IMPORTED_MODULE_3__["AuthnticationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ProfilesPage);
    return ProfilesPage;
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
        var date = new Date();
        return this.http.post("http://192.168.1.103:3000/application/profile?" + date, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.getShop = function (lat, lng) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        var location = { lat: lat, lng: lng };
        return this.http.post("http://192.168.1.103:3000/application/shopnear", location, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.getShopAll = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.103:3000/application/shop", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.getShopList = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.103:3000/application/shoplist", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.purchaseHistory = function () {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.103:3000/application/purchaseHistory", httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
    };
    ProfileService.prototype.order = function (id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post("http://192.168.1.103:3000/application/viewOrder", { id: id }, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response; }));
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
//# sourceMappingURL=profiles-profiles-module.js.map