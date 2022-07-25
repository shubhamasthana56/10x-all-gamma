import Header from "./header"

const GetWithHeader = (Component)=> {
    return ()=> {
        return (
            <>
                <Header/>
                <Component/>
            </>
        )
    }
}
export default GetWithHeader