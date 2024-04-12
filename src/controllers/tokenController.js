const Token = require('../models/tokenModel');

exports.getToken = async (req, res) => {
  try {
    const accessToken = await Token.getToken();
    res.status(200).json({ accessToken });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
