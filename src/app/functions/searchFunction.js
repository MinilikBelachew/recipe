async function FetchRecipeSearchResult(prop){
    try{
     const recipes=await fetch(`https://dummyjson.com/recipes/search?q=${prop}`);
     const recipeslist=await recipes.json()
     return recipeslist?.recipes;
  
    } catch (err){
     // throw new Error(err)
    }
  }

  export default FetchRecipeSearchResult;