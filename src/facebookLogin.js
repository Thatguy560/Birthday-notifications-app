import React, { Component } from "react";
import { render } from "react-dom";
import FacebookLogin from "react-facebook-login";
import { data } from "./birthday-data";

class ReactFacebookLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accessToken: "",
      name: "",
    };
  }

  componentClicked = (data) => {
    console.log("data", data);
  };

  updateName = () => {
    this.setState({ name: "Peter" });
  };

  responseFacebook = (response) => {
    console.log(response);
    console.log(this.state);
    // console.log(response.friends.data);
    // console.log(response.picture.data.url);
    this.setState({ accessToken: response.accessToken, name: "Peter" });
  };

  render() {
    return (
      <div>
        {/* User Short-Life Access Token: */}
        <h1>{this.updateName}</h1>
        <FacebookLogin
          appId="952295725304264"
          autoLoad={true}
          fields="id,name,email,picture,birthday,friends"
          scope="user_friends"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
        {this.state.accessToken}
      </div>
    );
  }
}

export default ReactFacebookLogin;

// https://graph.facebook.com/4177740805589440/accounts?access_token=EAANiG6BticgBAPWzzHI4jQmUR5kZBGYl19rWuXp4n67swQQUIlCSE9NkucJoV6CJoPZBoCmdV63YnieZBOKpqhBBUxqDG2WnkA6wFBv7ZC1z7HmTtyEmNecwwkqRQm2kaTfQjEepJnQiIFfZChSzqHnwr1YEIIxBzAu6IQa2DzQZDZD
