import Link from "next/link";
import { Card, CardContent } from "../ui/card";


export default function SnackCatagory({data}){
    return (
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {data && data.length > 0
              ? data.map((recipe) => (
                  <Link href={`/recipes/${recipe.id}`}>
                    <Card>
                      <CardContent className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-[1.1] trnsition-all">
                        <div className="w-full aspect-w-16 aspec-h-8 lg:h80">
                          <img
                            src={recipe.image}
                            alt={recipe.name}
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
                          <p className=" text-gray-600">{recipe.mealType[0]}</p>
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