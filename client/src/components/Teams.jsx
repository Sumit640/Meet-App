import React, { useState } from "react";
import Card from "./Card";
import "./Teams.css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
const Teams = () => {
    const [teams, SetTeams] = useState([
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
        {
            image: "https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo",
            name: "Team 1",
        },
    ]);
    return (
        <div className="teams_page">
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
