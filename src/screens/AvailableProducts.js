import React from 'react';
import Product from '../components/Product';

const AvailableProducts = ({
	products,
	selectedProducts,
	setSelectedProducts,
}) => {
	return (
		<div className="info-container">
			<p className="text-dark">
				<i className="fas fa-cube"></i>
				<span className="ml-1">Available Products</span>
			</p>
			{products.map(
				(product) =>
					!product.category && (
						<Product
							key={product.name}
							selectedProducts={selectedProducts}
							setSelectedProducts={setSelectedProducts}
							productName={product.name}
						/>
					)
			)}
		</div>
	);
};

export default AvailableProducts;
