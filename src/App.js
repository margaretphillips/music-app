import React, { useState } from 'react';
import axios from 'axios'

//components
import ResultsComponent from './components/results'

function App() {
  const [results, setResults] = useState([])
  const [sortType, setSortType] = useState('asc')
  const [searchType, setSearchType] = useState('')
  const [artistsList, setArtistsList] = useState([])
  const [albumsList, setAlbumsList] = useState([])
  const [tracksList, setTracksList] = useState([])

  if (artistsList.length === 0) {
    getArtistsList()
  }
  if (artistsList.length === 0) {
    getAlbumsList()
  }
  if (tracksList.length === 0) {
    getTracksList()
  }

  function getArtistsList() {
    axios.get('http://localhost:3001/artists')
      .then(response => {
        setArtistsList(response.data)
      });
  }

  function getAlbumsList() {
    axios.get('http://localhost:3001/albums')
      .then(response => {
        setAlbumsList(response.data)
      });
  }
  function getTracksList() {
    axios.get('http://localhost:3001/tracks')
      .then(response => {
        setTracksList(response.data)
      });
  }

  function getItemsFilter(type, item) {
    let r = []

    if (type === 'artist') {
      r = artistsList.artists.filter((m) => m.name.toLowerCase().includes(item.toLowerCase())).map((m) => <ResultsComponent key={m.id} id={m.id} name={m.name} image={m.images.map((m) => m.url)} popularity={m.popularity} />)
    } else if (type === 'album') {
      r = albumsList.albums.filter((m) => m.name.toLowerCase().includes(item.toLowerCase())).map((m) => <ResultsComponent key={m.id} id={m.id} name={m.name} image={m.images.map((m) => m.url)} popularity={m.popularity} />)
    } else if (type === 'tracks') {
      r = tracksList.tracks.filter((m) => m.name.toLowerCase().includes(item.toLowerCase())).map((m) => <ResultsComponent key={m.id} id={m.id} name={m.name} image={m.album.images.map((m) => m.url)} popularity={m.popularity} />)
    }

    if (sortType === 'asc') {
      r.sort((a, b) => a.popularity > b.popularity ? 1 : -1)
    } else {
      r.sort((a, b) => a.popularity > b.popularity ? -1 : 1)
    }
    setResults(r)
  }

  function setSearchParams(type, item) {
    clearFields(type)
    getItemsFilter(type, item)
    setSearchType(type)
  }

  function clearFields(type) {
    switch (type) {
      case 'artist':
        document.getElementById('album').value = ''
        document.getElementById('tracks').value = ''
        break;
      case 'album':
        document.getElementById('artist').value = ''
        document.getElementById('tracks').value = ''
        break;
      case 'tracks':
        document.getElementById('artist').value = ''
        document.getElementById('album').value = ''
        break;
      default:
        break;
    }
  }

  function swapSortType() {
    sortType === 'asc' ? setSortType('desc') : setSortType('asc')
    if (searchType === 'artist') {
      setSearchParams('artist', document.getElementById('artist').value)
    } else if (searchType === 'album') {
      setSearchParams('album', document.getElementById('album').value)
    } else if (searchType === 'tracks') {
      setSearchParams('tracks', document.getElementById('tracks').value)
    }

  }

  return (
    <div className="wrapper">
      <header>Music Search</header>
      <main>
        <div className="search">
          <input id="artist" placeholder="artist" onChange={() => setSearchParams('artist', document.getElementById('artist').value)} />
          <input id="album" placeholder="album" onChange={() => setSearchParams('album', document.getElementById('album').value)} />
          <input id="tracks" placeholder="tracks" onChange={() => setSearchParams('tracks', document.getElementById('tracks').value)} />
        </div>
        <div className="results">
          <div className="results-header">
            <button onClick={() => swapSortType()}>Sort By Popularity {sortType.toUpperCase()}</button>
          </div>
          <div className="results-show">
            {results}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
