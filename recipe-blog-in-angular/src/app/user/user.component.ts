import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';
import {AuthService} from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  
  res;
  recipies;
  bookmarked_recipes=[];
  user;
  
  myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  LikeRecipe(recipeId){
    for(var i=0;i<this.recipies.length;i++){
      //console.log(this.recipies[i].like);
      if(recipeId===(i)){
          this.data.updateLike(this.recipies[i]);
      }
     
    }
  }

  

  BookmarkRecipe(recipeId){
    
   
    for(var i=0;i<this.recipies.length;i++){
     
      if(recipeId===(i)){
          this.data.updateBookmark(this.recipies[i]);
      }
      
     
    }
    
    
    console.log(this.bookmarked_recipes);
  }
  constructor(private data: RecipeServiceService, public auth: AuthService,private route: Router) { 
   
    if(!auth.Authenticate()){
      this.route.navigate(['/']);
    }
  }

  ngOnInit() {
  
//   this.data.getRecipie().subscribe(res=>{this.recipies = res;
//     this.bookmarked_recipes=this.recipies.filter(function(eachrecipe){
//       return eachrecipe.bookmark;
      
//     }
//   );
//   console.log(this.bookmarked_recipes);
// });
//this.data.getRecipie()
this.data.getRecipie().then( (item) => this.recipies = item);

// a.forEach(function(b){
//   console.log(b[0]);
// })


}
 
    
   
  

}

