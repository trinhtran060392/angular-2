import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphComponent } from './graph/graph.component';

const appRoutes: Routes = [
	{
	    path: '',
	    redirectTo: '/dashboard',
	    pathMatch: 'full'
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
