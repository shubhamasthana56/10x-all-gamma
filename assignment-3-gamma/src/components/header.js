import "../css/header.css";
const Header = (props)=> {
    return (
        <>
            <div className="header-container">
                <div>
                    <i className="fa fa-angle-left"/>
                </div>
                <div>
                    <div className="header-name">{props.headerData.name}</div>
                    <div className="header-id">{props.headerData.id}</div>
                </div>
                <div>
                    <button className="button">Print</button>
                </div>
            </div>
        </>
    )
}
export default Header;