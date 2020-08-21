import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import{RecipeServiceService} from '../services/recipe-service.service';
import {AuthService} from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  users;
  loginForm: FormGroup;
  
  onLogin(){
    let email= this.loginForm.controls.email.value;
    let password= this.loginForm.controls.password.value;
   for(var i=0;i<this.users.length;i++)
   {
     if(email==this.users[i].email && password==this.users[i].password)
     {
       if(this.users[i].role==1){
         this.route.navigate(['/cook']);
       }
       else{
        this.route.navigate(['/user']);
       }
     }
     
    
   }
  }

  
 
  constructor(private formBuilder: FormBuilder, private data: RecipeServiceService, private route: Router,public authService: AuthService) { }

  ngOnInit() {

    
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]]
    });

  }


}
