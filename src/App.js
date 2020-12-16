import React from "react";
import axios from "axios";

import SearchBar from "./components/SearchBar";
import ImageCard from "./components/ImageCard";

class App extends React.Component {
  state = {
    error: false,
    name: "",
    base_experience: 0,
    abilities: [],
    image_url: "",
  };

  onSearchBarInput = async (input) => {
    this.Input = input;
    try {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.Input}`);
      const { name, base_experience, abilities, sprites } = res.data;
      this.setState({
        name,
        base_experience,
        abilities,
        image_url: sprites.front_default,
        error: false,
      });
    } catch (err) {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <div className='ui container' style={{ marginTop: "10px" }}>
        <SearchBar onInput={this.onSearchBarInput} />
        <ImageCard pokemon_data={this.state} input={this.Input} />
      </div>
    );
  }
}

export default App;
