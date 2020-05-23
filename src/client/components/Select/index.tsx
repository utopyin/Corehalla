import React from 'react';

interface Option<T> {
	value: T;
	label: string;
}

interface Props<T> {
	options: Option<T>[];
	value: string;
	onChange: (value: T) => void;
}

const Select = <T extends string>({ options, value, onChange }: Props<T>) => {
	const handleOnChange = (e: React.FormEvent<HTMLSelectElement>) =>
		onChange(e.currentTarget.value as T);

	return (
		<select value={value} onChange={handleOnChange}>
			{options.map((option) => (
				<option key={option.value} value={option.value}>
					{option.label}
				</option>
			))}
		</select>
	);
};

export default Select;