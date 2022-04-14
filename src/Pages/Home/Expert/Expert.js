import React from "react";

const Expert = ({ expert }) => {
  const { name, img } = expert;
  return (
    <div className="col">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <button className="btn btn-secondary ">Go SomeWhere</button>
        </div>
      </div>
    </div>
  );
};

export default Expert;
