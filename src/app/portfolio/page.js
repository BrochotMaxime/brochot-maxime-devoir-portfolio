import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioList from "@/components/Portfolio/PortfolioList";

export const metadata = {
  title: "Réalisations – John Doe",
  description: "Portfolio et réalisations de John Doe, développeur web",
};

export default function RealisationsPage() {
  return (
    <main>
      <PortfolioHero />

      <section className="container py-5">
        <PortfolioList />
      </section>
    </main>
  );
}