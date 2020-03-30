import React, { Component } from "react";

class Cart extends Component {
  // fuction1() {
  //   const { img } = this.props.cartstate;
  //   return img === 0 ? "zero" : img;
  // }
  // function2() {
  //   const { logo } = this.props.cartstate;
  //   return logo === 0 ? "No item selected" : logo;
  // }
  render() {
    return (
      <div
        style={{ padding: "20px 10px", margin: "4px 0px", border: "solid 1px" }}
      >
        <div className="row" style={{ padding: "4px 20px" }}>
          <img
            src={this.props.data1.img}
            alt="Not Selected Any Item."
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
            onClick={() => this.props.remove(this.props.data1.id)}
            style={{ marginTop: "5px" }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Cart;
