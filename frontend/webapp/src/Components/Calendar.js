import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Save';
import CalendarPickerSkeleton from '@mui/lab/CalendarPickerSkeleton';
// or
// import { CalendarPickerSkeleton } from '@mui/lab';

const App = () => {
    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <Typography variant="h6">'

                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
