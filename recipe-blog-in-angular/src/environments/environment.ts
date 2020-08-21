// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyAuVFqEkbCcGxD3XkeW_fEkxLyH0d-avyU",
    authDomain: "recipebook-b1d94.firebaseapp.com",
    databaseURL: "https://recipebook-b1d94.firebaseio.com",
    projectId: "recipebook-b1d94",
    storageBucket: "recipebook-b1d94.appspot.com",
    messagingSenderId: "5919620439",
    appId: "1:5919620439:web:09c5714153383fc9039212",
    measurementId: "G-61VEBM556C"
  }

  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
