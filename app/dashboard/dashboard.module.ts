import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { dashboardRoute } from './dashboard.routing';

import { DashboardComponent } from './dashboard.component';

@NgModule({
	imports:      [ CommonModule, FormsModule, dashboardRoute ],
	declarations: [ DashboardComponent ],
	exports: [ DashboardComponent ]
})
export class DashboardModule {}