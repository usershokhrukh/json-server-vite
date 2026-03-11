import React from "react";
import "./App.css";
import {Routes, Route, useNavigate} from "react-router-dom";
import Products from "./components/Products";
import Users from "./components/Users";
import Cards from "./components/Cards";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full max-w-lg m-auto mt-[10%] rounded-lg border border-gray-500">
      <div className="flex gap-4 bg-gray-400 p-2 rounded-t-lg">
        <button
          onClick={() => navigate("/products")}
          className="bg-gray-600 p-1 text-sm rounded-md text-white border border-amber-700 hover:opacity-90 outline-none"
        >
          products
        </button>
        <button onClick={() => navigate("/users")} className="bg-gray-600 p-[3px] text-sm rounded-[8px] text-white border-1 border-amber-700 hover:opacity-[0.9] outline-none">
          users
        </button>
        <button onClick={() => navigate("/cards")} className="bg-gray-600 p-[3px] text-sm rounded-[8px] text-white border-1 border-amber-700 hover:opacity-[0.9] outline-none">
          cards
        </button>
      </div>

      <div className="p-2 items-end flex flex-col">
        {/* <button className="border p-1 rounded-[8px] bg-green-500 text-white border-amber-400">add</button> */}
        <Routes>
          <Route path="/" element={<h2>Welcome!</h2>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/cards" element={<Cards/>}/>
          <Route path="*" element={<h2>Not Found</h2>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
