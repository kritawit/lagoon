import { Component } from '@angular/core';

import {LoginService} from '../services/login.service';

@Component({
	selector: 'login',
	templateUrl: 'app/components/login.component.html'
})
export class Login{
	private model = {'username':'','password':''};

	
	private currentUserName;

	onSubmit():void{
		//to do
	}

}