
function ProductCard(product){
    return (
        <>
           <article className="product-card">
             <div className="proudct-image">
                <img src="/images/laptop.png" alt={product.name} />
             </div>
             <div className="product-info">
                <h3>{product.name}</h3>
                <p className="proudct-description">
                    {product.description}</p>
                <p className="product-category">{product.category}</p>
                <div className="rating"> {product.rating}</div>
             </div>
             <div className="product-bottom">
                <button className="add-cart"> Add to Cart</button>
             </div>
           </article>
        </>
    )
}
export default ProductCard;