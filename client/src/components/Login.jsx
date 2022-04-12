import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const history = useHistory();

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/login", {
                email,
                password,
            });
            console.log(res.data);
            setMsg(res.data.msg);
            if (res.data.auth) {
                localStorage.setItem("token", res.data.data);
                history.push("/");
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        console.log(msg);
    }, [msg]);
    return (
        <div>
            <form>
                <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" onClick={loginUser}>
                    Login
                </button>
            </form>

            <p>{msg}</p>
        </div>
    );
};

export default Login;
