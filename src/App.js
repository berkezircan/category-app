import AvailableProducts from './screens/AvailableProducts';
import Review from './screens/Review';
import Categories from './screens/Categories';

import './App.css';
import 'normalize.css';

function App() {
	return (
		<div className="App container">
			<AvailableProducts />
			<Review />
			<Categories />
		</div>
	);
}

export default App;
