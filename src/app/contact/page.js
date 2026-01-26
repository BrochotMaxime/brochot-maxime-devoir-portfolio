import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

export const metadata = {
    title: "Contact – John Doe",
    description: "Contacter John Doe, développeur web, pour des projets de site web ou d'application, pour des opportunités professionnelles, ou pour tout autre renseignement.",
};

export default function ContactPage() {
    return (
        <>
            <div className="container py-5">
                <section className="page-title text-center mb-5 pb-4">
                    <h1>Contact</h1>
                    <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
                </section>

                <section className="row justify-content-center bg-white border rounded-3 shadow-sm p-4">
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                    <div className="col-md-6">
                        <ContactInfo />
                    </div>
                </section>
            </div>
        </>
    );
}