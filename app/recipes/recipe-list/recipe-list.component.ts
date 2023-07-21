import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://photos.bigoven.com/recipe/hero/lowfat-vegetable-lasagna-1336994.jp'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply a test',
      'https://photos.bigoven.com/recipe/hero/lowfat-vegetable-lasagna-1336994.jp'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
