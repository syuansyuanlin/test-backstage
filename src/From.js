import React from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import FileUploadButton from "./FileUploadButton";

const From = () => {
  return (
    <>
      <div className=" ">
        <div className="p-10">
          <div className="grid grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                上傳時間起
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                上傳時間迄
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="date"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                上傳人員
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                檔案名稱
              </label>
              <input
                className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                狀態
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline">
                  <option>請選擇狀態</option>
                  <option>通過</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                檔案類型
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline">
                  <option>請選擇檔案類型</option>
                  <option>原始資料</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-red-700 hover:bg-orange-700 text-white font-semibold py-2 px-3 rounded-lg focus:outline-none focus:shadow-outline ml-2 "
              type="button"
            >
              搜尋
            </button>
            <FileUploadButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default From;
