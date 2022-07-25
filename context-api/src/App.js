import { useContext } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { DarkThemeContext, AuthenticationContext } from "./context";
import Header from "./header";
import "./css/App.css";
import Home from "./home";
import About from "./about";
import User from "./user";
import UserUpdate from "./user-update";
const App = ()=> {
  // const themeData = useContext(DarkThemeContext);
  // const {isLogin, userAuthetication} = useContext(AuthenticationContext);
  // const abc = "a"
  return (
    <>
      {/* <button onClick={userAuthetication} id="login-button" className="button" style={{backgroundColor: "black"}}>{isLogin ? "Logout": "Login"}</button> */}
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/user" element={<div>User route</div>}>
            {/* <Route path="/add" element={<div>Child add</div>}></Route> */}
          </Route>
          <Route path="/user/:search" element={<User/>}/>
          <Route path="/user/add" element={<div>user Add Page</div>}/>
          <Route path="/user/update" element={<UserUpdate/>}/>
          
          <Route path="*" element={<div>Page Not Found</div>}/>
          <Route/>
        </Routes>
          
      </BrowserRouter>

    </>
  )
}
export default App;