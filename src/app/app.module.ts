import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path : 'register' , component : RegisterComponent},
      {path : 'login', component: LoginComponent},
      {path : 'home', component: HomeComponent},
      {
        path : 'admin' , component: AdminComponent,
        canActivate:[AuthGuard],data: {roles:['admin']}
    },
      {path : 'user', component: UserComponent,
      canActivate:[AuthGuard],data: {roles:['admin','user']}}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
