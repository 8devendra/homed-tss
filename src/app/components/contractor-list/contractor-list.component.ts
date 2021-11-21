import { Component, OnInit } from '@angular/core';
import { ContractorService } from 'src/app/services/contractor.service';
import { ContractorModel } from 'src/app/model/contractor-model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-contractor-list',
  templateUrl: './contractor-list.component.html',
  styleUrls: ['./contractor-list.component.css']
})
export class ContractorListComponent implements OnInit {

  contractors?:ContractorModel[];
  currentContractor?:ContractorModel;
  currentIndex=-1;


  constructor(private contractorService:ContractorService) { }


  ngOnInit(): void {
    this.retriveContractor();
  }

  retriveContractor():void{
this.contractorService.getContractor().snapshotChanges().pipe(
  map(changes=>
    changes.map(c=>
    ({key:c.payload.key, ...c.payload.val()}))
    )
    ).subscribe(data=>{
      this.contractors=data.reverse();
    });
  }

  setActiveConstructor(selectedContractor:ContractorModel,index:number):void{
    this.currentContractor=selectedContractor;
    this.currentIndex=index;

  }
  refreshList():void{
this.currentContractor=undefined;
this.currentIndex=-1;
this.retriveContractor();
  }


}
