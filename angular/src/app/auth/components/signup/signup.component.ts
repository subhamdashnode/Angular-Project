import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpform!:FormGroup;
  constructor(private fb:FormBuilder,private _authservice:AuthService) { }

  ngOnInit(): void {
    this.signUpform=this.fb.group({
      email:[''],
      password:['']
    })
  }
  getSignupData(){
    this._authservice.signupUser(this.signUpform.value).subscribe((res:any)=>{
      console.log(res);
      localStorage.setItem('authToken',res.authToken);
    },err=>console.log(err))
    this.signUpform.reset();
  }
}
