const personnalData = {
    name: "John Doe",
    adress: ["40 rue Laure Diebold", "69009 Lyon, France"],
    phone: "10 20 30 40 50",
    email: "john.doe@gmail.com",
}

export default function ContactInfo({name, adress, phone, email}) {
    return (
        <div>
            <h2 className="section-title mb-5 pb-3">Mes coordonnées</h2>

            <h3>{personnalData.name}</h3>
            <span className="bi bi-map d-block"> {personnalData.adress[0]}</span>
            <span className="bi bi-geo-alt d-block"> {personnalData.adress[1]}</span>
            <span className="bi bi-telephone d-block"> {personnalData.phone}</span>
            <span className="bi bi-envelope d-block"> {personnalData.email}</span>

            <div className="ratio ratio-4x3 mt-4">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6269657541125!2d4.796403976721344!3d45.77866571240134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1768920474369!5m2!1sfr!2sfr" 
                    title="Carte Google Maps montrant la localisation de John Doe"
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}