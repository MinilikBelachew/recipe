
async function FetchRecipesList(props){
    try{
     const recipes=await fetch(`https://dummyjson.com/recipes/meal-type/${props}`);
     const recipeslist=await recipes.json()
     return recipeslist?.recipes;
  
    } catch (err){
     // throw new Error(err)
    }
  }

  export default FetchRecipesList;