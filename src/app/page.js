import Link from "next/link";
 async function FetchRecipesList(id){
    try{
      const apiResponse = await fetch(
        `https://dummyjson.com/recipes/${id}`
      );
      const data = await apiResponse.json();
      return data;
  
    } catch (err){
     // throw new Error(err)
    }
  }
export default async function Home() {
  const data = await FetchRecipesList(1);
  const data1 = await FetchRecipesList(3);
  const data2 = await FetchRecipesList(5);
  console.log(data);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative h-96 bg-cover bg-center bg-[url('/food-one.jpg')] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to Recipe App
          </h1>
          <p className="text-lg mt-4 text-white">
            Find the perfect recipe for every occasion
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8">
        <h2 className="text-3xl text-center font-bold mb-6">
          Explore Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/dinner" className="bg-gray-200 p-6 text-center rounded-lg shadow-lg hover:bg-gray-300 cursor-pointer transition-all duration-300">
            <h3 className="text-xl font-semibold">Dinner</h3>
          </Link>
          <Link
            href="/breakfast"
            className="bg-gray-200 p-6 text-center rounded-lg shadow-lg hover:bg-gray-300 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">BreakFast</h3>
          </Link>
          <Link
            href="/snack"
            className="bg-gray-200 p-6 text-center rounded-lg shadow-lg hover:bg-gray-300 cursor-pointer transition-all duration-300"
          >
            <h3 className="text-xl font-semibold">Desserts</h3>
          </Link>
        </div>
      </section>

      
      <section className="py-8 bg-gray-100">
        <h2 className="text-3xl text-center font-bold mb-6">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href={`/recipes/${data?.id}`}> 
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
              src={data?.image}
              alt={data?.name}
              className=" rounded-lg w-full"
            />
            <h3 className="text-lg font-semibold mt-4">{data?.name}</h3>
            
          </div>
          </Link>
          <Link href={`/recipes/${data1?.id}`}> 
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <img
               src={data1?.image}
               alt={data1?.name}
              className="rounded-lg w-full"
            />
            <h3 className="text-lg font-semibold mt-4">{data1?.name}</h3>
            
          </div>
          </Link>
          <Link href={`/recipes/${data2?.id}`}> 
          <div className="bg-white p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105">
          <img
              src={data2?.image}
              alt={data2?.name}
              className=" rounded-lg w-full"
            />
            <h3 className="text-lg font-semibold mt-4">{data2?.name}</h3>
            
          </div>
          </Link>
        </div>
      </section>
    </div>
  );
}

// import Image from "next/image";

// export default async function Home() {

//   return (
//     <div className=" bg-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative h-80 bg-cover bg-center bg-[url('/path-to-your-image.jpg')] flex items-center justify-center">
//         <div className="text-center text-white">
//           <h1 className="text-4xl font-bold text-slate-950">Welcome to Recipe App</h1>
//           <p className="text-lg mt-4 text-slate-900">Find the perfect recipe for every occasion</p>
//           <div className="mt-6">
//             <input
//               type="text"
//               placeholder="Search recipes..."
//               className="p-2 rounded-lg text-black"
//             />
//             <button className="ml-2 p-2 bg-blue-600 text-white rounded-lg">
//               Search
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-8">
//         <h2 className="text-2xl text-center font-bold mb-4">Explore Categories</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="bg-gray-200 p-6 text-center rounded-lg shadow">
//             <h3 className="text-lg font-semibold">Vegetarian</h3>
//           </div>
//           <div className="bg-gray-200 p-6 text-center rounded-lg shadow">
//             <h3 className="text-lg font-semibold">Vegan</h3>
//           </div>
//           <div className="bg-gray-200 p-6 text-center rounded-lg shadow">
//             <h3 className="text-lg font-semibold">Desserts</h3>
//           </div>
//         </div>
//       </section>

//       {/* Featured Recipes Section */}
//       <section className="py-8 bg-gray-100">
//         <h2 className="text-2xl text-center font-bold mb-6">Featured Recipes</h2>
//         <div className="grid grid-cols-3 gap-4">
//           <div className="bg-white p-6 rounded-lg shadow">
//             <Image
//               src="/path-to-recipe-image.jpg"
//               alt="Recipe Image"
//               width={200}
//               height={150}
//               className="rounded-lg"
//             />
//             <h3 className="text-lg font-semibold mt-4">Recipe 1</h3>
//             <p>Quick description of the recipe...</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <Image
//               src="/path-to-recipe-image.jpg"
//               alt="Recipe Image"
//               width={200}
//               height={150}
//               className="rounded-lg"
//             />
//             <h3 className="text-lg font-semibold mt-4">Recipe 2</h3>
//             <p>Quick description of the recipe...</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow">
//             <Image
//               src="/path-to-recipe-image.jpg"
//               alt="Recipe Image"
//               width={200}
//               height={150}
//               className="rounded-lg"
//             />
//             <h3 className="text-lg font-semibold mt-4">Recipe 3</h3>
//             <p>Quick description of the recipe...</p>
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }
