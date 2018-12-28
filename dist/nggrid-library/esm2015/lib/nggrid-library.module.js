/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NGGridLibraryComponent } from './nggrid-library.component';
import { GridService } from './shared/grid-service/grid.service';
import { PagerComponent } from './shared/pager/pager.component';
import { SearchComponent } from './shared/search/search.component';
export class NGGridLibraryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdncmlkLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdncmlkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbmdncmlkLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJcEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFXbEUsTUFBTSxPQUFPLG1CQUFtQjs7O1lBUi9CLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLHNCQUFzQixDQUFDO2dCQUNyRSxPQUFPLEVBQUUsQ0FBQyxXQUFXLEVBQUMsYUFBYTtpQkFDbEM7Z0JBQ0QsT0FBTyxFQUFFLENBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxzQkFBc0IsQ0FBQztnQkFDaEUsU0FBUyxFQUFDLENBQUMsV0FBVyxDQUFDO2FBRXhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBCcm93c2VyQW5pbWF0aW9uc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInXG5pbXBvcnQgeyBOR0dyaWRMaWJyYXJ5Q29tcG9uZW50IH0gZnJvbSAnLi9uZ2dyaWQtbGlicmFyeS5jb21wb25lbnQnO1xuIFxuIFxuXG5pbXBvcnQge0dyaWRTZXJ2aWNlfSBmcm9tICcuL3NoYXJlZC9ncmlkLXNlcnZpY2UvZ3JpZC5zZXJ2aWNlJztcbiBpbXBvcnQge1BhZ2VyQ29tcG9uZW50fSBmcm9tICcuL3NoYXJlZC9wYWdlci9wYWdlci5jb21wb25lbnQnO1xuIGltcG9ydCB7U2VhcmNoQ29tcG9uZW50fSBmcm9tICcuL3NoYXJlZC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXJDb21wb25lbnQsU2VhcmNoQ29tcG9uZW50LE5HR3JpZExpYnJhcnlDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbRm9ybXNNb2R1bGUsQnJvd3Nlck1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbUGFnZXJDb21wb25lbnQsU2VhcmNoQ29tcG9uZW50LE5HR3JpZExpYnJhcnlDb21wb25lbnRdLFxuICBwcm92aWRlcnM6W0dyaWRTZXJ2aWNlXVxuIFxufSlcbmV4cG9ydCBjbGFzcyBOR0dyaWRMaWJyYXJ5TW9kdWxlIHsgfVxuXG5cbiAiXX0=