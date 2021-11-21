import { Component, OnInit } from '@angular/core';
import { ContractorModel } from 'src/app/model/contractor-model';
import { ContractorService } from 'src/app/services/contractor.service';

@Component({
  selector: 'app-add-contractor',
  templateUrl: './add-contractor.component.html',
  styleUrls: ['./add-contractor.component.css']
})
export class AddContractorComponent implements OnInit {

  contractor:ContractorModel=new ContractorModel();
  submitted=false;
  serviceSave: Array<any> = [];
  serviceList=[
    {service:'Concrete',id:3},
    {service:'Masonry, Stucco, EIFS',id:4},
    {service:'Metal, Railings',id:5},
    {service:'Framing',id:6},
    {service:'Roofing',id:7},
    {service:'Doors, Windows',id:8},
    {service:'Deywall, Painting, Wall Paper',id:9},
    {service:'Fire Supperssion, Sprinklers',id:21},
    {service:'Plumbing',id:22},
    {service:'AC & Heating',id:23},
    {service:'Electrical',id:26},
    {service:'Electronics Safety Security',id:28},
  ];

  constructor(private contractorService:ContractorService) { }

  ngOnInit(): void {
  }

  onServiceSelactionChange(service:string,event){
    //Boolean isChecked=event.target.checked;
    if(event.target.checked){
      this.serviceSave.push(service);
    }else{
      let index=this.serviceSave.indexOf(service);
      this.serviceSave.splice(index,1);
    }
    console.log(this.serviceSave);
  }

  saveContractor():void{

    this.contractor.typeService=this.serviceSave;
    this.contractorService.createContractor(this.contractor,"u").then(()=>{
      console.log("Contractor Added..");
      this.submitted=true;
    });
  }

  newContractor():void{
    this.submitted=false;
    this.contractor=new ContractorModel();
  }

  addService(event:any):void{
    console.log(event);

  }


}
