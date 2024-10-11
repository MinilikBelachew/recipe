import Link from "next/link";
import { Card, CardContent } from "../ui/card";

export default function RecipesList({ recipeData }) {
  console.log(recipeData);
  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeData && recipeData.length > 0
          ? recipeData.map((recipe) => (
              <Link href={`/recipes/${recipe.id}`}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-[1.1] transition-all ">
                    <div className="w-full aspect-w-16 aspec-h-8 lg:h80">
                      <img
                        src={recipe.image}
                        alt={recipe.nme}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p>{recipe.name}</p>
                    </div>
                    <div className="mt-4 flex items-center flex-wrap gap-8">
                      <p className=" text-gray-600 ">
                        Country: {recipe.cuisine}
                      </p>
                      <p className=" text-gray-600">{recipe.difficulty}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))
          : null}
      </div>
    </div>
  );
}
