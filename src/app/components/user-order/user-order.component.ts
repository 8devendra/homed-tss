import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { UserModel } from 'src/app/model/user-model';
import { OrderModel } from 'src/app/model/order-model.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

  orders?:OrderModel[];
  currentOrder?:OrderModel;
  currentIndex=-1;
  selectedUser?:string;

  constructor( private orderSer:OrderService) { }

  ngOnInit(): void {
  }


  retriveOrders():void{
    this.orderSer.getAll().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key:c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(data=>{
      this.orders=data.filter(o=>o.user===this.selectedUser).reverse();
    });
  }

  getUser(u:UserModel){
    this.selectedUser=u.user;
    this.retriveOrders();
    console.log(u.user);

  }

  setActiveOrder(order:OrderModel,index:number):void{
    this.currentOrder=order;
    this.currentIndex=index;
  }
  refreshList():void{
    this.currentOrder=undefined;
    this.currentIndex=-1;
    this.retriveOrders();
  }

}
