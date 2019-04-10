import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Items } from "../redux/types";
import { getItems, addItem, deleteItem } from "../redux/actions";
import { AppTypes } from "../redux/reducers";
import Modal from "./Modal";

import "./itemsList.css";

interface PropTypes {
  itemsReducer: Items;
  deleteItem: (id?: string) => void;
  addItem: (item: string) => void;
  getItems: () => void;
}

const ItemsList: React.FC<PropTypes> = ({
  itemsReducer,
  getItems,
  addItem,
  deleteItem
}) => {
  const [modal, onModal] = React.useState(false);

  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="section" style={{ margin: "0 auto", width: "80%" }}>
      <Modal addItem={addItem} modal={modal} onModal={onModal} />
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
