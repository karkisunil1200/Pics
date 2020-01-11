import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import Imagelist from './Imagelist';

class App extends React.Component {
  state = {
    images: []
  };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: {query: term}
    });
    this.setState({images: response.data.results});
    console.log(response.data.results);
  };
  render() {
    console.log(`I am state: `, this.state.images);
    return (
      <div className='ui container' style={{marginTop: '30px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}
export default App;
