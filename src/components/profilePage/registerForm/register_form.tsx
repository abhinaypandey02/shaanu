import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import UserInterface, { defaultUser } from "../../../interfaces/user";
import {
  getRecaptchaVerifier,
  sendSMS,
  updateUserDisplayName,
} from "../../../utils/firebase/auth";
import {
  getUserDocument,
  setUserDocument,
} from "../../../utils/firebase/firestore";
import { useForm } from "react-hook-form";
import { getErrorText } from "../../../utils/globalFunctions";
import firebase from "firebase/app";
import VerifyOTP from "../../verifyOTP/verifyOTP";
import { useHistory } from "react-router";
import { useUser } from "../../../contexts/user_context";

export default function RegisterForm() {
  const his = useHistory();
  const [reCaptcha, setReCaptcha] = useState<firebase.auth.RecaptchaVerifier>();
  const [phoneResult, setPhoneResult] =
    useState<firebase.auth.ConfirmationResult>();
  const [, setUser] = useUser();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
    clearErrors,
    trigger,
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
    setUserDocument(user).then(() => {
      setUser(user);
      updateUserDisplayName("AUTHENTICATED");
      his.push("/services");
    });
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    if (await trigger()) {
      clearErrors();
      setLoading(true);
      sendOTP().then(() => setLoading(false));
    } else console.log("NO");
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
            {getErrorText(errors.name?.type)}
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label className="text-white">Phone Number</Form.Label>
          <Form.Control
            id="phone"
            {...register("phone", {
              required: true,
              min: 1000000000,
              max: 9999999999,
              minLength: 10,
              maxLength: 10,
              valueAsNumber: true,
              validate: {
                alreadyExists: async (v) =>
                  !(await getUserDocument("+91" + v.toString())),
              },
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
