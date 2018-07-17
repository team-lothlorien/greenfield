import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      favorites: [],
      compare: [],
      showFavorites: false,
      location: null
    };
    this.swapFav = this.swapFav.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }


  componentDidMount() {

  }

  handleSearch(filter, term, location) {
    axios.get('/search');
  }




  saveDoctor() {

  }

  deleteDoctor() {

  }

  swapFav() {
    this.setState({ showFaves: !this.state.showFaves });
  }

  render() {
    return (
      <div className="app">
        <header className="navbar"><h1>Navbar</h1></header>
        <h4>search, filter</h4>
        <Search handleSearch={this.handleSearch} />
        <div className="main">
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
