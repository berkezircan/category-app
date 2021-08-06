import React from 'react';

const Category = ({
	category,
	setCategories,
	numOfCategories,
	categories,
	numOfSelectedProducts,
}) => {
	const removeCategory = (index) => {
		const newCategories = categories.filter(
			(category) => category.index !== index
		);

		setCategories(newCategories);
	};

	return (
		<div className="info-container">
			<div className="category-title">
				<p className="text-dark">
					<i className="fas fa-cube"></i>
					<span className="ml-1">{category.name}</span>
				</p>
			</div>

			<div className="category-container p-3">
				{
					<p>
						<i className="far fa-heart"></i>
						<span>Select products to add here</span>
					</p>
				}
			</div>

			<div className="actions my-1">
				<div className="product-actions">
					<button
						className={numOfSelectedProducts === 0 ? 'btn btn-disabled' : 'btn'}
					>
						{numOfSelectedProducts > 0
							? `Add ${numOfSelectedProducts} Products`
							: `Add Products`}
					</button>
					<button
						className={
							numOfCategories === 1 ? 'btn btn-disabled ml-1' : 'btn ml-1'
						}
					>
						Remove Products
					</button>
				</div>
				<div className="category-actions">
					<button
						onClick={() => removeCategory(category.index)}
						className={numOfCategories === 1 ? 'btn btn-disabled' : 'btn'}
					>
						Remove Category
					</button>
				</div>
			</div>
		</div>
	);
};

export default Category;
