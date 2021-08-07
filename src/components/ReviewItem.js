import React from 'react';

const ReviewItem = ({ category }) => {
	return (
		<React.Fragment>
			<div>
				<p>
					{category.name}: {category.products.length} products
				</p>
			</div>
		</React.Fragment>
	);
};

export default ReviewItem;
