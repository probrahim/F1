import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  title = 'Users Component';
  zzz:number = 3;
  affiche():void{
    console.log("Bonjour");
  }
}
