import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";

export const metadata = {
  title: "Contact – John Doe",
  description: "Contacter John Doe, développeur web",
};

export default function ContactPage() {
  return (
    <main className="container py-5">
      <div className="page-title text-center mb-5 pb-4">
        <h2 className="fw-bold">Contact</h2>
        <p>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</p>
      </div>

      <div className="row justify-content-center">
        <div className="bg-white border rounded-3 shadow-sm p-4 row">
          <div className="col-md-6">
            <ContactForm />
          </div>
          <div className="col-md-6">
            <ContactInfo />
          </div>
        </div>
      </div>
    </main>
  );
}