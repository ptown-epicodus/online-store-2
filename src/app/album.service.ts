import { Injectable } from '@angular/core';
import { Good } from './app.component';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class AlbumService {

  goods: FirebaseListObservable<Good[]>;

  constructor(private angularFire: AngularFire) {
    this.goods = angularFire.database.list('goods');
    console.log(this.goods);
  }

  getAlbums() {
    return this.goods;
  }

  getGoodById(goodId: string){
    return this.angularFire.database.object('goods/' + goodId);
  }

}
