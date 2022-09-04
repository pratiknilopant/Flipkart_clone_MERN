
import User from "../model/UserScema.js";

export const userSignup = async(request, responce) => {
    try{

        const exist = await User.findOne({username: request.body.username});
        if(exist) {
            return responce.status(401).json({message: `username alredy exist`});
        }

        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        
        responce.status(200).json({message: user});
        
    } catch (error) {
        responce.status(500).json({message: error.message});

    }

}

export const userLogIn = async (request, response) => {
    try {

        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);
        return error.responce;        
    }
}