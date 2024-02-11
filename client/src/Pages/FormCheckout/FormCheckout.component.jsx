import * as React from 'react';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { TextField, Button, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const number = ['1', '2', '3'];  

export default function FormCheckout() {
    const [formData, setFormData] = useState({ 
        formName: '', 
        fields: { 
            firstName: false, 
            lastName: false, 
            email: false, 
            username: false, 
            password: false, 
            city: false, 
            state: false, 
            phoneNumber: false, 
            other: false 
        }, 
            numberOfForms: 0, 
    });

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }

    function handleCheckmark(e) {
        if(e.target.value === false) {
            setFormData({ ...formData, [e.target.name]: true });
        }
        else {
            setFormData({ ...formData, [e.target.name]: false })
        }
        console.log(e.target.value);
    }
    return (
        <Box sx={{ width: '100%' }} style={{ marginTop: '100px' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid xs={6}>
                <Item>
                    <React.Fragment>
                        <form autoComplete="off" style={{ display: 'flex', flexDirection: 'column'}}>
                            <h2>Create Form</h2>
                            <TextField 
                                label="Form Name"
                                onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                required
                                variant="outlined"
                                color="secondary"
                                type="email"
                                sx={{mb: 3}}
                                fullWidth
                                name="formName"
                                value={formData.formName}
                            />
                            <FormGroup>
                                <Typography variant="h6"style={{ textAlign: 'left' }}>Fields</Typography>
                                <Grid container spacing={3}>
                                    <Grid xs>
                                        <Item elevation={0} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormControlLabel name="fields.firstName" value={formData.fields.firstName} control={<Checkbox />} label="First Name" onClick={handleCheckmark}/>
                                            <FormControlLabel value={formData.fields.lastName} control={<Checkbox />} label="Last Name" />
                                            <FormControlLabel value={formData.fields.email} control={<Checkbox />} label="Email" />
                                        </Item>
                                    </Grid>
                                    <Grid xs>
                                        <Item elevation={0} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormControlLabel value={formData.fields.username} control={<Checkbox />} label="Username" />
                                            <FormControlLabel value={formData.fields.password} control={<Checkbox />} label="Passowrd" />
                                            <FormControlLabel value={formData.fields.city} control={<Checkbox />} label="City" />
                                        </Item>
                                    </Grid>
                                    <Grid xs>
                                        <Item elevation={0} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormControlLabel value={formData.fields.state} control={<Checkbox />} label="State" />
                                            <FormControlLabel value={formData.fields.phoneNumber} control={<Checkbox />} label="Phone Number" />
                                            <FormControlLabel value={formData.fields.other} control={<Checkbox />} label="Other" />
                                        </Item>
                                    </Grid>
                                </Grid>
                            </FormGroup>
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
                                name="numberOfForms"
                                value={formData.numberOfForms}
                            >
                                {number.map((option) => (
                                    <MenuItem value={option}>
                                    {option}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <br/>
                            <Button onClick={handleSubmit} variant="outlined" color="secondary" type="submit" style={{ width: '20%' }}>Submit</Button>
                        </form>
                    </React.Fragment>
                </Item>
            </Grid>
            <Grid xs={6}>
            <Item>2</Item>
            </Grid>
        </Grid>
        </Box>
    );
}