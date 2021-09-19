import React from "react";
import { Avatar, Box, Grid, Container } from "@mui/material";
import logo from "../user-profile-modified.png";
import GameItem from "../Components/GameItem";
import postRequest from "../util/postRequest";
import postRequestAsync from "../util/postRequestAsync";
import { typography } from "@mui/system";

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
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    postRequest("getUserProfile", { username: "sampleUser" }, async (res) => {
      console.log(res);
      const { likedGames, ownedGames } = res;

      // console.log(likedGames);
      // console.log(ownedGames);

      const liked = await Promise.all(likedGames.map(async (uuid) => {
        return await postRequestAsync("getGame", { UUID: uuid });
      }));
      setLikeGamesList(liked);

      const owned = await Promise.all(ownedGames.map(async (uuid) => {
        return await postRequestAsync("getGame", { UUID: uuid });
      }));
      setOwnedGamesList(owned);

      Promise.allSettled(liked.concat(owned)).then((_) => {
        setLoaded(true);
      });
    });
  }, []);

  if (loaded) {
    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <h1
            className='profile_page'
            className='title is-1'
            style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", textAlign: "center" }}
          >
            Profile
          </h1>
          <Avatar alt='OSKI' src={logo} sx={{ width: 200, height: 200, align: 'center' }} />
        </Box>

        <Box sx={{ flexGrow: 1, paddingBottom: 20 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            style={{ paddingTop: 50 }}
          >
            <Grid item xs={12} style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", paddingBottom: 5 }} >
              <typography> Liked Games </typography>
            </Grid>
            {likeGamesList.map((game, index) => (
                <Grid item xs={2} sm={4} md={4} key={index} style={{paddingBottom: 15}}>
                  <GameItem
                    name={game.name}
                    tags={game.tags}
                    description={game.description}
                  />
                </Grid>
              ))}
            <Grid item xs={12} style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", paddingBottom: 5}} >
              <typography> Created Games </typography>
            </Grid>
            {ownedGamesList.map((game, index) => {
              console.log(game);
              return (
                <Grid item xs={2} sm={4} md={4} key={index}>
                  <GameItem
                    name={game.name}
                    tags={game.tags}
                    description={game.description}
                  />
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </div>
    );
  } else {
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
      </Box>
    );
  }
}

export default Profile;
