import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  temp;
  constructor() {}

  public signwithGoogle() {}

  public setUserdata(data: String) {
    this.temp = data;
  }

  public getUserdata() {
    return this.temp;
  }
}
