import React from "react";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";

function ProfilePage() {
  const {
    authState: { token, firstName },
  } = useAuthorization();
  return (
    <div>
  
      <div className="banner-upper-empty"></div>
      <div className="products-main">
        <ProfileCard name={firstName} />
      </div>

    </div>
  );
}

export { ProfilePage };
