import './ProjectsPage.css';

export default function Projects() {
    return (
        <div className="projects-body">
            <h2 id="projects-header">Projects</h2>

            <div className="projects-container">

                <div className="project-card">
                    <div className="project-content">
                        <h2>Dish It Out</h2>
                        <p>
                            Dish It Out is a mobile application developed with Flutter/Dart!
                            It takes a user's favorite dishes and provides them with related
                            restaurant recommendations through a Tinder-like swiping mechanism.
                        </p>
                        <a href="https://github.com/BMR81/dish_it_out_app" target="_blank" rel="noopener noreferrer">View Repo</a>
                    </div>
                </div>
                
            </div>

            <h2 id="more-projects-notice">More projects coming soon!</h2>

        </div>
    );
}