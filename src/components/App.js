import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SeachBar';
import ImageList from './ImageList';
import Loader from './Loader';

class App extends React.Component {
  state = {
    images: [],
    loading: false,
  };

  onSearchSubmit = async (term) => {
    // try catch just to make sure we had no errors
    this.setState({loading: true});
    try {
      const response = await unsplash.get("/search/photos", {
        params: { query: term },
      });
      this.setState({ 
        images: response.data.results, 
        loading: false
      });
    } catch (e) {
      console.error(e);
    }
  };
  render() {
    const { images, loading } = this.state;
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar handleSubmit={this.onSearchSubmit} />
        {loading ? <Loader styles="visible" /> : <Loader styles="hidden" /> }
        <ImageList images={images} />
      </div>
    );
  }
}

export default App;