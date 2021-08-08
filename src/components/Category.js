import React from 'react';

import Product from './Product';

const Category = ({
	category,
	setCategories,
	numOfCategories,
	categories,
	setSelectedProducts,
	products,
	setProducts,
	selectedProducts,
}) => {
	const removeCategory = (index) => {
		const newProducts = [...products];
		const newCategories = categories.filter(
			(category) => category.index !== index
		);
		const categoryName = category.name;

		newProducts.forEach((product) => {
			if (product.category === categoryName) {
				product.category = '';
			}
		});

		setProducts(newProducts);
		setCategories(newCategories);
	};

	const removeProduct = () => {
		const newProducts = [...products];
		let newCategories = [...categories];

		const deletedProducts = selectedProductsWithCategory(
			selectedProducts,
			category.products
		);

		newProducts.map((product) => {
			if (deletedProducts.includes(product.name)) {
				product.category = '';
			}

			return product;
		});

		newCategories.map((newCategory) => {
			if (newCategory.name === category.name) {
				newCategory.products = newCategory.products.filter(
					(el) => deletedProducts.indexOf(el) < 0
				);
			}
			return newCategory;
		});

		setProducts(deletedProducts);

		setProducts(newProducts);

		resetSelectedProducts(deletedProducts);
	};

	const resetSelectedProducts = (targetProducts) => {
		const newSelectedProducts = selectedProducts.filter(
			(product) => !targetProducts.includes(product)
		);

		setSelectedProducts(newSelectedProducts);
	};

	const selectedProductsWithCategory = (products, categoryProducts) =>
		products.filter((product) => categoryProducts.includes(product));

	const selectedProductsWithOutCategory = () => {
		return products
			.filter(
				(product) =>
					!product.category && selectedProducts.includes(product.name)
			)
			.map((product) => product.name);
	};

	const filterSelectedCategoryProducts = () =>
		category.products.filter((product) => selectedProducts.includes(product));

	const handleAddProducts = () => {
		let newProducts = products;
		let newCategories = categories;

		category.products = [
			...category.products,
			...selectedProductsWithOutCategory(),
		];

		newProducts.forEach((product) => {
			if (
				selectedProducts.indexOf(product.name) > -1 &&
				product.category === ''
			) {
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
					<Product
						key={product}
						productName={product}
						selectedProducts={selectedProducts}
						setSelectedProducts={setSelectedProducts}
						categories={categories}
					/>
				))
			)}

			<div className="actions my-1">
				<div className="product-actions">
					<button
						onClick={handleAddProducts}
						className={
							selectedProductsWithOutCategory().length === 0
								? 'btn btn-disabled'
								: 'btn'
						}
					>
						{selectedProductsWithOutCategory().length > 0
							? `Add ${selectedProductsWithOutCategory().length} Products`
							: `Add Products`}
					</button>
					<button
						onClick={removeProduct}
						className={
							filterSelectedCategoryProducts().length === 0
								? 'btn btn-disabled ml-1'
								: 'btn ml-1'
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
