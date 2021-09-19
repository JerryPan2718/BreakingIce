import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Container } from "@mui/material";
import logo from "../user-profile-modified.png";
import GameItem from "../Components/GameItem";
import postRequest from "../util/postRequest";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary
}));

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
    <div>
      <Container maxWidth='md'>
        <Box sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
          <h1 className='profile_page' className='title is-1'>
            Profile
          </h1>
          <img src={logo} alt='Logo' />;
        </Box>
      </Container>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Profile;
