import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      dropDown: 'Keyword'
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onTermChange = this.onTermChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  onFilterChange(event) {
    this.setState({dropDown: event.target.value});
  }
  onTermChange(event) {
    this.setState({term: event.target.value});
  }
  handleSubmit() {
    handleSearch(this.state.dropDown, this.state.term);
    this.setState({term: ''});
  }

  render() {
    //temp data until we have an object from
    let filterOptions = ['Keyword', 'Symptoms', 'Location', 'Doctors', 'Specialties', 'Language'];
    let filterList = filterOptions.map(item => {
      return (
        <option value={item}>{item}</option>
      );
    });
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Filter:
          <select onChange={this.onFilterChange}>
            {filterList}
          </select>
        </label>
        <input type="text" value={this.state.term} onChange={this.onTermChange}/>
        <input type="submit" value="Search" />
      </form>
    );
  }
}


export default Search;
