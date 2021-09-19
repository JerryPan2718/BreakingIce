import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import postRequest from "../util/postRequest";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


const ViewGame = () => {
  let { uuid } = useParams();
  const [game, setGame] = useState(null);
  const [isLiked, setLikeStatus] = useState(null);

  useEffect(() => {
    postRequest("getGame", { UUID: uuid }, setGame);
    postRequest("getUserProfile", { username: "sampleUser" }, (user) => {
      setLikeStatus(user.likedGames.includes(uuid));
    });
  }, []);

  return game ? (
    <Card style={{ padding: 18 }}>
      <Paper style={{ padding: 18 }}>
        <div>
          <center><h1 className='title is-1' style={{ marginBottom: 15 }}>
            {game.name} - created by {game.creatorName}

          </h1>
            <h4 className='likes' style={{ marginTop: 10 }}>
              Likes: {game.likes} <br />
              Players: {game.minPlayers} - {game.maxPlayers} <br />
              Tags: {game.tags.join(', ')} <br/>
              <Button
              startIcon={isLiked ? <FavoriteBorderIcon/> : <FavoriteIcon/>}
              style={{ marginTop: 15 }}
              variant='contained'
              disableElevation
              onClick={() => {
                postRequest("likeGame", {username: "sampleUser", UUID: uuid}, (isLiked) => {
                  setLikeStatus(isLiked.status);
                  postRequest("getGame", { UUID: uuid }, setGame);
                });
              }}
            >{isLiked == null ? "Like/Dislike" : (isLiked ? "Dislike" : "Like")} </Button>
            </h4>
            
          </center>
          <Divider />
          <center>
            <h4 style={{ marginBottom: 15 }}> Description </h4>
          </center>
          {game.description}
          <br />

          <center>
            <h4 style={{ marginBottom: 15 }}> Rules </h4>
          </center>
          {game.rules}
          <br />

          {game.link ?
            <center>
              <Button
                style={{ marginTop: 15 }}
                variant='contained'
                disableElevation
                onClick={() => {
                  window.open(game.link, '_blank').focus();
                }}
              >Game Files </Button></center>
            : ""}


        </div></Paper></Card>
  ) : (
    <div>Pulling game info</div>
  );
};

export default ViewGame;
