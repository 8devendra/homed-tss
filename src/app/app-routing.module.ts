import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { AppOrderComponent } from './components/app-order/app-order.component';
import { AddUserComponent } from './components/add-user/add-user.component';



const routes: Routes = [
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'orders',component:OrderListComponent},
  {path:'add',component:AppOrderComponent},
  {path:'user',component:AddUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
