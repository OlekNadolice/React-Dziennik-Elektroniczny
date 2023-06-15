import { FC } from 'react';
import useLoginPage from './useLoginPage';
import { Formik } from 'formik';

const LoginPage: FC = () => {
  const { submitHandler, initialValues } = useLoginPage();
  return (
    <Formik initialValues={initialValues} onSubmit={data => submitHandler(data)}>
      {({ handleSubmit, values, handleChange }) => (
        <>
          <input name='username' onChange={handleChange} value={values.username} />
          <input name='password' onChange={handleChange} value={values.password} />
          <button onClick={() => handleSubmit()}>Submit</button>
        </>
      )}
    </Formik>
  );
};

export default LoginPage;
