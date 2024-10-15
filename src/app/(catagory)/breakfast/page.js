import BreakFastCatagory from "@/components/snack";
import FetchRecipesList from "@/app/functions/fetchfunctions"

// async function FetchRecipesList(){
//     try{
//      const recipes=await fetch('https://dummyjson.com/recipes/meal-type/breakfast');
//      const recipeslist=await recipes.json()
//      return recipeslist?.recipes;
  
//     } catch (err){
//      // throw new Error(err)
//     }
//   }



export default async function BreakFast()
{
    const data=await FetchRecipesList("breakfast")

    return <div><BreakFastCatagory recipeData={data} /></div>
}