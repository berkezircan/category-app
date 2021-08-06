import React from 'react';

const Review = () => {
	return (
		<div className="info-container border-primary">
			<p className="text-primary">
				<i className="far fa-save" />
				<span className="ml-1">Review</span>
			</p>
			<div className="py-1">
				<p>Available Products: 5</p>
				<p>Categories: 2</p>
			</div>

			<div className="py-1">
				<p>Category 1: 3 products</p>
				<p>Category 2: 2 products</p>
			</div>
		</div>
	);
};

export default Review;
