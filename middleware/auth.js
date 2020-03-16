const config = require('config');
const jwt = require('jsonwebtoken');

function auth(req, res ,next ) {
    const token = req.header('x-auth-header');

    // check for token
    if (!token) res.status(401).json({ msg: 'No token, aithorization denied'});

    try{
        //verify token
        const decoded = jwt.verify(token,config.get('JWT_SECRET'));
        
        req.user = decoded;
        next();
    } catch(e){
        res.status(400).json({msg: 'Token is not valid'});
    }

}
module.exports = auth;