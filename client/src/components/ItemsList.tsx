import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Items, Item } from "../redux/types";
import { getItems, addItem, deleteItem } from "../redux/actions";
import { AppTypes } from "../redux/reducers";

import "./itemsList.css";

interface PropTypes {
  itemsReducer: Items;
  deleteItem: (id) => void;
  addItem: (item: Item) => void;
  getItems: () => void;
}

const ItemsList: React.FC<PropTypes> = ({
  itemsReducer,
  getItems,
  addItem,
  deleteItem
}) => {
  const [modal, onModal] = React.useState<boolean>(false);

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="section" style={{ margin: "0 auto", width: "80%" }}>
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
              className="input"
              type="text"
              placeholder="Your item name..."
            />
          </section>
          <footer className="modal-card-foot">
            <button
              className="button is-success"
              onClick={() => addItem({ name: "item 5" })}
            >
              Add Item
            </button>
            <button className="button" onClick={() => onModal(false)}>
              Cancel
            </button>
          </footer>
        </div>
      </div>

      <a
        className="button is-primary"
        style={{ marginBottom: "1rem" }}
        onClick={() => onModal(true)}
      >
        ADD
      </a>

      <TransitionGroup>
        {itemsReducer.items.map(({ name, _id }) => (
          <CSSTransition key={_id} timeout={500} classNames="fade">
            <div className="box">
              <div className="content">{name}</div>
              <button onClick={() => deleteItem(_id)}>X</button>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

// add item format  onClick={() => addItem({ name: "item 5" })}
const mapStateToProps = (state: AppTypes) => ({
  itemsReducer: state.itemsReducer
});

export default connect(
  mapStateToProps,
  {
    getItems,
    addItem,
    deleteItem
  }
)(ItemsList);
