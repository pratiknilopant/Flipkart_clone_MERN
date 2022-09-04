import express from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import Connection from "./Database/db.js";
import DefaultData from './default.js'
import Router from "./Routes/route.js";
import cors from 'cors'
import { v4 as uuid } from 'uuid';

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', Router);

const PORT = process.env.PORT || 8080 ;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = process.env.MONGODB_URL || `mongodb://${USERNAME}:${PASSWORD}@ac-aqmzkat-shard-00-00.rv50uhx.mongodb.net:27017,ac-aqmzkat-shard-00-01.rv50uhx.mongodb.net:27017,ac-aqmzkat-shard-00-02.rv50uhx.mongodb.net:27017/?ssl=true&replicaSet=atlas-ccmdut-shard-0&authSource=admin&retryWrites=true&w=majority`;



Connection(URL);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
}

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`))

DefaultData();

export let paytmMerchantkey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'https://flipkartmernclone.herokuapp.com/callback'
paytmParams['EMAIL'] = 'pratiknilopant98@gmail.com'
paytmParams['MOBILE_NO'] = '1234567852'