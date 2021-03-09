import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }
  onFormSubmit = e => {
    e.preventDefault();
    // invoke callback 'onSearchSubmit()' passed via props (from App) 
    // with this.state.term as an argument.
    this.props.handleSubmit(this.state.term);
  }
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input 
              type="text" 
              placeholder="e  nter keyword …"
              onChange={e => this.setState({term: e.target.value})} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;