import React, { useState } from 'react';

const CategoryItem = ({ product }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(!checked);
	};

	console.log(product);

	return (
		<div className="form-control">
			<input
				type="checkbox"
				name={product}
				value={product}
				checked={checked}
				onChange={(event) => handleChange(event)}
			/>
			<label htmlFor={product} className="ml-1">
				{product}
			</label>
		</div>
	);
};

export default CategoryItem;
