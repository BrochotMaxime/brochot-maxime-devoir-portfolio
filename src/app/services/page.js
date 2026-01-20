import ServicesHero from "@/components/Services/ServicesHero";
import ServicesList from "@/components/Services/ServicesList";

export const metadata = {
  title: "Services – John Doe",
  description: "Services proposés par John Doe, développeur web",
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