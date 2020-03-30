import React, { Component } from "react";
import FilterByBrands from "./filterbybrands";
import FilterByTypes from "./filterbytypes";
import FilterByOS from "./filterbyos";

class SideBar extends Component {
  render() {
    return (
      <div
        className="col-auto"
        style={{
          padding: "20px 20px",
          backgroundColor: "#ABB2B9"
        }}
      >
        <div className="row" style={{ padding: "0px 0px", margin: "0px" }}>
          <h5>Search</h5>
        </div>
        <div className="row" style={{ margin: "0px" }}>
          <form
            class="form"
            style={{ textAlign: "center", paddingTop: "2px", margin: "0px" }}
          >
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              //style={{ marginLeft: "10px" }}
            ></input>
            <button
              className="btn btn-primary btn-sm"
              type="submit"
              style={{ marginTop: "10px" }}
            >
              Search
            </button>
          </form>
        </div>
        <hr></hr>
        <div className="row" style={{ padding: "0px 0px", margin: "0px" }}>
          <h5>Filter By Types :</h5>
        </div>
        <div className="row" style={{ margin: "0px 0px", padding: "0px 0px" }}>
          {this.props.filterByTypes.map(f => (
            <FilterByTypes
              filterdata={f}
              filterfunction={this.props.filter2}
              remove={this.props.remove2}
              checked={this.props.check}
            />
          ))}
        </div>
        <hr></hr>
        <div className="row" style={{ padding: "0px 0px", margin: "0px" }}>
          <h5>Filter By Brands :</h5>
        </div>
        <div className="row" style={{ margin: "0px 0px", padding: "0px 0px" }}>
          {this.props.filterByBrands.map(f => (
            <FilterByBrands
              filterdata={f}
              filterfunction={this.props.filter}
              remove={this.props.remove}
              checked={this.props.check}
            />
          ))}
        </div>
        <hr></hr>
        <div className="row" style={{ padding: "0px 0px", margin: "0px" }}>
          <h5 style={{ textAlign: "left " }}>Filter By Operating System :</h5>
        </div>
        <div className="row" style={{ margin: "0px 0px", padding: "0px 0px" }}>
          {this.props.filterByOS.map(f => (
            <FilterByOS
              filterdata={f}
              filterfunction={this.props.filter3}
              remove={this.props.remove3}
              checked={this.props.check}
            />
          ))}
        </div>
        <hr></hr>
      </div>
    );
  }
}

export default SideBar;
