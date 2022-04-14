import React from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  return (
    <div className="container text-center">
      <h2>Welcome to details:{serviceId}</h2>
      <Link to="/checkout">
        <div className="btn btn-primary">Proceed checkout</div>
      </Link>
    </div>
  );
};

export default ServiceDetails;
