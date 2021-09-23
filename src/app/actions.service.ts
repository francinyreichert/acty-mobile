import { Injectable } from '@angular/core';
import { Action } from 'src/model/action';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class ActionsService {

  actionListRef = this.db.list<Action>('actions-list');
  action: Action;
  actions: Action[];

  constructor(private db: AngularFireDatabase) { 
    this.actions = [];
  }

  createAction(action : Action) {
    this.action = action;
    this.saveActionData(this.action).then(_ => {
      this.action.id = _.key;
      this.actionListRef.update(_.key, this.action);
      this.actions.push(this.action);
    });
  }

  private saveActionData(action: Action) {
    return this.actionListRef.push(action);
  }

  getAll(): Action[] {
    return this.actions;
  }

  delete(id: string) {
    this.actionListRef.remove(id);
  }

}