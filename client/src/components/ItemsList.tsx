import * as React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import { Items } from "../redux/types/itemsTypes";
import { getItems, deleteItem } from "../redux/actions/itemsActions";
import { AppTypes } from "../redux/reducers";
import Modal from "./Modal";

import "./itemsList.css";

interface PropTypes {
  itemsReducer: Items;
  isAuthenticated: boolean | null;
  deleteItem: (id?: string) => void;
  getItems: () => void;
}

const ItemsList: React.FC<PropTypes> = ({
  itemsReducer,
  getItems,
  deleteItem,
  isAuthenticated
}) => {
  React.useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="section" style={{ margin: "0 auto", width: "80%" }}>
      <Modal />

      <TransitionGroup>
        {itemsReducer.items.map(({ name, _id }) => (
          <CSSTransition key={_id} timeout={500} classNames="fade">
            <div className="box">
              <div className="content">{name}</div>
              {isAuthenticated && (
                <button onClick={() => deleteItem(_id)}>X</button>
              )}
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = (state: AppTypes) => ({
  itemsReducer: state.itemsReducer,
  isAuthenticated: state.authReducer.isAuthenticated
});

export default connect(
  mapStateToProps,
  {
    getItems,
    deleteItem
  }
)(ItemsList);
