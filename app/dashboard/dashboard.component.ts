import { Component, OnChanges, SimpleChange } from '@angular/core';

import { Pair } from './pair';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent {
	pairs: Pair[] = [
		{
			name: "a",
			value: 9,
			min: 2,
			max: 10
		},{
			name: "b",
			value: 4,
			min: 1,
			max: 9
		},{
			name: "c",
			value: 6,
			min: 0,
			max: 10
		},{
			name: "d",
			value: 8,
			min: 1,
			max: 10
		}
	]


}
