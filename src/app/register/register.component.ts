import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title="registration form";
  registerForm: any;
  akhil : String;
  name : String ="";
  email: String ="";
  password: String ="";
  confirm_password: String ="";

  constructor(private formBuilder: FormBuilder) {    
    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'email': ['', Validators.required],
      'password': ['', Validators.required],
      'confirm_password': ['', Validators.required ]      
    });
   }

  ngOnInit() { 
  }
  register(){
    //console.log(this.registerForm);
    this.name = this.registerForm.value.name;
    this.email = this.registerForm.value.email;
    this.password = this.registerForm.value.password;
    this.confirm_password = this.registerForm.value.confirm_password;
    console.log(this.name,this.email,this.password,this.confirm_password);
  }


  

}
