import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" }; // controlled component
    this.pokemonRef = React.createRef();
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onInput(this.state.input);
  };

  onHandleChange = () => {
    this.setState({ input: this.pokemonRef.current.value.toLowerCase() });
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.onFormSubmit}>
          <div className='field'>
            <label>Pokemon Search</label>
            <input ref={this.pokemonRef} type='text' onChange={this.onHandleChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
