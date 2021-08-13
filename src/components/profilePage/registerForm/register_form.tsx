import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import UserInterface, { defaultUser } from "../../../interfaces/user";
import { getRecaptchaVerifier, sendSMS } from "../../../utils/firebase/auth";
import { setUserDocument } from "../../../utils/firebase/firestore";
import { useForm } from "react-hook-form";
import { getErrorText } from "../../../utils/globalFunctions";
import firebase from "firebase/app";
import VerifyOTP from "../../verifyOTP/verifyOTP";

export default function RegisterForm() {
  const [reCaptcha, setReCaptcha] = useState<firebase.auth.RecaptchaVerifier>();
  const [phoneResult, setPhoneResult] =
    useState<firebase.auth.ConfirmationResult>();

  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
  } = useForm();

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

  function addUser({ name, phone }: any) {
    const user: UserInterface = {
      ...defaultUser,
      name,
      phone,
    };
    setUserDocument(user);
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
        onSuccess={handleSubmit(addUser)}
        onHide={() => setPhoneResult(undefined)}
        resendOTP={sendOTP}
        authenticate={true}
      />
      <div className="col-12 text-center">
        <h2 className="display-4 text-warning">Sign Up</h2>
      </div>

      <Form onSubmit={onSubmit} noValidate={true}>
        <Form.Group>
          <Form.Label className="text-white">Name</Form.Label>
          <Form.Control
            id="firstName"
            {...register("name", { required: true })}
            className="text-light border border-warning rounded-0 bg-transparent"
          />
          <Form.Text className="small text-danger">
            {getErrorText(errors.firstName?.type)}
          </Form.Text>
        </Form.Group>
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
        <div id="captcha" />
        <div className="d-flex align-items-center">
          <Button disabled={loading} variant="warning" type="submit">
            Sign Up
          </Button>
          {loading && <Spinner className="m-2" animation={"border"} />}
        </div>
      </Form>
    </div>
  );
}
