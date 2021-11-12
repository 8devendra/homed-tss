import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';

import {OrderModel} from '../model/order-model.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

/*
Added Anguler Fire storg in import
added to storage


*/

  private dbPath='/order';

  orderRef:AngularFireList<OrderModel>;
  constructor(private db:AngularFireDatabase) {
    this.orderRef=db.list(this.dbPath);
   }

   getAll():AngularFireList<OrderModel>{
     return this.orderRef;
   }




   create(order:OrderModel):any{
     order.datetime=new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString()
     return this.orderRef.push(order);
   }

   update(key:string, value:any):Promise<void>{
     return this.orderRef.update(key,value);
   }

   delete(key:string):Promise<void>{
     return this.orderRef.remove();
   }
}
