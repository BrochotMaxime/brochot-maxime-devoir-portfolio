import About from "./About";
import Skills from "./Skills";

export function AboutSkills() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="col-lg-12">
                    <div className="bg-white border rounded-3 shadow-sm p-4">
                        <div className="row">
                            <About />
                            <Skills />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}