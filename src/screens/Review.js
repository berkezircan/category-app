import React from 'react';

import ReviewItem from '../components/ReviewItem';
import CategoryStats from '../components/CategoryStats';

const Review = ({ categories, availableProductsCount }) => {
	const productCount = availableProductsCount();
	return (
		<div className="info-container border-primary">
			<p className="text-primary">
				<i className="far fa-save" />
				<span className="ml-1">Review</span>
			</p>
			<CategoryStats
				availableProductsCount={productCount}
				categoryCount={categories.length}
			/>
			{categories.map((category) => {
				return <ReviewItem key={category.name} category={category} />;
			})}
		</div>
	);
};

export default Review;
