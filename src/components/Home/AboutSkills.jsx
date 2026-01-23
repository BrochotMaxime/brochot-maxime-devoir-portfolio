import About from "./About";
import Skills from "./Skills";

export function AboutSkills() {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row col-lg-12 bg-white border rounded-3 shadow-sm p-4 justify-content-center">
                    <About />
                    <Skills />
                </div>
            </div>
        </section>
    );
}