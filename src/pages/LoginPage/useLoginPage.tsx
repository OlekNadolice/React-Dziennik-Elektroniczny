import { useMutation } from '@tanstack/react-query';
import { loginUser } from 'api/Auth';
import { ILoginCredentails } from 'Interfaces/AuthInterface';

const useLoginPage = () => {
  const { mutate, isLoading, error } = useMutation(
    (data: ILoginCredentails) => loginUser(data),
    {
      onSuccess: ({ data }) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('refreshToken', data.refreshToken);
      },
    }
  );

  const initialValues = {
    username: '',
    password: '',
  };

  function submitHandler(data: ILoginCredentails) {
    mutate(data);
  }

  return { initialValues, isLoading, error, submitHandler };
};

export default useLoginPage;
