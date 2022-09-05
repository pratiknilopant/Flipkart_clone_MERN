import axios from 'axios'

const URL = 'http://localhost:8080';

export const authenticateSignup = async(data) => {
    try {
       return await axios.post(`${URL}/signup`, data)

    } catch (error) {
        console.log('Error while calling signup api', error.message)
    }
}

export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('error while calling login API: ', error);
    }
}

export  const payUsingPaytm = async (data) => {
    try {
        let response = await axios.post(`${URL}/payment`, data);
        return response.data;
    } catch (error) {
        console.log('Error while calling payment Api', error);
    }
}