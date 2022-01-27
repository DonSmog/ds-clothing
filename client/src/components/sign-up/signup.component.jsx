import React, { useState } from "react";

import { connect } from "react-redux";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
    displayName: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    signUpStart({ displayName, email, password });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />

        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
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

        <FormInput
          name="confirmPassword"
          type={showConfirmPassword ? "text" : "password"}
          handleChange={handleChange}
          value={confirmPassword}
          required
          label="Confirm Password"
        >
          <div className="eyes" onClick={handleClickShowConfirmPassword}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </FormInput>

        <CustomButton type="submit"> SIGN UP </CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
