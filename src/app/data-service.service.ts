import { Injectable } from '@angular/core';
import { Good } from './app.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class DataServiceService {

  goods: FirebaseListObservable<Good[]>;

  constructor(private angularFire: AngularFire) {
    this.goods = angularFire.database.list('goods');
    console.log(this.goods);
  }

  getGoods() {
    return this.goods;
  }
}
