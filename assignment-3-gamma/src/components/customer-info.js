import "../css/customer-info.css"
const CustomerInfo =(props)=> {
    return (
        <>
            <div className="customer-container">
                {
                    props.customerData.map((customer, i)=> {
                        return (
                            <div key={i} className="customer-info">
                                <span className="customer-key">{customer.key}</span>
                                <span>{customer.value}</span>
                            </div>
                            
                        )
                    })
                }
            </div>
        </>
    )
}
export default CustomerInfo;