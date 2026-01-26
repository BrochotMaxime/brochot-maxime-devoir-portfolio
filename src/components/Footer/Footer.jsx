import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-5 mt-auto text-light bg-dark">
            <div className="container">
                <div className="row">

                    {/* Contact Information */}
                    <div className="col-12 col-md-4 mb-4">
                        <h4>John Doe</h4>
                        <address>
                            <span>40 rue Laure Diebold</span><br />
                            <span>69000 Lyon, France</span><br />
                            <a href="tel:102030405060" className="text-light text-decoration-none">10 20 30 40 50</a><br />
                            <a href="mailto:john.doe@gmail.com" className="text-light text-decoration-none">john.doe@gmail.com</a>
                        </address>

                        <div className="d-flex gap-3">
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="GitHub" className="text-light">
                                <i className="bi bi-github fs-4"></i>
                            </a>

                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="Twitter" className="text-light">
                                <i className="bi bi-twitter-x fs-4"></i>
                            </a>

                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer nofollow" aria-label="LinkedIn" className="text-light">
                                <i className="bi bi-linkedin fs-4"></i>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="col-12 col-md-4 mb-4">
                        <h4>Liens utiles</h4>
                        <ul className="list-unstyled">
                            <li><Link href="/" className="text-light text-decoration-none">Home</Link></li>
                            <li><Link href="/services" className="text-light text-decoration-none">Services</Link></li>
                            <li><Link href="/portfolio" className="text-light text-decoration-none">Portfolio</Link></li>
                            <li><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
                            <li><Link href="/legal" className="text-light text-decoration-none">Mentions légales</Link></li>
                        </ul>
                    </div>

                    {/* Recent Projects */}
                    <div className="col-12 col-md-4 mb-4">
                        <h4>Mes dernières réalisations</h4>
                        <ul className="list-unstyled">
                            <li><Link href="/portfolio" className="text-light text-decoration-none">Fresh Food</Link></li>
                            <li><Link href="/portfolio" className="text-light text-decoration-none">Restaurant Akira</Link></li>
                            <li><Link href="/portfolio" className="text-light text-decoration-none">Espace bien-être</Link></li>
                            <li><Link href="/portfolio" className="text-light text-decoration-none">SEO</Link></li>
                            <li><Link href="/portfolio" className="text-light text-decoration-none">Création d'une API</Link></li>
                            <li><Link href="/portfolio" className="text-light text-decoration-none">Maquette d'un site</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}