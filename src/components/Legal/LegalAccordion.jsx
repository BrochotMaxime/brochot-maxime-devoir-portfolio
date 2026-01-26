const personnalData = {
    name: "John Doe",
    adress: ["40 rue Laure Diebold", "69009 Lyon, France"],
    phone: "10 20 30 40 50",
    email: "john.doe@gmail.com",
}

export default function LegalAccordion({name, adress, phone, email}) {
    return (
        <div className="accordion" id="legalAccordion">
        
            {/* Editor */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#editor">
                        Éditeur du site
                    </button>
                </h2>

                <div id="editor" className="accordion-collapse collapse show" data-bs-parent="#legalAccordion">
                    <div className="accordion-body">
                        <h3>{personnalData.name}</h3>
                        <span className="bi bi-map d-block"> {personnalData.adress[0]}</span>
                        <span className="bi bi-geo-alt d-block"> {personnalData.adress[1]}</span>
                        <span className="bi bi-telephone d-block"> {personnalData.phone}</span>
                        <span className="bi bi-envelope d-block"> {personnalData.email}</span>
                    </div>
                </div>
            </div>

            {/* Host */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#host">
                        Hébergeur
                    </button>
                </h2>
                
                <div id="host" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                    <div className="accordion-body">
                        <h3>alwaysdata</h3>
                        <span className="d-block">91 Rue du Faubourg Saint-Honoré, 75008 Paris</span>
                        <span className="bi bi-globe d-block"> <a href="https://www.alwaysdata.com" target="_blank" rel="noopener noreferrer">https://www.alwaysdata.com</a></span>
                    </div>
                </div>
            </div>

            {/* Credits */}
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#credits">
                        Crédits
                    </button>
                </h2>

                <div id="credits" className="accordion-collapse collapse" data-bs-parent="#legalAccordion">
                    <div className="accordion-body">
                        <h3>Crédits</h3>
                        <span className="d-block mb-3">Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de Formation</a>.</span>
                        <span className="d-block mb-3 fst-italic">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer">Pixabay</a>.</span>
                        <span className="d-block mb-3 fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">John Doe Icons erstellt von Freepik - Flaticon</a>.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}