import { useState } from 'react';

export default function useLocalStorage(initialState) {
    const [state, setState] = useState(initialState)

    return [state, setState];
}


// inside of a component
// const [ newstate, setNewState ] = useLocalStorage(0)
// const [ newstate, setNewState ] = useLocalStorage('man')