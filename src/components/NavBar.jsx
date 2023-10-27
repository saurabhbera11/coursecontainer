import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledNavBar } from "./styled/NavBarStyled";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa"; // Import the user icon from React Icons
import Cookies from "js-cookie";
function NavBar() {
  const [active, setActive] = useState(0);
  const [isloggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/signin");
  };
  useEffect(() =>{
    const user_details=Cookies.get("user_details");
    if(user_details){
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  },[])

  return (
    <StyledNavBar>
      <div className="left">
        <div className="logo">
          <img src="src/assets/logo_2.png" alt="" />
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
          {isloggedIn ? (
            // If the user is logged in, render a user icon from React Icons
            <Button><FaUser size={24} /></Button>

          ) : (
            // If the user is not logged in, render a login button
            <Button variant="contained" color="primary" onClick={handleLoginClick}>
              Login
            </Button>
          )}
        </div>
      </div>
    </StyledNavBar>
  );
}

export default NavBar;
