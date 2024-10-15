import DinnerCatagory from "@/components/dinner";
import FetchRecipesList from "@/app/functions/fetchfunctions"


// async function FetchRecipesList(){
//     try{
//      const recipes=await fetch('https://dummyjson.com/recipes/meal-type/snack');
//      const recipeslist=await recipes.json()
//      return recipeslist?.recipes;
  
//     } catch (err){
//      // throw new Error(err)
//     }
//   }

export default async function Snack()
{
    const data=await FetchRecipesList("dinner")
   

    return <div><DinnerCatagory recipeData={data} /></div>
}