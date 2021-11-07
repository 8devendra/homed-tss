import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { OrderModel } from 'src/app/model/order-model.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders?:OrderModel[];
  filterOrder?:OrderModel[];
  currentOrder?:OrderModel;
  currentIndex=-1;
  title='';
  filterOf='painting';


  constructor(private orderSer:OrderService) { }

  ngOnInit(): void {
    this.retriveOrders();
  }



  retriveOrders():void{
    this.orderSer.getAll().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key:c.payload.key, ...c.payload.val() })
          )
        )
    ).subscribe(data=>{
      this.orders=data;
      this.filterOrder=data.filter(o=>o.user==="User1");

    });

    //this.orders?.filter(o=>o.title==="painting")
    // this.orders?.sort((a,b)=>
    // {
    //   return (a.title>b.title)?1:-1
    // })

  }

  onOptionsSelected(val:string):void {

    //console.log(val);
    //this.orders=this.orders?.sort((a,b) => a.title < b.title ? -1: a.title>b.title ? 1 : 0);

    this.filterOrder=this.orders?.filter(o=>o.title===val);
    //this.filterOrder=this.filterOrder?.sort((a,b)=>(a.title>b.title)?1:-1);
  }

  refreshList():void{
    this.currentOrder=undefined;
    this.currentIndex=-1;
    this.retriveOrders();
  }

  setActiveOrder(order:OrderModel,index:number):void{
    this.currentOrder=order;
    this.currentIndex=index;
  }





}
