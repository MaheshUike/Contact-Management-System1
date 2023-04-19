import React from 'react';
// here we have imported the React librabry
// demo  for practice
//here we are creating class component as we need to add contacts ....
// we can create function too ...not a big issue
// class AddContact extends React.Component {
// //render method help us to render like when we use class so we use render method
//         render(){
//             return(
                
//                 <div className='ui main'>

//                     <h2>Add Contact</h2>

//                     <form className = 'ui form'>
//                         <div className = 'field'>

//                             <label> Name </label>
//                             <input type = 'text'  name = 'name'  placeholder='Name' />


//                         </div>

//                         <div className = 'field'>

//                             <label> Name </label>
//                             <input type = 'text'  name = 'name'  placeholder='Name' />
                            

//                         </div>

//                         <button clasName = 'ui button blue'>Add</button>

//                     </form>
//                 </div>

//             );
//         }

// }

// export default AddContact;

class AddContact extends React.Component {//it is class Component AddContact
    state = {
      name: "",
      email: "",
    };
  
    add = (e) => {
      e.preventDefault();
      if (this.state.name === "" || this.state.email === "") {
        alert("ALL the fields are mandatory!");
        return;
      }
      this.props.addContactHandler(this.state);
      this.setState({ name: "", email: "" });
    };

    //This define the state object for the AddContact component ,
    // it defines the add method that is called when the form is submitte.
// the add method prevents the default form submission behavior 
//checks if name and email fields are empty ot not






    render() {
      return (
        <div className="ui main">
          <h2>Add Contact</h2>
          <form className="ui form" onSubmit={this.add}>
            <div className="field">
              <label>Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={this.state.name}
                onChange={(e) => this.setState({ name: e.target.value })}
              />
            </div>
            <div className="field">
              <label>Email</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>
            <button className="ui button blue">Add</button>
          </form>
        </div>
      );
    }
  }

  // This is the JSX code that renders the component.
  //  It creates a div element with the class ui main that contains a form with two fields (name and email) and a button.
  //  The value and onChange props are used to bind the values of the input fields to the state of the component. When the form is submitted,
  //  the onSubmit handler calls the add method defined earlier.
  
  export default AddContact;
  // It allows other files to import this component using import AddContact from './AddContact