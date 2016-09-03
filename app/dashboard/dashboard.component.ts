import { Component, OnChanges, SimpleChange, Input, DoCheck } from '@angular/core';

import { Pair } from './pair';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard/dashboard.html'
})
export class DashboardComponent implements DoCheck {
	params : string = "";
	@Input() pairs: Pair[] = [
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
	];
	ngDoCheck() {
		this.params = this.buildParams(this.pairs);
		console.log(this.params);
	}

	buildParams(pairs : Pair[]) {

		let params : string = "";
		pairs.forEach(function (obj, i) {
			let name = obj.name;
			let value = obj.value;

			let tmp = name + "=" + value;
			params += tmp;
			if (i < (pairs.length - 1)) {
				params += "&";
			}
		});
		return params;
	}
}
