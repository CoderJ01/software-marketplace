import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { TextField, Button, Typography } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { Item, number, processSubmission, trackCheckmarks } from './FormCheckout.util';

export default function FormCheckout() {
    const [formData, setFormData] = useState({ 
        formName: '', 
        // checkboxes
        firstName: false,
        lastName: false, 
        email: false, 
        username: false, 
        password: false, 
        city: false, 
        state: false, 
        phoneNumber: false, 
        other: false,
        // 
        extraFields: '',
        numberOfForms: 0, 
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [fields, setFields] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        processSubmission(formData, setErrorMessage, setFields, fields);
    }

    function handleCheckmark(e) {
        trackCheckmarks(e, formData, setFormData, setFields, fields)
    }

    return (
        <Box sx={{ width: '100%' }} style={{ marginTop: '100px', paddingBottom: '5vh' }}>
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
                                type="text"
                                sx={{mb: 3}}
                                fullWidth
                                name="formName"
                                value={formData.formName}
                            />
                            <FormGroup>
                                <Typography variant="h6"style={{ color: '#3f51b5', textAlign: 'left' }}>Fields</Typography>
                                <Grid container spacing={3}>
                                    <Grid xs>
                                        <Item elevation={0} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormControlLabel name="firstName" value={formData.firstName} control={<Checkbox />} label="First Name" onClick={handleCheckmark}/>
                                            <FormControlLabel name="lastName" value={formData.lastName} control={<Checkbox />} label="Last Name" onClick={handleCheckmark}/>
                                            <FormControlLabel name="email" value={formData.email} control={<Checkbox />} label="Email" onClick={handleCheckmark}/>
                                        </Item>
                                    </Grid>
                                    <Grid xs>
                                        <Item elevation={0} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormControlLabel name="username" value={formData.username} control={<Checkbox />} label="Username" onClick={handleCheckmark}/>
                                            <FormControlLabel name="password" value={formData.password} control={<Checkbox />} label="Passowrd" onClick={handleCheckmark}/>
                                            <FormControlLabel name="city" value={formData.city} control={<Checkbox />} label="City" onClick={handleCheckmark}/>
                                        </Item>
                                    </Grid>
                                    <Grid xs>
                                        <Item elevation={0} style={{ display: 'flex', flexDirection: 'column' }}>
                                            <FormControlLabel name="state" value={formData.state} control={<Checkbox />} label="State" onClick={handleCheckmark}/>
                                            <FormControlLabel name="phoneNumber" value={formData.phoneNumber} control={<Checkbox />} label="Phone Number" onClick={handleCheckmark}/>
                                            <FormControlLabel name="other" value={formData.other} control={<Checkbox />} label="Other" onClick={handleCheckmark}/>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </FormGroup>
                            {
                                formData.other === false ? (''):
                                (
                                    <>
                                    <Typography variant="body" style={{ textAlign: 'left' }}>Add any additional fields you want your form to display.</Typography>
                                    <Typography variant="body" style={{ textAlign: 'left' }}>Separate the names of the fields using commas.</Typography>
                                    <TextField 
                                        required
                                        style={{ width: '40%' }}
                                        label="Additional Fields"
                                        onChange={(e) => setFormData({ ...formData, [e.target.name]: e.target.value })}
                                        variant="outlined"
                                        color="secondary"
                                        type="text"
                                        sx={{mb: 3}}
                                        fullWidth
                                        name="extraFields"
                                        value={formData.extraFields}
                                    />
                                    </>
                                )
                            }
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
                            <Button onClick={handleSubmit} variant="outlined" color="secondary" type="submit" style={{ marginLeft: '40%', width: '20%' }}>Submit</Button>
                        </form>
                    </React.Fragment>
                    <br/>
                    <Typography style={{ color: 'red', fontWeight: 'bold', textAlign: 'left',  }}>{errorMessage}</Typography>
                </Item>
            </Grid>
            <Grid xs={6}>
                <Item style={{ display: 'flex', flexDirection: 'column' }}>
                    <h2>Form Contents</h2>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Name:</span> {formData.formName}</Typography>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Fields:</span> {fields.map(field => { return `${field}, ` })}</Typography>
                    <br/>
                    <Typography style={{ textAlign: 'left' }} variant="h6"><span style={{ color: '#3f51b5' }}>Amount:</span> {formData.numberOfForms}</Typography>
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