import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { TextField } from './TextField.js';
import LoginForm from './FormComponent.js';
const FormTailwind = () => {
	const router = useRouter();
	const [error, setError] = useState(null);
	const [authenticated, setAuthenticated] = useState(null);

	const Login = (details) => {
		console.log(details);

		var objectWithData = { Group_name: '', email: '' };
		objectWithData.Group_name = details.group_name;
		objectWithData.email = details.email;
		console.log('THE OBJECT WITH DATA', objectWithData);
		// THE AXIOS REQUEST
		axios
			.post('/api/auth/register', objectWithData)
			.then((response) => {
				console.log(response);
				setAuthenticated(true);
			})
			.catch((err) => {
				alert(err);
				console.log(JSON.stringify(err));
				console.log(err.response);
				// console.log(err.data.error);
				setAuthenticated(false);
				setError(err.response.data.error);
			});
	};

	useEffect(() => {
		if (authenticated === true && error === null) {
			router.push('/verification');
			toast.success('Sent an email', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else if (authenticated === false && error) {
			toast.error(`ERROR: ${error}`, {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else;
	}, [authenticated, error]);

	return (
		<div>
			{/* 📌THE BELOW CODE IS FOR SIMPLE FORM WITHOUT FORMIKS _THAT WORKS_ */}
			<div className='w-full max-w-xs my-16'>
				{/* 🔴THE BELOW CODE IS FOR SIMPLE FORM WITHOUT FORMIKS _THAT WORKS_ */}
				<Formik
					initialValues={{ email: '', group_name: '' }}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('Email is invalid')
							.required('Email is required'),
						group_name: Yup.string()
							.max(20, 'Group name is invalid')
							.required('Group name is required'),
					})}
					onSubmit={(values, { setSubmitting, resetForm }) => {
						console.log('ALL THE VALUES', values);
						Login(values);
						setTimeout(() => {
							resetForm();
							setSubmitting(false);
						}, 3000);
					}}>
					{(props) => (
						<Form className='bg-white shadow-md rounded px-8 mb-4 py-16'>
							<div>
								<img
									// width={650}
									// height={650}
									src='/login.png'
								/>
							</div>
							<div className='mb-4 '>
								<TextField label='Email' name='email' type='email' />
							</div>
							<div className='mb-6 '>
								<TextField label='group_name' name='group_name' type='text' />
							</div>
							<div className='flex items-center justify-between '>
								<button
									className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
									type='submit'>
									{props.isSubmitting ? `Loading...` : 'submit'}
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</div>
	);
};

export default FormTailwind;
