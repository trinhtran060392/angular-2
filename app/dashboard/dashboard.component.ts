import { Component } from '@angular/core';

import { Pair } from './pair';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent {
	title = 'Leaning angular 2'; 
	pair: Pair = {
		name: "a",
		value: 3,
		min: 2,
		max: 10
	}
	pairs: Pair[] = [
		{
			name: "a",
			value: 3,
			min: 2,
			max: 10
		},{
			name: "b",
			value: 3,
			min: 2,
			max: 10
		},{
			name: "c",
			value: 3,
			min: 2,
			max: 10
		},{
			name: "d",
			value: 3,
			min: 2,
			max: 10
		}
	]
}
