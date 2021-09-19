import React from "react";
import { Box, Grid, Container } from "@mui/material";
import logo from "../user-profile-modified.png";
import GameItem from "../Components/GameItem";
import postRequest from "../util/postRequest";
import postRequestAsync from "../util/postRequestAsync";

function FormRow() {
  return (
    <React.Fragment>
      <Grid item xs={4}>
        <GameItem
          name="game1"
          tags={["physical", "fun"]}
          description="this is the description for the game this is the description for the game this is the description for the game
          this is the description for the game this is the description for the game"
        />
      </Grid>
      <Grid item xs={4}>
        <GameItem
          name="game1"
          tags={["physical", "fun"]}
          description="this is the description for the game this is the description for the game this is the description for the game
            this is the description for the game this is the description for the game"
        />
      </Grid>
      <Grid item xs={4}>
        <GameItem
          name="game1"
          tags={["physical", "fun"]}
          description="this is the description for the game this is the description for the game this is the description for the game
            this is the description for the game this is the description for the game"
        />
      </Grid>
    </React.Fragment>
  );
}

function Profile() {
  const [likeGamesList, setLikeGamesList] = React.useState([]);
  const [ownedGamesList, setOwnedGamesList] = React.useState([]);
  React.useEffect(() => {
    postRequest("getUserProfile", { username: "sampleUser" }, async (res) => {
      console.log(res);
      const { likedGames, ownedGames } = res;

      console.log(likedGames);
      console.log(ownedGames);

      setLikeGamesList(
        likedGames.map(async (uuid) => {
          console.log(uuid);
          let res = await postRequestAsync("getGame", { UUID: uuid });
          console.log(res);
          return res;
        })
      );

      setOwnedGamesList(
        ownedGames.map(async (uuid) => {
          console.log(uuid);
          let res = await postRequestAsync("getGame", { UUID: uuid });
          console.log(res);
          return res;
        })
      );
    });
  }, []);

  if (ownedGamesList) {
    return (
        <div>
          <Container maxWidth="md">
            <Box sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
              <h1 className="profile_page" className="title is-1">
                Profile
              </h1>
              <img src={logo} alt="Logo" />;
            </Box>
          </Container>
    
          <Box sx={{ flexGrow: 1 }}>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              {/* likeGamesList.map((game, index) => (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <GameItem
                    name={game.name}
                    tags={game.tags}
                    description={game.description}
                  />
                </Grid>
              ))} */}
              {ownedGamesList.map((game, index) => {
                  console.log(game)
                  return(
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <GameItem
                    name={game.name}
                    tags={game.tags}
                    description={game.description}
                  />
                </Grid>)
              })}
            </Grid>
          </Box>
        </div>
    );
  }
  else {
    return (
        <div>
          <Container maxWidth="md">
            <Box sx={{ bgcolor: "#cfe8fc", height: "40vh" }}>
              <h1 className="profile_page" className="title is-1">
                Profile
              </h1>
              <img src={logo} alt="Logo" />;
            </Box>
          </Container>
        </div>
    );
  }
  
}

export default Profile;
