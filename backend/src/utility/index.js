const { SECRET } = require('../constants');
const jwt = require('jsonwebtoken');

exports.TokenToUser = (token) => {
    try{
      console.log(token)
      const decodedToken = jwt.verify(token, SECRET);
      const userId = decodedToken.id;
      console.log(userId);
      return userId;
    }catch (e){
        console.log(e)
        throw e
    }
}