import { Container } from "unstated";

class AuthContainer extends Container {
  state = {
    regid: null,
    loggedIn: false,
    name: "not Set"
  };

  // initialState = {
  //   regid: null,
  //   loggedIn: false,
  //   name: null
  // };

  doLogin = data => {
    // console.log(data);
    // console.log(this.state);
    this.setState({
      ...this.state,
      regid: data.regid,
      name: data.name,
      loggedIn: true
    });
  };

  doLogout = () => {
    this.setState({
      regid: null,
      loggedIn: false,
      name: "not Set"
    });
  };
}

export default AuthContainer;
