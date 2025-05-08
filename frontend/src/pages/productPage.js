import React, { useEffect, useState } from "react";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5001/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Error fetching products:", err));
    }, []);

    return (
        <div>
            <h1>Available Products</h1>
            {products.map(product => (
                <div key={product._id} className="product">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Starting Price: ${product.startingPrice}</p>

                    <h3>Bids:</h3>
                    {product.bids?.length > 0 ? (
                        product.bids.map(bid => (
                            <div key={bid._id} className="bid">
                                <p>Amount: ${bid.amount}</p>
                                <p>Bidder: {bid.bidder?.username || "Anonymous"}</p>
                            </div>
                        ))
                    ) : (
                        <p>No bids yet</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
