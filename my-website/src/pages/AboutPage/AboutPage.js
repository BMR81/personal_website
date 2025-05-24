import './AboutPage.css';
import profilePhoto from '../../assets/images/self_photo.jpg'

export default function About() {
    return (
        <div className="about-body">
            <img id="self-photo" src={profilePhoto} alt="Photo of me!"></img>

            <div className="about-description">
                <h3 id="description-header">About Me</h3>
                <p id="about-me-text">
                    Hello! My name is Benjamin Radovic, and I am an aspiring software engineer.
                    I've recently graduated from the University of Pittsburgh, where I obtained
                    my B.S. in Computer Science.

                    <br></br>
                    <br></br>

                    I am interested in pursuing full-stack development. I love designing intuitive,
                    engaging user interfaces and the background processes that accompany them!

                    <br></br>
                    <br></br>

                    When I'm not coding, I enjoy playing video games, exercising, and hanging
                    out with friends. Additionally, I have a dog, Ginger, who is pictured with me above!
                </p>
            </div>
            
            <div className="socials-information">
                <h3 id="socials-header">Socials</h3>
                <ul id="socials-list">
                    <li>
                        <a href="https://www.linkedin.com/in/benjamin-radovic/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin icon"></i></a></li>
                    
                    <li>
                        <a href="https://github.com/BMR81" target="_blank" rel="noopener noreferrer"><i class="fab fa-github icon"></i></a></li>
                    
                    <li>
                        <a href="https://www.instagram.com/ben3795/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram icon"></i></a></li>
                </ul>
            </div>

        </div>
    );
}