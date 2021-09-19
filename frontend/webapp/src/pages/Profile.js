import React from "react";
import { Avatar, Box, Grid, Container } from "@mui/material";
import logo from "../user-profile-modified.png";
import GameItem from "../Components/GameItem";
import postRequest from "../util/postRequest";

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <GameItem
          name='game1'
          tags={["physical", "fun"]}
          description='this is the description for the game this is the description for the game this is the description for the game
          this is the description for the game this is the description for the game'
        />
      </Grid>
      <Grid item xs={4}>
        <GameItem
          name='game1'
          tags={["physical", "fun"]}
          description='this is the description for the game this is the description for the game this is the description for the game
            this is the description for the game this is the description for the game'
        />
      </Grid>
      <Grid item xs={4}>
        <GameItem
          name='game1'
          tags={["physical", "fun"]}
          description='this is the description for the game this is the description for the game this is the description for the game
            this is the description for the game this is the description for the game'
        />
      </Grid>
    </React.Fragment>
  );
}

function Profile() {
  const [gameList, setGameList] = React.useState([]);
  React.useEffect(() => {
    postRequest("getUserProfile", { username: "sampleUser" }, res => {
      setGameList(res);
      console.log(gameList);
    });
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <h1
        className='profile_page'
        className='title is-1'
        style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", textAlign: "center" }}
      >
        Profile
      </h1>
      <Avatar alt='OSKI' src={logo} sx={{ width: 200, height: 200, align: 'center' }} />
      <Grid container spacing={3} sx={{ paddingTop: "40px" }}>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
        <Grid container item spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Profile;
