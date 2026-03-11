import React from "react";
import RequestComp from "./Request";
import {useState} from "react";
const Users = () => {
  const [status, setStatus] = useState("users");
  return (
    <div className="max-w-[100%]">
      Users
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

export default Users;
