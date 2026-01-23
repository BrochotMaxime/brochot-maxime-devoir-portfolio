export default function ContactForm() {
    return (
        <form className="contact-form">
            <h3 className="section-title mb-5 pb-3">Formulaire de Contact</h3>

            <div className="mb-2">
                <input
                type="text"
                className="form-control"
                placeholder="Votre nom"
                required
                />
            </div>

            <div className="mb-2">
                <input
                type="email"
                className="form-control"
                placeholder="Votre adresse email"
                required
                />
            </div>

            <div className="mb-2">
                <input
                type="tel"
                className="form-control"
                placeholder="Votre numéro de téléphone"
                required
                />
            </div>

            <div className="mb-2">
                <input
                type="text"
                className="form-control"
                placeholder="Sujet"
                required
                />
            </div>

            <div className="mb-2">
                <textarea
                className="form-control"
                rows="15"
                placeholder="Votre message"
                required
                ></textarea>
            </div>

            <div className="form-check mb-4 text-center">
                <button type="submit" className="btn btn-primary">
                    Envoyer
                </button>
            </div>
        </form>
    );
}