(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lyric-lyric-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lyric/lyric.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lyric/lyric.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLyricLyricPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content [fullscreen]=\"true\">\n  <div class=\"loading\" id=\"loading\">Loading... {{loaded}}%</div>\n  <div id=\"page\">\n    <div class=\"page\">\n      <div\n        class=\"content\"\n        id=\"content\"\n        (tap)=\"onTap($event)\"\n        (swipe)=\"onSwipe($event)\"\n      ></div>\n      <div class=\"controltrigger\" (mousemove)=\"showControlMove()\"></div>\n      <div class=\"overlay\" id=\"control\">\n        <div class=\"top\">\n          <div class=\"left\">\n            <ion-back-button defaultHref=\"content\" mode=\"md\"></ion-back-button>\n            <h3>{{songs?.data.title}}</h3>\n          </div>\n          <div class=\"middle\"></div>\n          <div class=\"right\">\n            <span class=\"items\"> {{currentLyric+1}}/{{lyricCount}} </span>\n            <img\n              class=\"icon playlistIcon\"\n              src=\"assets/icon/ic_playlist_play_48px.svg\"\n              alt=\"\"\n              (click)=\"showPlaylistModal()\"\n            />\n          </div>\n        </div>\n        <div class=\"space\" (click)=\"showControl()\"></div>\n        <div class=\"seekerbar\">\n          <span>{{progress}}</span>\n          <input\n            class=\"range-slider__range\"\n            type=\"range\"\n            min=\"0\"\n            max=\"1000\"\n            [(ngModel)]=\"seeker\"\n            id=\"seeker\"\n          />\n          <!-- <ion-range\n            color=\"primary\"\n            mode=\"md\"\n            min=\"0\"\n            max=\"1000\"\n            [(ngModel)]=\"seeker\"\n            id=\"seeker\"\n          ></ion-range> -->\n          <span>{{textCurrentDuration}}</span>\n        </div>\n        <div class=\"bottom\">\n          <div class=\"left\">\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_picture_as_pdf_48px.svg\"\n              alt=\"\"\n              (click)=\"openPDF()\"\n            />\n\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_video_library_48px.svg\"\n              alt=\"\"\n              (click)=\"showVideoModal()\"\n            />\n          </div>\n          <div class=\"middle\">\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_stop_48px.svg\"\n              alt=\"\"\n              (click)=\"stopSong()\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_fast_rewind_48px.svg\"\n              alt=\"\"\n              (click)=\"rewindLyric()\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_skip_previous_48px.svg\"\n              alt=\"\"\n              (click)=\"prevLyric()\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_play_circle_outline_48px.svg\"\n              alt=\"\"\n              (click)=\"playSong()\"\n              *ngIf=\"isPlaying == false\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_pause_circle_outline_48px.svg\"\n              alt=\"\"\n              (click)=\"pauseSong()\"\n              *ngIf=\"isPlaying == true\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_skip_next_48px.svg\"\n              alt=\"\"\n              (click)=\"nextLyric()\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_speaker_notes_48px.svg\"\n              alt=\"\"\n              style=\"width: 40px\"\n              (click)=\"hideLyric()\"\n              *ngIf=\"lyricHidden == false\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_speaker_notes_off_48px.svg\"\n              alt=\"\"\n              style=\"width: 40px\"\n              (click)=\"showLyric()\"\n              *ngIf=\"lyricHidden == true\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_mic_48px.svg\"\n              alt=\"\"\n              style=\"width: 40px\"\n              (click)=\"muteVocal()\"\n              *ngIf=\"mutedVocal == false\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_mic_off_48px.svg\"\n              alt=\"\"\n              style=\"width: 40px\"\n              (click)=\"unMuteVocal()\"\n              *ngIf=\"mutedVocal == true\"\n            />\n          </div>\n          <div class=\"right\">\n            <div class=\"volumecontrol\" tabindex=\"0\">\n              <input\n                type=\"range\"\n                min=\"0\"\n                max=\"100\"\n                class=\"range-slider__range\"\n                id=\"volume\"\n                [(ngModel)]=\"volume\"\n              />\n              <!-- <ion-range\n                color=\"primary\"\n                class=\"slider\"\n                id=\"volume\"\n                mode=\"md\"\n                min=\"0\"\n                max=\"100\"\n                [(ngModel)]=\"volume\"\n                (input)=\"changeVolume()\"\n              ></ion-range> -->\n              <img\n                class=\"icon\"\n                src=\"assets/icon/ic_volume_up_48px.svg\"\n                alt=\"\"\n              />\n            </div>\n\n            <div class=\"icon\"></div>\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_fullscreen_48px.svg\"\n              alt=\"\"\n              (click)=\"openFullscreen()\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"playlist\" id=\"playlistmodal\">\n      <div class=\"header\">\n        <img\n          class=\"icon\"\n          src=\"assets/icon/ic_close_48px.svg\"\n          alt=\"\"\n          (click)=\"hidePlaylistModal()\"\n        />\n        <h3>Playlist</h3>\n\n        <span class=\"items\"> {{currentLyric+1}}/{{lyricCount}} </span>\n      </div>\n      <div class=\"list\">\n        <ul>\n          <li\n            *ngFor=\"let lyric of lyrics; let i = index\"\n            (click)=\"goToLyric(i)\"\n            [ngClass]=\"{'active' : currentLyric == i}\"\n          >\n            {{i+1}}. {{lyric[1].section || 'Instrumental'}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"videomodal\" id=\"videomodal\">\n      <div class=\"video\">\n        <video\n          [src]=\"videoModalSrc\"\n          controls\n          controls\n          controlsList=\"nodownload\"\n          disablePictureInPicture\n          id=\"videomodalvideo\"\n        ></video>\n        <img\n          class=\"icon\"\n          src=\"assets/icon/ic_close_48px.svg\"\n          alt=\"\"\n          (click)=\"hideVideoModal()\"\n        />\n      </div>\n    </div>\n    <div id=\"played\">\n      <ion-icon name=\"play\"></ion-icon>\n    </div>\n    <div id=\"paused\">\n      <ion-icon name=\"pause\"></ion-icon>\n    </div>\n  </div>\n  <audio src=\"\" id=\"backsong\"></audio>\n  <audio src=\"\" id=\"vocal\"></audio>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/lyric/lyric-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/lyric/lyric-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: LyricPageRoutingModule */

    /***/
    function srcAppPagesLyricLyricRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LyricPageRoutingModule", function () {
        return LyricPageRoutingModule;
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


      var _lyric_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./lyric.page */
      "./src/app/pages/lyric/lyric.page.ts");

      var routes = [{
        path: '',
        component: _lyric_page__WEBPACK_IMPORTED_MODULE_3__["LyricPage"]
      }];

      var LyricPageRoutingModule = function LyricPageRoutingModule() {
        _classCallCheck(this, LyricPageRoutingModule);
      };

      LyricPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LyricPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/lyric/lyric.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/pages/lyric/lyric.module.ts ***!
      \*********************************************/

    /*! exports provided: LyricPageModule */

    /***/
    function srcAppPagesLyricLyricModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LyricPageModule", function () {
        return LyricPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _lyric_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./lyric-routing.module */
      "./src/app/pages/lyric/lyric-routing.module.ts");
      /* harmony import */


      var _lyric_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./lyric.page */
      "./src/app/pages/lyric/lyric.page.ts");

      var LyricPageModule = function LyricPageModule() {
        _classCallCheck(this, LyricPageModule);
      };

      LyricPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _lyric_routing_module__WEBPACK_IMPORTED_MODULE_5__["LyricPageRoutingModule"]],
        declarations: [_lyric_page__WEBPACK_IMPORTED_MODULE_6__["LyricPage"]]
      })], LyricPageModule);
      /***/
    },

    /***/
    "./src/app/pages/lyric/lyric.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/pages/lyric/lyric.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLyricLyricPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n* {\n  font-family: \"Open Sans\", sans-serif;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n*:focus,\n*:active,\n*:hover {\n  outline: none !important;\n}\nbody {\n  min-height: 100vh !important;\n}\n.range-slider {\n  margin: 60px 0 0 0%;\n}\n.range-slider {\n  width: 100%;\n}\n.range-slider__range {\n  -webkit-appearance: none;\n  width: calc(100% - (73px));\n  height: 10px;\n  border-radius: 5px;\n  background: #d7dcdf;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n.range-slider__range::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.range-slider__range::-webkit-slider-thumb:hover {\n  background: #1abc9c;\n}\n.range-slider__range:active::-webkit-slider-thumb {\n  background: #1abc9c;\n}\n.range-slider__range::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border: 0;\n  border-radius: 50%;\n  background: #2c3e50;\n  cursor: pointer;\n}\n.range-slider__range::-moz-range-thumb:hover {\n  background: #1abc9c;\n}\n.range-slider__range:active::-moz-range-thumb {\n  background: #1abc9c;\n}\n.range-slider__range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 3px #fff, 0 0 0 6px #1abc9c;\n}\n.range-slider__value {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  color: #fff;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: #2c3e50;\n  padding: 5px 10px;\n  margin-left: 8px;\n}\n.range-slider__value:after {\n  position: absolute;\n  top: 8px;\n  left: -7px;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-right: 7px solid #2c3e50;\n  border-bottom: 7px solid transparent;\n  content: \"\";\n}\n::-moz-range-track {\n  background: #d7dcdf;\n  border: 0;\n}\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n  border: 0;\n}\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\n.page {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n.content {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background: #ffffff;\n}\n.overlay {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  background: rgba(0, 0, 0, 0.5);\n  color: white;\n}\n.overlay .space {\n  display: flex;\n  width: 100%;\n  height: auto;\n  flex-grow: 1;\n}\n.overlay .icon {\n  height: 34px;\n  width: 34px;\n  margin: 0px 10px;\n  cursor: pointer;\n}\n.overlay .playlistIcon {\n  margin-top: 4px;\n}\n.overlay h3,\n.overlay span {\n  padding: 0;\n  margin: 0;\n}\n.overlay .left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n}\n.overlay .middle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.overlay .middle .icon {\n  height: 48px;\n  width: 48px;\n}\n.overlay .right {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.overlay .top {\n  display: flex;\n  width: 100%;\n  height: 60px;\n  justify-content: space-between;\n}\n.overlay .seekerbar {\n  display: flex;\n  width: 100%;\n  height: 30px;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n}\n.overlay .seekerbar input[type=range] {\n  flex-grow: 1;\n}\n.overlay .seekerbar span {\n  width: 80px;\n  text-align: center;\n}\n.overlay .bottom {\n  display: flex;\n  width: 100%;\n  height: 80px;\n  justify-content: space-between;\n}\n.playlist {\n  display: none;\n  width: 50vw;\n  max-width: 500px;\n  min-width: 350px;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  color: white;\n}\n.playlist .header {\n  height: 60px;\n  display: flex;\n  padding: 0px 20px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.playlist .header h3 {\n  padding: 0;\n  margin: 0;\n}\n.playlist .header .icon {\n  height: 34px;\n  margin-right: 10px;\n  cursor: pointer;\n}\n.playlist .header span {\n  margin-left: auto;\n}\n.playlist .list {\n  display: block;\n  height: calc(100vh - 60px);\n  width: 100%;\n  overflow-y: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.playlist .list ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.playlist .list ul li {\n  height: 40px;\n}\n.videomodal {\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  justify-content: center;\n  align-items: center;\n}\n.videomodal .video {\n  display: block;\n  width: calc(100vw - 60px);\n  height: calc(100vh - 60px);\n  background: #222222;\n  border-radius: 20px;\n  position: relative;\n  padding: 20px;\n}\n.videomodal .video video {\n  width: 100%;\n  height: 100%;\n  background: black;\n}\n.videomodal .video img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 32px;\n  cursor: pointer;\n  background: darkgrey;\n  border-radius: 100%;\n  padding: 5px;\n}\n.volumecontrol {\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 5px 10px;\n  border-radius: 30px;\n  right: 50px;\n  width: 60px;\n  overflow: hidden;\n  text-align: right;\n}\n.volumecontrol ion-range,\n.volumecontrol input {\n  width: 0;\n  display: none;\n  margin: 0px 10px;\n}\n.volumecontrol .icon {\n  margin: 0;\n}\n.volumecontrol:hover,\n.volumecontrol:focus {\n  width: auto;\n  background: #222222;\n}\n.volumecontrol:hover ion-range,\n.volumecontrol:hover input,\n.volumecontrol:focus ion-range,\n.volumecontrol:focus input {\n  width: 200px;\n  display: block;\n}\n.controltrigger {\n  display: block;\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.wrapper img,\n.wrapper video,\n.wrapper iframe,\n.wrapper div {\n  width: 100%;\n  height: 100%;\n}\n.list li {\n  text-transform: uppercase;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.list li.active {\n  background: rgba(255, 255, 255, 0.1);\n}\n.list li:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.loading {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  z-index: 1000;\n  position: fixed;\n  background: #343a41;\n  color: white;\n}\n.controltrigger {\n  display: block;\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n#played,\n#paused {\n  pointer-events: none;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n}\n.wrap {\n  background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIiwic3JjL2FwcC9wYWdlcy9seXJpYy9seXJpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQUFBO0FBV0EsNERBQUE7QUNIQTtFQUNFLDZGQUFBO0FDUEY7QURTQTtFQUNFLDBEQUFBO0FDTkY7QURTQTtFQUNFLDBDQUFBO0FDTkY7QURTQTtFQUNFLHVDQUFBO0FDTkY7QURTQTtFQUNFLGdCQUFBO0FDTkY7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjtBRHNCQTtFQUNFLHNCQUFBO0FDbkJGO0FENENFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDL0JGO0FEbUNFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDdEJGO0FEMEJFO0VBVEEsK0RBQUE7RUFDQSwyRUFBQTtFQUNBLHlFQUFBO0VBQ0EsMEZBQUE7RUFDQSxzRUFBQTtFQUNBLG9F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dUNBO0VBQ0UsZUFoRDZCO0FDWS9CO0FEdUNBO0VBQ0UsZUFqRDZCO0FDYS9CO0FEdUNBO0VBQ0UsY0FBQTtBQ3BDRjtBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxXQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3ZDRjtBQ3REQTtFQUNFLHdCQUFBO0FDUEY7QURpQkk7RUFDRSx3QkFBQTtBQ2ROO0FEcUJJO0VBQ0Usd0JBQUE7QUNsQk47QVhzSEk7RVU3R0E7SUFDRSx3QkFBQTtFQ0xKO0FBQ0Y7QVh5Skk7RVU5SUE7SUFDRSx3QkFBQTtFQ1JKO0FBQ0Y7QVgyR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ0tKO0FBQ0Y7QVgrSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ0VKO0FBQ0Y7QVhpR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ2VKO0FBQ0Y7QVhxSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ1lKO0FBQ0Y7QVh1Rkk7RVU3R0E7SUFDRSx3QkFBQTtFQ3lCSjtBQUNGO0FYMkhJO0VVOUlBO0lBQ0Usd0JBQUE7RUNzQko7QUFDRjtBZC9CQSxpREFBQTtBZUpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RVo4TkUsZVk1TmU7RVo2TmYsZ0JZN05lO0VaaVFqQixjWWpRaUI7RVprUWpCLGlCWWxRaUI7QUNibkI7QURnQkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFWnlORSxzQ1k1T007RVo2T04sdUNZN09NO0VaNlFSLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUNVVjtBYnNPTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDWXpQQTtJWjBQQSw4Q1kxUEE7SVoyUEEsNkNZM1BBO0laNFBBLDRDWTVQQTtFQ21CUjtBQUNGO0FESUE7RUFDRSx1Q0FBQTtFWm9QQSxxQ1k3UVE7QUN5QlY7QURLQTtFQUNFLHlDQUFBO0VaNk1FLHNDWTVPTTtBQzZCVjtBYm1OTTtFQUNFO0lBRUksbUJBQUE7SUFNRiwrQ1l6UEE7SVowUEEsOENZMVBBO0VDbUNSO0FBQ0Y7QURBQTtFQUNFLHVDQUFBO0Vad01FLHVDWTdPTTtBQ3lDVjtBYnVNTTtFQUNFO0lBS0ksb0JBQUE7SUFLRiw2Q1kzUEE7SVo0UEEsNENZNVBBO0VDK0NSO0FBQ0Y7QUROQTtFQUNFLDBDQUFBO0VabU9BLHdDWTlRUTtBQ3FEVjtBRExBO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFWjJOQSxxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDMkRWO0FESkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VabUxFLHNDWTVPTTtFWjZPTix1Q1k3T007QUNpRVY7QWIrS007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ1l6UEE7SVowUEEsOENZMVBBO0laMlBBLDZDWTNQQTtJWjRQQSw0Q1k1UEE7RUMwRVI7QUFDRjtBRFRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0Vaa0tFLGNZaEtjO0VaaUtkLGVZaktjO0VacU1oQixhWXJNZ0I7RVpzTWhCLGdCWXRNZ0I7QUNjbEI7QURYQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VaNkpFLG9DWTNPSztFWjRPTCxxQ1k1T0s7RVo0UVAsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2dHVDtBYitJTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDWXhQRDtJWnlQQyw0Q1l6UEQ7SVowUEMsMkNZMVBEO0laMlBDLDBDWTNQRDtFQ3lHUDtBQUNGO0FEdkJBO0VBQ0UscUNBQUE7RVp3TEEsbUNZNVFPO0FDK0dUO0FEdEJBO0VBQ0UsdUNBQUE7RVppSkUsb0NZM09LO0FDbUhUO0FiNEhNO0VBQ0U7SUFFSSxrQkFBQTtJQU1GLDZDWXhQRDtJWnlQQyw0Q1l6UEQ7RUN5SFA7QUFDRjtBRDNCQTtFQUNFLHFDQUFBO0VaNElFLHFDWTVPSztBQytIVDtBYmdITTtFQUNFO0lBS0ksbUJBQUE7SUFLRiwyQ1kxUEQ7SVoyUEMsMENZM1BEO0VDcUlQO0FBQ0Y7QURqQ0E7RUFDRSx3Q0FBQTtFWnVLQSxzQ1k3UU87QUMySVQ7QURoQ0E7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VaK0pBLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNpSlQ7QUQvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VadUhFLG9DWTNPSztFWjRPTCxxQ1k1T0s7QUN1SlQ7QWJ3Rk07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1l4UEQ7SVp5UEMsNENZelBEO0laMFBDLDJDWTFQRDtJWjJQQywwQ1kzUEQ7RUNnS1A7QUFDRjtBQzlKSTtFZG1hRSxzQkFBQTtBZS9hTjtBRGdCSTtFZCtaRSx1QkFBQTtBZTNhTjtBRGdCSTtFZDZZRSxzQkFBQTtBZXpaTjtBZjRMVztFQWdPTCx1QkFBQTtBZXpaTjtBRGFJO0VkZ1pFLHVCQUFBO0FlelpOO0FmcUxXO0VBdU9MLHNCQUFBO0FlelpOO0FmNEdJO0VjbEhBO0lkbWFFLHNCQUFBO0VleFpKOztFRFBFO0lkK1pFLHVCQUFBO0VlcFpKOztFRFBFO0lkNllFLHNCQUFBO0VlbFlKO0VmcUtTO0lBZ09MLHVCQUFBO0VlbFlKOztFRFZFO0lkZ1pFLHVCQUFBO0VlbFlKO0VmOEpTO0lBdU9MLHNCQUFBO0VlbFlKO0FBQ0Y7QWZvRkk7RWNsSEE7SWRtYUUsc0JBQUE7RWVqWUo7O0VEOUJFO0lkK1pFLHVCQUFBO0VlN1hKOztFRDlCRTtJZDZZRSxzQkFBQTtFZTNXSjtFZjhJUztJQWdPTCx1QkFBQTtFZTNXSjs7RURqQ0U7SWRnWkUsdUJBQUE7RWUzV0o7RWZ1SVM7SUF1T0wsc0JBQUE7RWUzV0o7QUFDRjtBZjZESTtFY2xIQTtJZG1hRSxzQkFBQTtFZTFXSjs7RURyREU7SWQrWkUsdUJBQUE7RWV0V0o7O0VEckRFO0lkNllFLHNCQUFBO0VlcFZKO0VmdUhTO0lBZ09MLHVCQUFBO0VlcFZKOztFRHhERTtJZGdaRSx1QkFBQTtFZXBWSjtFZmdIUztJQXVPTCxzQkFBQTtFZXBWSjtBQUNGO0Fmc0NJO0VjbEhBO0lkbWFFLHNCQUFBO0VlblZKOztFRDVFRTtJZCtaRSx1QkFBQTtFZS9VSjs7RUQ1RUU7SWQ2WUUsc0JBQUE7RWU3VEo7RWZnR1M7SUFnT0wsdUJBQUE7RWU3VEo7O0VEL0VFO0lkZ1pFLHVCQUFBO0VlN1RKO0VmeUZTO0lBdU9MLHNCQUFBO0VlN1RKO0FBQ0Y7QUNuR0k7RUFDRSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSwwQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMkJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBakJrR0k7RWdCbEhBO0lBQ0UsNkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7QUFDRjtBakJnRUk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7QUFDRjtBakIrQkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7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QUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXVKRjtBQXJKQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQXdKRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2x5cmljL2x5cmljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHAgR2xvYmFsIENTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3JcbiAqIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0IENTUy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGdsb2JhbCBzdHlsZXNoZWV0cywgdmlzaXQgdGhlIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcbiAqL1xuXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzXCI7XG5cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuXG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcbiRjb2xvclByaW1hcnk6ICMyMzI4MmQ7XG4kY29sb3JTZWNvbmRhcnk6ICMzNDNhNDE7XG4kY29sb3JBY2NlbnQ6ICMyNjZlYjU7XG5cbioge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4qOmZvY3VzLFxuKjphY3RpdmUsXG4qOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG5cbi5yYW5nZS1zbGlkZXIge1xuICBtYXJnaW46IDYwcHggMCAwIDAlO1xufVxuXG4vLyBCYXNlIENvbG9yc1xuJHNoYWRlLTEwOiAjMmMzZTUwICFkZWZhdWx0O1xuJHNoYWRlLTE6ICNkN2RjZGYgIWRlZmF1bHQ7XG4kc2hhZGUtMDogI2ZmZiAhZGVmYXVsdDtcbiR0ZWFsOiAjMWFiYzljICFkZWZhdWx0O1xuXG4vLyBSYW5nZSBTbGlkZXJcbiRyYW5nZS13aWR0aDogMTAwJSAhZGVmYXVsdDtcblxuJHJhbmdlLWhhbmRsZS1jb2xvcjogJHNoYWRlLTEwICFkZWZhdWx0O1xuJHJhbmdlLWhhbmRsZS1jb2xvci1ob3ZlcjogJHRlYWwgIWRlZmF1bHQ7XG4kcmFuZ2UtaGFuZGxlLXNpemU6IDIwcHggIWRlZmF1bHQ7XG5cbiRyYW5nZS10cmFjay1jb2xvcjogJHNoYWRlLTEgIWRlZmF1bHQ7XG4kcmFuZ2UtdHJhY2staGVpZ2h0OiAxMHB4ICFkZWZhdWx0O1xuXG4kcmFuZ2UtbGFiZWwtY29sb3I6ICRzaGFkZS0xMCAhZGVmYXVsdDtcbiRyYW5nZS1sYWJlbC13aWR0aDogNjBweCAhZGVmYXVsdDtcblxuLnJhbmdlLXNsaWRlciB7XG4gIHdpZHRoOiAkcmFuZ2Utd2lkdGg7XG59XG5cbi5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlIC0gKCN7JHJhbmdlLWxhYmVsLXdpZHRoICsgMTNweH0pKTtcbiAgaGVpZ2h0OiAkcmFuZ2UtdHJhY2staGVpZ2h0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICRyYW5nZS10cmFjay1jb2xvcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuXG4gIC8vIFJhbmdlIEhhbmRsZVxuICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICB3aWR0aDogJHJhbmdlLWhhbmRsZS1zaXplO1xuICAgIGhlaWdodDogJHJhbmdlLWhhbmRsZS1zaXplO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtaGFuZGxlLWNvbG9yO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogJHJhbmdlLWhhbmRsZS1jb2xvci1ob3ZlcjtcbiAgICB9XG4gIH1cblxuICAmOmFjdGl2ZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3ItaG92ZXI7XG4gIH1cblxuICAmOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICB3aWR0aDogJHJhbmdlLWhhbmRsZS1zaXplO1xuICAgIGhlaWdodDogJHJhbmdlLWhhbmRsZS1zaXplO1xuICAgIGJvcmRlcjogMDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogJHJhbmdlLWhhbmRsZS1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3ItaG92ZXI7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmU6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3ItaG92ZXI7XG4gIH1cblxuICAvLyBGb2N1cyBzdGF0ZVxuICAmOmZvY3VzIHtcbiAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggJHNoYWRlLTAsIDAgMCAwIDZweCAkdGVhbDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmFuZ2UgTGFiZWxcbi5yYW5nZS1zbGlkZXJfX3ZhbHVlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAkcmFuZ2UtbGFiZWwtd2lkdGg7XG4gIGNvbG9yOiAkc2hhZGUtMDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kOiAkcmFuZ2UtbGFiZWwtY29sb3I7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xuXG4gICY6YWZ0ZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDhweDtcbiAgICBsZWZ0OiAtN3B4O1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJpZ2h0OiA3cHggc29saWQgJHJhbmdlLWxhYmVsLWNvbG9yO1xuICAgIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG59XG5cbi8vIEZpcmVmb3ggT3ZlcnJpZGVzXG46Oi1tb3otcmFuZ2UtdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAkcmFuZ2UtdHJhY2stY29sb3I7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1vdXRlciB7XG4gIGJvcmRlcjogMDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNXB4O1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlO1xufVxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cbiIsbnVsbCwiaHRtbC5pb3Mge1xuICAtLWlvbi1kZWZhdWx0LWZvbnQ6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sLm1kIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiBcIlJvYm90b1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbmh0bWwge1xuICAtLWlvbi1mb250LWZhbWlseTogdmFyKC0taW9uLWRlZmF1bHQtZm9udCk7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvcik7XG59XG5cbmJvZHkuYmFja2Ryb3Atbm8tc2Nyb2xsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuaHRtbC5pb3MgaW9uLW1vZGFsLm1vZGFsLWNhcmQgLmlvbi1wYWdlID4gaW9uLWhlYWRlciA+IGlvbi10b29sYmFyOmZpcnN0LW9mLXR5cGUge1xuICBwYWRkaW5nLXRvcDogMHB4O1xufVxuXG5odG1sLmlvcyBpb24tbW9kYWwgLmlvbi1wYWdlIHtcbiAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbn1cblxuLmlvbi1jb2xvci1wcmltYXJ5IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IsIDU2LCAxMjgsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlLCAjMzE3MWUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50LCAjNGM4ZGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXNlY29uZGFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnksICMzZGMyZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiwgNjEsIDE5NCwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktc2hhZGUsICMzNmFiZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktdGludCwgIzUwYzhmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci10ZXJ0aWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeSwgIzUyNjBmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1yZ2IsIDgyLCA5NiwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktc2hhZGUsICM0ODU0ZTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS10aW50LCAjNjM3MGZmKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXN1Y2Nlc3Mge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcywgIzJkZDM2ZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXJnYiwgNDUsIDIxMSwgMTExKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MtY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUsICMyOGJhNjIpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXRpbnQsICM0MmQ3N2QpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3Itd2FybmluZyB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLCAjZmZjNDA5KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctcmdiLCAyNTUsIDE5NiwgOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LCAjMDAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXNoYWRlLCAjZTBhYzA4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy10aW50LCAjZmZjYTIyKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWRhbmdlciB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIsICNlYjQ0NWEpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiwgMjM1LCA2OCwgOTApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1zaGFkZSwgI2NmM2M0ZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci10aW50LCAjZWQ1NzZiKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWxpZ2h0IHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LCAjZjRmNWY4KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiwgMjQ0LCAyNDUsIDI0OCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1saWdodC1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QtcmdiLCAwLCAwLCAwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlLCAjZDdkOGRhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtdGludCwgI2Y1ZjZmOSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1tZWRpdW0ge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLCAjOTI5NDljKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IsIDE0NiwgMTQ4LCAxNTYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSwgIzgwODI4OSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50LCAjOWQ5ZmE2KSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLWRhcmsge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFyaywgIzIyMjQyOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiwgMzQsIDM2LCA0MCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYXJrLXNoYWRlLCAjMWUyMDIzKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50LCAjMzgzYTNlKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2Uge1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBjb250YWluOiBsYXlvdXQgc2l6ZSBzdHlsZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMDtcbn1cblxuLnNwbGl0LXBhbmUtdmlzaWJsZSA+IC5pb24tcGFnZS5zcGxpdC1wYW5lLW1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbmlvbi1yb3V0ZSxcbmlvbi1yb3V0ZS1yZWRpcmVjdCxcbmlvbi1yb3V0ZXIsXG5pb24tc2VsZWN0LW9wdGlvbixcbmlvbi1uYXYtY29udHJvbGxlcixcbmlvbi1tZW51LWNvbnRyb2xsZXIsXG5pb24tYWN0aW9uLXNoZWV0LWNvbnRyb2xsZXIsXG5pb24tYWxlcnQtY29udHJvbGxlcixcbmlvbi1sb2FkaW5nLWNvbnRyb2xsZXIsXG5pb24tbW9kYWwtY29udHJvbGxlcixcbmlvbi1waWNrZXItY29udHJvbGxlcixcbmlvbi1wb3BvdmVyLWNvbnRyb2xsZXIsXG5pb24tdG9hc3QtY29udHJvbGxlcixcbi5pb24tcGFnZS1oaWRkZW4sXG5baGlkZGVuXSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXBhZ2UtaW52aXNpYmxlIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNhbi1nby1iYWNrID4gaW9uLWhlYWRlciBpb24tYmFjay1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuaHRtbC5wbHQtaW9zLnBsdC1oeWJyaWQsIGh0bWwucGx0LWlvcy5wbHQtcHdhIHtcbiAgLS1pb24tc3RhdHVzYmFyLXBhZGRpbmc6IDIwcHg7XG59XG5cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IDIwcHgpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogdmFyKC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nKTtcbiAgfVxufVxuQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogY29uc3RhbnQoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWxlZnQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wKSkge1xuICBodG1sIHtcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWxlZnQpO1xuICAgIC0taW9uLXNhZmUtYXJlYS1yaWdodDogZW52KHNhZmUtYXJlYS1pbnNldC1yaWdodCk7XG4gIH1cbn1cbmlvbi1jYXJkLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3IsXG5pb24tY2FyZC1oZWFkZXIuaW9uLWNvbG9yIC5pb24taW5oZXJpdC1jb2xvciB7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4ubWVudS1jb250ZW50IHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAgMCwgIDApO1xufVxuXG4ubWVudS1jb250ZW50LW9wZW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmlvcyAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IC04cHggMCA0MnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbltkaXI9cnRsXS5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA4cHggMCA0MnB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XG59XG5cbi5tZCAubWVudS1jb250ZW50LXJldmVhbCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1wdXNoIHtcbiAgYm94LXNoYWRvdzogNHB4IDBweCAxNnB4IHJnYmEoMCwgMCwgMCwgMC4xOCk7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWNvcmUuY3NzLm1hcCAqL1xuIixudWxsLG51bGwsbnVsbCxudWxsLG51bGwsImF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAwO1xufVxuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbmhyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlci13aWR0aDogMDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG5jb2RlLFxua2JkLFxucHJlLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbmxhYmVsLFxuaW5wdXQsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuZm9ybSxcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3Qge1xuICBtYXJnaW46IDA7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG5odG1sIGlucHV0W3R5cGU9YnV0dG9uXSxcbmlucHV0W3R5cGU9cmVzZXRdLFxuaW5wdXRbdHlwZT1zdWJtaXRdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuYSxcbmEgZGl2LFxuYSBzcGFuLFxuYSBpb24taWNvbixcbmEgaW9uLWxhYmVsLFxuYnV0dG9uLFxuYnV0dG9uIGRpdixcbmJ1dHRvbiBzcGFuLFxuYnV0dG9uIGlvbi1pY29uLFxuYnV0dG9uIGlvbi1sYWJlbCxcbi5pb24tdGFwcGFibGUsXG5bdGFwcGFibGVdLFxuW3RhcHBhYmxlXSBkaXYsXG5bdGFwcGFibGVdIHNwYW4sXG5bdGFwcGFibGVdIGlvbi1pY29uLFxuW3RhcHBhYmxlXSBpb24tbGFiZWwsXG5pbnB1dCxcbnRleHRhcmVhIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cbmEgaW9uLWxhYmVsLFxuYnV0dG9uIGlvbi1sYWJlbCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG5idXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXN0eWxlOiBpbmhlcml0O1xuICBmb250LXZhcmlhbnQ6IGluaGVyaXQ7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuW3RhcHBhYmxlXSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYVtkaXNhYmxlZF0sXG5idXR0b25bZGlzYWJsZWRdLFxuaHRtbCBpbnB1dFtkaXNhYmxlZF0ge1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dFt0eXBlPWNoZWNrYm94XSxcbmlucHV0W3R5cGU9cmFkaW9dIHtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuaW5wdXRbdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24sXG5pbnB1dFt0eXBlPXNlYXJjaF06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cbnRkLFxudGgge1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUuY3NzLm1hcCAqL1xuIixudWxsLCIqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xufVxuXG5odG1sOm5vdCguaHlkcmF0ZWQpIGJvZHkge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5odG1sLnBsdC1wd2Ege1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG5ib2R5IHtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG4gIC13ZWJraXQtdXNlci1kcmFnOiBub25lO1xuICAtbXMtY29udGVudC16b29taW5nOiBub25lO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3IteTogbm9uZTtcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9c3RydWN0dXJlLmNzcy5tYXAgKi9cbiIsbnVsbCwiaHRtbCB7XG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xufVxuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSwgIzM4ODBmZik7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5oMSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cbmgyIHtcbiAgbWFyZ2luLXRvcDogMThweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuaDMge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5oNSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaDYge1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA3NSU7XG59XG5cbnN1YixcbnN1cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXR5cG9ncmFwaHkuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLWhpZGUge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS11cCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1oaWRlLWRvd24ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLWhpZGUtc20tdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XG4gIC5pb24taGlkZS1zbS1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWhpZGUtbWQtdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5pb24taGlkZS1tZC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWhpZGUtbGctdXAge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5pb24taGlkZS1sZy1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi1oaWRlLXhsLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgLmlvbi1oaWRlLXhsLWRvd24ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kaXNwbGF5LmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi1uby1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xuICAtLXBhZGRpbmctZW5kOiAwO1xuICAtLXBhZGRpbmctdG9wOiAwO1xuICAtLXBhZGRpbmctYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmlvbi1wYWRkaW5nIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmcge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy1zdGFydCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1zdGFydCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy1lbmQge1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctcmlnaHQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tcGFkZGluZy1lbmQge1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctYm90dG9tIHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLXZlcnRpY2FsIHtcbiAgLS1wYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctYm90dG9tOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctbGVmdDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctaG9yaXpvbnRhbCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICBwYWRkaW5nLWlubGluZS1lbmQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW5vLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiAwO1xuICAtLW1hcmdpbi1lbmQ6IDA7XG4gIC0tbWFyZ2luLXRvcDogMDtcbiAgLS1tYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uaW9uLW1hcmdpbiB7XG4gIC0tbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWxlZnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLXRvcCB7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tc3RhcnQge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWVuZCB7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1lbmQge1xuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1tYXJnaW4tYm90dG9tIHtcbiAgLS1tYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi12ZXJ0aWNhbCB7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbkBzdXBwb3J0cyAobWFyZ2luLWlubGluZS1zdGFydDogMCkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSB7XG4gIC5pb24tbWFyZ2luLWhvcml6b250YWwge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1wYWRkaW5nLmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi1mbG9hdC1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LXN0YXJ0IHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWZsb2F0LWVuZCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuW2Rpcj1ydGxdIC5pb24tZmxvYXQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1mbG9hdC1zbS1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXNtLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtc20tZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAuaW9uLWZsb2F0LW1kLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbWQtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1tZC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tZmxvYXQtbGctbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1sZy1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LWxnLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tZmxvYXQteGwtbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC14bC1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXhsLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWZsb2F0LWVsZW1lbnRzLmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi10ZXh0LWNlbnRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtanVzdGlmeSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXN0YXJ0IHtcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWVuZCB7XG4gIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtbGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LW5vd3JhcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LXdyYXAge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLXRleHQtc20tY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20td3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi10ZXh0LW1kLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5pb24tdGV4dC1sZy1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi10ZXh0LXhsLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LWFsaWdubWVudC5jc3MubWFwICovXG4iLG51bGwsIi5pb24tdGV4dC11cHBlcmNhc2Uge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxvd2VyY2FzZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXRleHQtY2FwaXRhbGl6ZSB7XG4gIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tdGV4dC1zbS11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi10ZXh0LW1kLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LWxnLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLXRleHQteGwtdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi1hbGlnbi1zZWxmLXN0YXJ0IHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtZW5kIHtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWNlbnRlciB7XG4gIGFsaWduLXNlbGY6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLXNlbGYtc3RyZXRjaCB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWJhc2VsaW5lIHtcbiAgYWxpZ24tc2VsZjogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWF1dG8ge1xuICBhbGlnbi1zZWxmOiBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLW5vd3JhcCB7XG4gIGZsZXgtd3JhcDogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24td3JhcC1yZXZlcnNlIHtcbiAgZmxleC13cmFwOiB3cmFwLXJldmVyc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtc3RhcnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtZW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1hcm91bmQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1iZXR3ZWVuIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWV2ZW5seSB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RhcnQge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLWNlbnRlciB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1lbmQge1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1zdHJldGNoIHtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2ggIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1iYXNlbGluZSB7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZSAhaW1wb3J0YW50O1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbGV4LXV0aWxzLmNzcy5tYXAgKi9cbiIsIi8qXG4gKiBBcHAgR2xvYmFsIENTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3JcbiAqIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0IENTUy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGdsb2JhbCBzdHlsZXNoZWV0cywgdmlzaXQgdGhlIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcbiAqL1xuLyogQ29yZSBDU1MgcmVxdWlyZWQgZm9yIElvbmljIGNvbXBvbmVudHMgdG8gd29yayBwcm9wZXJseSAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3NcIjtcbi8qIEJhc2ljIENTUyBmb3IgYXBwcyBidWlsdCB3aXRoIElvbmljICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9ub3JtYWxpemUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9zdHJ1Y3R1cmUuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90eXBvZ3JhcGh5LmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZGlzcGxheS5jc3NcIjtcbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuKjpmb2N1cyxcbio6YWN0aXZlLFxuKjpob3ZlciB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG5cbi5yYW5nZS1zbGlkZXIge1xuICBtYXJnaW46IDYwcHggMCAwIDAlO1xufVxuXG4ucmFuZ2Utc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlIC0gKDczcHgpKTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkN2RjZGY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5yYW5nZS1zbGlkZXJfX3JhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFhYmM5Yztcbn1cbi5yYW5nZS1zbGlkZXJfX3JhbmdlOmFjdGl2ZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzJjM2U1MDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6YWN0aXZlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzFhYmM5Yztcbn1cbi5yYW5nZS1zbGlkZXJfX3JhbmdlOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjZmZmLCAwIDAgMCA2cHggIzFhYmM5Yztcbn1cblxuLnJhbmdlLXNsaWRlcl9fdmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMyYzNlNTA7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnJhbmdlLXNsaWRlcl9fdmFsdWU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAtN3B4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMyYzNlNTA7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2Q3ZGNkZjtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLW91dGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbi5wYWdlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5vdmVybGF5IC5zcGFjZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5vdmVybGF5IC5pY29uIHtcbiAgaGVpZ2h0OiAzNHB4O1xuICB3aWR0aDogMzRweDtcbiAgbWFyZ2luOiAwcHggMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLm92ZXJsYXkgLnBsYXlsaXN0SWNvbiB7XG4gIG1hcmdpbi10b3A6IDRweDtcbn1cbi5vdmVybGF5IGgzLFxuLm92ZXJsYXkgc3BhbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5vdmVybGF5IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ub3ZlcmxheSAubWlkZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vdmVybGF5IC5taWRkbGUgLmljb24ge1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHdpZHRoOiA0OHB4O1xufVxuLm92ZXJsYXkgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm92ZXJsYXkgLnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5vdmVybGF5IC5zZWVrZXJiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4ub3ZlcmxheSAuc2Vla2VyYmFyIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLm92ZXJsYXkgLnNlZWtlcmJhciBzcGFuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vdmVybGF5IC5ib3R0b20ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5wbGF5bGlzdCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA1MHZ3O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICBtaW4td2lkdGg6IDM1MHB4O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5wbGF5bGlzdCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwcHggMjBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuLnBsYXlsaXN0IC5oZWFkZXIgaDMge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG4ucGxheWxpc3QgLmhlYWRlciAuaWNvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucGxheWxpc3QgLmhlYWRlciBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4ucGxheWxpc3QgLmxpc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuLnBsYXlsaXN0IC5saXN0IHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnBsYXlsaXN0IC5saXN0IHVsIGxpIHtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4udmlkZW9tb2RhbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpZGVvbW9kYWwgLnZpZGVvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICBiYWNrZ3JvdW5kOiAjMjIyMjIyO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG4udmlkZW9tb2RhbCAudmlkZW8gdmlkZW8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBibGFjaztcbn1cbi52aWRlb21vZGFsIC52aWRlbyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTBweDtcbiAgcmlnaHQ6IDEwcHg7XG4gIGhlaWdodDogMzJweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiBkYXJrZ3JleTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4udm9sdW1lY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHJpZ2h0OiA1MHB4O1xuICB3aWR0aDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udm9sdW1lY29udHJvbCBpb24tcmFuZ2UsXG4udm9sdW1lY29udHJvbCBpbnB1dCB7XG4gIHdpZHRoOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuLnZvbHVtZWNvbnRyb2wgLmljb24ge1xuICBtYXJnaW46IDA7XG59XG5cbi52b2x1bWVjb250cm9sOmhvdmVyLFxuLnZvbHVtZWNvbnRyb2w6Zm9jdXMge1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcbn1cbi52b2x1bWVjb250cm9sOmhvdmVyIGlvbi1yYW5nZSxcbi52b2x1bWVjb250cm9sOmhvdmVyIGlucHV0LFxuLnZvbHVtZWNvbnRyb2w6Zm9jdXMgaW9uLXJhbmdlLFxuLnZvbHVtZWNvbnRyb2w6Zm9jdXMgaW5wdXQge1xuICB3aWR0aDogMjAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udHJvbHRyaWdnZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLndyYXBwZXIgaW1nLFxuLndyYXBwZXIgdmlkZW8sXG4ud3JhcHBlciBpZnJhbWUsXG4ud3JhcHBlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlzdCBsaSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmxpc3QgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4ubGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRyb2x0cmlnZ2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG59XG5cbiNwbGF5ZWQsXG4jcGF1c2VkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ud3JhcCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogYmxhY2s7XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/lyric/lyric.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/lyric/lyric.page.ts ***!
      \*******************************************/

    /*! exports provided: LyricPage */

    /***/
    function srcAppPagesLyricLyricPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LyricPage", function () {
        return LyricPage;
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


      var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/ionic-webview/ngx */
      "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! gsap */
      "./node_modules/gsap/index.js");
      /* harmony import */


      var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/content.service */
      "./src/app/services/content.service.ts");

      var LyricPage = /*#__PURE__*/function () {
        function LyricPage(platform, loadingController, contentService, webview // private fileOpener: FileOpener
        ) {
          _classCallCheck(this, LyricPage);

          this.platform = platform;
          this.loadingController = loadingController;
          this.contentService = contentService;
          this.webview = webview;
          this.visibleControl = false;
          this.isPlaying = false;
          this.lastOnStart = 0;
          this.DOUBLE_CLICK_THRESHOLD = 300;
          this.preventSingleClick = false;
          this.volume = 0;
          this.seeker = 0;
          this.isFullScreen = false;
          this.currentLyric = 0;
          this.textCurrentDuration = "00:00";
          this.trueCurrentDuration = 0;
          this.currentDuration = 0;
          this.progress = "00:00";
          this.videoModalSrc = "";
          this.mutedVocal = false;
          this.lyricHidden = false;
          this.loaded = 0;
          this.xf = this.registerKey.bind(this);
          this.openedContent = this.contentService.openedContent;
          this.openedSong = this.contentService.openedSong;
          this.contentPath = this.contentService.path;

          if (this.contentPath !== "" && !this.platform.is("electron")) {
            this.contentPath = this.webview.convertFileSrc(this.contentService.path + this.openedContent.dirname + "/");
          }

          if (this.contentPath !== "" && this.platform.is("electron")) {
            this.contentPath = this.contentService.path + this.openedContent.dirname + "/";
          }
        }

        _createClass(LyricPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.init();
          }
        }, {
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var songData;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.mintl1 = gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].timeline();
                      this.mintl2 = gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].timeline();
                      this.mintl1.from("#paused", 0.3, {
                        opacity: 0,
                        scale: 0.8
                      });
                      this.mintl1.to("#paused", 0.3, {
                        opacity: 0,
                        scale: 1.2
                      });
                      this.mintl2.from("#played", 0.3, {
                        opacity: 0,
                        scale: 0.8
                      });
                      this.mintl2.to("#played", 0.3, {
                        opacity: 0,
                        scale: 1.2
                      });
                      this.registerAll();
                      this.presentLoading();
                      _context.next = 10;
                      return this.contentService.getJson("songlist/".concat(this.openedSong.url, "/song.json"), this.contentPath).toPromise();

                    case 10:
                      songData = _context.sent;

                      if (songData) {
                        this.songs = songData;
                      }

                      this.control = document.getElementById("control");
                      this.videoModal = document.getElementById("videomodal");
                      this.videoModalVideo = document.getElementById("videomodalvideo");
                      this.playlistModal = document.getElementById("playlistmodal");
                      this.page = document.getElementById("page");
                      this.control.style.display = "none";
                      this.videoModal.style.display = "none";
                      this.loadLyric();

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      document.getElementById("page").style.display = "none";
                      document.getElementById("loading").style.display = "flex";

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "resolveurl",
          value: function resolveurl(url) {
            return url.includes("https://www.dropbox.com") ? url : this.contentPath + btoa(this.openedContent.dirname + "/" + "songlist/" + (url.substring(0, 3) == "../" ? "" : this.openedSong.url + "/") + (url.substring(0, 1) == "/" ? url.substring(1) : url).replace("../", ""));
          }
        }, {
          key: "loadLyric",
          value: function loadLyric() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              var aud, aud1, ct;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (this.contentPath === "") {
                        if (this.openedContent.stream_location !== "") {
                          this.contentPath = this.openedContent.stream_location;
                        } else {
                          this.contentPath = this.openedContent.download_location;
                        }
                      }

                      this.backsong = this.resolveurl(this.songs.data.backsong);
                      this.vocal = this.resolveurl(this.songs.data.vocal);
                      aud = document.getElementById("backsong");

                      if (aud) {
                        this.backsongEl = aud;
                        aud.src = this.backsong;
                      }

                      aud1 = document.getElementById("vocal");

                      if (aud1) {
                        aud1.src = this.vocal;
                        this.vocalEl = aud1;
                      }

                      this.textCurrentDuration = this.songs.data.duration;
                      this.currentDuration = this.convertTime(this.songs.data.duration);
                      this.animation = gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].timeline({
                        paused: true
                      });
                      this.lyrics = Object.entries(this.songs.lyrics);
                      this.lyrics.push([this.textCurrentDuration, {
                        section: "Ending",
                        singer: "",
                        lyrics: _defineProperty({}, this.textCurrentDuration, "")
                      }]);
                      this.lyricCount = this.lyrics.length;
                      this.lyrics.forEach(function (e, i) {
                        var delay = _this.convertTime(e[0]);

                        var wrapper = document.createElement("div");
                        wrapper.id = "wrapper" + i;
                        wrapper.style.cssText = "width:100%;height:100%;display:block;position:absolute;top:0px;left:0px";
                        document.getElementById("content").appendChild(wrapper);
                        var wrap = document.createElement("div");
                        var section = document.createElement("div");
                        var singer = document.createElement("div");
                        var lyricwrap = document.createElement("div");
                        var lyric = document.createElement("div");
                        var nolyric = document.createElement("div");
                        wrap.style.cssText = "display:flex;flex-direction:column;width:90%;max-width:1200px;height:100%;margin:auto;overflow:hidden";
                        section.style.cssText = "display:block;min-height:15vh;line-height:15vh;font-size: clamp(1.6rem, 3vw, 2.4rem);font-weight:bold";
                        singer.style.cssText = "display:block;min-height:8vh;line-height:8vh;font-size: clamp(1.2rem, 2vw, 1.6rem);";
                        lyricwrap.style.cssText = "display:block;flex-grow:1;position:relative";
                        lyric.style.cssText = "display:block;font-size: clamp(1.6rem, 2.4vw, 3rem);position:absolute;width:100%;height:100%;top:0px;left:0px;";
                        nolyric.style.cssText = "display:block;font-size: clamp(1.6rem, 2.4vw, 3rem);flex-grow:1;color:grey;position:absolute;width:100%;height:100%;top:0px;left:0px;"; // singer.style.cssText =
                        //   "display:flex;min-height:80px;background:yellow;align-items:center;justify-content:flex-start";

                        wrap.className = "wrap"; // section.className = "section";
                        // singer.className = "singer";

                        lyric.className = "lyric";
                        nolyric.className = "nolyric";
                        lyric.id = "lyric" + i;
                        section.innerHTML = e[1]["section"];
                        singer.innerHTML = e[1]["singer"];
                        nolyric.innerHTML = "LYRICS OFF";
                        wrap.appendChild(section);
                        wrap.appendChild(singer);
                        lyricwrap.appendChild(lyric);
                        lyricwrap.appendChild(nolyric);
                        wrap.appendChild(lyricwrap);
                        wrapper.appendChild(wrap);
                        var textss = Object.entries(e[1].lyrics);
                        textss.forEach(function (el, il) {
                          var texts = el;
                          var text;
                          var txt = texts[1];

                          if (texts[1] == "<br>") {
                            text = document.createElement("p");
                            text.style.cssText = "margin-bottom:clamp(1.2rem, 2vw, 2.2rem)";
                          } else {
                            text = document.createElement("span");
                            text.style.cssText = "display:inline-block";
                            text.innerHTML = txt;
                          }

                          text.id = "text" + i + "t" + il;
                          document.getElementById("lyric" + i).appendChild(text);
                          setTimeout(function () {
                            _this.animation.to("#text" + i + "t" + il, 0.1, {
                              color: "red",
                              y: -5
                            }, _this.convertTime(el[0]) - 0.2); // if (this.lyrics.length - 1 > i) {
                            //   this.animation.to(
                            //     "#text" + i + "t" + il,
                            //     0.5,
                            //     { scale: 1.2 },
                            //     this.convertTime(this.lyrics[i + 1][0])
                            //   );
                            // }

                          }, 1000);
                        });

                        _this.animation.from("#wrapper" + i, 0.3, {
                          opacity: 0,
                          onStart: function onStart() {
                            _this.currentLyric = i;
                          }
                        }, delay);

                        _this.animation.addLabel(i);

                        if (_this.lyrics.length - 1 > i) {
                          _this.animation.to("#wrapper" + i, 0.3, {
                            opacity: 0
                          }, _this.convertTime(_this.lyrics[i + 1][0]));
                        }
                      });
                      ct = document.getElementById("content");

                      if (this.songs.data.backgroundImage !== "") {
                        ct.style.cssText = "background:url('" + this.resolveurl(this.songs.data.backgroundImage).replace("file:\\", "file://").replace(/\\/g, "/") + "');background-size:cover;background-position:center center;text-align:" + this.songs.data.alignment;
                      } else {
                        ct.style.cssText = "background:" + this.songs.data.backgroundColor + ";text-align:" + this.songs.data.alignment;
                      }

                      this.registerRange();
                      this.showControl();

                      if (!this.platform.is("electron")) {
                        this.doPreLoad(); // setTimeout(() => {
                        //   this.hideLoading();
                        // }, 1000);
                      } else {
                        setTimeout(function () {
                          _this.hideLoading();
                        }, 1000);
                      }

                    case 19:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "doPreLoad",
          value: function doPreLoad() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _arguments = arguments,
                  _this2 = this;

              var elements, loaded;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      elements = [];
                      loaded = 0;
                      _context4.next = 4;
                      return document.querySelectorAll("video").forEach(function (e) {
                        elements.push(e);
                      });

                    case 4:
                      _context4.next = 6;
                      return document.querySelectorAll("audio").forEach(function (e) {
                        elements.push(e);
                      });

                    case 6:
                      _context4.next = 8;
                      return document.querySelectorAll("img").forEach(function (e) {
                        elements.push(e);
                      });

                    case 8:
                      elements.forEach(function (e) {
                        if (e.src.includes("https://www.dropbox.com")) {
                          e.load();
                          e.addEventListener("canplaythrough", function () {
                            loaded++;
                            _this2.loaded = Math.floor(loaded / elements.length * 100);
                            if (loaded == elements.length) _this2.hideLoading();
                          });
                        } else {
                          var xhrReq = new XMLHttpRequest();
                          xhrReq.open("GET", e.src, true);
                          xhrReq.responseType = "blob";

                          xhrReq.onload = function () {
                            if (xhrReq.status === 200) {
                              var vid = URL.createObjectURL(xhrReq.response);
                              e.src = vid;
                              loaded++;
                              _this2.loaded = Math.floor(loaded / elements.length * 100);
                              if (loaded == elements.length) _this2.hideLoading();
                            } else {
                              loaded++;
                              _this2.loaded = Math.floor(loaded / elements.length * 100);
                              if (loaded == elements.length) _this2.hideLoading();
                            }
                          };

                          xhrReq.onerror = function () {
                            console.log("err", _arguments);
                            loaded++;
                            _this2.loaded = Math.floor(loaded / elements.length * 100);
                            if (loaded == elements.length) _this2.hideLoading();
                          };

                          xhrReq.send();
                        }
                      });

                    case 9:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4);
            }));
          }
        }, {
          key: "registerRange",
          value: function registerRange() {
            var _this3 = this;

            this.volume = 50;
            document.getElementById("volume").addEventListener("input", function () {
              _this3.changeVolume();

              _this3.extendshowControl();
            });
            document.getElementById("seeker").addEventListener("input", function () {
              _this3.seek();

              _this3.extendshowControl();
            });
            this.unMuteVocal();
            this.showLyric();
          }
        }, {
          key: "hideLoading",
          value: function hideLoading() {
            document.getElementById("page").style.display = "block";
            document.getElementById("loading").style.display = "none";
            gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].fromTo("#wrapper" + this.currentLyric, {
              opacity: 0
            }, {
              opacity: 1,
              display: "flex",
              duration: 0.3
            });
          }
        }, {
          key: "convertTime",
          value: function convertTime(time) {
            var tm = time.split(":");
            return parseInt(tm[0]) * 60 + parseFloat(tm[1]);
          }
        }, {
          key: "convertDuration",
          value: function convertDuration(seconds) {
            return [// parseInt("" + seconds / 60 / 60),
            parseInt("" + seconds / 60 % 60), parseInt("" + seconds % 60)].join(":").replace(/\b(\d)\b/g, "0$1");
          }
        }, {
          key: "extendshowControl",
          value: function extendshowControl() {
            var _this4 = this;

            if (this.isPlaying == true) {
              clearTimeout(this.controlTimeout);
              this.controlTimeout = setTimeout(function () {
                _this4.control.style.display = "none";
                _this4.visibleControl = false;
              }, 3000);
            }
          }
        }, {
          key: "showControl",
          value: function showControl() {
            var _this5 = this;

            if (this.visibleControl == false) {
              this.control.style.display = "flex";
              this.visibleControl = true;

              if (this.isPlaying == true) {
                this.controlTimeout = setTimeout(function () {
                  _this5.control.style.display = "none";
                  _this5.visibleControl = false;
                }, 3000);
              }
            } else {
              this.control.style.display = "none";
              this.visibleControl = false;
              clearTimeout(this.controlTimeout);
            }
          }
        }, {
          key: "showControlMove",
          value: function showControlMove() {
            var _this6 = this;

            if (this.visibleControl == false) {
              this.control.style.display = "flex";
              this.visibleControl = true;

              if (this.isPlaying == true) {
                this.controlTimeout = setTimeout(function () {
                  _this6.control.style.display = "none";
                  _this6.visibleControl = false;
                }, 3000);
              }
            }
          }
        }, {
          key: "showVideoModal",
          value: function showVideoModal() {
            // this.pausePlay();
            this.videoModalSrc = this.resolveurl(this.songs.data.video);
            this.pauseSong();
            this.control.style.display = "none";
            this.visibleControl = false;
            this.videoModal.style.display = "flex";
            this.videoModalVideo.currentTime = 0;
            this.videoModalVideo.play();
          }
        }, {
          key: "hideVideoModal",
          value: function hideVideoModal() {
            this.videoModalVideo.pause();
            this.videoModal.style.display = "none";
          }
        }, {
          key: "showPlaylistModal",
          value: function showPlaylistModal() {
            this.control.style.display = "none";
            this.visibleControl = false;
            this.playlistModal.style.display = "block";
          }
        }, {
          key: "hidePlaylistModal",
          value: function hidePlaylistModal() {
            this.playlistModal.style.display = "none";
          }
        }, {
          key: "openFullscreen",
          value: function openFullscreen() {
            var elem = this.page;

            if (this.isFullScreen == false) {
              if (elem.requestFullscreen) {
                elem.requestFullscreen();
              } else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
              } else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
              }

              this.isFullScreen = true;
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }

              this.isFullScreen = false;
            }

            this.extendshowControl();
          }
        }, {
          key: "changeVolume",
          value: function changeVolume() {
            this.backsongEl.volume = this.volume / 100;
            this.vocalEl.volume = this.volume / 100;
            this.extendshowControl();
          }
        }, {
          key: "figureOutFile",
          value: function figureOutFile(file) {
            if (this.platform.is("ios")) {
              var baseUrl = location.href.replace("/index.html", "");
              return baseUrl + "".concat(file);
            }

            if (this.platform.is("android")) {
              return "file:///android_asset/www".concat(file);
            }
          }
        }, {
          key: "openPDF",
          value: function openPDF() {
            // let pdf = this.contentPath + this.songs.data.pdf;
            var pdf = this.resolveurl(this.songs.data.pdf);

            if (this.platform.is("desktop") || this.platform.is("mobileweb")) {
              var iframe = '<html><head><style>body, html {width: 100%; height: 100%; margin: 0; padding: 0}</style></head><body><iframe src="' + pdf + '" style="height:calc(100% - 0px);width:calc(100% - 0px);border:none"></iframe></html></body>';
              var win = window.open("", "", "width=600,height=480,toolbar=no,menubar=no,resizable=yes");
              win.document.write(iframe);
            } else {// const options: DocumentViewerOptions = {
              //   title: "My PDF",
              // };
              // this.document.viewDocument(
              //   this.figureOutFile("/assets/l1plan.pdf"),
              //   "application/pdf",
              //   options
              // );
            }
          }
        }, {
          key: "seek",
          value: function seek() {
            clearInterval(this.seekerTimer);
            this.backsongEl.currentTime = this.seeker / 1000 * this.currentDuration;
            this.vocalEl.currentTime = this.seeker / 1000 * this.vocalEl.duration;
            this.updateSeeker();
          }
        }, {
          key: "updateSeeker",
          value: function updateSeeker() {
            var _this7 = this;

            this.seekerTimer = setInterval(function () {
              _this7.seeker = _this7.backsongEl.currentTime / _this7.currentDuration * 1000;

              _this7.animation.progress(_this7.backsongEl.currentTime / _this7.currentDuration);

              _this7.progress = _this7.convertDuration(_this7.backsongEl.currentTime);
              if (_this7.seeker >= 1000) clearInterval(_this7.seekerTimer);
            }, 100);
            this.extendshowControl();
          }
        }, {
          key: "goToLyric",
          value: function goToLyric(num) {
            this.currentLyric = num;
            this.changeLyric();
          }
        }, {
          key: "pauseSong",
          value: function pauseSong() {
            this.backsongEl.pause();
            this.vocalEl.pause();
            clearInterval(this.seekerTimer);
            this.isPlaying = false;
            this.mintl1.restart();
            this.extendshowControl();
          }
        }, {
          key: "playSong",
          value: function playSong() {
            this.backsongEl.play();
            this.vocalEl.play();
            this.updateSeeker();
            this.isPlaying = true;
            this.mintl2.restart();
            this.extendshowControl();
          }
        }, {
          key: "stopSong",
          value: function stopSong() {
            this.backsongEl.pause();
            this.backsongEl.currentTime = 0;
            this.animation.progress(0);
            this.seeker = 0;
            this.progress = "00:00";
            this.currentLyric = 0;
            clearInterval(this.seekerTimer);
            this.isPlaying = false;
            this.vocalEl.pause();
            this.vocalEl.currentTime = 0;
            this.extendshowControl();
          }
        }, {
          key: "muteVocal",
          value: function muteVocal() {
            this.backsongEl.muted = false;
            this.vocalEl.muted = true;
            this.mutedVocal = true;
            this.extendshowControl();
          }
        }, {
          key: "unMuteVocal",
          value: function unMuteVocal() {
            this.backsongEl.muted = true;
            this.vocalEl.muted = false;
            this.mutedVocal = false;
            this.extendshowControl();
          }
        }, {
          key: "hideLyric",
          value: function hideLyric() {
            gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".lyric", 0.1, {
              opacity: 0
            });
            gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".nolyric", 0.1, {
              opacity: 1
            });
            this.lyricHidden = true;
            this.extendshowControl();
          }
        }, {
          key: "showLyric",
          value: function showLyric() {
            gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".lyric", 0.1, {
              opacity: 1
            });
            gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".nolyric", 0.1, {
              opacity: 0
            });
            this.lyricHidden = false;
            this.extendshowControl();
          }
        }, {
          key: "nextLyric",
          value: function nextLyric() {
            this.currentLyric++;
            this.changeLyric();
            this.extendshowControl();
          }
        }, {
          key: "prevLyric",
          value: function prevLyric() {
            this.currentLyric--;
            this.changeLyric();
            this.extendshowControl();
          }
        }, {
          key: "rewindLyric",
          value: function rewindLyric() {
            this.changeLyric();
            this.extendshowControl();
          }
        }, {
          key: "changeLyric",
          value: function changeLyric() {
            var lyric = Object.entries(this.songs.lyrics);
            this.seeker = this.convertTime(lyric[this.currentLyric][0]) / this.currentDuration * 1000;
            this.seek();
          }
        }, {
          key: "registerKey",
          value: function registerKey(ke) {
            if (ke.which == 32) {
              if (this.isPlaying !== true) this.playSong();else this.pauseSong();
            }

            if (ke.keyCode == 37) {
              this.prevLyric();
            }

            if (ke.keyCode == 39) {
              this.nextLyric();
            }

            if (ke.keyCode == 70) {
              this.openFullscreen();
            }

            if (ke.keyCode == 86) {
              if (this.videoModal.style.display == "none") {
                this.showVideoModal();
              } else {
                this.hideVideoModal();
              }
            }

            if (ke.keyCode == 80) {
              this.openPDF();
            }

            if (ke.keyCode == 76) {
              if (this.playlistModal.style.display == "none") {
                this.showPlaylistModal();
              } else {
                this.hidePlaylistModal();
              }
            }
          }
        }, {
          key: "onTap",
          value: function onTap(e) {
            var _this8 = this;

            var now = Date.now();

            if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
              if (this.isPlaying == false) {
                this.playSong();
              } else {
                this.pauseSong();
              }

              this.lastOnStart = 0;
            } else {
              this.lastOnStart = now;
            }

            setTimeout(function () {
              if (now - _this8.lastOnStart == 0) {
                _this8.showControl();
              }
            }, this.DOUBLE_CLICK_THRESHOLD);
          }
        }, {
          key: "onSwipe",
          value: function onSwipe(e) {
            this.preventSingleClick = true;
            clearTimeout(this.timer);

            if (e.type == "swipe") {
              if (e.deltaX >= 100) {
                this.prevLyric();
              }

              if (e.deltaX <= -100) {
                this.nextLyric();
              }
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.stopSong();
            this.unregisterAll();
            this.backsongEl.src = "";
            this.vocalEl.src = "";
          }
        }, {
          key: "registerAll",
          value: function registerAll() {
            document.addEventListener("keydown", this.xf, false);
          }
        }, {
          key: "unregisterAll",
          value: function unregisterAll() {
            document.removeEventListener("keydown", this.xf, false);
          }
        }]);

        return LyricPage;
      }();

      LyricPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"]
        }, {
          type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_2__["WebView"]
        }];
      };

      LyricPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-lyric",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./lyric.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lyric/lyric.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./lyric.page.scss */
        "./src/app/pages/lyric/lyric.page.scss"))["default"]]
      })], LyricPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-lyric-lyric-module-es5.js.map