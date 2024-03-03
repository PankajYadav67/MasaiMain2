import React from 'react';
import useTimeout from '../Hooks/useTimeout';


export const TimeoutComponent = () => {
    const { ready } = useTimeout(5000); 

    return (
        <div>
            <h2>Timeout Component</h2>
            <p>{ready ? 'Timeout reached!' : 'Waiting...'}</p>
        </div>
    );
};

// Use TimeoutComponent in your application
