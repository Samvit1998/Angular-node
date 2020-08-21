import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private router:Router){}
  GoogleAuth() { return this.AuthLogin(new auth.GoogleAuthProvider()); } // Auth logic to run auth providers 
  AuthLogin(provider) { 
    return this.afAuth.signInWithPopup(provider).then((result) => { console.log('You have been successfully logged in!');
    console.log(result);

    let users={
     'userId':result.user.uid, 
     'isLogged':true
   };
   localStorage.clear();
   localStorage.setItem('key', JSON.stringify(users));
    this.router.navigate(['/user']);
    }).catch((error) => { console.log(error) }) }

    signOut() {
      this.afAuth.signOut();
       this.router.navigate(['/']);
       localStorage.clear();
      }

     Authenticate():boolean
    {
     let user=JSON.parse(localStorage.getItem('key'));
     console.log(user);
     if(user!=null){
     if(user.isLogged){
       return true;
     }
     else{
       return false;
     }
    }
    return false;
   }

 

 

  


 



}

