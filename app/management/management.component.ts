import { Component, OnInit } from '@angular/core';

import { ManagementService } from './management.service';

@Component({

	selector: 'my-management',
	templateUrl: 'app/management/management.html',
	providers: [ManagementService]

})

export class ManagementComponent implements OnInit {

	dataset: any[];
	constructor(private managementService: ManagementService) {

	}

	ngOnInit() {
		this.managementService.getAll().subscribe(dataset => {
			this.dataset = dataset
			console.log(dataset);
		});
	}

	add(name: any) {
		this.managementService.add(name).subscribe(response => {
			console.log(response);
			this.dataset.push({name: name});
		});
	}
}