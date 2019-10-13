import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CityLoginComponent } from './login/city-login/city-login.component';
import { UserLoginComponent } from './login/user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { NewProblemsComponent } from './home/new-problems/new-problems.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CityLoginComponent,
    UserLoginComponent,
    HomeComponent,
    NewProblemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
