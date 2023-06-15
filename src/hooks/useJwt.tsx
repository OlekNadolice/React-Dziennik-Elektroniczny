import React from 'react';

const useJwt = () => {
  function validateJwt(token: string) {
    return null;
  }

  function extractRoleFromJwt(token: string) {
    return null;
  }

  return { validateJwt, extractRoleFromJwt };
};

export default useJwt;
