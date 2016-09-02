import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing, routedComponents } from './app.routing';

import { AppComponent }  from './app.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, routing ],
  declarations: [ AppComponent, routedComponents ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
