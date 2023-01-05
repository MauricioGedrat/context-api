import React, { useContext, useState } from "react";
import { NewContext } from "../../Context/context";

export const Header = () => {
  const { setSearch } = useContext(NewContext);

  return (
    <div className="z-50 mr-2 ml-2 bg-[#ffffff69] backdrop-blur-md shadow-2xl p-4 w-full items-center fixed rounded-lg flex flex-col sm:flex-row justify-between">
      <h1 className="font-bold text-2xl font-mono text-blue-600 sm:mb-0 mb-5">
        IUsers
      </h1>

      <input
        type="search"
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent backdrop-blur-3xl text-black placeholder:text-black outline-none border border-gray-500 rounded-md p-2"
        placeholder="Search for you user..."
      />
    </div>
  );
};
