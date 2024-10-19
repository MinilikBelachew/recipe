import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
          About Our Recipe Hub
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Welcome to our collection of delicious recipes, crafted for food
          lovers by food lovers. Whether you’re a seasoned chef or just getting
          started, we provide step-by-step guides to help you create the perfect
          dish. Our aim is to inspire creativity in the kitchen with recipes
          that are easy to follow, innovative, and packed with flavor.
        </p>
        <div className="flex justify-center mt-8">
          <img
            className="w-full rounded-lg shadow-lg h-96"
            src="/two.jpg"
            alt="Delicious food on the table"
          />
        </div>
      </div>
    </div>
  );
}
