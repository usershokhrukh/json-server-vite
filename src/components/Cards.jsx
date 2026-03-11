import React from "react";
import { useState } from "react";
import RequestComp from "./Request";
const Cards = () => {
  const [status, setStatus] = useState("cards");

  return (
    <div>
      Cards
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

export default Cards;
