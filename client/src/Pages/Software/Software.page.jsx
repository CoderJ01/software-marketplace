import * as React from 'react';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import neonKeyboard from '../../assets/images/neon-keyboard.jpg'
import Paper from '@mui/material/Paper';
import '../Home/Home.style.css';
import Link from '@mui/material/Link';
import form from '../../assets/images/form.jpg';
import table from '../../assets/images/table.jpg';

function Software() {
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
            <Box sx={{ width: '150%', maxWidth: 1000 }}>
                <Typography className={"heading"} variant="h6" gutterBottom style={{ display: 'flex', justifyContent:'center' }}>
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
                        <Paper elevation={3}>
                            <img src={form} alt="" style={{ height: '75%', width: '100%' }}/>
                            <Link href="/form-checkout" variant="body" gutterBottom style={{ display: 'flex', fontWeight: 'bold', justifyContent:'center' }}>
                                Forms
                            </Link>
                        </Paper>
                        <Paper elevation={3}>
                            <img src={table} alt="" style={{ height: '75%', width: '100%' }}/>
                            <Link href="/table-checkout" variant="body" gutterBottom style={{ display: 'flex', fontWeight: 'bold', justifyContent:'center' }}>
                                Tables
                            </Link>
                        </Paper>
                </Box>
            </Box>
        </Container>
    </>
  );
}

export default Software