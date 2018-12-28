import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'
import { NGGridLibraryComponent } from './nggrid-library.component';
 
 

import {GridService} from './shared/grid-service/grid.service';
 import {PagerComponent} from './shared/pager/pager.component';
 import {SearchComponent} from './shared/search/search.component';


@NgModule({
  declarations: [PagerComponent,SearchComponent,NGGridLibraryComponent],
  imports: [FormsModule,BrowserModule
  ],
  exports: [PagerComponent,SearchComponent,NGGridLibraryComponent],
  providers:[GridService]
 
})
export class NGGridLibraryModule { }


 