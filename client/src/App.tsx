import * as React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import { loadUser } from "./redux/actions/authActions";

const App: React.FC = () => {
  React.useEffect(() => {
    store.dispatch<any>(loadUser());
  }, []);
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
