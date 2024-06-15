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