//here we have imported the react library
import React from "react";
import ContactCard from "./ContactCard";
// we have  imported the ContactCard

const ContactList = (props) => {// this is the function that takes the props as an argument
  console.log(props); // this line helps us what is going on right behind the scene log the props object to the console
  // it helps us for debugging and understanding  what data is beong passed into the component

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

// this is the function named as deleteContactHandler takes id as an argument
//this function is used when user clicks on the delete button 

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
// this maps over the contacts array that was passed down from the App componet as a prop
// for every contact it retirn a ContactCard with contact and deleteConactHandler
// and keys props,  it stores the array of the contactCard componrnt in the renderContactList variable




  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;