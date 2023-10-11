const jwt = require("jsonwebtoken");

const generateToken = (res, userId) => {
  // takes in  object with a payload, secret, duration
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });

  // set it as HTTP-Only cookie
  // name,value,options
  res.cookie("jwt", token, {
    //client side JS cannot access this - to reduce XSS attacks
    httpOnly: true,
    // only send over HTTPS
    // set to true during production
    secure: false,
    // restricts cookies to current site
    // reducing CSRF risks
    sameSite: "strict",
    // duration till it expires(ms)
    maxAge: 1 * 24 * 60 * 60 * 1000, // 1 day,
  });
};

module.exports = generateToken;
