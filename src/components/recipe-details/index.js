export default function RecipesDetailsSupport({ getRecipedetails }) {
  return (
    <div className="bg-gray-100 py-12">
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto bg-white rounded-lg shadow-lg">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Recipe Image */}
          <img
            src={getRecipedetails?.image}
            alt={getRecipedetails?.name}
            className="w-full rounded-lg object-cover shadow-lg"
          />

          {/* Recipe Details */}
          <div>
            {/* Recipe Name */}
            <h2 className="text-gray-900 font-extrabold text-4xl font-serif mb-4">
              {getRecipedetails?.name}
            </h2>

            {/* Meal Type */}
            <div className="mt-5">
              <p className="text-xl text-gray-700 font-medium">
                {getRecipedetails?.mealType[0]}
              </p>
            </div>

            {/* Cuisine Type */}
            <div className="mt-5">
              <p className="text-xl text-gray-700 font-medium">
                {getRecipedetails?.cuisine}
              </p>
            </div>

            {/* Ingredients */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900">Ingredients</h3>
              <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 text-base">
                {getRecipedetails?.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="mt-10">
              <h3 className="text-2xl font-semibold text-gray-900">Instructions</h3>
              <ul className="list-decimal pl-6 mt-4 space-y-3 text-gray-600 text-base">
                {getRecipedetails?.instructions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




// export default function RecipesDetailsSupport({ getRecipedetails }) {
//   return (
//     <div>
//       <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto">
//         <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
//           <img
//             src={getRecipedetails?.image}
//             alt={getRecipedetails?.name}
//             className="w-4/5 rounded object-cover"
//           />
//           <div>
//             <h2 className=" text-gray-950 font-extrabold text-3xl font-serif">
//               {getRecipedetails?.name}
//             </h2>
//             <div className="gap-4 mt-5">
//               <p className=" text-2xl text-gray-950">
//                 {getRecipedetails?.mealType[0]}
//               </p>
//             </div>
//             <div className="mt-5">
//               <p className=" text-2xl text-gray-950">
//                 {getRecipedetails?.cuisine}
//               </p>
//             </div>
//             <div className=" mt-5">
//               <h3 className=" text-lg font-bold">Ingredients</h3>
//               <ul className=" space-y-3 list-disc mt-4 text-sm text-gray-700">
//                 {getRecipedetails?.ingredients.map((item) => (
//                   <li>{item}</li>
//                 ))}
//               </ul>
//             </div>
//             <div className=" mt-5">
//               <h3 className=" text-lg font text-slate-900 font-bold">Instructions</h3>
//               <ul className=" space-y-3 list-disc mt-4 text-sm text-gray-700">
//                 {getRecipedetails?.instructions.map((item) => (
//                   <li>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
