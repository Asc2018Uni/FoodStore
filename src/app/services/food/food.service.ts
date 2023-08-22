import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Fried Potatoes',
        price: 1.5,
        imageUrl: '/assets/images/foods/food-1.jpg',
      },
      {
        id: 2,
        name: 'Burger',
        price: 5,
        imageUrl: '/assets/images/foods/food-2.jpg',
      },
      {
        id: 3,
        name: 'Lahmacun',
        price: 2.5,
        imageUrl: '/assets/images/foods/food-3.jpg',
      },
      {
        id: 4,
        name: 'Kebap',
        price: 12,
        imageUrl: '/assets/images/foods/food-4.jpg',
      },
    ]
  }

}