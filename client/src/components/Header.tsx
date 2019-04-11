import * as React from "react";
import { AppTypes } from "../redux/reducers";
import { connect } from "react-redux";
import { Auth } from "../redux/types/authTypes";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
import Login from "./auth/Login";

interface PropTypes {
  auth: Auth;
}

const Header: React.FC<PropTypes> = ({ auth }) => {
  return (
    <nav
      style={{ background: "#FAFAFB" }}
      className="navbar"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item">
          <strong>Home</strong>
        </a>
      </div>

      <div className="navbar-menu">
        <div className="navbar-end">
          {auth.isAuthenticated ? (
            <>
              <a className="navbar-item">
                <strong>{`Welcome ${auth.user!.name}`}</strong>
              </a>
              <Logout />
            </>
          ) : (
            <>
              <Register />
              <Login />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: AppTypes) => ({
  auth: state.authReducer
});

export default connect(
  mapStateToProps,
  null
)(Header);
