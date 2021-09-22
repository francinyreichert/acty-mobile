import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { User } from 'src/model/structures';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  name: string;
  email: string;
  password: string;

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  register() {
    const usr = new User();
    usr.name      = this.name;
    usr.email     = this.email;
    usr.password  = this.password;

    this.authSrv.registerUser(usr).then (res => {
      this.router.navigate(['login']);
    });
  }
}
