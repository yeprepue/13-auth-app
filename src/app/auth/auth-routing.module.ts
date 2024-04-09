import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './pages/auth-layout/auth-layout.component';
import { LoginPageComponent } from './pages/login-pages/login-pages.component';
import { RegisterPagesComponent } from './pages/register-pages/register-pages.component';

const routes: Routes = [
  {
    path:'',
    component: AuthLayoutComponent,
    children:[
      {path:'login', component: LoginPageComponent},
      {path:'register', component: RegisterPagesComponent},
      {path:'**', redirectTo: 'login'},
    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
