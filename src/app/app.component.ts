import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star Tunes!';
}

export class Good {

  constructor(public title: string, public artist: string, public description: string, public videUrl: string, public quantity: number, public id: number) { }

}
