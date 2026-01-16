export default function Skills() {
    return (
        <div className="col-md-6">
                <h3 className="mb-6 fw-bold">Mes compétences</h3>

                <div className="mb-3">
                    <label className="mb-2">HTML5 90%</label>
                    <div className="progress">
                        <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: "90%" }}
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="mb-2">CSS3 80%</label>
                    <div className="progress">
                        <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="mb-2">JAVASCRIPT 70%</label>
                    <div className="progress">
                        <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "70%" }}
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="mb-2">PHP 60%</label>
                    <div className="progress">
                        <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "60%" }}
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="mb-2">REACT 50%</label>
                    <div className="progress">
                        <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        >
                        </div>
                    </div>
                </div>
            </div>
    );
}