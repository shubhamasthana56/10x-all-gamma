import { Link } from "react-router-dom";
import landingImage from "../../images/nature.jpeg";
import "./landing-page.css";
const Landing = ()=> {
    return (
        <>
            <div className="landing">
                <div className="landing-image">
                    <img src={landingImage} alt="landing"/>
                </div>
                <div className="landing-actions">
                    
                    <div className="landing-text">10x Team 04</div>
                    <Link to="/post-view">
                    <div className="forward">
                    
                    <button className="button">Enter</button>
                    </div>
                    
                    </Link>
                    
                </div>
            </div>
        </>
    )
}
export default Landing;