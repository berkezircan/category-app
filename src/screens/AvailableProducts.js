import React from 'react';
import CategoryItem from '../components/CategoryItem';

const AvailableProducts = ({ categories, setCategories }) => {
	return (
		<div className="info-container">
			<p className="text-dark">
				<i className="fas fa-cube"></i>
				<span className="ml-1">Available Products</span>
			</p>
			<CategoryItem />
		</div>
	);
};

export default AvailableProducts;
