import React, { Component } from 'react';

class CalculateChoice extends Component{
	render() {
	    return (
	      <div>
	        <label for="salary">Net Income</label>
	        <input id="salary" name="salary" type="text"/>

	        <label for="school-price">Net School Price</label>
	        <input id="school-price" name="school-price" type="text"/>

	        <label for="living-cost">Cost of Living</label>
	        <input id="living-cost" name="living-cost" type="text"/>

	        <label for="residency-boolean">Will Live on Campus?</label>
	        <textarea id="residency-boolean" name="input-type-textarea"></textarea>
	      </div>
	    );
	}
}


export default CalculateChoice