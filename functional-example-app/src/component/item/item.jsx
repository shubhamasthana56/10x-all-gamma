import { useEffect, useState } from "react"
import { getItems } from "../getItems";

const Item = ()=> {
    const [search, setSearch] = useState("");
    const [items, setItems] = useState([]);
    const [initialItems, setInitialItems] = useState([])
    useEffect(()=> {
        getItems().then((items)=> {
            setItems(items)
            setInitialItems(items);
        })
    }, [])
    const handleSearch = ()=> {
       var searchedItems =  initialItems.filter((item)=> {
            return item.category === search;
        })
        setItems(searchedItems);
        console.log(searchedItems)
    }
    return (
    <>
        <input onChange={(e)=> {setSearch(e.target.value)}} type="text"/>
        <button onClick={handleSearch}>Search</button>
        {
            items.map((item, i)=> {
                return <div key={i}>{item.name}</div>
            })
        }
    </>
    )
}
export default Item;
