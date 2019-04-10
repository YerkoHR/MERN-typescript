import * as React from "react";

interface PropTypes {
  modal: boolean;
  onModal: (modal: boolean) => void;
  addItem: (item: string) => void;
}

const Modal: React.FC<PropTypes> = ({ modal, onModal, addItem }) => {
  const [item, onItem] = React.useState("");

  const handleItem = () => {
    addItem(item);
    onModal(false);
  };

  return (
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
  );
};

export default Modal;
