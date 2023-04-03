var express = require("express");
var router = express.Router();

router.get("/auth", async function (req, res, next) {

  const { code } = req.query
  const clientId = process.env.clientId
  const clientSecret = process.env.clientSecret
  const redirectURI = process.env.redirectURI

  let url = `https://graph.facebook.com/v6.0/oauth/access_token?redirect_uri=${redirectURI}&client_id=${clientId}&client_secret=${clientSecret}&code=${code}`
  const response = await fetch(url);

  console.log({
    message: "Auth responce",
    data: response
  });

  res.send({ message: url })


});

module.exports = router;
