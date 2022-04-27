import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="container text-center">
      <div>
        <h2>Welcome to details:{service.name}</h2>
        <img src={service.img} alt="" className="w-50 h-50" />
      </div>
      <Link to="/checkout/:serviceId">
        <div className="btn btn-primary mt-4">Proceed checkout</div>
      </Link>
    </div>
  );
};

export default ServiceDetails;
