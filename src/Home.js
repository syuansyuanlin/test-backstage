import "tailwindcss/tailwind.css";
import React from "react";

const Home = () => {
  return (
    <>
      <div
        style={{ paddingTop: 20 }}
        className="flex items-center justify-center"
      >
        <input
          className=" appearance-none border rounded w-30 py-2 px-3 text-gray-700 leading-tight focus:outline-none "
          type="text"
          placeholder="請輸入關鍵字"
        />
        <button
          className="bg-red-700 hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline ml-2 "
          type="button"
        >
          搜尋
        </button>
        <button
          className="bg-red-700 hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline ml-2 "
          type="button"
        >
          新增
        </button>
      </div>
    </>
  );
};

export default Home;
