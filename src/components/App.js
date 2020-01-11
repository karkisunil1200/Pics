import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {query: term},
      headers: {
        Authorization: 'Client-ID 8bf8bfe6f4f48d4bbebcc917e57276cec380d06584cff5afaa199e7bc6d24aa0'
      }
    });
    console.log(response.data);
  }
  render() {
    return (
      <div className='ui container' style={{marginTop: '30px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
