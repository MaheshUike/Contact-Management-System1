//My first Program in React....

import React, { useState, useEffect } from "react";
import './App.css';
import { v4 as uuid } from "uuid";
import Header from "./Header";//as we have file
import  AddContact from "./AddContact";//we have imported these files as we will require them in feauture
import ContactList from "./ContactList";//we have imported these files as we will require them in feauture
//demo function
// function App() {
// //we need to show list of contacts so we have created a array contact 
// //here we have created two list in order to get some cotact on our app 
// const contacts = [
//       {
//         id:"1",
//         'name':'Mahesh',
//         'email':'maheshuike777@gmail.com'
//       },

//       {
//         id:"2",
//         'name':'Mahesh uike',
//         'email':'maheshuike777@gmail.com'
//       }

//   ]

//   return (
//     //so it looks like HTML but its jsx which is combination of js and html
//   <div className ='ui container'>

//       <Header />
//       <AddContact />
//       <ContactList  contact ={contacts}/>
//       {/* here we are using props so that we can pass contacts array  */}



//   </div>
//   );
// }

// export default App;


function App() {// this defines the component name App
  const LOCAL_STORAGE_KEY = "contacts";// this constant is used to store the key name for storing the contact list 
  
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );
  //here the  state variable we have given the name is contacts using the useState hook.
  // the value of contacts is initially set by retrieving the data from the local_storage_key
  // we are parsing it using JSON.parse and see empty arrray as a fallback
  // in case there is no data stored yet 

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };
  // this is calling function or we can say callback function that is passed to tha AddContact component 
  // It retrieves a contacts objectas an argument and log it to the console.
  // Then it creates a new array of contacts by using the spread operator to copy the existing contacts array and adding a new object representing the new contact.
  //  The id property is generated using the uuid function provided by an external library. Finally, it sets the state of the contacts variable to the new array.


  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    // this is the function that is passed to the ContactList component 
    // it receives an ID values as an argument and uses the filter method 
    // to create a new arrray that excludes the contact with given id
    // then it sets the contacts variable to the new array
    
    
    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  //   if (retriveContacts) setContacts(retriveContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  // This uses the useEffect hook to save the contacts state to the local storage whenever it changes.
  //  It watches the contacts variable and only runs the effect when it changes. It uses localStorage.
  //  setItem to store the contacts state as a string in the local storage, using the LOCAL_STORAGE_KEY constant as the key.


  

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} />
    </div>
  );
}

// this is the JSX code that render the component . It creates a DIV
// element and adds the Header and AddContact and ContactList component as children
// AddContact component provides a form for adding the new Contacts and
// use the addContactHandler function to submit the new contact
export default App;