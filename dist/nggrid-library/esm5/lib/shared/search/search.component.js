/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GridService } from '../grid-service/grid.service';
var SearchComponent = /** @class */ (function () {
    function SearchComponent(gridService) {
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
        { type: Component, args: [{
                    selector: 'app-search',
                    template: "<div  class=\"row\">\n    <div class=\"col-md-4 col-sm-4 form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-3 col-md-2 control-label\">Search</label>\n        <div class=\"col-sm-9 col-md-10\">\n          <select class=\"form-control\"  [(ngModel)]=\"searchColumn\" >\n\n             \n              <option *ngFor=\"let x of searchOptionsX; let index = index\" [value]=\"x.colName\" >\n                {{x.colName }}\n              </option>\n\n          </select>\n        </div>\n      </div>\n    </div>\n  \n  \n  \n    <div class=\"col-md-3 col-sm-3 form-horizontal\">\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 col-md-2 control-label\">Sort</label>\n        <div class=\"col-sm-10 col-md-10\">\n          <select class=\"form-control\">\n            <option> Asc</option>\n            <option> Dsc</option>\n          </select>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-3 col-sm-5 form-horizontal\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 col-sm-12\">\n          <input id=\"textinput\" name=\"textinput\" type=\"text\" [(ngModel)]=\"searchText\" placeholder=\"Search Text\" class=\"form-control\">\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"col-md-2 col-sm-12 form-horizontal\">\n      <div class=\"form-group\">\n        <div class=\"col-md-12 col-sm-12\">\n          <button id=\"button1id\" name=\"button1id\" class=\"btn btn-success btn-block \" (click)='searchClick(searchColumn,searchText)' >Search..</button>\n        </div>\n      </div>\n    </div>\n  </div>"
                }] }
    ];
    /** @nocollapse */
    SearchComponent.ctorParameters = function () { return [
        { type: GridService }
    ]; };
    SearchComponent.propDecorators = {
        searchOptionsX: [{ type: Input }],
        searchClicked: [{ type: Output }]
    };
    return SearchComponent;
}());
export { SearchComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nZ3JpZC1saWJyYXJ5LyIsInNvdXJjZXMiOlsibGliL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFM0Q7SUFpQ0UseUJBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBM0IzQyw0QkFBdUIsR0FBUSxDQUFDLENBQUM7UUFFakMsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUdyQixtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUl6QixrQkFBYSxHQUFvQixJQUFJLFlBQVksRUFBTyxDQUFDO0lBaUJWLENBQUM7Ozs7OztJQVpoRCxxQ0FBVzs7Ozs7SUFBWCxVQUFZLEdBQU8sRUFBQyxDQUFRO1FBQzFCLFFBQVEsQ0FBQzs7WUFFTCxDQUFDLEdBQWUsRUFBQyxNQUFNLEVBQUMsQ0FBQztZQUMzQixhQUFhLEVBQUMsSUFBSSxDQUFDLFlBQVk7WUFDL0IsVUFBVSxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7UUFFM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7OztJQUlELGtDQUFROzs7SUFBUjtRQUNFLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDbkQsQ0FBQzs7Z0JBdENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIscWxEQUFzQztpQkFDdkM7Ozs7Z0JBTFEsV0FBVzs7O2lDQWFqQixLQUFLO2dDQUlMLE1BQU07O0lBeUJULHNCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQ1ksZUFBZTs7O0lBRTFCLGtEQUFpQzs7SUFFakMsdUNBQXVCOztJQUN2QixxQ0FBcUI7O0lBRXJCLHlDQUN5Qjs7SUFHekIsd0NBQ3lEOzs7OztJQWlCN0Msc0NBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2VhcmNoT2JqZWN0IH0gZnJvbSAnLi4vZ3JpZE1vZGVscy9zZWFyY2hPYmplY3QubW9kZWwnO1xuaW1wb3J0IHsgR3JpZFNlcnZpY2UgfSBmcm9tICcuLi9ncmlkLXNlcnZpY2UvZ3JpZC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNlYXJjaCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9zZWFyY2guY29tcG9uZW50Lmh0bWwnIFxufSlcbmV4cG9ydCBjbGFzcyBTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGRyb3BEb253RGVmYXV0bFNlbGVjdGVkOm51bWJlcj0xO1xuXG4gIHNlYXJjaENvbHVtbjpzdHJpbmc9Jyc7XG4gIHNlYXJjaFRleHQ6c3RyaW5nPScnO1xuXG4gIEBJbnB1dCgpIFxuICBzZWFyY2hPcHRpb25zWDogYW55ID0ge307XG5cblxuICBAT3V0cHV0KClcbiAgc2VhcmNoQ2xpY2tlZCA6RXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIFxuXG5cblxuICBzZWFyY2hDbGljayhvYmo6YW55LHM6c3RyaW5nKSB7XG4gICAgZGVidWdnZXI7XG4gIFxuICAgIHZhciB4OlNlYXJjaE9iamVjdD0ge3BhZ2VObzoxLFxuICAgICAgc2VhcmNoQ29sTmFtZTp0aGlzLnNlYXJjaENvbHVtbixcbiAgICAgIHNlYXJjaFRleHQ6dGhpcy5zZWFyY2hUZXh0fVxuXG4gICAgICB0aGlzLmdyaWRTZXJ2aWNlLnVwZGF0ZU1lc3NhZ2UoeCk7XG5cbiAgICB0aGlzLnNlYXJjaENsaWNrZWQuZW1pdCh4KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ3JpZFNlcnZpY2U6R3JpZFNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuc2VhcmNoQ29sdW1uPXRoaXMuc2VhcmNoT3B0aW9uc1hbMF0uY29sTmFtZTtcbiAgfVxuXG59XG4iXX0=