import React from "react";
import {useState} from "react";
import RequestComp from "./Request";
const Products = () => {
  const [status, setStatus] = useState("products");

  return (
    <div className="max-w-[100%]">
      Products
      {/* <textarea
        placeholder={`Post your ${status}`}
        className="w-full border border-amber-700 rounded-md p-1 outline-none min-h-[50px]"
        spellCheck="false"
      /> */}
      <p className="break-words">
        <RequestComp status={status} />
      </p>
    </div>
  );
};

export default Products;
