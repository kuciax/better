import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import Header from "./component/Header";
import PrivateRoute from "./component/PrivateRoute";
import route from "./shared/routes";

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route path={route.login}>
              <LoginPage />
            </Route>
            <PrivateRoute redirect={route.login} path={route.home}>
              <HomePage />
            </PrivateRoute>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
