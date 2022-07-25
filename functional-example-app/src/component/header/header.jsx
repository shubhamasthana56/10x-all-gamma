import "./header.css"
import { Link } from "react-router-dom"
const Header = ()=> {
    const headerItems = [{path: "/home", name: "HOME"}, {path: "/login", name: "LOGIN"}]
    return (
        <>
            <div className="header-container">
                {
                    headerItems.map((item, i)=> {
                        return (
                            <div key={i}>
                                <Link to={item.path}>{item.name}</Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Header;