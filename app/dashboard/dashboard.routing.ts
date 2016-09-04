import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { DashboardDetailComponent } from './dashboard.detail.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: '', component: DashboardComponent
  },
  {
  	path: ':id', component: DashboardDetailComponent
  }
]);