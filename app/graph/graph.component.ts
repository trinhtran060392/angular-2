import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'my-graph',
	templateUrl: 'app/graph/graph.html'
})
export class GraphComponent {

	constructor(private route: ActivatedRoute, private router: Router) {
	}
	ngOnInit() {
		this.route.params.subscribe(params => {
			console.log(params);
		});
	}
}