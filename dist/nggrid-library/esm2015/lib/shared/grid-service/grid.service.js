/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class GridService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdncmlkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvc2hhcmVkL2dyaWQtc2VydmljZS9ncmlkLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUl2QyxNQUFNLE9BQU8sV0FBVztJQUt0QjtRQUpGLE1BQUMsR0FBYyxFQUFFLENBQUM7UUFDUixTQUFJLEdBQUcsSUFBSSxlQUFlLENBQWUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELGdCQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUV0QixDQUFDOzs7OztJQUVqQixhQUFhLENBQUMsSUFBUztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDOzs7WUFWQSxVQUFVOzs7Ozs7SUFFWCx3QkFBa0I7Ozs7O0lBQ2hCLDJCQUF5RDs7SUFDekQsa0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTZWFyY2hPYmplY3QgfSBmcm9tICcuLi9ncmlkTW9kZWxzL3NlYXJjaE9iamVjdC5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcmlkU2VydmljZSB7XG54OlNlYXJjaE9iamVjdD17fTtcbiAgcHJpdmF0ZSBkYXRhID0gbmV3IEJlaGF2aW9yU3ViamVjdDxTZWFyY2hPYmplY3Q+KHRoaXMueCk7XG4gIGN1cnJlbnREYXRhID0gdGhpcy5kYXRhLmFzT2JzZXJ2YWJsZSgpXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB1cGRhdGVNZXNzYWdlKGl0ZW06IGFueSkge1xuICAgIHRoaXMuZGF0YS5uZXh0KGl0ZW0pO1xufVxufVxuIl19