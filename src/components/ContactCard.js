import React from "react";
//here we have imported the react library
import user from "../images/user.png";
// this imports an image file use as the default user avatar

const ContactCard = (props) => {//function that takes the props as an argument
  const { id, name, email } = props.contact;
  // props object to extract id,name and email
  return (
    <div className="item">
      {/* desplaying users image */}
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        {/* displaying name */}
        <div className="header">{name}</div>
        <div>{email}</div>
        {/* displaying email */}
      </div>
      {/* trash icon to delete the contact */}
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

// exporting the ContactCard component
export default ContactCard;