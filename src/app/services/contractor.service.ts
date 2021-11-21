import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import { ContractorModel } from '../model/contractor-model';


@Injectable({
  providedIn: 'root'
})
export class ContractorService {
private dbPath="/contractor";
constructorRef:AngularFireList<ContractorModel>;
  constructor(private db:AngularFireDatabase) {
    this.constructorRef=db.list(this.dbPath);
   }

  createContractor(contractor:ContractorModel,user:string){
    contractor.addedBy=user;
    contractor.datetime=new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString()
    return this.constructorRef.push(contractor);
  }

  getContractor():AngularFireList<ContractorModel>{
    return this.constructorRef;
  }
}
