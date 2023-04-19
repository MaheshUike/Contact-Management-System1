import React from 'react';//here we have imported react in this file 
// here we have imported the react librabry
const Header = ()=> {//it is functional component named as Header using arraow function
    return (

        <div className = "ui fixed menu"> 
{/*  Here we have div element with className ui fixed menu and 
another nested div element with class name ui container center
inside of it contain the h2 element work as heading named as Cntact Manager */}
                <div className = "ui container center">
                    <h2> Contact Manager</h2>
                </div>

        </div>

    );
};

export default Header;
//if we do not write this we will get an error ./Header does not contain default export
// It allows to  other files to import this componet using 
// import Header from'./Header