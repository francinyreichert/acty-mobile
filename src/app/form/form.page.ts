import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Router } from '@angular/router';
import { Action } from 'src/model/action';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})

export class FormPage implements OnInit {

  newAction: Action;
  title: string;
  description: string;
  status: number;

  situations = [
    { desc: 'Ativa', val: 0},
    { desc: 'Inativa', val: 1}
  ];

  constructor(private serv: ActionsService, private router: Router) {
  }

  ngOnInit(): void {
  }

  reset(): void {
    this.title = '';
    this.description = '';
    this.status = null;
  }

  save(): void {
    this.newAction = new Action(this.title, this.description, parseInt('' + this.status, 10));
    this.serv.createAction(this.newAction);
    this.reset();
    this.router.navigate(['feed']);
  }

}
