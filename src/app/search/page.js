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
    <div className="">
      <div className="flex gap-6 py-10">
        <input
          value={searchTerm}
          onChange={handleInputChange}
          type="text"
          id="foodsearch"
          placeholder="search..."
          className="p-1 w-screen h-10 shadow-lg shadow-blue-400 rounded-lg border-solid"
        ></input>
        <button>
          <Search className="w-7 h-7" />
        </button>
      </div>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {hasSearched && data && data.length === 0 ? (
            <p>No results found.</p>
          ) : (
            data.map((recipe) => (
              <Link href={`/recipes/${recipe.id}`} key={recipe.id}>
                <Card>
                  <CardContent className="bg-white rounded-md overflow-hidden cursor-pointer hover:scale-[1.1] transition-all">
                    <div className="w-full aspect-w-16 aspec-h-8 lg:h80">
                      <img
                        src={recipe.image}
                        alt={recipe.name}
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <p>{recipe.name}</p>
                    </div>
                    <div className="mt-4 flex items-center flex-wrap gap-8">
                      <p className="text-gray-600">Country: {recipe.cuisine}</p>
                      <p className="text-gray-600">{recipe.difficulty}</p>
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
