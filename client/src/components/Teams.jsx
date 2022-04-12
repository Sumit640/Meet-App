import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import "./Teams.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { useHistory } from "react-router-dom";
import axios from "axios";
const Teams = () => {
    const history = useHistory();
    const [data, setData] = useState();

    const getdata = async () => {
        console.log("here");
        if (!localStorage.getItem("token")) {
            console.log("no token");
            history.push("/login");
        } else {
            const res = await axios.get("http://localhost:5000/getUserdata", {
                headers: {
                    jwttoken: localStorage.getItem("token"),
                },
            });

            if (!res.data.auth) {
                localStorage.removeItem("token");
                history.push("/login");
            }
            console.log(res.data);
            setData({ email: res.data.email, id: res.data.id });
        }
    };
    useEffect(() => {
        getdata();
    }, []);

    const [teams, setTeams] = useState([
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
    ]);
    return (
        <div className="teams_page">
            <Navbar name={data?.email} />
            <div className="add_team">
                <AddRoundedIcon className="add_icon" />
                <p>Add or Create a team</p>
            </div>
            <div className="teams">
                {teams.map((team) => (
                    <Card name={team.name} image={team.image} />
                ))}
            </div>
        </div>
    );
};

export default Teams;
