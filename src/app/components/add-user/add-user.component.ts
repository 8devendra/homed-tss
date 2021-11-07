import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:UserModel=new UserModel();
  submitted=false;
  otherOrder=false;

  constructor(private userSer:UserService) {
    this.user.user="User1";
  }

  ngOnInit(): void {

  }

  saveUser():void{
    this.userSer.createUser(this.user,"user1").then(()=>{
      console.log("Created New User");
      this.submitted=true;
    })
  }

  newUser():void{
    this.submitted=false;
    this.user=new UserModel();

  }

  onClear():void{
    this.user.houseno="";
    this.user.street="";
    this.user.city="";
    this.user.zip="";
    this.user.state="";

  }



}
