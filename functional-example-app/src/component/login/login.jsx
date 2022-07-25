import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ()=> {
    const navigate = useNavigate();
    const [login, setLogin] = useState({username: "", password: ""});
    const handleSubmit = ()=> {
        console.log(login);
        navigate("/item");
    }
    return (
        <>
         <div>
             <label htmlFor="username">
                 USERNAME:
             </label>
             <input onChange={(e)=> {setLogin({...login, username: e.target.value})}} id="username" type="text"/>
         </div>
         <div>
         <label htmlFor="password">
             PASSWORD:
        </label>
        <input onChange={(e)=> {setLogin({...login, password: e.target.value})}} type="password" id="password"/>
         </div>
         <button onClick={handleSubmit}>Submit</button>
        </>
    )
}
export default Login;