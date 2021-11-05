import React, { useState } from "react";
import "./signin.styles.scss";

import { connect } from "react-redux";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.action";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
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
          type="password"
          handleChange={handleChange}
          value={password}
          required
          label="Password"
        />
        <div className="buttons">
          <Button type="submit">Sign In </Button>
          <Button type="button" onClick={googleSignInStart} isGoogleSignIn>
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
