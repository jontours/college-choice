import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const schools = [
	  {
	    name: 'CalTech'
	  },
	  {
	    name: 'UCSD'
	  }
];

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : schools.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class CalculateChoice extends Component{
	

	state = {
      value: '',
      suggestions: []
    };

    onChange = (event, { newValue }) => {
      this.setState({
        value: newValue
      });
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: getSuggestions(value)
      });
    };

    // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

	render() {
		const { value, suggestions } = this.state;

	    const inputProps = {
	      placeholder: 'Search for a school',
	      value,
	      onChange: this.onChange
	    };
	    return (
	      <div>
	      	<Autosuggest
	        	suggestions={suggestions}
	            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
	            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
	            getSuggestionValue={getSuggestionValue}
	            renderSuggestion={renderSuggestion}
	            inputProps={inputProps}
	        />
	        <label for="salary">Net Income</label>
	        <input id="salary" name="salary" type="text"/>

	        <label for="school-price">Net School Price</label>
	        <input id="school-price" name="school-price" type="text"/>

	        <label for="living-cost">Cost of Living</label>
	        <input id="living-cost" name="living-cost" type="text"/>

	        <label for="residency-boolean">Will Live on Campus?</label>
	        <fieldset class="usa-fieldset-inputs usa-sans">

	          <legend class="usa-sr-only">Historical figures 2</legend>

	          <ul class="usa-unstyled-list">
	            <li>
	              <input id="on-campus" type="radio" checked name="on-campus" value="true"/>
	              <label for="stanton">Elizabeth Cady Stanton</label>
	            </li>
	            <li>
	              <input id="anthony" type="radio" name="historical-figures-2" value="anthony"/>
	              <label for="anthony">Susan B. Anthony</label>
	            </li>
	            <li>
	              <input id="tubman" type="radio" name="historical-figures-2" value="tubman"/>
	              <label for="tubman">Harriet Tubman</label>
	            </li>
	          </ul>

	        </fieldset>
	      </div>
	    );
	}
}


export default CalculateChoice