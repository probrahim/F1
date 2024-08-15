import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GGG';
  age:number = 3;
  change():void{
        this.title = this.title + "\tANgualr";

}

}
