import PortfolioHero from "@/components/Portfolio/PortfolioHero";
import PortfolioList from "@/components/Portfolio/PortfolioList";

export const metadata = {
    title: "Réalisations – John Doe",
    description: "Découvrez les réalisations de John Doe, la création de sites web, l'amélioration du référecencement SEO, la création d'API et la maquettage d'un site web.",
};

export default function RealisationsPage() {
    return (
        <>
            <PortfolioHero />

            <div className="container py-5">
                <PortfolioList />
            </div>
        </>
    );
}