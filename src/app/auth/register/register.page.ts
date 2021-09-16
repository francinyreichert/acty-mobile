import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";
  confirm_password: string = ""; 

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    alert(
     this.name + ', ' + this.email + ', ' + this.password + ', ' + this.confirm_password
    )
  }
}
