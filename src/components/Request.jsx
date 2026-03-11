import React, {useEffect, useState} from "react";
import axios from "axios";
const RequestComp = ({status}) => {
  const [data, setData] = useState();
  try {
  async function getRequest() {
    const request = await axios.get(`http://localhost:5000/${status}`);
    return request;
  }

  // async function postRequest(obj) {
  //   const request = await axios.post(`http://localhost:5000/${status}`, obj);
  //   return request;
  // }

  // const obj =     { "id": 3, "name": "Charlie Brown", "email": "charlie@example.com", "role": "Editor" };
  // const postResponse = postRequest(obj).then(response => console.log(response))

  useEffect(() => {
    const getResponse = getRequest()
      .then((response) => setData(JSON.stringify(response?.data)))
      .catch((error) => {
        setData("Error!");
        throw new Error(error);
      });
  }, []);
  } catch (error) {
    throw new Error();
  }  
  return <>
  {data}
  </>;
};

export default RequestComp;
