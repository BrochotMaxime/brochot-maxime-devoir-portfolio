import LegalAccordion from "@/components/Legal/LegalAccordion";

export const metadata = {
    title: "Mentions légales – John Doe",
    description: "Les mentions légales du site internet de John Doe, concernant l'éditeur du site, son hébergeur, ainsi que les crédits et les droits d'auteur.",
    robots: {
        index: false,
        follow: false,
    },
};

export default function MentionsLegalesPage() {
    return (
        <>
            <div className="container py-5">
                <section>
                    <h1 className="page-title text-center mb-5 pb-4">Mentions légales</h1>
                    <LegalAccordion />
                </section>
            </div>
        </>
    );
}