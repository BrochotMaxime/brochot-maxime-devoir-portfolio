import PortfolioCard from "./PortfolioCard";

const projectsData = [
  {
    title: "Fresh Food",
    image: "/fresh-food.jpg",
    description: "Site de vente de produits frais en ligne",
    tools: "Site réalisé avec PHP et MySQL",
  },
  {
    title: "Restaurant Akira",
    image: "/restaurant-japonais.jpg",
    description: "Site de commande en ligne pour un restaurant japonais",
    tools: "Site réalisé avecWordPress",
  },
  {
    title: "Espace bien-être",
    image: "/espace-bien-etre.jpg",
    description: "Site vitrine pour un centre de bien-être.",
    tools: "Site réalisé avec LARAVEL",
  },
  {
    title: "SEO",
    image: "/seo.jpg",
    description: "Amélioration du référencement d'un site e-commerce",
    tools: "Utilisation des outils SEO",
  },
  {
    title: "Création d'une API",
    image: "/coder.jpg",
    description: "Création d'une API RESTFULL publique",
    tools: "PHP - SYMFONY",
  },
  {
    title: "Maquette d'un site web",
    image: "/screens.jpg",
    description: "Création du prototype d'un site",
    tools: "Réaslisé avec FIGMA",
  },
];

export default function PortfolioList() {
  return (
    <>
        <div className="section-title text-center mb-5">
            <h2 className="fw-bold">Portfolio</h2>
            <p>Voici quelques-unes de mes réalisations</p>
        </div>

        <div className="row g-4">
        {projectsData.map((project) => (
            <div className="col-md-4" key={project.title}>
                <PortfolioCard {...project} />
            </div>
        ))}
        </div>
    </>
  );
}