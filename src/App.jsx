import NfNavbar from './components/NfNavbar.jsx';
import NfFooter from './components/NfFooter.jsx';
import Toolbar from './components/Toolbar.jsx';
import OmdbGallery from './components/OmdbGallery.jsx';
import TVShows from './pages/TVShows.jsx';
import MovieDetails from './pages/MovieDetails.jsx';
import {Routes, Route} from 'react-router';

function Home() {
  return (
    <>
      <Toolbar />
      <OmdbGallery title="Harry Potter" query="Harry Potter" />
      <OmdbGallery title="The Lord of the Rings" query="Lord of the Rings" />
      <OmdbGallery title="Star Wars" query="Star Wars" />
    </>
  );
}

export default function App() {
  return (
    <>
      <NfNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv-shows" element={<TVShows />} />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
      </Routes>
      <NfFooter />
    </>
  );
}
