import React from 'react';
import useMergeState from '../Hooks/useMergeState';


export const FormComponent = () => {
    const initState = {
        username: '',
        email: '',
        password: '',
    };

    const [state, mergeState] = useMergeState(initState);

    const handleChange = (e) => {
        const { name, value } = e.target;
        mergeState({ [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission with the merged state
        console.log('Form submitted with state:', state);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="username" value={state.username} onChange={handleChange} />
            </label>
            <br />
            <label>
                Email:
                <input type="email" name="email" value={state.email} onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={state.password} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

// Use FormComponent in your application
