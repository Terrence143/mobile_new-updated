import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;
  private _token: any;
  public get token(): any {
    return this._token;
  }
  public set token(value: any) {
    this._token = value;
  }
  constructor(
    private http: HttpClient,
    private storage: NativeStorage,
    private env: EnvService,
  ) { }
  login(email: String, password: String) {
    return this.http.post(this.env.API_URL + 'auth/login',
      {email: email, password: password}
    ).pipe(
      tap(token => {
        this.storage.setItem('token', token)
        .then(
          () => {
            console.log('Token Stored');
          },
          error => console.error('Error storing item', error)
        );
        this.token = token;
        this.isLoggedIn = true;
        return token;
      }),
    );
  }
  register(firstName: String, lastName: String, email: String, username: String, contactNo: String,
    password: String) {
    return this.http.post(this.env.API_URL + 'user/',
      {firstName: firstName, lastName: lastName, email: email, username: username, contactNo: contactNo,
      password: password}
    );
  }
  logout() {
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.post(this.env.API_URL + 'auth/logout', { headers: headers })
    .pipe(
      tap(data => {
        this.storage.remove('token');
        this.isLoggedIn = false;
        delete this.token;
        return data;
      })
    )
  }
  user() {
    const headers = new HttpHeaders({
      'Authorization': this.token['token_type'] + ' ' + this.token['access_token']
    });
    return this.http.get<User>(this.env.API_URL + 'user/', { headers: headers })
    .pipe(
      tap(user => {
        return user;
      })
    );
  }
  getToken() {
    return this.storage.getItem('token').then(
      data => {
        this.token = data;
        if (this.token != null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      },
      () => {
        this.token = null;
        this.isLoggedIn = false;
      }
    );
  }
}