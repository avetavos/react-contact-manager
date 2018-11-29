import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Header from "./components/layouts/Header";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";
import Contacts from "./components/contacts/Contacts";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div className="App">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/about" component={About} />
                <Route exact path="/edit/:id" component={EditContact} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}

export default App;
