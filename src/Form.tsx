import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import useForm from "./utils/useForm";
import useFetch from './utils/useFetch';

import './Form.scss';

export default function Register(props:any) {

	const { values, handleChange, handleSubmit, } = useForm(login);
	const [isSuccess, setSuccess] = useState(false);
	const [payload, setPayload] = useState({
		name: '',
		email: '',
	});
	const { response, error, loading } = useFetch("/", {
		method: "POST",
		body: {
			name: payload['name'],
			email: payload['email'],
		},
	});

	useEffect(() => {
		if(response && !error) {
			setSuccess(true);
		}
	}, [response, error])


	function login() {
		setPayload({
			name: values['name'],
			email: values['email'],
		});
	}

	return (
		<div
			className="form"
			style={{
				width: '100vw',
				height: '100vh',
				position: 'absolute',
				justifyContent: 'center',
				display: 'flex',
				flexDirection: 'column',
				background: 'rgba(0,0,0,0.5)',
			}}
		>
			{!isSuccess && <section>
				<h2>Request an invite</h2>
				<form
					style={{ display: "grid", alignItems: "center", justifyItems: "center", gridRowGap: '1rem' }}
					onSubmit={handleSubmit}
				>
					<input className="input" type="text" name="name" onChange={handleChange} value={values.name} required placeholder="Full name" />
					<input className="input" type="email" name="email" onChange={handleChange} value={values.email} required placeholder="Email" />
					<input
						type="email"
						placeholder="Confirm Email"
						name="confirmEmail"
						onChange={handleChange}
						value={values.confirmEmail}
					/>
					<button type="submit" className="button is-block is-info is-fullwidth" disabled={loading || Object.values(values.errors).filter(i => i).length > 0}>{loading ? 'Sending, please wait...': 'Send'}</button>
				</form>
				{ error || Object.values(values.errors).filter(i => i).length > 0 ? <div className='register__input-error'>{((response||{}).status||{}).message || Object.values(values.errors).filter(i => i)}</div> : <div>&nbsp;</div>}

			</section>}
			{isSuccess && <section>
				<h2>All done!</h2>
				<p>You will be one of the first to experience Broccoli &amp; Co. when we launch.</p>
				<button onClick={props.close} className="button is-block is-info is-fullwidth" >Ok</button>
			</section>}
		</div >
	);
}