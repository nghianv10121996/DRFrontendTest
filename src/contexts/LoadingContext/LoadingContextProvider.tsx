import React from 'react';
import { useState } from 'react';
import LoadingContext from './LoadingContext';
import ModalLoading from '@/components/ModalLoading';

export const LoadingContextProvider = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {props.children}
      <ModalLoading opened={loading} />
    </LoadingContext.Provider>
  );
};

export default LoadingContextProvider;
