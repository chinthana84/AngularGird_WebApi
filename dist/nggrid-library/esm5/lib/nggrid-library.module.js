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
var NGGridLibraryModule = /** @class */ (function () {
    function NGGridLibraryModule() {
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
    return NGGridLibraryModule;
}());
export { NGGridLibraryModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdncmlkLWxpYnJhcnkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmdncmlkLWxpYnJhcnkvIiwic291cmNlcyI6WyJsaWIvbmdncmlkLWxpYnJhcnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFHNUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJcEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG9DQUFvQyxDQUFDO0FBQzlELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFHbEU7SUFBQTtJQVFtQyxDQUFDOztnQkFSbkMsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsc0JBQXNCLENBQUM7b0JBQ3JFLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBQyxhQUFhO3FCQUNsQztvQkFDRCxPQUFPLEVBQUUsQ0FBQyxjQUFjLEVBQUMsZUFBZSxFQUFDLHNCQUFzQixDQUFDO29CQUNoRSxTQUFTLEVBQUMsQ0FBQyxXQUFXLENBQUM7aUJBRXhCOztJQUNrQywwQkFBQztDQUFBLEFBUnBDLElBUW9DO1NBQXZCLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJ1xuaW1wb3J0IHsgTkdHcmlkTGlicmFyeUNvbXBvbmVudCB9IGZyb20gJy4vbmdncmlkLWxpYnJhcnkuY29tcG9uZW50JztcbiBcbiBcblxuaW1wb3J0IHtHcmlkU2VydmljZX0gZnJvbSAnLi9zaGFyZWQvZ3JpZC1zZXJ2aWNlL2dyaWQuc2VydmljZSc7XG4gaW1wb3J0IHtQYWdlckNvbXBvbmVudH0gZnJvbSAnLi9zaGFyZWQvcGFnZXIvcGFnZXIuY29tcG9uZW50JztcbiBpbXBvcnQge1NlYXJjaENvbXBvbmVudH0gZnJvbSAnLi9zaGFyZWQvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQnO1xuXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1BhZ2VyQ29tcG9uZW50LFNlYXJjaENvbXBvbmVudCxOR0dyaWRMaWJyYXJ5Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW0Zvcm1zTW9kdWxlLEJyb3dzZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1BhZ2VyQ29tcG9uZW50LFNlYXJjaENvbXBvbmVudCxOR0dyaWRMaWJyYXJ5Q29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOltHcmlkU2VydmljZV1cbiBcbn0pXG5leHBvcnQgY2xhc3MgTkdHcmlkTGlicmFyeU1vZHVsZSB7IH1cblxuXG4gIl19