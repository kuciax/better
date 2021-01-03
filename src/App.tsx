import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import HomePage from "./pages/HomePage";
import Header from "./component/Header";
import PrivateRoute from "./component/Router/PrivateRoute";
import route from "./shared/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={route.login}>
              <HomePage />
            </Route>
            <PrivateRoute redirect={route.login} path={route.home}>
              <div>"about"</div>
            </PrivateRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
