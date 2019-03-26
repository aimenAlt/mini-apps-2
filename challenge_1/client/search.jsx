import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.searchClick = this.searchClick.bind(this);
  }

  handleChange(event) {
    this.setState({search: event.target.value});
  }

  searchClick(event) {
    this.props.search(this.state.search);
  }

  render() {
    return (
      <div>
       <form>
        <label>
          Search History:
          <input type="text" id="search" value={this.state.value} onChange={this.handleChange}/>
        </label>
        </form>
        <button onClick={this.searchClick}>Search</button>
      </div>
    );
  }
}

export default Search;