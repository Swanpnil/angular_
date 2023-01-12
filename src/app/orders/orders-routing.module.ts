import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderlistComponent } from './orderList/orderlist.component';


const routes: Routes = [
  {path:'', component:OrderlistComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { 
  constructor(){
    console.log("orderroutingmodule works");
    
  }
}
