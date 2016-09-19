import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';

//Component
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home.component';
import { PhotoList } from './components/photo-list.component';
import { SidePanel } from './components/side-panel.component';
import { NavBar } from './components/nav-bar.component';
import { RegisterComponent } from './components/register.component';
import {Login} from './components/login.component';
import {MyAlbum} from './components/my-album.component';

//Service
import { LoginService } from './services/login.service';
import { UserService } from './services/user.service';
import { RegisterService } from './services/register.service';
import { PhotoService } from './services/photo.service';
import { AddPhotoService } from './services/add-photo.service';
import { UploadPhotoService } from './services/upload-photo.service';

import { routing } from './app.routing';
import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    PhotoList,
    SidePanel,
    NavBar,
    RegisterComponent,
    Login,
    MyAlbum
  ],
  providers: [
    RegisterService,
    LoginService,
    UserService,
    PhotoService,
    UploadPhotoService,
    AddPhotoService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }