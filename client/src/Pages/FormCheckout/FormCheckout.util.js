import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const number = ['1', '2', '3'];

export function processSubmission(formData, setErrorMessage, setFields, fields) {
    if(formData.formName === '') {
        setErrorMessage('The form needs a name!');
        return;
    }

    if(
        formData.firstName === false &&
        formData.lastName === false &&
        formData.email === false &&
        formData.username === false &&
        formData.password === false &&
        formData.city === false &&
        formData.state === false &&
        formData.phoneNumber === false &&
        formData.other === false
    )
    {
        setErrorMessage('The form must have at least one field!');
        return;
    }

    if(formData.other === true && formData.extraFields === '') {
        setErrorMessage('Additional fields are required. If you want no additional fields, uncheck \'Other\'!');
        return;
    }

    if(formData.numberOfForms === 0) {
        setErrorMessage('You must select the number of forms you want!');
        return;
    }

    setErrorMessage('');
    let fieldObj = formData.extraFields.split(',');
    for(let i = 0; i < fieldObj.length; i++) {
        if(fieldObj[i] !== '') {
            setFields([...fields, fieldObj[i]]);
        }
    }
    fieldObj = [];
    console.log(fields);
}

export function trackCheckmarks(e, formData, setFormData, setFields, fields) {
    if(formData[e.target.name] === false) {
        setFormData({ ...formData, [e.target.name]: true });
        setFields([...fields, e.target.name.toString()]);
    }
    else if(formData[e.target.name] === true) {
        setFormData({ ...formData, [e.target.name]: false });
    }
}