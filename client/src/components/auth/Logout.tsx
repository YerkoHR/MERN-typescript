import * as React from "react";
import { connect } from "react-redux";
import { AppTypes } from "../../redux/reducers";
import { logout } from "../../redux/actions/authActions";

interface PropTypes {
  isAuthenticated: boolean | null;
  logout: () => void;
}

const Logout: React.FC<PropTypes> = ({ logout, isAuthenticated }) => {
  return (
    <>
      {isAuthenticated && (
        <a className="navbar-item" onClick={() => logout()}>
          Logout
        </a>
      )}
    </>
  );
};

const mapStateToProps = (state: AppTypes) => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    logout
  }
)(Logout);
