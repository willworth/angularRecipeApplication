import { Component, OnInit } from '@angular/core';

import { Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'test description', 'https://www.seriouseats.com/images/2016/04/20160410-menu-roasted-eggplant-lentil-vegan-5-thumb-1500xauto-430521.jpg')
  ];

  constructor() { } 

  ngOnInit() {
  }

}
