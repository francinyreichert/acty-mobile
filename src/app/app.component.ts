import { Component } from '@angular/core';
import { User } from 'src/model/structures';
import { ActionsService } from './actions.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: User;

  constructor(private serv: ActionsService) {
   // this.serv.getUser().subscribe(res => {
   //   this.user = res;
   // });
  }
}
