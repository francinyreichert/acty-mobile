import { Component, OnInit } from '@angular/core';
import { ActionsService } from '../actions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})

export class FormPage implements OnInit {

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

  salvar(): void {
    this.serv.save(this.title, this.description, parseInt('' + this.status, 10));
    this.reset();
    this.router.navigate(['home']);
  }

}
