import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Star , ShoppingCart } from "lucide-react";


const ProductDetail = ({onAddToCart}) => {
const { id } = useParams();
const [product, setProduct] = useState(null);   
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);   
const[selectedImage, setSelectedImage] = useState(0);

useEffect (()=>{

    const fetchProduct = async () => {
        try {
            const date = await api.getProduct(`${id}`);
            setLoading(true);
            setProduct(date);
        } catch (err) {
            setError('ไม่สามารถโหลดข้อมูลสินค้าได้',error);
        } finally {
            setLoading(false);
        }
    };

    fetchProduct();
} , [id])

if (loading) {
    return <div>Loading...</div>;   
}

if (!product) {
    return <div>ไม่พบข้อมูลสินค้า</div>;   
}   
return (
    <div className="product-detail">
        <div className="product-images">
            <img src={product.images[selectedImage]} 
            alt={product.title} 
            className="main-image" />

            <div className="thumbnail-list">

                {product.images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className={`thumbnail ${index === selectedImage ? 'active' : ''}`}
                        onClick={() => setSelectedImage(index)}
                    />
                ))}
            </div>
        </div>



        
        <div className="product-info">
            <h1 >{product.title}</h1>
            <div className="rating">
                <Star size={20} color="#FFD700"  />
                <span>{product.rating} ({product.stok}ชิ้น)</span>

            </div>
                <p>{product.description}</p>
            <div>
                <span>{product.price}</span>
                <span>{product.discountPercentage } %OFF</span>
            </div>

            <button onClick={() => onAddToCart(product)} className="add-to-cart-button">
                <ShoppingCart size={20} /> Add to Cart
            </button>
        </div>
    </div>
);

}
export default ProductDetail;