import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import logo from "../../assets/viva-logo.png";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./Navigation.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  
  const signOutHandler=async()=>{
    await signOutUser();
    setCurrentUser(null)
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} className="logo" alt="viva logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>Sign out</span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign in
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
