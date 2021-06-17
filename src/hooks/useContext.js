import { useContext } from 'react';
import { AppContext } from '../components/appstate';

function useContextGetter() {
    const context = useContext(AppContext)
    return context;
}

export default useContextGetter;