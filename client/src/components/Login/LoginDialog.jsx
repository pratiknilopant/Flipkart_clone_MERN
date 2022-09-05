import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, TextField, Typography } from '@mui/material';
import styled from '@emotion/styled';
import { useState, useContext } from 'react';
import { authenticateSignup, authenticateLogin } from '../../Service/api';
import { DataContext } from '../../Context/DataProvider';

const Component = styled(Box)`
    height: 100vh;
    width : 100vh;
`
const Wrapper = styled(Box)`
    display: flex;
    flex-direction:column;
    padding: 8px 30px;
    flex: 1;
    & > div, & > Button, & > p {
        margin-top: 20px;
        font-weight: 600;
    }

`
const Image = styled(Box)`
    background : #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 82%;
    width: 28%;
    padding: 45px 35px;
    color: #fff;
    & > p {
        color: #fff;
        padding-top: 10px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb6416;
    color: #fff;
    height: 40px;
    border-radius: 2px;
    margin-bottom: 20px;
`
const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`
const CreateAccount = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    text-align: center;
    cursor: pointer;
`
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const accountinitialValues = {
    login: {
        view: 'login',
        heading: `Login`,
        subHeading: `Get access to your Orders, Wishlist and Recommendations`
    },
    signup: {
        view: 'signup',
        heading: `Looks like you're new here!`,
        subHeading: `Sign up with your mobile number to get started`

    }
}

const signupInitialValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
}

const loginInitialValues = {
    username: '',
    password: ''
};

const LoginDialog = ({ open, setOpen }) => {

    const [account, toggleAccount] = useState(accountinitialValues.login);
    const [signup, setSignup] = useState(signupInitialValue);
    const [ login, setLogin ] = useState(loginInitialValues);
    const [ error, showError] = useState(false);

    const { setAccount } = useContext(DataContext);

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountinitialValues.login);
        showError(false);
    };

    const toggleSignup = () => {
        toggleAccount(accountinitialValues.signup);
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    const signupUser = async () => {
        let responce = await authenticateSignup(signup);
        if (!responce) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const loginUser = async() => {
        let response = await authenticateLogin(login);
        if(!response) 
            showError(true);
        else {
            showError(false);
            handleClose();
            setAccount(login.username);
        }
    }

    return (
        <Dialog onClose={handleClose} open={open} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: '20' }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />
                                {error && <Error>Please enter valid Email ID/Mobile number</Error>}
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={() => loginUser()} >Login</LoginButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField label="Enter Firstname" onChange={(e) => onInputChange(e)} name='firstname' variant="standard" />
                                <TextField label="Enter Lastname" onChange={(e) => onInputChange(e)} name='lastname' variant="standard" />
                                <TextField label="Enter Username" onChange={(e) => onInputChange(e)} name='username' variant="standard" />
                                <TextField label="Enter Email" onChange={(e) => onInputChange(e)} name='email' variant="standard" />
                                <TextField label="Enter Password" onChange={(e) => onInputChange(e)} name='password' variant="standard" />
                                <TextField label="Enter Phone" onChange={(e) => onInputChange(e)} name='phone' variant="standard" />
                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog
