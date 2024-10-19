export default function RecipesDetailsSupport({ getRecipedetails }) {
  
    return (
      <div className="py-12">
        <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto bg-white rounded-lg shadow-lg transition-transform transform hover:shadow-2xl">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
          
            <img
              src={getRecipedetails?.image}
              alt={getRecipedetails?.name}
              className="w-full h-60 lg:h-80 rounded-lg object-cover shadow-lg transition-transform transform hover:scale-110"
            />
  
            <div className="flex flex-col justify-between">
             
              <h2 className="text-gray-900 font-extrabold text-4xl font-serif mb-4">
                {getRecipedetails?.name}
              </h2>
  
             
              <div className="flex space-x-4 mt-5">
                <p className="text-xl text-gray-700 font-medium border-b-2 border-blue-600 inline-block pb-2">
                  {getRecipedetails?.mealType[0]}
                </p>
                <p className="text-xl text-gray-700 font-medium border-b-2 border-blue-600 inline-block pb-2">
                  {getRecipedetails?.cuisine}
                </p>
              </div>
  
            
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-900">Ingredients</h3>
                <ul className="list-disc pl-6 mt-4 space-y-3 text-gray-600 text-base">
                  {getRecipedetails?.ingredients.map((item, index) => (
                    <li key={index} className="hover:text-blue-600 transition-colors duration-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
  
             
              <div className="mt-10">
                <h3 className="text-2xl font-semibold text-gray-900">Instructions</h3>
                <ul className="list-decimal pl-6 mt-4 space-y-3 text-gray-600 text-base">
                  {getRecipedetails?.instructions.map((item, index) => (
                    <li key={index} className="hover:text-blue-600 transition-colors duration-300">
                      {item}
                    </li>
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
// 
