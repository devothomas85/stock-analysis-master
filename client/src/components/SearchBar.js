import React from "react";
import "./searchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";

export default class SearchBar extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      filterData: "",
      filteredData: [],
      search: "",
      valueEnter: "",
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    return axios
      .get("http://localhost:8080/api/stocks")
      .then((response) => this.setState({ data: response.data }));
  };

  handleFilter = (event) => {
    this.setState({ search: event.target.value });
  };

  searchEnter = (val) => {
    console.log(val);
    // this.setState({ valueEnter: e.value.name });
  };

  render() {
    let { search, data } = this.state;
    let DataSearch = data.filter((item) => {
      return Object.keys(item).some((key) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    });

    return (
      <div className="search">
        <div className="searchInputs">
          <div className="searchBar">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <input
              type="text"
              value={this.search}
              placeholder="Search a company"
              onChange={this.handleFilter.bind(this)}
            />
          </div>
        </div>
        {this.state.search !== "" && (
          <div className="dataResult">
            {DataSearch.map((value) => {
              return (
                <div
                  className="list dataItem"
                  id="{
                    {value.id}}"
                  onClick={this.searchEnter}
                >
                  {value.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}
