import * as React from "react";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/authActions";

interface PropTypes {
  logout: () => void;
}

const Logout: React.FC<PropTypes> = ({ logout }) => {
  return (
    <>
      <a className="navbar-item" onClick={() => logout()}>
        Logout
      </a>
    </>
  );
};

/*
const mapStateToProps = (state: AppTypes) => ({
  isAuthenticated: state.authReducer.isAuthenticated
});
*/
export default connect(
  null,
  {
    logout
  }
)(Logout);
