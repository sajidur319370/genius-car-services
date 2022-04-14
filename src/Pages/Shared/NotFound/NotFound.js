import React from "react";
import notFound from "../../../images/404.png";

const NotFound = () => {
  return (
    <div>
      <h2>Mechanic is sleeping</h2>
      <img src={notFound} alt="" className="w-100" />
    </div>
  );
};

export default NotFound;
