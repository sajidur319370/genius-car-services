import React from "react";
import expert1 from "../../../images/experts/expert-1.jpg";
import expert2 from "../../../images/experts/expert-2.jpg";
import expert3 from "../../../images/experts/expert-3.jpg";
import expert4 from "../../../images/experts/expert-4.jpg";
import expert5 from "../../../images/experts/expert-5.jpg";
import expert6 from "../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const experts = [
  { id: 1, name: "will smith", img: expert1 },
  { id: 2, name: "Johy Kalen", img: expert2 },
  { id: 3, name: "Kamfa luise", img: expert3 },
  { id: 4, name: "Devid kagah", img: expert4 },
  { id: 5, name: "Lamau facy", img: expert5 },
  { id: 6, name: "Alfred Guja", img: expert6 },
];
const Experts = () => {
  return (
    <div id="experts" className="container">
      <h2 className="text-primary text-center p-5">Our Experts</h2>
      <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
