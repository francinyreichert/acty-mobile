import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/model/structures';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ActionsService {

  url = 'http://localhost:3000/';
  user: User;

  constructor() {
    
  }

}