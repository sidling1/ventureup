// exports.getUserInfo = async (req, res)=>{
//     console.log('Sending User Information ..... ')
//     return res.status(200).json({
//         success: "Sending User Information"
//     })
// }

// exports.getSavedResources = async (req,res)=>{
    
// }

///// Resources Controller ///////

// Upload Resource Functionality ( For now resource upload will not be into our database, it will be external and there will just be a link to it )

const jwt = require('jsonwebtoken');
const db = require('../db');
const { SECRET } = require('../constants');

exports.uploadNewResource = async (req,res)=>{
    const data = req.body;

    const title = data.title;
    const description = data.description;
    const file_url = data.file_url;

    try {
        const token = req.cookies['token'];
        const decodedToken = jwt.verify(token, SECRET);
        const userId = decodedToken.id;
        console.log(userId);

        // Now we have the user who uploaded
        await db.query("INSERT INTO resources(title, description, file_url, user_id) VALUES ($1, $2, $3, $4);",[
            title,
            description,
            file_url,
            userId
        ]);

        return res.status(200).json({
            success : true,
            message: "Resource Uploaded Successfully"
        });

    } catch (error) {
        console.error('Invalid token', error);
        return res.status(500).json({
            error: error.message,
        })
    }
}

// View / Get reources Functionality
exports.getResourcefromId = async (req,res) =>{
    const data = req.body;

    const res_id = data.res_id;

    try {
        // got the resource information
        const { rows : Resource } = await db.query("SELECT * FROM resources WHERE resource_id = $1", [res_id]);
        console.log(Resource);

        if(Resource.length != 1){
            console.error("Duplicate Resources Detected, Server Error !!!!!!");
            return res.status(500).json({
                error: "Server/Database Error",
            })
        }

        // retrieve all the comments
        const { rows: Comments } = await db.query("SELECT * FROM comments WHERE resource_id = $1 ORDER BY created_at DESC", [res_id]);

        const Ret = {
            ...Resource[0],
            comments: Comments
        }

        // Assuming there is only one row because of unique constraint in the database
        return res.status(200).json(Ret);
    } catch (error) {
        console.error('Invalid token', error);
        return res.status(500).json({
            error: error.message,
        })
    }
}