import "../css/order-info.css";
const OrderInfo = (props)=> {
    return (
        <>
            <div className="order-container">
                {
                    props.orderData.map((order, i)=> {
                        return (
                            <div key={i}>
                                <div className="order-key">
                                    {order.key}
                                </div>
                                <div className="order-value">
                                    { order.key === "Status" ? <i className="fa fa-circle"></i>: null}
                                    {order.value}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default OrderInfo;