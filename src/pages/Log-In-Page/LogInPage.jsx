import React from "react";
import { LogInForm } from "../../components/LogInForm/LogInForm";
function LogInPage() {
  return (
    <>
      <div className="banner-upper-empty"></div>
      <div className="products-main">
        <LogInForm />
      </div>
    </>
  );
}

export { LogInPage };
