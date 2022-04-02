import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logInform!:FormGroup
  constructor(private fb:FormBuilder,private _authService:AuthService,private _router:Router) { }

  ngOnInit(): void {
    this.logInform=this.fb.group({
      email:[''],
      password:['']
    })
  }

  logingetData(){
    this._authService.loginUser(this.logInform.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('authToken',res.authToken);
      alert('login successfully');
      this._router.navigate(['/note']);
    },err=>console.log(err));
    this.logInform.reset();
  }

}
