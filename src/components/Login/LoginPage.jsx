import React from 'react';
import classes from './LoginPage.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const LoginPage = () => {

	const validateForm = (values) => {
		const errors = {};
		if (!values.email) {
			errors.email = 'Required';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
		) {
			errors.email = 'Invalid email address';
		}
		return errors;
	}

	const submit = (values, { setSubmitting }) => {
		console.log(values)
		setSubmitting(false)
	}
	return (
		<div className={classes.login}>
			<h3>Login</h3>
			<Formik
				initialValues={{ email: '', password: '', rememberMe: false }}
				validate={validateForm}
				onSubmit={submit}
			>
				{({ isSubmitting }) => (
					<Form className={classes.formField}>
						<ErrorMessage name="email" component="div" />
						<Field type="email" name="email" className={classes.inputField} />
						<ErrorMessage name="password" component="div" />
						<Field type="password" name="password" className={classes.inputField} />
						<div className={classes.checkboxField}>
							<Field type="checkbox" name="rememberMe" />remember me
						</div>
						<button type="submit" disabled={isSubmitting} className={classes.sendBtn}>
							LOGIN
						</button>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default LoginPage;