import { Link, useParams } from "react-router-dom";
import useServiceDetails from "../../hooks/useServiceDetails";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetails(serviceId);

  return (
    <div className="container text-center">
      <div>
        <h2>Welcome to details:{service.name}</h2>
        <img src={service.img} alt="" className="w-50 h-50" />
      </div>
      <Link to={`/checkout/${serviceId}`}>
        <div className="btn btn-primary mt-4">Proceed checkout</div>
      </Link>
    </div>
  );
};

export default ServiceDetails;
