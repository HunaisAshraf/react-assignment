import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <>
      <h1 className="text-4xl">user : {userId}</h1>
    </>
  );
};

export default User;
