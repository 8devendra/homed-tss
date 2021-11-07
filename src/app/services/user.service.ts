import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/compat/database';
import {UserModel} from '../model/user-model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private dbPath="/user";
userRef:AngularFireList<UserModel>;
  constructor(private db:AngularFireDatabase) {
    this.userRef=db.list(this.dbPath);
  }

  setPath(db:AngularFireDatabase,pathUser:string){
    this.userRef=db.list(this.dbPath+"/"+pathUser);
  }

  createUser(userAdd:UserModel,user:string):any{
    userAdd.datetime=new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();
    return this.userRef.push(userAdd);
  }

  getAddress():AngularFireList<UserModel>{
    return this.userRef;
  }

}
