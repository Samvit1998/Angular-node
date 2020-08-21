import { Injectable, resolveForwardRef } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {

  
  rootURL = 'http://localhost:3080';
   getRecipie(){
    let recipes;
    let a =this.http.get(this.rootURL + '/recipe');
    return new Promise<any>((resolve, reject) => {
      a.subscribe(res=>{
        recipes=res;
        console.log(recipes);
        resolve(recipes);
        }
       
      );
      });
   
    
     

  
  
  }

  updateLike(recipe){
    //console.log(recipe.like);
    if(recipe.like==true){
      alert("You disliked this recipe");
      return this.firestore
      .collection("recipes")
      .doc(recipe.id)
      .set({ like: false }, { merge: true });
      
    }
    else{
      alert("You liked this recipe");
      return this.firestore
      .collection("recipes")
      .doc(recipe.id)
      .set({ like: true }, { merge: true });

    }
    
      
  }
  updateBookmark(recipe){
    //console.log(recipe.like);
    if(recipe.bookmark==true){
      alert("You Un-Bookmarked this recipe");
      return this.firestore
      .collection("recipes")
      .doc(recipe.id)
      .set({ bookmark: false }, { merge: true });
      
    }
    else{
      alert("You Bookmarked this recipe");
      return this.firestore
      .collection("recipes")
      .doc(recipe.id)
      .set({ bookmark: true }, { merge: true });

    }
    
      
  }

  getUsers(){
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('user').snapshotChanges()
      .subscribe(snapshots => {
        resolve(snapshots)
      })
    })
  }

  getUsersById(user_id:string){
    return this.firestore.collection("user", ref => ref.where('user_id', '==', user_id)).valueChanges();
  }

  addUser(user){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("user")
          .add(user)
          .then(res => {}, err => reject(err));
          alert('Added to database...');
  });
  }
  addRecipe(name,image,ingredients,description){
    // console.log(ingredients)
    let recipeNew={
      'name':name,
      'image':image,
      'ingredients':ingredients,
      'description': description
    };
    return new Promise<any>((resolve, reject) =>{
      this.firestore
          .collection("recipes")
          .add(recipeNew)
          .then(res => {}, err => reject(err));
          alert('Added to database...');
  });
     
  }

  
  addIngredient(name,quantity){
    let ingredient= {
      'name':name,
      'quantity':quantity
    }
    console.log(ingredient)

  }


  constructor(private firestore: AngularFirestore,private http: HttpClient) { }
}
