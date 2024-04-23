import React, { Suspense, useState,lazy } from "react";
import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Search as SearchIcon,
  Add as AddIcon,
  GroupAdd,
  Logout as LogoutIcon,
  Notifications,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Search = lazy(() => import("../Specific/Search"));
const NotificationDialog = lazy(() => import("../Specific/Notifications"));
const NewGroupDialog = lazy(() => import("../Dailogs/NewGroup"));

const Header = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, seIsNewGroup] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    setIsMobile((prev) => !prev);
  };

  const openSearch = () => {
    setIsSearch((prev) => !prev);
  };

  const openNewGroup = () => {
    seIsNewGroup((prev) => !prev);
  };

  const openNotification = () => {
    setIsNotification((prev) => !prev);
  };

  const navigateToGroup = () => navigate("/group");

  const logOutHandler = () => {
    console.log("logout");
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#E83455",
          }}
        >
          <Toolbar sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
          }}>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              ChatMingle
            </Typography>
            <Box
              sx={{
                display: { xs:"block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                flexFlow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"Search"}
                icon={<SearchIcon />}
                onClick={openSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={openNewGroup}
              />
              <IconBtn
                title={"Manage Groups"}
                icon={<GroupAdd />}
                onClick={navigateToGroup}
              />

              <IconBtn
                title={"Notifications"}
                icon={<Notifications />}
                onClick={openNotification}
              />

              <IconBtn
                title={"LogOut"}
                icon={<LogoutIcon />}
                onClick={logOutHandler}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<Backdrop open />}>
          <Search />
        </Suspense>
      )}

{isNotification && (
        <Suspense fallback={<Backdrop open />}>
        <NotificationDialog/>
        </Suspense>
      )}


{isNewGroup && (
        <Suspense fallback={<Backdrop open />}>
        <NewGroupDialog />
        </Suspense>
      )}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  // Corrected onClick prop
  return (
    <Tooltip title={title}>
      <IconButton size="large" color="inherit" onClick={onClick}>
        {" "}
        {/* Corrected onClick */}
        {icon} {/* Corrected icon rendering */}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
