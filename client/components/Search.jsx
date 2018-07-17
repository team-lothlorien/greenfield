import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCurrentlySelected: '',
      term: '',
      location: '',
      dropDown: 'Keyword'
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onTermChange = this.onTermChange.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
  }

  onFilterChange(event) {
    event.preventDefault();
    this.setState({ filterCurrentlySelected: event.target.value });
  }

  onTermChange(event) {
    event.preventDefault();
    this.setState({term: event.target.value});
  }

  onLocationChange(event) {
    event.preventDefault();
    this.setState({location: event.target.value});
  }

  clearInputFields(event) {
    event.preventDefault();
    this.setState({
      location: '',
      term: '',
      filterCurrentlySelected: ''
    });
  }

  render() {
    //temp data until we have an object from
    let filterOptions = ['Keyword', 'Symptoms', 'Location', 'Doctors', 'Specialties', 'Language'];
    let filterList = filterOptions.map(item => {
      return (
        <option value={item} key={item}>{item}</option>
      );
    });
    return (
      <form 
        onSubmit={event => {
          this.props.handleSearch(event, this.state.filterCurrentlySelected, this.state.term, this.state.location);
          (event) => this.clearInputFields(event);
        }
        }
      >
        <label>
          Filter:
          <select onChange={this.onFilterChange}>
            {filterList}
          </select>
        </label>
        <input type="text" value={this.state.term} onChange={this.onTermChange}/>

        <label>Location:</label>
        <input type="text" value={this.state.location} onChange={this.onLocationChange}/>
        <input type="submit" value="search" />
      </form>
    );
  }
}


export default Search;
