import { useState, useCallback } from 'react';

const useMergeState = (initialState) => {
    const [state, setState] = useState(initialState);

    const mergeState = useCallback(
        (partialState) => {
            setState((prevState) => ({
                ...prevState,
                ...partialState,
            }));
        },
        [setState]
    );

    return [state, mergeState];
};

export default useMergeState;
