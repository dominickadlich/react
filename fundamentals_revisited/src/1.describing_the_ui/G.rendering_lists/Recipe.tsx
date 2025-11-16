import { recipes } from "./RecipeData";

interface RecipeInterface {
    id: string,
    name: string,
    ingredients: string[]
}

function Recipe( {id, name, ingredients}: RecipeInterface) {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map(recipe =>
                <div key={id}>
                <h2>{name}</h2>
                <ul>
                    {{ingredients}.map(ingredient =>
                    <li key={ingredient}>
                        {ingredient}
                    </li>
                    )}
                </ul>
                </div>
            )}
        </div>
    )
}

export default function RecipeList() {
  return (
    <Recipe 
        id=""
        name=""
        ingredients={}
    />
  );
}
