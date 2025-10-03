import { useEffect, useState } from 'react';
import { Spinner, Alert, Form } from 'react-bootstrap';
import MovieThumb from './MovieThumb.jsx';

const API_KEY = '96893dbc';
const ENDPOINT = 'https://www.omdbapi.com/';

function dedupeMovies(arr = []) {
  const seen = new Set();
  const out = [];
  for (const m of arr) {
    const key = (m.imdbID || `${m.Title}|${m.Year}`).toLowerCase();
    if (!seen.has(key)) {
      seen.add(key);
      out.push(m);
    }
  }
  return out;
}

export default function OmdbGallery({ title, query }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState('');
  const [hideDuplicates, setHideDuplicates] = useState(true);

  useEffect(() => {
    let abort = false;

    async function load() {
      if (!query) return;
      setLoading(true);
      setErr('');
      try {
        const res = await fetch(
          `${ENDPOINT}?apikey=${API_KEY}&type=movie&s=${encodeURIComponent(query)}`
        );
        const data = await res.json();
        if (abort) return;

        if (data.Response === 'True') {
          setItems(data.Search || []);
        } else {
          setErr(data.Error || 'Nessun risultato');
        }
      } catch (e) {
        if (!abort) setErr(e.message || 'Errore di rete');
      } finally {
        if (!abort) setLoading(false);
      }
    }

    load();
    return () => { abort = true; };
  }, [query]);

  const list = hideDuplicates ? dedupeMovies(items) : items;

  return (
    <section className="rows-wrapper bg-black text-white">
      <div className="container-fluid px-3 px-md-4">

        <div className="d-flex align-items-center justify-content-between">
          <h6 className="row-title m-0">{title}</h6>
          <Form.Check
            type="switch"
            id={`dupes-switch-${title}`}
            className="text-white-50"
            label="Hide Duplicates"
            checked={hideDuplicates}
            onChange={(e) => setHideDuplicates(e.target.checked)}
          />
        </div>

        {loading && (
          <div className="text-white-50 small mb-2">
            <Spinner animation="border" size="sm" /> Caricamento…
          </div>
        )}

        {err && <Alert variant="warning" className="py-2">{err}</Alert>}

        {!loading && !err && (
          <div className="carousel-row d-flex flex-nowrap overflow-auto pb-3">
            {list.map(movie => (
              <MovieThumb key={movie.imdbID || `${movie.Title}-${movie.Year}`} movie={movie} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
