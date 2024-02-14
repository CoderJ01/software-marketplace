import {
  makeStyles,
} from "@material-ui/core"

import * as Yup from "yup"

export const useStyle = makeStyles((theme) => ({
    padding: {
      padding: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(1),
    },
    margin: {
      marginTop: '15vh',
    }
}))
  
// Data
export const initialValues = {
    firstName: "",
    lastName: "",
    occupation: "",
    city: "",
    state: "",
    email: "",
    password: "",
}
  
export const options = [
    { label: "Automotive", value: "automotive" },
    { label: "Beauty", value: "beauty" },
    { label: "Education", value: "education" },
    { label: "Finance", value: "finance" },
    { label: "Healthcare", value: "health_care" },
    { label: "Information Technology", value: "information_technology" },
    { label: "Legal", value: "legal" },
    { label: "Restaurant", value: "restaurant" },
    { label: "Retail", value: "retail" },
]
  
// password validation
const lowercaseRegEx = /(?=.*[a-z])/
const uppercaseRegEx = /(?=.*[A-Z])/
const numericRegEx = /(?=.*[0-9])/
const lengthRegEx = /(?=.{6,})/

//validation schema
export let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
        .matches(
        lowercaseRegEx,
        "Must contain one lowercase alphabetical character!"
        )
        .matches(
        uppercaseRegEx,
        "Must contain one uppercase alphabetical character!"
        )
        .matches(numericRegEx, "Must contain one numeric character!")
        .matches(lengthRegEx, "Must contain 6 characters!")
        .required("Required!"),
})