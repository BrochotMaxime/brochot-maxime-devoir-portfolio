import LegalAccordion from "@/components/Legal/LegalAccordion";

export const metadata = {
  title: "Mentions légales – John Doe",
  description: "Mentions légales du site de John Doe",
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