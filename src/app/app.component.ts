import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  @Input() public value: number = 0;
  name=sessionStorage.getItem("username");

  constructor(private router : Router){

  }

  logout(){
if(confirm("Are you sure you want to logout?"))
this.router.navigate(['/login']);
  }
}
