(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animations/bounceOutLeft.ts":
/*!*********************************************!*\
  !*** ./src/app/animations/bounceOutLeft.ts ***!
  \*********************************************/
/*! exports provided: bounceOutLeft */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bounceOutLeft", function() { return bounceOutLeft; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var bounceOutLeft = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('bounceOutLeft', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(500, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, transform: 'translate3d(-2000px, 0, 0)', offset: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0.4, transform: 'translate3d(20px, 0, 0)', offset: 0.6 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translate3d(0px, 0, 0)', offset: 1 }),
        ]))
    ])
]);


/***/ }),

/***/ "./src/app/antaragni-feed/antaragni-feed.component.css":
/*!*************************************************************!*\
  !*** ./src/app/antaragni-feed/antaragni-feed.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-content {\r\n  padding-top: 64px;\r\n}\r\n\r\n.hover-blue :hover {\r\n  background-color: rgb(59,89,152);\r\n  background-color: rgba(59,89,152, 0.25);\r\n  cursor: pointer;\r\n}\r\n\r\n.alert-wrapper {\r\n  bottom: 0;\r\n  position: fixed;\r\n  width: 100%;\r\n}\r\n\r\n.content-box {\r\n  background-color: white;\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n  color: #212121;\r\n  min-width: 540px;\r\n  width: 40%;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .content-box {\r\n    min-width: 90vw;\r\n  }\r\n}\r\n\r\n.no-padding {\r\n  padding: 0;\r\n}\r\n\r\n.line-breaker {\r\n  padding: 30px;\r\n  white-space: pre-wrap;\r\n}\r\n\r\n.loading {\r\n  height: 100vh;\r\n}\r\n\r\n.link {\r\n  color: #212121;\r\n}\r\n\r\n.link:hover {\r\n  text-decoration: none;\r\n}\r\n\r\n.link:focus {\r\n  text-decoration: none;\r\n}\r\n\r\nmasonry {\r\n  margin: 0 auto;\r\n  width: 80%;\r\n}\r\n\r\na:hover{\r\n  /*text-decoration: none;*/\r\n  background: inherit;\r\n}\r\n\r\na{\r\n  background: inherit;\r\n  height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/antaragni-feed/antaragni-feed.component.html":
/*!**************************************************************!*\
  !*** ./src/app/antaragni-feed/antaragni-feed.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"feeds\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutWrap class=\"full-content\">\r\n  <div class=\"content-box mx-auto my-3 no-padding\" *ngFor=\"let feed of feeds|async\">\r\n    <div class=\"\" fxLayout=\"column\" fxLayoutAlign=\"center stretch\">\r\n      <img class=\"img-fluid mx-auto col-12 no-padding\" [src]=\"feed.full_picture\" alt=\"Image\">\r\n      <div class=\"mt-1 line-breaker\" [innerHTML]=\"feed.message\">\r\n      </div>\r\n    </div>\r\n    <div class=\"text-center hover-blue pb-3 px-3\">\r\n      <button mat-raised-button class=\"btn btn-outline-primary\" (click)=\"sharePost(feed)\">Share</button>\r\n\r\n      <a target=\"_blank\" [href]=\"feed.permalink_url\">\r\n        <button mat-raised-button>View</button>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container loading\" *ngIf=\"!feeds\" fxLayoutAlign=\"center center\">\r\n  <div>\r\n    <h2> Loading </h2>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/antaragni-feed/antaragni-feed.component.ts":
/*!************************************************************!*\
  !*** ./src/app/antaragni-feed/antaragni-feed.component.ts ***!
  \************************************************************/
/*! exports provided: AntaragniFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntaragniFeedComponent", function() { return AntaragniFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var _services_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/feed */ "./src/app/services/feed.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AntaragniFeedComponent = /** @class */ (function () {
    function AntaragniFeedComponent(feedService, http) {
        this.feedService = feedService;
        this.http = http;
        this.message = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.alert = {
            type: 'success',
            message: null
        };
    }
    AntaragniFeedComponent.prototype.ngOnInit = function () {
        this.feeds = this.feedService.getAllPosts();
    };
    AntaragniFeedComponent.prototype.sharePost = function (post) {
        this.feedService.sharePost(post.permalink_url, post.id);
    };
    AntaragniFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-antaragni-feed',
            template: __webpack_require__(/*! ./antaragni-feed.component.html */ "./src/app/antaragni-feed/antaragni-feed.component.html"),
            styles: [__webpack_require__(/*! ./antaragni-feed.component.css */ "./src/app/antaragni-feed/antaragni-feed.component.css")],
        }),
        __metadata("design:paramtypes", [_services_feed__WEBPACK_IMPORTED_MODULE_2__["AntaragniFeedService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AntaragniFeedComponent);
    return AntaragniFeedComponent;
}());



/***/ }),

/***/ "./src/app/antaragni-feed/index.ts":
/*!*****************************************!*\
  !*** ./src/app/antaragni-feed/index.ts ***!
  \*****************************************/
/*! exports provided: AntaragniFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _antaragni_feed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./antaragni-feed.component */ "./src/app/antaragni-feed/antaragni-feed.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AntaragniFeedComponent", function() { return _antaragni_feed_component__WEBPACK_IMPORTED_MODULE_0__["AntaragniFeedComponent"]; });




/***/ }),

/***/ "./src/app/app-component/app.component.css":
/*!*************************************************!*\
  !*** ./src/app/app-component/app.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app-component/app.component.html":
/*!**************************************************!*\
  !*** ./src/app/app-component/app.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<!-- <app-test></app-test> -->"

/***/ }),

/***/ "./src/app/app-component/app.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-component/app.component.ts ***!
  \************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app-component/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app-component/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _homepage_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./homepage/components/landing/landing.component */ "./src/app/homepage/components/landing/landing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/components/register/register.component */ "./src/app/dashboard/components/register/register.component.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _antaragni_feed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./antaragni-feed */ "./src/app/antaragni-feed/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: 'register', component: _dashboard_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
    { path: 'landing', component: _homepage_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    {
        path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["LocalUserGuard"]],
        canActivateChild: [_guards__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'prefix', },
            { path: 'home', component: _antaragni_feed__WEBPACK_IMPORTED_MODULE_7__["AntaragniFeedComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["RegisteredUserGuard"]] },
            {
                path: 'register', component: _dashboard_components_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_6__["RegisteredGuard"]]
            },
        ]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_guards__WEBPACK_IMPORTED_MODULE_6__["guards"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
/* harmony import */ var _homepage_components_about_letter_letter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage/components/about/letter/letter.component */ "./src/app/homepage/components/about/letter/letter.component.ts");
/* harmony import */ var _homepage_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage/components/home/home.component */ "./src/app/homepage/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _mat_components_mat_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mat-components/mat-components.module */ "./src/app/mat-components/mat-components.module.ts");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-component/app.component */ "./src/app/app-component/app.component.ts");
/* harmony import */ var _homepage_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homepage/components/banner/banner.component */ "./src/app/homepage/components/banner/banner.component.ts");
/* harmony import */ var _homepage_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/components/contact/contact.component */ "./src/app/homepage/components/contact/contact.component.ts");
/* harmony import */ var _homepage_components_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./homepage/components/about/about.component */ "./src/app/homepage/components/about/about.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _homepage_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/components/landing/landing.component */ "./src/app/homepage/components/landing/landing.component.ts");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/content.service */ "./src/app/services/content.service.ts");
/* harmony import */ var _dashboard_components_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/components/register/register.component */ "./src/app/dashboard/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var _utility_function__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./utility/function */ "./src/app/utility/function.ts");
/* harmony import */ var ng2_scrollreveal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng2-scrollreveal */ "./node_modules/ng2-scrollreveal/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _directives_analytics_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./directives/analytics.directive */ "./src/app/directives/analytics.directive.ts");
/* harmony import */ var _services_feed__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/feed */ "./src/app/services/feed.ts");
/* harmony import */ var _antaragni_feed__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./antaragni-feed */ "./src/app/antaragni-feed/index.ts");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _homepage_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./homepage/components/faq/faq.component */ "./src/app/homepage/components/faq/faq.component.ts");
/* harmony import */ var _homepage_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./homepage/components/footer/footer.component */ "./src/app/homepage/components/footer/footer.component.ts");
/* harmony import */ var _homepage_components_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./homepage/components/sponsors/sponsors.component */ "./src/app/homepage/components/sponsors/sponsors.component.ts");
/* harmony import */ var _services_fblogin_service__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @services/fblogin.service */ "./src/app/services/fblogin.service.ts");
/* harmony import */ var _homepage_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./homepage/components/sidenav/sidenav.component */ "./src/app/homepage/components/sidenav/sidenav.component.ts");
/* harmony import */ var _homepage_components_resources_resources_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./homepage/components/resources/resources.component */ "./src/app/homepage/components/resources/resources.component.ts");
/* harmony import */ var _homepage_components_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./homepage/components/registeration/registeration.component */ "./src/app/homepage/components/registeration/registeration.component.ts");
/* harmony import */ var _homepage_components_footer_mouse_down_mouse_down_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./homepage/components/footer/mouse-down/mouse-down.component */ "./src/app/homepage/components/footer/mouse-down/mouse-down.component.ts");
/* harmony import */ var _homepage_components_committees_committees_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./homepage/components/committees/committees.component */ "./src/app/homepage/components/committees/committees.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _homepage_components_committees_committee_committee_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./homepage/components/committees/committee/committee.component */ "./src/app/homepage/components/committees/committee/committee.component.ts");
/* harmony import */ var _homepage_components_about_antaragni_antaragni_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./homepage/components/about/antaragni/antaragni.component */ "./src/app/homepage/components/about/antaragni/antaragni.component.ts");
/* harmony import */ var _homepage_components_registeration_register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./homepage/components/registeration/register-dialog/register-dialog.component */ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _homepage_components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"],
                _homepage_components_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"],
                _homepage_components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
                _homepage_components_landing_landing_component__WEBPACK_IMPORTED_MODULE_15__["LandingComponent"],
                _dashboard_components_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _directives_analytics_directive__WEBPACK_IMPORTED_MODULE_27__["AnalyticsDirective"],
                _antaragni_feed__WEBPACK_IMPORTED_MODULE_29__["AntaragniFeedComponent"],
                _homepage_components_faq_faq_component__WEBPACK_IMPORTED_MODULE_31__["FaqComponent"],
                _homepage_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_32__["FooterComponent"],
                _homepage_components_sponsors_sponsors_component__WEBPACK_IMPORTED_MODULE_33__["SponsorsComponent"],
                _services_fblogin_service__WEBPACK_IMPORTED_MODULE_34__["DialogMessageComponent"],
                _homepage_components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_35__["SidenavComponent"],
                _homepage_components_resources_resources_component__WEBPACK_IMPORTED_MODULE_36__["ResourcesComponent"],
                _homepage_components_registeration_registeration_component__WEBPACK_IMPORTED_MODULE_37__["RegisterationComponent"],
                _homepage_components_footer_mouse_down_mouse_down_component__WEBPACK_IMPORTED_MODULE_38__["MouseDownComponent"],
                _homepage_components_committees_committees_component__WEBPACK_IMPORTED_MODULE_39__["CommitteesComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_40__["TestComponent"],
                _homepage_components_committees_committee_committee_component__WEBPACK_IMPORTED_MODULE_41__["CommitteeComponent"],
                _homepage_components_about_antaragni_antaragni_component__WEBPACK_IMPORTED_MODULE_42__["AntaragniComponent"],
                _homepage_components_about_letter_letter_component__WEBPACK_IMPORTED_MODULE_0__["LetterComponent"],
                _homepage_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                _homepage_components_registeration_register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_43__["RegisterDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_25__["environment"].firebase),
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_20__["AngularFireAuthModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_26__["HttpClientModule"],
                angularfire2_firestore__WEBPACK_IMPORTED_MODULE_24__["AngularFirestoreModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ng2_scrollreveal__WEBPACK_IMPORTED_MODULE_23__["NgsRevealModule"].forRoot(),
                _mat_components_mat_components_module__WEBPACK_IMPORTED_MODULE_6__["MatComponentsModule"],
                ngx_facebook__WEBPACK_IMPORTED_MODULE_30__["FacebookModule"].forRoot(),
                angular_particle__WEBPACK_IMPORTED_MODULE_7__["ParticlesModule"],
            ],
            providers: [_services_ui_service__WEBPACK_IMPORTED_MODULE_16__["UiService"], _utility_function__WEBPACK_IMPORTED_MODULE_22__["Funcs"], _services_feed__WEBPACK_IMPORTED_MODULE_28__["AntaragniFeedService"], _services_content_service__WEBPACK_IMPORTED_MODULE_17__["ContentService"]],
            bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            entryComponents: [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_34__["DialogMessageComponent"], _homepage_components_committees_committee_committee_component__WEBPACK_IMPORTED_MODULE_41__["CommitteeComponent"], _homepage_components_about_antaragni_antaragni_component__WEBPACK_IMPORTED_MODULE_42__["AntaragniComponent"], _homepage_components_about_letter_letter_component__WEBPACK_IMPORTED_MODULE_0__["LetterComponent"], _homepage_components_registeration_register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_43__["RegisterDialogComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/components/register/register.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/components/register/register.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  padding-top: 6%;\r\n}\r\n\r\n.form {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form > * {\r\n  width: 100%;\r\n}\r\n\r\n.point9-width {\r\n  width: 90%;\r\n}\r\n\r\n.full-width{\r\n  width: 100%;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/components/register/register.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/components/register/register.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Registration Form</h1>\r\n  <form #register=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form\">\r\n      <mat-form-field>\r\n        <input required #name=\"ngModel\" name=\"name\" matInput placeholder=\"Name\"\r\n               [(ngModel)]=\"newuser.name\" [disabled]=\"newuser$.name\">\r\n        <mat-error *ngIf=\"name.errors\">\r\n          Name is required.\r\n        </mat-error>\r\n      </mat-form-field>\r\n\r\n      <table class=\"full-width\" cellspacing=\"0\">\r\n          <tr>\r\n            <td>\r\n              <mat-form-field class=\"point9-width\">\r\n                <input required ngModel #email=\"ngModel\" type=\"email\" name=\"email\" matInput placeholder=\"Email ID\"\r\n                    [(ngModel)]=\"newuser.email.value\">\r\n                <mat-error *ngIf=\"email.errors\">valid email Required</mat-error>\r\n              </mat-form-field>\r\n            </td>\r\n            <td>\r\n         <mat-form-field class=\"full-width\">\r\n          <mat-select #post=\"ngModel\" name=\"post\" placeholder=\"Register As\"\r\n                      [(ngModel)]=\"newuser.registration.post\">\r\n            <mat-option *ngFor=\"let post of registerAs\" [value]=\"post.name\">{{ post.name }}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error *ngIf=\"post.errors\">Required</mat-error>\r\n        </mat-form-field>\r\n            </td>\r\n          </tr>\r\n        </table> \r\n\r\n      <mat-form-field>\r\n        <textarea required ngModel #address=\"ngModel\" name=\"address\" matInput placeholder=\"Postal Address\"\r\n                  [(ngModel)]=\"newuser.personal.postalAddress\"\r\n                  [disabled]=\"newuser$.personal.postalAddress?newuser.personal.postalAddress!='':false\"></textarea>\r\n        <mat-error *ngIf=\"address.errors\">Required</mat-error>\r\n      </mat-form-field>\r\n\r\n      <table class=\"full-width\" cellspacing=\"0\">\r\n        <tr>\r\n          <td>\r\n            <mat-form-field class=\"point9-width\">\r\n              <input required #pincode=\"ngModel\" name=\"pincode\" type=\"number\" matInput placeholder=\"Pincode\"\r\n                     minlength=\"6\" maxlength=\"6\"\r\n                     [(ngModel)]=\"newuser.personal.zipcode\"\r\n                     [disabled]=\"newuser$.personal.zipcode\">\r\n              <!--<matTooltip =\"6 digits\" [matTooltipPosition]=\"'left'\" >-->\r\n              <mat-error *ngIf=\"pincode.errors\">Required</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"full-width\">\r\n              <input required #fbLink=\"ngModel\" name=\"facebook Link\" matInput\r\n                     placeholder=\"facebook link to your profile\"\r\n                     [(ngModel)]=\"newuser.facebook.facebookLink\"\r\n                     [disabled]=\"newuser$.facebook.facebookLink?newuser.facebook.facebookLink!='':false\">\r\n              <mat-error *ngIf=\"fbLink.errors\">Required</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field class=\"point9-width\">\r\n              <input required #college=\"ngModel\" name=\"college\" matInput placeholder=\"College\"\r\n                     [(ngModel)]=\"newuser.personal.college\"\r\n                     [disabled]=\"newuser$.personal.college?newuser$.personal.college!='':false\">\r\n              <mat-error *ngIf=\"college.errors\">Required</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"full-width\">\r\n              <input required #collegeCity=\"ngModel\" name=\"collegeCity\" matInput placeholder=\"City of College\"\r\n                     [(ngModel)]=\"newuser.personal.city\"\r\n                     [disabled]=\"newuser$.personal.city?newuser$.personal.city!='':false\">\r\n              <mat-error *ngIf=\"collegeCity.errors\">Required</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field class=\"point9-width\">\r\n              <input matInput required #birthdate=\"ngModel\" name=\"birthdate\" [matDatepicker]=\"picker\"\r\n                     placeholder=\"Birthdate\"\r\n                     [(ngModel)]=\"newuser.personal.birthday\"\r\n                     [disabled]=\"newuser$.personal.birthday?newuser$.personal.birthday!='':false\"\r\n                     (click)=\"picker.open()\" (focus)=\"picker.open()\">\r\n              <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n              <mat-datepicker #picker [disabled]=\"newuser$.personal.birthday?newuser$.personal.birthday!='':false\"></mat-datepicker>\r\n              <mat-error *ngIf=\"birthdate.errors\">Date Required</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"full-width\">\r\n              <mat-select #collegeYear=\"ngModel\" name=\"collegeYear\" placeholder=\"Select Year Of Study\"\r\n                          [(ngModel)]=\"newuser.personal.yearOfStudy\">\r\n                <mat-option *ngFor=\"let collegeYear of collegeYears\" [value]=\"collegeYear.id\">{{ collegeYear.name }}\r\n                </mat-option>\r\n              </mat-select>\r\n              <mat-error *ngIf=\"collegeYear.errors\">Required</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td>\r\n            <mat-form-field class=\"point9-width\">\r\n              <input required #mobile=\"ngModel\" name=\"mobile\" matInput minlength=\"10\" maxlength=\"10\"\r\n                     placeholder=\"Mobile Number\" type=\"tel\"\r\n                     [(ngModel)]=\"newuser.personal.phoneNumber\"\r\n                     matTooltip=\"10 digits\" [matTooltipPosition]=\"'left'\"\r\n                     [disabled]=\"newuser$.personal.phoneNumber?newuser.personal.phoneNumber!='':false\">\r\n              <mat-error *ngIf=\"mobile.errors\">Required 10 digits</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"full-width\">\r\n              <input required #whatsApp=\"ngModel\" name=\"whatsApp\" matInput minlength=\"10\" maxlength=\"10\"\r\n                     placeholder=\"WhatsApp Number\" type=\"tel\"\r\n                     [(ngModel)]=\"newuser.personal.whatsAppNumber\" matTooltip=\"10 digits\" [matTooltipPosition]=\"'left'\"\r\n                     [disabled]=\"newuser$.personal.whatsAppNumber?newuser$.personal.whatsAppNumber!='':false\">\r\n              <mat-error *ngIf=\"whatsApp.errors\">Required 10 digits</mat-error>\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n      <button mat-button color=\"primary\" type=\"submit\" [disabled]=\"!register.valid\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/components/register/register.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/components/register/register.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fblogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/fblogin.service */ "./src/app/services/fblogin.service.ts");
/* harmony import */ var _models_localuser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @models/localuser */ "./src/app/models/localuser.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _utility_function__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utility/function */ "./src/app/utility/function.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fblogin, afs, fun) {
        this.fblogin = fblogin;
        this.afs = afs;
        this.fun = fun;
        this.sexes = [
            { id: 1, name: 'Male' },
            { id: 2, name: 'Female' },
            { id: 3, name: 'Other' },
        ];
        this.collegeYears = [
            { id: 1, name: '1st Year' },
            { id: 2, name: '2nd Year' },
            { id: 3, name: '3rd Year' },
            { id: 4, name: '4th Year' },
            { id: 5, name: '5+ Year' }
        ];
        this.registerAs = [
            { id: 1, name: 'Delegate' },
            { id: 2, name: 'Executive Board Member' },
            { id: 3, name: 'International Press' },
        ];
        this.newuser = new _models_localuser__WEBPACK_IMPORTED_MODULE_2__["LocalUser"]();
        this.newuser$ = new _models_localuser__WEBPACK_IMPORTED_MODULE_2__["LocalUser"]();
        this.fun.handleError('please fill the missed out data before proceeding');
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fblogin.currentUser.subscribe(function (user) {
            _this.newuser = user;
            _this.newuser$ = JSON.parse(JSON.stringify(user));
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.newuser.firstUpdate = true;
        this.fblogin.updateRegistration(this.newuser);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/dashboard/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/dashboard/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_1__["FbloginService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _utility_function__WEBPACK_IMPORTED_MODULE_4__["Funcs"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-sidenav {\r\n  min-width: 300px;\r\n  width: 25vw;\r\n  height: 100vh;\r\n  background: #27242d url(\"https://vabshere.github.io/mun/assets/side_back.jpg\") left bottom no-repeat no-repeat;\r\n  background-size: cover;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.example-sidenav::after {\r\n  content: \"\";\r\n  background-color: rgba(39, 36, 45, 0.7);\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  z-index: 1;\r\n}\r\n\r\n.example-container {\r\n  width: 100vw;\r\n  height: 100vh;\r\n}\r\n\r\n.img-circle {\r\n  width: 5vw;\r\n  height: 5vw;\r\n  border-radius: 50%;\r\n  min-width: 50px;\r\n  min-height: 50px;\r\n}\r\n\r\nmat-drawer mat-card {\r\n  width: 100%;\r\n  color: white;\r\n  z-index: 2;\r\n  background-color: transparent;\r\n}\r\n\r\nmat-divider {\r\n  color: white;\r\n  background-color: white;\r\n}\r\n\r\n.ref{\r\n  text-transform: uppercase;\r\n  position: relative;\r\n  max-width: 100%;\r\n}\r\n\r\n.copy{\r\n  /*position: absolute;*/\r\n  color: white;\r\n  font-size: 0.7rem;\r\n}\r\n\r\nmat-card-title, .name {\r\n  font-size: 2rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 5px;\r\n  font-weight: 100;\r\n}\r\n\r\ninput{\r\n  background: transparent;\r\n  width: 6vw;\r\n  min-width: 100px;\r\n  padding: 10px;\r\n  margin-left: 10px;\r\n  text-align: right;\r\n  border-radius: 5px;\r\n  border: 1px solid #666;\r\n  color: white;\r\n\r\n}\r\n\r\n.name {\r\n  font-size: 1.2rem;\r\n}\r\n\r\n.outlet mat-card {\r\n  width: 80%;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .name {\r\n    font-size: 1rem;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Fredericka+the+Great|Luckiest+Guy|Questrial\" rel=\"stylesheet\">\r\n\r\n<mat-drawer-container class=\"example-container\">\r\n  <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" [opened]=\"!mobile\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"start center\" class=\"full\" [class.show]=\"state\">\r\n      <mat-card fxLayoutAlign=\"center center\">\r\n        Antaragni\r\n      </mat-card>\r\n      <mat-divider></mat-divider>\r\n      <mat-card fxLayout=\"row\" fxLayoutAlign=\"left center\" fxLayoutGap=\"15px\">\r\n        <img [src]=\"(user|async)?.personal.picture\" class=\"img-circle\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center left\">\r\n          <div class=\"name\">{{(user|async)?.name}}</div>\r\n          <div class=\"clg\"><i class=\"fa fa-graduation-cap\"></i> IIT Kanpur</div>\r\n        </div>\r\n      </mat-card>\r\n      <!--<mat-card fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"ref\" (click)=\"copyit()\">-->\r\n        <!--<div>Applied for</div>-->\r\n        <!--<div fxLayout=\"column\" fxLayoutAlign=\"center end\">-->\r\n          <!--<input #refcode [value]=\"(user|async)?.campus.referralCode\" maxlength=\"6\">-->\r\n          <!--<div class=\"copy\">click to copy</div>-->\r\n        <!--</div>-->\r\n      <!--</mat-card>-->\r\n    </div>\r\n  </mat-drawer>\r\n  <app-navbar [selectedLink]=\"(getState(o)|async)[0]?.path\"></app-navbar>\r\n  <div [@bounceOutLeft]=\"getState(o)\">\r\n    <router-outlet #o=\"outlet\"></router-outlet>\r\n  </div>\r\n</mat-drawer-container>\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _services_fblogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fblogin.service */ "./src/app/services/fblogin.service.ts");
/* harmony import */ var _animations_bounceOutLeft__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../animations/bounceOutLeft */ "./src/app/animations/bounceOutLeft.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(ui, fbloginservice) {
        this.ui = ui;
        this.fbloginservice = fbloginservice;
        // @ViewChild('refcode') ref: ElementRef;
        this.mobile = window.screen.width < 1023;
        this.showFiller = false;
        this.user = this.fbloginservice.currentUser;
    }
    DashboardComponent.prototype.getState = function (outlet) {
        // Changing the activatedRouteData.state triggers the animation
        return outlet.activatedRoute.url;
    };
    // copyit() {
    //   this.ref.nativeElement.select();
    //   document.execCommand('copy');
    //   this.ref.nativeElement.blur();
    // }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ui.sidenav.subscribe(function () { return _this.drawer.toggle(); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('drawer'),
        __metadata("design:type", Object)
    ], DashboardComponent.prototype, "drawer", void 0);
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")],
            animations: [
                _animations_bounceOutLeft__WEBPACK_IMPORTED_MODULE_3__["bounceOutLeft"]
            ]
        }),
        __metadata("design:paramtypes", [_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"], _services_fblogin_service__WEBPACK_IMPORTED_MODULE_2__["FbloginService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/directives/analytics.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/directives/analytics.directive.ts ***!
  \***************************************************/
/*! exports provided: AnalyticsDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDirective", function() { return AnalyticsDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsDirective = /** @class */ (function () {
    function AnalyticsDirective() {
    }
    AnalyticsDirective.prototype.onClick = function ($event) {
        window.ga('send', 'event', this.eventTracker.category, this.eventTracker.action, {
            hitCallback: function () {
                console.log('Tracking is successful');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('eventTracker'),
        __metadata("design:type", Object)
    ], AnalyticsDirective.prototype, "eventTracker", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AnalyticsDirective.prototype, "onClick", null);
    AnalyticsDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appEventTracker]'
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsDirective);
    return AnalyticsDirective;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: LocalUserGuard, RegisteredUserGuard, RegisteredGuard, LoggedInGuard, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalUserGuard", function() { return LocalUserGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredUserGuard", function() { return RegisteredUserGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisteredGuard", function() { return RegisteredGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return LoggedInGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_fblogin_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/fblogin.service */ "./src/app/services/fblogin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LocalUserGuard = /** @class */ (function () {
    function LocalUserGuard(localUserService, router) {
        this.localUserService = localUserService;
        this.router = router;
    }
    LocalUserGuard.prototype.canActivate = function () {
        var _this = this;
        return this.localUserService.isAuthenticated$.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (!result) {
                _this.router.navigate(['/landing']);
            }
            return !!result;
        }));
    };
    LocalUserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_3__["FbloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LocalUserGuard);
    return LocalUserGuard;
}());

var RegisteredUserGuard = /** @class */ (function () {
    function RegisteredUserGuard(localUserService, router) {
        this.localUserService = localUserService;
        this.router = router;
    }
    RegisteredUserGuard.prototype.canActivate = function () {
        var _this = this;
        return this.localUserService.currentUser.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (!result.firstUpdate) {
                _this.router.navigate(['/dashboard/register']);
                return false;
            }
            return true;
        }));
    };
    RegisteredUserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_3__["FbloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisteredUserGuard);
    return RegisteredUserGuard;
}());

var RegisteredGuard = /** @class */ (function () {
    function RegisteredGuard(localUserService, router) {
        this.localUserService = localUserService;
        this.router = router;
    }
    RegisteredGuard.prototype.canActivate = function () {
        var _this = this;
        return this.localUserService.currentUser.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result.firstUpdate) {
                _this.router.navigate(['/dashboard/home']);
                return false;
            }
            return true;
        }));
    };
    RegisteredGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_3__["FbloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisteredGuard);
    return RegisteredGuard;
}());

var LoggedInGuard = /** @class */ (function () {
    function LoggedInGuard(localUserService, router) {
        this.localUserService = localUserService;
        this.router = router;
    }
    LoggedInGuard.prototype.canActivate = function () {
        var _this = this;
        return this.localUserService.$logged.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            if (result) {
                _this.router.navigate(['/dashboard']);
            }
            return !result;
        }));
    };
    LoggedInGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_3__["FbloginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoggedInGuard);
    return LoggedInGuard;
}());

var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivateChild = function () {
        var _this = this;
        return this.authService.currentUser.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (!user) {
                _this.router.navigate(['/']);
            }
            return !!user;
        }));
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_3__["FbloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: guards, LocalUserGuard, RegisteredUserGuard, RegisteredGuard, LoggedInGuard, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalUserGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["LocalUserGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisteredUserGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["RegisteredUserGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisteredGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["RegisteredGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoggedInGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["LoggedInGuard"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });


var guards = [
    _auth_guard__WEBPACK_IMPORTED_MODULE_0__["LoggedInGuard"],
    _auth_guard__WEBPACK_IMPORTED_MODULE_0__["LocalUserGuard"],
    _auth_guard__WEBPACK_IMPORTED_MODULE_0__["RegisteredUserGuard"],
    _auth_guard__WEBPACK_IMPORTED_MODULE_0__["RegisteredGuard"],
    _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]
];



/***/ }),

/***/ "./src/app/homepage/components/about/about.component.css":
/*!***************************************************************!*\
  !*** ./src/app/homepage/components/about/about.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n\tmargin-bottom: 1rem;\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.body{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n\topacity: 0.75;\r\n\twidth: 55vw;\r\n\ttext-align: center;\r\n}\r\n\r\n.about{\r\n\tmax-width: 800px;\r\n\tmin-height: 100vh;\r\n\tmargin-right: 19vw;\r\n}\r\n\r\n._buttons{\r\n\tmargin-top: 1rem;\r\n}\r\n\r\n.btn{\r\n    margin-bottom: 8px;\r\n    border-radius: 10rem;\r\n    color: #ffffff;\r\n    border: 2px solid #ffffff;\r\n    background: none;\r\n    line-height: .8;\r\n    padding: 0.75rem 1.5rem;\r\n    cursor: pointer;\r\n    min-height: 38px;\r\n}\r\n\r\n.btn:hover{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-color: rgba(255, 255, 255, 0.5);\r\n    background-color: transparent\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.about{\r\n        margin-left: 10px;\r\n\t\tmargin-right: 10px;\r\n\t}\r\n\t.heading{\r\n\t\tfont-size: 2rem;\r\n\t}\r\n\t.body{\r\n        text-align: justify;\r\n\t\twidth: 100%;\r\n\t}\r\n\t.btn{\r\n\t\tfont-size: .9rem;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/about/about.component.html":
/*!****************************************************************!*\
  !*** ./src/app/homepage/components/about/about.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"heading\" fxFlexLayout.xs=\"center\">About MUN</div>\r\n  <div class=\"body\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutAlign.xs=\"stretch stretch\">\r\n      <p>Model United Nations, also known as Model UN or MUN, is an extracurricular activity in which students typically roleplay delegates to the United Nations and simulate UN committees. This activity takes place at MUN conferences, which is usually organized by a high school or college MUN club. At the end of most conferences, outstanding delegates in each committee are recognized and given an award certificate; the Best Delegate in each committee, however, receives a gavel.</p>\r\n  </div>\r\n  <div class=\"_buttons\" fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\"  fxLayoutGap=\"50px\" fxLayoutGap.xs=\"20px\">\r\n    <div class=\"btn\" (click)=\"openDialogAntaragni()\">Antaragni</div>\r\n    <div class=\"btn\" (click)=\"openDialogLetter()\">Welcome Letter</div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/about/about.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/homepage/components/about/about.component.ts ***!
  \**************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _letter_letter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./letter/letter.component */ "./src/app/homepage/components/about/letter/letter.component.ts");
/* harmony import */ var _antaragni_antaragni_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./antaragni/antaragni.component */ "./src/app/homepage/components/about/antaragni/antaragni.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AboutComponent = /** @class */ (function () {
    function AboutComponent(ui, ares, dialog) {
        this.ui = ui;
        this.ares = ares;
        this.dialog = dialog;
    }
    AboutComponent.prototype.openDialogAntaragni = function () {
        var dialogRef = this.dialog.open(_antaragni_antaragni_component__WEBPACK_IMPORTED_MODULE_2__["AntaragniComponent"], {});
    };
    AboutComponent.prototype.openDialogLetter = function () {
        var dialogRef = this.dialog.open(_letter_letter_component__WEBPACK_IMPORTED_MODULE_1__["LetterComponent"], {});
    };
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ares.getArray('ca_about').subscribe(function (content) {
            _this.contents = content['data'];
        });
        this.ui.goAbout.subscribe(function () { return _this.about.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end' }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('about'),
        __metadata("design:type", Object)
    ], AboutComponent.prototype, "about", void 0);
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/homepage/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/homepage/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"], _services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialog"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/about/antaragni/antaragni.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/homepage/components/about/antaragni/antaragni.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n    margin: 1rem;\r\n    border-bottom: 2px solid #fff;\r\n\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.content{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n\topacity: 0.9;\r\n    text-align: center;\r\n\tpadding: 1rem;\r\n\tmin-height: 50vh;\r\n\r\n}\r\n\r\n._close{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/about/antaragni/antaragni.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/homepage/components/about/antaragni/antaragni.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about_antaragni\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"heading\" mat-dialog-title>ANTARAGNI</div>\r\n  <div class=\"content\" mat-dialog-content fxFlexAlign=\"stretch\">Antaragni  is the annual cultural festival of IIT Kanpur, held in the month of October. It is a four-day-long festival, attracting participation from over 200 colleges of India. It includes professional shows, competitions, performances by amateur rock bands, Ustads and Pandits, fashion shows, Indian folk dances, and a lot of other events.</div>\r\n</div>\r\n\r\n<mat-dialog-actions class=\"_close\" align=\"end\" fxlayout=\"row\" fxLayoutAlign=\"end\">\r\n  <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\r\n</mat-dialog-actions> "

/***/ }),

/***/ "./src/app/homepage/components/about/antaragni/antaragni.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/homepage/components/about/antaragni/antaragni.component.ts ***!
  \****************************************************************************/
/*! exports provided: AntaragniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntaragniComponent", function() { return AntaragniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AntaragniComponent = /** @class */ (function () {
    function AntaragniComponent() {
    }
    AntaragniComponent.prototype.ngOnInit = function () {
    };
    AntaragniComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-antaragni',
            template: __webpack_require__(/*! ./antaragni.component.html */ "./src/app/homepage/components/about/antaragni/antaragni.component.html"),
            styles: [__webpack_require__(/*! ./antaragni.component.css */ "./src/app/homepage/components/about/antaragni/antaragni.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AntaragniComponent);
    return AntaragniComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/about/letter/letter.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/components/about/letter/letter.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n    margin: 1rem;\r\n    border-bottom: 2px solid #fff;\r\n\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.content{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n\topacity: 0.9;\r\n    text-align: left;\r\n\tpadding: 1rem;\r\n}\r\n\r\n._close{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/about/letter/letter.component.html":
/*!************************************************************************!*\
  !*** ./src/app/homepage/components/about/letter/letter.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"about_antaragni\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div class=\"heading\" mat-dialog-title>Welcome Letter</div>\r\n    <div class=\"content\" mat-dialog-content fxFlexAlign=\"stretch\">\r\n      <p *ngFor=\"let para of content\">{{para}}</p>\r\n    </div>\r\n  </div>\r\n  \r\n  <mat-dialog-actions class=\"_close\" align=\"end\" fxlayout=\"row\" fxLayoutAlign=\"end\">\r\n    <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\r\n  </mat-dialog-actions> "

/***/ }),

/***/ "./src/app/homepage/components/about/letter/letter.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/components/about/letter/letter.component.ts ***!
  \**********************************************************************/
/*! exports provided: LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LetterComponent = /** @class */ (function () {
    function LetterComponent() {
        this.content = [
            'Dear prospective delegates and advisors,',
            'It is with utmost pride that we invite you to the 9th Edition of IITK MUN, that is scheduled to be held from 5th-7th October 2018. As the Secretariat and Executive Board of the conference, we are looking forward to meeting you and seeing you in action as a responsible member of the global community.',
            'The effective working of the United Nations depends on the cooperation and goodwill of its member states. Incorporating each nation’s unique interests and concerns makes it a challenging job to discuss, write and pass resolutions thus demanding creativity and diplomacy in every stage of the process.',
            'The theme for this year’s conference is “Revolution through Resolution”. Today we live in a world that is growing in constraints and divisions at an alarming rate. It is therefore, imperative for us to bring about an innovative change with a plethora of fresh ideas and new outlooks. Every year at the New Year, a large number of people set resolutions for themselves, but rarely see them through. Now in this era where each sunrise brings with itself a different issue to plague the world, It is up to the youth to actually take up the initiative, and be the harbingers of a revolution aimed towards global peace and stability. Our aim is to provide a platform to encourage the delegates to explore new perspectives and different approaches to long-standing issues and conflicts that are often overseen in today’s discussions.',
            'The question of identification followed by dealing with these issues poses a challenge for the delegates attending IITK MUN 2018. We expect the delegates to leave the conference with heightened skills of cooperation and compromise, mutual understanding, appreciation, tactfulness, and confidence.',
            'We are dedicated to making this conference a great learning experience for each and every participant and appeal to you - take the chance and join us, become a part of IITK MUN 2018, get involved, discuss, and make an impact.',
            'We are very much looking forward to IITK MUN 2018, to refocusing and exploring, to challenge both ourselves and the future participants – you!',
            '------------------------',
            'Secretary General',
            'IITK MUN 2018',
        ];
    }
    LetterComponent.prototype.ngOnInit = function () {
    };
    LetterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-letter',
            template: __webpack_require__(/*! ./letter.component.html */ "./src/app/homepage/components/about/letter/letter.component.html"),
            styles: [__webpack_require__(/*! ./letter.component.css */ "./src/app/homepage/components/about/letter/letter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LetterComponent);
    return LetterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/banner/banner.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/homepage/components/banner/banner.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._navbar{\r\n  position: fixed;\r\n  height: 14vh;\r\n  width: 100vw;\r\n  z-index: 6;\r\n}\r\n\r\n.logo{\r\n  padding-left: 64px;\r\n}\r\n\r\n._links{\r\n  padding-right: 64px;\r\n}\r\n\r\n.btn{\r\n  border-radius: 10rem;\r\n  color: #ffffff;\r\n  border: 2px solid #ffffff;\r\n  background: none;\r\n  line-height: 1;\r\n  padding: 0.75rem 1.5rem;\r\n  cursor: pointer;\r\n  min-height: 46px;\r\n}\r\n\r\n.btn:hover{\r\n  color: rgba(255, 255, 255, 0.5);\r\n  border-color: rgba(255, 255, 255, 0.5);\r\n  background-color: transparent;\r\n}\r\n\r\n.menu{\r\n  /* background-color: transparent; */\r\n  height: 40px;\r\n  width: 40px;\r\n  transition: .3s;\r\n  opacity: 0.5;\r\n  border-radius: 2px;\r\n  cursor: pointer;\r\n}\r\n\r\ni{\r\n  padding-right: 8px;\r\n}\r\n\r\n.menu:hover{\r\n  opacity: 1;\r\n}\r\n\r\nimg{\r\n  /* border-radius: 50%; */\r\n  height: 48px;\r\n  width: 48px;\r\n}\r\n\r\n.text{\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  color: white;\r\n  margin-left: 8px;\r\n}\r\n\r\n.bars{\r\n  width: 24px;\r\n  margin-top: 13px;\r\n}\r\n\r\n.bar1, .bar2, .bar3{\r\n  background-color: #ffffff;\r\n  height: 2px;\r\n  margin-bottom: 4px;\r\n  color: #ffffff;\r\n}\r\n\r\n.bar1{\r\n  width: 20px;\r\n}\r\n\r\n.bar2{\r\n  width: 100%;\r\n}\r\n\r\n.bar3{\r\n  width: 12px;\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n  ._links{\r\n    padding-right: 20px;\r\n  }\r\n  .logo{\r\n    padding-left: 20px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/banner/banner.component.html":
/*!******************************************************************!*\
  !*** ./src/app/homepage/components/banner/banner.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_navbar\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n  <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"none center\">\r\n    <div class=\"image\">\r\n      <img src=\"https://drive.google.com/uc?export=view&id=17uAAnoCbhM5yBUIUMICtFigefPTzPNse\" alt=\"\">\r\n    </div>\r\n    <div class=\"text\">Antaragni</div>\r\n  </div>\r\n  <div class=\"_links\" fxLayout=\"row\" fxLayoutGap=\"30px\">\r\n    <div class=\"btn\" (click)=\"onhit()\"><i class=\"fab fa-facebook-f\"></i>{{(loginService.isAuthenticated$| async)?'Dashboard': 'Log In'}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/components/banner/banner.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/homepage/components/banner/banner.component.ts ***!
  \****************************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_fblogin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/fblogin.service */ "./src/app/services/fblogin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BannerComponent = /** @class */ (function () {
    function BannerComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent.prototype.onhit = function () {
        var _this = this;
        this.loginService.isAuthenticated$.subscribe(function (res) { return res ? _this.router.navigateByUrl('/dashboard') : _this.loginService.signin(); });
    };
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/homepage/components/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/homepage/components/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [_services_fblogin_service__WEBPACK_IMPORTED_MODULE_1__["FbloginService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/committees/committee/committee.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/homepage/components/committees/committee/committee.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n    margin: 1rem;\r\n    border-bottom: 2px solid #fff;\r\n\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.content{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n\topacity: 0.9;\r\n    width: 55vw;\r\n    text-align: center;\r\n    padding: 1rem;\r\n\r\n}\r\n\r\n._close{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/committees/committee/committee.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/homepage/components/committees/committee/committee.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"committee\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"heading\" mat-dialog-title>{{data.name}}</div>\r\n  <div class=\"content\" mat-dialog-content fxFlexAlign=\"stretch\">\r\n    <p *ngFor=\"let para of data.content\">{{para}}</p>\r\n  </div>\r\n</div>\r\n\r\n<mat-dialog-actions class=\"_close\" align=\"end\" fxlayout=\"row\" fxLayoutAlign=\"end\">\r\n  <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\r\n</mat-dialog-actions> "

/***/ }),

/***/ "./src/app/homepage/components/committees/committee/committee.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/homepage/components/committees/committee/committee.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CommitteeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteeComponent", function() { return CommitteeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CommitteeComponent = /** @class */ (function () {
    function CommitteeComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CommitteeComponent.prototype.ngOnInit = function () {
    };
    CommitteeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-committee',
            template: __webpack_require__(/*! ./committee.component.html */ "./src/app/homepage/components/committees/committee/committee.component.html"),
            styles: [__webpack_require__(/*! ./committee.component.css */ "./src/app/homepage/components/committees/committee/committee.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CommitteeComponent);
    return CommitteeComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/committees/committees.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/homepage/components/committees/committees.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mcommittees{\r\n    min-height: 100vh;\r\n    margin-right: 19vw;\r\n}\r\n\r\n.m-heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n    display: block;\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.heading{\r\n    line-height: 1.6;\r\n    font-size: 1.25rem;\r\n    font-weight: 500;\r\n    color: white;\r\n    margin-top: 16px;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\nimg{\r\n    width: 18vw;\r\n    height: 10vw;\r\n    min-width: 180px;   \r\n    transition: 2s;\r\n}\r\n\r\n.image{\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.image:hover img{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n}\r\n\r\n.btn{\r\n    margin-bottom: 8px;\r\n    border-radius: 10rem;\r\n    color: #ffffff;\r\n    border: 2px solid #ffffff;\r\n    background: none;\r\n    line-height: .8;\r\n    padding: 0.75rem 1.5rem;\r\n    cursor: pointer;\r\n    min-height: 38px;\r\n}\r\n\r\n.btn:hover{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-color: rgba(255, 255, 255, 0.5);\r\n    background-color: transparent\r\n}\r\n\r\n.home-down{\r\n    cursor: pointer;\r\n}\r\n\r\n@-webkit-keyframes bounce {\r\n    0%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\r\n    50% {-webkit-transform: translateY(-20px);transform: translateY(-20px);}\r\n}\r\n\r\n@keyframes bounce {\r\n    0%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\r\n    50% {-webkit-transform: translateY(-20px);transform: translateY(-20px);}\r\n}\r\n\r\n.bounce {\r\n    border-radius:50%;\r\n    animation: bounce 2s infinite;\r\n    -webkit-animation: bounce 2s infinite;\r\n    -moz-animation: bounce 2s infinite;\r\n    -o-animation: bounce 2s infinite;\r\n}\r\n\r\n.fa{\r\n    font-size: 54px;\r\n    color: #fff;\r\n    margin-top: 1em;\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.mcommittees{\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n        min-height: unset;\r\n    }\r\n    .m-heading{\r\n\t\tfont-size: 2rem;\r\n    }\r\n    .wrap{\r\n        padding-bottom: 15vh;\r\n        margin-top: 90px;\r\n    }\r\n    img{\r\n        height: 39vw;\r\n        width: 70vw;\r\n    }\r\n    .heading{\r\n        margin-top: 5px;\r\n    }\r\n    .btn{\r\n        font-size: 0.8rem;\r\n        padding: .624 1;\r\n    }\r\n    .second{\r\n        margin-top: 10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/committees/committees.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/homepage/components/committees/committees.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\">\r\n  <div class=\"mcommittees\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"40px\">\r\n    <div class=\"m-heading\" fxFlexlayout=\"center\">Committees</div>\r\n    <div class=\"committees\" fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\" fxLayoutGap.xs=\"10px\">\r\n      <div class=\"committee\" *ngFor=\"let committee of committees.slice(0,3)\">\r\n        <div class=\"image\" (click)=\"openDialog(committee)\"><img [src]=\"committee.img\" alt=\"\"></div>\r\n        <div class=\"heading\">{{committee.name}}</div>\r\n        <div class=\"btn\" (click)=\"openDialog(committee)\">Learn More...</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"home-down bounce active\" *ngIf=\"!mobile\" (click)=\"scrollDown()\"><i class=\"fa fa-angle-down\"></i></div>\r\n  </div>\r\n  <div class=\"mcommittees second\" #two fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\" fxLayout.xs=\"column\" fxLayoutAlign.xs=\"center center\" fxLayoutGap.xs=\"10px\">\r\n    <div class=\"committee\" *ngFor=\"let committee of committees.slice(3,6)\">\r\n      <div class=\"image\" (click)=\"openDialog(committee)\"><img [src]=\"committee.img\" alt=\"\"></div>\r\n      <div class=\"heading\">{{committee.name}}</div>\r\n      <div class=\"btn\" (click)=\"openDialog(committee)\">Learn More...</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/components/committees/committees.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/homepage/components/committees/committees.component.ts ***!
  \************************************************************************/
/*! exports provided: CommitteesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommitteesComponent", function() { return CommitteesComponent; });
/* harmony import */ var _committee_committee_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./committee/committee.component */ "./src/app/homepage/components/committees/committee/committee.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommitteesComponent = /** @class */ (function () {
    function CommitteesComponent(dialog) {
        this.dialog = dialog;
        this.committees = [
            { name: 'UNHRC', img: 'https://goodelectronics.org/wp-content/uploads/sites/3/2017/06/event-strengthening-corporate-accountability-in-supply-chains.jpg', content: [
                    'The United Nations Human Rights Council, replacing the former United Nations Human Rights Commission, is an inter-governmental body within the United Nations framework with 47 member-States. It is responsible for the promotion and protection of all human rights on a global scale. It was established in 2006, and its Seat is at theUN offices at Geneva, Switzerland. As Ban Ki-moon stated, “all victims of human rights abuses should be able to look to the Human Rights Council as a forum and a springboard for action.” The council works closely with the Office of the High Commissioner for human rights.',
                    'UNHRC deals with topics that revolve around human rights violations. UNHRC abides by the many different human rights conventions. UNHRC employs special rapporteurs and working groups to keep states in check. These special rapporteurs and working groups investigate and intervene in individual cases and emergency human rights cases. These special rapporteurs create reports that are then published for the global community to view.',
                ] },
            { name: 'UNESCO', img: 'https://en.prothomalo.com/contents/cache/images/643x0x1/uploads/media/2016/03/26/c4029c5dfbf0caf7a7548d8e40307b0d-UNESCO.jpg', content: [
                    'UNESCO, The United Nations Educational, Scientific, and Cultural Organization gathers 195 member states and nine associate members. Prominent as the ‘‘intellectual agency of the UN’’ and founded in 1945, UNESCO today has its Headquarters in Paris open to the public with the flamboyant event calendar. UNESCO was founded under the flag of establishing humanity’s moral and intellectual solidarity after two unthinkably devastating World Wars. In today’s globalized and technologically advanced world UNESCO builds moral and intellectual solidarity throughout these activities:',
                    '‘‘Mobilizing for education: so that every child, boy or girl, has access to quality education as a fundamental human right and as a prerequisite for human development.',
                    'Building intercultural understanding: through the protection of heritage and support for cultural diversity. UNESCO created the idea of World Heritage to protect sites of outstanding universal value.',
                    'Pursuing scientific cooperation: such as early warning systems for tsunamis or trans-boundary water management agreements, to strengthen ties between nations and societies.',
                    'Protecting freedom of expression: an essential condition for democracy, development and human dignity.’’',
                ] },
            { name: 'UNGA DISEC', img: 'http://www.vhmun.com/wp-content/uploads/2017/01/disec.jpg', content: [
                    'The General Assembly (GA) was established under Chapter IV of the United Nations (UN) Charter. Since the General Assembly is the main organ of the United Nations and has representation from every UN member state, it can discuss a wide variety of world issues. As a result of the extensive spectrum of topics discussed by the UN, the General Assembly is made up of six different committees. Disarmament and International Security (DISEC) committee is one of them.',
                    'In light of the events in Hiroshima and Nagasaki, the first resolution by DISEC was created in 1946 to address international concerns for the “Establishment of a Commission to Deal with the Problems Raised by the Discovery of Atomic Energy.”',
                    'DISEC deals with topics that center around disarmament, global issues, and threats to peace that jeopardize international security. Under Article 11 of Chapter IV of the UN Charter, “The General Assembly may consider the general principles of co-operation in the maintenance of international peace and security, including the principles governing disarmament and the regulation of armament.”',
                ] },
            { name: 'ECOSOC', img: 'http://uc3mun.anudi.org/wp-content/uploads/2015/12/ecosoc.jpg', content: [
                    'The Economic and Social Council (ECOSOC), under the overall authority of the General Assembly, coordinates the economic and social work of the United Nations and the UN family of organizations. As the central forum for discussing international economic and social issues and for formulating policy recommendations, the Council plays a key role in fostering international cooperation for development. It also consults with non-governmental organizations (NGOs), thereby maintaining a vital link between the United Nations and civil society. It meets throughout the year and holds a major session in July, during which a high-level meeting of Ministers discusses major economic, social and humanitarian issues.',
                    'The work of ECOSOC involves so many issues it has many commissions to help it. Some are known as functional commissions. They meet regularly and report back to it on such issues as human rights, social development, the status of women, crime prevention, narcotic drugs, and science and technology.',
                ] },
            { name: 'LOK SABHA', img: 'https://drive.google.com/uc?export=view&id=1zSCGnVtDh5n3d3mTrdDG-N0tgf5_JtdX', content: [
                    'The Lok Sabha or House of the People is the lower house of the Parliament of India. The Lok Sabha meets in the Lok Sabha Chambers, Sansad Bhavan, Sansad Marg, New Delhi. Lok Sabha is composed of representatives of the people chosen by direct election on the basis of adult suffrage. The maximum strength of the House envisaged by the Constitution of India is 552. The total elective membership is distributed among the States in such a way that the ratio between the number of seats allotted to each State and the population of the State is, so far as practicable, the same for all States. Lok Sabha, unless sooner dissolved, continues for five years from the date appointed for its first meeting and the expiration of the period of five years operates as a dissolution of the House. However, while a proclamation of emergency is in operation, this period may be extended. It has various legislative, financial, and constitutional purposes.',
                ] },
            { name: 'WTO', img: 'https://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/12/20/Pictures/wto_05b61dd0-e578-11e7-bd8c-dad1885580ce.jpg', content: [
                    'The World Trade Organization (WTO) stands as the only global organization has legal and organizational powers on international trade. WTO headquarters is located in Geneva and has been active since 1995. The core of the organization is built up by the WTO agreements which direct the world’s trading system. WTO aims to assist all actors of the International ranging from the producers, exporters, and importers.',
                    'WTO has a multidimensional range of activity, serves as a platform for trade opening, a forum where trade negotiations held by governments. It is an ultimate decision organ on to settlement of the trade disputes and a place where the nations have a chance to solve their trading problems. WTO skeleton was built on the concept of negotiation, as it was seen in the Uruguay Rounds which host the birth of the organization. WTO aims to raise the independence of the worldwide trade. Hence it focused to abolish the trade barriers, lowering the trade tariffs and abrogate any restrictive trade measures.',
                ] },
        ];
        this.mobile = window.screen.width < 1024;
    }
    CommitteesComponent.prototype.openDialog = function (committee) {
        var dialogRef = this.dialog.open(_committee_committee_component__WEBPACK_IMPORTED_MODULE_0__["CommitteeComponent"], {
            data: committee,
        });
        // console.log(committee)
    };
    CommitteesComponent.prototype.scrollDown = function () {
        this.two.nativeElement.scrollIntoView({ behavior: "smooth" });
    };
    CommitteesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('two'),
        __metadata("design:type", Object)
    ], CommitteesComponent.prototype, "two", void 0);
    CommitteesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-committees',
            template: __webpack_require__(/*! ./committees.component.html */ "./src/app/homepage/components/committees/committees.component.html"),
            styles: [__webpack_require__(/*! ./committees.component.css */ "./src/app/homepage/components/committees/committees.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], CommitteesComponent);
    return CommitteesComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/contact/contact.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/components/contact/contact.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".team{\r\n  min-height: 100vh;\r\n  color: white;\r\n  margin-right: 19vw;\r\n}\r\n\r\n.member:hover img{\r\n  -webkit-filter: grayscale(100%);\r\n          filter: grayscale(100%);\r\n  border: 8px solid #ffffff;\r\n}\r\n\r\nimg{\r\n  height: 14vw;\r\n  width: 14vw;\r\n  border: 2px solid #ffffff;\r\n  border-radius: 50%;\r\n  -webkit-filter: grayscale(98%);\r\n          filter: grayscale(98%);\r\n  transition: 0.3s;\r\n  box-shadow: 0 0 40px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.image{\r\n  padding-bottom: 16px;\r\n}\r\n\r\n.name{\r\n  font-size: 1.25rem;\r\n  line-height: 1.6;\r\n  margin-bottom: .5rem;\r\n  font-weight: 500;\r\n}\r\n\r\n.position{\r\n  opacity: 0.75;\r\n  line-height: 0.75;\r\n  font-size: 80%;\r\n  font-weight: 400;\r\n  padding-bottom: .5rem;\r\n  margin-bottom: 0.5rem;\r\n  border-bottom: 2px solid white;\r\n}\r\n\r\n.phone, .email{\r\n  opacity: 0.75;\r\n  color: white;\r\n  font-size: 70%;\r\n  font-weight: 400;\r\n  line-height: 0.75;\r\n}\r\n\r\n.phone{\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.email{\r\n  margin-top: 0.2rem;\r\n}\r\n\r\n.phone i, .email .fa-envelope{\r\n  margin-right: 4px;\r\n}\r\n\r\n.heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n  display: block;\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.email .fa-circle{\r\n  font-size: 2px;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.social-links i{\r\n  background: transparent;\r\n  color: white;\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  margin-top: .5rem;\r\n  transition: .3s;\r\n}\r\n\r\n.social-links i:hover{\r\n  color: rgba(255,255,255,0.5);\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.team{\r\n    margin-right: 10px;\r\n    margin-top: 10px;\r\n    padding-top: 19vh;\r\n  }\r\n  .heading{\r\n\t\tfont-size: 2.4rem;\r\n  }\r\n  img{\r\n    height: 60vw;\r\n    width: 60vw\r\n  }\r\n  .name{\r\n    font-size: 1.5rem;\r\n  }\r\n  .position{\r\n    font-size: 1rem;\r\n  }\r\n  .phone, .email{\r\n    font-size: .9rem;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/contact/contact.component.html":
/*!********************************************************************!*\
  !*** ./src/app/homepage/components/contact/contact.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"team\" fxLayout=\"row-wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\" fxLayoutGap.xs=\"7vh\">\r\n  <div class=\"member\" *ngFor=\"let member of team\" fxLayout=\"column\" fxLayoutAlign=\"space-around center\">\r\n    <div class=\"image\"><img [src]=\"member.img\" alt=\"\"></div>\r\n    <div class=\"name\">{{member.name}}</div>\r\n    <div class=\"position\">{{member.post}}</div>\r\n    <div class=\"phone\"><i class=\"fas fa-mobile-alt\"></i>{{member.number}}</div>\r\n    <div class=\"email\"><i class=\"fa fa-envelope\"></i>{{member.mail}}<i class=\"fa fa-at\"></i>antaragni<small><i class=\"fa fa-circle\"></i></small>in</div>\r\n    <div class=\"social-links\" fxLayout=\"row\" fxLayoutAlign=\"space-around center\" fxLayoutGap=\"20px\">\r\n      <a [href]=\"member.fb\" target=\"_blank\" class=\"facebook\"><i class=\"fab fa-facebook-f\"></i></a>\r\n      <a [href]=\"'mailto:'+member.gmail\" class=\"google-plus\" target=\"_blank\"><i class=\"fab fa-google\"></i></a>\r\n      <a [href]=\"member.linked_in\" class=\"linkedin\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\r\n    </div>      \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/contact/contact.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/homepage/components/contact/contact.component.ts ***!
  \******************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(ui, ares) {
        this.ui = ui;
        this.ares = ares;
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ares.getArray('ca_team').subscribe(function (content) {
            _this.team = content['data'];
        });
        this.text = this.ares.getArray('ca_team_text');
        this.ui.goTeam.subscribe(function () { return _this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('services'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "services", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contact'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ContactComponent.prototype, "contact", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/homepage/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/homepage/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"], _services_content_service__WEBPACK_IMPORTED_MODULE_2__["ContentService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/faq/faq.component.css":
/*!***********************************************************!*\
  !*** ./src/app/homepage/components/faq/faq.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".faq{\r\n  min-height: 100vh;\r\n  margin-right: 19vw;\r\n}\r\n\r\n.heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n\tmargin-bottom: 1rem;\r\n}\r\n\r\n.questions{\r\n\ttext-align: justify;\r\n\tbackground-color: rgba(0, 0, 0, 0.2);\r\n\tpadding: 2em;\r\n\tborder-radius: 14px;\r\n}\r\n\r\n.question, .answer{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1;\r\n\tcolor: white;\r\n\twidth: 55vw;\r\n}\r\n\r\n.question{\r\n\topacity: 0.9;\r\n}\r\n\r\n.answer{\r\n\topacity: 0.75;\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.faq{\r\n\t\tmargin-right: 10px;\r\n\t\tpadding-top: 10vh;\r\n\t}\r\n\t.questions{\r\n\t\tpadding: 10px;\r\n\t\twidth: 80vw;\r\n\t\tline-height: 1.1\r\n\t}\r\n\t.question, .answer{\r\n\t\twidth: unset;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/faq/faq.component.html":
/*!************************************************************!*\
  !*** ./src/app/homepage/components/faq/faq.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"faq\" #faq fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"heading\">FAQs</div>\r\n    <div class=\"questions\" fxLayout=\"column\" fxLayoutGap=\"3vh\">\r\n    <div class=\"questions1\" *ngFor=\"let faq of faqs\" fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"1vh\">\r\n      <div class=\"question\">{{faq.question}}</div>\r\n      <div class=\"answer\">{{faq.answer}}</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/components/faq/faq.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/homepage/components/faq/faq.component.ts ***!
  \**********************************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/content.service */ "./src/app/services/content.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqComponent = /** @class */ (function () {
    function FaqComponent(ares) {
        this.ares = ares;
        this.faqs = [
            { question: 'Q. What is Model United Nations?', answer: 'Model United Nations (also Model UN or MUN) is an academic simulation of the United Nations that aims to educate and encourage participants to discuss about major issues concerning the world, topics in international relations, diplomacy and the United Nations agenda.' },
            { question: 'Q. What are the dates of IITK MUN?', answer: 'IITK MUN, is a three day conference and will be held from 12th-14th October 2018.' },
            { question: 'Q. Who can register for IITK MUN?', answer: 'All students with a valid ID card of their high school or college can register for IITK MUN.' },
            { question: 'Q. When will the registrations for delegates start?', answer: 'The registrations will be released very soon. Follow our Facebook page(Link this to our fb page) to stay updated!' },
            { question: 'Q. What awards will be provided at IITK MUN 2018?', answer: 'The awards will be presented at the discretion of the chairs of each committee and will include 1 Best Delegate and 1 Honorable Mentions/High Commendations. A Best Delegation award will also be provided, and 1 award to the best International Ambassador at the discretion of the Secretary General and the Organizing committee.' },
        ];
        this.len = this.faqs.length;
    }
    FaqComponent.prototype.ngOnInit = function () {
    };
    FaqComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/homepage/components/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/homepage/components/faq/faq.component.css")]
        }),
        __metadata("design:paramtypes", [_services_content_service__WEBPACK_IMPORTED_MODULE_1__["ContentService"]])
    ], FaqComponent);
    return FaqComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/footer/footer.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/homepage/components/footer/footer.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "i{\r\n  font-size: 24px;\r\n  color: rgba(255, 255, 255, 0.5);\r\n  margin: 0 8px;\r\n}\r\n\r\n.social-link:hover i{\r\n  color: rgba(255, 255, 255, 1);\r\n}\r\n\r\n.fa-linkedin{\r\n  color: unset;\r\n  background-color: rgba(255, 255, 255, 0.5);  \r\n}\r\n\r\n.social-link:hover .fa-linkedin{\r\n  color: unset;\r\n  background-color: rgba(255, 255, 255, 1);  \r\n}\r\n\r\n.social-link{\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n}\r\n\r\n.footer{\r\n  position: fixed;\r\n  z-index: 6;\r\n  bottom: 32px;\r\n  right: 64px;\r\n}\r\n\r\n@media(max-width: 1023px){\r\n  .footer{\r\n    bottom: 10px;\r\n    right: 12px;\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/footer/footer.component.html":
/*!******************************************************************!*\
  !*** ./src/app/homepage/components/footer/footer.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\r\n  <div class=\"social-links\" fxLayout=\"row\">\r\n    <div class=\"social-link\" *ngFor=\"let link of links\">\r\n      <i [class]=\"link.class\"></i>\r\n    </div>        \r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/homepage/components/footer/footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/homepage/components/footer/footer.component.ts ***!
  \****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.links = [
            { name: 'facebook', class: 'fab fa-facebook-f' },
            { name: 'youtube', class: 'fab fa-youtube' },
            { name: 'instagram', class: 'fab fa-instagram' },
            { name: 'linked_in', class: 'fab fa-linkedin-in' },
        ];
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/homepage/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/homepage/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/footer/mouse-down/mouse-down.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/homepage/components/footer/mouse-down/mouse-down.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mouse{\r\n    width: 18px;\r\n    height: 34px;\r\n    border-radius: 40px;\r\n    border: 1px solid rgba(255, 255, 255, 0.5);\r\n    position: absolute;\r\n    bottom: 38px;\r\n    left: 31vw;\r\n}\r\n\r\n.wheel{\r\n    width: 5px;\r\n    height: 5px;\r\n    border-radius: 50%;\r\n    position: relative;\r\n    top: 4px;\r\n    left: calc(50% - 2.5px);\r\n    background-color: white;\r\n    transition: 0.3s;\r\n}\r\n\r\n.mouse:hover .wheel{\r\n    top: calc(100% - 7.5px);\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/footer/mouse-down/mouse-down.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/homepage/components/footer/mouse-down/mouse-down.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mouse\" fxLayout=\"column\" fxLayoutAlign=\"\">\r\n  <div class=\"wheel\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/footer/mouse-down/mouse-down.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/homepage/components/footer/mouse-down/mouse-down.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MouseDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseDownComponent", function() { return MouseDownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MouseDownComponent = /** @class */ (function () {
    function MouseDownComponent() {
    }
    MouseDownComponent.prototype.ngOnInit = function () {
    };
    MouseDownComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mouse-down',
            template: __webpack_require__(/*! ./mouse-down.component.html */ "./src/app/homepage/components/footer/mouse-down/mouse-down.component.html"),
            styles: [__webpack_require__(/*! ./mouse-down.component.css */ "./src/app/homepage/components/footer/mouse-down/mouse-down.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MouseDownComponent);
    return MouseDownComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/home/home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/homepage/components/home/home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n    height: 5rem;\r\n    width: 40vw;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    border-bottom: 2px solid #fff;\r\n    margin-bottom: 6rem;\r\n    display: block;\r\n}\r\n\r\n.intro{\r\n    font-size: 1.5rem;\r\n    font-weight: normal;\r\n    margin-bottom: .5rem;\r\n    padding: 1em;\r\n}\r\n\r\n.text{\r\n    margin-bottom: 2rem;\r\n    color: white;\r\n    width: 35vw;\r\n}\r\n\r\n.home{\r\n    max-width: 100vw;\r\n    overflow: hidden;\r\n    height: 100vh;\r\n    padding-right: 19vw;\r\n}\r\n\r\nimg{\r\n    /* border-radius: 50%; */\r\n    height: 13vw;\r\n    width: 13vw;\r\n}\r\n\r\n.btn{\r\n    margin-bottom: 8px;\r\n    border-radius: 10rem;\r\n    color: #ffffff;\r\n    border: 2px solid #ffffff;\r\n    background: none;\r\n    line-height: 1;\r\n    padding: 0.75rem 1.5rem;\r\n    cursor: pointer;\r\n    min-height: 46px;\r\n    margin-left: 1em;\r\n}\r\n\r\n.btn:hover{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-color: rgba(255, 255, 255, 0.5);\r\n    background-color: transparent\r\n}\r\n\r\n.content{\r\n    max-width: 100vw;\r\n    overflow: hidden;\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.home{\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n        padding-right: unset;\r\n    }\r\n    .heading{\r\n        width: 76vw;\r\n        height: 3rem;\r\n    }\r\n    img{\r\n        height: 50vw;\r\n        width: 50vw;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/home/home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/homepage/components/home/home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\" [ngsReveal]=\"{ reset: true, cleanUp: true, scale: 1, viewOffset:{bottom: 30}, origin: 'bottom'}\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <img src=\"https://drive.google.com/uc?export=view&id=1m-ZbRF_SHLJp4O-ZevpCxTBD8FM-7-Vq\" alt=\"\" class=\"heading\">\r\n  <div class=\"content\" fxLayout=\"row\" fxLayoutGap=\"10vw\">\r\n    <div class=\"right-content\" fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngsReveal]=\"{scale: 1.2, viewOffset:{bottom: 0}}\">\r\n      <img class=\"logo\" src=\"https://drive.google.com/uc?export=view&id=1GGO7qa_Zr6UV71nU36XmnBNSpBXmzzRX\" alt=\"\">\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/home/home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/homepage/components/home/home.component.ts ***!
  \************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/homepage/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/homepage/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/landing/landing.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/components/landing/landing.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".arrow{\r\n  position: fixed;\r\n  bottom: 0;\r\n  right: 0;\r\n  color: red;\r\n  padding: 10px 3vmin;\r\n  opacity: 1;\r\n  transition: opacity 0.3s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.hideit{\r\n  opacity: 0;\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  .arrow{\r\n    bottom: 6vh;\r\n  }\r\n}\r\n\r\n.page-cover{\r\n  width: 100vw;\r\n  position: fixed;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -1;\r\n  overflow: hidden;\r\n}\r\n\r\n.page-cover:after {\r\n  content: \"\";\r\n  background: linear-gradient(to left, #D1335B, #00152e);\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  bottom: 0;\r\n  opacity: 0.7;\r\n}\r\n\r\n.cover-bg{\r\n  background-image: url(https://drive.google.com/uc?export=view&id=1SFQW3-_3NI_o1SKBfoRlFG9S5FOHpt8y);\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: cover;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-attachment: fixed;\r\n  z-index: -1;\r\n}\r\n\r\n.cover-bg-mask{\r\n  background-color: rgba(2, 3, 10, 0.7);\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  opacity: 1;\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/landing/landing.component.html":
/*!********************************************************************!*\
  !*** ./src/app/homepage/components/landing/landing.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-cover\">\r\n  <div class=\"cover-bg\"></div>\r\n  <div class=\"cover-bg-mask\"></div>\r\n  <particles [params]=\"myParams\" [style]=\"myStyle\" [width]=\"width\" [height]=\"height\"></particles>\r\n</div>\r\n<app-banner></app-banner>\r\n<app-sidenav></app-sidenav>\r\n<app-footer></app-footer>\r\n\r\n<!-- \r\n<div class=\"arrow\" [class.hideit]=\"visible$|async\" (click)=\"scrollup()\">\r\n  <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" version=\"1.1\" width=\"40px\" height=\"40px\"\r\n       fill=\"#FF6C00\">\r\n    <g id=\"surface1\">\r\n      <path\r\n        d=\"M 16 4.4375 L 15.09375 6.625 L 7.09375 25.625 L 6.1875 27.75 L 8.34375 26.9375 L 16 24.0625 L 23.65625\r\n          26.9375 L 25.8125 27.75 L 24.90625 25.625 L 16.90625 6.625 Z M 16 9.53125 L 22.1875 24.25 L 16.34375\r\n          22.0625 L 16 21.9375 L 15.65625 22.0625 L 9.8125 24.25 Z \">\r\n      </path>\r\n    </g>\r\n  </svg>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/homepage/components/landing/landing.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/homepage/components/landing/landing.component.ts ***!
  \******************************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(ui) {
        this.ui = ui;
        this.visible$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true);
        this.myStyle = {};
        this.myParams = {};
        this.width = 100;
        this.height = 100;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.myStyle = {
            'position': 'fixed',
            'width': '100vw',
            'height': '100vh',
            'z-index': 0,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
        this.myParams = {
            particles: {
                number: {
                    value: 50,
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 5,
                        color: '#fff'
                    },
                    polygon: {
                        nb_sides: 5
                    },
                    image: {
                        src: 'img/github.svg',
                        width: 100,
                        height: 100
                    }
                },
                opacity: {
                    value: 1,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 2,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.3,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: 'none',
                    random: true,
                    straight: false,
                    out_mode: 'in',
                    bounce: false,
                    attract: {
                        enable: true,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
        };
    };
    LandingComponent.prototype.scrollup = function () {
        this.ui.goTop.next(true);
    };
    LandingComponent.prototype.onScroll = function ($event) {
        if (window.scrollY > window.screen.height) {
            this.visible$.next(false);
        }
        else {
            this.visible$.next(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contact'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LandingComponent.prototype, "el", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], LandingComponent.prototype, "onScroll", null);
    LandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/homepage/components/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/homepage/components/landing/landing.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.css":
/*!*************************************************************************************************!*\
  !*** ./src/app/homepage/components/registeration/register-dialog/register-dialog.component.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n    margin: 1rem;\r\n    border-bottom: 2px solid #fff;\r\n\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.content{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n\topacity: 0.9;\r\n    text-align: center;\r\n    padding: 1rem;\r\n\r\n}\r\n\r\n._close{\r\n    color: white;\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/homepage/components/registeration/register-dialog/register-dialog.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"register\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"heading\">{{data.name}}</div>\r\n  <div class=\"content\" fxFlexAlign=\"stretch\">{{data.content}}</div>\r\n</div>\r\n\r\n<mat-dialog-actions class=\"_close\" align=\"end\" fxLayout=\"row\" fxLayoutAlign=\"end\">\r\n  <button mat-raised-button color=\"primary\">Register</button>\r\n  <button mat-raised-button color=\"warn\" mat-dialog-close>Close</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/homepage/components/registeration/register-dialog/register-dialog.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RegisterDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterDialogComponent", function() { return RegisterDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var RegisterDialogComponent = /** @class */ (function () {
    function RegisterDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    RegisterDialogComponent.prototype.ngOnInit = function () {
    };
    RegisterDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-dialog',
            template: __webpack_require__(/*! ./register-dialog.component.html */ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.html"),
            styles: [__webpack_require__(/*! ./register-dialog.component.css */ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], RegisterDialogComponent);
    return RegisterDialogComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/registeration/registeration.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/homepage/components/registeration/registeration.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".registeration{\r\n    min-height: 100vh;\r\n    margin-right: 19vw;\r\n}\r\n\r\n.heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n    display: block;\r\n    margin-bottom: 8vh;\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.content{\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n\topacity: 0.75;\r\n\twidth: 55vw;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    font-weight: normal;\r\n}\r\n\r\n.register{\r\n    border-radius: 0.3rem;\r\n}\r\n\r\n.register:nth-child(1) .btn{\r\n    background-color: rgb(63, 75, 98);\r\n}\r\n\r\n.register:nth-child(1) .btn:hover{\r\n    background-color: rgb(43, 51, 67);\r\n}\r\n\r\n.register:nth-child(2) .btn{\r\n    background-color: rgb(209, 51, 91);;\r\n}\r\n\r\n.register:nth-child(2) .btn:hover{\r\n    background-color: #8e233e;\r\n}\r\n\r\n.register:nth-child(3) .btn{\r\n    background-color: rgb(209, 51, 51);;\r\n}\r\n\r\n.register:nth-child(3) .btn:hover{\r\n    background-color: rgb(116, 17, 17);\r\n}\r\n\r\n.btn{\r\n    border-radius: 8rem;\r\n    color: #ffffff;\r\n    border: 1px solid #ffffff;\r\n    background: none;\r\n    line-height: .8;\r\n    padding: 0.75rem 1.5rem;\r\n    cursor: pointer;\r\n    min-height: 38px;\r\n}\r\n\r\nimg{\r\n    height: 18vw;\r\n    width: 18vw;\r\n    transition: 1s;\r\n}\r\n\r\n.image{\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n}\r\n\r\n.register:hover img{\r\n    -webkit-transform: scale(1.07);\r\n            transform: scale(1.07);\r\n}\r\n\r\n.img_footer{\r\n    width: 18vw;\r\n    height: 46px;\r\n    background-color: rgb(245, 245, 245)\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.registeration{\r\n        margin-left: 10px;\r\n        margin-right: 10px;\r\n        margin-bottom: 10rem;\r\n        margin-top: 2vh;\r\n        padding-top: 15vh;\r\n    }\r\n    .heading{\r\n        font-size: 2rem;\r\n        margin-bottom: 2vh;\r\n    }\r\n    img{\r\n        width: 60vw;\r\n        height: 60vw;\r\n    }\r\n    .btn{\r\n        min-height: 20px;\r\n        font-size: 1rem;\r\n        padding: 0.4rem .8rem;\r\n        margin: 1px 0;\r\n    }\r\n    .img_footer{\r\n        width: 60vw;\r\n        height: -webkit-max-content;\r\n        height: -moz-max-content;\r\n        height: max-content;\r\n        line-height: 0.4;\r\n    }\r\n    .content{\r\n        margin-bottom: 10px;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/registeration/registeration.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/homepage/components/registeration/registeration.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"registeration\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"heading\">Registration</div>\r\n  <div class=\"content\">\r\n    You can register as a\r\n  </div>\r\n  <div class=\"registers\" fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"30px\">\r\n    <div class=\"register\" *ngFor=\"let register of registers\" (click)=\"openDialog(register)\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"0px\">\r\n      <div class=\"image\">\r\n        <img [src]=\"register.url\" alt=\"\">\r\n      </div>\r\n      <div class=\"img_footer\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <div class=\"btn\" href=\"\">{{register.name}}</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/registeration/registeration.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/homepage/components/registeration/registeration.component.ts ***!
  \******************************************************************************/
/*! exports provided: RegisterationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterationComponent", function() { return RegisterationComponent; });
/* harmony import */ var _register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-dialog/register-dialog.component */ "./src/app/homepage/components/registeration/register-dialog/register-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterationComponent = /** @class */ (function () {
    function RegisterationComponent(dialog) {
        this.dialog = dialog;
        this.registers = [
            { id: 'delegate', url: 'https://drive.google.com/uc?export=view&id=1QIKTkoOMzQ2SRm9hzseAAg7yTfRddPTd', name: 'Delegate', content: "The delegates are there to represent the different countries in the committee, and the country\u2019s views and opinions.The delegation, is during a conference required to have created a position paper before recapping your country\u2019s stance in the issue and background info of the issue, later create a resolution in the conference and also speak in the third person." },
            { id: 'executive_board_bmember', url: 'https://drive.google.com/uc?export=view&id=1-jveor0whmVPdybKPUI1ylSizWn-Rbg1', name: 'Executive Board member', content: "The Executive Board of an MUN is comprised of individuals who have been selected after an extensive process of judging their merit and skills, verifying their experience, calculating the dynamics of the entire board with the requirements of the secretariat, only because they are going to be entrusted with one of the biggest tasks in making an MUN Conference successful \u2013 to guide their respective councils through debate on the agenda and throughout the debate, to judge the delegates who put in a tremendous effort to rise above the rest in all aspects of being a Delegate." },
            { id: 'international_press', url: 'http://leaderxpress.com/blog/wp-content/uploads/2015/10/Delegating-at-work.jpeg', name: 'International Press', content: "The job of the international press journalists is to act as unbiased journalists and present the happenings of the UN to the world. You will have to investigate and follow committee debates, edit articles and cover the committees events. As a journalist you are expected to be quirky, sharp and sly. You\u2019re meant to listen to the delegates debating and are allowed to ask questions. The questions put up by the journalists are normally sharp ripping half baked arguments into shreds." },
        ];
    }
    RegisterationComponent.prototype.openDialog = function (committee) {
        var dialogRef = this.dialog.open(_register_dialog_register_dialog_component__WEBPACK_IMPORTED_MODULE_0__["RegisterDialogComponent"], {
            data: committee,
        });
        // console.log(committee)
    };
    RegisterationComponent.prototype.ngOnInit = function () {
    };
    RegisterationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-registeration',
            template: __webpack_require__(/*! ./registeration.component.html */ "./src/app/homepage/components/registeration/registeration.component.html"),
            styles: [__webpack_require__(/*! ./registeration.component.css */ "./src/app/homepage/components/registeration/registeration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], RegisterationComponent);
    return RegisterationComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/resources/resources.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/homepage/components/resources/resources.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heading{\r\n\tcolor: white;\r\n\tfont-size: 3.5rem;\r\n\tfont-weight: 700;\r\n\tline-height: 1.1;\r\n\tdisplay: block;\r\n\tmargin-bottom: 2rem;\r\n\t/* text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2); */\r\n}\r\n\r\n.body{\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tline-height: 1.75;\r\n\tcolor: white;\r\n    opacity: 0.75;\r\n    margin-bottom: .5rem;\r\n}\r\n\r\n.content{\r\n    margin-bottom: 3rem;\r\n}\r\n\r\n.resources{\r\n\tmax-width: 800px;\r\n\theight: 100vh;\r\n\tmargin-right: 14vw;\r\n}\r\n\r\n.btn{\r\n    margin-bottom: 8px;\r\n    border-radius: 10rem;\r\n    color: #ffffff;\r\n    border: 2px solid #ffffff;\r\n    background: none;\r\n    line-height: 1;\r\n    padding: 0.75rem 1.5rem;\r\n    cursor: pointer;\r\n    min-height: 46px;\r\n}\r\n\r\n.btn:hover{\r\n    color: rgba(255, 255, 255, 0.5);\r\n    border-color: rgba(255, 255, 255, 0.5);\r\n    background-color: transparent\r\n}\r\n\r\n@media(max-width: 1023px) {\r\n\t.resources{\r\n        text-align: justify;\r\n        margin-right: 10px;\r\n        margin-left: 10px;\r\n        height: 70vh;\r\n\t}\r\n\t.heading{\r\n        font-size: 2rem;\r\n\t}\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/resources/resources.component.html":
/*!************************************************************************!*\
  !*** ./src/app/homepage/components/resources/resources.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"resources\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n  <div class=\"content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <div class=\"heading\">Resources</div>\r\n    <div class=\"body\">\r\n      We have gathered a bunch of resources for you!\r\n    </div>\r\n  </div> \r\n  <a class=\"btn\" href=\"http://mohit.antaragni.in/beta/\" target=\"_blank\">Resources!</a>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/resources/resources.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/components/resources/resources.component.ts ***!
  \**********************************************************************/
/*! exports provided: ResourcesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourcesComponent", function() { return ResourcesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = /** @class */ (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    ResourcesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resources',
            template: __webpack_require__(/*! ./resources.component.html */ "./src/app/homepage/components/resources/resources.component.html"),
            styles: [__webpack_require__(/*! ./resources.component.css */ "./src/app/homepage/components/resources/resources.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResourcesComponent);
    return ResourcesComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/sidenav/sidenav.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/homepage/components/sidenav/sidenav.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "._sidenav{\r\n    height:100vh;\r\n    background-color: transparent;\r\n    z-index: 5;\r\n}\r\n._side{\r\n    background-color: transparent;\r\n    width: 19vw;\r\n}\r\n.navigation{\r\n    color: rgba(141, 142, 150);\r\n    padding-top: 8px;\r\n    padding-bottom: 8px;\r\n    padding-left: 4.9vw;\r\n    font-size: 1rem;\r\n    font-weight: 400;\r\n    line-height: 1.5;\r\n    cursor: pointer;\r\n    transition: .5s;\r\n}\r\n.selected{\r\n    color: white;\r\n\r\n}\r\n.navigation:hover{\r\n    color: white;\r\n}\r\ni{\r\n    margin-right: 0.5vw;\r\n    padding: 0.3rem;\r\n    border-radius: 50%;\r\n    transition: .5s;\r\n    background-color: rgba(44,48,63,0.89);\r\n    width: 2rem;\r\n    text-align: center;\r\n}\r\n.navigation:hover i{\r\n    background-color: #fff;\r\n    color: rgba(141, 142, 150);\r\n}\r\n._container{\r\n    /* background: -webkit-gradient(linear, right top, left top, from(#D1335B), to(#00152e)); */\r\n    /* background: linear-gradient(to left, #D1335B, #00152e); */\r\n    background: transparent;\r\n}\r\n@media(max-width: 1023px){\r\n    ._side{\r\n        width: -webkit-max-content;\r\n        width: -moz-max-content;\r\n        width: max-content;\r\n    }\r\n    .navigation{\r\n        padding-left: 9px;\r\n    }\r\n    i{\r\n        width: 1.8rem;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/homepage/components/sidenav/sidenav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/homepage/components/sidenav/sidenav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"_container\">\r\n  <mat-sidenav-container class=\"_sidenav\" >\r\n    <mat-sidenav #sidenav class=\"_side\" mode=\"side\" opened fixedInViewport=\"true\" fixedTopGap=\"0\" fixedBottomGap=\"0\"  fxLayout=\"column\" fxLayoutAlign=\"center\">\r\n      <mat-nav-list class=\"_list\">\r\n        <div mat-list-item class=\"navigation\" role=\"navigation\"\r\n        *ngFor=\"let link of links; let i=index\" (click)=\"scrollto(i)\" [class.selected]=\"i ===inView\"\r\n        fxLayout=\"row\"\r\n        >\r\n        <i [class]=\"link.class\"></i>\r\n        <div *ngIf=\"!mobile\">{{link.name}}</div>\r\n      </div>\r\n      </mat-nav-list>\r\n    </mat-sidenav>\r\n    <mat-sidenav-content cdkscrollable (scroll)=\"scrollSpy($event)\">\r\n      <div #home>\r\n        <app-home></app-home>\r\n      </div>\r\n      <div #about>\r\n        <app-about #about></app-about>\r\n      </div>\r\n      <div #committees>\r\n        <app-committees></app-committees>\r\n      </div>\r\n      <div #resources>\r\n        <app-resources></app-resources>\r\n      </div>\r\n      <div #registeration>\r\n        <app-registeration></app-registeration>\r\n      </div>\r\n      <div #faq>\r\n        <app-faq></app-faq>\r\n      </div>\r\n      <div #contact>\r\n        <app-contact></app-contact>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</div>"

/***/ }),

/***/ "./src/app/homepage/components/sidenav/sidenav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/homepage/components/sidenav/sidenav.component.ts ***!
  \******************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidenavComponent = /** @class */ (function () {
    function SidenavComponent() {
        this.mobile = window.screen.width < 1024;
        this.inView = 0;
        this.links = [
            { name: 'Home', id: 'home', class: 'fa fa-home' },
            { name: 'About', id: 'about', class: 'fas fa-info' },
            { name: 'Committees', id: 'committees', class: 'fas fa-male' },
            { name: 'Resources', id: 'resources', class: 'fas fa-bookmark' },
            { name: 'Registeration', id: 'registeration', class: 'fas fa-book-open' },
            // {name: 'Ambassadors', id: 'ambassadors', class: 'fa fa-home'},
            { name: 'FAQ', id: 'faq', class: 'fas fa-question-circle' },
            { name: 'Contact Us', id: 'contact', class: 'fas fa-phone' },
        ];
    }
    SidenavComponent.prototype.scrollto = function (i) {
        if (i == 0)
            this.home.nativeElement.scrollIntoView({ behavior: "smooth" });
        if (i == 1)
            this.about.nativeElement.scrollIntoView({ behavior: "smooth" });
        if (i == 2)
            this.committees.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
        if (i == 3)
            this.resources.nativeElement.scrollIntoView({ behavior: "smooth" });
        if (i == 4) {
            if (this.mobile)
                this.registeration.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            else
                this.registeration.nativeElement.scrollIntoView({ behavior: "smooth" });
        }
        if (i == 5) {
            if (this.mobile)
                this.faq.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            else
                this.faq.nativeElement.scrollIntoView({ behavior: "smooth" });
        }
        if (i == 6) {
            if (this.mobile)
                this.contact.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
            else
                this.contact.nativeElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.scrollSpy = function ($event) {
        if ($event.srcElement.scrollTop <= window.screen.height / 2)
            this.inView = 0;
        if (($event.srcElement.scrollTop <= (window.screen.height * 3 / 2)) && ($event.srcElement.scrollTop > (window.screen.height / 2)))
            this.inView = 1;
        if (this.mobile) {
            if (($event.srcElement.scrollTop <= (window.screen.height * 38 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 3 / 2)))
                this.inView = 2;
            if (($event.srcElement.scrollTop <= (window.screen.height * 47 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 38 / 10)))
                this.inView = 3;
            if (($event.srcElement.scrollTop <= (window.screen.height * 62 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 47 / 10)))
                this.inView = 4;
            if (($event.srcElement.scrollTop <= (window.screen.height * 74 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 62 / 10)))
                this.inView = 5;
            if (($event.srcElement.scrollTop > (window.screen.height * 74 / 10)))
                this.inView = 6;
        }
        else {
            if (($event.srcElement.scrollTop <= (window.screen.height * 32 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 3 / 2)))
                this.inView = 2;
            if (($event.srcElement.scrollTop <= (window.screen.height * 39 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 32 / 10)))
                this.inView = 3;
            if (($event.srcElement.scrollTop <= (window.screen.height * 48 / 10)) && ($event.srcElement.scrollTop > (window.screen.height * 39 / 10)))
                this.inView = 4;
            if (($event.srcElement.scrollTop <= (window.screen.height * 11 / 2)) && ($event.srcElement.scrollTop > (window.screen.height * 48 / 10)))
                this.inView = 5;
            if (($event.srcElement.scrollTop > (window.screen.height * 11 / 2)))
                this.inView = 6;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('resources'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "resources", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('about'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "about", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('home'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "home", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('registeration'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "registeration", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('committees'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "committees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('contact'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "contact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('faq'),
        __metadata("design:type", Object)
    ], SidenavComponent.prototype, "faq", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/homepage/components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/homepage/components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/homepage/components/sponsors/sponsors.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/homepage/components/sponsors/sponsors.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  font-size: 46px;\r\n  font-family: Yanone_Kaffeesatz;\r\n}\r\n\r\n.containers{\r\n  width: 100%;\r\n  padding: 10vh 5vw;\r\n  overflow: hidden;\r\n  background-color: white;\r\n}\r\n\r\n.full-width-100{\r\n  width: 100%;\r\n}\r\n\r\nimg{\r\n  width: 20vw;\r\n  cursor: pointer;\r\n}\r\n\r\n@media (max-width: 1023px) {\r\n  img{\r\n    width: 70vw;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/homepage/components/sponsors/sponsors.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/homepage/components/sponsors/sponsors.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"containers\">\r\n  <h1>Sponsored By</h1>\r\n  <div fxLayout=\"row\" fxLayout.xs=\"column\" fxLayoutAlign=\"space-around center\" class=\"full-width-100\" fxLayoutGap.xs=\"20px\">\r\n    <div *ngFor=\"let sponsor of (sponsors|async)?.data\">\r\n      <a [href]=\"sponsor.link\" fxLayoutAlign=\"center center\" fxLayout=\"column\">\r\n        <img [src]=\"sponsor.img\" [alt]=\"sponsor.name\">\r\n        <!--<span>{{sponsor.name}}</span>-->\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/homepage/components/sponsors/sponsors.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/homepage/components/sponsors/sponsors.component.ts ***!
  \********************************************************************/
/*! exports provided: SponsorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorsComponent", function() { return SponsorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SponsorsComponent = /** @class */ (function () {
    function SponsorsComponent(afs) {
        this.afs = afs;
    }
    SponsorsComponent.prototype.ngOnInit = function () {
        this.sponsors = this.afs.doc(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contentCollectionName + "/ca_sponsors").valueChanges();
    };
    SponsorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sponsors',
            template: __webpack_require__(/*! ./sponsors.component.html */ "./src/app/homepage/components/sponsors/sponsors.component.html"),
            styles: [__webpack_require__(/*! ./sponsors.component.css */ "./src/app/homepage/components/sponsors/sponsors.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], SponsorsComponent);
    return SponsorsComponent;
}());



/***/ }),

/***/ "./src/app/mat-components/mat-components.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/mat-components/mat-components.module.ts ***!
  \*********************************************************/
/*! exports provided: MatComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatComponentsModule", function() { return MatComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MatComponentsModule = /** @class */ (function () {
    function MatComponentsModule() {
    }
    MatComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollDispatchModule"]
            ]
        })
    ], MatComponentsModule);
    return MatComponentsModule;
}());



/***/ }),

/***/ "./src/app/models/localuser.ts":
/*!*************************************!*\
  !*** ./src/app/models/localuser.ts ***!
  \*************************************/
/*! exports provided: LocalUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalUser", function() { return LocalUser; });
var LocalUser = /** @class */ (function () {
    function LocalUser() {
    }
    return LocalUser;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n  width: 100%;\r\n}\r\n\r\n.logo {\r\n  letter-spacing: 5px;\r\n  font-weight: 100;\r\n}\r\n\r\n.selected {\r\n  background-color: rgba(111, 66, 193, 0.1);\r\n  opacity: 1;\r\n}\r\n\r\n.home{\r\n  cursor: pointer;\r\n  height: 100%;\r\n}\r\n\r\n.home:hover{\r\n  font-weight: 900;\r\n}\r\n\r\ni {\r\n  margin: 0 15px;\r\n  padding: 12px 10px 12px 14px;\r\n  border-radius: 50%;\r\n  color: rgba(111, 66, 193, 0.7);\r\n  text-align: center;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-in;\r\n}\r\n\r\ni:hover {\r\n  background-color: rgba(111, 66, 193, 1);\r\n  color: white;\r\n}\r\n\r\nmat-tab-group {\r\n  max-width: calc(100vw - 50px);\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  i {\r\n    margin: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\">\r\n  <nav mat-tab-nav-bar>\r\n    <div class=\"logo\" fxLayout=\"row\" fxLayoutAlign=\"left center\">\r\n      <i class=\"fa fa-bars\" (click)=\"toggleit()\"></i>\r\n      <span class=\"mobile\" routerLink=\"\"><div class=\"home\">Home</div></span>\r\n    </div>\r\n    <div fxFlex=\"grow\" class=\"mobile\"></div>\r\n    <a mat-tab-link\r\n       *ngFor=\"let link of links\"\r\n       [routerLink]=\"link.id\"\r\n       [class.selected]=\"selectedLink === link.id\"\r\n       (click)=\"selectedLink = link.name\"\r\n       routerLinkActive #rla=\"routerLinkActive\">\r\n      {{link.name}}\r\n    </a>\r\n    <a mat-tab-link\r\n       (click)=\"logout()\"\r\n       routerLinkActive #rla=\"routerLinkActive\">\r\n      Logout\r\n    </a>\r\n  </nav>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var _services_fblogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/fblogin.service */ "./src/app/services/fblogin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(ui, fblogin) {
        this.ui = ui;
        this.fblogin = fblogin;
        this.links = [
            { name: 'Home', id: 'home' },
        ];
        this.selectedLink = 'home';
    }
    NavbarComponent.prototype.toggleit = function () {
        this.ui.sidenav.next(true);
    };
    NavbarComponent.prototype.logout = function () {
        this.fblogin.signOut();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], NavbarComponent.prototype, "selectedLink", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"], _services_fblogin_service__WEBPACK_IMPORTED_MODULE_2__["FbloginService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/services/content.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/*! exports provided: ContentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentService", function() { return ContentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentService = /** @class */ (function () {
    function ContentService(afs) {
        this.afs = afs;
        this.colName = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].contentCollectionName;
    }
    ContentService.prototype.getArray = function (name) {
        return this.afs.doc(this.colName + "/" + name).valueChanges();
    };
    ContentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [angularfire2_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], ContentService);
    return ContentService;
}());



/***/ }),

/***/ "./src/app/services/fblogin.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/fblogin.service.ts ***!
  \*********************************************/
/*! exports provided: FbloginService, DialogMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbloginService", function() { return FbloginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogMessageComponent", function() { return DialogMessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _utility_function__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utility/function */ "./src/app/utility/function.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_ui_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/ui.service */ "./src/app/services/ui.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var FbloginService = /** @class */ (function () {
    function FbloginService(router, afAuth, afs, functions, zone, ui, fb, dialogRef, http) {
        var _this = this;
        this.router = router;
        this.afAuth = afAuth;
        this.afs = afs;
        this.functions = functions;
        this.zone = zone;
        this.ui = ui;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.http = http;
        this.dataFetched = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userRef = function (id) { return _this.afs.doc("fbusers/" + id); };
        this.init = function () {
            _this.currentUser = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            _this.isAuthenticated$ = _this.afAuth.authState.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (res) { return !!res; }));
            _this.$logged = _this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (user) { return user ? _this.userRef(user.uid).valueChanges() : Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (err) {
                _this.functions.handleError(err.message);
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            }));
            _this.$logged.subscribe(function (users) {
                _this.currentUser.next(users);
                _this.dataFetched.next(!!users);
            });
        };
        this.signin = function () {
            _this.dataFetched.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_7__["distinctUntilChanged"])()).subscribe(function (val) { return val ? _this.zone.run(function () { return _this.router.navigate(['/dashboard']); }) : false; });
            var provider = new firebase__WEBPACK_IMPORTED_MODULE_9__["auth"].FacebookAuthProvider();
            // provider.addScope('user_posts,user_link,user_birthday');
            return _this.afAuth.auth.signInWithPopup(provider)
                .then(function (res) {
                _this.setUser(res, res);
                return res;
            })
                .catch(function (err) {
                _this.functions.handleError(err.message);
                if (err.message === 'FB is not defined') {
                    _this.dialogRef.open(DialogMessageComponent);
                }
            });
        };
        this.setUser = function (res, user) {
            return res.additionalUserInfo.isNewUser ?
                _this.userRef(res.user.uid).set({
                    uid: res.user.uid,
                    name: res.additionalUserInfo.profile.name,
                    email: {
                        value: res.additionalUserInfo.profile.email,
                        verified: res.user.emailVerified,
                    },
                    facebook: {
                        Token: res.credential.accessToken,
                        facebookID: res.additionalUserInfo.profile.id,
                        facebookLink: user.link ? user.link : '',
                    },
                    personal: {
                        gender: res.additionalUserInfo.profile.gender ? res.additionalUserInfo.profile.gender : '',
                        phoneNumber: res.user.phoneNumber,
                        picture: res.additionalUserInfo.profile.picture.data.url,
                        birthday: res.additionalUserInfo.profile.birthday ? res.additionalUserInfo.profile.birthday : ''
                    },
                    registration: {
                        post: ''
                    }
                }) : 200;
        };
        this.updateUser = function (user) { return _this.userRef(user.uid).set(__assign({}, user))
            .then(function () { return _this.currentUser.next(user); }); };
        this.init();
    }
    FbloginService.prototype.updateRegistration = function (user) {
        var _this = this;
        this.updateUser(user)
            .then(function () { return _this.zone.run(function () { return _this.router.navigate(['/dashboard/home']); }); })
            .catch(function (err) { return _this.functions.handleError(err); });
    };
    FbloginService.prototype.signOut = function () {
        var _this = this;
        this.afAuth.auth.signOut()
            .then(function () { return _this.zone.run(function () { return _this.router.navigate(['/']); }); })
            .catch(function (err) { return _this.functions.handleError(err.message); });
        this.ui.scrollPos.next(false);
    };
    FbloginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _utility_function__WEBPACK_IMPORTED_MODULE_5__["Funcs"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _services_ui_service__WEBPACK_IMPORTED_MODULE_8__["UiService"],
            ngx_facebook__WEBPACK_IMPORTED_MODULE_10__["FacebookService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]])
    ], FbloginService);
    return FbloginService;
}());

var DialogMessageComponent = /** @class */ (function () {
    function DialogMessageComponent() {
    }
    DialogMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: '<p>Some functions are not supported in firefox with tracking protection.<br>Please try other browser or switch off tracking</p>',
        })
    ], DialogMessageComponent);
    return DialogMessageComponent;
}());



/***/ }),

/***/ "./src/app/services/feed.ts":
/*!**********************************!*\
  !*** ./src/app/services/feed.ts ***!
  \**********************************/
/*! exports provided: AntaragniFeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntaragniFeedService", function() { return AntaragniFeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-facebook */ "./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var _fblogin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fblogin.service */ "./src/app/services/fblogin.service.ts");
/* harmony import */ var _utility_function__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/function */ "./src/app/utility/function.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AntaragniFeedService = /** @class */ (function () {
    function AntaragniFeedService(fb, loginService, fun, afs) {
        this.fb = fb;
        this.loginService = loginService;
        this.fun = fun;
        this.afs = afs;
        fb.init({
            appId: _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].fbAppID,
            version: 'v3.0'
        });
    }
    AntaragniFeedService.prototype.getAllPosts = function () {
        return this.afs.collection('fbpage', function (ref) { return ref.orderBy('created_time', 'desc'); }).valueChanges();
    };
    AntaragniFeedService.prototype.sharePost = function (link, id) {
        var _this = this;
        var params = {
            href: link,
            method: 'share'
        };
        return this.fb.ui(params)
            .then(function (res) {
            if (res.error_message) {
                _this.fun.handleError(res.error_message);
                return false;
            }
            else {
                _this.loginService.currentUser.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (user) {
                    return _this.fb.api(user.facebook.facebookID + '/feed', 'get', { fields: 'id', since: '-20 seconds', access_token: user.facebook.Token })
                        .then(function (posts) {
                        if (posts.data.length !== 0) {
                            user.campus.validPosts.push(posts.data[0].id);
                        }
                        user.campus.posts.push(id);
                        user.campus.shares += 5;
                        user.campus.totalPoints += 5;
                        return _this.loginService.updateUser(user);
                    });
                });
            }
            _this.fun.handleError('successfully shared');
            return true;
        }).catch(function (err) {
            _this.fun.handleError(err.message);
            return false;
        });
    };
    AntaragniFeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_facebook__WEBPACK_IMPORTED_MODULE_1__["FacebookService"],
            _fblogin_service__WEBPACK_IMPORTED_MODULE_2__["FbloginService"],
            _utility_function__WEBPACK_IMPORTED_MODULE_3__["Funcs"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], AntaragniFeedService);
    return AntaragniFeedService;
}());



/***/ }),

/***/ "./src/app/services/payment.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/payment.service.ts ***!
  \*********************************************/
/*! exports provided: PaymentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentService", function() { return PaymentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.service */ "./src/app/services/script.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaymentService = /** @class */ (function () {
    function PaymentService(scriptService) {
        this.scriptService = scriptService;
        this.waitPromise = scriptService.loadScript('townscript');
    }
    PaymentService.prototype.showPopup = function (data) {
        this.waitPromise.then(function () { return popupWithAutoFill(data); });
    };
    PaymentService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_script_service__WEBPACK_IMPORTED_MODULE_1__["ScriptService"]])
    ], PaymentService);
    return PaymentService;
}());



/***/ }),

/***/ "./src/app/services/script.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/script.service.ts ***!
  \********************************************/
/*! exports provided: ScriptService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptService", function() { return ScriptService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _script_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.store */ "./src/app/services/script.store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScriptService = /** @class */ (function () {
    function ScriptService() {
        var _this = this;
        this.scripts = {};
        _script_store__WEBPACK_IMPORTED_MODULE_1__["ScriptStore"].forEach(function (script) {
            _this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    ScriptService.prototype.load = function () {
        var _this = this;
        var scripts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scripts[_i] = arguments[_i];
        }
        var promises = [];
        scripts.forEach(function (script) { return promises.push(_this.loadScript(script)); });
        return Promise.all(promises);
    };
    ScriptService.prototype.loadScript = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // resolve if already loaded
            if (_this.scripts[name].loaded) {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
            else {
                // For universal rendering
                if (document) {
                    // load script
                    var script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = _this.scripts[name].src;
                    // script.async = true;
                    // script.defer = true;
                    // if (script.readyState) {  // For IE (Not supported by Angular)
                    //   script.onreadystatechange = () => {
                    //     if (script.readyState === "loaded" || script.readyState === "complete") {
                    //       script.onreadystatechange = null;
                    //       this.scripts[name].loaded = true;
                    //       resolve({script: name, loaded: true, status: 'Loaded'});
                    //     }
                    //   };
                    // } else {  // Others
                    script.onload = function () {
                        _this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                    script.onerror = function (error) { return reject({ script: name, loaded: false, status: 'Loaded' }); };
                    document.getElementsByTagName('head')[0].appendChild(script);
                }
            }
        });
    };
    ScriptService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], ScriptService);
    return ScriptService;
}());



/***/ }),

/***/ "./src/app/services/script.store.ts":
/*!******************************************!*\
  !*** ./src/app/services/script.store.ts ***!
  \******************************************/
/*! exports provided: ScriptStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
var ScriptStore = [
    { name: 'townscript', src: 'https://www.townscript.com/popup-widget/townscript-widget.nocache.js' },
    { name: 'facebook', src: 'https://connect.facebook.net/en_US/sdk.js' }
];


/***/ }),

/***/ "./src/app/services/ui.service.ts":
/*!****************************************!*\
  !*** ./src/app/services/ui.service.ts ***!
  \****************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiService = /** @class */ (function () {
    function UiService() {
        this.sidenav = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.scrollPos = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.goAbout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.goWhy = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.goTeam = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.goFaq = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.goTop = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    UiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works! yo\r\n</p>\r\n<button (click)=\"payNow()\" class=\"btn btn-primary pay\">₹add: Register</button>\r\n<!--   <button (click)=\"payNow((inputCity|async)?.link)\" class=\"btn btn-primary pay\">\r\n    ₹{{inputEvent.price}}: Register\r\n</button> -->"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_payment_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/payment.service */ "./src/app/services/payment.service.ts");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs-compat/_esm5/add/operator/switchMap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponent = /** @class */ (function () {
    function TestComponent(paymentService) {
        this.paymentService = paymentService;
    }
    TestComponent.prototype.payNow = function () {
        this.paymentService.showPopup({
            eventcode: 'chandigarh-nationals-antaragni18-314013',
            ticketname1: 'Non IITK',
            ticketvalue1: 1
        });
    };
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_services_payment_service__WEBPACK_IMPORTED_MODULE_1__["PaymentService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/utility/function.ts":
/*!*************************************!*\
  !*** ./src/app/utility/function.ts ***!
  \*************************************/
/*! exports provided: Funcs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funcs", function() { return Funcs; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Funcs = /** @class */ (function () {
    function Funcs(snackbar) {
        this.snackbar = snackbar;
    }
    Funcs.prototype.handleError = function (error) {
        if (error === void 0) { error = 'check your internet Connection'; }
        this.snackbar.open(error, '', {
            duration: 4000
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(500);
    };
    Funcs = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], Funcs);
    return Funcs;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyCDqG_OzK9b-YaQ0rpzoOxkDP11U-X9zmE',
        authDomain: 'espalda-fin.firebaseapp.com',
        databaseURL: 'https://espalda-fin.firebaseio.com',
        projectId: 'espalda-fin',
        storageBucket: 'gs://espalda-fin.appspot.com/',
        messagingSenderId: '74163403274'
    },
    contentCollectionName: '_contents_',
    fbAppID: '266808170392437',
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\vabs\antaragni\mun\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map