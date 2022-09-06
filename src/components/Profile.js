import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <JSONPretty data={user} />
        {/*installed json pretty to style data and we are only showing this when user is authenticated so added isauthenticated*/}
        {/*JSON.stringify(user, null, 2)*/}
      </div>
    )
  );
};

export default Profile;
