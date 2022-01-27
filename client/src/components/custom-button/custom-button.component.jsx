import React from "react";
import "./custom-button.styles.scss";

const Button = ({
  children,
  isGoogleSignIn,
  disabled,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
