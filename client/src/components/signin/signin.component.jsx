import React, { useState } from "react";
import "./signin.styles.scss";

import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../custom-button/custom-button.component";
import { FaEyeSlash, FaEye } from "react-icons/fa";

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
  const [disabled, setDisabled] = useState(false);

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email === "" && password === "") {
      setDisabled(true);
      alert("Please fill in all the fields");
      setDisabled(false);
      return;
    } else if (
      email !== "" &&
      (!email.includes("@") || (!email.includes(".") && password !== ""))
    ) {
      setDisabled(true);
      alert("Please input a valid Email");
      setDisabled(false);
      return;
    } else if (email !== "" && password === "") {
      setDisabled(true);
      alert("Please input your Password");
      setDisabled(false);
      return;
    } else if (email === "" && password !== "") {
      setDisabled(true);
      alert("Please input your Email");
      setDisabled(false);
      return;
    } else if (password.length < 6) {
      setDisabled(true);
      alert("Password must be at least 6 characters");
      setDisabled(false);
      return;
    } else {
      setDisabled(true);
      emailSignInStart(email, password);
      setDisabled(false);
      return;
    }
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
          <Button type="submit" onClick={handleSubmit} disabled={disabled}>
            Sign In
          </Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In with Google
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
