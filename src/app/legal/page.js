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
        <main className="container py-5">
            <h1 className="text-center mb-5">Mentions légales</h1>
            <LegalAccordion />
        </main>
    );
}