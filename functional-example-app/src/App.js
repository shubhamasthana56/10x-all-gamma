import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/header/header";
import Login from "./component/login/login";
import Item from "./component/item/item";

const App = ()=> {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/item" element={<Item/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;