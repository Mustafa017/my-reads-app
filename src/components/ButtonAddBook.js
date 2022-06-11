import { React, Component } from "react";
import { Link } from "react-router-dom";

class ButtonAddBook extends Component {
  render() {
    const { searchpage } = this.props;
    return (
      <div className="open-search">
        <Link to="/search">
          <button onClick={() => searchpage()}>Add a book</button>
        </Link>
      </div>
    );
  }
}

export default ButtonAddBook;
