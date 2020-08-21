import { Component, OnInit } from '@angular/core';
import {RecipeServiceService} from '../services/recipe-service.service';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import * as $ from 'jquery';
import { noUndefined } from '@angular/compiler/src/util';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cook',
  templateUrl: './cook.component.html',
  styleUrls: ['./cook.component.scss']
})
export class CookComponent implements OnInit {

  recipies;
  ingredients=[];
  
  
 
  
     
  

  addRecipe(name,image,description){
    if(name=='' || image=='' || description=='')
    {
      alert('Do not keep fields empty');
    }
    else{
      this.data.addRecipe(name,image,this.ingredients,description);
    }
  }
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
  addIngredient(name,quantity){
    console.log("hello");
    if(name==""){
      alert('dont leave values empty');
    }
    else{
      let ingredient= {
        'name': name,
        'quantity':quantity
      }  
      this.ingredients.push(ingredient);
    }
  }
  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  
  constructor(private data: RecipeServiceService, public auth: AuthService,private route: Router) {
    if(!auth.Authenticate()){
      this.route.navigate(['/']);
    }
   }

  ngOnInit() {
     //this.data.getRecipie().subscribe(res=>{this.recipies = res});
     

     
      
    

 
  }

}
