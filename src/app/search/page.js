

async function FetchRecipeSearchResult(){
    try{
     const recipes=await fetch('https://dummyjson.com/recipes/search?q=Margherita');
     const recipeslist=await recipes.json()
     return recipeslist?.recipes;
  
    } catch (err){
     // throw new Error(err)
    }
  }

export default async function Snack()
{
    const data=await FetchRecipeSearchResult()
     console.log(data);
    return <div>

      {/* <SnackCatagory data={data} /> */}
      </div>
}