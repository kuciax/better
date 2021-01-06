import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import HomePage from "./page/HomePage";
import Header from "./component/Header";
import PrivateRoute from "./component/PrivateRoute";
import route from "./constant/routes";
import { Container } from "@material-ui/core";

function App() : JSX.Element {
  return (
    <div className="App">
      <Container>
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
      </Container>
    </div>
  );
}

export default App;
