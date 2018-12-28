/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { GridService } from '../grid-service/grid.service';
export class PagerComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdncmlkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL3BhZ2VyL3BhZ2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcvRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFVM0QsTUFBTSxPQUFPLGNBQWM7Ozs7SUFpQnpCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBaEJsQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRTFCLGlCQUFZLEdBQWMsRUFBRSxDQUFDO1FBRzdCLGlCQUFZLEdBQW9CLElBQUksWUFBWSxFQUFPLENBQUM7SUFXVCxDQUFDOzs7OztJQVJoRCxjQUFjLENBQUMsTUFBYTtRQUMxQixRQUFRLENBQUM7UUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFNUMsQ0FBQzs7OztJQUlELFFBQVEsS0FBSSxDQUFDOzs7WUF4QmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQiw0akNBQXFDOzthQUV0Qzs7OztZQVRRLFdBQVc7OztxQkFXakIsS0FBSzsyQkFJTCxNQUFNOzs7O0lBSlAsZ0NBQTBCOztJQUUxQixzQ0FBNkI7O0lBRTdCLHNDQUN3RDs7Ozs7SUFXNUMscUNBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTZWFyY2hPYmplY3QgfSBmcm9tICcuLi9ncmlkTW9kZWxzL3NlYXJjaE9iamVjdC5tb2RlbCc7XG5pbXBvcnQgeyBHcmlkU2VydmljZSB9IGZyb20gJy4uL2dyaWQtc2VydmljZS9ncmlkLnNlcnZpY2UnO1xuXG4gXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXBhZ2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGFnZXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgcGFnZXJYOiBhbnkgPSB7fTtcblxuICBzZWFyY2hPYmplY3Q6U2VhcmNoT2JqZWN0PXt9O1xuXG4gIEBPdXRwdXQoKVxuICBwYWdlZENsaWNrZWQgOkV2ZW50RW1pdHRlcjxhbnk+PW5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cbiAgdXBsb2FkQ29tcGxldGUocGFnZW5vOm51bWJlcikge1xuICAgIGRlYnVnZ2VyO1xuICAgIHRoaXMuZ3JpZFNlcnZpY2UuY3VycmVudERhdGEuc3Vic2NyaWJlKHggPT4gdGhpcy5zZWFyY2hPYmplY3QgPSB4KVxuICAgIHRoaXMuc2VhcmNoT2JqZWN0LnBhZ2VObz1wYWdlbm87XG4gICAgdGhpcy5wYWdlZENsaWNrZWQuZW1pdCh0aGlzLnNlYXJjaE9iamVjdCk7XG4gXG4gIH1cbiBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBncmlkU2VydmljZTpHcmlkU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKSB7fVxuXG59XG4iXX0=