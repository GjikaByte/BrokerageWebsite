export default function Toolbar() {
  return (
    <header id="home" className="bg-black py-2 border-bottom border-secondary-25">
      <div className="container-fluid px-3 px-md-4">
        <div className="d-flex align-items-center justify-content-between">
          {/* Left: title + genres */}
          <div className="d-flex align-items-center gap-3">
            <h1 className="h5 mb-0 fw-semibold text-white">TV Shows</h1>

            <div className="dropdown">
              <button className="btn btn-sm btn-outline-light bg-transparent text-white-50 border-secondary-subtle dropdown-toggle"
                type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Genres
              </button>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Comedy</a></li>
                <li><a className="dropdown-item" href="#">Drama</a></li>
              </ul>
            </div>
          </div>

          {/* Right: view toggles */}
          <div className="btn-group" role="group" aria-label="View toggles">
            <button type="button"
              className="btn btn-sm btn-outline-light bg-transparent text-white-50 border-secondary-subtle">
              <i className="bi bi-list" />
            </button>
            <button type="button"
              className="btn btn-sm btn-outline-light bg-transparent text-white-50 border-secondary-subtle">
              <i className="bi bi-grid" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
