import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function GameItem(props) {
  return (
    <Card sx={{ height: 250, backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
      <CardContent>
        <Typography sx={{ fontSize: 24 }} color="text.primary" gutterBottom align='center'>
          {props.name}
        </Typography>
        {props.tags.map((tag,index)=>{
            return <Typography variant='button' sx={{ fontSize: 14, padding: 3}} gutterBottom color='text.secondary'>
                    {tag}
                    </Typography>
        })}
        <Typography sx={{ mb: 1.5, paddingTop: 1 }} color="text.primary">
            Description
        </Typography>
        <Typography variant="body2">
            {props.description}
        </Typography>
      </CardContent>
    </Card>
  );
}