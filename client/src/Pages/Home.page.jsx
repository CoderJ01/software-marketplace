import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import neonKeyboard from '../assets/images/neon-keyboard.jpg'

function Homepage() {
  return (
    <>
        <img style={{ height: '60vh', width: '100%'}} src={neonKeyboard}></img>
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
            <Typography variant="h6" gutterBottom style={{ display: 'flex', justifyContent:'center' }}>
                A Market for Software
            </Typography>
            <Typography variant="body1" gutterBottom>
                Greetings! Are you looking for a specific piece of software for your website, be it a form or table?
                If so, you've come to the right place. Search this site for a variety of tools you can use for your website.
            </Typography>
            </Box>
        </Container>
    </>
  );
}

export default Homepage