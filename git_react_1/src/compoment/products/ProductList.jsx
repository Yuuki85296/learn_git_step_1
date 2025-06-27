
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "./ProductCard";

const ProductList = ({ onViewDetail }) => {
    const { product, loading, error } = useProducts();

    if (loading) {
        return <div className="loading"> Loading... </div>;
    }

    if (error) {
        return <div className="error"> Error: {error}</div>;
    }

    return (
        <div className="product-list">
            <h2> สินค้าทั้งหมด </h2>
            <div className="product-grid"> 
                {product.map( p => (
                    <ProductCard 
                        key={p.id}
                        product={p} 
                        onViewDetail={onViewDetail} 
                    />
                ))}
            </div>
        </div>
    );
}
export default ProductList;