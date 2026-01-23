import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";

export const metadata = {
    title: "Services – John Doe",
    description: "Découvrez les services web proposés par John Doe, ses prestations concernent le design UX, le développement de sites web et le référencement SEO.",
};

export default function ServicesPage() {
    return (
        <main>
            <ServicesHero />
            <section className="container py-5">
                <ServicesList />
            </section>
        </main>
    );
}