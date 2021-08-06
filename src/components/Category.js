import React from 'react';

const Category = ({ category, setCategories, numOfCategories }) => {
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
						className={numOfCategories === 1 ? 'btn btn-disabled' : 'btn'}
					>
						Add Products
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
