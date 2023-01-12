import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AuthGuard } from './auth.guard';
import { ContactusComponent } from './contactus/contactus.component';
import { DemopostComponent } from './demopost/demopost.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostdetailsComponent } from './postdetails/postdetails.component';
import { UnsavedChangesGuard } from './unsaved-changes.guard';


const routes: Routes = [
  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'login' , component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'contactus', component: ContactusComponent},
  {path:'contactus', component:ContactusComponent},
  {path:'post', component:DemopostComponent},
  {path:'postdetails/: id', component: PostdetailsComponent},
  {path: 'adduser', component: AdduserComponent, canDeactivate: [UnsavedChangesGuard]},
  {path: 'products', canActivate:[AuthGuard], loadChildren: './products/products.module#ProductsModule'},
  {path: 'orders', loadChildren: './orders/orders.module#OrdersModule'},
  {path:'**', component:PagenotfoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){
    console.log("routing Module called");
    
  }
 }
