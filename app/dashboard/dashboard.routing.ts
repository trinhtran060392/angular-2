import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard.component';

export const dashboardRoute: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: 'dashboard', component: DashboardComponent
  }
]);