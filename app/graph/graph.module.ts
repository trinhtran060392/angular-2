import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { GraphComponent } from './graph.component';

@NgModule({
	imports:      [ CommonModule, FormsModule ],
	declarations: [ GraphComponent ],
	exports: [ GraphComponent ]
})
export class GraphModule {}