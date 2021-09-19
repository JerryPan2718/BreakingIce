import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import postRequest from "../util/postRequest";

const ViewGame = () => {
  let { uuid } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    postRequest("getGame", { UUID: uuid }, setGame);
  }, []);

  return game ? (
    <div>
      <h1 className='title is-1'>
        {game.name} created by {game.creatorName}
        <br></br>
      </h1>
      <h6 className='likes'>
        {game.likes} - {game.tags}
      </h6>
      <h2 className='description'>
        {game.description}
        <br></br>
      </h2>
      <h2 className='rules'>
        {game.description}
        <br></br>
      </h2>
      <h3 className='rules'>
        Game Minimum Players: {game.minPlayers}
        <br></br>
      </h3>
      <h3 className='rules'>
        Game Maximum Players: {game.maxPlayers}
        <br></br>
      </h3>
    </div>
  ) : (
    <div>Pulling game info</div>
  );
};

export default ViewGame;
