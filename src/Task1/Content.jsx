import React, { Component } from "react";
import Mobile1 from "./Mobile1.jfif";
import Cart from "./cart";
import Content2 from "./Content2";
import "./Style.css";

/* <div className="col-3" style={{}>
          <Cart image={this.props.Image} brand={this.props.Brand} />
        </div>
      </div> */
class Content extends Component {
  render() {
    return (
      <div style={{ padding: "0px 0px", margin: "0px 0px", width: "auto" }}>
        <div style={{ padding: "5px 35%", margin: "0px 0px", width: "100%" }}>
          <h4 style={{ margin: "0px 0px" }}>Results Found :</h4>
        </div>
        <div style={{ margin: "0px 0px", padding: "0px 0px" }}>
          <hr style={{ margin: "5px 0px" }}></hr>
        </div>
        <div style={{ padding: "0px 0px", margin: "0px 0px", width: "100%" }}>
          {this.props.data.map(cl => (
            <Content2 data1={cl} addtocart={this.props.addcart} />
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
