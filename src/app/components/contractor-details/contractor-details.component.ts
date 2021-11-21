import { Component, Input, OnInit,EventEmitter } from '@angular/core';

import { ContractorModel } from 'src/app/model/contractor-model';
import { ContractorService } from 'src/app/services/contractor.service';

@Component({
  selector: 'app-contractor-details',
  templateUrl: './contractor-details.component.html',
  styleUrls: ['./contractor-details.component.css']
})
export class ContractorDetailsComponent implements OnInit {

  @Input()order?:ContractorModel;
  @Input()refreshList:EventEmitter<any>=new EventEmitter();
  currentOrder:ContractorModel={
    name:'',
    phone:0
  }

  constructor(private contractorService:ContractorService) { }

  ngOnInit(): void {
  }

  ngOnChanges():void{
    this.currentOrder={ ...this.order};
    //console.log(this.order);
  }

}
