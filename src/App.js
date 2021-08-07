import React, { useState } from 'react';

// Components
import AvailableProducts from './screens/AvailableProducts';
import Review from './screens/Review';
import Categories from './screens/Categories';

// Styles
import './App.css';
import 'normalize.css';

function App() {
	const [categories, setCategories] = useState([
		{
			name: 'Category 1',
			index: 0,
			products: [],
		},
	]);

	const [products, setProducts] = useState([
		{
			name: 'Product 1',
			category: '',
		},
		{
			name: 'Product 2',
			category: '',
		},
		{
			name: 'Product 3',
			category: '',
		},
		{
			name: 'Product 4',
			category: '',
		},
		{
			name: 'Product 5',
			category: '',
		},
		{
			name: 'Product 6',
			category: '',
		},
		{
			name: 'Product 7',
			category: '',
		},
		{
			name: 'Product 8',
			category: '',
		},
		{
			name: 'Product 9',
			category: '',
		},
		{
			name: 'Product 10',
			category: '',
		},
	]);

	const [selectedProducts, setSelectedProducts] = useState([]);

	const availableProductsCount = () =>
		products.filter((product) => product.category === '').length;

	return (
		<div className="App container">
			<div className="sub-container">
				<AvailableProducts
					products={products}
					selectedProducts={selectedProducts}
					setProducts={setProducts}
					setSelectedProducts={setSelectedProducts}
				/>
				<Review
					availableProductsCount={availableProductsCount}
					categories={categories}
				/>
			</div>
			<div className="sub-container">
				<Categories
					selectedProducts={selectedProducts}
					setSelectedProducts={setSelectedProducts}
					categories={categories}
					setCategories={setCategories}
					setProducts={setProducts}
					products={products}
				/>
			</div>
		</div>
	);
}

export default App;
