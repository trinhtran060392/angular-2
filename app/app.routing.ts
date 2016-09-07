import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
	{
	    path: '',
	    redirectTo: '/dashboard',
	    pathMatch: 'full'
	},
	{
		path: 'dashboard',
		loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
	},
	{ 
		path: 'graph', 
		loadChildren: 'app/graph/graph.module#GraphModule' 
	},
	{
		path: 'management',
		loadChildren: 'app/management/management.module#ManagementModule'
	}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
