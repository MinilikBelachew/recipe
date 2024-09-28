import RecipesDetailsSupport from "@/components/recipe-details";

async function FetchRecipeDetails(currentrecipeid) {
  try {
    const apiResponse = await fetch(
      `https://dummyjson.com/recipes/${currentrecipeid}`
    );
    const data = apiResponse.json();
    return data;
  } catch (e) {}
}

export default async function ReciprDetails({ params }) {
  const getRecipedetails = await FetchRecipeDetails(params?.details);
  return (
    <div>
      <RecipesDetailsSupport getRecipedetails={getRecipedetails} />
    </div>
  );
}
