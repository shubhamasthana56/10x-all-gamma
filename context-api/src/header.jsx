import "./css/header.css";
import { Link } from "react-router-dom";
const Header = ()=> {
    const navItems = [{name:"LOGIN", path: "/login"}, {name:"HOME", path: "/home"}, {name:"ABOUT", path: "/about"}]
    return (
        <>
            <div className="header-container">
                {navItems.map((item, i)=> {
                    return (
                        <div className="header-item" key={i}>
                            
                            <Link to={item.path}>{item.name}</Link>
                        </div>
                    )
                })}
                <a href="/about" id="anchor">About</a>
            </div>
        </>
    )
}

export default Header;