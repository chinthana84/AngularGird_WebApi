/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GridService } from '../grid-service/grid.service';
export class SearchComponent {
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
if (false) {
    /** @type {?} */
    SearchComponent.prototype.dropDonwDefautlSelected;
    /** @type {?} */
    SearchComponent.prototype.searchColumn;
    /** @type {?} */
    SearchComponent.prototype.searchText;
    /** @type {?} */
    SearchComponent.prototype.searchOptionsX;
    /** @type {?} */
    SearchComponent.prototype.searchClicked;
    /**
     * @type {?}
     * @private
     */
    SearchComponent.prototype.gridService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZ3JpZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFNM0QsTUFBTSxPQUFPLGVBQWU7Ozs7SUE2QjFCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBM0IzQyw0QkFBdUIsR0FBUSxDQUFDLENBQUM7UUFFakMsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUdyQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUl6QixrQkFBYSxHQUFvQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBaUJWLENBQUM7Ozs7OztJQVpoRCxXQUFXLENBQUMsR0FBTyxFQUFDLENBQVE7UUFDMUIsUUFBUSxDQUFDOztZQUVMLENBQUMsR0FBZSxFQUFDLE1BQU0sRUFBQyxDQUFDO1lBQzNCLGFBQWEsRUFBQyxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQztRQUUzQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7O0lBSUQsUUFBUTtRQUNOLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIscWxEQUFzQzthQUN2Qzs7OztZQUxRLFdBQVc7Ozs2QkFhakIsS0FBSzs0QkFJTCxNQUFNOzs7O0lBVFAsa0RBQWlDOztJQUVqQyx1Q0FBdUI7O0lBQ3ZCLHFDQUFxQjs7SUFFckIseUNBQ3lCOztJQUd6Qix3Q0FDeUQ7Ozs7O0lBaUI3QyxzQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTZWFyY2hPYmplY3QgfSBmcm9tICcuLi9ncmlkTW9kZWxzL3NlYXJjaE9iamVjdC5tb2RlbCc7XG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gJy4uL2dyaWQtc2VydmljZS9ncmlkLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2VhcmNoJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NlYXJjaC5jb21wb25lbnQuaHRtbCcgXG59KVxuZXhwb3J0IGNsYXNzIFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZHJvcERvbndEZWZhdXRsU2VsZWN0ZWQ6bnVtYmVyPTE7XG5cbiAgc2VhcmNoQ29sdW1uOnN0cmluZz0nJztcbiAgc2VhcmNoVGV4dDpzdHJpbmc9Jyc7XG5cbiAgQElucHV0KCkgXG4gIHNlYXJjaE9wdGlvbnNYOiBhbnkgPSB7fTtcblxuXG4gIEBPdXRwdXQoKVxuICBzZWFyY2hDbGlja2VkIDpFdmVudEVtaXR0ZXI8YW55Pj1uZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgXG5cblxuXG4gIHNlYXJjaENsaWNrKG9iajphbnksczpzdHJpbmcpIHtcbiAgICBkZWJ1Z2dlcjtcbiAgXG4gICAgdmFyIHg6U2VhcmNoT2JqZWN0PSB7cGFnZU5vOjEsXG4gICAgICBzZWFyY2hDb2xOYW1lOnRoaXMuc2VhcmNoQ29sdW1uLFxuICAgICAgc2VhcmNoVGV4dDp0aGlzLnNlYXJjaFRleHR9XG5cbiAgICAgIHRoaXMuZ3JpZFNlcnZpY2UudXBkYXRlTWVzc2FnZSh4KTtcblxuICAgIHRoaXMuc2VhcmNoQ2xpY2tlZC5lbWl0KHgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkU2VydmljZTpHcmlkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5zZWFyY2hDb2x1bW49dGhpcy5zZWFyY2hPcHRpb25zWFswXS5jb2xOYW1lO1xuICB9XG5cbn1cbiJdfQ==