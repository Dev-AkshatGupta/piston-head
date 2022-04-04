import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { LogInForm } from "../../components/LogInForm/LogInForm";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
function LogInPage() {
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
          <LogInForm />
        </div>
      )}
    </>
  );
}

export { LogInPage };
