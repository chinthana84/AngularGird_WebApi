/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GridService } from '../grid-service/grid.service';
var PagerComponent = /** @class */ (function () {
    function PagerComponent(gridService) {
        this.gridService = gridService;
        this.pagerX = {};
        this.searchObject = {};
        this.pagedClicked = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'app-pager',
                    template: "\n      \n        <ul *ngIf=\"pagerX.datas.pages && pagerX.datas.pages.length\" class=\"pagination\">\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === 1}\">\n              <a   (click)=\"uploadComplete(1)\">First</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === 1}\">\n              <a (click)=\"uploadComplete(pagerX.datas.currentPage - 1)\">Previous</a>\n          </li>\n          <li *ngFor=\"let page of pagerX.datas.pages\" [ngClass]=\"{active:pagerX.datas.currentPage === page}\">\n              <a (click)=\"uploadComplete(page)\">{{page}}</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === pagerX.datas.totalPages}\">\n              <a (click)=\"uploadComplete(pagerX.datas.currentPage + 1)\">Next</a>\n          </li>\n          <li [ngClass]=\"{disabled:pagerX.datas.currentPage === pagerX.datas.totalPages}\">\n              <a (click)=\"uploadComplete(pagerX.datas.totalPages)\">Last</a>\n          </li>\n      </ul>   \n\n      <!-- <pre>{{pagerX | json}}</pre>  -->",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PagerComponent.ctorParameters = function () { return [
        { type: GridService }
    ]; };
    PagerComponent.propDecorators = {
        pagerX: [{ type: Input }],
        pagedClicked: [{ type: Output }]
    };
    return PagerComponent;
}());
export { PagerComponent };
if (false) {
    /** @type {?} */
    PagerComponent.prototype.pagerX;
    /** @type {?} */
    PagerComponent.prototype.searchObject;
    /** @type {?} */
    PagerComponent.prototype.pagedClicked;
    /**
     * @type {?}
     * @private
     */
    PagerComponent.prototype.gridService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdncmlkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLM0Q7SUFzQkUsd0JBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBaEJsQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRzdCLGlCQUFZLEdBQW9CLElBQUksWUFBWSxFQUFPLENBQUM7SUFXVCxDQUFDOzs7OztJQVJoRCx1Q0FBYzs7OztJQUFkLFVBQWUsTUFBYTtRQUE1QixpQkFNQztRQUxDLFFBQVEsQ0FBQztRQUNULElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFyQixDQUFxQixDQUFDLENBQUE7UUFDbEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUU1QyxDQUFDOzs7O0lBSUQsaUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBeEJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztvQkFDckIsNGpDQUFxQzs7aUJBRXRDOzs7O2dCQVRRLFdBQVc7Ozt5QkFXakIsS0FBSzsrQkFJTCxNQUFNOztJQWdCVCxxQkFBQztDQUFBLEFBMUJELElBMEJDO1NBckJZLGNBQWM7OztJQUN6QixnQ0FBMEI7O0lBRTFCLHNDQUE2Qjs7SUFFN0Isc0NBQ3dEOzs7OztJQVc1QyxxQ0FBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFNlYXJjaE9iamVjdCB9IGZyb20gJy4uL2dyaWRNb2RlbHMvc2VhcmNoT2JqZWN0Lm1vZGVsJztcbmltcG9ydCB7IEdyaWRTZXJ2aWNlIH0gZnJvbSAnLi4vZ3JpZC1zZXJ2aWNlL2dyaWQuc2VydmljZSc7XG5cbiBcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcGFnZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGFnZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wYWdlci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGFnZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBwYWdlclg6IGFueSA9IHt9O1xuXG4gIHNlYXJjaE9iamVjdDpTZWFyY2hPYmplY3Q9e307XG5cbiAgQE91dHB1dCgpXG4gIHBhZ2VkQ2xpY2tlZCA6RXZlbnRFbWl0dGVyPGFueT49bmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblxuICB1cGxvYWRDb21wbGV0ZShwYWdlbm86bnVtYmVyKSB7XG4gICAgZGVidWdnZXI7XG4gICAgdGhpcy5ncmlkU2VydmljZS5jdXJyZW50RGF0YS5zdWJzY3JpYmUoeCA9PiB0aGlzLnNlYXJjaE9iamVjdCA9IHgpXG4gICAgdGhpcy5zZWFyY2hPYmplY3QucGFnZU5vPXBhZ2VubztcbiAgICB0aGlzLnBhZ2VkQ2xpY2tlZC5lbWl0KHRoaXMuc2VhcmNoT2JqZWN0KTtcbiBcbiAgfVxuIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGdyaWRTZXJ2aWNlOkdyaWRTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHt9XG5cbn1cbiJdfQ==