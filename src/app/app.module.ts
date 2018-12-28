import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NGGridLibraryModule} from '../../projects/nggrid-library/src/lib/nggrid-library.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NGGridLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
