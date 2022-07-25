import { useState, useEffect} from "react";
import {useParams, useSearchParams, useNavigate} from "react-router-dom"
const User = ()=> {
    const parameter = useParams();
    const navigate = useNavigate();
    const [query, setQuery] = useSearchParams()
    const [searchdata, setSearchData] = useState("")
    const handleSearch = ()=> {
        setQuery({search: searchdata})
    }
    useEffect(()=> {
        if(parameter.search === "edit") {
            navigate("/user/update")
        }
        debugger
    }, [])    
    return (
        <>
        <input onChange={(e)=> {setSearchData(e.target.value)}} type="text"/>
        <button onClick={handleSearch}>Search</button>
        </>
    )
}
export default User;
//./CSS/-->ABSOLUTE
//  /css/