import { React, Component } from "react";

class ButtonAddBook extends Component {
  render() {
    const { searchpage } = this.props;
    return (
      <div className="open-search">
        <button onClick={() => searchpage()}>Add a book</button>
      </div>
    );
  }
}

export default ButtonAddBook;
