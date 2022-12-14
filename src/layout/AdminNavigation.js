import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./AdminNavigation.module.css";
import AuthContext from "../store/auth-context";

const AdminNavigation = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  // const navigate = useHistory();
  const logoutHandler = () => {
    authCtx.logout();
    // can useHistory to redirect too
  };
  return (
    // <header className={classes.adminHeader}>
    <nav className={classes.nav}>
      {isLoggedIn && (
        <ul className={classes.ul}>
          {/* {!isLoggedIn && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )} */}

          <li className={classes.li}>
            <Link className={classes.a} to="/">
              Home
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.a} to="/admin-aboutus-form">
              Add About Us
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.a} to="admin-mixologist-form">
              Add Mixologist
            </Link>
          </li>
          <li className={classes.li}>
            <Link className={classes.a} to="admin-faq-form">
              Add FAQ
            </Link>
          </li>

          <li className={classes.li}>
            <Link className={classes.a} to="/" onClick={logoutHandler}>
              Logout
            </Link>
          </li>
        </ul>
      )}
    </nav>
    // </header>
  );
};

export default AdminNavigation;
