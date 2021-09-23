import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email: string = "";
  password: string = "";

  constructor(private authSrv: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    try {
      this.authSrv.login(this.email, this.password, this.router,
        function(user, nav) {
          console.log('Entrou como ' + user.name);
          nav.navigate(['feed']);
        });
    } catch (e) {
      console.log('ERRO LOGIN COMP = ' + JSON.stringify(e));
    }
  }
}
