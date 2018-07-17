import React from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';

//Languages
const languages = [ { name: 'Mandarin Chinese' },
  { name: 'Spanish' },
  { name: 'English' },
  { name: 'Hindi/Urdu' },
  { name: 'Arabic' },
  { name: 'Bengali' },
  { name: 'Portuguese' },
  { name: 'Russian' },
  { name: 'Japanese' },
  { name: 'German' },
  { name: 'Javanese' },
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
  { name: 'Cantonese/Yue' } ];

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterCurrentlySelected: 'Keyword',
      term: '',
      location: '',
      conditions: [],
      value: '',
      suggestions: []
    };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.onTermChange = this.onTermChange.bind(this);

    this.onLocationChange = this.onLocationChange.bind(this);
    //AUTOSUGGEST
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
    console.log('component did mount FIRED');
    this.getConditions();
  }



  getConditions() {
  
    //AUTOCOMPLETE WAITING FOR SERVER ENDPOINTS TEMP SOLUTION
    if (this.state.filterCurrentlySelected === 'Keyword') {
      axios.get('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=f695212b8cce3cacd996361881ce040b')
      .then((condition) => {
        this.setState({conditions: condition.data.data})
        .catch(err => console.log(err));
      });
    } else if (this.state.filterCurrentlySelected === 'Symptoms') {
      axios.get('https://api.betterdoctor.com/2016-03-01/conditions?user_key=f695212b8cce3cacd996361881ce040b')
      .then((condition) => {
        this.setState({conditions: condition.data.data})
        .catch(err => console.log(err));
      });
    } else if (this.state.filterCurrentlySelected === 'Specialties') {
      console.log('axios called');
      axios.get('https://api.betterdoctor.com/2016-03-01/specialties?user_key=f695212b8cce3cacd996361881ce040b')
      .then((condition) => {
        console.log(condition.data.data);
        this.setState({conditions: condition.data.data})
        .catch(err => console.log(err));
      });
    } else if (this.state.filterCurrentlySelected === 'Language') {
      this.setState({
        conditions: languages
      });
    } else if (this.state.filterCurrentlySelected === 'Insurance') {
      axios.get('https://api.betterdoctor.com/2016-03-01/insurances?user_key=f695212b8cce3cacd996361881ce040b')
      .then((condition) => {
        this.setState({conditions: condition.data.data})
        .catch(err => console.log(err));
      });
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
    return this.state.conditions.filter(condition => regex.test(condition.name));
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
    this.setState({ filterCurrentlySelected: event.target.value }, () => this.getConditions());
    event.preventDefault();
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
      filterCurrentlySelected: '',
    });
  }

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Soft Skull Portion',
      value,
      onChange: this.onSuggestChange
    };

    //temp data until we have an object from
    let filterOptions = ['Keyword', 'Symptoms', 'Specialties', 'Language', 'Insurance'];
    let filterList = filterOptions.map(item => {
      return (
        <option value={item} key={item}>{item}</option>
      );
    });
    return (
      <form
        onSubmit={event => {
          this.props.handleSearch(event, this.state.filterCurrentlySelected, this.state.location);
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

        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps} />
        <label>Location:</label>
        <input type="text" value={this.state.location} onChange={this.onLocationChange}/>
        <input type="submit" value="search" />
      </form>
    );
  }
}


export default Search;
