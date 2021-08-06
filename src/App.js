// Components
import AvailableProducts from './screens/AvailableProducts';
import Review from './screens/Review';
import Categories from './screens/Categories';

// Styles
import './App.css';
import 'normalize.css';

function App() {
	return (
		<div className="App container">
			<div className="sub-container">
				<AvailableProducts />
				<Review />
			</div>
			<div className="sub-container">
				<Categories />
			</div>
		</div>
	);
}

export default App;
