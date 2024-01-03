import "tailwindcss/tailwind.css";
import React from "react";

const Home = () => {
  return (
    <>
      <label className=" text-gray-700 text-xl font-bold mb-2 flex items-center justify-center">
        輸入關鍵字
      </label>
      <div className="flex items-center justify-center">
        <input
          className=" appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          type="text"
        />
        <button
          className="bg-blue-500 hover:bg-sky-600 text-white font-semibold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline ml-2 "
          type="button"
        >
          搜尋
        </button>
      </div>
    </>
  );
};

export default Home;
