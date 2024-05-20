import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail';
@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent implements OnInit {

  cocktails: Cocktail[] = [];

  constructor(private cocktailService: CocktailService) {  }

  ngOnInit(): void {
    this.cocktails = this.cocktailService.getCocktails()
  }

}
