import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { routing } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard.detail.component';

@NgModule({
	imports:      [ CommonModule, FormsModule, routing ],
	declarations: [ DashboardComponent, DashboardDetailComponent ],
	exports: [ DashboardComponent, DashboardDetailComponent ]
})
export class DashboardModule {}