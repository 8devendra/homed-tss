import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { OrderModel } from 'src/app/model/order-model.model';
import { UserModel } from 'src/app/model/user-model';
import { OrderService } from 'src/app/services/order.service';


import {AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from "rxjs";


@Component({
  selector: 'app-app-order',
  templateUrl: './app-order.component.html',
  styleUrls: ['./app-order.component.css']
})
export class AppOrderComponent implements OnInit {

  order:OrderModel=new OrderModel();
  userAddres:UserModel=new UserModel();
  submitted=false;
  otherOrder=false;
  orderKey:string="";
  downloadURL: Observable<string> | undefined;
  fb;
  closeResult: string = '';
  imgLoading:boolean=false;

  constructor(private orderServ:OrderService,private storage:AngularFireStorage,private modalService: NgbModal) { }

  ngOnInit(): void {
    //this.order.user="User1";

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

  selectFile(event){
    this.imgLoading=true;
    console.log('Added');

    var n=this.orderKey;//Date.now();
    const file=event.target.files[0];
    const filePath='OrderPhoto/'+n;
    const fileRef=this.storage.ref(filePath);
    const task=this.storage.upload('OrderPhoto/'+n,file);
    task.snapshotChanges()
    .pipe(
      finalize(()=>{
        this.downloadURL=fileRef.getDownloadURL();
        this.downloadURL.subscribe(url=>{
          if(url){
            this.fb=url;
            const data={
              url:this.fb
            }
            if(this.orderKey){
              this.orderServ.update(this.orderKey,data).then(()=>console.log('Image Uploded.'))
              .catch(err=>console.log(err));
            }



          }
          console.log(this.fb);
          this.imgLoading=false;
          console.log('Donw1');
        });
      })
    ).subscribe(url=>{
      if(url){
        console.log(url);
      }
    });

    //delete File
    //



  }

  deleteImg():void{
    if(this.fb!=""){
      this.storage.storage.refFromURL(this.fb).delete();
    }else{
      console.log("No Img Link");
    }


  }





  saveOrder():void{
    console.log("Created"+this.order);
    if(this.userAddres!=null){
    this.order.user=this.userAddres.user;
    this.order.address=this.userAddres.houseno+", "+this.userAddres.street+", "+this.userAddres.city+", "+this.userAddres.state;
    this.order.zip=this.userAddres.zip;
    this.order.phone=this.userAddres.phone;
    }//()
    this.orderServ.create(this.order).then(ref=>{
      console.log("Created New Order :"+ref.key);
      this.orderKey=ref.key;
      this.submitted=true;
    });
  }

  newOrder():void{
    this.submitted=false;
    this.order=new OrderModel();
  }


  onOptionsSelected(val:string):void {
    if(val==="other"){
      this.otherOrder=true;
   }else{
     this.otherOrder=false;
   }

  }

  onOrderTypeOther():void{
    this.order.title="";
  }

  onClear():void{
    this.otherOrder=false;
    this.order.title="";
    this.order.description="";
  }

  getAddress(newAddreess:UserModel){
    console.log("In pare");
    this.userAddres.user=newAddreess.user;
    this.userAddres.houseno=newAddreess.houseno;
    this.userAddres.street=newAddreess.street;
    this.userAddres.city=newAddreess.city;
    this.userAddres.state=newAddreess.state;
    this.userAddres.zip=newAddreess.zip;
    this.userAddres.phone=newAddreess.phone;
  }


}
