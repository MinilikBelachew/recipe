"use client";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import FetchRecipeSearchResult from "../functions/searchFunction";
import { useState, useEffect } from "react";
import { Search } from "lucide-react";

export default function SearchResult() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]); // Store the fetched data
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [hasSearched, setHasSearched] = useState(false); // Track if search has been made

  function handleInputChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await FetchRecipeSearchResult(searchTerm);
      setData(result || []);
      setIsLoading(false);
      setHasSearched(true); // Indicate that a search has been made
    };

    // Fetch the data if searchTerm is not empty
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]); // Run useEffect when searchTerm changes

  return (
    <div className="container mx-auto p-6">
    {/* Search Input Section */}
    <div className="flex gap-4 py-8 items-center">
      <div className="relative w-full">
        <input
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
          id="foodsearch"
          placeholder="Search for recipes..."
          className="w-full h-12 px-6 py-2 bg-white/70 backdrop-blur-lg border-2 border-blue-300 rounded-full shadow-lg focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-300 transition-all duration-300 text-gray-700 placeholder-gray-400"
        />
        
        {/* Search Icon with Animation */}
        <button className="absolute right-4 top-2/4 transform -translate-y-2/4 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 transition-all duration-300">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </div>
  
    {/* Loading Spinner */}
    {isLoading ? (
      <div className="flex justify-center items-center py-10">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {hasSearched && data && data.length === 0 ? (
          <p className="text-center text-gray-500 col-span-full">No results found.</p>
        ) : (
          data.map((recipe) => (
            <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
              <Card className="group relative bg-white/80 shadow-md hover:shadow-lg transition-all duration-500 transform hover:scale-[1.05] rounded-xl overflow-hidden">
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
  
                <CardContent className="p-4 bg-white backdrop-blur-lg group-hover:bg-white/90 transition-colors duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-gray-700 text-sm lg:text-base">
                      <span className="font-bold text-gray-900">Cuisine:</span> {recipe.cuisine}
                    </p>
                    <p className="text-gray-700 text-sm lg:text-base">
                      <span className="font-bold text-gray-900">Difficulty:</span> {recipe.difficulty}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        )}
      </div>
    )}
  </div>
  
  );
}



// "use client";
// import { Card, CardContent } from "@/components/ui/card";
// import Link from "next/link";
// import FetchRecipeSearchResult from "../functions/searchFunction";
// import { useState } from "react";
// import { Search } from "lucide-react";

// // async function FetchRecipeSearchResult(prop){
// //     try{
// //      const recipes=await fetch(`https://dummyjson.com/recipes/search?q=${prop}`);
// //      const recipeslist=await recipes.json()
// //      return recipeslist?.recipes;

// //     } catch (err){
// //      // throw new Error(err)
// //     }
// //   }

// export default async function SearchResult() {
//   let [searchTerm, setSearchTerm] = useState("Pir"); // useState should be inside a functional component

//   function handleInputChange(event) {
//     setSearchTerm(event.target.value);
//   }

//   const data = await FetchRecipeSearchResult(searchTerm);

//   return (
//     <div className="">
//       <div className=" flex gap-6 py-10">
//         <input
//           value={searchTerm}
//           onChange={handleInputChange}
//           type="text"
//           id="foodsearch"
//           placeholder="search..."
//           className="p-1 w-screen h-10  shadow-lg shadow-blue-400 rounded-lg border-solid"
//         ></input>
//         <button>
//           {" "}
//           <Search className="w-7 h-7  " />
//         </button>
//       </div>
//       <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
//         {data && data.length > 0
//           ? data.map((recipe) => (
//               <Link href={`/recipes/${recipe.id}`}>
//                 <Card>
//                   <CardContent className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-[1.1] transition-all ">
//                     <div className="w-full aspect-w-16 aspec-h-8 lg:h80">
//                       <img
//                         src={recipe.image}
//                         alt={recipe.nme}
//                         className="h-full w-full object-cover object-top"
//                       />
//                     </div>
//                     <div>
//                       <p>{recipe.name}</p>
//                     </div>
//                     <div className="mt-4 flex items-center flex-wrap gap-8">
//                       <p className=" text-gray-600 ">
//                         Country: {recipe.cuisine}
//                       </p>
//                       <p className=" text-gray-600">{recipe.difficulty}</p>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </Link>
//             ))
//           : null}
//       </div>
//     </div>
//   );
// }
