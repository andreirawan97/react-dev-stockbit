import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";

import MainNavigator from "./navigation/MainNavigator";
import rootReducer from "./reducers";

function App() {
  const store = createStore(rootReducer);

  return (
    <StoreProvider store={store}>
      <Router>
        <MainNavigator />
      </Router>
    </StoreProvider>
  );
}

export default App;
