export default function Footer() {
  return (
    <footer className="py-4 mt-auto text-light bg-dark">
        <div className="container">
            <div className="row">

                <div className="col-12 col-md-4 mb-3">
                    <h5>John Doe</h5>
                    <p>
                        40 rue Laure Diebold<br />
                        69000 Lyon, France<br />
                        10 20 30 40 50<br />
                        john.doe@gmail.com
                    </p>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <h5>Liens utiles</h5>
                    <ul className="list-unstyled">
                        <li><a href="/" className="text-light">Accueil</a></li>
                        <li><a href="/services" className="text-light">Services</a></li>
                        <li><a href="/portfolio" className="text-light">Portfolio</a></li>
                        <li><a href="/contact" className="text-light">Me contacter</a></li>
                        <li><a href="/mentions-legales" className="text-light">Mentions légales</a></li>
                    </ul>
                </div>

                <div className="col-12 col-md-4 mb-3">
                    <h5>Mes dernières réalisations</h5>
                    <ul className="list-unstyled">
                        <li><a href="/portfolio" className="text-light">Fresh Food</a></li>
                        <li><a href="/portfolio" className="text-light">Restaurant Akira</a></li>
                        <li><a href="/portfolio" className="text-light">Espace bien-être</a></li>
                        <li><a href="/portfolio" className="text-light">SEO</a></li>
                        <li><a href="/portfolio" className="text-light">Création d'une API</a></li>
                        <li><a href="/portfolio" className="text-light">MAquette d'un site</a></li>
                    </ul>
                </div>

            </div>
        </div>
    </footer>
  );
}