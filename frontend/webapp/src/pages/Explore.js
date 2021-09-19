import * as React from "react";
import { useState, useEffect } from "react";
import { Autocomplete, Button, TextField } from "@mui/material";
import { useHistory } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import postRequest from "../util/postRequest";
import "./Explore.css";

const Explore = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const history = useHistory();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    postRequest("getTags", {}, res => {
      console.log(res);
      setTags(res);
    });
    postRequest("queryGames", { tags: [] }, setSearchResults);
  }, []);

  return (
    <div className='root-container'>
      <div className='top-content-container' id='description'>
        <center><h1 className='title is-1'>Search for a game</h1></center>
        <p>Select tags for games you want to search for!</p>
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
            postRequest("queryGames", { tags: value }, setSearchResults);
          }}
          renderInput={params => (
            <TextField
              {...params}
              label='Tags'
              placeholder='Tags for the game you are looking for'
            />
          )}
        />

        {searchResults.length ? <center><h2>Game Results</h2></center> : ""}



        {searchResults
          .sort((g1, g2) => g2.likes - g1.likes)
          .map(game => {
            const { name, likes, UUID, description } = game;
            console.log(game);
            return (
              <Accordion key={UUID} expanded={expanded === UUID} onChange={handleChange(UUID)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>{name} [{likes} Likes]</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {description}
                  </Typography>
                  <center style={{ marginTop: 10 }}>
                    <Button
                      variant='contained'
                      disableElevation
                      onClick={() => {
                        history.push(`/view/${UUID}`);
                      }}
                    >More Details</Button>

                  </center>
                </AccordionDetails>
              </Accordion>
            );
          })}


        <br /><br /><br />
      </div>
    </div>
  );
};

export default Explore;
