import React from "react";
import { Subscribe } from "unstated";
import AuthContainer from "./authContainer";
import "./styles.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleBtn = this.handleBtn.bind(this);
  }
  handleBtn = (doLogin, mState) => {
    //console.log(mState);
    let name = document.getElementById("name").value;
    //let password = document.getElementsByName("password").value;
    console.log(name);
    if (name === "rohit267") {
      //alert("Yes");
      doLogin({ name: "Rohit", regid: 170 });
    } else {
      alert("NO");
    }
  };
  render() {
    return (
      <div>
        <Subscribe to={[AuthContainer]}>
          {authContainer => <div>{authContainer.state.name}</div>}
        </Subscribe>

        <div>
          <input id="name" type="text" name="username" />
          <br />
          <br />

          <Subscribe to={[AuthContainer]}>
            {authContainer => (
              <button
                onClick={() =>
                  this.handleBtn(authContainer.doLogin, authContainer.state)
                }
              >
                Login
              </button>
            )}
          </Subscribe>
        </div>
      </div>
    );
  }
}
