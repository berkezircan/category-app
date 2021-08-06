import React, { useState } from 'react';

const Product = ({ product, setSelectedProducts, selectedProducts }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(!checked);

		if (!checked) {
			setSelectedProducts([...selectedProducts, product.name]);
		} else {
			var newSelectedProducts = selectedProducts.filter(
				(currentProduct) => currentProduct !== product.name
			);
			setSelectedProducts(newSelectedProducts);
		}
	};

	return (
		<div className="form-control">
			<input
				type="checkbox"
				name={product.name}
				value={product.name}
				checked={checked}
				onChange={(event) => handleChange(event)}
			/>
			<label htmlFor={product.name} className="ml-1">
				{product.name}
			</label>
		</div>
	);
};

export default Product;
