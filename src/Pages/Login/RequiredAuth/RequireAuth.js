import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (!user.emailVerified) {
    return (
      <div className="text-center">
        <h5 className="text-danger">Email is not verified</h5>
        <h3 className="text-success">Please verify Your email</h3>
        <button
          className="btn btn-secondary"
          onClick={async () => {
            await sendEmailVerification();
            toast("Sent email");
          }}
        >
          Verify email
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
