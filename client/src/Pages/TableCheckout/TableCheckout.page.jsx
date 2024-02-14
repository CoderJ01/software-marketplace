import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { TextField, Button, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';

import { Item, number } from '../FormCheckout/FormCheckout.util';
import { processSubmission } from './TableCheckout.util';

export default function TableCheckout() {
    const [formData, setFormData] = useState({ 
        tableName: '', 
        columns: '',
        rows: '',
        numberOfTables: 0, 
    });
    const [errorMessage, setErrorMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        processSubmission(formData, setErrorMessage);
    }

    return (
        <Box sx={{ width: '100%' }} style={{ marginTop: '100px', paddingBottom: '5vh' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
                <Item>
                    <React.Fragment>
                        <form autoComplete="off" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h2>Create Table</h2>
                            <TextField 
                                label="Table Name"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                                variant="outlined"
                                color="secondary"
                                type="text"
                                sx={{mb: 3}}
                                fullWidth
                                name="tableName"
                                value={formData.tableName}
                            />
                            <br/>
                            <Typography style={{ textAlign: 'left' }}variant="body2"> Separate desired columns using commas.</Typography>
                            <TextField 
                                label="Columns"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                                variant="outlined"
                                color="secondary"
                                type="text"
                                sx={{mb: 3}}
                                fullWidth
                                name="columns"
                                value={formData.columns}
                            />
                            <br/>
                            <Typography style={{ textAlign: 'left' }}variant="body2"> Separate desired rows using commas.</Typography>
                            <TextField 
                                label="Rows"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                                variant="outlined"
                                color="secondary"
                                type="text"
                                sx={{mb: 3}}
                                fullWidth
                                name="rows"
                                value={formData.rows}
                            />
                            <br/>
                            <TextField
                                id="outlined-select-currency"
                                select
                                label="Number of Forms"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: parseInt(e.target.value)})}
                                defaultValue="EUR"
                                helperText="Select the number of forms desired"
                                style={{
                                    width: '40%'
                                }}
                                name="numberOfTables"
                                value={formData.numberOfTables}
                            >
                                {number.map((option) => (
                                    <MenuItem value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <br/>
                            <Button onClick={handleSubmit} variant="outlined" color="secondary" type="submit" style={{ marginLeft: '40%', width: '20%' }}>Submit</Button>
                        </form>
                    </React.Fragment>
                    <br/>
                    <Typography style={{ color: 'red', fontWeight: 'bold', textAlign: 'left',  }}>{errorMessage}</Typography>
                </Item>
            </Grid>
            <Grid xs={6}>
                <Item style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Table Contents</h2>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Name:</span> {formData.tableName}</Typography>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Columns:</span> {formData.columns}</Typography>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Rows:</span> {formData.rows}</Typography>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Amount:</span> {formData.numberOfTables}</Typography>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Price:</span> $50.00</Typography>
                    <br/>
                    <Button variant="outlined" color="secondary" type="submit" style={{ marginLeft: '30%', width: '40%' }}>Confirm Order</Button>
                    <br/>
                </Item>
            </Grid>
        </Grid>
        </Box>
    );
}