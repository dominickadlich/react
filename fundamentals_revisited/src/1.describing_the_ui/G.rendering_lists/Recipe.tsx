import { recipes } from "./RecipeData";

interface RecipeInterface {
    id: string,
    name: string,
    ingredients: string[]
}

function Recipe( {id, name, ingredients}: RecipeInterface) {
    
    return (
        <div key={id}>
            <h1>Recipes</h1><h2>name={name}</h2>
                <ul>
                    <li>ingredients={ingredients}</li>
                </ul>
        </div>
    );
}

export default function RecipeList() {
  return (
    recipes.map(recipe =>
        <Recipe 
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
        />
    )
  );
}
