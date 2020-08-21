import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import{RecipeServiceService} from '../services/recipe-service.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup
  PasswordValidator(control: AbstractControl): { [key: string]: boolean } | null {
   const password = control.get('password');
   const confirmPassword = control.get('confirmPass');
   if (password.pristine || confirmPassword.pristine) {
     return null;
   }
   return password && confirmPassword && password.value !== confirmPassword.value ? { 'misMatch': true } : null;
 }

 
 onSubmit(){
   let user={
     "email":this.registerForm.controls.email.value,
     "password":this.registerForm.controls.password.value,
     'role':0
   };
   this.data.addUser(user);
   



 }
   
 constructor(private formBuilder: FormBuilder,private data: RecipeServiceService) { }

 ngOnInit(): void {
   this.registerForm=this.formBuilder.group
     ({
       email: new FormControl('', [Validators.required, Validators.email]),
       password: new FormControl('', [Validators.required ,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
       confirmPass: new FormControl('', [Validators.required])
     },{
       validator: this.PasswordValidator
          
      });

    
     
   
   
 
 
   
 }
}
