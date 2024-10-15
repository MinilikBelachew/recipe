export default function BreakFastCatagory ({recipeData})
{
    return (
      <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipeData && recipeData.length > 0 ? (
          recipeData.map((recipe) => (
            <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
              <Card className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 transform hover:scale-[1.05] hover:shadow-2xl hover:z-10 bg-gradient-to-br from-white/80 to-gray-50 backdrop-blur-md">
                <div className="relative w-full h-56 lg:h-64 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-lg lg:text-xl font-semibold drop-shadow-lg">
                      {recipe.name}
                    </p>
                  </div>
                </div>

                <CardContent className="p-6 bg-white/70 rounded-b-xl backdrop-filter backdrop-blur-lg group-hover:bg-white/80 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-700 text-sm lg:text-base">
                      <span className="font-bold text-gray-900">Cuisine:</span>{" "}
                      {recipe.cuisine}
                    </p>
                    <p className="text-gray-700 text-sm lg:text-base">
                      <span className="font-bold text-gray-900">
                        Difficulty:
                      </span>{" "}
                      {recipe.difficulty}
                    </p>
                  </div>

                  <div className="flex justify-between items-center">
                    <button className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-md transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                      View Recipe
                    </button>
                    <span className="flex items-center space-x-2 text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 15l-5.878 3.09 1.122-6.545L.49 6.91l6.566-.955L10 0l2.944 5.955 6.566.955-4.754 4.635 1.122 6.545z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p>{recipe.rating} Stars</p>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found</p>
        )}
      </div>
    </div>
      );

}