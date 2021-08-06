import React from 'react';
import Product from '../components/Product';

const AvailableProducts = ({
	products,
	selectedProducts,
	setProducts,
	setSelectedProducts,
}) => {
	return (
		<div className="info-container">
			<p className="text-dark">
				<i className="fas fa-cube"></i>
				<span className="ml-1">Available Products</span>
			</p>
			{products.map((product) => (
				<Product
					key={product.name}
					selectedProducts={selectedProducts}
					setProducts={setProducts}
					setSelectedProducts={setSelectedProducts}
					product={product}
				/>
			))}
		</div>
	);
};

export default AvailableProducts;
