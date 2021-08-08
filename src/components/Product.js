import React, { useState } from 'react';

const Product = ({ productName, setSelectedProducts, selectedProducts }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(!checked);

		if (event.target.checked) {
			setSelectedProducts([...selectedProducts, productName]);
		} else {
			var newSelectedProducts = selectedProducts.filter(
				(currentProduct) => currentProduct !== productName
			);
			setSelectedProducts(newSelectedProducts);
		}
	};

	return (
		<div className="form-control">
			<input
				type="checkbox"
				name={productName}
				value={productName}
				checked={checked}
				onChange={(event) => handleChange(event)}
			/>
			<label htmlFor={productName} className="ml-1">
				{productName}
			</label>
		</div>
	);
};

export default Product;
