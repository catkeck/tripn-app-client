import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

class Example extends React.Component {
  state = {
    from: null,
    to: null,
    searchTerm: null
  };
  handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  };

  handleResetClick = e => {
    e.preventDefault();
    this.setState({
      from: null,
      to: null,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.history.push(`/search/${this.props.state.searchTerm.replace(',','')}/${this.props.state.from}/${this.props.state.to}`)
  }


  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  render() {
    console.log(this.state.from)
    console.log(this.state.to)
    const { from, to } = this.state;
    return (
      <div className="RangeExample">
        {!from && !to && <p>Please select the <strong>first day</strong>.</p>}
        {from && !to && <p>Please select the <strong>last day</strong>.</p>}
        {from &&
          to &&
          <p>
            .
            {' '}<a href="." onClick={this.handleResetClick}>Reset</a>
          </p>}
        <DayPicker
          numberOfMonths={1}
          selectedDays={[from, { from, to }]}
          onDayClick={this.handleDayClick}
          fixedWeeks={2}
        />
        <form onSubmit={this.handleSubmit}>
          <h3> Enter Location </h3>
          <input type="text" value={this.props.searchTerm} onChange={this.handleChange} style={{ margin: '0 auto'}}/>
          <input type="submit"/>
        </form>
      </div>

    );
  }
}
export default Example