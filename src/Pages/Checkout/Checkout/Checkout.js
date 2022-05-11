import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetails from "../../../hooks/useServiceDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import axios from "axios";
import { toast } from "react-toastify";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);
  const [user] = useAuthState(auth);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const order = {
      email: user.email,
      name: user.displayName,
      service: service.name,
      address: event.target.address.value,
      phone: event.target.phone.value,
    };
    axios
      .post("https://afternoon-depths-73303.herokuapp.com/order", order)
      .then((res) => {
        const { data } = res;
        if (data.insertedId) {
          toast("Your order is booked");
          event.target.reset();
        }
      });
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Pay for service:{service.name}</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          value={user.displayName}
          placeholder="Name"
          required
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user.email}
          placeholder="Email"
          required
          disabled
          readOnly
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          value={service.name}
          placeholder="Service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Addresss"
          required
          autoComplete="off"
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="place Order" />
      </form>
    </div>
  );
};

export default Checkout;
