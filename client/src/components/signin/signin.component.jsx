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

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
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

      <form onSubmit={handleSubmit}>
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
          <Button type="submit">Sign In </Button>
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
