import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Component, Injectable, Input, EventEmitter, Output, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NGGridLibraryComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
NGGridLibraryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-NGGridLibrary',
                template: `
    <p>
      nggrid-library works! XXXXXXXXXXXXXXXXXXXXXXXXXXX
    </p>
  `
            }] }
];
/** @nocollapse */
NGGridLibraryComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridService {
    constructor() {
        this.x = {};
        this.data = new BehaviorSubject(this.x);
        this.currentData = this.data.asObservable();
    }
    /**
     * @param {?} item
     * @return {?}
     */
    updateMessage(item) {
        this.data.next(item);
    }
}
GridService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GridService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PagerComponent {
    /**
     * @param {?} gridService
     */
    constructor(gridService) {
        this.gridService = gridService;
        this.pagerX = {};
        this.searchObject = {};
        this.pagedClicked = new EventEmitter();
    }
    /**
     * @param {?} pageno
     * @return {?}
     */
    uploadComplete(pageno) {
        debugger;
        this.gridService.currentData.subscribe(x => this.searchObject = x);
        this.searchObject.pageNo = pageno;
        this.pagedClicked.emit(this.searchObject);
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PagerComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-pager',
                template: "\n      \n        <ul *ngIf=\"pagerX.datas.pages && pagerX.datas.pages.length\" class=\"pagination\">\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === 1}\">\n              <a   (click)=\"uploadComplete(1)\">First</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === 1}\">\n              <a (click)=\"uploadComplete(pagerX.datas.currentPage - 1)\">Previous</a>\n          </li>\n          <li *ngFor=\"let page of pagerX.datas.pages\" [ngClass]=\"{active:pagerX.datas.currentPage === page}\">\n              <a (click)=\"uploadComplete(page)\">{{page}}</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === pagerX.datas.totalPages}\">\n              <a (click)=\"uploadComplete(pagerX.datas.currentPage + 1)\">Next</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === pagerX.datas.totalPages}\">\n              <a (click)=\"uploadComplete(pagerX.datas.totalPages)\">Last</a>\n          </li>\n      </ul>   \n\n      <!-- <pre>{{pagerX | json}}</pre>  -->",
                styles: [""]
            }] }
];
/** @nocollapse */
PagerComponent.ctorParameters = () => [
    { type: GridService }
];
PagerComponent.propDecorators = {
    pagerX: [{ type: Input }],
    pagedClicked: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchComponent {
    /**
     * @param {?} gridService
     */
    constructor(gridService) {
        this.gridService = gridService;
        this.dropDonwDefautlSelected = 1;
        this.searchColumn = '';
        this.searchText = '';
        this.searchOptionsX = {};
        this.searchClicked = new EventEmitter();
    }
    /**
     * @param {?} obj
     * @param {?} s
     * @return {?}
     */
    searchClick(obj, s) {
        debugger;
        /** @type {?} */
        var x = { pageNo: 1,
            searchColName: this.searchColumn,
            searchText: this.searchText };
        this.gridService.updateMessage(x);
        this.searchClicked.emit(x);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        debugger;
        this.searchColumn = this.searchOptionsX[0].colName;
    }
}
SearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-search',
                template: "<div  class=\"row\">\n    <div class=\"col-md-4 col-sm-4 form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 col-md-2 control-label\">Search</label>\n        <div class=\"col-sm-9 col-md-10\">\n          <select class=\"form-control\"  [(ngModel)]=\"searchColumn\" >\n\n             \n              <option *ngFor=\"let x of searchOptionsX; let index = index\" [value]=\"x.colName\" >\n                {{x.colName }}\n              </option>\n\n          </select>\n        </div>\n      </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-3 col-sm-3 form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 col-md-2 control-label\">Sort</label>\n        <div class=\"col-sm-10 col-md-10\">\n          <select class=\"form-control\">\n            <option> Asc</option>\n            <option> Dsc</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-3 col-sm-5 form-horizontal\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 col-sm-12\">\n          <input id=\"textinput\" name=\"textinput\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search Text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-2 col-sm-12 form-horizontal\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 col-sm-12\">\n          <button id=\"button1id\" name=\"button1id\" class=\"btn btn-success btn-block \" (click)='searchClick(searchColumn,searchText)' >Search..</button>\n        </div>\n      </div>\n    </div>\n  </div>"
            }] }
];
/** @nocollapse */
SearchComponent.ctorParameters = () => [
    { type: GridService }
];
SearchComponent.propDecorators = {
    searchOptionsX: [{ type: Input }],
    searchClicked: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NGGridLibraryModule {
}
NGGridLibraryModule.decorators = [
    { type: NgModule, args: [{
                declarations: [PagerComponent, SearchComponent, NGGridLibraryComponent],
                imports: [FormsModule, BrowserModule
                ],
                exports: [PagerComponent, SearchComponent, NGGridLibraryComponent],
                providers: [GridService]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Grid {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GridOptions {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SearchObject {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NGGridLibraryComponent, NGGridLibraryModule, GridService, Grid, GridOptions, SearchObject, PagerComponent, SearchComponent };

//# sourceMappingURL=nggrid-library.js.map