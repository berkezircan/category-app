import React from 'react';
import CategoryItem from '../components/CategoryItem';
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
				<Product key={product.name} product={product} />
			))}
		</div>
	);
};

export default AvailableProducts;
