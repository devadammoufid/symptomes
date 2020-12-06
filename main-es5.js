function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _pages_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pages/symptoms/symptoms.component */
    "./src/app/pages/symptoms/symptoms.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");

    var routes = [// { path: 'stats',  component: DashboardComponent},
    {
      path: '',
      component: _pages_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_0__["SymptomsComponent"]
    }, // { path: 'country/:name', component : CountryComponent},
    // { path: 'login', component : LoginComponent},
    {
      path: '**',
      component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        useHash: true
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
            useHash: true
          })]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");

    var AppComponent = function AppComponent(matIconRegistry, domSanitizer, translate) {
      _classCallCheck(this, AppComponent);

      this.matIconRegistry = matIconRegistry;
      this.domSanitizer = domSanitizer;
      this.translate = translate;
      var userLang = navigator.language;
      console.log(userLang.substring(0, 2));
      translate.addLangs(['en', 'fr']); // translate.setDefaultLang("fr");

      var lng = userLang.substring(0, 2);
      if (lng === 'en' || lng === 'fr') translate.setDefaultLang(lng);else translate.setDefaultLang("en");
      this.matIconRegistry.addSvgIcon("my_icon_users_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/user_gray.svg"));
      this.matIconRegistry.addSvgIcon("analytics_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/analytics_gray.svg"));
      this.matIconRegistry.addSvgIcon("app_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/app_gray.svg"));
      this.matIconRegistry.addSvgIcon("dashboard_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/dashboard_gray.svg"));
      this.matIconRegistry.addSvgIcon("deconnecting_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/deconnecting_gray.svg"));
      this.matIconRegistry.addSvgIcon("parameters_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/parameters_gray.svg"));
      this.matIconRegistry.addSvgIcon("validation_gray", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/validation_gray.svg"));
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-layout");
        }
      },
      directives: [_layouts_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, httpTranslateLoader */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpTranslateLoader", function () {
      return httpTranslateLoader;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./layouts/layout.component */
    "./src/app/layouts/layout.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./layouts/topbar/topbar.component */
    "./src/app/layouts/topbar/topbar.component.ts");
    /* harmony import */


    var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layouts/navbar/navbar.component */
    "./src/app/layouts/navbar/navbar.component.ts");
    /* harmony import */


    var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./layouts/footer/footer.component */
    "./src/app/layouts/footer/footer.component.ts");
    /* harmony import */


    var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/dashboard/dashboard.component */
    "./src/app/pages/dashboard/dashboard.component.ts");
    /* harmony import */


    var _pages_country_country_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./pages/country/country.component */
    "./src/app/pages/country/country.component.ts");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/not-found/not-found.component */
    "./src/app/pages/not-found/not-found.component.ts");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/fire/analytics */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-analytics.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _page_auth_login_login_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./page/auth/login/login.component */
    "./src/app/page/auth/login/login.component.ts");
    /* harmony import */


    var _pages_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./pages/symptoms/symptoms.component */
    "./src/app/pages/symptoms/symptoms.component.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _pages_bottomsheet_symptoms_bottomsheet_symptoms_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./pages/bottomsheet-symptoms/bottomsheet-symptoms.component */
    "./src/app/pages/bottomsheet-symptoms/bottomsheet-symptoms.component.ts");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @ngx-translate/http-loader */
    "./node_modules/@ngx-translate/http-loader/__ivy_ngcc__/fesm2015/ngx-translate-http-loader.js");

    var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {};

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_22__["ScreenTrackingService"], {
        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
        useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig, 'worldcovid19live'), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_22__["AngularFireAnalyticsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production,
        registrationStrategy: 'registerImmediately'
      }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateLoader"],
          useFactory: httpTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
        }
      })]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_14__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_18__["CountupComponent"], _page_auth_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"], _pages_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_29__["SymptomsComponent"], _pages_bottomsheet_symptoms_bottomsheet_symptoms_component__WEBPACK_IMPORTED_MODULE_31__["BottomsheetSymptomsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"], _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_22__["AngularFireAnalyticsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _layouts_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _layouts_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_10__["TopbarComponent"], _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"], _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _pages_country_country_component__WEBPACK_IMPORTED_MODULE_14__["CountryComponent"], _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_17__["NotFoundComponent"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_18__["CountupComponent"], _page_auth_login_login_component__WEBPACK_IMPORTED_MODULE_28__["LoginComponent"], _pages_symptoms_symptoms_component__WEBPACK_IMPORTED_MODULE_29__["SymptomsComponent"], _pages_bottomsheet_symptoms_bottomsheet_symptoms_component__WEBPACK_IMPORTED_MODULE_31__["BottomsheetSymptomsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_21__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].firebaseConfig, 'worldcovid19live'), _angular_fire_analytics__WEBPACK_IMPORTED_MODULE_22__["AngularFireAnalyticsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PerfectScrollbarModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_19__["ModalModule"].forRoot(), _angular_service_worker__WEBPACK_IMPORTED_MODULE_15__["ServiceWorkerModule"].register('ngsw-worker.js', {
            enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_16__["environment"].production,
            registrationStrategy: 'registerImmediately'
          }), _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_23__["MatSidenavModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_26__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_30__["MatBottomSheetModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDividerModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_34__["MatChipsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateModule"].forRoot({
            loader: {
              provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_35__["TranslateLoader"],
              useFactory: httpTranslateLoader,
              deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]]
            }
          })],
          providers: [_angular_fire_analytics__WEBPACK_IMPORTED_MODULE_22__["ScreenTrackingService"], {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_9__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
          }, {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"],
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_7__["HashLocationStrategy"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })(); // AOT compilation support


    function httpTranslateLoader(http) {
      return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_36__["TranslateHttpLoader"](http);
    }
    /***/

  },

  /***/
  "./src/app/core/services/getdata.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/services/getdata.service.ts ***!
    \**************************************************/

  /*! exports provided: GetdataService */

  /***/
  function srcAppCoreServicesGetdataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetdataService", function () {
      return GetdataService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"];

    var GetdataService = /*#__PURE__*/function () {
      function GetdataService(_http) {
        _classCallCheck(this, GetdataService);

        this._http = _http; // private host = "http://localhost:3000"
        // private host = "https://api.worldcovid19.live"

        this.host = "https://dev1.covid-pass.tech";
      }

      _createClass(GetdataService, [{
        key: "getAll",
        value: function getAll(type) {
          return this._http.get("".concat(this.host, "/countries?sort=").concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getCountry",
        value: function getCountry(name) {
          return this._http.get("".concat(this.host, "/countries/").concat(name)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimeline",
        value: function getTimeline() {
          return this._http.get("".concat(this.host, "/timeline")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineCountry",
        value: function getTimelineCountry(country) {
          return this._http.get("".concat(this.host, "/timeline/").concat(country)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getTimelineGlobal",
        value: function getTimelineGlobal() {
          return this._http.get("".concat(this.host, "/timeline/global")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "getSymptoms",
        value: function getSymptoms() {
          return this._http.get("".concat(this.host, "/symptoms")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          window.alert("Please check your internet connection!.");
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
        }
      }]);

      return GetdataService;
    }();

    GetdataService.ɵfac = function GetdataService_Factory(t) {
      return new (t || GetdataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    GetdataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetdataService,
      factory: GetdataService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetdataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/footer/footer.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/footer/footer.component.ts ***!
    \****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppLayoutsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 10,
      vars: 0,
      consts: [[1, "footer"], [1, "container-fluid"], [1, "row"], [1, "col-md-6"], [1, "text-danger"], [1, "fas", "fa-heart"], ["href", "https://www.roby.taxi/"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 2020 \xA9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ROBY-TECHNOLOGIES.COM ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " All rights reserved. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/layout.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/layouts/layout.component.ts ***!
    \*********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppLayoutsLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var LayoutComponent = /*#__PURE__*/function () {
      function LayoutComponent() {
        _classCallCheck(this, LayoutComponent);

        this.showMobileMenu = false;
      }

      _createClass(LayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }]);

      return LayoutComponent;
    }();

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)();
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 1,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["mat-list-item[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\nmat-drawer[_ngcontent-%COMP%] {\n  box-shadow: 0 0 45px 0 rgba(0, 0, 0, 0.12);\n  margin-right: 20px;\n}\n\nmat-drawer-container[_ngcontent-%COMP%]   mat-nav-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   .icon-nav[_ngcontent-%COMP%] {\n  font-size: 100px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy9EOlxcd29ya1xccm9ieVxccm9ieS1jb3ZpZDE5LWZyb250L3NyY1xcYXBwXFxsYXlvdXRzXFxsYXlvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvbGF5b3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQ0NKOztBRENBO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtBQ0VKOztBRElZO0VBQ0ksMkJBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL2xheW91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1saXN0LWl0ZW17XHJcbiAgICBtYXJnaW46IDIwcHggMDtcclxufVxyXG5tYXQtZHJhd2Vye1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQ1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG5cclxufVxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lcntcclxuICAgIG1hdC1uYXYtbGlzdCB7XHJcbiAgICAgICAgbWF0LWxpc3QtaXRlbXtcclxuICAgICAgICAgICAgLmljb24tbmF2e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iLCJtYXQtbGlzdC1pdGVtIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbm1hdC1kcmF3ZXIge1xuICBib3gtc2hhZG93OiAwIDAgNDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxubWF0LWRyYXdlci1jb250YWluZXIgbWF0LW5hdi1saXN0IG1hdC1saXN0LWl0ZW0gLmljb24tbmF2IHtcbiAgZm9udC1zaXplOiAxMDBweCAhaW1wb3J0YW50O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-layout',
          templateUrl: './layout.component.html',
          styleUrls: ['./layout.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/layouts/navbar/navbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/navbar/navbar.component.ts ***!
    \****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppLayoutsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showMobileMenu = false;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // activate menu item based on location
          var links = document.getElementsByClassName('side-nav-link-ref');
          var matchingMenuItem = null; // tslint:disable-next-line: prefer-for-of

          for (var i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
              matchingMenuItem = links[i];
              break;
            }
          }

          if (matchingMenuItem) {
            matchingMenuItem.classList.add('active');
            var parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */

            if (parent) {
              parent.classList.add('active');
              var parent2 = parent.parentElement;

              if (parent2) {
                parent2.classList.add('in');
              }

              var parent3 = parent2.parentElement;

              if (parent3) {
                parent3.classList.add('active');
                var childAnchor = parent3.querySelector('.has-dropdown');

                if (childAnchor) {
                  childAnchor.classList.add('active');
                }
              }

              var parent4 = parent3.parentElement;

              if (parent4) {
                parent4.classList.add('in');
              }

              var parent5 = parent4.parentElement;

              if (parent5) {
                parent5.classList.add('active');
              }
            }
          }
        }
        /**
         * On menu click
         */

      }, {
        key: "onMenuClick",
        value: function onMenuClick(event) {
          var nextEl = event.target.nextSibling;

          if (nextEl && !nextEl.classList.contains('open')) {
            var parentEl = event.target.parentNode;

            if (parentEl) {
              parentEl.classList.remove('open');
            }

            nextEl.classList.add('open');
          } else if (nextEl) {
            nextEl.classList.remove('open');
          }

          return false;
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      inputs: {
        showMobileMenu: "showMobileMenu"
      },
      decls: 2,
      vars: 0,
      consts: [[1, "topbar-menu"], [1, "container-fluid"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        showMobileMenu: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/layouts/topbar/topbar.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/layouts/topbar/topbar.component.ts ***!
    \****************************************************/

  /*! exports provided: TopbarComponent */

  /***/
  function srcAppLayoutsTopbarTopbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopbarComponent", function () {
      return TopbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TopbarComponent = /*#__PURE__*/function () {
      function TopbarComponent() {
        _classCallCheck(this, TopbarComponent);

        this.showButton = false;
      }

      _createClass(TopbarComponent, [{
        key: "onbeforeinstallprompt",
        value: function onbeforeinstallprompt(e) {
          console.log(e); // Prevent Chrome 67 and earlier from automatically showing the prompt

          e.preventDefault(); // Stash the event so it can be triggered later.

          this.deferredPrompt = e;
          this.showButton = true;
        }
      }, {
        key: "addToHomeScreen",
        value: function addToHomeScreen() {
          // // hide our user interface that shows our A2HS button
          // this.showButton = false;
          // // Show the prompt
          // this.deferredPrompt.prompt();
          // // Wait for the user to respond to the prompt
          // this.deferredPrompt.userChoice
          // .then((choiceResult) => {
          // if (choiceResult.outcome === 'accepted') {
          //   console.log('User accepted the A2HS prompt');
          // } else {
          //   console.log('User dismissed the A2HS prompt');
          // }
          // this.deferredPrompt = null;
          window.location.href = "https://www.roby.taxi/home/stores/"; // });
        }
      }, {
        key: "vistWebsite",
        value: function vistWebsite() {
          window.location.href = "https://www.roby.taxi//";
        }
      }]);

      return TopbarComponent;
    }();

    TopbarComponent.ɵfac = function TopbarComponent_Factory(t) {
      return new (t || TopbarComponent)();
    };

    TopbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopbarComponent,
      selectors: [["app-topbar"]],
      hostBindings: function TopbarComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeinstallprompt", function TopbarComponent_beforeinstallprompt_HostBindingHandler($event) {
            return ctx.onbeforeinstallprompt($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 17,
      vars: 6,
      consts: [["href", "", 1, "logo"], ["src", "../../../assets/name_covidpass/name_covidpass.svg", "alt", "", 2, "width", "150px !important"], [1, "menu-spacer"], ["mat-button", "", 3, "routerLink"]],
      template: function TopbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar-row");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Accounts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Contacts ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Create Contact ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Activities ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Create Activity ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/accounts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/create-account");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/create-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/activities");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/create-activity");
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0cy90b3BiYXIvRDpcXHdvcmtcXHJvYnlcXHJvYnktY292aWQxOS1mcm9udC9zcmNcXGFwcFxcbGF5b3V0c1xcdG9wYmFyXFx0b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xheW91dHMvdG9wYmFyL3RvcGJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXRzL3RvcGJhci90b3BiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbm1hdC10b29sYmFye1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmxvZ297XHJcbiAgIFxyXG4gICAgXHJcbn0iLCJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-topbar',
          templateUrl: './topbar.component.html',
          styleUrls: ['./topbar.component.scss']
        }]
      }], function () {
        return [];
      }, {
        onbeforeinstallprompt: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:beforeinstallprompt', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/page/auth/login/login.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/page/auth/login/login.component.ts ***!
    \****************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppPageAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)();
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 2,
      vars: 0,
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2UvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/bottomsheet-symptoms/bottomsheet-symptoms.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/bottomsheet-symptoms/bottomsheet-symptoms.component.ts ***!
    \******************************************************************************/

  /*! exports provided: BottomsheetSymptomsComponent */

  /***/
  function srcAppPagesBottomsheetSymptomsBottomsheetSymptomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomsheetSymptomsComponent", function () {
      return BottomsheetSymptomsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");

    var BottomsheetSymptomsComponent = /*#__PURE__*/function () {
      function BottomsheetSymptomsComponent(_bottomSheetRef) {
        _classCallCheck(this, BottomsheetSymptomsComponent);

        this._bottomSheetRef = _bottomSheetRef;
      }

      _createClass(BottomsheetSymptomsComponent, [{
        key: "openLink",
        value: function openLink(event) {
          this._bottomSheetRef.dismiss();

          event.preventDefault();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BottomsheetSymptomsComponent;
    }();

    BottomsheetSymptomsComponent.ɵfac = function BottomsheetSymptomsComponent_Factory(t) {
      return new (t || BottomsheetSymptomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]));
    };

    BottomsheetSymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BottomsheetSymptomsComponent,
      selectors: [["app-bottomsheet-symptoms"]],
      decls: 3,
      vars: 0,
      consts: [[1, "bottom-sheet"]],
      template: function BottomsheetSymptomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "bottomsheet-symptoms works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".bottom-sheet[_ngcontent-%COMP%] {\n  margin: 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm90dG9tc2hlZXQtc3ltcHRvbXMvRDpcXHdvcmtcXHJvYnlcXHJvYnktY292aWQxOS1mcm9udC9zcmNcXGFwcFxccGFnZXNcXGJvdHRvbXNoZWV0LXN5bXB0b21zXFxib3R0b21zaGVldC1zeW1wdG9tcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm90dG9tc2hlZXQtc3ltcHRvbXMvYm90dG9tc2hlZXQtc3ltcHRvbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm90dG9tc2hlZXQtc3ltcHRvbXMvYm90dG9tc2hlZXQtc3ltcHRvbXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm90dG9tLXNoZWV0e1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxufSIsIi5ib3R0b20tc2hlZXQge1xuICBtYXJnaW46IDBweCAyMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomsheetSymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bottomsheet-symptoms',
          templateUrl: './bottomsheet-symptoms.component.html',
          styleUrls: ['./bottomsheet-symptoms.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/country/country.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/country/country.component.ts ***!
    \****************************************************/

  /*! exports provided: CountryComponent */

  /***/
  function srcAppPagesCountryCountryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountryComponent", function () {
      return CountryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");

    function CountryComponent_h2_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r15.countryCodes[ctx_r15.country.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", ctx_r15.country.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r15.country.country, "'s Statistics");
      }
    }

    function CountryComponent_h4_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h4", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r16.country.country, "'s Cases Distribution ");
      }
    }

    function CountryComponent_span_117_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r17.totalRecoveries / ctx_r17.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_118_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function CountryComponent_span_128_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, ctx_r20.totalDeaths / ctx_r20.finishedCases * 100, ".1-2"), "%");
      }
    }

    function CountryComponent_ng_template_129_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "N/A");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var CountryComponent = /*#__PURE__*/function () {
      function CountryComponent(route, _getDataService, zone) {
        _classCallCheck(this, CountryComponent);

        this.route = route;
        this._getDataService = _getDataService;
        this.zone = zone;
        this.isLoading = true;
        this.totalCases = 0;
        this.totalDeaths = 0;
        this.totalCritical = 0;
        this.todayCases = 0;
        this.todayDeaths = 0;
        this.activeCases = 0;
        this.casesPer1M = 0;
        this.finishedCases = 0;
        this.countryCodes = {
          'Afghanistan': 'AF',
          'Aland Islands': 'AX',
          'Albania': 'AL',
          'Algeria': 'DZ',
          'American Samoa': 'AS',
          'Andorra': 'AD',
          'Angola': 'AO',
          'Anguilla': 'AI',
          'Antarctica': 'AQ',
          'Antigua And Barbuda': 'AG',
          'Argentina': 'AR',
          'Armenia': 'AM',
          'Aruba': 'AW',
          'Australia': 'AU',
          'Austria': 'AT',
          'Azerbaijan': 'AZ',
          'Bahamas': 'BS',
          'Bahrain': 'BH',
          'Bangladesh': 'BD',
          'Barbados': 'BB',
          'Belarus': 'BY',
          'Belgium': 'BE',
          'Belize': 'BZ',
          'Benin': 'BJ',
          'Bermuda': 'BM',
          'Bhutan': 'BT',
          'Bolivia': 'BO',
          'Bosnia and Herzegovina': 'BA',
          'Botswana': 'BW',
          'Bouvet Island': 'BV',
          'Brazil': 'BR',
          'British Indian Ocean Territory': 'IO',
          'Brunei': 'BN',
          'Bulgaria': 'BG',
          'Burkina Faso': 'BF',
          'Burundi': 'BI',
          'Cambodia': 'KH',
          'Cameroon': 'CM',
          'Canada': 'CA',
          'Cape Verde': 'CV',
          'Cayman Islands': 'KY',
          'Central African Republic': 'CF',
          'Chad': 'TD',
          'Chile': 'CL',
          'China': 'CN',
          'Christmas Island': 'CX',
          'Cocos (Keeling) Islands': 'CC',
          'Colombia': 'CO',
          'Comoros': 'KM',
          'Congo': 'CG',
          'DRC': 'CD',
          'Cook Islands': 'CK',
          'Costa Rica': 'CR',
          'Ivory Coast': 'CI',
          'Croatia': 'HR',
          'Cuba': 'CU',
          'Cyprus': 'CY',
          'Czechia': 'CZ',
          'Denmark': 'DK',
          'Djibouti': 'DJ',
          'Dominica': 'DM',
          'Dominican Republic': 'DO',
          'Ecuador': 'EC',
          'Egypt': 'EG',
          'El Salvador': 'SV',
          'Equatorial Guinea': 'GQ',
          'Eritrea': 'ER',
          'Estonia': 'EE',
          'Ethiopia': 'ET',
          'Falkland Islands': 'FK',
          'Faeroe Islands': 'FO',
          'Fiji': 'FJ',
          'Finland': 'FI',
          'France': 'FR',
          'French Guiana': 'GF',
          'French Polynesia': 'PF',
          'French Southern Territories': 'TF',
          'Gabon': 'GA',
          'Gambia': 'GM',
          'Georgia': 'GE',
          'Germany': 'DE',
          'Ghana': 'GH',
          'Gibraltar': 'GI',
          'Greece': 'GR',
          'Greenland': 'GL',
          'Grenada': 'GD',
          'Guadeloupe': 'GP',
          'Guam': 'GU',
          'Guatemala': 'GT',
          'Guernsey': 'GG',
          'Guinea': 'GN',
          'Guinea-Bissau': 'GW',
          'Guyana': 'GY',
          'Haiti': 'HT',
          'Heard Island & Mcdonald Islands': 'HM',
          'Holy See (Vatican City State)': 'VA',
          'Honduras': 'HN',
          'Hong Kong': 'HK',
          'Hungary': 'HU',
          'Iceland': 'IS',
          'India': 'IN',
          'Indonesia': 'ID',
          'Iran': 'IR',
          'Iraq': 'IQ',
          'Ireland': 'IE',
          'Isle Of Man': 'IM',
          'Israel': 'IL',
          'Italy': 'IT',
          'Jamaica': 'JM',
          'Japan': 'JP',
          'Channel Islands': 'JE',
          'Jordan': 'JO',
          'Kazakhstan': 'KZ',
          'Kenya': 'KE',
          'Kiribati': 'KI',
          'Korea': 'KR',
          'S. Korea': 'KR',
          'Kuwait': 'KW',
          'Kyrgyzstan': 'KG',
          'Lao People\'s Democratic Republic': 'LA',
          'Latvia': 'LV',
          'Lebanon': 'LB',
          'Lesotho': 'LS',
          'Liberia': 'LR',
          'Libyan Arab Jamahiriya': 'LY',
          'Liechtenstein': 'LI',
          'Lithuania': 'LT',
          'Luxembourg': 'LU',
          'Macao': 'MO',
          'Macedonia': 'MK',
          'Madagascar': 'MG',
          'Malawi': 'MW',
          'Malaysia': 'MY',
          'Maldives': 'MV',
          'Mali': 'ML',
          'Malta': 'MT',
          'Marshall Islands': 'MH',
          'Martinique': 'MQ',
          'Mauritania': 'MR',
          'Mauritius': 'MU',
          'Mayotte': 'YT',
          'Mexico': 'MX',
          'Micronesia, Federated States Of': 'FM',
          'Moldova': 'MD',
          'Monaco': 'MC',
          'Mongolia': 'MN',
          'Montenegro': 'ME',
          'Montserrat': 'MS',
          'Morocco': 'MA',
          'Mozambique': 'MZ',
          'Myanmar': 'MM',
          'Namibia': 'NA',
          'Nauru': 'NR',
          'Nepal': 'NP',
          'Netherlands': 'NL',
          'Netherlands Antilles': 'AN',
          'New Caledonia': 'NC',
          'New Zealand': 'NZ',
          'Nicaragua': 'NI',
          'Niger': 'NE',
          'Nigeria': 'NG',
          'Niue': 'NU',
          'Norfolk Island': 'NF',
          'North Macedonia': 'MP',
          'Norway': 'NO',
          'Oman': 'OM',
          'Pakistan': 'PK',
          'Palau': 'PW',
          'Palestine': 'PS',
          'Panama': 'PA',
          'Papua New Guinea': 'PG',
          'Paraguay': 'PY',
          'Peru': 'PE',
          'Philippines': 'PH',
          'Pitcairn': 'PN',
          'Poland': 'PL',
          'Portugal': 'PT',
          'Puerto Rico': 'PR',
          'Qatar': 'QA',
          'Réunion': 'RE',
          'Romania': 'RO',
          'Russia': 'RU',
          'Rwanda': 'RW',
          'Saint Barthelemy': 'BL',
          'St. Barth': 'BL',
          'Saint Helena': 'SH',
          'Saint Kitts And Nevis': 'KN',
          'Saint Lucia': 'LC',
          'Saint Martin': 'MF',
          'Saint Pierre And Miquelon': 'PM',
          'St. Vincent Grenadines': 'VC',
          'Samoa': 'WS',
          'San Marino': 'SM',
          'Sao Tome And Principe': 'ST',
          'Saudi Arabia': 'SA',
          'Senegal': 'SN',
          'Serbia': 'RS',
          'Seychelles': 'SC',
          'Sierra Leone': 'SL',
          'Singapore': 'SG',
          'Slovakia': 'SK',
          'Slovenia': 'SI',
          'Solomon Islands': 'SB',
          'Somalia': 'SO',
          'South Africa': 'ZA',
          'South Georgia And Sandwich Isl.': 'GS',
          'Spain': 'ES',
          'Sri Lanka': 'LK',
          'Sudan': 'SD',
          'Suriname': 'SR',
          'Svalbard And Jan Mayen': 'SJ',
          'Swaziland': 'SZ',
          'Sweden': 'SE',
          'Switzerland': 'CH',
          'Syrian Arab Republic': 'SY',
          'Taiwan': 'TW',
          'Tajikistan': 'TJ',
          'Tanzania': 'TZ',
          'Thailand': 'TH',
          'Timor-Leste': 'TL',
          'Togo': 'TG',
          'Tokelau': 'TK',
          'Tonga': 'TO',
          'Trinidad and Tobago': 'TT',
          'Tunisia': 'TN',
          'Turkey': 'TR',
          'Turkmenistan': 'TM',
          'Turks And Caicos Islands': 'TC',
          'Tuvalu': 'TV',
          'Uganda': 'UG',
          'Ukraine': 'UA',
          'UAE': 'AE',
          'UK': 'GB',
          'USA': 'US',
          'United States Outlying Islands': 'UM',
          'Uruguay': 'UY',
          'Uzbekistan': 'UZ',
          'Vanuatu': 'VU',
          'Venezuela': 'VE',
          'Vietnam': 'VN',
          'Virgin Islands, British': 'VG',
          'U.S. Virgin Islands': 'VI',
          'Wallis And Futuna': 'WF',
          'Western Sahara': 'EH',
          'Yemen': 'YE',
          'Zambia': 'ZM',
          'Zimbabwe': 'ZW',
          'Curaçao': 'CW'
        };
      }

      _createClass(CountryComponent, [{
        key: "loadPieChart",
        value: function loadPieChart() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);

          chart.data.push({
            type: 'Recoveries',
            number: this.totalRecoveries,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469")
          });
          chart.data.push({
            type: 'Deaths',
            number: this.totalDeaths,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b")
          });
          chart.data.push({
            type: 'Critical',
            number: this.totalCritical,
            "color": _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851")
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
          pieSeries.dataFields.value = "number";
          pieSeries.dataFields.category = "type";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.propertyFields.fill = "color";
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this = this;

          this.zone.runOutsideAngular(function () {
            if (_this.pieChart) {
              _this.pieChart.dispose();
            }

            if (_this.lineChart) {
              _this.lineChart.dispose();
            }

            if (_this.radarChart) {
              _this.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var nameTimeline = this.route.snapshot.paramMap.get("name").toLowerCase();

          if (nameTimeline == "usa") {
            nameTimeline = "us";
          } else if (nameTimeline == "taiwan") {
            nameTimeline = "taiwan*";
          } else if (nameTimeline == "isle of man") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "aruba") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "sint maarten") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "st. vincent grenadines") {
            nameTimeline = "saint vincent and the grenadines";
          } else if (nameTimeline == "timor-leste") {
            nameTimeline = "East Timor";
          } else if (nameTimeline == "montserrat") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "gambia") {
            nameTimeline = "gambia, the";
          } else if (nameTimeline == "cayman islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "bermuda") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "greenland") {
            nameTimeline = "denmark";
          } else if (nameTimeline == "st. barth") {
            nameTimeline = "saint barthelemy";
          } else if (nameTimeline == "congo") {
            nameTimeline = "congo (brazzaville)";
          } else if (nameTimeline == "saint martin") {
            nameTimeline = "france";
          } else if (nameTimeline == "gibraltar") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "mayotte") {
            nameTimeline = "france";
          } else if (nameTimeline == "bahamas") {
            nameTimeline = "bahamas, the";
          } else if (nameTimeline == "french guiana") {
            nameTimeline = "france";
          } else if (nameTimeline == "u.s. virgin islands") {
            nameTimeline = "us";
          } else if (nameTimeline == "curaçao") {
            nameTimeline = "netherlands";
          } else if (nameTimeline == "puerto rico") {
            nameTimeline = "us";
          } else if (nameTimeline == "french polynesia") {
            nameTimeline = "france";
          } else if (nameTimeline == "ivory coast") {
            nameTimeline = "Cote d'Ivoire";
          } else if (nameTimeline == "macao") {
            nameTimeline = "china";
          } else if (nameTimeline == "drc") {
            nameTimeline = "congo (kinshasa)";
          } else if (nameTimeline == "channel islands") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "réunion") {
            nameTimeline = "france";
          } else if (nameTimeline == "guadeloupe") {
            nameTimeline = "france";
          } else if (nameTimeline == "faeroe islands") {
            nameTimeline = "Denmark";
          } else if (nameTimeline == "uae") {
            nameTimeline = "United Arab Emirates";
          } else if (nameTimeline == "diamond princess") {
            nameTimeline = "australia";
          } else if (nameTimeline == "hong kong") {
            nameTimeline = "china";
          } else if (nameTimeline == "uk") {
            nameTimeline = "united kingdom";
          } else if (nameTimeline == "car") {
            nameTimeline = "central african republic";
          }

          this.zone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(_this2._getDataService.getCountry(_this2.route.snapshot.paramMap.get("name")), _this2._getDataService.getTimelineCountry(nameTimeline)).subscribe(function (_ref) {
              var _ref2 = _slicedToArray(_ref, 2),
                  getAllData = _ref2[0],
                  getTimelineData = _ref2[1];

              console.log(getAllData[0]);
              _this2.isLoading = false;
              _this2.country = getAllData[0];
              _this2.totalCases = getAllData[0]["cases"];
              _this2.totalDeaths = getAllData[0]["deaths"];
              _this2.totalRecoveries = getAllData[0]["recovered"];
              _this2.totalCritical = getAllData[0]["critical"];
              _this2.todayCases = getAllData[0]["todayCases"];
              _this2.todayDeaths = getAllData[0]["todayDeaths"];
              _this2.activeCases = getAllData[0]["active"];
              _this2.casesPer1M = getAllData[0]["casesPerOneMillion"];
              _this2.finishedCases = _this2.totalDeaths + _this2.totalRecoveries;
              _this2.timeLine = getTimelineData;

              _this2.loadPieChart();

              _this2.loadLineChart();

              _this2.loadRadar();

              console.log(_this2.totalCases);
            });
          });
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart() {
          var _this3 = this;

          var caseData = [];

          if (!this.timeLine.multiple) {
            caseData = this.timeLine.data.timeline;
          } else {
            var data = {};
            this.timeLine.data.forEach(function (element) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _this4 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        element.timeline.forEach(function (o) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this4, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                            return regeneratorRuntime.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    if (!data.hasOwnProperty(o.date)) {
                                      data[o.date] = {};
                                      data[o.date]["cases"] = 0;
                                      data[o.date]["deaths"] = 0;
                                      data[o.date]["recovered"] = 0;
                                    }

                                    data[o.date].cases += parseInt(o.cases);
                                    data[o.date].deaths += parseInt(o.deaths);
                                    data[o.date].recovered += parseInt(o.recovered);

                                  case 4:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          }));
                        });

                      case 1:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));
            });
            Object.keys(data).forEach(function (key) {
              caseData.push({
                date: new Date(key),
                cases: data[key].cases,
                recovered: data[key].recovered,
                deaths: data[key].deaths
              });
            });
          }

          caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recovered: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recovered");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarChart"]); // Add data


          chart.data = [{
            "category": "Critical",
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": "Death",
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Recovered",
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Active",
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);
          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          return chart;
        }
      }]);

      return CountryComponent;
    }();

    CountryComponent.ɵfac = function CountryComponent_Factory(t) {
      return new (t || CountryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    CountryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CountryComponent,
      selectors: [["app-country"]],
      decls: 171,
      vars: 90,
      consts: [[1, "container-fluid"], ["class", "text-center mt-3 mb-3", 4, "ngIf"], [1, "row"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "m-0", "text-md-left", "text-center"], [1, "topBoxes"], [1, "fa-3x", "text-center"], ["src", "assets/loadercovidpass2.gif", "alt", "loading", 1, "spinner-loading", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "badge", "badge-danger", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-sm", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "col-xl-4"], [1, "header-title", "mb-3"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "col-xl-8"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["class", "header-title mb-3", 4, "ngIf"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "txt-h", "text-success"], [4, "ngIf", "ngIfElse"], ["naRecovery", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "txt-h", "text-danger"], ["naDeath", ""], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "txt-h", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], [1, "txt-h", "text-info"], [1, "col-xl-3"], [1, "card-box", "text-center"], ["target", "_blank", "href", "https://www.facebook.com/sharer/sharer.php?u=https://www.worldcovid19.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-facebook"], ["target", "_blank", "href", "https://twitter.com/intent/tweet?url=https://www.worldcovid19.live&hashtags=Covid_19,CoronavirusPandemic,worldcovid19,corona&text=Stay%20Updated%20with%20Live%20Coronavirus%20Tracker", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-twitter"], ["target", "_blank", "href", "https://vk.com/share.php?url=https://www.worldcovid19.live", 1, "btn", "btn-icon", "waves-effect", "btn-blue", "mr-1"], [1, "fab", "fa-vk"], ["href", "whatsapp://send?text=Coronavirus live statistics and tracker https://www.worldcovid19.live", "data-action", "share/whatsapp/share", 1, "btn", "btn-icon", "waves-effect", "btn-blue"], [1, "fab", "fa-whatsapp"], [1, "text-center", "mt-3", "mb-3"], ["width", "100px", 3, "src", "alt"]],
      template: function CountryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CountryComponent_h2_1_Template, 3, 3, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Infections");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Recoveries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](49, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](53, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](56, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Critical");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](69, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](73, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](76, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "h4", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Rate Distribution ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "h4", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Infections History");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](95, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, CountryComponent_h4_99_Template, 2, 1, "h4", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](101, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](103, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h4", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "Infection Rates");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](115, "i", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "h2", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](117, CountryComponent_span_117_Template, 3, 4, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](118, CountryComponent_ng_template_118_Template, 2, 0, "ng-template", null, 43, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Recovery Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](126, "i", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "h2", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](128, CountryComponent_span_128_Template, 3, 4, "span", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, CountryComponent_ng_template_129_Template, 2, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132, "Death Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "i", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "h2", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](140, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "Critical Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](147, "i", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h2", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](150, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Mild Cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Share with your friends, family or coworkers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "Keep them up to date with the coronavirus outbreak.");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "a", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "i", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](162, "i", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "a", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "i", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "a", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](166, "i", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Outbreak Started");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](170, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](119);

          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 63, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayCases, " today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](30, 65, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 68, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.todayDeaths, " today");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](49, 70, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](53, 73, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](56, 75, ctx.activeCases), " remaining");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](69, 77, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](73, 80, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](76, 82, ctx.casesPer1M), " per million");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.finishedCases > 0)("ngIfElse", _r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](140, 84, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](150, 87, 100 - ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_8__["CountupComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DecimalPipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.modal-step[_ngcontent-%COMP%] {\n  min-height: 270px;\n  transition: all 0.2s;\n}\n\n.card-box[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.font-weight-normal[_ngcontent-%COMP%] {\n  font-size: 1em !important;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.txt-h[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291bnRyeS9EOlxcd29ya1xccm9ieVxccm9ieS1jb3ZpZDE5LWZyb250L3NyY1xcYXBwXFxwYWdlc1xcY291bnRyeVxcY291bnRyeS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURDRTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7QUNFSjs7QURBRTtFQUNFLGlCQUFBO0FDR0o7O0FEQUU7RUFDRSx5QkFBQTtBQ0dKOztBREFFO0VBQ0UsV0FBQTtBQ0dKOztBREFFO0VBQ0UsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291bnRyeS9jb3VudHJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAubW9kYWwtc3RlcHtcclxuICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgfVxyXG4gIC5jYXJkLWJveHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9udC13ZWlnaHQtbm9ybWFse1xyXG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgcHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAudHh0LWh7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9IiwiLmJnLWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4ubW9kYWwtc3RlcCB7XG4gIG1pbi1oZWlnaHQ6IDI3MHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cblxuLmNhcmQtYm94IHtcbiAgbWluLWhlaWdodDogMjAwcHg7XG59XG5cbi5mb250LXdlaWdodC1ub3JtYWwge1xuICBmb250LXNpemU6IDFlbSAhaW1wb3J0YW50O1xufVxuXG5wIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50eHQtaCB7XG4gIGZvbnQtc2l6ZTogM2VtO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CountryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-country',
          templateUrl: './country.component.html',
          styleUrls: ['./country.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_5__["GetdataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/dashboard/dashboard.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
    \********************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppPagesDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @amcharts/amcharts4/core */
    "./node_modules/@amcharts/amcharts4/core.js");
    /* harmony import */


    var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @amcharts/amcharts4/charts */
    "./node_modules/@amcharts/amcharts4/charts.js");
    /* harmony import */


    var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @amcharts/amcharts4/themes/animated */
    "./node_modules/@amcharts/amcharts4/themes/animated.js");
    /* harmony import */


    var _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @amcharts/amcharts4/maps */
    "./node_modules/@amcharts/amcharts4/maps.js");
    /* harmony import */


    var _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @amcharts/amcharts4-geodata/worldLow */
    "./node_modules/@amcharts/amcharts4-geodata/worldLow.js");
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! fuse.js */
    "./node_modules/fuse.js/dist/fuse.js");
    /* harmony import */


    var fuse_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fuse_js__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/__ivy_ngcc__/fesm2015/ngx-perfect-scrollbar.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/__ivy_ngcc__/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/countup/countup.component */
    "./src/app/shared/countup/countup.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    var _c0 = ["autoShownModal"];

    function DashboardComponent_div_169_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 91);
      }

      if (rf & 2) {
        var country_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "assets/flags/", ctx_r9.countryCodes[country_r8.country].toLowerCase(), ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r8.country);
      }
    }

    function DashboardComponent_div_169_ng_template_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 92);
      }

      if (rf & 2) {
        var country_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", country_r8.country);
      }
    }

    var _c1 = function _c1(a1) {
      return ["/country", a1];
    };

    function DashboardComponent_div_169_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_div_169_img_3_Template, 1, 2, "img", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_169_ng_template_4_Template, 1, 1, "ng-template", null, 84, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " & ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](18, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](21, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r8 = ctx.$implicit;

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](5);

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c1, country_r8.country.toLowerCase()));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.countryCodes[country_r8.country])("ngIfElse", _r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r8.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", country_r8.cases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 12, "CASES"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", country_r8.deaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 14, "DEATHS"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("+", country_r8.todayCases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](18, 16, "CASES"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("+", country_r8.todayDeaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](21, 18, "DEATHS"), "");
      }
    }

    function DashboardComponent_h2_252_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx_r7.isLoading);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r7.fuse.list.length, "");
      }
    } //am4core.useTheme(am4themes_dataviz);


    _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_5__["default"]);

    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(zone, _getDataService) {
        _classCallCheck(this, DashboardComponent);

        this.zone = zone;
        this._getDataService = _getDataService;
        this.isModalShown = false;
        this.modalStep = 1;
        this.caseData = [];
        this.recoveriesData = [];
        this.deathData = [];
        this.isLoading = true;
        this.isLoadingMap = true;
        this.isLoadingCountries = true;
        this.sortType = "todayCases";
        this.countryCodes = {
          'Afghanistan': 'AF',
          'Aland Islands': 'AX',
          'Albania': 'AL',
          'Algeria': 'DZ',
          'American Samoa': 'AS',
          'Andorra': 'AD',
          'Angola': 'AO',
          'Anguilla': 'AI',
          'Antarctica': 'AQ',
          'Antigua And Barbuda': 'AG',
          'Argentina': 'AR',
          'Armenia': 'AM',
          'Aruba': 'AW',
          'Australia': 'AU',
          'Austria': 'AT',
          'Azerbaijan': 'AZ',
          'Bahamas': 'BS',
          'Bahrain': 'BH',
          'Bangladesh': 'BD',
          'Barbados': 'BB',
          'Belarus': 'BY',
          'Belgium': 'BE',
          'Belize': 'BZ',
          'Benin': 'BJ',
          'Bermuda': 'BM',
          'Bhutan': 'BT',
          'Bolivia': 'BO',
          'Bosnia and Herzegovina': 'BA',
          'Botswana': 'BW',
          'Bouvet Island': 'BV',
          'Brazil': 'BR',
          'British Indian Ocean Territory': 'IO',
          'Brunei': 'BN',
          'Bulgaria': 'BG',
          'Burkina Faso': 'BF',
          'Burundi': 'BI',
          'Cambodia': 'KH',
          'Cameroon': 'CM',
          'Canada': 'CA',
          'Cape Verde': 'CV',
          'Cayman Islands': 'KY',
          'Central African Republic': 'CF',
          'Chad': 'TD',
          'Chile': 'CL',
          'China': 'CN',
          'Christmas Island': 'CX',
          'Cocos (Keeling) Islands': 'CC',
          'Colombia': 'CO',
          'Comoros': 'KM',
          'Congo': 'CG',
          'DRC': 'CD',
          'Cook Islands': 'CK',
          'Costa Rica': 'CR',
          'Ivory Coast': 'CI',
          'Croatia': 'HR',
          'Cuba': 'CU',
          'Cyprus': 'CY',
          'Czechia': 'CZ',
          'Denmark': 'DK',
          'Djibouti': 'DJ',
          'Dominica': 'DM',
          'Dominican Republic': 'DO',
          'Ecuador': 'EC',
          'Egypt': 'EG',
          'El Salvador': 'SV',
          'Equatorial Guinea': 'GQ',
          'Eritrea': 'ER',
          'Estonia': 'EE',
          'Ethiopia': 'ET',
          'Falkland Islands': 'FK',
          'Faeroe Islands': 'FO',
          'Fiji': 'FJ',
          'Finland': 'FI',
          'France': 'FR',
          'French Guiana': 'GF',
          'French Polynesia': 'PF',
          'French Southern Territories': 'TF',
          'Gabon': 'GA',
          'Gambia': 'GM',
          'Georgia': 'GE',
          'Germany': 'DE',
          'Ghana': 'GH',
          'Gibraltar': 'GI',
          'Greece': 'GR',
          'Greenland': 'GL',
          'Grenada': 'GD',
          'Guadeloupe': 'GP',
          'Guam': 'GU',
          'Guatemala': 'GT',
          'Guernsey': 'GG',
          'Guinea': 'GN',
          'Guinea-Bissau': 'GW',
          'Guyana': 'GY',
          'Haiti': 'HT',
          'Heard Island & Mcdonald Islands': 'HM',
          'Holy See (Vatican City State)': 'VA',
          'Honduras': 'HN',
          'Hong Kong': 'HK',
          'Hungary': 'HU',
          'Iceland': 'IS',
          'India': 'IN',
          'Indonesia': 'ID',
          'Iran': 'IR',
          'Iraq': 'IQ',
          'Ireland': 'IE',
          'Isle Of Man': 'IM',
          'Israel': 'IL',
          'Italy': 'IT',
          'Jamaica': 'JM',
          'Japan': 'JP',
          'Channel Islands': 'JE',
          'Jordan': 'JO',
          'Kazakhstan': 'KZ',
          'Kenya': 'KE',
          'Kiribati': 'KI',
          'Korea': 'KR',
          'S. Korea': 'KR',
          'Kuwait': 'KW',
          'Kyrgyzstan': 'KG',
          'Lao People\'s Democratic Republic': 'LA',
          'Latvia': 'LV',
          'Lebanon': 'LB',
          'Lesotho': 'LS',
          'Liberia': 'LR',
          'Libyan Arab Jamahiriya': 'LY',
          'Liechtenstein': 'LI',
          'Lithuania': 'LT',
          'Luxembourg': 'LU',
          'Macao': 'MO',
          'Macedonia': 'MK',
          'Madagascar': 'MG',
          'Malawi': 'MW',
          'Malaysia': 'MY',
          'Maldives': 'MV',
          'Mali': 'ML',
          'Malta': 'MT',
          'Marshall Islands': 'MH',
          'Martinique': 'MQ',
          'Mauritania': 'MR',
          'Mauritius': 'MU',
          'Mayotte': 'YT',
          'Mexico': 'MX',
          'Micronesia, Federated States Of': 'FM',
          'Moldova': 'MD',
          'Monaco': 'MC',
          'Mongolia': 'MN',
          'Montenegro': 'ME',
          'Montserrat': 'MS',
          'Morocco': 'MA',
          'Mozambique': 'MZ',
          'Myanmar': 'MM',
          'Namibia': 'NA',
          'Nauru': 'NR',
          'Nepal': 'NP',
          'Netherlands': 'NL',
          'Netherlands Antilles': 'AN',
          'New Caledonia': 'NC',
          'New Zealand': 'NZ',
          'Nicaragua': 'NI',
          'Niger': 'NE',
          'Nigeria': 'NG',
          'Niue': 'NU',
          'Norfolk Island': 'NF',
          'North Macedonia': 'MP',
          'Norway': 'NO',
          'Oman': 'OM',
          'Pakistan': 'PK',
          'Palau': 'PW',
          'Palestine': 'PS',
          'Panama': 'PA',
          'Papua New Guinea': 'PG',
          'Paraguay': 'PY',
          'Peru': 'PE',
          'Philippines': 'PH',
          'Pitcairn': 'PN',
          'Poland': 'PL',
          'Portugal': 'PT',
          'Puerto Rico': 'PR',
          'Qatar': 'QA',
          'Réunion': 'RE',
          'Romania': 'RO',
          'Russia': 'RU',
          'Rwanda': 'RW',
          'Saint Barthelemy': 'BL',
          'St. Barth': 'BL',
          'Saint Helena': 'SH',
          'Saint Kitts And Nevis': 'KN',
          'Saint Lucia': 'LC',
          'Saint Martin': 'MF',
          'Saint Pierre And Miquelon': 'PM',
          'St. Vincent Grenadines': 'VC',
          'Samoa': 'WS',
          'San Marino': 'SM',
          'Sao Tome And Principe': 'ST',
          'Saudi Arabia': 'SA',
          'Senegal': 'SN',
          'Serbia': 'RS',
          'Seychelles': 'SC',
          'Sierra Leone': 'SL',
          'Singapore': 'SG',
          'Slovakia': 'SK',
          'Slovenia': 'SI',
          'Solomon Islands': 'SB',
          'Somalia': 'SO',
          'South Africa': 'ZA',
          'South Georgia And Sandwich Isl.': 'GS',
          'Spain': 'ES',
          'Sri Lanka': 'LK',
          'Sudan': 'SD',
          'Suriname': 'SR',
          'Svalbard And Jan Mayen': 'SJ',
          'Swaziland': 'SZ',
          'Sweden': 'SE',
          'Switzerland': 'CH',
          'Syrian Arab Republic': 'SY',
          'Taiwan': 'TW',
          'Tajikistan': 'TJ',
          'Tanzania': 'TZ',
          'Thailand': 'TH',
          'Timor-Leste': 'TL',
          'Togo': 'TG',
          'Tokelau': 'TK',
          'Tonga': 'TO',
          'Trinidad and Tobago': 'TT',
          'Tunisia': 'TN',
          'Turkey': 'TR',
          'Turkmenistan': 'TM',
          'Turks And Caicos Islands': 'TC',
          'Tuvalu': 'TV',
          'Uganda': 'UG',
          'Ukraine': 'UA',
          'UAE': 'AE',
          'UK': 'GB',
          'USA': 'US',
          'United States Outlying Islands': 'UM',
          'Uruguay': 'UY',
          'Uzbekistan': 'UZ',
          'Vanuatu': 'VU',
          'Venezuela': 'VE',
          'Vietnam': 'VN',
          'Virgin Islands, British': 'VG',
          'U.S. Virgin Islands': 'VI',
          'Wallis And Futuna': 'WF',
          'Western Sahara': 'EH',
          'Yemen': 'YE',
          'Zambia': 'ZM',
          'Zimbabwe': 'ZW',
          'Curaçao': 'CW'
        };
        this.countries = [];
      }

      _createClass(DashboardComponent, [{
        key: "showModal",
        value: function showModal() {
          this.modalStep = 1;
          this.isModalShown = true;
        }
      }, {
        key: "hideModal",
        value: function hideModal() {
          this.autoShownModal.hide();
        }
      }, {
        key: "onHidden",
        value: function onHidden() {
          this.isModalShown = false;
        }
      }, {
        key: "nextStep",
        value: function nextStep() {
          this.modalStep += 1;
        }
      }, {
        key: "close",
        value: function close(dontShow) {
          if (dontShow) {
            localStorage.setItem("dontShow", "true");
          }

          this.hideModal();
        }
      }, {
        key: "calculateSum",
        value: function calculateSum(index) {
          var array = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.countries;
          var total = 0;

          for (var i = 0, _len = array.length; i < _len; i++) {
            total += array[i][index];
          }

          return total;
        }
      }, {
        key: "sortData",
        value: function sortData(data, sortBy) {
          try {
            var sortProp = sortBy;
            data.sort(function (a, b) {
              if (a[sortProp] < b[sortProp]) {
                return -1;
              } else if (a[sortProp] > b[sortProp]) {
                return 1;
              }

              return 0;
            });
          } catch (e) {
            console.error("ERROR while sorting", e);
            return data;
          }

          return data;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this5 = this;

          this.zone.runOutsideAngular(function () {
            if (_this5.pieChart) {
              _this5.pieChart.dispose();
            }

            if (_this5.mapChart) {
              _this5.mapChart.dispose();
            }

            if (_this5.lineChart) {
              _this5.lineChart.dispose();
            }

            if (_this5.radarChart) {
              _this5.radarChart.dispose();
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this6 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    if (!localStorage.getItem("dontShow")) {
                      this.showModal();
                    }

                    this.zone.runOutsideAngular(function () {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this6, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                        var _this7 = this;

                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this._getDataService.getAll(this.sortType), this._getDataService.getTimelineGlobal()).subscribe(function (_ref3) {
                                  var _ref4 = _slicedToArray(_ref3, 2),
                                      getAllData = _ref4[0],
                                      getTimelineData = _ref4[1];

                                  _this7.dataOB = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
                                    observer.next("loaded");
                                    observer.complete();
                                  });
                                  _this7.isLoading = false;
                                  _this7.isLoadingCountries = false;
                                  _this7.isLoadingMap = false;
                                  _this7.countries = getAllData;
                                  _this7.totalCases = _this7.calculateSum("cases");
                                  _this7.totalDeaths = _this7.calculateSum("deaths");
                                  _this7.totalRecoveries = _this7.calculateSum("recovered");
                                  _this7.totalCritical = _this7.calculateSum("critical");
                                  _this7.todayCases = _this7.calculateSum("todayCases");
                                  _this7.todayDeaths = _this7.calculateSum("todayDeaths");
                                  _this7.activeCases = _this7.calculateSum("active");
                                  _this7.casesPer1M = _this7.calculateSum("casesPerOneMillion");
                                  _this7.finishedCases = _this7.totalDeaths + _this7.totalRecoveries;
                                  _this7.fuse = new fuse_js__WEBPACK_IMPORTED_MODULE_9__(_this7.countries, {
                                    shouldSort: true,
                                    threshold: 0.6,
                                    location: 0,
                                    distance: 100,
                                    minMatchCharLength: 1,
                                    keys: ["country"]
                                  });
                                  _this7.timeLine = getTimelineData;

                                  _this7.loadLineChart(false);

                                  _this7.loadRadar();

                                  _this7.loadPieChart();
                                });

                              case 1:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "searchCountries",
        value: function searchCountries(key) {
          if (key) {
            this.countries = this.fuse.search(key);
            if (Object(util__WEBPACK_IMPORTED_MODULE_11__["isUndefined"])(this.directiveScroll)) return;
            this.directiveScroll.directiveRef.scrollToTop();
            return;
          }

          this.countries = this.fuse.list;
        }
      }, {
        key: "sortCountries",
        value: function sortCountries(key, skey) {
          this.isLoadingCountries = true;
          this.sortType = key;
          this.loadSorted();
        }
      }, {
        key: "loadSorted",
        value: function loadSorted() {
          var _this8 = this;

          this._getDataService.getAll(this.sortType).subscribe(function (data) {
            _this8.countries = data;
            _this8.isLoadingCountries = false;
          });
        }
      }, {
        key: "loadPieChart",
        value: function loadPieChart() {
          var tempData = this.fuse.list.slice();
          this.sortData(tempData, "cases");
          tempData = tempData.reverse();

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("pieChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieChart"]);

          chart.data = tempData.slice(0, 10);
          var otherCases = tempData.slice(10, tempData.length);
          chart.data.push({
            country: 'Other',
            cases: this.calculateSum("cases", otherCases)
          });
          var pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["PieSeries"]());
          pieSeries.dataFields.value = "cases";
          pieSeries.dataFields.category = "country";
          pieSeries.labels.template.disabled = true;
          pieSeries.ticks.template.disabled = true;
          pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          pieSeries.slices.template.strokeWidth = 1;
          pieSeries.slices.template.strokeOpacity = 1;
          this.pieChart = chart;
          this.loadMap("cases");
        }
      }, {
        key: "loadLineChart",
        value: function loadLineChart(chartType) {
          var _this9 = this;

          this.caseData = [];

          if (this.lineChart) {
            this.lineChart.dispose();
          }

          Object.keys(this.timeLine).forEach(function (key) {
            _this9.caseData.push({
              date: new Date(key),
              cases: _this9.timeLine[key].cases,
              recoveries: _this9.timeLine[key].recovered,
              deaths: _this9.timeLine[key].deaths
            });
          });
          this.caseData.push({
            date: new Date().getTime(),
            cases: this.totalCases,
            recoveries: this.totalRecoveries,
            deaths: this.totalDeaths
          });

          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("lineChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYChart"]);

          chart.numberFormatter.numberFormat = "#a";
          chart.numberFormatter.bigNumberPrefixes = [{
            "number": 1e+3,
            "suffix": "K"
          }, {
            "number": 1e+6,
            "suffix": "M"
          }, {
            "number": 1e+9,
            "suffix": "B"
          }]; // Create axes

          var dateAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["DateAxis"]());
          dateAxis.renderer.minGridDistance = 50;
          var valueAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.logarithmic = chartType;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          dateAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart = this.createSeriesLine(chart, "#21AFDD", "cases");
          chart = this.createSeriesLine(chart, "#10c469", "recoveries");
          chart = this.createSeriesLine(chart, "#ff5b5b", "deaths");
          chart.data = this.caseData;
          chart.legend = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["Legend"]();
          chart.legend.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd");
          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["XYCursor"]();
          this.lineChart = chart;
        }
      }, {
        key: "loadMap",
        value: function loadMap(option) {
          var _this10 = this;

          this.isLoadingMap = true;

          if (this.mapChart) {
            this.mapChart.dispose();
          }

          var color = "#21AFDD";

          if (option == "recovered") {
            color = "#10c469";
          } else if (option == "critical") {
            color = "#f9c851";
          } else if (option == "deaths") {
            color = "#ff5b5b";
          }

          var mapData = [];
          this.fuse.list.forEach(function (element) {
            if (element[option] != 0) {
              mapData.push({
                id: _this10.countryCodes[element.country],
                name: element.country,
                value: element[option],
                color: _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color)
              });
            }
          });

          var chartMap = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("worldChart", _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapChart"]); // Set map definition


          chartMap.geodata = _amcharts_amcharts4_geodata_worldLow__WEBPACK_IMPORTED_MODULE_7__["default"]; // Set projection

          chartMap.projection = new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["projections"].Miller(); // Create map polygon series

          var polygonSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapPolygonSeries"]());
          polygonSeries.exclude = ["AQ"];
          polygonSeries.useGeodata = true;
          polygonSeries.nonScalingStroke = true;
          polygonSeries.strokeWidth = 0.5;
          polygonSeries.calculateVisualCenter = true;
          var imageSeries = chartMap.series.push(new _amcharts_amcharts4_maps__WEBPACK_IMPORTED_MODULE_6__["MapImageSeries"]());
          imageSeries.data = mapData;
          imageSeries.dataFields.value = "value";
          var imageTemplate = imageSeries.mapImages.template;
          imageTemplate.nonScaling = true;
          var circle = imageTemplate.createChild(_amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["Circle"]);
          circle.fillOpacity = 0.7;
          circle.propertyFields.fill = "color";
          circle.tooltipText = "{name}: [bold]{value}[/]";
          chartMap.events.on("ready", function () {
            _this10.isLoadingMap = false;
          });
          imageSeries.heatRules.push({
            "target": circle,
            "property": "radius",
            "min": 4,
            "max": 30,
            "dataField": "value"
          });
          imageTemplate.adapter.add("latitude", function (latitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLatitude;
            }

            return latitude;
          });
          imageTemplate.adapter.add("longitude", function (longitude, target) {
            var polygon = polygonSeries.getPolygonById(target.dataItem.dataContext["id"]);

            if (polygon) {
              return polygon.visualLongitude;
            }

            return longitude;
          });
          var polygonTemplate = polygonSeries.mapPolygons.template;
          polygonTemplate.tooltipText = "{name}";
          polygonTemplate.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282d37");
          polygonTemplate.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#313a46");
          this.mapChart = chartMap;
        }
      }, {
        key: "loadRadar",
        value: function loadRadar() {
          var chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["create"]("radarChart", _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarChart"]); // Add data


          chart.data = [{
            "category": "Critical",
            "value": this.totalCritical / this.activeCases * 100,
            "full": 100
          }, {
            "category": "Death",
            "value": this.totalDeaths / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Recovered",
            "value": this.totalRecoveries / this.finishedCases * 100,
            "full": 100
          }, {
            "category": "Active",
            "value": 100 - this.totalCritical / this.activeCases * 100,
            "full": 100
          }]; // Make chart not full circle

          chart.startAngle = -90;
          chart.endAngle = 180;
          chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["percent"](20); // Set number format

          chart.numberFormatter.numberFormat = "#.#'%'"; // Create axes

          var categoryAxis = chart.yAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["CategoryAxis"]());
          categoryAxis.dataFields.category = "category";
          categoryAxis.renderer.grid.template.location = 0;
          categoryAxis.renderer.grid.template.strokeOpacity = 0;
          categoryAxis.renderer.labels.template.horizontalCenter = "right";
          categoryAxis.renderer.labels.template.adapter.add("fill", function (fill, target) {
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          });
          categoryAxis.renderer.minGridDistance = 10;
          var valueAxis = chart.xAxes.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["ValueAxis"]());
          valueAxis.renderer.grid.template.strokeOpacity = 0;
          valueAxis.min = 0;
          valueAxis.max = 100;
          valueAxis.strictMinMax = true;
          valueAxis.renderer.labels.template.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#adb5bd"); // Create series

          var series1 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series1.dataFields.valueX = "full";
          series1.dataFields.categoryY = "category";
          series1.clustered = false;
          series1.columns.template.fill = new _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["InterfaceColorSet"]().getFor("alternativeBackground");
          series1.columns.template.fillOpacity = 0.08;
          series1.columns.template["cornerRadiusTopLeft"] = 20;
          series1.columns.template.strokeWidth = 0;
          series1.columns.template.radarColumn.cornerRadius = 20;
          var series2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarColumnSeries"]());
          series2.dataFields.valueX = "value";
          series2.dataFields.categoryY = "category";
          series2.clustered = false;
          series2.columns.template.strokeWidth = 0;
          series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
          series2.columns.template.radarColumn.cornerRadius = 20;
          series2.columns.template.adapter.add("fill", function (fill, target) {
            //return chart.colors.getIndex(target.dataItem.index);
            if (target.dataItem.index == 0) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#f9c851");
            }

            if (target.dataItem.index == 1) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#ff5b5b");
            }

            if (target.dataItem.index == 2) {
              return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#10c469");
            }

            return _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#21AFDD");
          }); // Add cursor

          chart.cursor = new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["RadarCursor"]();
          chart.cursor.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          chart.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          this.radarChart = chart;
        }
      }, {
        key: "createSeriesLine",
        value: function createSeriesLine(chart, color, type) {
          var name = type.charAt(0).toUpperCase() + type.slice(1);
          var series = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_4__["LineSeries"]());
          series.dataFields.valueY = type;
          series.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.dataFields.dateX = "date";
          series.strokeWidth = 2;
          series.minBulletDistance = 10;
          series.tooltipText = "{valueY} " + name;
          series.tooltip.pointerOrientation = "vertical";
          series.tooltip.background.cornerRadius = 20;
          series.tooltip.background.fillOpacity = 0.5;
          series.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"](color);
          series.legendSettings.labelText = name;
          series.tooltip.autoTextColor = false;
          series.tooltip.label.fill = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_3__["color"]("#282e38");
          return chart;
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__["GetdataService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      viewQuery: function DashboardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.directiveScroll = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.autoShownModal = _t.first);
        }
      },
      decls: 262,
      vars: 221,
      consts: [[1, "container-fluid"], [1, "row", 2, "padding", "30px 0 header-cards"], [1, "col-xl-3", "col-md-6", "col-6"], [1, "card-box"], [1, "m-0", "text-lg-left", "text-center", "text-lg"], [1, "topBoxes"], [1, "fa-3x", "text-center"], ["src", "assets/loadercovidpass2.gif", "alt", "loading", 1, "spinner-loading", "m-2"], [1, "topBoxesDetails", "text-md-right", "text-center"], [1, "badge", "badge-blue", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "mdi", "mdi-trending-up"], [1, "text-muted"], [1, "progress", "progress-bar-alt-blue", "progress-xl", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-blue", 2, "width", "100%"], [1, "m-0", "text-md-left", "text-center"], [1, "badge", "badge-danger", "badge-pill", "float-lg-left", "m-lg-3", "mt-2"], [1, "progress", "progress-bar-alt-danger", "progress-xl", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-danger", 2, "width", "100%"], [1, "badge", "badge-success", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-success", "progress-xl", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "100%"], [1, "badge", "badge-warning", "badge-pill", "float-md-left", "m-md-3", "mt-2"], [1, "progress", "progress-bar-alt-warning", "progress-xl", "m-0"], ["role", "progressbar", "aria-valuenow", "77", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "100%"], [1, "row"], [1, "col-xl-12"], [1, "float-md-right", "float-right", "d-md-inline", "d-none"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-blue", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-danger", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-success", "waves-effect", "waves-light", "width-xs", "mr-md-1", "mr-0", 3, "click"], ["type", "button", 1, "btn", "btn-xs", "btn-lighten-warning", "waves-effect", "waves-light", "width-xs", 3, "click"], [1, "float-right", "d-md-none", "d-inline"], [1, "header-title", "mt-0", "mb-3", "mt-md-0"], [1, "table-responsive"], ["id", "worldChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], [1, "float-right"], [1, "header-title", "mb-3"], [1, "form-group", "row"], [1, "col-md-8", "col-8"], ["type", "text", "id", "example-placeholder", 1, "form-control", 2, "box-shadow", "0 0 3px 3px rgba(85, 85, 85, 0.347)", 3, "placeholder", "keyup"], ["search", ""], [1, "col-md-4", "col-4"], [1, "select-css", "custom-select", 3, "change"], ["sortBy", ""], ["selected", "", "disabled", ""], ["value", "cases"], ["value", "todayCases"], ["value", "deaths"], ["value", "todayDeaths"], ["value", "recovered"], [1, "infectedCountries"], [2, "height", "346px"], ["perfectscrollbar", ""], ["class", "infectedCountry", 4, "ngFor", "ngForOf"], [1, "col-xl-4"], [1, "inbox-widget"], ["id", "radarChart", 2, "width", "100%", "height", "400px"], [1, "col-xl-8"], [1, "custom-control", "custom-checkbox"], ["type", "checkbox", "id", "enableLogarithmicScale", 1, "custom-control-input", 3, "change"], ["enableLogarithmicScale", ""], ["for", "enableLogarithmicScale", 1, "custom-control-label"], ["id", "lineChart", 2, "width", "100%", "height", "400px", "overflow", "hidden"], ["id", "pieChart", 2, "width", "100%", "height", "300px"], [1, "col-xl-5"], [1, "header-title", "mt-0", "mb-3"], [1, "col-12"], [1, "col-xl-6", "col-md-6"], [1, "card-box", "widget-user", "bg-d"], [1, "text-center"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-blue"], [1, "txt-h", "text-success"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-danger"], [1, "txt-h", "text-danger"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-warning"], [1, "txt-h", "text-warning"], [1, "fas", "fa-circle-notch", "fa-spin", "m-2", "text-info"], ["class", "txt-h text-info", 3, "d-none", 4, "ngIf"], [1, "col-xl-3"], [1, "card-box", "text-center"], [1, "infectedCountry"], [3, "routerLink"], [1, "infectedCountryFlag"], ["style", "height: 30px;\n            width: 40px;", 3, "src", "alt", 4, "ngIf", "ngIfElse"], ["unknown", ""], [1, "infectedCountryName", "mt-0", "mb-1"], [1, "infectedCountryDetails", "font-weight-bold"], [1, "text-blue"], [1, "text-danger"], [1, "infectedCountryCases", "text-blue"], [1, "infectedCountryDeaths", "text-danger"], [2, "height", "30px", "width", "40px", 3, "src", "alt"], ["src", "assets/flags/unknown.svg", 3, "alt"], [1, "txt-h", "text-info"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](41, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](55, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](59, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](62, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](63, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](70, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](77, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](81, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](84, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](85, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_92_listener() {
            return ctx.loadMap("cases");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](94, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_95_listener() {
            return ctx.loadMap("deaths");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](97, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_98_listener() {
            return ctx.loadMap("recovered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](100, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_101_listener() {
            return ctx.loadMap("critical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](103, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_105_listener() {
            return ctx.loadMap("cases");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](107, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_108_listener() {
            return ctx.loadMap("deaths");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](110, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_111_listener() {
            return ctx.loadMap("recovered");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](113, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_114_listener() {
            return ctx.loadMap("critical");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](116, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](119, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](123, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](130, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](133, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "input", 39, 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function DashboardComponent_Template_input_keyup_136_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](137);

            return ctx.searchCountries(_r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "select", 42, 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_select_change_139_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](140);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](137);

            return ctx.sortCountries(_r3.value, _r2.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "option", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](143, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "option", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](146, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](147, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "option", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](150, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](151, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "option", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](154, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](155, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "option", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](158, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](159, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "option", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](162, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](163, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "perfect-scrollbar", 51, 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, DashboardComponent_div_169_Template, 22, 22, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](175, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](179, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "input", 59, 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DashboardComponent_Template_input_change_184_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](185);

            return ctx.loadLineChart(_r6.checked);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "label", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](188, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](190);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](191, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](193, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](201, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](203, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](205, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](208, "p", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](209);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](210, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](213, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "i", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "h2", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](221, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](223);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](224, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](226, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](229, "i", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "h2", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](232, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](235, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](238, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](240, "i", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "h2", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](243, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](245);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](246, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](250, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](251, "i", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](252, DashboardComponent_h2_252_Template, 2, 3, "h2", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](255, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](256, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](258, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](260, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "app-countup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 108, "INFECTIONS"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 110, ctx.totalCases / ctx.finishedCases * 100, "1.0-1"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 113, ctx.totalCases), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.todayCases, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 115, "TODAY"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 117, "DEATHS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](34, 119, ctx.totalDeaths / ctx.finishedCases * 100, "1.0-1"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 122, ctx.totalDeaths), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.todayDeaths, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](41, 124, "TODAY"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 126, "RECOVERIES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](55, 128, ctx.totalRecoveries / ctx.finishedCases * 100, "1.0-1"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](59, 131, ctx.totalRecoveries), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](62, 133, ctx.activeCases), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](63, 135, "REMAINING"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](70, 137, "CRITICAL"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](77, 139, ctx.totalCritical / ctx.activeCases * 100, "1.0-1"), "% ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](81, 142, ctx.totalCritical), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](84, 144, ctx.casesPer1M), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](85, 146, "PER_MILLION"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](94, 148, "CASES"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](97, 150, "DEATHS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](100, 152, "RECOVERED"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](103, 154, "CRITICAL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](107, 156, "CASES"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](110, 158, "DEATHS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](113, 160, "RECOVERED"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](116, 162, "CRITICAL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](119, 164, "WORLDWIDE_INFECTIONS"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingMap);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](130, 166, "TODAYS_STATISTICS"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](133, 168, "AFFECTED_COUNTRIES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "Search ", ctx.countries.length, " Affected Countries");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](143, 170, "Sort_By"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](146, 172, "TOTAL"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](147, 174, "CASES"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](150, 176, "TODAY"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](151, 178, "CASES"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](154, 180, "TOTAL"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](155, 182, "DEATHS"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](158, 184, "TODAY"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](159, 186, "DEATHS"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](162, 188, "TOTAL"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](163, 190, "RECOVERIES"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoadingCountries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.countries);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](175, 192, "RATE_DISTRIBUTION"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](188, 194, "ENABLE_LOGARITHMIC_SCALE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](191, 196, "INFECTIONS_HISTORY"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](201, 198, "INFECTION_DISTRIBUTION_BY_COUNTRIES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](210, 200, "INFECTION_RATES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](221, 202, ctx.totalRecoveries / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](224, 205, "RECOVERY_RATE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](232, 207, ctx.totalDeaths / ctx.finishedCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](235, 210, "DEATH_RATE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](243, 212, ctx.totalCritical / ctx.activeCases * 100, ".1-2"), "%");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](246, 215, "CRITICAL_RATE"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("d-none", !ctx.isLoading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.fuse);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](255, 217, "NATIONS_AFFECTED"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](260, 219, "Outbreak_Started"));
        }
      },
      directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgIf"], _shared_countup_countup_component__WEBPACK_IMPORTED_MODULE_15__["CountupComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterLinkWithHref"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__["TranslatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["DecimalPipe"]],
      styles: [".container-fluid[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.bg-d[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.modal-step[_ngcontent-%COMP%] {\n  min-height: 200px;\n  transition: all 0.2s;\n}\n\n.header-cards[_ngcontent-%COMP%]   .card-box[_ngcontent-%COMP%] {\n  min-height: 250px !important;\n}\n\n.font-weight-normal[_ngcontent-%COMP%] {\n  font-size: 1em !important;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.txt-h[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.infectedCountry[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0.75rem 12px;\n  border-radius: 3px;\n  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.09);\n  margin: 7px;\n}\n\n\n\n.select-css[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  font-family: sans-serif;\n  font-weight: 700;\n  color: #444;\n  line-height: 1.3;\n  padding: 0.6em 1.4em 0.5em 0.8em;\n  width: 100%;\n  max-width: 100%;\n  \n  box-sizing: border-box;\n  margin: 0;\n  border: 1px solid #aaa;\n  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);\n  border-radius: 0.5em;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: #fff;\n  \n  background-image: url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n  background-repeat: no-repeat, repeat;\n  \n  background-position: right 0.7em top 50%, 0 0;\n  \n  background-size: 0.65em auto, 100%;\n}\n\n\n\n.select-css[_ngcontent-%COMP%]::-ms-expand {\n  display: none;\n}\n\n\n\n.select-css[_ngcontent-%COMP%]:hover {\n  border-color: #888;\n}\n\n\n\n.select-css[_ngcontent-%COMP%]:focus {\n  border-color: #aaa;\n  \n  box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);\n  box-shadow: 0 0 0 3px -moz-mac-focusring;\n  color: #222;\n  outline: none;\n}\n\n\n\n.select-css[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n\n\n*[dir=rtl][_ngcontent-%COMP%]   .select-css[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root:lang(ar)   .select-css[_ngcontent-%COMP%], [_ngcontent-%COMP%]:root:lang(iw)   .select-css[_ngcontent-%COMP%] {\n  background-position: left 0.7em top 50%, 0 0;\n  padding: 0.6em 0.8em 0.5em 1.4em;\n}\n\n.spinner-loading[_ngcontent-%COMP%] {\n  height: 40px;\n}\n\n\n\n.select-css[_ngcontent-%COMP%]:disabled, .select-css[aria-disabled=true][_ngcontent-%COMP%] {\n  color: graytext;\n  background-image: url(\"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22graytext%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);\n}\n\n.select-css[_ngcontent-%COMP%]:disabled:hover, .select-css[aria-disabled=true][_ngcontent-%COMP%] {\n  border-color: #aaa;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL0Q6XFx3b3JrXFxyb2J5XFxyb2J5LWNvdmlkMTktZnJvbnQvc3JjXFxhcHBcXHBhZ2VzXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0FDQ0o7O0FER0E7RUFDSSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQ0FKOztBREdBO0VBQ0ksNEJBQUE7QUNBSjs7QURHQTtFQUNJLHlCQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FES0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFdBQUE7QUNGSjs7QURNQSxrRUFBQTs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx5REFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0E7OztHQUFBO0VBSUEsMGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxtRkFBQTtFQUNBLDZDQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQ0FBQTtBQ0pKOztBRFFBLG1DQUFBOztBQUVBO0VBQ0ksYUFBQTtBQ05KOztBRFVBLGdCQUFBOztBQUVBO0VBQ0ksa0JBQUE7QUNSSjs7QURZQSxnQkFBQTs7QUFFQTtFQUNJLGtCQUFBO0VBQ0Esd0ZBQUE7RUFDQSwrQ0FBQTtFQUNBLHdDQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNWSjs7QURjQSxpQ0FBQTs7QUFFQTtFQUNJLG1CQUFBO0FDWko7O0FEZ0JBLGlFQUFBOztBQUVBOzs7RUFHSSw0Q0FBQTtFQUNBLGdDQUFBO0FDZEo7O0FEZ0JBO0VBQ0ksWUFBQTtBQ2JKOztBRGdCQSxvQkFBQTs7QUFFQTs7RUFFSSxlQUFBO0VBQ0EseWlCQUFBO0FDZEo7O0FEaUJBOztFQUVJLGtCQUFBO0FDZEoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uYmctZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubW9kYWwtc3RlcCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyMDBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG59XHJcblxyXG4uaGVhZGVyLWNhcmRzIC5jYXJkLWJveCB7XHJcbiAgICBtaW4taGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9udC13ZWlnaHQtbm9ybWFsIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnAge1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi50eHQtaCB7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxufVxyXG5cclxuLnRleHQtbGcge31cclxuXHJcbi5pbmZlY3RlZENvdW50cnkge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IC43NXJlbSAxMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcclxuICAgIG1hcmdpbjogN3B4O1xyXG59XHJcblxyXG5cclxuLyogY2xhc3MgYXBwbGllcyB0byBzZWxlY3QgZWxlbWVudCBpdHNlbGYsIG5vdCBhIHdyYXBwZXIgZWxlbWVudCAqL1xyXG5cclxuLnNlbGVjdC1jc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzQ0NDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBwYWRkaW5nOiAuNmVtIDEuNGVtIC41ZW0gLjhlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgLyogdXNlZnVsIHdoZW4gd2lkdGggaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gMTAwJSAqL1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAwIDFweCByZ2JhKDAsIDAsIDAsIC4wNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuNWVtO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAvKiBub3RlOiBiZyBpbWFnZSBiZWxvdyB1c2VzIDIgdXJscy4gVGhlIGZpcnN0IGlzIGFuIHN2ZyBkYXRhIHVyaSBmb3IgdGhlIGFycm93IGljb24sIGFuZCB0aGUgc2Vjb25kIGlzIHRoZSBncmFkaWVudC4gXHJcbiAgICAgIGZvciB0aGUgaWNvbiwgaWYgeW91IHdhbnQgdG8gY2hhbmdlIHRoZSBjb2xvciwgYmUgc3VyZSB0byB1c2UgYCUyM2AgaW5zdGVhZCBvZiBgI2AsIHNpbmNlIGl0J3MgYSB1cmwuIFlvdSBjYW4gYWxzbyBzd2FwIGluIGEgZGlmZmVyZW50IHN2ZyBpY29uIG9yIGFuIGV4dGVybmFsIGltYWdlIHJlZmVyZW5jZVxyXG4gICAgICBcclxuICAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyJTIzMDA3Q0IyJTIyJTIwZCUzRCUyMk0yODclMjA2OS40YTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwLTEzLTUuNEgxOC40Yy01JTIwMC05LjMlMjAxLjgtMTIuOSUyMDUuNEExNy42JTIwMTcuNiUyMDAlMjAwJTIwMCUyMDAlMjA4Mi4yYzAlMjA1JTIwMS44JTIwOS4zJTIwNS40JTIwMTIuOWwxMjglMjAxMjcuOWMzLjYlMjAzLjYlMjA3LjglMjA1LjQlMjAxMi44JTIwNS40czkuMi0xLjglMjAxMi44LTUuNEwyODclMjA5NWMzLjUtMy41JTIwNS40LTcuOCUyMDUuNC0xMi44JTIwMC01LTEuOS05LjItNS41LTEyLjh6JTIyJTJGJTNFJTNDJTJGc3ZnJTNFJyksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsICNlNWU1ZTUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0LCByZXBlYXQ7XHJcbiAgICAvKiBhcnJvdyBpY29uIHBvc2l0aW9uICgxZW0gZnJvbSB0aGUgcmlnaHQsIDUwJSB2ZXJ0aWNhbCkgLCB0aGVuIGdyYWRpZW50IHBvc2l0aW9uKi9cclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IC43ZW0gdG9wIDUwJSwgMCAwO1xyXG4gICAgLyogaWNvbiBzaXplLCB0aGVuIGdyYWRpZW50ICovXHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IC42NWVtIGF1dG8sIDEwMCU7XHJcbn1cclxuXHJcblxyXG4vKiBIaWRlIGFycm93IGljb24gaW4gSUUgYnJvd3NlcnMgKi9cclxuXHJcbi5zZWxlY3QtY3NzOjotbXMtZXhwYW5kIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4vKiBIb3ZlciBzdHlsZSAqL1xyXG5cclxuLnNlbGVjdC1jc3M6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjODg4O1xyXG59XHJcblxyXG5cclxuLyogRm9jdXMgc3R5bGUgKi9cclxuXHJcbi5zZWxlY3QtY3NzOmZvY3VzIHtcclxuICAgIGJvcmRlci1jb2xvcjogI2FhYTtcclxuICAgIC8qIEl0J2QgYmUgbmljZSB0byB1c2UgLXdlYmtpdC1mb2N1cy1yaW5nLWNvbG9yIGhlcmUgYnV0IGl0IGRvZXNuJ3Qgd29yayBvbiBib3gtc2hhZG93ICovXHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDU5LCAxNTMsIDI1MiwgLjcpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IC1tb3otbWFjLWZvY3VzcmluZztcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuXHJcbi8qIFNldCBvcHRpb25zIHRvIG5vcm1hbCB3ZWlnaHQgKi9cclxuXHJcbi5zZWxlY3QtY3NzIG9wdGlvbiB7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLyogU3VwcG9ydCBmb3IgcnRsIHRleHQsIGV4cGxpY2l0IHN1cHBvcnQgZm9yIEFyYWJpYyBhbmQgSGVicmV3ICovXHJcblxyXG4qW2Rpcj1cInJ0bFwiXSAuc2VsZWN0LWNzcyxcclxuIDpyb290OmxhbmcoYXIpIC5zZWxlY3QtY3NzLFxyXG4gOnJvb3Q6bGFuZyhpdykgLnNlbGVjdC1jc3Mge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAuN2VtIHRvcCA1MCUsIDAgMDtcclxuICAgIHBhZGRpbmc6IC42ZW0gLjhlbSAuNWVtIDEuNGVtO1xyXG59XHJcbi5zcGlubmVyLWxvYWRpbmd7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi8qIERpc2FibGVkIHN0eWxlcyAqL1xyXG5cclxuLnNlbGVjdC1jc3M6ZGlzYWJsZWQsXHJcbi5zZWxlY3QtY3NzW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0ge1xyXG4gICAgY29sb3I6IGdyYXl0ZXh0O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyZ3JheXRleHQlMjIlMjBkJTNEJTIyTTI4NyUyMDY5LjRhMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAtMTMtNS40SDE4LjRjLTUlMjAwLTkuMyUyMDEuOC0xMi45JTIwNS40QTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwJTIwMCUyMDgyLjJjMCUyMDUlMjAxLjglMjA5LjMlMjA1LjQlMjAxMi45bDEyOCUyMDEyNy45YzMuNiUyMDMuNiUyMDcuOCUyMDUuNCUyMDEyLjglMjA1LjRzOS4yLTEuOCUyMDEyLjgtNS40TDI4NyUyMDk1YzMuNS0zLjUlMjA1LjQtNy44JTIwNS40LTEyLjglMjAwLTUtMS45LTkuMi01LjUtMTIuOHolMjIlMkYlM0UlM0MlMkZzdmclM0UnKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwgI2U1ZTVlNSAxMDAlKTtcclxufVxyXG5cclxuLnNlbGVjdC1jc3M6ZGlzYWJsZWQ6aG92ZXIsXHJcbi5zZWxlY3QtY3NzW2FyaWEtZGlzYWJsZWQ9dHJ1ZV0ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWFhO1xyXG59IiwiLmNvbnRhaW5lci1mbHVpZCB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5iZy1kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLm1vZGFsLXN0ZXAge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5oZWFkZXItY2FyZHMgLmNhcmQtYm94IHtcbiAgbWluLWhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbn1cblxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnR4dC1oIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5pbmZlY3RlZENvdW50cnkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwLjc1cmVtIDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcbiAgbWFyZ2luOiA3cHg7XG59XG5cbi8qIGNsYXNzIGFwcGxpZXMgdG8gc2VsZWN0IGVsZW1lbnQgaXRzZWxmLCBub3QgYSB3cmFwcGVyIGVsZW1lbnQgKi9cbi5zZWxlY3QtY3NzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjNDQ0O1xuICBsaW5lLWhlaWdodDogMS4zO1xuICBwYWRkaW5nOiAwLjZlbSAxLjRlbSAwLjVlbSAwLjhlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgLyogdXNlZnVsIHdoZW4gd2lkdGggaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gMTAwJSAqL1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNhYWE7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNWVtO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgLyogbm90ZTogYmcgaW1hZ2UgYmVsb3cgdXNlcyAyIHVybHMuIFRoZSBmaXJzdCBpcyBhbiBzdmcgZGF0YSB1cmkgZm9yIHRoZSBhcnJvdyBpY29uLCBhbmQgdGhlIHNlY29uZCBpcyB0aGUgZ3JhZGllbnQuIFxuICAgICAgZm9yIHRoZSBpY29uLCBpZiB5b3Ugd2FudCB0byBjaGFuZ2UgdGhlIGNvbG9yLCBiZSBzdXJlIHRvIHVzZSBgJTIzYCBpbnN0ZWFkIG9mIGAjYCwgc2luY2UgaXQncyBhIHVybC4gWW91IGNhbiBhbHNvIHN3YXAgaW4gYSBkaWZmZXJlbnQgc3ZnIGljb24gb3IgYW4gZXh0ZXJuYWwgaW1hZ2UgcmVmZXJlbmNlXG5cbiAgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVMtQVNDSUksJTNDc3ZnJTIweG1sbnMlM0QlMjJodHRwJTNBJTJGJTJGd3d3LnczLm9yZyUyRjIwMDAlMkZzdmclMjIlMjB3aWR0aCUzRCUyMjI5Mi40JTIyJTIwaGVpZ2h0JTNEJTIyMjkyLjQlMjIlM0UlM0NwYXRoJTIwZmlsbCUzRCUyMiUyMzAwN0NCMiUyMiUyMGQlM0QlMjJNMjg3JTIwNjkuNGExNy42JTIwMTcuNiUyMDAlMjAwJTIwMC0xMy01LjRIMTguNGMtNSUyMDAtOS4zJTIwMS44LTEyLjklMjA1LjRBMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAlMjAwJTIwODIuMmMwJTIwNSUyMDEuOCUyMDkuMyUyMDUuNCUyMDEyLjlsMTI4JTIwMTI3LjljMy42JTIwMy42JTIwNy44JTIwNS40JTIwMTIuOCUyMDUuNHM5LjItMS44JTIwMTIuOC01LjRMMjg3JTIwOTVjMy41LTMuNSUyMDUuNC03LjglMjA1LjQtMTIuOCUyMDAtNS0xLjktOS4yLTUuNS0xMi44eiUyMiUyRiUzRSUzQyUyRnN2ZyUzRVwiKSwgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwgI2U1ZTVlNSAxMDAlKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0O1xuICAvKiBhcnJvdyBpY29uIHBvc2l0aW9uICgxZW0gZnJvbSB0aGUgcmlnaHQsIDUwJSB2ZXJ0aWNhbCkgLCB0aGVuIGdyYWRpZW50IHBvc2l0aW9uKi9cbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMC43ZW0gdG9wIDUwJSwgMCAwO1xuICAvKiBpY29uIHNpemUsIHRoZW4gZ3JhZGllbnQgKi9cbiAgYmFja2dyb3VuZC1zaXplOiAwLjY1ZW0gYXV0bywgMTAwJTtcbn1cblxuLyogSGlkZSBhcnJvdyBpY29uIGluIElFIGJyb3dzZXJzICovXG4uc2VsZWN0LWNzczo6LW1zLWV4cGFuZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhvdmVyIHN0eWxlICovXG4uc2VsZWN0LWNzczpob3ZlciB7XG4gIGJvcmRlci1jb2xvcjogIzg4ODtcbn1cblxuLyogRm9jdXMgc3R5bGUgKi9cbi5zZWxlY3QtY3NzOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiAjYWFhO1xuICAvKiBJdCdkIGJlIG5pY2UgdG8gdXNlIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvciBoZXJlIGJ1dCBpdCBkb2Vzbid0IHdvcmsgb24gYm94LXNoYWRvdyAqL1xuICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCByZ2JhKDU5LCAxNTMsIDI1MiwgMC43KTtcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IC1tb3otbWFjLWZvY3VzcmluZztcbiAgY29sb3I6ICMyMjI7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi8qIFNldCBvcHRpb25zIHRvIG5vcm1hbCB3ZWlnaHQgKi9cbi5zZWxlY3QtY3NzIG9wdGlvbiB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi8qIFN1cHBvcnQgZm9yIHJ0bCB0ZXh0LCBleHBsaWNpdCBzdXBwb3J0IGZvciBBcmFiaWMgYW5kIEhlYnJldyAqL1xuKltkaXI9cnRsXSAuc2VsZWN0LWNzcyxcbjpyb290OmxhbmcoYXIpIC5zZWxlY3QtY3NzLFxuOnJvb3Q6bGFuZyhpdykgLnNlbGVjdC1jc3Mge1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAuN2VtIHRvcCA1MCUsIDAgMDtcbiAgcGFkZGluZzogMC42ZW0gMC44ZW0gMC41ZW0gMS40ZW07XG59XG5cbi5zcGlubmVyLWxvYWRpbmcge1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi8qIERpc2FibGVkIHN0eWxlcyAqL1xuLnNlbGVjdC1jc3M6ZGlzYWJsZWQsXG4uc2VsZWN0LWNzc1thcmlhLWRpc2FibGVkPXRydWVdIHtcbiAgY29sb3I6IGdyYXl0ZXh0O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyZ3JheXRleHQlMjIlMjBkJTNEJTIyTTI4NyUyMDY5LjRhMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAtMTMtNS40SDE4LjRjLTUlMjAwLTkuMyUyMDEuOC0xMi45JTIwNS40QTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwJTIwMCUyMDgyLjJjMCUyMDUlMjAxLjglMjA5LjMlMjA1LjQlMjAxMi45bDEyOCUyMDEyNy45YzMuNiUyMDMuNiUyMDcuOCUyMDUuNCUyMDEyLjglMjA1LjRzOS4yLTEuOCUyMDEyLjgtNS40TDI4NyUyMDk1YzMuNS0zLjUlMjA1LjQtNy44JTIwNS40LTEyLjglMjAwLTUtMS45LTkuMi01LjUtMTIuOHolMjIlMkYlM0UlM0MlMkZzdmclM0VcIiksIGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmZmZmZmYgMCUsICNlNWU1ZTUgMTAwJSk7XG59XG5cbi5zZWxlY3QtY3NzOmRpc2FibGVkOmhvdmVyLFxuLnNlbGVjdC1jc3NbYXJpYS1kaXNhYmxlZD10cnVlXSB7XG4gIGJvcmRlci1jb2xvcjogI2FhYTtcbn0iXX0= */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
          opacity: 1
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
          opacity: 0
        }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(600)])])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["trigger"])('fadeInOutAnimation', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
            opacity: 1
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["transition"])(':enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["style"])({
            opacity: 0
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_13__["animate"])(600)])])]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_8__["GetdataService"]
        }];
      }, {
        directiveScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarComponent"]]
        }],
        autoShownModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['autoShownModal', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/not-found/not-found.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/not-found/not-found.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppPagesNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 6,
      vars: 0,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "text-center"], [1, "mt-5"], ["src", "assets/images/404.png"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sorry, This page doesn't exist.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          templateUrl: './not-found.component.html',
          styleUrls: ['./not-found.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/symptoms/symptoms.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/symptoms/symptoms.component.ts ***!
    \******************************************************/

  /*! exports provided: SymptomsComponent */

  /***/
  function srcAppPagesSymptomsSymptomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SymptomsComponent", function () {
      return SymptomsComponent;
    });
    /* harmony import */


    var _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../core/services/getdata.service */
    "./src/app/core/services/getdata.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    function SymptomsComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-list-item", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-chip-list", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-chip", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, item_r1.Symptome), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", item_r1.value, " ");
      }
    }

    var SymptomsComponent = /*#__PURE__*/function () {
      function SymptomsComponent(_bottomSheet, _getDataService, zone, translate) {
        _classCallCheck(this, SymptomsComponent);

        this._bottomSheet = _bottomSheet;
        this._getDataService = _getDataService;
        this.zone = zone;
        this.translate = translate;
        this.symptoms = []; // this.translate.addLangs(['en', 'fr']);
        // this.translate.setDefaultLang('fr');
      }

      _createClass(SymptomsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          // this.zone.runOutsideAngular(async () => {
          //   combineLatest(
          //     this._getDataService.getSymptoms()
          //   )
          //     .subscribe((getSymptoms) => {
          //       this._getDataService.getSymptoms().subscribe(r => {
          //         this.symptoms = getSymptoms as [Object]
          //         console.log(this.symptoms );
          //       })
          //     });
          // });
          this._getDataService.getSymptoms().subscribe(function (r) {
            console.log(r);
            _this11.symptoms = r;
            console.log(_this11.symptoms);
          }); // this._bottomSheet.open(BottomsheetSymptomsComponent);

        }
      }]);

      return SymptomsComponent;
    }();

    SymptomsComponent.ɵfac = function SymptomsComponent_Factory(t) {
      return new (t || SymptomsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_getdata_service__WEBPACK_IMPORTED_MODULE_0__["GetdataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]));
    };

    SymptomsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SymptomsComponent,
      selectors: [["app-symptoms"]],
      decls: 11,
      vars: 7,
      consts: [[1, "container-fluid"], [1, "text-center", "mt-3", "mb-3", "text-grey"], [1, "text-center"], [1, "m-2"], ["role", "list"], [4, "ngFor", "ngForOf"], ["role", "listitem"], [2, "margin-left", "auto", "margin-right", "0"], ["aria-label", "Fish selection"], ["color", "accent", "selected", ""]],
      template: function SymptomsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-list", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, SymptomsComponent_div_10_Template, 10, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "header"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 5, "desc"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.symptoms);
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__["MatChip"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDivider"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslatePipe"]],
      styles: [".bg-d[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.modal-step[_ngcontent-%COMP%] {\n  min-height: 270px;\n  transition: all 0.2s;\n}\n\n.card-box[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.font-weight-normal[_ngcontent-%COMP%] {\n  font-size: 1em !important;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000;\n}\n\n.txt-h[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\n\n.parent-wrapper[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 181px;\n  border: 1px solid black;\n}\n\n.parent[_ngcontent-%COMP%] {\n  display: flex;\n  font-size: 0;\n  flex-wrap: wrap;\n  margin: -10px 0 0 -10px;\n}\n\n.child[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: blue;\n  margin: 10px 0 0 10px;\n  flex-grow: 1;\n  height: 100px;\n  width: calc(100% * (1/2) - 10px - 1px);\n}\n\n.row[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.end-col[_ngcontent-%COMP%] {\n  float: inline-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3ltcHRvbXMvRDpcXHdvcmtcXHJvYnlcXHJvYnktY292aWQxOS1mcm9udC9zcmNcXGFwcFxccGFnZXNcXHN5bXB0b21zXFxzeW1wdG9tcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3ltcHRvbXMvc3ltcHRvbXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBRENFO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0VKOztBREFFO0VBQ0UsaUJBQUE7QUNHSjs7QURBRTtFQUNFLHlCQUFBO0FDR0o7O0FEQUU7RUFDRSxXQUFBO0FDR0o7O0FEQUU7RUFDRSxjQUFBO0FDR0o7O0FEQUU7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FDR0o7O0FEREE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQ0lKOztBREZBO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtBQ0tKOztBREZBO0VBQ0ksV0FBQTtBQ0tKOztBREhDO0VBQ0ksaUJBQUE7QUNNTCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N5bXB0b21zL3N5bXB0b21zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuICAubW9kYWwtc3RlcHtcclxuICAgIG1pbi1oZWlnaHQ6IDI3MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgfVxyXG4gIC5jYXJkLWJveHtcclxuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9udC13ZWlnaHQtbm9ybWFse1xyXG4gICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgcHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gIH1cclxuICBcclxuICAudHh0LWh7XHJcbiAgICBmb250LXNpemU6IDNlbTtcclxuICB9XHJcblxyXG4gIC5wYXJlbnQtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOjE4MXB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuLnBhcmVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1zaXplOiAwO1xyXG4gICAgZmxleC13cmFwOndyYXA7XHJcbiAgICBtYXJnaW46LTEwcHggMCAwIC0xMHB4O1xyXG59XHJcbi5jaGlsZCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgICBtYXJnaW46MTBweCAwIDAgMTBweDtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGhlaWdodDoxMDBweDsgICAgXHJcbiAgICB3aWR0aDogY2FsYygxMDAlICogKDEvMikgLSAxMHB4IC0gMXB4KVxyXG59XHJcblxyXG4ucm93e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiB9XHJcbiAuZW5kLWNvbHtcclxuICAgICBmbG9hdDogaW5saW5lLWVuZDtcclxuIH0iLCIuYmctZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5tb2RhbC1zdGVwIHtcbiAgbWluLWhlaWdodDogMjcwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuXG4uY2FyZC1ib3gge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmZvbnQtd2VpZ2h0LW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG59XG5cbnAge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnR4dC1oIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbi5wYXJlbnQtd3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDE4MXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLnBhcmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IC0xMHB4IDAgMCAtMTBweDtcbn1cblxuLmNoaWxkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBtYXJnaW46IDEwcHggMCAwIDEwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAqICgxLzIpIC0gMTBweCAtIDFweCk7XG59XG5cbi5yb3cge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmVuZC1jb2wge1xuICBmbG9hdDogaW5saW5lLWVuZDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SymptomsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-symptoms',
          templateUrl: './symptoms.component.html',
          styleUrls: ['./symptoms.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]
        }, {
          type: _core_services_getdata_service__WEBPACK_IMPORTED_MODULE_0__["GetdataService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/countup/countup.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/countup/countup.component.ts ***!
    \*****************************************************/

  /*! exports provided: CountupComponent */

  /***/
  function srcAppSharedCountupCountupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountupComponent", function () {
      return CountupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CountupComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.timer["days"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.timer["hours"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.timer["minutes"], " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r23.timer["seconds"], " ");
      }
    }

    var CountupComponent = /*#__PURE__*/function () {
      function CountupComponent() {
        _classCallCheck(this, CountupComponent);

        this.oldDate = new Date("2019-12-01");
      }

      _createClass(CountupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          setInterval(function () {
            _this12.timer = _this12.dhms(Math.floor(new Date().getTime() - _this12.oldDate.getTime()));
          }, 1000);
        }
      }, {
        key: "dhms",
        value: function dhms(difference) {
          var days, hours, mins, secs;
          days = Math.floor(difference / (60 * 60 * 1000 * 24) * 1);
          hours = Math.floor(difference % (60 * 60 * 1000 * 24) / (60 * 60 * 1000) * 1);
          mins = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) / (60 * 1000) * 1);
          secs = Math.floor(difference % (60 * 60 * 1000 * 24) % (60 * 60 * 1000) % (60 * 1000) / 1000 * 1);
          return {
            days: days,
            hours: hours,
            minutes: mins,
            seconds: secs
          };
        }
      }]);

      return CountupComponent;
    }();

    CountupComponent.ɵfac = function CountupComponent_Factory(t) {
      return new (t || CountupComponent)();
    };

    CountupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CountupComponent,
      selectors: [["app-countup"]],
      decls: 10,
      vars: 1,
      consts: [["class", "row font-weight-bold", 4, "ngIf"], [1, "row"], [1, "col-3"], [1, "row", "font-weight-bold"]],
      template: function CountupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CountupComponent_div_0_Template, 9, 4, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Days");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hours");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Mins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Secs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.timer);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb3VudHVwL2NvdW50dXAuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-countup',
          templateUrl: './countup.component.html',
          styleUrls: ['./countup.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true,
      firebaseConfig: {
        apiKey: "AIzaSyAkhpqJNEVb5IWCSg0Rm4xw3XH3Kt5nZq8",
        authDomain: "worldcovid19live.firebaseapp.com",
        databaseURL: "https://worldcovid19live.firebaseio.com",
        projectId: "worldcovid19live",
        storageBucket: "worldcovid19live.appspot.com",
        messagingSenderId: "931955460439",
        appId: "1:931955460439:web:7302be2b4188e64a595612",
        measurementId: "G-HW205SQSD8"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\work\roby\roby-covid19-front\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map