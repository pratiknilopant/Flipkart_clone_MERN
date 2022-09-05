import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantkey } from '../server.js';
// import formidable from 'formidable';
// import https from 'https';

 export const addPaymentGateway = async (request, response) => {
    let paytmCheckSum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantkey);
    try {
        let params = {
            ...paytmParams,
            'CHECKSUMHASH': paytmCheckSum
        };
        response.status(200).json(params);
    } catch (error) {
        response.status(500).json({error: error.message});
    }
 }

//  export const paymentResponse = (request, response) => {

//     const form = new formidable.IncomingForm();
//         let paytmCheckSum = request.body.CHECKSUMHASH;
//         delete request.body.CHECKSUMHASH;

//         var isVerifySignature = paytmchecksum.verifySignature(request.body, paytmMerchantkey, paytmCheckSum);
//         console.log(isVerifySignature);
//         if (isVerifySignature) {
//             var paytmParams = {};
//             paytmParams["MID"] = request.body.MID;
//             paytmParams["ORDERID"] = request.body.ORDERID;

//             paytmchecksum.generateSignature(paytmParams, paytmMerchantkey).then(function (checksum) {

//                 paytmParams["CHECKSUMHASH"] = checksum;

//                 var post_data = JSON.stringify(paytmParams);

//                 var options = {

//                     hostname: 'securegw-stage.paytm.in',
//                     port: 443,
//                     path: '/order/status',
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Content-Length': post_data.length
//                     }
//                 };

//                 var res = "";
//                 var post_req = https.request(options, function (post_res) {
//                     post_res.on('data', function (chunk) {
//                         res += chunk;
//                     });

//                     post_res.on('end', function () {
//                         let result = JSON.parse(res)
//                         response.redirect(`http://localhost:3000/`)
//                     });
//                 });
//                 post_req.write(post_data);
//                 post_req.end();
//             });
//         } else {
//             console.log("Checksum Mismatched");
//         }
//     console.log('//////////////end')
// }
 
 