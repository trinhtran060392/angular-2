import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import { routing } from './app.routing';

import { DashboardModule } from './dashboard/dashboard.module';
import { GraphModule } from './graph/graph.module';

@NgModule({
  imports: [ BrowserModule, FormsModule, DashboardModule, GraphModule, routing ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
