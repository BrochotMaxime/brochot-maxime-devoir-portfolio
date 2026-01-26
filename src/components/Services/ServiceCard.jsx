export default function ServiceCard({ title, description, icon }) {
    return (
        <div className="card h-100 service-card text-center p-4">
            <i className={`${icon} fs-1 mb-3 text-primary`}></i>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
}