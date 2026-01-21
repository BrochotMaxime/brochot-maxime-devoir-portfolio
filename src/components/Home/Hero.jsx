export default function Hero({ onOpenModal }) {
  return (
    <section className="hero d-flex align-items-center text-center text-white">
      <div className="container">
        <h1 className="display-1 fw-bold">Bonjour, je suis John Doe</h1>
        <h2 className="display-3 fw-bold mb-4">
          Développeur web full stack
        </h2>
        <button
          className="btn btn-danger btn-lg px-4"
          onClick={onOpenModal}
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
}