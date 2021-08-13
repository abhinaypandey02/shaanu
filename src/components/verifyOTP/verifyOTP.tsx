import React from "react";
import firebase from "firebase/app";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { getErrorText } from "../../utils/globalFunctions";
import { signOut } from "../../utils/firebase/auth";

interface VerifyOTPType {
  phoneResult: firebase.auth.ConfirmationResult | undefined;
  onSuccess: () => void;
  onHide: () => void;
  resendOTP: () => Promise<boolean>;
  authenticate: boolean;
}

const VerifyOTP = (props: VerifyOTPType) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  function onSubmit({ otp }: { otp: number }) {
    console.log(props.phoneResult?.verificationId);
    props.phoneResult
      ?.confirm(otp.toString())
      .then(props.onSuccess)
      .then(() => {
        if (!props.authenticate) {
          console.log("SIGNING OUT");
          signOut();
        }
      })
      .catch(() =>
        setError("otp", {
          type: "custom",
          message: "WRONG OTP!",
        })
      );
  }

  async function onResendOTP() {
    if (await props.resendOTP()) {
      alert("OTP SENT!");
    }
  }

  return (
    <Modal show={!!props.phoneResult} onHide={props.onHide}>
      <Modal.Header closeButton={true}>Verify OTP</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group>
            <Form.Label>Enter OTP sent to your phone</Form.Label>
            <Form.Control
              {...register("otp", {
                minLength: 6,
                maxLength: 6,
                required: true,
              })}
              type="number"
            />
            <div className="small text-danger text-left">
              {getErrorText(errors.otp?.type, errors.otp?.message)}
            </div>
          </Form.Group>
          <div>
            <Button className="m-2" type="submit">
              Verify OTP
            </Button>
            <Button
              className="m-2"
              variant="outline-primary"
              onClick={onResendOTP}
            >
              Resend OTP
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default VerifyOTP;
