import React from "react";
import LoginForm from "../../components/profilePage/loginForm/login_form";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import ROUTES_META from "../../metadata/routes_meta";

const LoginPage = () => {
  const his = useHistory();
  return (
    <div className="text-light mt-3 container">
      <LoginForm />
      <div className="mt-2 w-100 text-center  p-2">
        <div className="hi">
          New User?{" "}
          <Button variant="link" onClick={() => his.push(ROUTES_META.signUp)}>
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
