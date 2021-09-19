import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import "./Explore.css";
import Card from "@mui/material/Card";

const Explore = () => (
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
        options={top100Films}
        getOptionLabel={option => option.tags}
        defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
        renderInput={params => (
          <TextField
            {...params}
            label='Type In the Game you Wanna Play...'
            placeholder='Favorites'
          />
        )}
      />
      <Card></Card>
    </div>
    <div></div>
  </div>
);

let top100Films = [];
for (let i = 0; i < 100; i++) {
  top100Films.push({
    UUID: `${i}`,
    name: `${i}`,
    description: `${i}`,
    rules: `${i}`,
    creatorName: `${i}`,
    minPlayers: `${i}`,
    maxPlayers: `${i}`,
    likes: `${i}`,
    tags: `${i}`
  });
}
console.log(top100Films);

export default Explore;
