import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { graphRoute } from './graph.routing';

import { GraphComponent } from './graph.component';

@NgModule({
	imports:      [ CommonModule, FormsModule, graphRoute ],
	declarations: [ GraphComponent ],
	exports: [ GraphComponent ]
})
export class GraphModule {}