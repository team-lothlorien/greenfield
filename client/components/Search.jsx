import React from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCurrentlySelected: 'Symptoms',
      // term: '',
      location: '',
      Data: [],
      value: '',
      suggestions: []
    };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.clearInputFields = this.clearInputFields.bind(this);
    this.onLocationChange = this.onLocationChange.bind(this);
    this.onSuggestChange = this.onSuggestChange.bind(this);
    this.getConditions = this.getConditions.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.escapeRegexCharacters = this.escapeRegexCharacters.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  componentDidMount() {
    this.getConditions(this.state.filterCurrentlySelected);
  }

  getConditions(val) {
    if (val === 'Language') {

      this.setState({
        Data: languages
      });
    } else {
      axios.get(filterObj[val])
      .then((results) => {

        let data = results.data.map((ele) => {
          return {name: ele};
        });
        this.setState({
          Data: data
        });
      })
      .catch(err => console.log(err));
    }
  }

  //***********AUTOSUGGEST**********************//

  escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
  getSuggestions(value) {
    const escapedValue = this.escapeRegexCharacters(value.trim());
    if (escapedValue === '') {
      return [];
    }
    const regex = new RegExp('^' + escapedValue, 'i');
    return this.state.Data.filter(ele => regex.test(ele.name));
  }

  getSuggestionValue(suggestion) {
    return suggestion.name;
  }

  renderSuggestion(suggestion) {
    return (
      <span>{suggestion.name}</span>
    );
  }

  onSuggestChange (event, { newValue, method }) {
    this.setState({
      value: newValue
    });
  }

  onSuggestionsFetchRequested({ value }) {
    this.setState({
      suggestions: this.getSuggestions(value)
    });
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: []
    });
  }

  onFilterChange(event) {
    this.setState({ filterCurrentlySelected: event.target.value }, () => this.getConditions(this.state.filterCurrentlySelected));

    event.preventDefault();
  }

  onLocationChange(event) {
    event.preventDefault();
    this.setState({location: event.target.value});
  }

  clearInputFields() {
    this.setState({
      location: '',
      value: '',
      filterCurrentlySelected: '',
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search by keyword...',
      value,
      onChange: this.onSuggestChange
    };

    let filterOptions = ['Symptoms', 'Specialties', 'Language', 'Insurance'];
    let filterList = filterOptions.map(item => {
      return (
        <option value={item} key={item}>{item}</option>
      );
    });
    return (
      <div className="formSection">
        <label>
          {"Filter:"}
          <select onChange={this.onFilterChange}>
            {filterList}
          </select>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={this.getSuggestionValue}
            renderSuggestion={this.renderSuggestion}
            inputProps={inputProps} />
          </label>

          <label>Location:
            <input type="text" value={this.state.location} onChange={this.onLocationChange}/>
            <button onClick={() => {
              this.props.handleSearch(this.state.value, this.state.location); this.clearInputFields();
              this.props.saveQueries(this.state.value);
            }
          }>search</button>
        </label>
      </div>
    );
  }
}

const languages = [ { name: 'Mandarin Chinese' },
{ name: 'Spanish' },
{ name: 'English' },
{ name: 'Hindi/Urdu' },
{ name: 'Arabic' },
{ name: 'Bengali' },
{ name: 'Portuguese' },
{ name: 'Russian' },
{ name: 'Japanese' },
{ name: 'Punjabi' },
{ name: 'Wu' },
{ name: 'French' },
{ name: 'Telugu' },
{ name: 'Vietnamese' },
{ name: 'Marathi' },
{ name: 'Korean' },
{ name: 'Tamil' },
{ name: 'Italian' },
{ name: 'Turkish' },
{ name: 'Cantonese/Yue' }];


const filterObj = {
  Keyword: '/search',
  Symptoms: '/conditions',
  Specialties: '/specialties',
  Language: languages,
  Insurance: '/insurance'
};

export default Search;
