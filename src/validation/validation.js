import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    name:yup.string().min(2,"too short").max(50,"too long").required('Required'),
    email:yup.string().email('invalid email').required('Required'),
    password:yup.string().required("password is required").min(8).max(20)
})

export const loginSchema = yup.object().shape({
    email:yup.string().email('invalid email').required('Required'),
    password:yup.string().required("password is required").min(8).max(20)
})