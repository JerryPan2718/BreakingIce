import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

import {
  makeStyles,
  ThemeProvider,
  createTheme
} from "@material-ui/core/styles";
import { orange } from "@mui/material/colors";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #e3d0f5, #d0e4f5)",
    border: 0,
    marginBottom: 15,
    color: "black",
    padding: "5px 30px",
    justifyContent: "center"
  }
});

export default function FooterBar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} sx={{ top: "auto", bottom: 0 }}></AppBar>
  );
}
