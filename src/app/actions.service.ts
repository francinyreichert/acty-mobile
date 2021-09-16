import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/structures';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActionsService {

  url = 'http://localhost:3000/';
  user: User;

  constructor(private http: HttpClient) {
    this.getUser().subscribe(res => {
      this.user = new User(res.id, res.name);
      this.user.email = res.email;
      for (let index = 0; index < res.actions.length; index++) {
        const element = res.actions[index];
        const n = this.user.createAction(element.title, element.description, element.status);
        n.modification = element.modification;
      }
      this.user.lastId = res.lastId;
    });
  }

  mock(): void {
    this.user = new User('1', 'Arthur');
    this.user.email = 'arthur@email.com';
    this.user.addAction(1, 'Food donation!');
    this.user.addAction(2, 'Christmas: toy collection for poor children');
    this.user.addAction(3, 'Clothes donation');
    this.user.deleteAction(3);
  }

  getUser(): Observable<User> {
    if (this.user) {
      return of(this.user);
    }
    return this.http.get<User>(this.url + 'user');
  }

  sendData(): void {
    this.http.post(this.url + 'user', this.user).subscribe(res => {
      console.log(res);
    });
  }

  save(title, description, status): void {
    this.user.createAction(title, description, status);
  }

  delete(item): void {
    this.user.remove(item);
  }

  recover(item): void {
    this.user.restore(item);
  }

}