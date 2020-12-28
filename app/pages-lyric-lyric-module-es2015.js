(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lyric-lyric-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lyric/lyric.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lyric/lyric.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div class=\"loading\" id=\"loading\">Loading... {{loaded}}%</div>\n  <div id=\"page\">\n    <div class=\"page\">\n      <div\n        class=\"content1\"\n        id=\"content\"\n        (tap)=\"onTap($event)\"\n        (swipe)=\"onSwipe($event)\"\n      ></div>\n      <div class=\"controltrigger\" (mousemove)=\"showControlMove()\"></div>\n      <div\n        class=\"controltrigger1\"\n        id=\"controltrigger1\"\n        (mousemove)=\"showControlMove()\"\n      ></div>\n      <div class=\"overlay\" id=\"control\">\n        <div class=\"top\">\n          <div class=\"left\">\n            <ion-back-button defaultHref=\"content\" mode=\"md\"></ion-back-button>\n            <h3>{{songs?.data.title}}</h3>\n          </div>\n          <div class=\"middle\"></div>\n          <div class=\"right\">\n            <span class=\"items\"> {{currentLyric+1}}/{{lyricCount}} </span>\n            <img\n              class=\"icon playlistIcon\"\n              src=\"assets/icon/ic_playlist_play_48px.svg\"\n              alt=\"\"\n              (click)=\"showPlaylistModal()\"\n            />\n          </div>\n        </div>\n        <div class=\"space\" (click)=\"showControl()\"></div>\n        <div class=\"seekerbar\">\n          <span>{{progress}}</span>\n          <input\n            class=\"range-slider__range\"\n            type=\"range\"\n            min=\"0\"\n            max=\"1000\"\n            [(ngModel)]=\"seeker\"\n            id=\"seeker\"\n          />\n          <!-- <ion-range\n            color=\"primary\"\n            mode=\"md\"\n            min=\"0\"\n            max=\"1000\"\n            [(ngModel)]=\"seeker\"\n            id=\"seeker\"\n          ></ion-range> -->\n          <span>{{textCurrentDuration}}</span>\n        </div>\n        <div class=\"bottom\">\n          <div class=\"left\">\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_picture_as_pdf_48px.svg\"\n              alt=\"\"\n              (click)=\"openPDF()\"\n            />\n\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_video_library_48px.svg\"\n              alt=\"\"\n              (click)=\"showVideoModal()\"\n            />\n          </div>\n          <div class=\"middle\">\n            <img\n              class=\"icon1\"\n              src=\"assets/icon/ic_stop_48px.svg\"\n              alt=\"\"\n              (click)=\"stopSong()\"\n            />\n            <img\n              class=\"icon1\"\n              src=\"assets/icon/ic_fast_rewind_48px.svg\"\n              alt=\"\"\n              (click)=\"rewindLyric()\"\n            />\n            <img\n              class=\"icon1\"\n              src=\"assets/icon/ic_skip_previous_48px.svg\"\n              alt=\"\"\n              (click)=\"prevLyric()\"\n            />\n            <img\n              class=\"icon1\"\n              src=\"assets/icon/ic_play_circle_outline_48px.svg\"\n              alt=\"\"\n              (click)=\"playSong()\"\n              *ngIf=\"isPlaying == false\"\n            />\n            <img\n              class=\"icon1\"\n              src=\"assets/icon/ic_pause_circle_outline_48px.svg\"\n              alt=\"\"\n              (click)=\"pauseSong()\"\n              *ngIf=\"isPlaying == true\"\n            />\n            <img\n              class=\"icon1\"\n              src=\"assets/icon/ic_skip_next_48px.svg\"\n              alt=\"\"\n              (click)=\"nextLyric()\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_speaker_notes_48px.svg\"\n              alt=\"\"\n              (click)=\"hideLyric()\"\n              *ngIf=\"lyricHidden == false\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_speaker_notes_off_48px.svg\"\n              alt=\"\"\n              (click)=\"showLyric()\"\n              *ngIf=\"lyricHidden == true\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_mic_48px.svg\"\n              alt=\"\"\n              (click)=\"muteVocal()\"\n              *ngIf=\"mutedVocal == false\"\n            />\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_mic_off_48px.svg\"\n              alt=\"\"\n              (click)=\"unMuteVocal()\"\n              *ngIf=\"mutedVocal == true\"\n            />\n          </div>\n          <div class=\"right\">\n            <div class=\"volumecontrol\" tabindex=\"0\">\n              <input\n                type=\"range\"\n                min=\"0\"\n                max=\"100\"\n                class=\"range-slider__range\"\n                id=\"volume\"\n                [(ngModel)]=\"volume\"\n              />\n              <!-- <ion-range\n                color=\"primary\"\n                class=\"slider\"\n                id=\"volume\"\n                mode=\"md\"\n                min=\"0\"\n                max=\"100\"\n                [(ngModel)]=\"volume\"\n                (input)=\"changeVolume()\"\n              ></ion-range> -->\n              <img\n                class=\"icon\"\n                src=\"assets/icon/ic_volume_up_48px.svg\"\n                alt=\"\"\n              />\n            </div>\n\n            <div class=\"icon\"></div>\n            <img\n              class=\"icon\"\n              src=\"assets/icon/ic_fullscreen_48px.svg\"\n              alt=\"\"\n              (click)=\"openFullscreen()\"\n            />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"playlist\" id=\"playlistmodal\">\n      <div class=\"header\">\n        <img\n          class=\"icon\"\n          src=\"assets/icon/ic_close_48px.svg\"\n          alt=\"\"\n          (click)=\"hidePlaylistModal()\"\n        />\n        <h3>Playlist</h3>\n\n        <span class=\"items\"> {{currentLyric+1}}/{{lyricCount}} </span>\n      </div>\n      <div class=\"list\">\n        <ul>\n          <li\n            *ngFor=\"let lyric of lyrics; let i = index\"\n            (click)=\"goToLyric(i)\"\n            [ngClass]=\"{'active' : currentLyric == i}\"\n          >\n            {{i+1}}. {{lyric[1].section || 'Instrumental'}}\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"videomodal\" id=\"videomodal\">\n      <div class=\"video\">\n        <video\n          [src]=\"videoModalSrc\"\n          controls\n          controls\n          controlsList=\"nodownload\"\n          disablePictureInPicture\n          id=\"videomodalvideo\"\n        ></video>\n        <img\n          class=\"icon\"\n          src=\"assets/icon/ic_close_48px.svg\"\n          alt=\"\"\n          (click)=\"hideVideoModal()\"\n        />\n      </div>\n    </div>\n    <div id=\"played\">\n      <ion-icon name=\"play\"></ion-icon>\n    </div>\n    <div id=\"paused\">\n      <ion-icon name=\"pause\"></ion-icon>\n    </div>\n  </div>\n  <!-- <audio src=\"\" id=\"backsong\"></audio>\n  <audio src=\"\" id=\"vocal\"></audio> -->\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lyric/lyric-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/lyric/lyric-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: LyricPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricPageRoutingModule", function() { return LyricPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lyric_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lyric.page */ "./src/app/pages/lyric/lyric.page.ts");




const routes = [
    {
        path: '',
        component: _lyric_page__WEBPACK_IMPORTED_MODULE_3__["LyricPage"]
    }
];
let LyricPageRoutingModule = class LyricPageRoutingModule {
};
LyricPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LyricPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lyric/lyric.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lyric/lyric.module.ts ***!
  \*********************************************/
/*! exports provided: LyricPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricPageModule", function() { return LyricPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lyric_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lyric-routing.module */ "./src/app/pages/lyric/lyric-routing.module.ts");
/* harmony import */ var _lyric_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lyric.page */ "./src/app/pages/lyric/lyric.page.ts");







let LyricPageModule = class LyricPageModule {
};
LyricPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lyric_routing_module__WEBPACK_IMPORTED_MODULE_5__["LyricPageRoutingModule"]
        ],
        declarations: [_lyric_page__WEBPACK_IMPORTED_MODULE_6__["LyricPage"]]
    })
], LyricPageModule);



/***/ }),

/***/ "./src/app/pages/lyric/lyric.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/lyric/lyric.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*\n * App Global CSS\n * ----------------------------------------------------------------------------\n * Put style rules here that you want to apply globally. These styles are for\n * the entire app and not just one component. Additionally, this file can be\n * used as an entry point to import other CSS/Sass files to be included in the\n * output CSS.\n * For more information on global stylesheets, visit the documentation:\n * https://ionicframework.com/docs/layout/global-stylesheets\n */\n/* Core CSS required for Ionic components to work properly */\nhtml.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\nbody {\n  background: var(--ion-background-color);\n}\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\nhtml.ios ion-modal.modal-card .ion-page > ion-header > ion-toolbar:first-of-type {\n  padding-top: 0px;\n}\nhtml.ios ion-modal .ion-page {\n  border-radius: inherit;\n}\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #3dc2ff) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 61, 194, 255) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #36abe0) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #50c8ff) !important;\n}\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #5260ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 82, 96, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #4854e0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #6370ff) !important;\n}\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #2dd36f) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 45, 211, 111) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #28ba62) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #42d77d) !important;\n}\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffc409) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 196, 9) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0ac08) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffca22) !important;\n}\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #eb445a) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 235, 68, 90) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #cf3c4f) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #ed576b) !important;\n}\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #92949c) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 146, 148, 156) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #808289) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #9d9fa6) !important;\n}\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex;\n  position: absolute;\n  flex-direction: column;\n  justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n.split-pane-visible > .ion-page.split-pane-main {\n  position: relative;\n}\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n.ion-page-invisible {\n  opacity: 0;\n}\n.can-go-back > ion-header ion-back-button {\n  display: block;\n}\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\nion-card.ion-color .ion-inherit-color,\nion-card-header.ion-color .ion-inherit-color {\n  color: inherit;\n}\n.menu-content {\n  transform: translate3d(0,  0,  0);\n}\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n.md .menu-content-reveal {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n.md .menu-content-push {\n  box-shadow: 4px 0px 16px rgba(0, 0, 0, 0.18);\n}\n/* Basic CSS for apps built with Ionic */\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\nb,\nstrong {\n  font-weight: bold;\n}\nimg {\n  max-width: 100%;\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\ntextarea::placeholder {\n  padding-left: 2px;\n}\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n[tappable] {\n  cursor: pointer;\n}\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\ntd,\nth {\n  padding: 0;\n}\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\nhtml:not(.hydrated) body {\n  display: none;\n}\nhtml.plt-pwa {\n  height: 100vh;\n}\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n          text-size-adjust: none;\n}\nhtml {\n  font-family: var(--ion-font-family);\n}\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\nh3 {\n  font-size: 22px;\n}\nh4 {\n  font-size: 20px;\n}\nh5 {\n  font-size: 18px;\n}\nh6 {\n  font-size: 16px;\n}\nsmall {\n  font-size: 75%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -0.5em;\n}\nsub {\n  bottom: -0.25em;\n}\n.ion-hide {\n  display: none !important;\n}\n.ion-hide-up {\n  display: none !important;\n}\n.ion-hide-down {\n  display: none !important;\n}\n@media (min-width: 576px) {\n  .ion-hide-sm-up {\n    display: none !important;\n  }\n}\n@media (max-width: 575.98px) {\n  .ion-hide-sm-down {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-hide-md-up {\n    display: none !important;\n  }\n}\n@media (max-width: 767.98px) {\n  .ion-hide-md-down {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-hide-lg-up {\n    display: none !important;\n  }\n}\n@media (max-width: 991.98px) {\n  .ion-hide-lg-down {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-hide-xl-up {\n    display: none !important;\n  }\n}\n@media (max-width: 1199.98px) {\n  .ion-hide-xl-down {\n    display: none !important;\n  }\n}\n/* Optional CSS utils that can be commented out */\n.ion-no-padding {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.ion-padding {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-top {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n.ion-padding-start {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-end {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-padding-bottom {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-vertical {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n.ion-padding-horizontal {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n.ion-no-margin {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.ion-margin {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-top {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n.ion-margin-start {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-end {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-margin-bottom {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-vertical {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n.ion-margin-horizontal {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n.ion-float-left {\n  float: left !important;\n}\n.ion-float-right {\n  float: right !important;\n}\n.ion-float-start {\n  float: left !important;\n}\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start {\n  float: right !important;\n}\n.ion-float-end {\n  float: right !important;\n}\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end {\n  float: left !important;\n}\n@media (min-width: 576px) {\n  .ion-float-sm-left {\n    float: left !important;\n  }\n\n  .ion-float-sm-right {\n    float: right !important;\n  }\n\n  .ion-float-sm-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start {\n    float: right !important;\n  }\n\n  .ion-float-sm-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end {\n    float: left !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-float-md-left {\n    float: left !important;\n  }\n\n  .ion-float-md-right {\n    float: right !important;\n  }\n\n  .ion-float-md-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start {\n    float: right !important;\n  }\n\n  .ion-float-md-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end {\n    float: left !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-float-lg-left {\n    float: left !important;\n  }\n\n  .ion-float-lg-right {\n    float: right !important;\n  }\n\n  .ion-float-lg-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start {\n    float: right !important;\n  }\n\n  .ion-float-lg-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end {\n    float: left !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-float-xl-left {\n    float: left !important;\n  }\n\n  .ion-float-xl-right {\n    float: right !important;\n  }\n\n  .ion-float-xl-start {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start {\n    float: right !important;\n  }\n\n  .ion-float-xl-end {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end {\n    float: left !important;\n  }\n}\n.ion-text-center {\n  text-align: center !important;\n}\n.ion-text-justify {\n  text-align: justify !important;\n}\n.ion-text-start {\n  text-align: start !important;\n}\n.ion-text-end {\n  text-align: end !important;\n}\n.ion-text-left {\n  text-align: left !important;\n}\n.ion-text-right {\n  text-align: right !important;\n}\n.ion-text-nowrap {\n  white-space: nowrap !important;\n}\n.ion-text-wrap {\n  white-space: normal !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-center {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-center {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-center {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap {\n    white-space: normal !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-center {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap {\n    white-space: normal !important;\n  }\n}\n.ion-text-uppercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n.ion-text-lowercase {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n.ion-text-capitalize {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 768px) {\n  .ion-text-md-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n.ion-align-self-start {\n  align-self: flex-start !important;\n}\n.ion-align-self-end {\n  align-self: flex-end !important;\n}\n.ion-align-self-center {\n  align-self: center !important;\n}\n.ion-align-self-stretch {\n  align-self: stretch !important;\n}\n.ion-align-self-baseline {\n  align-self: baseline !important;\n}\n.ion-align-self-auto {\n  align-self: auto !important;\n}\n.ion-wrap {\n  flex-wrap: wrap !important;\n}\n.ion-nowrap {\n  flex-wrap: nowrap !important;\n}\n.ion-wrap-reverse {\n  flex-wrap: wrap-reverse !important;\n}\n.ion-justify-content-start {\n  justify-content: flex-start !important;\n}\n.ion-justify-content-center {\n  justify-content: center !important;\n}\n.ion-justify-content-end {\n  justify-content: flex-end !important;\n}\n.ion-justify-content-around {\n  justify-content: space-around !important;\n}\n.ion-justify-content-between {\n  justify-content: space-between !important;\n}\n.ion-justify-content-evenly {\n  justify-content: space-evenly !important;\n}\n.ion-align-items-start {\n  align-items: flex-start !important;\n}\n.ion-align-items-center {\n  align-items: center !important;\n}\n.ion-align-items-end {\n  align-items: flex-end !important;\n}\n.ion-align-items-stretch {\n  align-items: stretch !important;\n}\n.ion-align-items-baseline {\n  align-items: baseline !important;\n}\n* {\n  font-family: \"Open Sans\", sans-serif;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n*:focus,\n*:active,\n*:hover {\n  outline: none !important;\n}\nbody {\n  background: #23282d;\n  min-height: 100vh !important;\n}\nion-app {\n  margin-top: env(safe-area-inset-top);\n  margin-bottom: env(safe-area-inset-bottom);\n}\n.range-slider {\n  margin: 60px 0 0 0%;\n}\n.range-slider {\n  width: 100%;\n}\n.range-slider__range {\n  -webkit-appearance: none;\n  width: calc(100% - (73px));\n  height: 10px;\n  border-radius: 5px;\n  background: #d7dcdf;\n  outline: none;\n  padding: 0;\n  margin: 0;\n}\n.range-slider__range::-webkit-slider-thumb {\n  -webkit-appearance: none;\n          appearance: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #10dbb3;\n  cursor: pointer;\n}\n.range-slider__range::-webkit-slider-thumb:hover {\n  background: #1abc9c;\n}\n.range-slider__range:active::-webkit-slider-thumb {\n  background: #1abc9c;\n}\n.range-slider__range::-moz-range-thumb {\n  width: 20px;\n  height: 20px;\n  border: 0;\n  border-radius: 50%;\n  background: #10dbb3;\n  cursor: pointer;\n}\n.range-slider__range::-moz-range-thumb:hover {\n  background: #1abc9c;\n}\n.range-slider__range:active::-moz-range-thumb {\n  background: #1abc9c;\n}\n.range-slider__range:focus::-webkit-slider-thumb {\n  box-shadow: 0 0 0 3px #fff, 0 0 0 6px #1abc9c;\n}\n.range-slider__value {\n  display: inline-block;\n  position: relative;\n  width: 60px;\n  color: #fff;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 3px;\n  background: #10dbb3;\n  padding: 5px 10px;\n  margin-left: 8px;\n}\n.range-slider__value:after {\n  position: absolute;\n  top: 8px;\n  left: -7px;\n  width: 0;\n  height: 0;\n  border-top: 7px solid transparent;\n  border-right: 7px solid #10dbb3;\n  border-bottom: 7px solid transparent;\n  content: \"\";\n}\n::-moz-range-track {\n  background: #d7dcdf;\n  border: 0;\n}\ninput::-moz-focus-inner,\ninput::-moz-focus-outer {\n  border: 0;\n}\n::-webkit-scrollbar {\n  width: 5px;\n}\n::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255, 0.1);\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 5px;\n  -webkit-transition: 0.2s ease;\n  transition: 0.2s ease;\n}\n::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.8);\n}\ninput {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -o-user-select: text;\n  user-select: text;\n}\n@media only screen and (max-width: 900px) {\n  .volumecontrol {\n    right: 40px !important;\n  }\n\n  .icon {\n    width: 30px !important;\n    height: 30px !important;\n    margin: 0px 5px !important;\n  }\n\n  .icon1 {\n    width: 42px !important;\n    height: 42px !important;\n    margin: 0px 5px !important;\n  }\n\n  .bottom {\n    height: 65px !important;\n  }\n\n  .seekerbar {\n    height: 35px !important;\n  }\n\n  .top {\n    height: 50px !important;\n  }\n  .top h3 {\n    font-size: 18px !important;\n  }\n}\n.page {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n.content1 {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n  background: #ffffff;\n}\n.overlay {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  color: white;\n}\n.overlay .space {\n  display: flex;\n  width: 100%;\n  height: auto;\n  flex-grow: 1;\n}\n.overlay .icon {\n  height: 34px;\n  width: 34px;\n  margin: 0px 10px;\n  cursor: pointer;\n}\n.overlay .icon1 {\n  height: 48px;\n  width: 48px;\n  margin: 0px 10px;\n  cursor: pointer;\n}\n.overlay .playlistIcon {\n  margin-top: 4px !important;\n}\n.overlay h3,\n.overlay span {\n  padding: 0;\n  margin: 0;\n}\n.overlay .left {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n}\n.overlay .middle {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\n.overlay .right {\n  display: flex;\n  align-items: center;\n  height: 100%;\n}\n.overlay .top {\n  background: #23282d;\n  display: flex;\n  width: 100%;\n  height: 60px;\n  padding: 0px 15px;\n  justify-content: space-between;\n}\n.overlay .seekerbar {\n  background: #23282d;\n  display: flex;\n  width: 100%;\n  height: 40px;\n  padding: 0px 20px;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: auto;\n}\n.overlay .seekerbar input[type=range] {\n  flex-grow: 1;\n}\n.overlay .seekerbar span {\n  width: 80px;\n  text-align: center;\n}\n.overlay .bottom {\n  background: #23282d;\n  display: flex;\n  width: 100%;\n  height: 80px;\n  padding: 0px 15px;\n  justify-content: space-between;\n}\n.playlist {\n  display: none;\n  width: 50vw;\n  max-width: 500px;\n  min-width: 350px;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.8);\n  position: fixed;\n  right: 0px;\n  top: 0px;\n  color: white;\n}\n.playlist .header {\n  height: 60px;\n  display: flex;\n  padding: 0px 20px;\n  align-items: center;\n  justify-content: flex-start;\n}\n.playlist .header h3 {\n  padding: 0;\n  margin: 0;\n}\n.playlist .header span {\n  margin-left: auto;\n}\n.playlist .list {\n  display: block;\n  height: calc(100vh - 60px);\n  width: 100%;\n  overflow-y: auto;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n}\n.playlist .list ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.playlist .list ul li {\n  height: 40px;\n}\n.videomodal {\n  display: none;\n  width: 100vw;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.5);\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  justify-content: center;\n  align-items: center;\n}\n.videomodal .video {\n  display: block;\n  width: calc(100vw - 60px);\n  height: calc(100vh - 60px);\n  background: #222222;\n  border-radius: 20px;\n  position: relative;\n  padding: 20px;\n}\n.videomodal .video video {\n  width: 100%;\n  height: 100%;\n  background: black;\n}\n.videomodal .video img {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  height: 32px;\n  cursor: pointer;\n  background: darkgrey;\n  border-radius: 100%;\n  padding: 5px;\n}\n.volumecontrol {\n  position: absolute;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 3px 5px;\n  border-radius: 30px;\n  right: 65px;\n  width: 60px;\n  overflow: hidden;\n  text-align: right;\n}\n.volumecontrol ion-range,\n.volumecontrol input {\n  width: 0;\n  display: none;\n  margin: 0px 10px;\n}\n.volumecontrol .icon {\n  margin: 0;\n}\n.volumecontrol:hover,\n.volumecontrol:focus {\n  width: auto;\n  background: #222222;\n}\n.volumecontrol:hover ion-range,\n.volumecontrol:hover input,\n.volumecontrol:focus ion-range,\n.volumecontrol:focus input {\n  width: 100px;\n  display: block;\n}\n.controltrigger {\n  display: block;\n  width: 100%;\n  height: 80px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n}\n.controltrigger1 {\n  display: block;\n  width: 100%;\n  height: 80px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n}\n.wrapper img,\n.wrapper video,\n.wrapper iframe,\n.wrapper div {\n  width: 100%;\n  height: 100%;\n}\n.list li {\n  text-transform: uppercase;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-left: 20px;\n}\n.list li.active {\n  background: rgba(255, 255, 255, 0.1);\n}\n.list li:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n.loading {\n  display: flex;\n  width: 100vw;\n  height: 100vh;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-weight: bold;\n  z-index: 1000;\n  position: fixed;\n  background: #343a41;\n  color: white;\n}\n.controltrigger {\n  display: block;\n  width: 100%;\n  height: 100px;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  padding: 0px 20px;\n}\n#played,\n#paused {\n  pointer-events: none;\n  width: 80px;\n  height: 80px;\n  border-radius: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 30px;\n}\n.wrap {\n  background: white;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9nbG9iYWwuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9kaXNwbGF5LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvcGFkZGluZy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2Zsb2F0LWVsZW1lbnRzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtYWxpZ25tZW50LnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtYWxpZ25tZW50LmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9mbGV4LXV0aWxzLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL2ZsZXgtdXRpbHMuY3NzIiwic3JjL2FwcC9wYWdlcy9seXJpYy9seXJpYy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztFQUFBO0FBV0EsNERBQUE7QUNIQTtFQUNFLDZGQUFBO0FDUEY7QURTQTtFQUNFLDBEQUFBO0FDTkY7QURTQTtFQUNFLDBDQUFBO0FDTkY7QURTQTtFQUNFLHVDQUFBO0FDTkY7QURTQTtFQUNFLGdCQUFBO0FDTkY7QURtQkE7RUFDRSxnQkFBQTtBQ2hCRjtBRHNCQTtFQUNFLHNCQUFBO0FDbkJGO0FENENFO0VBVEEsOERBQUE7RUFDQSwyRUFBQTtFQUNBLHdFQUFBO0VBQ0EseUZBQUE7RUFDQSxxRUFBQTtFQUNBLG1FQUFBO0FDL0JGO0FEbUNFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDdEJGO0FEMEJFO0VBVEEsK0RBQUE7RUFDQSwyRUFBQTtFQUNBLHlFQUFBO0VBQ0EsMEZBQUE7RUFDQSxzRUFBQTtFQUNBLG9F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dUNBO0VBQ0UsZUFoRDZCO0FDWS9CO0FEdUNBO0VBQ0UsZUFqRDZCO0FDYS9CO0FEdUNBO0VBQ0UsY0FBQTtBQ3BDRjtBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7QUQwQ0E7RUFDRSxXQUFBO0FDdkNGO0FEMENBO0VBQ0UsZUFBQTtBQ3ZDRjtBQ3REQTtFQUNFLHdCQUFBO0FDUEY7QURpQkk7RUFDRSx3QkFBQTtBQ2ROO0FEcUJJO0VBQ0Usd0JBQUE7QUNsQk47QVhzSEk7RVU3R0E7SUFDRSx3QkFBQTtFQ0xKO0FBQ0Y7QVh5Skk7RVU5SUE7SUFDRSx3QkFBQTtFQ1JKO0FBQ0Y7QVgyR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ0tKO0FBQ0Y7QVgrSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ0VKO0FBQ0Y7QVhpR0k7RVU3R0E7SUFDRSx3QkFBQTtFQ2VKO0FBQ0Y7QVhxSUk7RVU5SUE7SUFDRSx3QkFBQTtFQ1lKO0FBQ0Y7QVh1Rkk7RVU3R0E7SUFDRSx3QkFBQTtFQ3lCSjtBQUNGO0FYMkhJO0VVOUlBO0lBQ0Usd0JBQUE7RUNzQko7QUFDRjtBZC9CQSxpREFBQTtBZUpBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RVo4TkUsZVk1TmU7RVo2TmYsZ0JZN05lO0VaaVFqQixjWWpRaUI7RVprUWpCLGlCWWxRaUI7QUNibkI7QURnQkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSwwQ0FBQTtFWnlORSxzQ1k1T007RVo2T04sdUNZN09NO0VaNlFSLHFDWTdRUTtFWjhRUix3Q1k5UVE7QUNVVjtBYnNPTTtFQUNFO0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDWXpQQTtJWjBQQSw4Q1kxUEE7SVoyUEEsNkNZM1BBO0laNFBBLDRDWTVQQTtFQ21CUjtBQUNGO0FESUE7RUFDRSx1Q0FBQTtFWm9QQSxxQ1k3UVE7QUN5QlY7QURLQTtFQUNFLHlDQUFBO0VaNk1FLHNDWTVPTTtBQzZCVjtBYm1OTTtFQUNFO0lBRUksbUJBQUE7SUFNRiwrQ1l6UEE7SVowUEEsOENZMVBBO0VDbUNSO0FBQ0Y7QURBQTtFQUNFLHVDQUFBO0Vad01FLHVDWTdPTTtBQ3lDVjtBYnVNTTtFQUNFO0lBS0ksb0JBQUE7SUFLRiw2Q1kzUEE7SVo0UEEsNENZNVBBO0VDK0NSO0FBQ0Y7QUROQTtFQUNFLDBDQUFBO0VabU9BLHdDWTlRUTtBQ3FEVjtBRExBO0VBQ0UsdUNBQUE7RUFDQSwwQ0FBQTtFWjJOQSxxQ1k3UVE7RVo4UVIsd0NZOVFRO0FDMkRWO0FESkE7RUFDRSx5Q0FBQTtFQUNBLHVDQUFBO0VabUxFLHNDWTVPTTtFWjZPTix1Q1k3T007QUNpRVY7QWIrS007RUFDRTtJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ1l6UEE7SVowUEEsOENZMVBBO0laMlBBLDZDWTNQQTtJWjRQQSw0Q1k1UEE7RUMwRVI7QUFDRjtBRFRBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0Vaa0tFLGNZaEtjO0VaaUtkLGVZaktjO0VacU1oQixhWXJNZ0I7RVpzTWhCLGdCWXRNZ0I7QUNjbEI7QURYQTtFQUNFLHVDQUFBO0VBQ0EscUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHdDQUFBO0VaNkpFLG9DWTNPSztFWjRPTCxxQ1k1T0s7RVo0UVAsbUNZNVFPO0VaNlFQLHNDWTdRTztBQ2dHVDtBYitJTTtFQUNFO0lBRUksa0JBQUE7SUFHQSxtQkFBQTtJQUdGLDZDWXhQRDtJWnlQQyw0Q1l6UEQ7SVowUEMsMkNZMVBEO0laMlBDLDBDWTNQRDtFQ3lHUDtBQUNGO0FEdkJBO0VBQ0UscUNBQUE7RVp3TEEsbUNZNVFPO0FDK0dUO0FEdEJBO0VBQ0UsdUNBQUE7RVppSkUsb0NZM09LO0FDbUhUO0FiNEhNO0VBQ0U7SUFFSSxrQkFBQTtJQU1GLDZDWXhQRDtJWnlQQyw0Q1l6UEQ7RUN5SFA7QUFDRjtBRDNCQTtFQUNFLHFDQUFBO0VaNElFLHFDWTVPSztBQytIVDtBYmdITTtFQUNFO0lBS0ksbUJBQUE7SUFLRiwyQ1kxUEQ7SVoyUEMsMENZM1BEO0VDcUlQO0FBQ0Y7QURqQ0E7RUFDRSx3Q0FBQTtFWnVLQSxzQ1k3UU87QUMySVQ7QURoQ0E7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0VaK0pBLG1DWTVRTztFWjZRUCxzQ1k3UU87QUNpSlQ7QUQvQkE7RUFDRSx1Q0FBQTtFQUNBLHFDQUFBO0VadUhFLG9DWTNPSztFWjRPTCxxQ1k1T0s7QUN1SlQ7QWJ3Rk07RUFDRTtJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1l4UEQ7SVp5UEMsNENZelBEO0laMFBDLDJDWTFQRDtJWjJQQywwQ1kzUEQ7RUNnS1A7QUFDRjtBQzlKSTtFZG1hRSxzQkFBQTtBZS9hTjtBRGdCSTtFZCtaRSx1QkFBQTtBZTNhTjtBRGdCSTtFZDZZRSxzQkFBQTtBZXpaTjtBZjRMVztFQWdPTCx1QkFBQTtBZXpaTjtBRGFJO0VkZ1pFLHVCQUFBO0FlelpOO0FmcUxXO0VBdU9MLHNCQUFBO0FlelpOO0FmNEdJO0VjbEhBO0lkbWFFLHNCQUFBO0VleFpKOztFRFBFO0lkK1pFLHVCQUFBO0VlcFpKOztFRFBFO0lkNllFLHNCQUFBO0VlbFlKO0VmcUtTO0lBZ09MLHVCQUFBO0VlbFlKOztFRFZFO0lkZ1pFLHVCQUFBO0VlbFlKO0VmOEpTO0lBdU9MLHNCQUFBO0VlbFlKO0FBQ0Y7QWZvRkk7RWNsSEE7SWRtYUUsc0JBQUE7RWVqWUo7O0VEOUJFO0lkK1pFLHVCQUFBO0VlN1hKOztFRDlCRTtJZDZZRSxzQkFBQTtFZTNXSjtFZjhJUztJQWdPTCx1QkFBQTtFZTNXSjs7RURqQ0U7SWRnWkUsdUJBQUE7RWUzV0o7RWZ1SVM7SUF1T0wsc0JBQUE7RWUzV0o7QUFDRjtBZjZESTtFY2xIQTtJZG1hRSxzQkFBQTtFZTFXSjs7RURyREU7SWQrWkUsdUJBQUE7RWV0V0o7O0VEckRFO0lkNllFLHNCQUFBO0VlcFZKO0VmdUhTO0lBZ09MLHVCQUFBO0VlcFZKOztFRHhERTtJZGdaRSx1QkFBQTtFZXBWSjtFZmdIUztJQXVPTCxzQkFBQTtFZXBWSjtBQUNGO0Fmc0NJO0VjbEhBO0lkbWFFLHNCQUFBO0VlblZKOztFRDVFRTtJZCtaRSx1QkFBQTtFZS9VSjs7RUQ1RUU7SWQ2WUUsc0JBQUE7RWU3VEo7RWZnR1M7SUFnT0wsdUJBQUE7RWU3VEo7O0VEL0VFO0lkZ1pFLHVCQUFBO0VlN1RKO0VmeUZTO0lBdU9MLHNCQUFBO0VlN1RKO0FBQ0Y7QUNuR0k7RUFDRSw2QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSwwQkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsMkJBQUE7QUNiTjtBRGdCSTtFQUNFLDRCQUFBO0FDYk47QURnQkk7RUFDRSw4QkFBQTtBQ2JOO0FEZ0JJO0VBQ0UsOEJBQUE7QUNiTjtBakJrR0k7RWdCbEhBO0lBQ0UsNkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsMkJBQUE7RUNvQko7O0VEakJFO0lBQ0UsNEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7O0VEakJFO0lBQ0UsOEJBQUE7RUNvQko7QUFDRjtBakJnRUk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsMkJBQUE7RUNxREo7O0VEbERFO0lBQ0UsNEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7O0VEbERFO0lBQ0UsOEJBQUE7RUNxREo7QUFDRjtBakIrQkk7RWdCbEhBO0lBQ0UsNkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsMkJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsNEJBQUE7RUNzRko7O0VEbkZFO0lBQ0UsOEJBQUE7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QTtFQUNBLFNBQUE7QUF3S0Y7QUFyS0U7Ozs7RUFJRSxXQUFBO0VBQ0EsWUFBQTtBQXdLSjtBQXJLQTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBd0tGO0FBdktFO0VBQ0Usb0NBQUE7QUF5S0o7QUF0S0E7RUFDRSxvQ0FBQTtBQXlLRjtBQXZLQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTBLRjtBQXZLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQTBLRjtBQXhLQTs7RUFFRSxvQkFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQTBLRjtBQXhLQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQTJLRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2x5cmljL2x5cmljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBBcHAgR2xvYmFsIENTU1xuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogUHV0IHN0eWxlIHJ1bGVzIGhlcmUgdGhhdCB5b3Ugd2FudCB0byBhcHBseSBnbG9iYWxseS4gVGhlc2Ugc3R5bGVzIGFyZSBmb3JcbiAqIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXMgZmlsZSBjYW4gYmVcbiAqIHVzZWQgYXMgYW4gZW50cnkgcG9pbnQgdG8gaW1wb3J0IG90aGVyIENTUy9TYXNzIGZpbGVzIHRvIGJlIGluY2x1ZGVkIGluIHRoZVxuICogb3V0cHV0IENTUy5cbiAqIEZvciBtb3JlIGluZm9ybWF0aW9uIG9uIGdsb2JhbCBzdHlsZXNoZWV0cywgdmlzaXQgdGhlIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL2xheW91dC9nbG9iYWwtc3R5bGVzaGVldHNcbiAqL1xuXG4vKiBDb3JlIENTUyByZXF1aXJlZCBmb3IgSW9uaWMgY29tcG9uZW50cyB0byB3b3JrIHByb3Blcmx5ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9jb3JlLmNzc1wiO1xuXG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzXCI7XG5cbi8qIE9wdGlvbmFsIENTUyB1dGlscyB0aGF0IGNhbiBiZSBjb21tZW50ZWQgb3V0ICovXG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9wYWRkaW5nLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LWFsaWdubWVudC5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL3RleHQtdHJhbnNmb3JtYXRpb24uY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy9mbGV4LXV0aWxzLmNzc1wiO1xuXG4vLyBAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRAMzAwOzQwMDs3MDA7ODAwJmRpc3BsYXk9c3dhcFwiKTtcbiRjb2xvclByaW1hcnk6ICMyMzI4MmQ7XG4kY29sb3JTZWNvbmRhcnk6ICMzNDNhNDE7XG4kY29sb3JBY2NlbnQ6ICMyNjZlYjU7XG5cbioge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4qOmZvY3VzLFxuKjphY3RpdmUsXG4qOmhvdmVyIHtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuYm9keSB7XG4gIGJhY2tncm91bmQ6ICN7JGNvbG9yUHJpbWFyeX07XG4gIG1pbi1oZWlnaHQ6IDEwMHZoICFpbXBvcnRhbnQ7XG59XG5pb24tYXBwIHtcbiAgbWFyZ2luLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICBtYXJnaW4tYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG59XG4ucmFuZ2Utc2xpZGVyIHtcbiAgbWFyZ2luOiA2MHB4IDAgMCAwJTtcbn1cblxuLy8gQmFzZSBDb2xvcnNcbiRzaGFkZS0xMDogIzEwZGJiMyAhZGVmYXVsdDtcbiRzaGFkZS0xOiAjZDdkY2RmICFkZWZhdWx0O1xuJHNoYWRlLTA6ICNmZmYgIWRlZmF1bHQ7XG4kdGVhbDogIzFhYmM5YyAhZGVmYXVsdDtcblxuLy8gUmFuZ2UgU2xpZGVyXG4kcmFuZ2Utd2lkdGg6IDEwMCUgIWRlZmF1bHQ7XG5cbiRyYW5nZS1oYW5kbGUtY29sb3I6ICRzaGFkZS0xMCAhZGVmYXVsdDtcbiRyYW5nZS1oYW5kbGUtY29sb3ItaG92ZXI6ICR0ZWFsICFkZWZhdWx0O1xuJHJhbmdlLWhhbmRsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4kcmFuZ2UtdHJhY2stY29sb3I6ICRzaGFkZS0xICFkZWZhdWx0O1xuJHJhbmdlLXRyYWNrLWhlaWdodDogMTBweCAhZGVmYXVsdDtcblxuJHJhbmdlLWxhYmVsLWNvbG9yOiAkc2hhZGUtMTAgIWRlZmF1bHQ7XG4kcmFuZ2UtbGFiZWwtd2lkdGg6IDYwcHggIWRlZmF1bHQ7XG5cbi5yYW5nZS1zbGlkZXIge1xuICB3aWR0aDogJHJhbmdlLXdpZHRoO1xufVxuXG4ucmFuZ2Utc2xpZGVyX19yYW5nZSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtICgjeyRyYW5nZS1sYWJlbC13aWR0aCArIDEzcHh9KSk7XG4gIGhlaWdodDogJHJhbmdlLXRyYWNrLWhlaWdodDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kOiAkcmFuZ2UtdHJhY2stY29sb3I7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICAvLyBSYW5nZSBIYW5kbGVcbiAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgIGFwcGVhcmFuY2U6IG5vbmU7XG4gICAgd2lkdGg6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcbiAgICBoZWlnaHQ6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogJHJhbmdlLWhhbmRsZS1jb2xvcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3ItaG92ZXI7XG4gICAgfVxuICB9XG5cbiAgJjphY3RpdmU6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtaGFuZGxlLWNvbG9yLWhvdmVyO1xuICB9XG5cbiAgJjo6LW1vei1yYW5nZS10aHVtYiB7XG4gICAgd2lkdGg6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcbiAgICBoZWlnaHQ6ICRyYW5nZS1oYW5kbGUtc2l6ZTtcbiAgICBib3JkZXI6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICRyYW5nZS1oYW5kbGUtY29sb3I7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtaGFuZGxlLWNvbG9yLWhvdmVyO1xuICAgIH1cbiAgfVxuXG4gICY6YWN0aXZlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAkcmFuZ2UtaGFuZGxlLWNvbG9yLWhvdmVyO1xuICB9XG5cbiAgLy8gRm9jdXMgc3RhdGVcbiAgJjpmb2N1cyB7XG4gICAgJjo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4ICRzaGFkZS0wLCAwIDAgMCA2cHggJHRlYWw7XG4gICAgfVxuICB9XG59XG5cbi8vIFJhbmdlIExhYmVsXG4ucmFuZ2Utc2xpZGVyX192YWx1ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogJHJhbmdlLWxhYmVsLXdpZHRoO1xuICBjb2xvcjogJHNoYWRlLTA7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYmFja2dyb3VuZDogJHJhbmdlLWxhYmVsLWNvbG9yO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcblxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA4cHg7XG4gICAgbGVmdDogLTdweDtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXRvcDogN3B4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICRyYW5nZS1sYWJlbC1jb2xvcjtcbiAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxufVxuXG4vLyBGaXJlZm94IE92ZXJyaWRlc1xuOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogJHJhbmdlLXRyYWNrLWNvbG9yO1xuICBib3JkZXI6IDA7XG59XG5cbmlucHV0OjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtb3V0ZXIge1xuICBib3JkZXI6IDA7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZTtcbn1cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbmlucHV0IHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW8tdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG4iLG51bGwsImh0bWwuaW9zIHtcbiAgLS1pb24tZGVmYXVsdC1mb250OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiSGVsdmV0aWNhIE5ldWVcIiwgXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbn1cblxuaHRtbC5tZCB7XG4gIC0taW9uLWRlZmF1bHQtZm9udDogXCJSb2JvdG9cIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG5odG1sIHtcbiAgLS1pb24tZm9udC1mYW1pbHk6IHZhcigtLWlvbi1kZWZhdWx0LWZvbnQpO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IpO1xufVxuXG5ib2R5LmJhY2tkcm9wLW5vLXNjcm9sbCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmh0bWwuaW9zIGlvbi1tb2RhbC5tb2RhbC1jYXJkIC5pb24tcGFnZSA+IGlvbi1oZWFkZXIgPiBpb24tdG9vbGJhcjpmaXJzdC1vZi10eXBlIHtcbiAgcGFkZGluZy10b3A6IDBweDtcbn1cblxuaHRtbC5pb3MgaW9uLW1vZGFsIC5pb24tcGFnZSB7XG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG59XG5cbi5pb24tY29sb3ItcHJpbWFyeSB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LCAjMzg4MGZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiLCA1NiwgMTI4LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSwgIzMxNzFlMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCwgIzRjOGRmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zZWNvbmRhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LCAjM2RjMmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1yZ2IsIDYxLCAxOTQsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QsICNmZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXNoYWRlLCAjMzZhYmUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICM1MGM4ZmYpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItdGVydGlhcnkge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnksICM1MjYwZmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktcmdiLCA4MiwgOTYsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci10ZXJ0aWFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktY29udHJhc3QtcmdiLCAyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXRlcnRpYXJ5LXNoYWRlLCAjNDg1NGUwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3ItdGVydGlhcnktdGludCwgIzYzNzBmZikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1zdWNjZXNzIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MsICMyZGQzNmYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1yZ2IsIDQ1LCAyMTEsIDExMSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3Q6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LCAjZmZmKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzLXNoYWRlLCAjMjhiYTYyKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy10aW50LCAjNDJkNzdkKSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWNvbG9yLXdhcm5pbmcge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZywgI2ZmYzQwOSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXJnYiwgMjU1LCAxOTYsIDkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdCwgIzAwMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1jb250cmFzdC1yZ2IsIDAsIDAsIDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3Itd2FybmluZy1zaGFkZSwgI2UwYWMwOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctdGludCwgI2ZmY2EyMikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYW5nZXIge1xuICAtLWlvbi1jb2xvci1iYXNlOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLCAjZWI0NDVhKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1iYXNlLXJnYjogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IsIDIzNSwgNjgsIDkwKSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLWRhbmdlci1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItc2hhZGUsICNjZjNjNGYpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1kYW5nZXItdGludCwgI2VkNTc2YikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1saWdodCB7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHZhcigtLWlvbi1jb2xvci1saWdodCwgI2Y0ZjVmOCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IsIDI0NCwgMjQ1LCAyNDgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QsICMwMDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0LXJnYjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0LXJnYiwgMCwgMCwgMCkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSwgI2Q3ZDhkYSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXRpbnQsICNmNWY2ZjkpICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tY29sb3ItbWVkaXVtIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSwgIzkyOTQ5YykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItYmFzZS1yZ2I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiLCAxNDYsIDE0OCwgMTU2KSAhaW1wb3J0YW50O1xuICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLWNvbnRyYXN0LXJnYiwgMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3Itc2hhZGU6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUsICM4MDgyODkpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXRpbnQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCwgIzlkOWZhNikgIWltcG9ydGFudDtcbn1cblxuLmlvbi1jb2xvci1kYXJrIHtcbiAgLS1pb24tY29sb3ItYmFzZTogdmFyKC0taW9uLWNvbG9yLWRhcmssICMyMjI0MjgpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IsIDM0LCAzNiwgNDApICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLWNvbnRyYXN0OiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItY29udHJhc3QtcmdiOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdC1yZ2IsIDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG4gIC0taW9uLWNvbG9yLXNoYWRlOiB2YXIoLS1pb24tY29sb3ItZGFyay1zaGFkZSwgIzFlMjAyMykgIWltcG9ydGFudDtcbiAgLS1pb24tY29sb3ItdGludDogdmFyKC0taW9uLWNvbG9yLWRhcmstdGludCwgIzM4M2EzZSkgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlIHtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29udGFpbjogbGF5b3V0IHNpemUgc3R5bGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDA7XG59XG5cbi5zcGxpdC1wYW5lLXZpc2libGUgPiAuaW9uLXBhZ2Uuc3BsaXQtcGFuZS1tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG5pb24tcm91dGUsXG5pb24tcm91dGUtcmVkaXJlY3QsXG5pb24tcm91dGVyLFxuaW9uLXNlbGVjdC1vcHRpb24sXG5pb24tbmF2LWNvbnRyb2xsZXIsXG5pb24tbWVudS1jb250cm9sbGVyLFxuaW9uLWFjdGlvbi1zaGVldC1jb250cm9sbGVyLFxuaW9uLWFsZXJ0LWNvbnRyb2xsZXIsXG5pb24tbG9hZGluZy1jb250cm9sbGVyLFxuaW9uLW1vZGFsLWNvbnRyb2xsZXIsXG5pb24tcGlja2VyLWNvbnRyb2xsZXIsXG5pb24tcG9wb3Zlci1jb250cm9sbGVyLFxuaW9uLXRvYXN0LWNvbnRyb2xsZXIsXG4uaW9uLXBhZ2UtaGlkZGVuLFxuW2hpZGRlbl0ge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmlvbi1wYWdlLWludmlzaWJsZSB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYW4tZ28tYmFjayA+IGlvbi1oZWFkZXIgaW9uLWJhY2stYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbmh0bWwucGx0LWlvcy5wbHQtaHlicmlkLCBodG1sLnBsdC1pb3MucGx0LXB3YSB7XG4gIC0taW9uLXN0YXR1c2Jhci1wYWRkaW5nOiAyMHB4O1xufVxuXG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiAyMHB4KSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IHZhcigtLWlvbi1zdGF0dXNiYXItcGFkZGluZyk7XG4gIH1cbn1cbkBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApKSB7XG4gIGh0bWwge1xuICAgIC0taW9uLXNhZmUtYXJlYS10b3A6IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGNvbnN0YW50KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuICAgIC0taW9uLXNhZmUtYXJlYS1sZWZ0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtbGVmdCk7XG4gICAgLS1pb24tc2FmZS1hcmVhLXJpZ2h0OiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5Ac3VwcG9ydHMgKHBhZGRpbmctdG9wOiBlbnYoc2FmZS1hcmVhLWluc2V0LXRvcCkpIHtcbiAgaHRtbCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICAgIC0taW9uLXNhZmUtYXJlYS1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtbGVmdDogZW52KHNhZmUtYXJlYS1pbnNldC1sZWZ0KTtcbiAgICAtLWlvbi1zYWZlLWFyZWEtcmlnaHQ6IGVudihzYWZlLWFyZWEtaW5zZXQtcmlnaHQpO1xuICB9XG59XG5pb24tY2FyZC5pb24tY29sb3IgLmlvbi1pbmhlcml0LWNvbG9yLFxuaW9uLWNhcmQtaGVhZGVyLmlvbi1jb2xvciAuaW9uLWluaGVyaXQtY29sb3Ige1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuLm1lbnUtY29udGVudCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgIDAsICAwKTtcbn1cblxuLm1lbnUtY29udGVudC1vcGVuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5pb3MgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiAtOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG5bZGlyPXJ0bF0uaW9zIC5tZW51LWNvbnRlbnQtcmV2ZWFsIHtcbiAgYm94LXNoYWRvdzogOHB4IDAgNDJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xufVxuXG4ubWQgLm1lbnUtY29udGVudC1yZXZlYWwge1xuICBib3gtc2hhZG93OiA0cHggMHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjE4KTtcbn1cblxuLm1kIC5tZW51LWNvbnRlbnQtcHVzaCB7XG4gIGJveC1zaGFkb3c6IDRweCAwcHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMTgpO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1jb3JlLmNzcy5tYXAgKi9cbiIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLCJhdWRpbyxcbmNhbnZhcyxcbnByb2dyZXNzLFxudmlkZW8ge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGhlaWdodDogMDtcbn1cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMDtcbn1cblxuc3ZnOm5vdCg6cm9vdCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5maWd1cmUge1xuICBtYXJnaW46IDFlbSA0MHB4O1xufVxuXG5ociB7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXItd2lkdGg6IDA7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuXG5wcmUge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5sYWJlbCxcbmlucHV0LFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbmZvcm0sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0IHtcbiAgbWFyZ2luOiAwO1xuICBmb250OiBpbmhlcml0O1xuICBjb2xvcjogaW5oZXJpdDtcbn1cblxuaHRtbCBpbnB1dFt0eXBlPWJ1dHRvbl0sXG5pbnB1dFt0eXBlPXJlc2V0XSxcbmlucHV0W3R5cGU9c3VibWl0XSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbmEsXG5hIGRpdixcbmEgc3BhbixcbmEgaW9uLWljb24sXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbixcbmJ1dHRvbiBkaXYsXG5idXR0b24gc3BhbixcbmJ1dHRvbiBpb24taWNvbixcbmJ1dHRvbiBpb24tbGFiZWwsXG4uaW9uLXRhcHBhYmxlLFxuW3RhcHBhYmxlXSxcblt0YXBwYWJsZV0gZGl2LFxuW3RhcHBhYmxlXSBzcGFuLFxuW3RhcHBhYmxlXSBpb24taWNvbixcblt0YXBwYWJsZV0gaW9uLWxhYmVsLFxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xufVxuXG5hIGlvbi1sYWJlbCxcbmJ1dHRvbiBpb24tbGFiZWwge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgZm9udC1zdHlsZTogaW5oZXJpdDtcbiAgZm9udC12YXJpYW50OiBpbmhlcml0O1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cblt0YXBwYWJsZV0ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmFbZGlzYWJsZWRdLFxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogMDtcbn1cblxuaW5wdXRbdHlwZT1jaGVja2JveF0sXG5pbnB1dFt0eXBlPXJhZGlvXSB7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9bnVtYmVyXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLmNzcy5tYXAgKi9cbiIsbnVsbCwiKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lO1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbn1cblxuaHRtbDpub3QoLmh5ZHJhdGVkKSBib2R5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuaHRtbC5wbHQtcHdhIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuYm9keSB7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xuICAtd2Via2l0LXVzZXItZHJhZzogbm9uZTtcbiAgLW1zLWNvbnRlbnQtem9vbWluZzogbm9uZTtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yLXk6IG5vbmU7XG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG59XG5cbi8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0cnVjdHVyZS5jc3MubWFwICovXG4iLG51bGwsImh0bWwge1xuICBmb250LWZhbWlseTogdmFyKC0taW9uLWZvbnQtZmFtaWx5KTtcbn1cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnksICMzODgwZmYpO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuaDEge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI2cHg7XG59XG5oMiB7XG4gIG1hcmdpbi10b3A6IDE4cHg7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cbmgzIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbmg2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xufVxuXG5zdWIsXG5zdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD10eXBvZ3JhcGh5LmNzcy5tYXAgKi9cbiIsbnVsbCwiLmlvbi1oaWRlIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWhpZGUtdXAge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24taGlkZS1kb3duIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi1oaWRlLXNtLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xuICAuaW9uLWhpZGUtc20tZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1oaWRlLW1kLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuaW9uLWhpZGUtbWQtZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi1oaWRlLWxnLXVwIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuaW9uLWhpZGUtbGctZG93biB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24taGlkZS14bC11cCB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5pb24taGlkZS14bC1kb3duIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGlzcGxheS5jc3MubWFwICovXG4iLG51bGwsIi5pb24tbm8tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbiAgLS1wYWRkaW5nLWVuZDogMDtcbiAgLS1wYWRkaW5nLXRvcDogMDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pb24tcGFkZGluZyB7XG4gIC0tcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAtLXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgLXdlYmtpdC1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICB9XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICAtLXBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIHBhZGRpbmctdG9wOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG4uaW9uLXBhZGRpbmctc3RhcnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctc3RhcnQge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLXBhZGRpbmctZW5kIHtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLXBhZGRpbmctZW5kIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1wYWRkaW5nLWJvdHRvbSB7XG4gIC0tcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1ib3R0b206IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbn1cbi5pb24tcGFkZGluZy12ZXJ0aWNhbCB7XG4gIC0tcGFkZGluZy10b3A6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLXRvcDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWJvdHRvbTogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAtLXBhZGRpbmctc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgLS1wYWRkaW5nLWVuZDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgcGFkZGluZy1yaWdodDogdmFyKC0taW9uLXBhZGRpbmcsIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1wYWRkaW5nLWhvcml6b250YWwge1xuICAgIHBhZGRpbmctbGVmdDogdW5zZXQ7XG4gICAgcGFkZGluZy1yaWdodDogdW5zZXQ7XG4gICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlvbi1wYWRkaW5nLCAxNnB4KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiB2YXIoLS1pb24tcGFkZGluZywgMTZweCk7XG4gIH1cbn1cblxuLmlvbi1uby1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogMDtcbiAgLS1tYXJnaW4tZW5kOiAwO1xuICAtLW1hcmdpbi10b3A6IDA7XG4gIC0tbWFyZ2luLWJvdHRvbTogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLmlvbi1tYXJnaW4ge1xuICAtLW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1sZWZ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLXRvcDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICAtd2Via2l0LW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAgIG1hcmdpbi1pbmxpbmUtZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi10b3Age1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbn1cbi5pb24tbWFyZ2luLXN0YXJ0IHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1zdGFydCB7XG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgfVxufVxuXG4uaW9uLW1hcmdpbi1lbmQge1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tcmlnaHQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuQHN1cHBvcnRzIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSBvciAoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIHtcbiAgLmlvbi1tYXJnaW4tZW5kIHtcbiAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtbWFyZ2luLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICB9XG59XG5cbi5pb24tbWFyZ2luLWJvdHRvbSB7XG4gIC0tbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xufVxuLmlvbi1tYXJnaW4tdmVydGljYWwge1xuICAtLW1hcmdpbi10b3A6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1ib3R0b206IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tdG9wOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG4uaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgLS1tYXJnaW4tc3RhcnQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICAtLW1hcmdpbi1lbmQ6IHZhcigtLWlvbi1tYXJnaW4sIDE2cHgpO1xuICBtYXJnaW4tbGVmdDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIG1hcmdpbi1yaWdodDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG59XG5Ac3VwcG9ydHMgKG1hcmdpbi1pbmxpbmUtc3RhcnQ6IDApIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCkge1xuICAuaW9uLW1hcmdpbi1ob3Jpem9udGFsIHtcbiAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LW1hcmdpbi1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgbWFyZ2luLWlubGluZS1zdGFydDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gICAgLXdlYmtpdC1tYXJnaW4tZW5kOiB2YXIoLS1pb24tbWFyZ2luLCAxNnB4KTtcbiAgICBtYXJnaW4taW5saW5lLWVuZDogdmFyKC0taW9uLW1hcmdpbiwgMTZweCk7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9cGFkZGluZy5jc3MubWFwICovXG4iLG51bGwsIi5pb24tZmxvYXQtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tZmxvYXQtcmlnaHQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1zdGFydCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5bZGlyPXJ0bF0gLmlvbi1mbG9hdC1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc3RhcnQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1mbG9hdC1lbmQge1xuICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbn1cbltkaXI9cnRsXSAuaW9uLWZsb2F0LWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtZW5kIHtcbiAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gIC5pb24tZmxvYXQtc20tbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtc20tcmlnaHQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1zdGFydCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1zbS1zdGFydCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tc3RhcnQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1zbS1lbmQge1xuICAgIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LXNtLWVuZCwgOmhvc3QtY29udGV4dChbZGlyPXJ0bF0pIC5pb24tZmxvYXQtc20tZW5kIHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmlvbi1mbG9hdC1tZC1sZWZ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi1mbG9hdC1tZC1yaWdodCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLXN0YXJ0IHtcbiAgICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xuICB9XG4gIFtkaXI9cnRsXSAuaW9uLWZsb2F0LW1kLXN0YXJ0LCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1zdGFydCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LW1kLWVuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbWQtZW5kLCA6aG9zdC1jb250ZXh0KFtkaXI9cnRsXSkgLmlvbi1mbG9hdC1tZC1lbmQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLWZsb2F0LWxnLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LWxnLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQtbGctc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQtbGctZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC1sZy1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LWxnLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAuaW9uLWZsb2F0LXhsLWxlZnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLWZsb2F0LXhsLXJpZ2h0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtc3RhcnQge1xuICAgIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cbiAgW2Rpcj1ydGxdIC5pb24tZmxvYXQteGwtc3RhcnQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLXN0YXJ0IHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tZmxvYXQteGwtZW5kIHtcbiAgICBmbG9hdDogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuICBbZGlyPXJ0bF0gLmlvbi1mbG9hdC14bC1lbmQsIDpob3N0LWNvbnRleHQoW2Rpcj1ydGxdKSAuaW9uLWZsb2F0LXhsLWVuZCB7XG4gICAgZmxvYXQ6IGxlZnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiMgc291cmNlTWFwcGluZ1VSTD1mbG9hdC1lbGVtZW50cy5jc3MubWFwICovXG4iLG51bGwsIi5pb24tdGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWp1c3RpZnkge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1zdGFydCB7XG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1lbmQge1xuICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWxlZnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1yaWdodCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1ub3dyYXAge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC13cmFwIHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgLmlvbi10ZXh0LXNtLWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tanVzdGlmeSB7XG4gICAgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXN0YXJ0IHtcbiAgICB0ZXh0LWFsaWduOiBzdGFydCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWVuZCB7XG4gICAgdGV4dC1hbGlnbjogZW5kICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtc20tbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLW5vd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLXdyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1tZC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICAuaW9uLXRleHQtbGctY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1qdXN0aWZ5IHtcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctc3RhcnQge1xuICAgIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctZW5kIHtcbiAgICB0ZXh0LWFsaWduOiBlbmQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctbm93cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctd3JhcCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5pb24tdGV4dC14bC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWp1c3RpZnkge1xuICAgIHRleHQtYWxpZ246IGp1c3RpZnkgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1zdGFydCB7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1lbmQge1xuICAgIHRleHQtYWxpZ246IGVuZCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXhsLWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1ub3dyYXAge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC13cmFwIHtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC1hbGlnbm1lbnQuY3NzLm1hcCAqL1xuIixudWxsLCIuaW9uLXRleHQtdXBwZXJjYXNlIHtcbiAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tdGV4dC1sb3dlcmNhc2Uge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbn1cblxuLmlvbi10ZXh0LWNhcGl0YWxpemUge1xuICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAuaW9uLXRleHQtc20tdXBwZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LXNtLWxvd2VyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1zbS1jYXBpdGFsaXplIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5pb24tdGV4dC1tZC11cHBlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbWQtbG93ZXJjYXNlIHtcbiAgICAvKiBzdHlsZWxpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVjbGFyYXRpb24tbm8taW1wb3J0YW50ICovXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmlvbi10ZXh0LW1kLWNhcGl0YWxpemUge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmlvbi10ZXh0LWxnLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC1sZy1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQtbGctY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLmlvbi10ZXh0LXhsLXVwcGVyY2FzZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2UgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pb24tdGV4dC14bC1sb3dlcmNhc2Uge1xuICAgIC8qIHN0eWxlbGludC1kaXNhYmxlLW5leHQtbGluZSBkZWNsYXJhdGlvbi1uby1pbXBvcnRhbnQgKi9cbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaW9uLXRleHQteGwtY2FwaXRhbGl6ZSB7XG4gICAgLyogc3R5bGVsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlY2xhcmF0aW9uLW5vLWltcG9ydGFudCAqL1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9dGV4dC10cmFuc2Zvcm1hdGlvbi5jc3MubWFwICovXG4iLG51bGwsIi5pb24tYWxpZ24tc2VsZi1zdGFydCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLWVuZCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1jZW50ZXIge1xuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1zZWxmLXN0cmV0Y2gge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1iYXNlbGluZSB7XG4gIGFsaWduLXNlbGY6IGJhc2VsaW5lICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24tc2VsZi1hdXRvIHtcbiAgYWxpZ24tc2VsZjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAge1xuICBmbGV4LXdyYXA6IHdyYXAgIWltcG9ydGFudDtcbn1cblxuLmlvbi1ub3dyYXAge1xuICBmbGV4LXdyYXA6IG5vd3JhcCAhaW1wb3J0YW50O1xufVxuXG4uaW9uLXdyYXAtcmV2ZXJzZSB7XG4gIGZsZXgtd3JhcDogd3JhcC1yZXZlcnNlICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LXN0YXJ0IHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tanVzdGlmeS1jb250ZW50LWVuZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1qdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWp1c3RpZnktY29udGVudC1ldmVubHkge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSAhaW1wb3J0YW50O1xufVxuXG4uaW9uLWFsaWduLWl0ZW1zLXN0YXJ0IHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmlvbi1hbGlnbi1pdGVtcy1jZW50ZXIge1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtZW5kIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtc3RyZXRjaCB7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tYWxpZ24taXRlbXMtYmFzZWxpbmUge1xuICBhbGlnbi1pdGVtczogYmFzZWxpbmUgIWltcG9ydGFudDtcbn1cblxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZmxleC11dGlscy5jc3MubWFwICovXG4iLCIvKlxuICogQXBwIEdsb2JhbCBDU1NcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgZ2xvYmFsbHkuIFRoZXNlIHN0eWxlcyBhcmUgZm9yXG4gKiB0aGUgZW50aXJlIGFwcCBhbmQgbm90IGp1c3Qgb25lIGNvbXBvbmVudC4gQWRkaXRpb25hbGx5LCB0aGlzIGZpbGUgY2FuIGJlXG4gKiB1c2VkIGFzIGFuIGVudHJ5IHBvaW50IHRvIGltcG9ydCBvdGhlciBDU1MvU2FzcyBmaWxlcyB0byBiZSBpbmNsdWRlZCBpbiB0aGVcbiAqIG91dHB1dCBDU1MuXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiBnbG9iYWwgc3R5bGVzaGVldHMsIHZpc2l0IHRoZSBkb2N1bWVudGF0aW9uOlxuICogaHR0cHM6Ly9pb25pY2ZyYW1ld29yay5jb20vZG9jcy9sYXlvdXQvZ2xvYmFsLXN0eWxlc2hlZXRzXG4gKi9cbi8qIENvcmUgQ1NTIHJlcXVpcmVkIGZvciBJb25pYyBjb21wb25lbnRzIHRvIHdvcmsgcHJvcGVybHkgKi9cbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2NvcmUuY3NzXCI7XG4vKiBCYXNpYyBDU1MgZm9yIGFwcHMgYnVpbHQgd2l0aCBJb25pYyAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvbm9ybWFsaXplLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Rpc3BsYXkuY3NzXCI7XG4vKiBPcHRpb25hbCBDU1MgdXRpbHMgdGhhdCBjYW4gYmUgY29tbWVudGVkIG91dCAqL1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvcGFkZGluZy5jc3NcIjtcbkBpbXBvcnQgXCJ+QGlvbmljL2FuZ3VsYXIvY3NzL2Zsb2F0LWVsZW1lbnRzLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzXCI7XG5AaW1wb3J0IFwifkBpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzc1wiO1xuQGltcG9ydCBcIn5AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3NcIjtcbioge1xuICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbio6Zm9jdXMsXG4qOmFjdGl2ZSxcbio6aG92ZXIge1xuICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiAjMjMyODJkO1xuICBtaW4taGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuXG5pb24tYXBwIHtcbiAgbWFyZ2luLXRvcDogZW52KHNhZmUtYXJlYS1pbnNldC10b3ApO1xuICBtYXJnaW4tYm90dG9tOiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG59XG5cbi5yYW5nZS1zbGlkZXIge1xuICBtYXJnaW46IDYwcHggMCAwIDAlO1xufVxuXG4ucmFuZ2Utc2xpZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yYW5nZS1zbGlkZXJfX3JhbmdlIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogY2FsYygxMDAlIC0gKDczcHgpKTtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNkN2RjZGY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5yYW5nZS1zbGlkZXJfX3JhbmdlOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzEwZGJiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzFhYmM5Yztcbn1cbi5yYW5nZS1zbGlkZXJfX3JhbmdlOmFjdGl2ZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWIge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogIzEwZGJiMztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6Oi1tb3otcmFuZ2UtdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjMWFiYzljO1xufVxuLnJhbmdlLXNsaWRlcl9fcmFuZ2U6YWN0aXZlOjotbW96LXJhbmdlLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzFhYmM5Yztcbn1cbi5yYW5nZS1zbGlkZXJfX3JhbmdlOmZvY3VzOjotd2Via2l0LXNsaWRlci10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCAjZmZmLCAwIDAgMCA2cHggIzFhYmM5Yztcbn1cblxuLnJhbmdlLXNsaWRlcl9fdmFsdWUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDYwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJhY2tncm91bmQ6ICMxMGRiYjM7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuLnJhbmdlLXNsaWRlcl9fdmFsdWU6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogOHB4O1xuICBsZWZ0OiAtN3B4O1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItdG9wOiA3cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogN3B4IHNvbGlkICMxMGRiYjM7XG4gIGJvcmRlci1ib3R0b206IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuOjotbW96LXJhbmdlLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2Q3ZGNkZjtcbiAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lcixcbmlucHV0OjotbW96LWZvY3VzLW91dGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDVweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2U7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XG59XG5cbmlucHV0IHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW8tdXNlci1zZWxlY3Q6IHRleHQ7XG4gIC1tcy11c2VyLXNlbGVjdDogdGV4dDtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnZvbHVtZWNvbnRyb2wge1xuICAgIHJpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAuaWNvbiB7XG4gICAgd2lkdGg6IDMwcHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5pY29uMSB7XG4gICAgd2lkdGg6IDQycHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDQycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDBweCA1cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIC5ib3R0b20ge1xuICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnNlZWtlcmJhciB7XG4gICAgaGVpZ2h0OiAzNXB4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICAudG9wIHtcbiAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgfVxuICAudG9wIGgzIHtcbiAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcbiAgfVxufVxuLnBhZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uY29udGVudDEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xufVxuXG4ub3ZlcmxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ub3ZlcmxheSAuc3BhY2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmbGV4LWdyb3c6IDE7XG59XG4ub3ZlcmxheSAuaWNvbiB7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDM0cHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vdmVybGF5IC5pY29uMSB7XG4gIGhlaWdodDogNDhweDtcbiAgd2lkdGg6IDQ4cHg7XG4gIG1hcmdpbjogMHB4IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5vdmVybGF5IC5wbGF5bGlzdEljb24ge1xuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcbn1cbi5vdmVybGF5IGgzLFxuLm92ZXJsYXkgc3BhbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5vdmVybGF5IC5sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ub3ZlcmxheSAubWlkZGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vdmVybGF5IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5vdmVybGF5IC50b3Age1xuICBiYWNrZ3JvdW5kOiAjMjMyODJkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLm92ZXJsYXkgLnNlZWtlcmJhciB7XG4gIGJhY2tncm91bmQ6ICMyMzI4MmQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IGF1dG87XG59XG4ub3ZlcmxheSAuc2Vla2VyYmFyIGlucHV0W3R5cGU9cmFuZ2VdIHtcbiAgZmxleC1ncm93OiAxO1xufVxuLm92ZXJsYXkgLnNlZWtlcmJhciBzcGFuIHtcbiAgd2lkdGg6IDgwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5vdmVybGF5IC5ib3R0b20ge1xuICBiYWNrZ3JvdW5kOiAjMjMyODJkO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAwcHggMTVweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucGxheWxpc3Qge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNTB2dztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgbWluLXdpZHRoOiAzNTBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucGxheWxpc3QgLmhlYWRlciB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMHB4IDIwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cbi5wbGF5bGlzdCAuaGVhZGVyIGgzIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuLnBsYXlsaXN0IC5oZWFkZXIgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuLnBsYXlsaXN0IC5saXN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cbi5wbGF5bGlzdCAubGlzdCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cbi5wbGF5bGlzdCAubGlzdCB1bCBsaSB7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLnZpZGVvbW9kYWwge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi52aWRlb21vZGFsIC52aWRlbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDYwcHgpO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuLnZpZGVvbW9kYWwgLnZpZGVvIHZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogYmxhY2s7XG59XG4udmlkZW9tb2RhbCAudmlkZW8gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIHJpZ2h0OiAxMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogZGFya2dyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLnZvbHVtZWNvbnRyb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHJpZ2h0OiA2NXB4O1xuICB3aWR0aDogNjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4udm9sdW1lY29udHJvbCBpb24tcmFuZ2UsXG4udm9sdW1lY29udHJvbCBpbnB1dCB7XG4gIHdpZHRoOiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBtYXJnaW46IDBweCAxMHB4O1xufVxuLnZvbHVtZWNvbnRyb2wgLmljb24ge1xuICBtYXJnaW46IDA7XG59XG5cbi52b2x1bWVjb250cm9sOmhvdmVyLFxuLnZvbHVtZWNvbnRyb2w6Zm9jdXMge1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZDogIzIyMjIyMjtcbn1cbi52b2x1bWVjb250cm9sOmhvdmVyIGlvbi1yYW5nZSxcbi52b2x1bWVjb250cm9sOmhvdmVyIGlucHV0LFxuLnZvbHVtZWNvbnRyb2w6Zm9jdXMgaW9uLXJhbmdlLFxuLnZvbHVtZWNvbnRyb2w6Zm9jdXMgaW5wdXQge1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udHJvbHRyaWdnZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgbGVmdDogMHB4O1xufVxuXG4uY29udHJvbHRyaWdnZXIxIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbn1cblxuLndyYXBwZXIgaW1nLFxuLndyYXBwZXIgdmlkZW8sXG4ud3JhcHBlciBpZnJhbWUsXG4ud3JhcHBlciBkaXYge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGlzdCBsaSB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmxpc3QgbGkuYWN0aXZlIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4ubGlzdCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbn1cblxuLmxvYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB6LWluZGV4OiAxMDAwO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJhY2tncm91bmQ6ICMzNDNhNDE7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRyb2x0cmlnZ2VyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4O1xufVxuXG4jcGxheWVkLFxuI3BhdXNlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbn1cblxuLndyYXAge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IGJsYWNrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/lyric/lyric.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/lyric/lyric.page.ts ***!
  \*******************************************/
/*! exports provided: LyricPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LyricPage", function() { return LyricPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var src_app_services_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/content.service */ "./src/app/services/content.service.ts");






let LyricPage = class LyricPage {
    constructor(platform, loadingController, contentService, webview // private fileOpener: FileOpener
    ) {
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
        this.backsongEl = new Audio();
        this.vocalEl = new Audio();
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
            this.contentPath =
                this.contentService.path + this.openedContent.dirname + "/";
        }
    }
    ngOnInit() {
        this.init();
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mintl1 = gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].timeline();
            this.mintl2 = gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].timeline();
            this.mintl1.from("#paused", 0.3, { opacity: 0, scale: 0.8 });
            this.mintl1.to("#paused", 0.3, { opacity: 0, scale: 1.2 });
            this.mintl2.from("#played", 0.3, { opacity: 0, scale: 0.8 });
            this.mintl2.to("#played", 0.3, { opacity: 0, scale: 1.2 });
            this.registerAll();
            this.presentLoading();
            let songData = yield this.contentService
                .getJson(`songlist/${this.openedSong.url}/song.json`, this.contentPath)
                .toPromise();
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
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            document.getElementById("page").style.display = "none";
            document.getElementById("loading").style.display = "flex";
        });
    }
    resolveurl(url) {
        let dll = this.platform.is("ios") && !this.platform.is("mobileweb")
            ? "." + url.split(".").pop()
            : "";
        return url.includes("https://www.dropbox.com")
            ? url
            : this.contentPath +
                btoa(this.openedContent.dirname +
                    "/" +
                    "songlist/" +
                    (url.substring(0, 3) == "../" ? "" : this.openedSong.url + "/") +
                    (url.substring(0, 1) == "/" ? url.substring(1) : url).replace("../", "")) +
                dll;
    }
    // resolveurlpdf(url) {
    //   let pth = this.contentPath.replace("downloadcontent", "downloadpdf");
    //   return url.includes("https://www.dropbox.com")
    //     ? url
    //     : pth +
    //         btoa(
    //           this.openedContent.dirname +
    //             "/" +
    //             "songlist/" +
    //             (url.substring(0, 3) == "../" ? "" : this.openedSong.url + "/") +
    //             (url.substring(0, 1) == "/" ? url.substring(1) : url).replace(
    //               "../",
    //               ""
    //             )
    //         );
    // }
    loadLyric() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let sb;
            sb = document.querySelectorAll(".seekerbar");
            sb.forEach((e) => {
                e.style.display = "flex";
            });
            if (this.contentPath === "") {
                if (this.openedContent.stream_location !== "") {
                    this.contentPath = this.openedContent.stream_location;
                }
                else {
                    this.contentPath = this.openedContent.download_location;
                }
            }
            this.backsong = this.resolveurl(this.songs.data.backsong);
            this.vocal = this.resolveurl(this.songs.data.vocal);
            this.backsongEl.src = this.backsong;
            // this.vocalEl = new Audio();
            this.vocalEl.src = this.vocal;
            this.textCurrentDuration = this.songs.data.duration;
            this.currentDuration = this.convertTime(this.songs.data.duration);
            this.animation = gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].timeline({ paused: true });
            this.lyrics = Object.entries(this.songs.lyrics);
            this.lyrics.push([
                this.textCurrentDuration,
                {
                    section: "Ending",
                    singer: "",
                    lyrics: {
                        [this.textCurrentDuration]: "",
                    },
                },
            ]);
            this.lyricCount = this.lyrics.length;
            this.lyrics.forEach((e, i) => {
                let delay = this.convertTime(e[0]);
                let wrapper = document.createElement("div");
                wrapper.id = "wrapper" + i;
                wrapper.style.cssText =
                    "width:100%;height:100%;display:block;position:absolute;top:0px;left:0px";
                document.getElementById("content").appendChild(wrapper);
                let wrap = document.createElement("div");
                let section = document.createElement("div");
                if (e[1]["singer"] !== "") {
                    let singer = document.createElement("div");
                    singer.style.cssText =
                        "display:block;min-height:8vh;line-height:8vh;font-size: clamp(1.2rem, 2vw, 2rem);";
                    singer.innerHTML = e[1]["singer"];
                    wrap.appendChild(singer);
                }
                let lyricwrap = document.createElement("div");
                let lyric = document.createElement("div");
                let nolyric = document.createElement("div");
                wrap.style.cssText =
                    "display:flex;flex-direction:column;width:90%;max-width:1200px;height:100%;margin:auto;overflow:hidden";
                section.style.cssText =
                    "display:block;min-height:20vh;line-height:22vh;font-size: clamp(2rem, 3.4vw, 3.4rem);font-weight:bold";
                lyricwrap.style.cssText = "display:block;flex-grow:1;position:relative";
                lyric.style.cssText =
                    "display:block;font-size: clamp(1.6rem, 3.5vw, 4rem);position:absolute;width:100%;height:100%;top:0px;left:0px;font-weight:bold";
                nolyric.style.cssText =
                    "display:block;font-size: clamp(1.6rem, 3vw, 3rem);flex-grow:1;color:grey;position:absolute;width:100%;height:100%;top:0px;left:0px;font-weight:bold";
                // singer.style.cssText =
                //   "display:flex;min-height:80px;background:yellow;align-items:center;justify-content:flex-start";
                wrap.className = "wrap";
                // section.className = "section";
                // singer.className = "singer";
                lyric.className = "lyric";
                nolyric.className = "nolyric";
                lyric.id = "lyric" + i;
                section.innerHTML = e[1]["section"];
                nolyric.innerHTML = "LYRICS OFF";
                wrap.appendChild(section);
                lyricwrap.appendChild(lyric);
                lyricwrap.appendChild(nolyric);
                wrap.appendChild(lyricwrap);
                wrapper.appendChild(wrap);
                let textss = Object.entries(e[1].lyrics);
                textss.forEach((el, il) => {
                    let texts = el;
                    let text;
                    let txt = texts[1];
                    if (texts[1] == "<br>") {
                        text = document.createElement("p");
                        text.style.cssText = "margin-bottom:clamp(1.2rem, 1.8vw, 2rem)";
                    }
                    else {
                        text = document.createElement("span");
                        text.style.cssText = "display:inline-block";
                        text.innerHTML = txt;
                    }
                    text.id = "text" + i + "t" + il;
                    document.getElementById("lyric" + i).appendChild(text);
                    setTimeout(() => {
                        this.animation.to("#text" + i + "t" + il, 0.1, { color: "red", y: -5 }, this.convertTime(el[0]));
                    }, 1000);
                });
                this.animation.from("#wrapper" + i, 0.1, {
                    opacity: 0,
                    onStart: () => {
                        this.currentLyric = i;
                    },
                }, delay);
                this.animation.addLabel(i);
                if (this.lyrics.length - 1 > i) {
                    this.animation.to("#wrapper" + i, 0.1, { opacity: 0 }, this.convertTime(this.lyrics[i + 1][0]));
                }
            });
            let ct;
            ct = document.getElementById("content");
            if (this.songs.data.backgroundImage !== "") {
                ct.style.cssText =
                    "background:url('" +
                        this.resolveurl(this.songs.data.backgroundImage)
                            .replace("file:\\", "file://")
                            .replace(/\\/g, "/") +
                        "');background-size:cover;background-position:center center;text-align:" +
                        this.songs.data.alignment;
            }
            else {
                ct.style.cssText =
                    "background:" +
                        this.songs.data.backgroundColor +
                        ";text-align:" +
                        this.songs.data.alignment;
            }
            this.registerRange();
            this.showControl();
            if (!this.platform.is("electron")) {
                this.doPreLoad();
                // setTimeout(() => {
                //   this.hideLoading();
                // }, 1000);
            }
            else {
                setTimeout(() => {
                    this.hideLoading();
                }, 1000);
            }
        });
    }
    doPreLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let elements = [];
            let loaded = 0;
            yield document.querySelectorAll("video").forEach((e) => {
                elements.push(e);
            });
            yield document.querySelectorAll("audio").forEach((e) => {
                elements.push(e);
            });
            elements.push(this.backsongEl);
            elements.push(this.vocalEl);
            yield document.querySelectorAll("img").forEach((e) => {
                elements.push(e);
            });
            elements.forEach((e) => {
                if (e.src.includes("https://www.dropbox.com")) {
                    e.load();
                    e.addEventListener("canplaythrough", () => {
                        loaded++;
                        this.loaded = Math.floor((loaded / elements.length) * 100);
                        if (loaded == elements.length)
                            this.hideLoading();
                    });
                }
                else {
                    let xhrReq = new XMLHttpRequest();
                    xhrReq.open("GET", e.src, true);
                    xhrReq.responseType = "blob";
                    xhrReq.onload = () => {
                        if (xhrReq.status === 200) {
                            let vid = URL.createObjectURL(xhrReq.response);
                            e.src = vid;
                            loaded++;
                            this.loaded = Math.floor((loaded / elements.length) * 100);
                            if (loaded == elements.length)
                                this.hideLoading();
                        }
                        else {
                            loaded++;
                            this.loaded = Math.floor((loaded / elements.length) * 100);
                            if (loaded == elements.length)
                                this.hideLoading();
                        }
                    };
                    xhrReq.onerror = () => {
                        console.log("err", arguments);
                        loaded++;
                        this.loaded = Math.floor((loaded / elements.length) * 100);
                        if (loaded == elements.length)
                            this.hideLoading();
                    };
                    xhrReq.send();
                }
            });
        });
    }
    registerRange() {
        this.volume = 100;
        document.getElementById("volume").addEventListener("input", () => {
            this.changeVolume();
            this.extendshowControl();
        });
        document.getElementById("seeker").addEventListener("input", () => {
            this.seek();
            this.extendshowControl();
        });
        this.unMuteVocal();
        this.showLyric();
    }
    hideLoading() {
        document.getElementById("page").style.display = "block";
        document.getElementById("loading").style.display = "none";
        gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].fromTo("#wrapper" + this.currentLyric, { opacity: 0 }, { opacity: 1, display: "flex", duration: 0.3 });
    }
    convertTime(time) {
        let tm = time.split(":");
        return parseInt(tm[0]) * 60 + parseFloat(tm[1]);
    }
    convertDuration(seconds) {
        return [
            // parseInt("" + seconds / 60 / 60),
            parseInt("" + ((seconds / 60) % 60)),
            parseInt("" + (seconds % 60)),
        ]
            .join(":")
            .replace(/\b(\d)\b/g, "0$1");
    }
    extendshowControl() {
        if (this.isPlaying == true) {
            clearTimeout(this.controlTimeout);
            this.controlTimeout = setTimeout(() => {
                this.control.style.display = "none";
                this.visibleControl = false;
            }, 3000);
        }
    }
    showControl() {
        if (this.visibleControl == false) {
            this.control.style.display = "flex";
            this.visibleControl = true;
            if (this.isPlaying == true) {
                this.controlTimeout = setTimeout(() => {
                    this.control.style.display = "none";
                    this.visibleControl = false;
                }, 3000);
            }
        }
        else {
            this.control.style.display = "none";
            this.visibleControl = false;
            clearTimeout(this.controlTimeout);
        }
    }
    showControlMove() {
        if (this.visibleControl == false) {
            this.control.style.display = "flex";
            this.visibleControl = true;
            if (this.isPlaying == true) {
                this.controlTimeout = setTimeout(() => {
                    this.control.style.display = "none";
                    this.visibleControl = false;
                }, 3000);
            }
        }
    }
    showVideoModal() {
        // this.pausePlay();
        this.videoModalSrc = this.resolveurl(this.songs.data.video);
        this.pauseSong();
        this.control.style.display = "none";
        this.visibleControl = false;
        this.videoModal.style.display = "flex";
        this.videoModalVideo.currentTime = 0;
        this.videoModalVideo.play();
    }
    hideVideoModal() {
        this.videoModalVideo.pause();
        this.videoModal.style.display = "none";
    }
    showPlaylistModal() {
        this.control.style.display = "none";
        this.visibleControl = false;
        this.playlistModal.style.display = "block";
    }
    hidePlaylistModal() {
        this.playlistModal.style.display = "none";
    }
    openFullscreen() {
        let elem = this.page;
        if (this.isFullScreen == false) {
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            }
            else if (elem.webkitRequestFullscreen) {
                /* Safari */
                elem.webkitRequestFullscreen();
            }
            else if (elem.msRequestFullscreen) {
                /* IE11 */
                elem.msRequestFullscreen();
            }
            this.isFullScreen = true;
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            this.isFullScreen = false;
        }
        this.extendshowControl();
    }
    changeVolume() {
        this.backsongEl.volume = this.volume / 100;
        this.vocalEl.volume = this.volume / 100;
        this.extendshowControl();
    }
    figureOutFile(file) {
        if (this.platform.is("ios")) {
            const baseUrl = location.href.replace("/index.html", "");
            return baseUrl + `${file}`;
        }
        if (this.platform.is("android")) {
            return `file:///android_asset/www${file}`;
        }
    }
    openPDF() {
        // let pdf = this.contentPath + this.songs.data.pdf;
        let pdf = this.resolveurl(this.songs.data.pdf);
        if (this.platform.is("desktop") || this.platform.is("mobileweb")) {
            var iframe = '<html><head><style>body, html {width: 100%; height: 100%; margin: 0; padding: 0}</style></head><body><iframe src="' +
                pdf +
                '" style="height:calc(100% - 0px);width:calc(100% - 0px);border:none"></iframe></html></body>';
            var win = window.open("", "", "width=600,height=480,toolbar=no,menubar=no,resizable=yes");
            win.document.write(iframe);
        }
        else {
            // const options: DocumentViewerOptions = {
            //   title: "My PDF",
            // };
            // this.document.viewDocument(
            //   this.figureOutFile("/assets/l1plan.pdf"),
            //   "application/pdf",
            //   options
            // );
        }
    }
    seek() {
        clearInterval(this.seekerTimer);
        this.backsongEl.currentTime = (this.seeker / 1000) * this.currentDuration;
        this.vocalEl.currentTime = (this.seeker / 1000) * this.currentDuration;
        this.updateSeeker();
    }
    updateSeeker() {
        this.seekerTimer = setInterval(() => {
            // this.seeker = (this.backsongEl.currentTime / this.currentDuration) * 1000;
            this.seeker = this.seeker + (100 / (this.currentDuration * 1000)) * 1000;
            this.animation.progress(this.seeker / 1000);
            this.progress = this.convertDuration((this.seeker / 1000) * this.currentDuration);
            if (this.seeker >= 1000)
                clearInterval(this.seekerTimer);
            if (this.isPlaying == false)
                clearInterval(this.seekerTimer);
        }, 100);
        this.extendshowControl();
    }
    goToLyric(num) {
        this.currentLyric = num;
        this.changeLyric();
    }
    pauseSong() {
        this.backsongEl.pause();
        this.vocalEl.pause();
        clearInterval(this.seekerTimer);
        this.isPlaying = false;
        this.mintl1.restart();
        this.extendshowControl();
    }
    playSong() {
        this.backsongEl.play();
        this.vocalEl.play();
        this.updateSeeker();
        this.isPlaying = true;
        this.mintl2.restart();
        this.extendshowControl();
    }
    stopSong() {
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
    muteVocal() {
        this.backsongEl.muted = false;
        this.vocalEl.muted = true;
        this.mutedVocal = true;
        this.extendshowControl();
    }
    unMuteVocal() {
        this.backsongEl.muted = true;
        this.vocalEl.muted = false;
        this.mutedVocal = false;
        this.extendshowControl();
    }
    hideLyric() {
        gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".lyric", 0.1, { opacity: 0 });
        gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".nolyric", 0.1, { opacity: 1 });
        this.lyricHidden = true;
        this.extendshowControl();
    }
    showLyric() {
        gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".lyric", 0.1, { opacity: 1 });
        gsap__WEBPACK_IMPORTED_MODULE_4__["gsap"].to(".nolyric", 0.1, { opacity: 0 });
        this.lyricHidden = false;
        this.extendshowControl();
    }
    nextLyric() {
        this.currentLyric++;
        this.changeLyric();
        this.extendshowControl();
    }
    prevLyric() {
        this.currentLyric--;
        this.changeLyric();
        this.extendshowControl();
    }
    rewindLyric() {
        this.changeLyric();
        this.extendshowControl();
    }
    changeLyric() {
        let lyric = Object.entries(this.songs.lyrics);
        this.seeker =
            (this.convertTime(lyric[this.currentLyric][0]) / this.currentDuration) *
                1000;
        this.seek();
    }
    registerKey(ke) {
        if (ke.which == 32) {
            if (this.isPlaying !== true)
                this.playSong();
            else
                this.pauseSong();
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
            }
            else {
                this.hideVideoModal();
            }
        }
        if (ke.keyCode == 80) {
            this.openPDF();
        }
        if (ke.keyCode == 76) {
            if (this.playlistModal.style.display == "none") {
                this.showPlaylistModal();
            }
            else {
                this.hidePlaylistModal();
            }
        }
    }
    onTap(e) {
        const now = Date.now();
        if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
            if (this.isPlaying == false) {
                this.playSong();
            }
            else {
                this.pauseSong();
            }
            this.lastOnStart = 0;
        }
        else {
            this.lastOnStart = now;
        }
        setTimeout(() => {
            if (now - this.lastOnStart == 0) {
                this.showControl();
            }
        }, this.DOUBLE_CLICK_THRESHOLD);
    }
    onSwipe(e) {
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
    ngOnDestroy() {
        this.stopSong();
        this.unregisterAll();
        this.backsongEl.src = "";
        this.vocalEl.src = "";
    }
    registerAll() {
        document.addEventListener("keydown", this.xf, false);
    }
    unregisterAll() {
        document.removeEventListener("keydown", this.xf, false);
    }
};
LyricPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: src_app_services_content_service__WEBPACK_IMPORTED_MODULE_5__["ContentService"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_2__["WebView"] }
];
LyricPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-lyric",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lyric.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lyric/lyric.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lyric.page.scss */ "./src/app/pages/lyric/lyric.page.scss")).default]
    })
], LyricPage);



/***/ })

}]);
//# sourceMappingURL=pages-lyric-lyric-module-es2015.js.map