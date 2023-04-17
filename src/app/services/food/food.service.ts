import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

getAllFoodsBySearchTerm(searchTerm:string) :Food[] {
  return this.getAll()
  .filter(food => food.name
    .toLowerCase()
    .includes(searchTerm.toLowerCase()))
}

  getAllTags():Tag[] {
return [
  { name: 'All', count: 14 },
  { name: 'FastFood', count: 2 },
  { name: 'Pizza', count: 1 },
  { name: 'Lunch', count: 5 },
  { name: 'SlowFood', count: 4 },
  { name: 'Pinto', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Pasta', count: 2 },
]
  }


  getAllFoodsByTag(tag: string): Food[] {
    return tag == "All"
      ?
      this.getAll() :
      this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: '/assets/images/food1.png',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Gallo Pinto',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['costa rica'],
        stars: 4.5,
        imageUrl: '/assets/images/food2.jpg',
        tags: ['SlowFood', 'Pinto', 'Lunch'],
      },
      {
        id: 3,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl: '/assets/images/food3.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 4,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl: '/assets/images/food4.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 5,
        name: 'Cannelloni',
        price: 11,
        cookTime: '20-30',
        favorite: false,
        origins: ['italy'],
        stars: 4.7,
        imageUrl: '/assets/images/food5.jpg',
        tags: ['SlowFood', 'Pasta', 'Lunch'],
      },
      {
        id: 6,
        name: 'Lasagna',
        price: 20,
        cookTime: '30-40',
        favorite: true,
        origins: ['italy'],
        stars: 4.7,
        imageUrl: '/assets/images/food5.jpg',
        tags: ['SlowFood', 'Pasta', 'Lunch'],
      },

    ]
  }
}
