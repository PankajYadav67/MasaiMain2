import { useState } from "react"
import {useNavigate} from "react-router-dom";

export const Signuppage = () => {
    const [user, setUser] = useState({})

    const navigate = useNavigate();
    const handleChange = (e) => {
        let {name, value} = e.target
        setUser( {
            ...user,
            [name] : value
        })
    }

    const handleSubmit = () => {
        const payload = {
            name: user.name,
            username: user.username, // Make sure the property name matches the server-side model
            email: user.email,
            password: user.password,
        };
        fetch("http://localhost:8080/auth/signup", {
            headers : {
                "Content-Type" : "application/json"
            },
            method : "POST",
            body : JSON.stringify(payload),
        })
        .then((res) => res.json())
        .then(() => navigate("/login"))
        .catch((err) => console.log(err))
    }
    return <div>
        <h1>Signuppage</h1>
        <div>
            <input type="text" name="name" onChange={handleChange}/>
            <input type="text" name="username" onChange={handleChange}/>
            <input type="text" name="email" onChange={handleChange}/>
            <input type="text" name="password" onChange={handleChange}/>
            <button type="submit" onClick={handleSubmit}>Sign up</button>
        </div>
    </div>
}

