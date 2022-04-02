import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signupUrl='http://localhost:3001/api/authentication/createuser';
  loginUrl='http://localhost:3001/api/authentication/login';

  constructor(private http:HttpClient) { }
  // FOR USER SIGNUP
  signupUser(data:any){
    return this.http.post(this.signupUrl,data);
  }
  // FOR USER LOGIN
  loginUser(data:any){
    return this.http.post(this.loginUrl,data);
  }
  checkAuthToken(){
    return !!localStorage.getItem('authToken');
  }
  getToken(){
    return localStorage.getItem('authToken');
  }
}
