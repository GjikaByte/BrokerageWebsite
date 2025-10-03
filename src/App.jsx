import 'bootstrap/dist/css/bootstrap.min.css';
import './style_h.css';
import NfNavbar from './components/NfNavbar.jsx';
import Toolbar from './components/Toolbar.jsx';
import NfFooter from './components/NfFooter.jsx';
import OmdbGallery from './components/OmdbGallery.jsx';

export default function App() {
  return (
    <>
      <NfNavbar />
      <Toolbar />

      <OmdbGallery title="Harry Potter" query="Harry Potter" />
      <OmdbGallery title="The Lord of the Rings" query="Lord of the Rings" />
      <OmdbGallery title="Star Wars" query="Star Wars" />

      <NfFooter />
    </>
  );
}
