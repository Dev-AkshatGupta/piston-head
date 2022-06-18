import React from "react";
import { ProfileCard } from "../../components/ProfileCard/ProfileCard";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../contextAndReducers/AuthProvider";
import "./ProfilePage.css";
function ProfilePage() {
  const { authState } = useAuthorization();
  return (
    <div>
      <div className="banner-upper-empty"></div>
      <div className="profile-container__main">
        <ProfileCard />
      </div>
    </div>
  );
}

export { ProfilePage };
