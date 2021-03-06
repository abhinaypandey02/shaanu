import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { getRecaptchaVerifier, sendSMS } from "../../../utils/firebase/auth";
import { useForm } from "react-hook-form";
import { getErrorText } from "../../../utils/globalFunctions";
import VerifyOTP from "../../verifyOTP/verifyOTP";
import firebase from "firebase";
import { useHistory } from "react-router";
import { useUser } from "../../../contexts/user_context";

export default function LoginForm() {
  const his = useHistory();
  const {
    register,
    formState: { errors },
    setError,
    getValues,
    clearErrors,
  } = useForm();
  const [phoneResult, setPhoneResult] =
    useState<firebase.auth.ConfirmationResult>();
  const [reCaptcha, setReCaptcha] = useState<firebase.auth.RecaptchaVerifier>();
  const [loading, setLoading] = useState(false);
  const [user] = useUser();
  useEffect(() => {
    const captcha = getRecaptchaVerifier("captcha");
    if (!reCaptcha) setReCaptcha(captcha);
    return () => captcha.clear();
  }, []);

  async function sendOTP(): Promise<boolean> {
    if (reCaptcha) {
      try {
        const result = await sendSMS(
          "+91" + getValues("phone").toString(),
          reCaptcha
        );
        setPhoneResult(result);
        return true;
      } catch (err) {
        setError("phone", { type: "custom", message: err.message });
        return false;
      }
    }
    return false;
  }

  function onSubmit(e: any) {
    e.preventDefault();
    clearErrors();
    setLoading(true);
    sendOTP().then(() => setLoading(false));
  }

  return (
    <div className="container">
      <VerifyOTP
        phoneResult={phoneResult}
        onSuccess={async () => {
          if (!user) {
            setTimeout(() => {
              setError("phone", {
                type: "custom",
                message: "No user with this phone exists! Please Sign Up!",
              });
              setPhoneResult(undefined);
            }, 3000);
          } else his.push("/services");
        }}
        onHide={() => setPhoneResult(undefined)}
        resendOTP={sendOTP}
        authenticate={true}
      />
      <div className="col-12 text-center">
        <h2 className="display-4 text-warning">Log In</h2>
      </div>

      <Form onSubmit={onSubmit} noValidate={true}>
        <Form.Group>
          <Form.Label className="text-white">Phone Number</Form.Label>
          <Form.Control
            id="phone"
            {...register("phone", {
              required: true,
              minLength: 10,
              maxLength: 10,
              valueAsNumber: true,
            })}
            type="number"
            className="text-light border border-warning rounded-0 bg-transparent"
          />
          <Form.Text className="small text-danger">
            {getErrorText(errors.phone?.type, errors.phone?.message)}
          </Form.Text>
        </Form.Group>
        <Button variant="warning" type="submit">
          Send OTP
        </Button>
        {loading && <Spinner className="m-2" animation={"border"} />}
        <div id="captcha" />
      </Form>
    </div>
  );
}
