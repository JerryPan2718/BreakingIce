import React from "react";

import AppBar from "@mui/material/AppBar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #e3d0f5, #d0e4f5)",
    border: 0,
    height: 60,
    color: "black",
    padding: "5px 30px",
    justifyContent: "center"
  },
  barItems: {
    background: "red",
    flexDirection: "row"
  },
  copyrightText: {
    fontSize: 13,
    fontWeight: "bold",
    fontFamily: "Helvetica"
  }
});

export default function FooterBar() {
  const classes = useStyles();
  return (
    <AppBar
      className={classes.root}
      sx={{ top: "auto", bottom: 0 }}
      children={
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <p className={classes.copyrightText}>
            Copyright © BearsAmogusSussyBaka
          </p>
          <div>
            <FacebookIcon
              onClick={() => {
                window
                  .open(
                    "https://www.facebook.com/people/Sussy-Baka/100069276647491/",
                    "_blank"
                  )
                  ?.focus();
              }}
            />
            <TwitterIcon
              onClick={() => {
                window
                  .open("https://twitter.com/JerryPa89178099/likes", "_blank")
                  ?.focus();
              }}
            />
            <YouTubeIcon
              onClick={() => {
                window
                  .open(
                    "https://www.youtube.com/channel/UCcFeNIsyMV3V2yVgUOvABig",
                    "_blank"
                  )
                  ?.focus();
              }}
            />
          </div>
        </Grid>
      }
    ></AppBar>
  );
}
