import './App.css';
import SearchHeader from './SearchHeader';
import axios from 'axios';
import { useState } from 'react';
import ImageList from './ImageList';

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID k8ljl7bhBeUyfNP9-UhTO4r3Br5zzXXpE3QJOBdKBbQ',
      },
      params: {
        query: term,
      },
    });

    setImages(response.data.results);
  };
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImageList imagePlaceholders={images} />
    </div>
  );
}

export default App;
