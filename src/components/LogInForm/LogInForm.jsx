import React, { useState } from "react";
import "./LogInForm.css";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import { useUserDetails } from "../../utilities/CustomHooks";
import {notifyError} from "../../utilities/Notifications";
function LogInForm() {
  const { authState, authDispatch } = useAuthorization();
  const [viewPassword, setViewPassword] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const { logInHandler } = useUserDetails();
 const passwordRegEx = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
 function validateDetails(details) {
   if (details.email.trim() === "" || details.password.trim() === "") {
     notifyError(details.email.trim() === ""?"Fill email":details.password.trim() === ""?"Fill password field":"Fill all the fields");
     return false;
   } else if (passwordRegEx.test(details.password)) {
     return passwordRegEx.test(details.password);
   } else {
     notifyError("Please fill password correctly");
     return false;
   }
 }
 function clickHandler(e) {
   //  to prevent initial refreshing of the page
   e.preventDefault();
   if (validateDetails(details)) {
    //  dispatch(login(details));
     logInHandler(details.email, details.password);
   }
 }

  return (
    <form className="form flex-column-center card-shadow background-white no-border width-38">
      <h1 className="text-black">Log-In</h1>
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
      {!passwordRegEx.test(details.password) && (
        <span className="text-red text">
          Please fill one capital one symbol and one number
        </span>
      )}

      <button
        className="btn btn-outline-pri form-btn smooth-square-radius flex-center-center "
        onClick={(e) => clickHandler(e)}
      >
        Log-In
      </button>
      <button
        className="btn btn-outline-pri form-btn smooth-square-radius flex-center-center "
        onClick={(e) => {
          e.preventDefault();
          logInHandler("guptaakshat105@gmail.com", "akshat105");
        }}
      >
        Guest Log-In
      </button>
      <Link to="/signUp-Page" className="link-btn">
        Create new account <i className="fas fa-chevron-right text-accent"></i>
      </Link>
    </form>
  );
}

export { LogInForm };
