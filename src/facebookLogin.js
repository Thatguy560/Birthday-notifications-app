import React, { useState } from "react";
import { render } from "react-dom";
import FacebookLogin from "react-facebook-login";
// import React, { Component } from "react";

const componentClicked = (data) => {
  console.log("data", data);
};

const responseFacebook = (response) => {
  console.log(response);
};

const ReactFacebookLogin = () => {
  return (
    <div>
      {/* React Facebook Login */}
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default ReactFacebookLogin;

// 1) Ensure that months are ordered in the following e.g. Jan, feb march...
// 2) Get sort by age function working
// 3) // Try and see if you can implement facebook data (API) into birthdays

// data.sort((a, b) => {
//   return new Date(a.age).getFullYear() - new Date(b.age).getFullYear();
// });

// updateData(newPerson);
// this.setState(newPerson: this.state.newPerson)
