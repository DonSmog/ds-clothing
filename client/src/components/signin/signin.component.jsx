import React, { useState } from "react";
import "./signin.styles.scss";

import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import PulseLoader from "react-spinners/PulseLoader";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [emailDisabled, setEmailDisabled] = useState(false);
  const [googleDisabled, setGoogleDisabled] = useState(false);

  const { email, password } = userCredentials;

  const handleEmailSubmit = async (event) => {
    event.preventDefault();

    if (email === "" && password === "") {
      setEmailDisabled(true);
      alert("Please fill in all the fields");
      setEmailDisabled(false);
      return;
    } else if (
      email !== "" &&
      (!email.includes("@") || (!email.includes(".") && password !== ""))
    ) {
      setEmailDisabled(true);
      alert("Please input a valid Email");
      setEmailDisabled(false);
      return;
    } else if (email !== "" && password === "") {
      setEmailDisabled(true);
      alert("Please input your Password");
      setEmailDisabled(false);
      return;
    } else if (email === "" && password !== "") {
      setEmailDisabled(true);
      alert("Please input your Email");
      setEmailDisabled(false);
      return;
    } else if (password.length < 6) {
      setEmailDisabled(true);
      alert("Password must be at least 6 characters");
      setEmailDisabled(false);
      return;
    } else {
      setEmailDisabled(true);
      emailSignInStart(email, password);
      return;
    }
  };

  const handleGoogleSubmit = async (event) => {
    event.preventDefault();

    setGoogleDisabled(true);
    googleSignInStart();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="sign-in">
      <h2>I aleady have an account</h2>
      <span>Sign-in with your email and password.</span>

      <form>
        <FormInput
          name="email"
          type="email"
          handleChange={handleChange}
          value={email}
          required
          label="Email"
        />
        <FormInput
          name="password"
          type={showPassword ? "text" : "password"}
          handleChange={handleChange}
          value={password}
          required
          label="Password"
        >
          <div className="eyes" onClick={handleClickShowPassword}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </FormInput>
        <div className="buttons">
          <Button
            type="submit"
            onClick={handleEmailSubmit}
            disabled={emailDisabled || googleDisabled}
          >
            {emailDisabled ? <PulseLoader color="#fff" /> : "Sign In"}
          </Button>
          <Button
            type="button"
            disabled={googleDisabled || emailDisabled}
            onClick={handleGoogleSubmit}
            isGoogleSignIn
          >
            {googleDisabled ? (
              <PulseLoader color="#fff" />
            ) : (
              "Sign In with Google"
            )}
          </Button>
        </div>
      </form>
      <div className="login-test">
        *You can use this details to test the login*
        <br />
        Email: test14@test.com
        <br />
        Password: 123456789
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
