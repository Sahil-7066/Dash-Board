import React, { Component } from "react";

class Content2 extends Component {
  // function1 = () => {
  //   this.props.addtocart(this.props.data1.id);
  // };
  render() {
    return (
      <div
        style={{
          padding: "20px",
          margin: "5px 5px ",
          border: "solid 1px",
          width: "32%",
          display: "inline-block"
          //borderBottom: "solid 1px"
        }}
      >
        <div className="row">
          <img
            src={this.props.data1.img}
            alt="image"
            height="220px"
            width="100%"
          ></img>
        </div>
        <div className="row" style={{ margin: "4px 10% 0px 10%" }}>
          <h5>{this.props.data1.logo}</h5>
        </div>
        <div className="row" style={{ margin: "2px 10% 0px 10%" }}>
          <label>Price : {this.props.data1.price}</label>
        </div>
        <div className="row" style={{ margin: "2px 10% 0px 10%" }}>
          <button
            className="btn btn-primary btn-sm"
            type="submit"
            style={{ marginTop: "5px" }}
            onClick={() => this.props.addtocart(this.props.data1.id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  }
}

export default Content2;
