import { React, Component } from "react";
import SearchBookBar from "./SearchBookBar";

class SearchBook extends Component {
  render() {
    const { searchpage } = this.props;
    return (
      <div className="search-books">
        <SearchBookBar searchpage={searchpage} />
      </div>
    );
  }
}

export default SearchBook;
