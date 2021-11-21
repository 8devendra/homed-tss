import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './components/order-list/order-list.component';
import { AppOrderComponent } from './components/app-order/app-order.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import {UserOrderComponent}from './components/user-order/user-order.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import {ContractorListComponent} from './components/contractor-list/contractor-list.component';


const routes: Routes = [
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'orders',component:OrderListComponent},
  {path:'add',component:AppOrderComponent},
  {path:'user',component:AddUserComponent},
  {path:'user-order',component:UserOrderComponent},
  {path:'contactor',component:AddContractorComponent},
  {path:'clist',component:ContractorListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
