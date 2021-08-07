import React from 'react';

const CategoryStats = ({ availableProductsCount, categoryCount }) => {
	return (
		<div className="py-1">
			<p>Available Products: {availableProductsCount}</p>
			<p>Categories: {categoryCount}</p>
		</div>
	);
};

export default CategoryStats;
