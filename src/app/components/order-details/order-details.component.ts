import { Component, OnInit, OnChanges,EventEmitter, Input } from '@angular/core';

import { OrderModel } from 'src/app/model/order-model.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input()order?:OrderModel;
  @Input()refreshList: EventEmitter<any>=new EventEmitter();

  currentOrder:OrderModel={
    title:'',
     description:'',

  }
  message='';
  constructor(private orderSer:OrderService) { }

  ngOnInit(): void {
    this.message='INIT';
  }

  ngOnChanges():void{
    this.message='';
    this.currentOrder={ ...this.order};
  }

  updateOrder():void{
    let today = new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();


    const data={
      title:this.currentOrder.title,
      description:this.currentOrder.description,
      datetime:today
    };

    if(this.currentOrder.key){
      this.orderSer.update(this.currentOrder.key,data)
      .then(()=>this.message='The order was updated successfully!')
      .catch(err=>console.log(err));
    }
  }







}
