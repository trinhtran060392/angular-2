import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GraphComponent } from './graph.component';

export const routing: ModuleWithProviders = RouterModule.forChild([
  { 
  	path: '',
  	component: GraphComponent
  }
]);
