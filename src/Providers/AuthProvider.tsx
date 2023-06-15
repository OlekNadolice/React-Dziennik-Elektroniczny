import { FC, useState } from 'react';
import useJwt from 'hooks/useJwt';

interface IProps {
  children: React.ReactNode;
}

const AuthProvider: FC<IProps> = ({ children }) => {
  const token = localStorage.getItem('token');
  const { validateJwt, extractRoleFromJwt } = useJwt();
  const [isTokenInStorage, setIsTokenInStorage] = useState(Boolean(token));

  if (isTokenInStorage) {
    const isTokenValid = validateJwt(token as string);
    if (!isTokenValid) {
      setIsTokenInStorage(false);
    }

    // extract roles from token
    // todo...
    return <div>loading...</div>;
  }

  return <>{children}</>;
};

export default AuthProvider;
