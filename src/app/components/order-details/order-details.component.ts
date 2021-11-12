import { Component, OnInit, OnChanges,EventEmitter, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { OrderModel } from 'src/app/model/order-model.model';
import { OrderService } from 'src/app/services/order.service';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  imgLoading:boolean=true;
  curtOrdereDate:string="";
  routeName?:any;
  userAuth?:string;
  admin?:boolean;

  @Input()order?:OrderModel;
  @Input()refreshList: EventEmitter<any>=new EventEmitter();

  currentOrder:OrderModel={
     title:'',
     description:'',

  }
  message='';
  constructor(private orderSer:OrderService,private router: Router) { }

  ngOnInit(): void {
    this.message='INIT';
    if(this.router.url==='/orders'){
      this.userAuth='admin';
      this.admin=true;
    }else{
      this.userAuth='user';
      this.admin=false;
    }
  }

  onLoadImg(){
    this.imgLoading=false;
  }
  onErrorImg(){
    this.imgLoading=false;
  }

  ngOnChanges():void{
    this.message='';
    this.imgLoading=true;

    this.currentOrder={ ...this.order};
  }

  updateOrder():void{
    let today = new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();


    const data={
     // title:this.currentOrder.title,
     // description:this.currentOrder.description,
      visitCharge:this.currentOrder.visitCharge,
      datetime:today
    };

    if(this.currentOrder.key){
      this.orderSer.update(this.currentOrder.key,data)
      .then(()=>this.message='The order was updated successfully!')
      .catch(err=>console.log(err));
    }
  }
}
