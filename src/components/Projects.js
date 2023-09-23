import React from "react"
import HoverVideoPlayer from "react-hover-video-player"
import GreenBay from "../Greenbay.png"
import FitnessHub from "../FitnessHub.PNG"
import ComicWorld from '../ComicWorld.png'
import FitnessHubVideo from "../videos/FitnessHubVideo.mp4"
import GreenbayVideo from "../videos/GreenbayVideo.mp4"
import ComicWorldVideo from "../videos/ComicWorld.mp4"

function Projects(){
    return (
        <section className="projects container" id="projects">
            <h1 className="projects-title">Munkáim</h1>
            <div className="projects-grid">
                <div className="project">
                    <div>
                        <HoverVideoPlayer
                            videoSrc={GreenbayVideo} 
                            videoClassName="project-img"
                            pausedOverlay={<img src={GreenBay} alt="" className="project-img"/>}
                            overlayTransitionDuration={500}
                        />
                        <h1 className="project-title">Greenbay</h1>
                        <p className="project-description">
                            A Greenbay egy online marketplaces oldal, ahol olyan mindennapokban használatos funkciók is vannak, mint regisztrálás, bejelentkezés, vásárlás vagy termék meghírdetése és még számos más dolog! A weboldal backend együttműködésével készült, ugyanakkor én csak a frontenden dolgoztam!
                        </p>
                    </div>
                    <div className="project-btns">
                        <a href="https://github.com/barnaudvarhelyi/Greenbay-Webshop" className="project-btn" target="blank"><h4>Kód</h4></a>
                    </div>
                </div>
                <div className="project">
                    <div>
                    <HoverVideoPlayer
                        videoSrc={FitnessHubVideo} 
                        videoClassName="project-img"
                        pausedOverlay={<img src={FitnessHub} alt="" className="project-img"/>}
                        overlayTransitionDuration={500}
                    />
                    <h1 className="project-title">Fitness Hub</h1>
                    <p className="project-description">A Fitness Hub egy edzőterem weboldala, ahol a felhasználó megismerkedhet a létesítménnyel, valamint annak a szolgáltatásaival. A weboldal React és SCSS használatával készült.</p>
                    </div>  
                    <div className="project-btns">
                        <a href="https://dlevi20.github.io/FitnessHub/" className="project-btn" target="blank"><h4>Weboldal</h4></a>
                        <a href="https://github.com/dlevi20/FitnessHub/tree/master" className="project-btn" target="blank"><h4>Kód</h4></a>
                    </div>
                </div>
                <div className="project">
                    <div>
                        <HoverVideoPlayer
                            videoSrc={ComicWorldVideo} 
                            videoClassName="project-img"
                            pausedOverlay={<img src={ComicWorld} alt="" className="project-img"/>}
                            overlayTransitionDuration={500}
                        />
                        <h1 className="project-title">Comic World</h1>
                        <p className="project-description">A Comic World egy képregény üzlet weboldala, ahol a felhasználó megtekintheti az elérhető termékeket, valamint megrendelheti azokat. A projekt React keretrendszerben készült.</p>
                    </div>
                    <div className="project-btns">
                        <a href="https://dlevi20.github.io/ComicWorld/" className="project-btn" target="blank"><h4>Weboldal</h4></a>
                        <a href="https://github.com/dlevi20/ComicWorld" className="project-btn" target="blank"><h4>Kód</h4></a>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Projects