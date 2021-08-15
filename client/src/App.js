import React from "react";
import "./App.css";
import "./fonts/SFProText/SF-Pro-Text-BoldItalic.otf";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import StockDetails from "./components/StockDetails";
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: "",
    };
  }
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    return axios
      .get("http://localhost:8080/api/stocks/2")
      .then((response) => this.setState({ data: response.data }));
  };

  render() {
    return (
      <Router>
        <div className="body-at">
          <nav className="navbar navbar-expand navbar-light bg-nav">
            <Link to={"/tutorials"} className="navbar-brand  nav-align">
              Stocks
            </Link>
          </nav>
          <div className="App">
            <div className="font-face-gm items-center content">
              <span className="p-head">The Easiest way to buy</span>
              <span className="p-head">and sell stocks.</span>
              <span className="p-size">
                stock analysis and screening tool for
              </span>
              <span className="p-size">investors in india.</span>
              <SearchBar />
            </div>
            <StockDetails data={this.state.data} />
          </div>
        </div>
      </Router>
    );
  }
}
