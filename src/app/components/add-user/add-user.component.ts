import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
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
  closeResult: string = '';


  constructor(private userSer:UserService,private modalService: NgbModal) {
    //this.user.user="User1";
  }

  ngOnInit(): void {

  }

    //// For Pop Up --Start
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  //// For Pop Up --END

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
