import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    {
      name: 'Sheet-Pan Gnocchi',
      description: 'very good!',
      imagePath:
        'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2240,c_limit/0621-Sheet-Pan-Gnocchi.jpg'
    },
    {
      name: 'Sheet-Pan Gnocchi',
      description: 'very good!',
      imagePath:
        'https://assets.bonappetit.com/photos/60a4022a248102a01bcfa0b6/1:1/w_2240,c_limit/0621-Sheet-Pan-Gnocchi.jpg'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
