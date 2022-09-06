import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Typography,
  Toolbar,
  Stack,
  Button,
} from "@mui/material";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

const NavigationBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" aria-label="logo">
          <LibraryMusicIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SongsTrack App
        </Typography>
        <Stack direction="row" spacing={6}>
          <Button color="inherit">
            <Link to="/">Home</Link>
          </Button>
          <Button color="inherit">
            <Link to="/music">Music</Link>
          </Button>
          <Button color="inherit">
            <Link to="/tracks">Tracks</Link>
          </Button>
          <Button color="inherit"></Button>
          <>
            <LoginButton />
            <LogoutButton />
            <Profile />
          </>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default NavigationBar;
