const Table = (props)=> {
    console.log(props.header, props.data);
    const getTableData = (data)=> {
        return props.header.map((key)=> {
            return (

                 <td>{data[key.toLowerCase()]}</td>
    
           )
        })
    }
    return (
        <div>
            <table>
                    <thead>
                    {props.header.map((key, i)=> {
                        return (
                            <th key={i}>{key}</th>
                        )
                    })}
                    </thead>
                    <tbody>
                        {props.data.map((user, i)=> {
                            return (
                                <tr key={i}>
                                    {getTableData(user)}
                                    <button onClick={()=> {props.getData(user)}}>Edit</button>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
        </div>
    )
}
export default Table;