import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { User, UserResponse } from 'src/model/user';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  usrListRef = this.db.list<User>('users-list');
  user: User;

  constructor(private fbAuth: AngularFireAuth,
              private db: AngularFireDatabase) {
  }

  async registerUser(user: User) {
    this.register(user).then(ref => {
      console.log('*** registrado ' + ref.result.user.uid);
      // associando dados com usuário do FB
      this.user = new User();
      this.user.uid = ref.result.user.uid;
      this.user.name = user.name;
      this.user.email = user.email;
    //   this.usuario.locations = [];
      this.saveUserData(this.user).then(_ => {
        console.log(_.key + ' gravado');
        this.user.did = _.key;
        this.usrListRef.update(_.key, this.user);
      });
    });
  }

  // registrando usuário no FB
  private async register(user: User) {
    try {
      return  {
        result: await this.fbAuth.createUserWithEmailAndPassword(
          user.email, user.password)
      } as UserResponse;
    } catch (e) {
      console.log(e);
      return  {
        error: e
      } as UserResponse;
    }
  }

  private saveUserData(user: User) {
    return this.usrListRef.push(user);
  }

  login(email: string, password: string, nav?, callback?) {
    this.execLogin(email, password).then(ref => {
      if (ref.error) {
        throw new Error("Usuário inválido");
      } else {
        return this.usrListRef.valueChanges().subscribe(lst => {
          const user = lst.filter(value => {
            if (ref.result.user) {
              return value.uid === ref.result.user.uid;
            }
            return value.uid === ref.result.uid;
          })[0];
          this.user = user;
          if (callback) {
            callback(this.user, nav);
          }
        });
      }
    });
  }

  private async execLogin(email: string, senha: string) {
    try {
      return  {
        result: await this.fbAuth.signInWithEmailAndPassword(
          email, senha
        )
      } as UserResponse;
    } catch (e) {
      console.log(JSON.stringify(e));
      return  {
        error: e
      } as UserResponse;
    }
  }
}
