import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit {
  ingredinets: Ingredient[] = [
    new Ingredient('apples', 5),
    new Ingredient('Tomatos', 10)
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onIngredientAdded(ingredient: Ingredient) {
    if (!this.ingredinets.some(item => item.name === ingredient.name)) {
      this.ingredinets.push(ingredient);
    }
    else {
      const found = this.ingredinets.find(item => item.name === ingredient.name);
      let amount: number = Number(found.amount) + Number(ingredient.amount);
      found.amount = amount;
    }
  }
}
