import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { routing } from './graph.routing';

import { GraphComponent } from './graph.component';

@NgModule({
	imports:      [ CommonModule, FormsModule, routing ],
	declarations: [ GraphComponent ],
	exports: [ GraphComponent ]
})
export class GraphModule {}