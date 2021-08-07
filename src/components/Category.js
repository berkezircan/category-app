import React from 'react';
import CategoryItem from './CategoryItem';

const Category = ({
	category,
	setCategories,
	numOfCategories,
	categories,
	numOfSelectedProducts,
	setSelectedProducts,
	products,
	setProducts,
	selectedProducts,
}) => {
	const removeCategory = (index) => {
		const newCategories = categories.filter(
			(category) => category.index !== index
		);

		setCategories(newCategories);
	};

	const handleAddProducts = () => {
		let newProducts = products;
		let newCategories = categories;

		category.products = [...category.products, ...selectedProducts];

		newProducts.forEach((product) => {
			if (selectedProducts.indexOf(product.name) > -1) {
				product.category = category.name;
			}
		});

		setProducts(newProducts);

		setCategories(newCategories);

		setSelectedProducts([]);
	};

	return (
		<div className="info-container">
			<div className="category-title">
				<p className="text-dark">
					<i className="fas fa-cube"></i>
					<span className="ml-1">{category.name}</span>
				</p>
			</div>

			{category.products.length === 0 ? (
				<div className="category-container p-3">
					<i className="far fa-heart"></i>
					<span>Select products to add here</span>
				</div>
			) : (
				category.products.map((product) => (
					<CategoryItem key={product} product={product} />
				))
			)}

			<div className="actions my-1">
				<div className="product-actions">
					<button
						onClick={handleAddProducts}
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
