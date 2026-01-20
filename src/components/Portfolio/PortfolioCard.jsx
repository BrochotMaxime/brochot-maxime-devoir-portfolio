export default function PortfolioCard({ title, image, description, tools }) {
  return (
    <div className="card h-100 portfolio-card">
        <img
            src={image}
            className="card-img-top"
            alt={`Illustration du projet ${title}`}
        />

        <div className="card-body d-flex flex-column">
            <h5 className="card-title fw-bold">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary mt-auto">Voir le site</a>
        </div>

        <div className="card-footer portfolio-tools text-secondary text-center">
            {tools}
        </div>
    </div>
  );
}