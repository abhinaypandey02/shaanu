import React from "react";
import RegisterForm from "../../components/profilePage/registerForm/register_form";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import ROUTES_META from "../../metadata/routes_meta";

const SignupPage = () => {
  const his = useHistory();
  return (
    <div className="text-light mt-3 container">
      <RegisterForm />
      <div className="mt-2 w-100 text-center  p-2">
        <div className="hi">
          Existing User?{" "}
          <Button variant="link" onClick={() => his.push(ROUTES_META.logIn)}>
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
