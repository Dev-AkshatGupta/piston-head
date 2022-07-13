import "./SignUpForm.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import { useUserDetails } from "../../utilities/CustomHooks";
function SignUpForm() {
  const { signUpHandler } = useUserDetails();
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
   const passwordRegEx =
     /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
   function validateDetails(details) {
     if (
       details.email === "" ||
       details.password === "" ||
       details.firstName === "" ||
       details.lastName === ""
     ) {
       notifyError("Fill all the fields");
       return false;
     } else if (passwordRegEx.test(details.password)) {
       return passwordRegEx.test(details.password);
     } else {
       notifyError("Please fill password correctly");
       return false;
     }
   }
  //  function clickHandler(e) {
  //    e.preventDefault();
  //    if (validateDetails(details)) signUpHandler(
  //      details.firstName,
  //      details.lastName,
  //      details.email,
  //      details.password
  //    );
  //  }
  function clickHandler(e) {
    //  to prevent initial refreshing of the page
    e.preventDefault();
    signUpHandler(
      details.firstName,
      details.lastName,
      details.email,
      details.password
    ); 
  }
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <form className="form flex-column-center card-shadow background-white no-border width-38">
      <h1 className="text-black">Sign-Up</h1>
      <input
        type="text"
        name="first-name"
        className="form-input"
        placeholder="First Name"
        onChange={(e) => setDetails({ ...details, firstName: e.target.value })}
      />
      <input
        type="text"
        name="first-name"
        className="form-input"
        placeholder="Last Name"
        onChange={(e) => setDetails({ ...details, lastName: e.target.value })}
      />
      <input
        type="email"
        name="email-id"
        className="form-input"
        placeholder="Enter Your Email"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <div className="relative width-100">
        <input
          type={!viewPassword ? "password" : "text"}
          name="password"
          className="form-input"
          placeholder="Enter Your Password"
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
        />
        {!viewPassword && (
          <i
            className="fa fa-eye text eye-icon"
            aria-hidden="true"
            onClick={(e) => setViewPassword(!viewPassword)}
          ></i>
        )}
        {viewPassword && (
          <i
            className="fas fa-eye-slash text eye-icon"
            onClick={(e) => setViewPassword(!viewPassword)}
          ></i>
        )}
      </div>
      <button
        className="btn btn-outline-pri form-btn smooth-square-radius flex-center-center  "
        onClick={(e) => clickHandler(e)}
      >
        Sign-Up
      </button>
      <Link to="/logIn-Page" className="link-btn">
        Already have account?
        <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
}

export { SignUpForm };
