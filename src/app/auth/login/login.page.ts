import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
//import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";

  constructor() { }

  ngOnInit() {
  }

  onLogin() {
    alert(
     this.email + ', ' + this.password
    )
  }
}
