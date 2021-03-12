import { ChangeEvent, useState } from 'react';

const useForm = (callback: () => void) => {
	const initialFormState = {
		name: '',
		email: '',
		confirmEmail: '',
		errors: {
			email: '',
			name: '',
			confirmEmail: '',
		}
	};

	const [values, setValues] = useState(initialFormState);

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		if (event) event.preventDefault();
		callback();
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		event.persist();
		const newValue = { ...values, errors: initialFormState.errors, [event.target.name]: event.target.value };
		setValues(values => newValue);
		if (newValue['email'] !== newValue['confirmEmail']) {
			setValues(
				values => ({
					...newValue,
					errors: {
						...values.errors,
						['confirmEmail']: `Please confirm your email once again.`
					}
				}));
		} else if (!event.target.value) {
			setValues(
				values => ({
					...newValue,
					errors: {
						...values.errors,
						[event.target.name]: `${event.target.name} is missing`
					}
				}));
		}
	};

	return {
		handleChange,
		handleSubmit,
		values,
	}
};

export default useForm;