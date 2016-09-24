import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'my-graph',
	templateUrl: 'app/graph/graph.html'
})
export class GraphComponent {

	constructor(private route: ActivatedRoute, private router: Router) {
	}
	public labels:string[] = [];
	public dataset:string[] = [];

	ngOnInit() {
		this.route.params.subscribe(params => {
			for (let prop in params) {
				if (!params.hasOwnProperty(prop)) {
					continue;
				}
				this.labels.push(prop);
				console.log(params[prop]);
				this.dataset.push(params[prop]);
			}
		});
	}
	public barChartOptions:any = {
	    scaleShowVerticalLines: false,
	    responsive: true
	};

	 public barChartType:string = 'bar';
	 public barChartLegend:boolean = true;

	public barChartData:any[] = [
	   {data: this.dataset, label: 'Value'}
	];

	// events
	public chartClicked(e:any):void {
	   console.log(e);
	}

	public chartHovered(e:any):void {
	   console.log(e);
	}

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}