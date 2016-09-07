import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ManagementService {
	constructor (private http: Http) {}

	private api = 'app/data/data.json';

	getAll() : Observable<any[]> {
		return this.http.get(this.api).map(this.extractData);
	}
	private extractData(res: Response) {
		let data = JSON.parse(res._body);
	    return data || { };
	}

	add (name: string): Observable<any> {
	    let body = JSON.stringify({ name : name });
	    let headers = new Headers({ 'Content-Type': 'application/json' });
	    let options = new RequestOptions({ headers: headers });

	    return this.http.post(this.api, body, options).map(this.response);
	 }
	 private response(res: Response) {
	 	return res;
	 }
}