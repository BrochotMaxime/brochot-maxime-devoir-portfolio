const skillsData = [
    { name: "HTML5", level: 90, color: "bg-danger" },
    { name: "CSS3", level: 80, color: "bg-info" },
    { name: "JAVASCRIPT", level: 70, color: "bg-warning" },
    { name: "PHP", level: 60, color: "bg-success" },
    { name: "REACT", level: 50, color: "" },
];

function SkillsList() {
    return skillsData.map((skill) => (
        <div className="mb-3" key={skill.name}>
            <label className="mb-2">{skill.name} {skill.level}%</label>
            <div className="progress">
                <div
                    className={`progress-bar ${skill.color}`}
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                    aria-valuenow={skill.level}
                    aria-valuemin="0"
                    aria-valuemax="100"
                >
                </div>
            </div>
        </div>
    ));
}



export default function Skills() {
    return (
        <div className="col-md-6">
            <h3 className="section-title mb-6">Mes compétences</h3>
            <SkillsList />
        </div>
    );
}