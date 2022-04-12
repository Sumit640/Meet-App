import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const registerUser = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/register", {
                email,
                password,
            });

            console.log(res);
            if (res.data.msg === "user added") {
                history.push("/login");
            }
        } catch (error) {
            console.log(error);
            alert("something went wrong");
        }
    };
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

                <button type="submit" onClick={registerUser}>
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
