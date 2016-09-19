import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

	token:string;

	constructor (private http:Http){}

	sendCredentials(model){
		let tokenUrl = 'http://localhost:8080/user/login';
		let header1 = new Headers({'Content-type': 'application/json'});

		return this.http.post(tokenUrl,JSON.stringify(model), {headers:header1});
	}

	sendToken(token){
		let userUrl = 'http://localhost:8080/rest/user/users';
		let header2 = new Headers({'Authorization': 'Bearer '+token});

		return this.http.get(userUrl, {headers:header2});
	}

	// private headers = new Headers({'Content-Type': 'application/json'});

	// constructor(private http: Http) { }

	// private handleError(error: any): Promise<any> {
 //    	console.error('An error occurred', error); // for demo purposes only
 //    	return Promise.reject(error.message || error);
 //  	}

 //  	sendUser(user: User):  Promise<User[]>{
 //  		let userUrl = 'http://localhost:8080/user/register';
 //  		return this.http
 //      	.post(userUrl, JSON.stringify(user), {headers: this.headers})
 //      	.toPromise()
 //      	.then(res => res.json().data).catch(this.handleError);
 //  	}

}