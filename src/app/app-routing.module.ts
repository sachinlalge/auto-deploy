import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { NoDataComponent } from './pages/no-data/no-data.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'no-data', component: NoDataComponent },
  { path: 'pages', loadChildren: './pages/pages.module#PagesModule' },
  // { path: 'pages', component: PagesComponent }, // not-working
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'no-data' },
];

@NgModule({
  declarations: [
    LoginComponent,
    NoDataComponent,
  ],
  imports: [RouterModule.forRoot( routes, {useHash: true} )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
