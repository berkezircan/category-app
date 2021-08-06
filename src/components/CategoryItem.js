import React, { useState } from 'react';

const CategoryItem = () => {
	const [checked, setChecked] = useState(false);

	const handleChange = (event) => {
		setChecked(!checked);
	};

	return (
		<div className="form-control">
			<input
				type="checkbox"
				name="123"
				value="123"
				checked={checked}
				onChange={(event) => handleChange(event)}
			/>
			<label htmlFor="123" className="ml-1">
				123
			</label>
		</div>
	);
};

export default CategoryItem;
