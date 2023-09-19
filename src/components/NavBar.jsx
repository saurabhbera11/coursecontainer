import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledNavBar } from "./styled/NavBarStyled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
function NavBar() {
  const [active, setActive] = useState(0);

  return (
    // <StyledNavBar>
    <StyledNavBar>
      <div className="left">
        <div className="logo">
          <img src="src/assets/logo.png" alt="" />
        </div>
        <div className="links">
          <Button
            color={active === 0 ? "primary" : "inherit"}
            component={Link}
            to="/"
            size="large"
            onClick={() => {
              setActive(0);
            }}
          >
            Home
          </Button>
          <Button
            color={active === 1 ? "primary" : "inherit"}
            component={Link}
            to="/courses"
            size="large"
            onClick={() => setActive(1)}
          >
            Courses
          </Button>
        </div>
      </div>
      <div className="right">
        <Toolbar>
          <div style={{ display: "flex", alignItems: "center" }}>
            <InputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
            <div>
              <IconButton>
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </Toolbar>

        <div className="user">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </div>
      </div>
    </StyledNavBar>
    // </StyledNavBar>
  );
}

export default NavBar;
