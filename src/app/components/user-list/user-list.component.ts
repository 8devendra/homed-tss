import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserModel } from 'src/app/model/user-model';
import {map} from 'rxjs/operators';
import { OrderModel } from 'src/app/model/order-model.model';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users?:UserModel[];
  filterUser?:UserModel[];
  currentUser?:UserModel;
  currentIndex=-1;
  selectedVal:any;

  @Output() newItem=new EventEmitter<UserModel>();



  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.retriveUser();

  }
  sendMessg(){
    //this.currentUser=event.target.value;
    console.log(this.selectedVal);
    this.newItem.emit(this.selectedVal);
  }

  retriveUser():void{
    this.userService.getAddress().snapshotChanges().pipe(
      map(changes=>
        changes.map(c=>
          ({key:c.payload.key, ...c.payload.val()})
          )
        )
        ).subscribe(data=>{
          this.users=data;
          //this.filterUser=data.filter(o=>o.user==="User1");;
        });

  }



}
