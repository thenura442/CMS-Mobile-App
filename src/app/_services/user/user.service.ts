import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'http://localhost:5500/';
const PATH = 'api/customer/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUser(email : any) : any{
    return this.http.post(URL+PATH+'get/id',email);
  }

  getUserProfile(email : any) : any{
    return this.http.post(URL+PATH+'get/id',email);
  }

  updateMobile (updateForm : any) {
    return this.http.post(URL+PATH+'update/mobile', updateForm)
  }

  updatePass (updated : any) {
    return this.http.post(URL+PATH+'update/password', updated)
  }
}
