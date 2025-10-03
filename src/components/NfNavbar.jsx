export default function NfNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-1" style={{ background: '#141414' }}>
      <div className="container-fluid px-2 px-md-3">
        <a className="navbar-brand me-3" href="#">
          <img src="/assets/media/netflix_logo.png" alt="Netflix" height="37" className="align-middle" />
        </a>

        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav"
          aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>

        <div id="mainNav" className="collapse navbar-collapse">
          {/* Left: primary nav */}
          <ul className="navbar-nav me-auto small">
            <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link active" href="#">TV Shows</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Movies</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Recently Added</a></li>
            <li className="nav-item"><a className="nav-link" href="#">My List</a></li>
          </ul>

          {/* Right: tools */}
          <ul className="navbar-nav ms-auto align-items-center gap-2 small">
            <li className="nav-item d-none d-md-block">
              <a className="nav-link" href="#"><i className="bi bi-search" /></a>
            </li>
            <li className="nav-item d-none d-md-block">
              <a className="nav-link text-uppercase" href="#">Kids</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-bell" /></a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle p-0" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="/assets/media/avatar.png" alt="Profile" width="24" height="24" className="rounded" />
              </a>
              <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                <li><a className="dropdown-item" href="#">Account</a></li>
                <li><a className="dropdown-item" href="#">Help Center</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Sign out</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
