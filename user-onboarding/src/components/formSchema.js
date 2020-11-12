// adding yup and forming the structure for the schema
// calling each field

import * as yup from 'yup';

export default yup.object().shape({
    name: yup
        .string()
        .required('Name is Required')
        .min(5, 'name must be longer then 5 characters'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
    password: yup
        .string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is Required'),
    // position: yup
    //     .string()
    //     .oneOf(['Team Leader', 'Frontend Engineer', 'Backend Engineer', 'UI/UX Designer'], 'You must select a position')
    //     .required('You must select a position'),
    // title: yup
    //     .string()
    //     .required("Must select one"),
    termsOfService: yup
        .string()
        .required("Must check")
})