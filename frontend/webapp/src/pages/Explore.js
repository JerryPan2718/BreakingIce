import * as React from "react";
import { useState, useEffect } from "react";
import { Autocomplete, Button, TextField, Container } from "@mui/material";
import postRequest from "../util/postRequest";
import "./Explore.css";
import Card from "@mui/material/Card";

const Explore = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  useEffect(() => {
    postRequest("getTags", {}, res => {
      console.log(res);
      setTags(res);
    });
  }, []);

  return (
    <div className='root-container'>
      <div className='top-content-container' id='description'>
        <h1 className='title is-1'>How to Play the Game</h1>
        <p>LMFAO</p>
      </div>

      <div className='bottom-content-container' id='search bar'>
        <Autocomplete
          multiple
          limitTags={2}
          id='multiple-limit-tags'
          options={tags}
          defaultValue={[]}
          onChange={(_, value, reason, details) => {
            setSelectedTags(value);
            setSearchResults([]);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label='Type In the Game you Wanna Play...'
              placeholder='Favorites'
            />
          )}
        />
        <br />
        <Button
          variant='contained'
          disableElevation
          onClick={() => {
            postRequest("queryGames", { tags: selectedTags }, setSearchResults);
          }}
        >
          Search for Games
        </Button>
        <Card>
          {searchResults
            .sort((g1, g2) => g2.likes - g1.likes)
            .map(game => {
              const { name, likes, UUID } = game;
              return (
                <Container
                  key={UUID}
                  onClick={() => {
                    console.log(game);
                  }}
                >
                  {name} {likes}
                </Container>
              );
            })}
        </Card>
      </div>
    </div>
  );
};

export default Explore;
