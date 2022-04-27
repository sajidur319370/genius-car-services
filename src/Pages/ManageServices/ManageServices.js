import React from "react";
import useServices from "../../hooks/useServices";

const ManageServices = () => {
  const [services, setServices] = useServices();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to proceed?");
    if (proceed) {
      const url = `http://localhost:5000/service/${id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        });
    }
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Manage Your Services</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h4>{service.name}</h4>
          <button
            onClick={() => {
              handleDelete(service._id);
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
