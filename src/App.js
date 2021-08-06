import React, { useState } from 'react';

// Components
import AvailableProducts from './screens/AvailableProducts';
import Review from './screens/Review';
import Categories from './screens/Categories';

// Styles
import './App.css';
import 'normalize.css';

function App() {
	var [categories, setCategories] = useState([
		{
			name: 'Category 1',
			index: 0,
		},
	]);

	return (
		<div className="App container">
			<div className="sub-container">
				<AvailableProducts />
				<Review />
			</div>
			<div className="sub-container">
				<Categories categories={categories} setCategories={setCategories} />
			</div>
		</div>
	);
}

export default App;
