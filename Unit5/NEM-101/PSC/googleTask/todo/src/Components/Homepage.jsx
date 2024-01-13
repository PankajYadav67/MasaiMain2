import { useNavigate } from "react-router-dom"


export const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Welcome To The HomePage</h1>

            <button onClick={() => navigate("/login")}>Log-In</button>
            <button onClick={() => navigate("/signup")}>Sign-Up</button>
        </div>
    )
}