import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';

const URl = 'http://localhost:8080';

export const addToCart = (id, quantity) => async (dispatch) => {
    try { 
        const { data } = await axios.get(`${URl}/product/${id}`);

        dispatch({ type: actionTypes.ADD_TO_CART, payload: { ...data, quantity } });

    } catch (error) {
        console.log('Error while calling cart API', error.message);
    }
};

export const removeFromCart = (id) => (dispatch) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    })

};