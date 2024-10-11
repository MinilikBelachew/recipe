import RecipesList from "@/components/recipes";

async function FetchRecipesList(){
   try{
    const recipes=await fetch('https://dummyjson.com/recipes');
    const recipeslist=await recipes.json()
    return recipeslist?.recipes;

   } catch (err){
    // throw new Error(err)
   }
}


export default async function Recipes (){
    

    const recipeData=await FetchRecipesList()
    // console.log(recipeData)
    return <div><RecipesList recipeData={recipeData}/></div>
}