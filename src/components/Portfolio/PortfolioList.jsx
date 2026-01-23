import PortfolioCard from "./PortfolioCard";

const projectsData = [
    {
        title: "Fresh Food",
        image: "/fresh-food.jpg",
        imageAlt: "Un panier de fruits et légumes frais",
        description: "Site de vente de produits frais en ligne",
        tools: "Site réalisé avec PHP et MySQL",
    },
    {
        title: "Restaurant Akira",
        image: "/restaurant-japonais.jpg",
        imageAlt: "Un plat de sushi servi dans un restaurant japonais",
        description: "Site de commande en ligne pour un restaurant japonais",
        tools: "Site réalisé avecWordPress",
    },
    {
        title: "Espace bien-être",
        image: "/espace-bien-etre.jpg",
        imageAlt: "Un buddha, une fleur de lotus et des pierres de massage",
        description: "Site vitrine pour un centre de bien-être.",
        tools: "Site réalisé avec LARAVEL",
    },
    {
        title: "SEO",
        image: "/seo.jpg",
        imageAlt: "Un ensemble de mots-clés liés au référencement SEO",
        description: "Amélioration du référencement d'un site e-commerce",
        tools: "Utilisation des outils SEO",
    },
    {
        title: "Création d'une API",
        image: "/coder.jpg",
        imageAlt: "Des lignes de code affichées sur un écran d'ordinateur",
        description: "Création d'une API RESTFULL publique",
        tools: "PHP - SYMFONY",
    },
    {
        title: "Maquette d'un site web",
        image: "/screens.jpg",
        imageAlt: "Un bureau avec plusieurs écrans affichant des maquettes de sites web",
        description: "Création du prototype d'un site",
        tools: "Réaslisé avec FIGMA",
    },
];

export default function PortfolioList() {
    return (
        <>
            <section className="page-title text-center mb-5 pb-4">
                <h1>Portfolio</h1>
                <p>Voici quelques-unes de mes réalisations</p>
            </section>

            <section className="row g-4 text-center">
                {projectsData.map((project) => (
                    <div className="col-md-4" key={project.title}>
                        <PortfolioCard {...project} />
                    </div>
                ))}
            </section>
        </>
    );
}