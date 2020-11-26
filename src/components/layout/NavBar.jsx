import React from "react";
import { Link } from "react-router-dom";
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";
import LoginButton from "./Login/Login";

const NavBar = (props) => {
    return (
        <AppBar>
            <ToolBar className="nav-container">
                <div className="menu-container">
                    <div class="logo">
                        <img src="https://ustadistancia.edu.co/images/logo_blanco_440b.png" alt="logo" height={30} />
                    </div>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/tutorias">
                        Tutorias
                    </Button>
                    <Button color="inherit" component={Link} to="/personalizadas">
                        TutoriasPersonalizadas
                 </Button>
                </div>
                <LoginButton />
            </ToolBar>
        </AppBar>
    );
};

export default NavBar;
