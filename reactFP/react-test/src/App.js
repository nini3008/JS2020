import React, { Component } from "react";
import ReactPageScroller from "react-page-scroller";
// import PageItem from "react-bootstrap/PageItem";

import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: null };
  }

  handlePageChange = number => {
    this.setState({ currentPage: number }); // set currentPage number, to reset it from the previous selected.
  };

  getPagesNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= 2; i++) {
      pageNumbers.push(
        <div key={i} eventKey={i - 1} onSelect={this.handlePageChange}>
          {i}
        </div>
      );
    }

    return [...pageNumbers];
  };

  render() {
    const pagesNumbers = this.getPagesNumbers();
    return (
      <div className="App">
        <React.Fragment>
          <ReactPageScroller
            pageOnChange={this.handlePageChange}
            customPageNumber={this.state.currentPage}
          >
            <FirstComponent />
            <SecondComponent />
            <div className="pagination-additional-class" bsSize="large">
              {pagesNumbers}
            </div>
          </ReactPageScroller>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
