import React from 'react';
import Category from '../components/Category';

const Categories = ({
	categories,
	setCategories,
	selectedProducts,
	setSelectedProducts,
	setProducts,
	products,
}) => {
	const addNewCategory = () => {
		const lastCategoryIndex = categories[categories.length - 1].index + 1;
		const categoryName = `Category ${lastCategoryIndex + 1}`;
		const newCategories = [
			...categories,
			{
				name: categoryName,
				index: lastCategoryIndex,
				products: [],
			},
		];

		setCategories(newCategories);
	};

	return (
		<div>
			{categories.map((category) => (
				<Category
					key={category.index}
					category={category}
					setCategories={setCategories}
					categories={categories}
					selectedProducts={selectedProducts}
					numOfCategories={categories.length}
					numOfSelectedProducts={selectedProducts.length}
					setSelectedProducts={setSelectedProducts}
					products={products}
					setProducts={setProducts}
				/>
			))}

			<button
				onClick={(event) => addNewCategory(event)}
				className="btn btn-block"
			>
				Add Category
			</button>
		</div>
	);
};

export default Categories;
