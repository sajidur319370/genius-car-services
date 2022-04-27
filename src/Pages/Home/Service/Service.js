import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
  const navigate = useNavigate();
  const navigateToServiceDetails = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service-item">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h5>price:{price}</h5>
      <p>{description}</p>
      <button
        onClick={() => {
          navigateToServiceDetails(_id);
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default Service;
