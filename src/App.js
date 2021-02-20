import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import routes from "./routes";
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <hr />
          <div className="container">
            {/* <button className="btn btn-info">Them san pham</button> */}

            {/* <ProductList /> */}
            {this.showContentMenus(routes)}
          </div>
        </div>
      </Router>
    );
  }

  showContentMenus = (routes) => {
    console.log(routes)
    var result = "";
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        console.log(route)
        return  (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    console.log("â" + result)
    return <Switch>{result}</Switch>;
  }
}

export default App;
