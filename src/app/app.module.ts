import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideFirebaseApp } from '@angular/fire/app';
import {DatabaseModule}from '@angular/fire/database'
import {AngularFireModule } from '@angular/fire/compat';
import {AngularFireDatabaseModule} from '@angular/fire/compat/database';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { OrderComponent } from './services/order/order.component';
import { AppOrderComponent } from './components/app-order/app-order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { initializeApp } from '@firebase/app';
import { environment } from 'src/environments/environment';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { AddContractorComponent } from './components/add-contractor/add-contractor.component';
import { ContractorListComponent } from './components/contractor-list/contractor-list.component';
import { ContractorDetailsComponent } from './components/contractor-details/contractor-details.component';



@NgModule({
  declarations: [
    AppComponent,
    //OrderComponent,
    AppOrderComponent,
    OrderDetailsComponent,
    OrderListComponent,
    AddUserComponent,
    UserListComponent,
    UserOrderComponent,
    AddContractorComponent,
    ContractorListComponent,
    ContractorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
