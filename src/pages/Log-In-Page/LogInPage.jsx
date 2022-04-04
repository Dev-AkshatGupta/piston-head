import React from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { LogInForm } from "../../components/LogInForm/LogInForm";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
function LogInPage() {
  let location = useLocation();
  let lastLocation = location.state?.lastLocation?.pathname || "/";
  const {
    authState: { token },
  } = useAuthorization();
  return (
    <>
      {token ? (
        <Navigate to={lastLocation} />
      ) : (
        <div className="products-main">
          <LogInForm />
        </div>
      )}
    </>
  );
}

export { LogInPage };
