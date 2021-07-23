import React from 'react';
import classes from './LoginPage.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginMe } from '../../redux/auth-reduser';
import { getIsLogin } from '../../redux/selectors';
import { Redirect } from 'react-router-dom';

const LoginPage = () => {
	const dispatch = useDispatch()

	const isLogin = useSelector(getIsLogin)

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
		dispatch(getLoginMe(values.email, values.password, values.rememberMe))
		setSubmitting(false)
	}

	if (isLogin) return <Redirect to='/profile' />

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