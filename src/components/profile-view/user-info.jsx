import React from "react";
import PropTypes from "prop-types";

export default function UserInfo({ name, email }) {
  return (
    <div>
      <h1 className="dancing-script-uniquifier ">Hey 😎 {name} </h1>
      <p>User:{name}</p>
      <p>Email:{email}</p>
    </div>
  );
}

PropTypes.UserInfo = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
