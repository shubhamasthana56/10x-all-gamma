import "../css/product-list.css"
const ProductList = (props)=> {
    return (
        <>
            <div className="product-container">
                <div>
                    <input type="checkbox" id="check"/>
                    <label htmlFor="check"/>
                </div>
                <div className="product-image">
                    <img src={props.productData.image} alt="avatar"/>
                </div>
                <div className="product-info">
                    <div className="product-name">
                        {props.productData.name}
                    </div>
                    <div >
                        {props.productData.description}
                    </div>
                </div>
                <div>
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
        </>
    )
}
export default ProductList;