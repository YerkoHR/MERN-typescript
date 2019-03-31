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
  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="section" style={{ margin: "0 auto", width: "80%" }}>
      <a
        className="button is-primary"
        style={{ marginBottom: "1rem" }}
        onClick={() => addItem({ name: "item 5" })}
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
