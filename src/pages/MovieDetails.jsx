// src/pages/MovieDetails.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Spinner, Alert, Form, Button, ListGroup } from 'react-bootstrap';

const OMDB_ENDPOINT = 'https://www.omdbapi.com/';
const OMDB_KEY = import.meta.env.VITE_OMDB_KEY || '96893dbc'; // metti la tua key valida

const COMMENTS_BASE = 'https://striveschool-api.herokuapp.com/api/comments/';
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OGRlNzBhYjk2MDFiZjAwMTViNGE3MzciLCJpYXQiOjE3NTk0MDgyOTksImV4cCI6MTc2MDYxNzg5OX0.Uzq4zcSW9kcIFserkiQEItDiM1zQG_YtajvtJpHFcEY';

export default function MovieDetails() {
  const { movieId } = useParams();              // <-- prende :movieId dalla URL

  const [details, setDetails] = useState(null);
  const [dLoading, setDLoading] = useState(false);
  const [dErr, setDErr] = useState('');

  const [comments, setComments] = useState([]);
  const [cLoading, setCLoading] = useState(false);
  const [cErr, setCErr] = useState('');

  // form stato per POST commento
  const [text, setText] = useState('');
  const [rate, setRate] = useState('5');
  const [saving, setSaving] = useState(false);
  const [saveErr, setSaveErr] = useState('');
  const [saveOk, setSaveOk] = useState('');

  // Fetch DETTAGLI (OMDb)
  useEffect(() => {
    if (!movieId) return;
    let abort = false;
    (async () => {
      setDLoading(true); setDErr('');
      try {
        const res = await fetch(`${OMDB_ENDPOINT}?apikey=${OMDB_KEY}&i=${movieId}`);
        const data = await res.json();
        if (abort) return;
        if (data.Response === 'True') setDetails(data);
        else setDErr(data.Error || 'Dettagli non disponibili');
      } catch (e) {
        if (!abort) setDErr(e.message || 'Errore rete (details)');
      } finally {
        if (!abort) setDLoading(false);
      }
    })();
    return () => { abort = true; };
  }, [movieId]);

  // Fetch COMMENTI (StriveSchool)
  const loadComments = async (id) => {
    if (!id) return;
    setCLoading(true); setCErr('');
    try {
      const res = await fetch(`${COMMENTS_BASE}${encodeURIComponent(id)}`, {
        headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error(`GET comments failed: ${res.status}`);
      const data = await res.json();
      setComments(Array.isArray(data) ? data : []);
    } catch (e) {
      setCErr(e.message || 'Errore rete (comments)');
    } finally {
      setCLoading(false);
    }
  };

  useEffect(() => { loadComments(movieId); }, [movieId]);

  // POST nuovo commento
  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!movieId || !text) return;
    setSaving(true); setSaveErr(''); setSaveOk('');
    try {
      const res = await fetch(COMMENTS_BASE, {
        method: 'POST',
        headers: { Authorization: `Bearer ${TOKEN}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: text, rate: String(rate), elementId: movieId }),
      });
      if (!res.ok) throw new Error(`POST failed: ${res.status}`);
      await res.json();
      setText(''); setRate('5'); setSaveOk('Commento aggiunto!');
      loadComments(movieId); // refresh lista
    } catch (e) {
      setSaveErr(e.message || 'Errore salvataggio');
    } finally {
      setSaving(false);
    }
  };

  return (
    <Container className="text-white py-4">
      {/* DETTAGLI */}
      {dLoading && <div className="mb-3"><Spinner animation="border" size="sm" /> Caricamento dettagli…</div>}
      {dErr && <Alert variant="warning">{dErr}</Alert>}

      {details && (
        <Row className="g-4">
          <Col md={4}>
            <img
              src={details.Poster && details.Poster !== 'N/A' ? details.Poster : 'https://via.placeholder.com/320x480?text=No+Poster'}
              alt={details.Title}
              className="img-fluid rounded"
            />
          </Col>
          <Col md={8}>
            <h2 className="h4">{details.Title} <small className="text-white-50">({details.Year})</small></h2>
            <p className="text-white-50 mb-2">{details.Genre} · {details.Runtime}</p>
            <p>{details.Plot}</p>
            <p className="mb-1"><strong>Director:</strong> {details.Director}</p>
            <p className="mb-1"><strong>Actors:</strong> {details.Actors}</p>
            <p className="mb-3"><strong>IMDB:</strong> {details.imdbRating} / 10</p>

            {/* COMMENTI */}
            <h5 className="mt-4">Commenti</h5>
            {cLoading && <div className="mb-2"><Spinner animation="border" size="sm" /> Caricamento commenti…</div>}
            {cErr && <Alert variant="warning">{cErr}</Alert>}
            {!cLoading && !cErr && (
              <>
                {comments.length === 0 ? (
                  <p className="text-white-50">Nessun commento per questo film.</p>
                ) : (
                  <ListGroup className="mb-3">
                    {comments.map((c) => (
                      <ListGroup.Item key={c._id} className="d-flex justify-content-between">
                        <span>{c.comment}</span>
                        <small>⭐ {c.rate}</small>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}

                {/* ADD COMMENT */}
                {saveErr && <Alert variant="danger">{saveErr}</Alert>}
                {saveOk && <Alert variant="success">{saveOk}</Alert>}

                <Form onSubmit={handleAddComment}>
                  <Form.Group className="mb-2">
                    <Form.Label>Lascia un commento</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Voto</Form.Label>
                    <Form.Select value={rate} onChange={(e) => setRate(e.target.value)}>
                      <option value="1">1</option><option value="2">2</option>
                      <option value="3">3</option><option value="4">4</option>
                      <option value="5">5</option>
                    </Form.Select>
                  </Form.Group>
                  <Button type="submit" variant="primary" disabled={saving}>
                    {saving ? <Spinner animation="border" size="sm" /> : 'Invia commento'}
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      )}
    </Container>
  );
}
