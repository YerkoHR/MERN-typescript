import * as React from "react";
import { connect } from "react-redux";
import { AppTypes } from "../../redux/reducers";
import { Errors } from "../../redux/types/errorTypes";
import { User } from "../../redux/types/authTypes";
import { logout } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

interface PropTypes {
  logout: () => void;
}

const Logout: React.FC<PropTypes> = ({ logout }) => {
  return (
    <a className="navbar-item" onClick={() => logout()}>
      Logout
    </a>
  );
};

//const mapStateToProps = (state: AppTypes) => ({});

export default connect(
  null,
  {
    logout
  }
)(Logout);
