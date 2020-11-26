import React from "react";
import { Link } from "react-router-dom";
//MUI stuff
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import Button from "@material-ui/core/Button";

const NavBar = (props) => {
    return (
        <AppBar>
            <ToolBar className="nav-container">
                <Button color="inherit" component={Link} to="/">
                    Home
                </Button>
                <Button color="inherit" component={Link} to="/tutorias">
                    Tutorias
                </Button>
                <Button color="inherit" component={Link} to="/personalizadas">
                    TutoriasPersonalizadas
                 </Button>
                <Button color="inherit" component={Link} to="/">
                    Login
                </Button>
            </ToolBar>
        </AppBar>
    );
};

export default NavBar;
