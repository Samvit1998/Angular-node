import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CookComponent } from './cook/cook.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { canActivate } from '@angular/fire/auth-guard';
import { AuthService } from './services/auth.service';
const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'cook',component:CookComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
