import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import "./Navbar.css";
const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "simple-popover" : undefined;

    return (
        <div className="navbar">
            <div className="navbar_heading">LiveMeet</div>
            <div className="navbar_options">
                <img
                    aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}
                    src="https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo"
                    alt="thumbnail"
                />
            </div>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                }}
            >
                <div className="thumbnail_options">
                    <div className="profile">
                        <img
                            src="https://lh3.googleusercontent.com/ogw/ADea4I5pDo_hBiPZa-adz4bWgxTgDV-JotesxrW829jt=s32-c-mo"
                            alt="thumbnail"
                        />
                        <p>User Name</p>
                    </div>
                    <div className="logout_option">logout</div>
                </div>
            </Popover>
        </div>
    );
};

export default Navbar;
