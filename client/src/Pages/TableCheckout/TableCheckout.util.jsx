export function processSubmission(formData, setErrorMessage) {
    if(formData.tableName === '') {
        setErrorMessage('Table must have a name!');
        return;
    }

    if(formData.columns === '') {
        setErrorMessage('Table must have at least one column!');
        return;
    }

    if(formData.rows === '') {
        setErrorMessage('Table must have at least one row!');
        return;
    }

    setErrorMessage('');
}