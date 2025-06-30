
const ProductCard = ({ product , onViewDetail }) => {
    return (
        <div className="product-card" >
            <img src={product.thumbnail} alt={product.name} className="product-image" />
            <div className="product-info">
                <h3 className="product-title"> {product.title} </h3>
                <p className="product-pice"> {product.price} </p>
                <p className="product-rating"> {product.rating} </p>
                <button 
                    onClick={() => onViewDetail(product.id)}
                    > ดูรายละเอียด </button>
            </div>
        </div>
    );
}
export default ProductCard;
export { ProductCard };