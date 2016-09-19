import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { RegisterComponent } from './components/register.component';
import {Login} from './components/login.component';
import {MyAlbum} from './components/my-album.component';

const appRoutes: Routes = [
  {
    path:'my-album',
    component: MyAlbum
  },
  {
    path: 'login',
    component: Login
  },
	{
		path: 'register',
		component: RegisterComponent
	},
	{
  		path: '',
  		redirectTo: '/home',
  		pathMatch: 'full'
	},
  {
    path: 'home',
    component: HomeComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);