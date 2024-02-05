import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import neonKeyboard from '../../assets/images/neon-keyboard.jpg'
import Button from '@mui/material/Button';
import './Home.style.css';

function Homepage() {
  return (
    <>
        <img className={'neon-keyboard'} style={{ height: '60vh', width: '100%'}} src={neonKeyboard}></img>
        <Container 
            style={{ 
                display: 'flex', 
                justifyContent: 'center',
                paddingBottom: '5vh',
                paddingTop: '5vh' 
            }} 
            maxWidth='lg'
        >
            <Box sx={{ width: '100%', maxWidth: 500 }}>
                <Typography className={"heading"} variant="h6" gutterBottom style={{ display: 'flex', justifyContent:'center' }}>
                    A Market for Software
                </Typography>
                <Typography variant="body1" gutterBottom>
                    Greetings! Are you looking for a specific piece of software for your website, be it a form or table?
                    If so, you've come to the right place. Search this site for a variety of tools you can use for your website.
                </Typography>
                <Button variant="contained" style={{ marginTop: '2vh', marginLeft: '35%', width: '30%' }}>See Software</Button>
            </Box>
        </Container>
    </>
  );
}

export default Homepage