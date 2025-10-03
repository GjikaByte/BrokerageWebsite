/* Reusable horizontal scroll row */
export default function CarouselRow({ title, items = [], className = '' }) {
  return (
    <>
      <h6 className={`row-title ${className}`.trim()}>{title}</h6>
      <div className="carousel-row d-flex flex-nowrap overflow-auto pb-3">
        {items.map((it, i) => (
          <a href="#" className="thumb d-block position-relative" key={i}>
            <img src={it.src} alt={it.alt || `media-${i}`} />
            {it.badge && <span className="badge-new">{it.badge}</span>}
          </a>
        ))}
      </div>
    </>
  );
}
