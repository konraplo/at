import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test 1', 'simple test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg'),
    new Recipe('Test 2', 'simple test2', '//www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2020/01/gnocchi.jpg')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
