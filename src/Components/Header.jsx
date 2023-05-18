import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import background from "../img/0.png";
import background1 from "../img/keka.png";  
// import { Box } from '@mui/material/';

import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Logout from '@mui/icons-material/Logout';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Divider, MenuItem, Box } from "@mui/material";

import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    window.alert("You have been logged out")
  }
  return (
    <>
      <nav
        className=" navbar navbar-inverse navbar-fixed-left"
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#874070",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100vw",
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          margin:"0px",
          padding:"0px",
          height: "60px"
        }}
      >
        <div   
        style={{
          backgroundColor:"#7e3654",
          width: "100px",
          height: "60px",
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
        }}>
        <img style={{width:"80px"}} src="https://cdn.kekastatic.net/shared/branding/logo/keka-logo-light.svg" />
            </div>
          <div className="user">
            <Box sx={{textAlign: 'center'}}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <span className="me-2" style={{color: "white",}}>{localStorage.getItem("userName")}</span>
                  <Avatar sx={{
                    width: 32,
                    height: 32,
                    backgroundColor: "gray"
                  }}>
                    <FaUserCircle /> </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar />
                Profile
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => { handleClose(), localStorage.removeItem("userDetail"), localStorage.removeItem("userName"), navigate("/register") }}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                Switch another account
              </MenuItem>
              <MenuItem onClick={() => { handleClose(), handleLogout(), localStorage.removeItem("userDetail"); localStorage.removeItem("userName"); navigate("/login"); }}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </div>
      </nav>
    </>
  );
};

export default Header;


{/* <Paper>
              <ClickAwayListener >
                <MenuList role="menu">
                  <Divider light />
                  <FaUserCircle style={{ margin: 10 }} />
                  <span>{localStorage.getItem("userName")}</span>
                  <MenuItem className="btn btn-danger me-3" onClick={() => { handleLogout(), localStorage.removeItem("userDetail"); localStorage.removeItem("userName"); navigate("/login"); }}>
                  <ImSwitch />Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper> */}




