import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
    recipeSelected = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
        new Recipe('First recipe', 'Description first test.', 'https://images' +
            'vc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffil' +
            'es%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2Frecipes%2Fck%2F11%2F04%2Ffettuccine-olive-oil-ck-x.jpg%3' +
            'Fitok%3Dbt5Cny7R&w=700&q=85',
            [
                new Ingredient('eggs', 3),
                new Ingredient('tomatoes', 4),
            ]),
        new Recipe('Second recipe', 'Description second test.', 'https://www.landolakes.c' +
            'om/lolretail/media/LOLR-Media/Recipe-Collections/easy-dinner-recipes-for-kids.jpg?ext=.jpg',
            [
                new Ingredient('bread', 1),
                new Ingredient('potatoes', 2),
            ]),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}