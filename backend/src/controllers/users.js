const { TokenToUser } = require('../utility')
const db = require('../db')

exports.getUserInfo = async (req, res)=>{
    console.log('Sending User Information ..... ')
    return res.status(200).json({
        success: "Sending User Information"
    })
}

exports.getSavedResources = async (req,res)=>{
    
}

// Edit our user profile given the token
/*
    body:{
        bio,
        profile_picture ( Pending )
    }
*/
exports.initSelfProfile = async (req, res)=>{
    const data = req.body;

    const bio = data.bio;
    const profilePicture = "";

    try {
        const token = req.cookies['token'];
        const userId = TokenToUser(token);
        console.log(userId);

        await db.query("INSERT INTO profiles(user_id, bio, profile_picture) VALUES ($1, $2, $3)",[userId, bio, profilePicture]);

        // Assuming there is only one row because of unique constraint in the database
        return res.status(200).json({
            success: true,
            message: `Profile Created for user: ${userId}, bio: ${bio}`
        })
    } catch (error) {
        console.error('Invalid token', error);
        return res.status(500).json({
            error: error.message,
        })
    }
}

// Editing just a subset of the stuff or all of the stuff => done
exports.editSelfProfile = async (req, res)=>{
    const data = req.body;

    const bio = data.bio;
    const profilePicture = data.profilepicture;

    const map = {
        "bio": bio,
        "profile_picture": profilePicture
    }

    let updateQuery = "UPDATE profiles SET  ";

    let tempStr = "";

    for (const key in map) {
        const element = map[key];
        
        if(element){
            if(tempStr !== ""){
                tempStr += ',';
            }
            
            // TODO: NO need to do like this, just add $1 and $2's and maintain an array of params to pass through
            // Maybe write a utility function to handle this thing
            if(typeof element === 'string'){
                tempStr += `${key} = '${element}'`;
            }else if(typeof element === 'number'){
                tempStr += `${key} = ${element}`;
            }
        }
    }

    if(tempStr === ""){
        return res.status(204).send();
    }

    updateQuery += tempStr;

    try {
        const token = req.cookies['token'];
        const userId = TokenToUser(token);
        console.log(userId);

        updateQuery += ` WHERE user_id = ${userId}`;
        // Update query
        console.log(updateQuery);
        await db.query(updateQuery);

        // Assuming there is only one row because of unique constraint in the database
        return res.status(200).json({
            success: true,
            message: "Profile Updated"
        })
    } catch (error) {
        console.error('Invalid token', error);
        return res.status(500).json({
            error: error.message,
        })
    }
}

// Get the user profile given the token
exports.getSelfProfile = async (req, res)=>{
    // getting self profile
    try {
        const token = req.cookies['token'];
        const userId = TokenToUser(token);
        console.log(userId);

        
        const { rows } = await db.query("SELECT * FROM profiles WHERE user_id = $1",[userId]);

        const Ret = {
            ...rows[0]
        }

        // Assuming there is only one row because of unique constraint in the database
        return res.status(200).json(Ret)
    } catch (error) {
        console.error('Invalid token', error);
        return res.status(500).json({
            error: error.message,
        })
    }
}

// Get the user profile based on the user_id provided
exports.getUserProfile = async (req, res)=>{
    // getting profile from id
    const data = req.body;

    const userId = data.userid;
    try {
        console.log(userId);

        const { rows } = await db.query("SELECT * FROM profiles WHERE user_id = $1",[userId]);

        const Ret = {
            ...rows[0]
        }

        // Assuming there is only one row because of unique constraint in the database
        return res.status(200).json(Ret)
    } catch (error) {
        console.error('Invalid token', error);
        return res.status(500).json({
            error: error.message,
        })
    }
}