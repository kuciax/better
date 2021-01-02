import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux"
import store from './stores/store';
import HomePage from './pages/HomePage';
import Header from "./component/Header"

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/about">
              about
          </Route>
            <Route path="/users">
              users
          </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;