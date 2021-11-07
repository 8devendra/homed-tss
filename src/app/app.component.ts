import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { OrderModel } from './model/order-model.model';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  //template:  '<h1>{{ (items|async)}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fire-db';

  items:Observable<any[]>;
  constructor(db:AngularFireDatabase){

    this.items=db.list('orders').valueChanges();
  }
}
