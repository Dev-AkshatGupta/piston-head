import React from "react";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import { SignUpForm } from "../../components/SignUpForm/SignUpForm";
import { Navigate, useLocation } from "react-router-dom";
function SignUpPage() {
    let location = useLocation();

    let lastLocation = location.state?.from?.pathname || "/";
    const {
      authState: { token },
    } = useAuthorization();
  return (
    <>

      {token ? (
        <Navigate to={lastLocation} />
      ) : (
        <div className="flex-center-center padding-main">
          <SignUpForm />{" "}
        </div>
      )}
    </>
  );
}
export { SignUpPage };
