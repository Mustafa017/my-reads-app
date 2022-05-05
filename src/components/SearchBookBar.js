import { React, Component } from "react";
import serializeForm from "form-serialize";

class SearchBookBar extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const val = serializeForm(e.target, { hash: true });
    // console.log(val);

    if (this.props.searchbook) {
      this.props.searchbook(val);
    }
  };
  render() {
    const { searchpage } = this.props;
    return (
      <div className="search-books-bar">
        <button className="close-search" onClick={() => searchpage()}>
          Close
        </button>
        <div className="search-books-input-wrapper">
          {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
          */}
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="query"
              placeholder="Search by title or author"
            />
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBookBar;
