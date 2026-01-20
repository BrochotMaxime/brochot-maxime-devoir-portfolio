export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="card h-100 service-card text-center p-4">
      <i className={`bi ${icon} fs-1 mb-3 text-primary`}></i>
      <h5 className="fw-bold">{title}</h5>
      <p>{description}</p>
    </div>
  );
}