(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/forms'), require('rxjs'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('nggrid-library', ['exports', '@angular/platform-browser', '@angular/forms', 'rxjs', '@angular/core'], factory) :
    (factory((global['nggrid-library'] = {}),global.ng.platformBrowser,global.ng.forms,global.rxjs,global.ng.core));
}(this, (function (exports,platformBrowser,forms,rxjs,core) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NGGridLibraryComponent = /** @class */ (function () {
        function NGGridLibraryComponent() {
        }
        /**
         * @return {?}
         */
        NGGridLibraryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NGGridLibraryComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-NGGridLibrary',
                        template: "\n    <p>\n      nggrid-library works! XXXXXXXXXXXXXXXXXXXXXXXXXXX\n    </p>\n  "
                    }] }
        ];
        /** @nocollapse */
        NGGridLibraryComponent.ctorParameters = function () { return []; };
        return NGGridLibraryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridService = /** @class */ (function () {
        function GridService() {
            this.x = {};
            this.data = new rxjs.BehaviorSubject(this.x);
            this.currentData = this.data.asObservable();
        }
        /**
         * @param {?} item
         * @return {?}
         */
        GridService.prototype.updateMessage = /**
         * @param {?} item
         * @return {?}
         */
            function (item) {
                this.data.next(item);
            };
        GridService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GridService.ctorParameters = function () { return []; };
        return GridService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PagerComponent = /** @class */ (function () {
        function PagerComponent(gridService) {
            this.gridService = gridService;
            this.pagerX = {};
            this.searchObject = {};
            this.pagedClicked = new core.EventEmitter();
        }
        /**
         * @param {?} pageno
         * @return {?}
         */
        PagerComponent.prototype.uploadComplete = /**
         * @param {?} pageno
         * @return {?}
         */
            function (pageno) {
                var _this = this;
                debugger;
                this.gridService.currentData.subscribe(function (x) { return _this.searchObject = x; });
                this.searchObject.pageNo = pageno;
                this.pagedClicked.emit(this.searchObject);
            };
        /**
         * @return {?}
         */
        PagerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        PagerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-pager',
                        template: "\n      \n        <ul *ngIf=\"pagerX.datas.pages && pagerX.datas.pages.length\" class=\"pagination\">\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === 1}\">\n              <a   (click)=\"uploadComplete(1)\">First</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === 1}\">\n              <a (click)=\"uploadComplete(pagerX.datas.currentPage - 1)\">Previous</a>\n          </li>\n          <li *ngFor=\"let page of pagerX.datas.pages\" [ngClass]=\"{active:pagerX.datas.currentPage === page}\">\n              <a (click)=\"uploadComplete(page)\">{{page}}</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === pagerX.datas.totalPages}\">\n              <a (click)=\"uploadComplete(pagerX.datas.currentPage + 1)\">Next</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === pagerX.datas.totalPages}\">\n              <a (click)=\"uploadComplete(pagerX.datas.totalPages)\">Last</a>\n          </li>\n      </ul>   \n\n      <!-- <pre>{{pagerX | json}}</pre>  -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        PagerComponent.ctorParameters = function () {
            return [
                { type: GridService }
            ];
        };
        PagerComponent.propDecorators = {
            pagerX: [{ type: core.Input }],
            pagedClicked: [{ type: core.Output }]
        };
        return PagerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchComponent = /** @class */ (function () {
        function SearchComponent(gridService) {
            this.gridService = gridService;
            this.dropDonwDefautlSelected = 1;
            this.searchColumn = '';
            this.searchText = '';
            this.searchOptionsX = {};
            this.searchClicked = new core.EventEmitter();
        }
        /**
         * @param {?} obj
         * @param {?} s
         * @return {?}
         */
        SearchComponent.prototype.searchClick = /**
         * @param {?} obj
         * @param {?} s
         * @return {?}
         */
            function (obj, s) {
                debugger;
                /** @type {?} */
                var x = { pageNo: 1,
                    searchColName: this.searchColumn,
                    searchText: this.searchText };
                this.gridService.updateMessage(x);
                this.searchClicked.emit(x);
            };
        /**
         * @return {?}
         */
        SearchComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                debugger;
                this.searchColumn = this.searchOptionsX[0].colName;
            };
        SearchComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-search',
                        template: "<div  class=\"row\">\n    <div class=\"col-md-4 col-sm-4 form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 col-md-2 control-label\">Search</label>\n        <div class=\"col-sm-9 col-md-10\">\n          <select class=\"form-control\"  [(ngModel)]=\"searchColumn\" >\n\n             \n              <option *ngFor=\"let x of searchOptionsX; let index = index\" [value]=\"x.colName\" >\n                {{x.colName }}\n              </option>\n\n          </select>\n        </div>\n      </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-3 col-sm-3 form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 col-md-2 control-label\">Sort</label>\n        <div class=\"col-sm-10 col-md-10\">\n          <select class=\"form-control\">\n            <option> Asc</option>\n            <option> Dsc</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-3 col-sm-5 form-horizontal\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 col-sm-12\">\n          <input id=\"textinput\" name=\"textinput\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search Text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-2 col-sm-12 form-horizontal\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 col-sm-12\">\n          <button id=\"button1id\" name=\"button1id\" class=\"btn btn-success btn-block \" (click)='searchClick(searchColumn,searchText)' >Search..</button>\n        </div>\n      </div>\n    </div>\n  </div>"
                    }] }
        ];
        /** @nocollapse */
        SearchComponent.ctorParameters = function () {
            return [
                { type: GridService }
            ];
        };
        SearchComponent.propDecorators = {
            searchOptionsX: [{ type: core.Input }],
            searchClicked: [{ type: core.Output }]
        };
        return SearchComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NGGridLibraryModule = /** @class */ (function () {
        function NGGridLibraryModule() {
        }
        NGGridLibraryModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [PagerComponent, SearchComponent, NGGridLibraryComponent],
                        imports: [forms.FormsModule, platformBrowser.BrowserModule
                        ],
                        exports: [PagerComponent, SearchComponent, NGGridLibraryComponent],
                        providers: [GridService]
                    },] }
        ];
        return NGGridLibraryModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var Grid = /** @class */ (function () {
        function Grid() {
        }
        return Grid;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GridOptions = /** @class */ (function () {
        function GridOptions() {
        }
        return GridOptions;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var SearchObject = /** @class */ (function () {
        function SearchObject() {
        }
        return SearchObject;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NGGridLibraryComponent = NGGridLibraryComponent;
    exports.NGGridLibraryModule = NGGridLibraryModule;
    exports.GridService = GridService;
    exports.Grid = Grid;
    exports.GridOptions = GridOptions;
    exports.SearchObject = SearchObject;
    exports.PagerComponent = PagerComponent;
    exports.SearchComponent = SearchComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=nggrid-library.umd.js.map