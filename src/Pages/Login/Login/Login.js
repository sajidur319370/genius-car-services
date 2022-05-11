import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import axios from "axios";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);
  const handleLogin = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://afternoon-depths-73303.herokuapp.com/login",
      { email }
    );
    console.log(data);
    localStorage.setItem("access-token", data.accessToken);
    navigate(from, { replace: true });
  };
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();
  if (user) {
    // navigate(from, { replace: true });
  }
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">{error?.message}</p>
      </div>
    );
  }
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const resetPassword = async () => {
    const email = emailRef.current.value;

    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("Enter Your email");
    }
  };

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="Login"></PageTitle>
      <h2 className="text-primary text-center mt-4">Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button
          className="d-block w-50 mx-auto"
          variant="primary"
          type="submit"
        >
          Login
        </Button>
      </Form>
      <p className="text-secondary mt-4 text-center">
        New To Genius Car?{" "}
        <Link className="text-primary text-decoration-none" to="/register">
          Please Register
        </Link>
      </p>
      <p className="text-secondary mt-4 text-center">
        Forget Password?{" "}
        <span
          onClick={() => resetPassword()}
          style={{ cursor: "pointer" }}
          className="text-primary text-decoration-none"
        >
          Reset Password
        </span>
      </p>
      {errorElement}
      <SocialLogin></SocialLogin>
      <ToastContainer />
    </div>
  );
};

export default Login;
