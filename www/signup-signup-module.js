(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"],{

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup.page */ "./src/app/signup/signup.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_5__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/signup/signup.page.html":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>signup</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <form novalidate (ngSubmit)=\"signup()\" [formGroup]=\"signupform\">\n    <ion-item>\n      <ion-label position=\"floating\">First Name </ion-label>\n      <ion-input type=\"text\" formControlName=\"firstname\" name=\"firstname\" [class.error1]=\"!signupform.controls.firstname.valid && signupform.controls.firstname.dirty\"></ion-input>\n    </ion-item>\n    <ion-item no-lines *ngIf=\"( signupform.get('firstname').hasError('minlength') || signupform.get('firstname').hasError('maxlength') ||signupform.get('firstname').hasError('pattern') ||signupform.get('firstname').hasError('required') ) && signupform.get('firstname').touched\">\n      <div class=\"error\" *ngIf=\"signupform.get('firstname').hasError('required') && signupform.get('firstname').touched\">\n        Please input your first name\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('firstname').hasError('minlength') && signupform.get('firstname').touched\">\n        Minimum 4 characters\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('firstname').hasError('maxlength') && signupform.get('firstname').touched\">\n        Maximum 30 characters\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('firstname').hasError('pattern') && signupform.get('firstname').touched\">\n        Just use alphabet character\n      </div>\n    </ion-item>\n\n    <ion-item>\n        <ion-label position=\"floating\">Last Name </ion-label>\n        <ion-input type=\"text\" formControlName=\"lastname\" [class.error1]=\"!signupform.controls.lastname.valid && signupform.controls.lastname.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('lastname').hasError('minlength') || signupform.get('lastname').hasError('maxlength') ||signupform.get('lastname').hasError('pattern') ||signupform.get('lastname').hasError('required') ) && signupform.get('lastname').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('lastname').hasError('required') && signupform.get('lastname').touched\">\n          Please input your last name\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('lastname').hasError('minlength') && signupform.get('lastname').touched\">\n          Minimum 4 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('lastname').hasError('maxlength') && signupform.get('lastname').touched\">\n          Maximum 30 characters\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('lastname').hasError('pattern') && signupform.get('lastname').touched\">\n          Just use alphabet character\n        </div>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" [class.error1]=\"!signupform.controls.email.valid && signupform.controls.email.dirty\"></ion-input>\n      </ion-item>\n      <ion-item no-lines *ngIf=\"( signupform.get('email').hasError('minlength') || signupform.get('email').hasError('pattern') ||signupform.get('email').hasError('required') ) && signupform.get('email').touched\">\n        <div class=\"error\" *ngIf=\"signupform.get('email').hasError('required') && signupform.get('email').touched\">\n          Please input your email\n        </div>\n        <div class=\"error\" *ngIf=\"signupform.get('email').hasError('pattern') && signupform.get('email').touched\">\n          Email address invalid\n        </div>\n      </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Username</ion-label>\n      <ion-input type=\"text\" name=\"username\" formControlName=\"username\" [class.error1]=\"!signupform.controls.username.valid && signupform.controls.username.dirty\"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines *ngIf=\"( signupform.get('username').hasError('minlength') || signupform.get('username').hasError('maxlength') ||signupform.get('username').hasError('pattern') ||signupform.get('username').hasError('required') ) && signupform.get('username').touched\">\n      <div class=\"error\" *ngIf=\"signupform.get('username').hasError('required') && signupform.get('username').touched\">\n        Please input your username\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('username').hasError('minlength') && signupform.get('username').touched\">\n        Minimum 4 characters\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('username').hasError('maxlength') && signupform.get('username').touched\">\n        Maximum 10 characters\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('username').hasError('pattern') && signupform.get('username').touched\">\n        Just use alphabet character\n      </div>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input type=\"password\" formControlName=\"password\" [class.error1]=\"!signupform.controls.password.valid && signupform.controls.password.dirty\"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines *ngIf=\"( signupform.get('password').hasError('minlength') || signupform.get('password').hasError('maxlength') ||signupform.get('password').hasError('required') ) && signupform.get('password').touched\">\n      <div class=\"error\" *ngIf=\"signupform.get('password').hasError('required') && signupform.get('password').touched\">\n        Please input your password\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('password').hasError('minlength') && signupform.get('password').touched\">\n        Minimum 6 characters\n      </div>\n      <div class=\"error\" *ngIf=\"signupform.get('password').hasError('maxlength') && signupform.get('password').touched\">\n        Maximum 12 characters\n      </div>\n    </ion-item>\n    <ion-button  type=\"submit\" size=\"block\" color=\"primary\" [disabled]=\"signupform.invalid\">SIGNUP</ion-button>\n    <div>\n      <a  routerLink=\"/login\">Already have an account click here to sign in</a>\n    </div>\n</form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/signup/signup.page.scss":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".error {\n  color: red; }\n"

/***/ }),

/***/ "./src/app/signup/signup.page.ts":
/*!***************************************!*\
  !*** ./src/app/signup/signup.page.ts ***!
  \***************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_authntication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authntication.service */ "./src/app/service/authntication.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupPage = /** @class */ (function () {
    function SignupPage(auth, route) {
        this.auth = auth;
        this.route = route;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.ngOnInit = function () {
        this.signupform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[^\s@]+@[^\s@]+\.[^\s@]{2,}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]),
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z ]*'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(12)]),
        });
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        console.log(this.signupform.value);
        this.auth.register(this.signupform.value).subscribe(function (suc) {
            console.log("saved successfully " + suc);
            _this.route.navigate(['/login']);
        }, function (err) {
            console.log("error " + err);
        });
    };
    SignupPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.page.html */ "./src/app/signup/signup.page.html"),
            styles: [__webpack_require__(/*! ./signup.page.scss */ "./src/app/signup/signup.page.scss")],
        }),
        __metadata("design:paramtypes", [_service_authntication_service__WEBPACK_IMPORTED_MODULE_3__["AuthnticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=signup-signup-module.js.map