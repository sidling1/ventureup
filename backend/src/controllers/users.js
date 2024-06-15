exports.getUserInfo = async (req, res)=>{
    console.log('Sending User Information ..... ')
    return res.status(200).json({
        success: "Sending User Information"
    })
}