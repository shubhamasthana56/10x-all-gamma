import "./header.css";
const Header = ()=> {
    return (
        <>
            <nav className="header">
                <section className="logo">
                    <img src={require("../../images/header.png")} alt="log"/>
                </section>
                <section className="camera-icon">
                <img src={require("../../images/camera.png")} alt="camera"/>
                </section>
            </nav>
        </>
    )
}
export default Header;