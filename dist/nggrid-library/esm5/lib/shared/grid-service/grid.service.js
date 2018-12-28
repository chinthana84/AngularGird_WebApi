/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var GridService = /** @class */ (function () {
    function GridService() {
        this.x = {};
        this.data = new BehaviorSubject(this.x);
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
        { type: Injectable }
    ];
    /** @nocollapse */
    GridService.ctorParameters = function () { return []; };
    return GridService;
}());
export { GridService };
if (false) {
    /** @type {?} */
    GridService.prototype.x;
    /**
     * @type {?}
     * @private
     */
    GridService.prototype.data;
    /** @type {?} */
    GridService.prototype.currentData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdncmlkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2dyaWQtc2VydmljZS9ncmlkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUd2QztJQU1FO1FBSkYsTUFBQyxHQUFjLEVBQUUsQ0FBQztRQUNSLFNBQUksR0FBRyxJQUFJLGVBQWUsQ0FBZSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsZ0JBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO0lBRXRCLENBQUM7Ozs7O0lBRWpCLG1DQUFhOzs7O0lBQWIsVUFBYyxJQUFTO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O2dCQVZBLFVBQVU7Ozs7SUFXWCxrQkFBQztDQUFBLEFBWEQsSUFXQztTQVZZLFdBQVc7OztJQUN4Qix3QkFBa0I7Ozs7O0lBQ2hCLDJCQUF5RDs7SUFDekQsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZWFyY2hPYmplY3QgfSBmcm9tICcuLi9ncmlkTW9kZWxzL3NlYXJjaE9iamVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkU2VydmljZSB7XG54OlNlYXJjaE9iamVjdD17fTtcbiAgcHJpdmF0ZSBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTZWFyY2hPYmplY3Q+KHRoaXMueCk7XG4gIGN1cnJlbnREYXRhID0gdGhpcy5kYXRhLmFzT2JzZXJ2YWJsZSgpXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB1cGRhdGVNZXNzYWdlKGl0ZW06IGFueSkge1xuICAgIHRoaXMuZGF0YS5uZXh0KGl0ZW0pO1xufVxufVxuIl19