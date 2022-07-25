import { useContext } from "react";
import { AuthenticationContext } from "./context";
const Item = ()=> {
    const {isLogin} = useContext(AuthenticationContext)
    console.log(isLogin);
    return (<>
       <div>{isLogin ? "All Items": "Please Login"}</div>
    </>)
}
export default Item;