import React, { useState } from 'react';

const Product = ({ product }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(!checked);
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
			<label htmlFor="123" className="ml-1">
				{product.name}
			</label>
		</div>
	);
};

export default Product;
