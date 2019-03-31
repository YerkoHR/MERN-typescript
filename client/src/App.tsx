import * as React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div style={{ background: "#EFF0F0" }}>
        <Header />
        <ItemsList />
      </div>
    </Provider>
  );
};

export default App;
