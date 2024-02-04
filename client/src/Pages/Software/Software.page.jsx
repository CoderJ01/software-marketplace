import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import neonKeyboard from '../../assets/images/neon-keyboard.jpg'
import Paper from '@mui/material/Paper';

function Software() {
  return (
    <>
        <img style={{ height: '60vh', width: '100%'}} src={neonKeyboard}></img>
        <Container 
            style={{ 
                border: 'green solid 2px',
                display: 'flex', 
                justifyContent: 'center',
                paddingBottom: '5vh',
                paddingTop: '5vh' 
            }} 
            maxWidth='lg'
        >
            <Box sx={{ width: '150%', maxWidth: 1000, border: '1px solid red' }}>
                <Typography variant="h6" gutterBottom style={{ display: 'flex', justifyContent:'center' }}>
                    Software
                </Typography>
                <Box
                    sx={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            '& > :not(style)': {
                            m: 4,
                            width: 128,
                            height: 128,
                        },
                        justifyContent: 'center',
                        paddingBottom: '3vh'
                    }}
                    >
                        <Paper elevation={3}></Paper>
                        <Paper elevation={3}></Paper>
                </Box>
            </Box>
        </Container>
    </>
  );
}

export default Software