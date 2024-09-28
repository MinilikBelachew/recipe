import Image from "next/image";


async function FetchRecipesList(){
  try{
   const recipes=await fetch('https://dummyjson.com/recipes/meal-type/snack');
   const recipeslist=await recipes.json()
   return recipeslist?.recipes;

  } catch (err){
   // throw new Error(err)
  }
}


export default async function Home() {

  const data=await Fet
  return (
    <div className=" bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center bg-[url('/path-to-your-image.jpg')] flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold text-slate-950">Welcome to Recipe App</h1>
          <p className="text-lg mt-4 text-slate-900">Find the perfect recipe for every occasion</p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="Search recipes..."
              className="p-2 rounded-lg text-black"
            />
            <button className="ml-2 p-2 bg-blue-600 text-white rounded-lg">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <h2 className="text-2xl text-center font-bold mb-4">Explore Categories</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-200 p-6 text-center rounded-lg shadow">
            <h3 className="text-lg font-semibold">Vegetarian</h3>
          </div>
          <div className="bg-gray-200 p-6 text-center rounded-lg shadow">
            <h3 className="text-lg font-semibold">Vegan</h3>
          </div>
          <div className="bg-gray-200 p-6 text-center rounded-lg shadow">
            <h3 className="text-lg font-semibold">Desserts</h3>
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-8 bg-gray-100">
        <h2 className="text-2xl text-center font-bold mb-6">Featured Recipes</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow">
            <Image
              src="/path-to-recipe-image.jpg"
              alt="Recipe Image"
              width={200}
              height={150}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Recipe 1</h3>
            <p>Quick description of the recipe...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Image
              src="/path-to-recipe-image.jpg"
              alt="Recipe Image"
              width={200}
              height={150}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Recipe 2</h3>
            <p>Quick description of the recipe...</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <Image
              src="/path-to-recipe-image.jpg"
              alt="Recipe Image"
              width={200}
              height={150}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-4">Recipe 3</h3>
            <p>Quick description of the recipe...</p>
          </div>
        </div>
      </section>

   
    </div>
  );
}
