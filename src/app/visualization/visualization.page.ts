import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Action } from 'src/model/action';
import { ActionsService } from '../actions.service';


@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.page.html',
  styleUrls: ['./visualization.page.scss'],
})
export class VisualizationPage implements OnInit {
  actions: Action[]; 

  constructor(private serv: ActionsService) { }

  ngOnInit() {
    this.actions = this.serv.getAll();
  }

}
