export default function PortfolioCard({ title, image, imageAlt, description, tools }) {
    return (
        <div className="card h-100 portfolio-card">
            <img src={image} className="card-img-top" alt={imageAlt}/>

            <div className="card-body d-flex flex-column justify-content-between">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary align-self-center">Voir le site</a>
            </div>

            <div className="card-footer portfolio-tools text-secondary text-center">
                {tools}
            </div>
        </div>
    );
}