import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Paginate from 'react-paginate';
import List from './list.jsx';
import Search from './search.jsx'


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 0,
      items: [],
      pageNum: 1,
      term: ""
    }
    this.search = this.search.bind(this);
    this.pageNum = this.pageNum.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
  }

  componentDidMount() {
  }

  pageNum(itemCount, perPage) {
    let pageCount = 0;
    if (itemCount % perPage > 0) pageCount++;
     pageCount = pageCount + ((itemCount - (itemCount % perPage)) / perPage);
     return pageCount;
  }

  search(term) {
    axios.get(`/events?q=${term}&_page=${1}&_limit=${10}`).then((data) => {
      this.setState({
        pageCount: this.pageNum(parseInt(data.headers["x-total-count"]), 10),
        items: data.data,
        pageNum: 1,
        term: term
      });
    });
  }

  handlePageClick(pageNum) {
    axios.get(`/events?q=${this.state.term}&_page=${pageNum.selected + 1}&_limit=${10}`).then((data) => {
      this.setState({
        items: data.data,
        pageNum: pageNum.selected + 1
      });
    });
  };


  render() {
    return(
      <div>
        <Search search={this.search} />
        <List items={this.state.items}/>
        <Paginate 
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
);