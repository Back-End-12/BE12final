const jwt = require('jsonwebtoken');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');

const requireAuth = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
      ) {
        try {
          token = req.headers.authorization.split(" ")[1];
    
          //decodes token id
          const decoded = jwt.verify(token, 'febe15');
    
          req.user = await User.findById(decoded.id).select("-password");
    
          next();
        } catch (error) {
          res.status(401);
          throw new Error("Not authorized, token failed");
        }
      }
    
      if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
      }
})

const isAdmin = asyncHandler(async(req, res, next) => {
    if (req.user.role == 'admin'){
        next()
      }else{
        res.status(400);
        throw new Error('anda bukan admin');
      }
})

module.exports = { requireAuth, isAdmin }