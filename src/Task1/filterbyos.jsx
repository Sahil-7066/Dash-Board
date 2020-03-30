import React, { Component } from "react";

class FilterByOS extends Component {
  // state = {
  //   check: false
  // };

  render() {
    return (
      <div class="form-check" style={{ padding: "5px 10%" }}>
        <div
          style={{
            margin: "0px 0px",
            padding: "0px 0px",
            display: "inline-block",
            width: "50px"
          }}
        >
          <label class="form-check-label">
            <input
              type="checkbox"
              class="form-check-input"
              checked={this.props.filterdata.check}
              value=""
              onClick={() =>
                this.props.filterfunction(
                  this.props.filterdata.value,
                  this.props.filterdata
                )
              }
            ></input>{" "}
            {this.props.filterdata.value}
          </label>
        </div>
        <div
          style={{
            margin: "0px 0px 0px 20px",
            padding: "4px 4px",
            display: "inline-block",
            width: "40px "
          }}
        >
          <button
            className="btn btn-primary btn-sm"
            type="submit"
            style={{ margin: "0px" }}
            onClick={() => this.props.remove(this.props.filterdata)}
          >
            clear
          </button>
        </div>
      </div>
    );
  }
}

export default FilterByOS;
