import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  currentUser = 'Joe';

  setUser(name: string) {
    this.currentUser = name;
  }

  getUser() {
    return this.http.get('https://conduit.productionready.io/api/profiles/eric');
  }

}