import { React, Component } from "react";
import SearchBookBar from "./SearchBookBar";
import SearchBookResults from "./SearchBookResults";

class SearchBook extends Component {
  render() {
    const { searchpage, onSearchBook, books } = this.props;
    return (
      <div className="search-books">
        <SearchBookBar searchpage={searchpage} searchbook={onSearchBook} />
        <SearchBookResults books={books} />
      </div>
    );
  }
}

export default SearchBook;
