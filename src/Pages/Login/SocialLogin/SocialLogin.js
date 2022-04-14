import React from "react";
import googleIcon from "./google.png";
import facebookIcon from "./facebook.png";
import githubIcon from "./github.png";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  //   const [signInWithFacebook, user, loading, error] =
  //     useSignInWithFacebook(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);

  if (loading || loading2) {
    return <Loading></Loading>;
  }

  let errorElement;
  if (error || error2) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error?.message} {error2.message}
        </p>
      </div>
    );
  }
  if (user || user2) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center ">
        <div
          style={{ height: "2px", width: "200px" }}
          className="bg-warning"
        ></div>
        <p className="mt-2 px-2">or</p>
        <div
          style={{ height: "2px", width: "200px" }}
          className="bg-warning"
        ></div>
      </div>
      <div className="text-center">
        {errorElement}

        <div
          onClick={() => signInWithGoogle()}
          className="btn px-5 d-block mt-2"
          style={{ backgroundColor: "blue" }}
        >
          {" "}
          <img src={googleIcon} alt="" />{" "}
          <span className="fs-5 text-white">Google Sign In</span>
        </div>
        <p>or</p>
        <div
          className="btn btn-primary px-5 d-block mt-2"
          style={{ backgroundColor: "black" }}
        >
          {" "}
          <img src={facebookIcon} alt="" />{" "}
          <span className="fs-5 text-white">Facebook Sign In</span>
        </div>
        <p>or</p>
        <div
          onClick={() => signInWithGithub()}
          className="btn btn-primary px-5 d-block mt-2"
          style={{ backgroundColor: "Green" }}
        >
          {" "}
          <img src={githubIcon} alt="" />{" "}
          <span className="fs-5 text-white">Github Sign In</span>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
