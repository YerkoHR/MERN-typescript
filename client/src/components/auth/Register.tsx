import * as React from "react";
import { connect } from "react-redux";
import { AppTypes } from "../../redux/reducers";
import { Errors } from "../../redux/types/errorTypes";
import { User } from "../../redux/types/authTypes";
import { register } from "../../redux/actions/authActions";
import { clearErrors } from "../../redux/actions/errorActions";

interface PropTypes {
  isAuthenticated: boolean | null;
  error: Errors;
  register: ({ name, email, password }: User) => void;
  clearErrors: () => void;
}

const Register: React.FC<PropTypes> = ({
  isAuthenticated,
  error,
  register,
  clearErrors
}) => {
  const [modal, onModal] = React.useState<boolean | null>(null);
  const [name, onName] = React.useState("");
  const [email, onEmail] = React.useState("");
  const [password, onPassword] = React.useState("");
  const [msg, onMsg] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (error.id === "REGISTER_FAIL") {
      onMsg(error.msg);
    } else {
      onMsg(null);
    }
  }, [error]);

  React.useEffect(() => {
    if (isAuthenticated) {
      if (modal) {
        onModal(false);
      }
    }
  }, [isAuthenticated]);

  const handleToggle = (bool: boolean) => {
    clearErrors();
    onModal(bool);
  };

  const handleSubmit = () => {
    const newUser = {
      name,
      email,
      password
    };
    register(newUser);
  };

  return (
    <>
      {!isAuthenticated && (
        <a className="navbar-item" onClick={() => handleToggle(true)}>
          Register
        </a>
      )}
      <div className={modal ? "modal is-active" : "modal"}>
        <div className="modal-background" onClick={() => handleToggle(false)} />

        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Register</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => handleToggle(false)}
            />
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  onChange={e => onName(e.target.value)}
                  value={name}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control ">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  onChange={e => onEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control">
                <input
                  className="input"
                  type="passwprd"
                  placeholder="Password"
                  onChange={e => onPassword(e.target.value)}
                  value={password}
                />
              </div>
            </div>
            {msg && <p className="help is-danger">{msg}</p>}
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => handleSubmit()}
            >
              Register
            </button>
            <button className="button" onClick={() => handleToggle(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: AppTypes) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
  error: state.errorReducer
});

export default connect(
  mapStateToProps,
  {
    register,
    clearErrors
  }
)(Register);
