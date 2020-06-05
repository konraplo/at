import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test 1', 'simple test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg'),
    new Recipe('Test 1', 'simple test', 'https://pinchofyum.com/wp-content/uploads/Lo-Mein-1-2.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
