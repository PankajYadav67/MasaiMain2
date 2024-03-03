import { useState, useEffect } from 'react';

const useTimeout = (time) => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setReady(true);
        }, time);

        return () => {
            clearTimeout(timerId);
        };
    }, [time]);

    return { ready };
};

export default useTimeout;
