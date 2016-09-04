import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';

import { DashboardModule } from './dashboard/dashboard.module';
import { GraphModule } from './graph/graph.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, DashboardModule, GraphModule, routing ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
