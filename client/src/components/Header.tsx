import * as React from "react";
import Register from "./auth/Register";
import Logout from "./auth/Logout";

const Header: React.FC = () => {
  const [toggle, onToggle] = React.useState(false);

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
        <a
          role="button"
          className={
            toggle ? "navbar-burger burger is-active" : "navbar-burger burger"
          }
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => onToggle(prevToggle => !prevToggle)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>

      <div className={toggle ? "navbar-menu is-active" : "navbar-menu"}>
        <div className="navbar-end">
          <Register />
          <Logout />
        </div>
      </div>
    </nav>
  );
};

export default Header;
