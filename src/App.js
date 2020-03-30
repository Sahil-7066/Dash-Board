import React, { Component } from "react";
//import logo from './logo.svg';
import NavBar from "./Task1/NavBar";
import SideBar from "./Task1/SideBar";
import Content from "./Task1/Content";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Cart from "./Task1/cart";

class App extends Component {
  state = {
    counters2: [
      {
        id: 1,
        img:
          "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg",
        logo: "Samsung",
        price: 25000,
        type: "Popular",
        OS: "Android"
      },
      {
        id: 2,
        img:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551208882-samsung-galaxy-s10e-smartphone-1550695757.jpg",
        logo: "Oppo",
        price: 15000,
        type: "New",
        OS: "Windows"
      },
      {
        id: 3,
        img:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/01D861FE-6FA4-D624-4AC0-F335CC94C025.jpg",
        logo: "Vivo",
        price: 7000,
        type: "Trending",
        OS: "IOS"
      },
      {
        id: 4,
        img:
          "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg",
        logo: "Samsung",
        price: 25000,
        type: "Popular",
        OS: "Android"
      },
      {
        id: 5,
        img:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551208882-samsung-galaxy-s10e-smartphone-1550695757.jpg",
        logo: "Oppo",
        price: 15000,
        type: "New",
        OS: "Windows"
      },
      {
        id: 6,
        img:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/01D861FE-6FA4-D624-4AC0-F335CC94C025.jpg",
        logo: "Vivo",
        price: 7000,
        type: "Trending",
        OS: "IOS"
      },
      {
        id: 7,
        img:
          "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg",
        logo: "Samsung",
        price: 25000,
        type: "Popular",
        OS: "Android"
      },
      {
        id: 8,
        img:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551208882-samsung-galaxy-s10e-smartphone-1550695757.jpg",
        logo: "Oppo",
        price: 15000,
        type: "New",
        OS: "Windows"
      },
      {
        id: 9,
        img:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/01D861FE-6FA4-D624-4AC0-F335CC94C025.jpg",
        logo: "Vivo",
        price: 7000,
        type: "Trending",
        OS: "IOS"
      }
    ],
    counters: [
      {
        id: 1,
        img:
          "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg",
        logo: "Samsung",
        price: 25000,
        type: "Popular",
        OS: "Android"
      },
      {
        id: 2,
        img:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551208882-samsung-galaxy-s10e-smartphone-1550695757.jpg",
        logo: "Oppo",
        price: 15000,
        type: "New",
        OS: "Windows"
      },
      {
        id: 3,
        img:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/01D861FE-6FA4-D624-4AC0-F335CC94C025.jpg",
        logo: "Vivo",
        price: 7000,
        type: "Trending",
        OS: "IOS"
      },
      {
        id: 4,
        img:
          "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg",
        logo: "Samsung",
        price: 25000,
        type: "Popular",
        OS: "Android"
      },
      {
        id: 5,
        img:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551208882-samsung-galaxy-s10e-smartphone-1550695757.jpg",
        logo: "Oppo",
        price: 15000,
        type: "New",
        OS: "Windows"
      },
      {
        id: 6,
        img:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/01D861FE-6FA4-D624-4AC0-F335CC94C025.jpg",
        logo: "Vivo",
        price: 7000,
        type: "Trending",
        OS: "IOS"
      },
      {
        id: 7,
        img:
          "https://i.gadgets360cdn.com/products/large/1551023854_635_nokia_9_pureview.jpg",
        logo: "Samsung",
        price: 25000,
        type: "Popular",
        OS: "Android"
      },
      {
        id: 8,
        img:
          "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1551208882-samsung-galaxy-s10e-smartphone-1550695757.jpg",
        logo: "Oppo",
        price: 15000,
        type: "New",
        OS: "Windows"
      },
      {
        id: 9,
        img:
          "https://i01.appmifile.com/webfile/globalimg/in/cms/01D861FE-6FA4-D624-4AC0-F335CC94C025.jpg",
        logo: "Vivo",
        price: 7000,
        type: "Trending",
        OS: "IOS"
      }
    ],
    cart: [],

    ct1: [],
    filter: [
      { id: 1, value: "Samsung", check: false },
      { id: 2, value: "Oppo", check: false },
      { id: 3, value: "Vivo", check: false }
    ],
    filter2: [
      { id: 1, value: "Popular", check: false },
      { id: 2, value: "New", check: false },
      { id: 3, value: "Trending", check: false }
    ],
    filter3: [
      { id: 1, value: "Android", check: false },
      { id: 2, value: "Windows", check: false },
      { id: 3, value: "IOS", check: false }
    ]
  };
  // getinitialstate = () => {
  //   if (this.state.check === false) {
  //     this.setState({ check: true });
  //     if (this.state.check === true) {
  //       this.props.filterfunction(this.props.filterdata.value);
  //     }
  //   }
  // };

  // default = () => {
  //   this.setState({ check: false });
  //   if (this.state.check === false) {
  //   }
  // };

  // check = brand => {
  //   let check;
  //   if (this.state.check === false) {
  //     this.state.check = true;
  //     console.log("check", this.state.check);
  //     check = this.uncheck();
  //     console.log("check", check);
  //     this.filterbybrands(brand);
  //     console.log("counters", this.state.counters);
  //   } else {
  //     this.state.check = false;

  //     console.log("counters", check);
  //     this.setState({ counters: check });
  //   }
  // };

  // uncheck = () => {
  //   const check = this.state.counters;
  //   console.log("uncheck", check);
  //   return check;
  // };

  handleAdd = counterID => {
    //console.log("Handle-Delete Called", counterID);

    let ct = this.state.counters.filter(c => c.id === counterID);
    console.log("ct", ct);
    var ct2 = this.state.ct1;
    ct2.push(ct[0]);
    console.log("ct1", this.state.ct1);

    // let ct1 = [];
    // ct1.push(ct);
    this.setState({ cart: this.state.ct1 });
    console.log("counters", this.state.counter2);
  };
  remove = id => {
    const ct = this.state.counters2;
    this.setState({ counters: ct });
    const cf = [...this.state.filter];
    const index = cf.indexOf(id);
    cf[index] = { ...id };
    cf[index].check = false;
    this.setState({ filter: cf });
    //this.setState({ check: false });
  };

  remove2 = id => {
    const ct = this.state.counters2;
    this.setState({ counters: ct });
    const cf = [...this.state.filter2];
    const index = cf.indexOf(id);
    cf[index] = { ...id };
    cf[index].check = false;
    this.setState({ filter2: cf });
    //this.setState({ check: false });
  };

  remove3 = id => {
    const ct = this.state.counters2;
    this.setState({ counters: ct });
    const cf = [...this.state.filter3];
    const index = cf.indexOf(id);
    cf[index] = { ...id };
    cf[index].check = false;
    this.setState({ filter3: cf });
    //this.setState({ check: false });
  };

  filterbybrands = (brands, id) => {
    console.log("brands", brands);
    const cf = [...this.state.filter];
    const index = cf.indexOf(id);
    cf[index] = { ...id };
    cf[index].check = true;
    this.setState({ filter: cf });

    if (brands === "Samsung") {
      const f = this.state.counters.filter(f => f.logo === "Samsung");
      console.log("f", f);
      this.setState({ counters: f });
    } else if (brands === "Oppo") {
      const f = this.state.counters.filter(f => f.logo === "Oppo");
      console.log("f", f);
      this.setState({ counters: f });
    } else {
      const f = this.state.counters.filter(f => f.logo === "Vivo");
      console.log("f", f);
      this.setState({ counters: f });
    }
  };

  filterbytypes = (brands, id) => {
    console.log("brands", brands);
    const cf = [...this.state.filter2];
    const index = cf.indexOf(id);
    cf[index] = { ...id };
    cf[index].check = true;
    this.setState({ filter2: cf });

    if (brands === "Popular") {
      const f = this.state.counters.filter(f => f.type === "Popular");
      console.log("f", f);
      this.setState({ counters: f });
    } else if (brands === "New") {
      const f = this.state.counters.filter(f => f.type === "New");
      console.log("f", f);
      this.setState({ counters: f });
    } else {
      const f = this.state.counters.filter(f => f.type === "Trending");
      console.log("f", f);
      this.setState({ counters: f });
    }
  };

  filterbyos = (os, id) => {
    console.log("os", os);
    const cf = [...this.state.filter3];
    const index = cf.indexOf(id);
    cf[index] = { ...id };
    cf[index].check = true;
    this.setState({ filter3: cf });

    if (os === "Android") {
      const f = this.state.counters.filter(f => f.OS === "Android");
      console.log("f", f);
      this.setState({ counters: f });
    } else if (os === "Windows") {
      const f = this.state.counters.filter(f => f.OS === "Windows");
      console.log("f", f);
      this.setState({ counters: f });
    } else {
      const f = this.state.counters.filter(f => f.OS === "IOS");
      console.log("f", f);
      this.setState({ counters: f });
    }
  };

  removecart = id => {
    if (id.id === 0) {
    } else {
      if (this.state.cart.length === 1) {
        const index = this.state.ct1.indexOf(id);
        this.state.ct1.splice(index, 1);
        const ct = this.state.Ocart;
        this.setState({ cart: ct });
      }
      const index = this.state.ct1.indexOf(id);
      this.state.ct1.splice(index, 1);
      const ct = this.state.ct1;
      this.setState({ cart: ct });
    }
  };

  // AddCart = id => {
  //   let ct = this.state.col;
  //   console.log("ct", ct);
  //   const ct1 = ct.filter(c => ct.img !== id);
  //   console.log("ct1", ct1);
  //   this.setState({ cart: ct1 });
  // };

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <div style={{ width: "100%", height: "15%", position: "fixed" }}>
          <NavBar />
        </div>
        <div
          className="row"
          style={{
            margin: "0px",
            width: "100%",
            height: "91%",
            position: "absolute",
            top: "9%",
            padding: "0px 0px"
          }}
        >
          <div
            style={{
              overflowY: "auto",
              height: "100%",
              padding: "0px 0px",
              margin: "0px",
              width: "20%",
              display: "inline"
            }}
          >
            <SideBar
              data={this.state.counters}
              filterByBrands={this.state.filter}
              filter={this.filterbybrands}
              filter2={this.filterbytypes}
              filter3={this.filterbyos}
              remove={this.remove}
              remove2={this.remove2}
              remove3={this.remove3}
              check={this.state.checked}
              filterByTypes={this.state.filter2}
              filterByOS={this.state.filter3}
            />
          </div>
          <div
            style={{
              overflowY: "auto",
              height: "100%",
              padding: "0px 0px",
              //overflowX: "hidden",
              margin: "0px 0px",
              display: "inline",
              width: "60%",
              borderLeft: "solid 2px"
            }}
          >
            <Content data={this.state.counters} addcart={this.handleAdd} />
          </div>
          <div
            style={{
              overflowY: "auto",
              height: "100%",
              padding: "5px",
              margin: "0px",
              width: "20%",
              display: "inline",
              borderLeft: "solid 2px"
            }}
          >
            <div
              className="row"
              style={{ margin: "0px 0px", padding: "0px 25%" }}
            >
              <h5>Cart Details :</h5>
            </div>
            <div
              className="row"
              style={{ margin: "0px 0px", padding: "0px 25%" }}
            >
              <h6>No of items :{this.state.ct1.length}</h6>
            </div>
            <div style={{ margin: "0px 0px", padding: "0px 0px" }}>
              <hr style={{ margin: "0px 0px", padiing: "0px 0px" }}></hr>
            </div>
            <div
              className="row"
              style={{ margin: "0px 0px", padding: "5px 10px" }}
            >
              {this.state.cart.map(cl => (
                <Cart data1={cl} remove={this.removecart} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
