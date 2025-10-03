export default function NfFooter() {
  return (
    <footer className="bg-black text-white-50 mt-5">
      <div className="container py-5">

        {/* Social icons */}
        <div className="mb-3">
          <a href="#" className="text-white-50 me-3 fs-5"><i className="bi bi-facebook" /></a>
          <a href="#" className="text-white-50 me-3 fs-5"><i className="bi bi-instagram" /></a>
          <a href="#" className="text-white-50 me-3 fs-5"><i className="bi bi-twitter" /></a>
          <a href="#" className="text-white-50 fs-5"><i className="bi bi-youtube" /></a>
        </div>

        {/* Link columns */}
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 g-3 small">
          <div className="col">
            <ul className="list-unstyled m-0">
              <li><a className="link-secondary text-decoration-none" href="#">Audio and Subtitles</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Media Center</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Contact Us</a></li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled m-0">
              <li><a className="link-secondary text-decoration-none" href="#">Audio Description</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Investor Relations</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Legal Notices</a></li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled m-0">
              <li><a className="link-secondary text-decoration-none" href="#">Help Center</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Jobs</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Cookie Preferences</a></li>
            </ul>
          </div>

          <div className="col">
            <ul className="list-unstyled m-0">
              <li><a className="link-secondary text-decoration-none" href="#">Gift Cards</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Terms of Use</a></li>
              <li><a className="link-secondary text-decoration-none" href="#">Corporate Information</a></li>
            </ul>
          </div>
        </div>

        {/* Service code & copy */}
        <button className="btn btn-outline-secondary btn-sm mt-3">Service Code</button>
        <div className="small mt-2">&copy; 2025 Netflix, Inc.</div>
      </div>
    </footer>
  );
}