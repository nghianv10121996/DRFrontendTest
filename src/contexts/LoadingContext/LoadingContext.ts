import { createContext } from "react";

type LoadingContextProps = {
    loading: boolean;
    setLoading: (d: boolean) => void;
};

const defaultLoadingContext: LoadingContextProps = {
    loading: true,
    setLoading: () => { },
};

export const LoadingContext = createContext<LoadingContextProps>(defaultLoadingContext);

export default LoadingContext;