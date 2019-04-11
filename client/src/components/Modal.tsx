import * as React from "react";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/itemsActions";
import { AppTypes } from "../redux/reducers";

interface PropTypes {
  isAuthenticated: boolean | null;
  addItem: (item: string) => void;
}

const Modal: React.FC<PropTypes> = ({ addItem, isAuthenticated }) => {
  const [modal, onModal] = React.useState(false);
  const [item, onItem] = React.useState("");

  const handleItem = () => {
    addItem(item);
    onModal(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <a
          className="button is-primary"
          style={{ marginBottom: "1rem" }}
          onClick={() => onModal(true)}
        >
          ADD
        </a>
      ) : (
        <div className="content">
          <h3>Login to manage items</h3>
        </div>
      )}
      <div className={modal ? "modal is-active" : "modal"}>
        <div className="modal-background" onClick={() => onModal(false)} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add Item</p>
            <button
              className="delete"
              aria-label="close"
              onClick={() => onModal(false)}
            />
          </header>
          <section className="modal-card-body">
            <input
              onChange={e => onItem(e.target.value)}
              className="input"
              type="text"
              value={item}
              placeholder="Your item name..."
            />
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={() => handleItem()}>
              Add Item
            </button>
            <button className="button" onClick={() => onModal(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: AppTypes) => ({
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  { addItem }
)(Modal);
