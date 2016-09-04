import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphComponent } from './graph.component';

export const graphRoute: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: 'graph', component: GraphComponent
  }
]);