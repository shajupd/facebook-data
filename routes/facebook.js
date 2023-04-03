var express = require("express");
var router = express.Router();
const bizSdk = require("facebook-nodejs-business-sdk");

router.get("/", function(req, res, next) {
  const accessToken =
    "EAABllyF5F8MBAKQQ9ffb0vpe8UWanJdJQdCFSDcbOhPcaPn9rweMpvdhyq95WOfd9CBLdR1Jutl3aZCYTDznrjlzmKRy7szZBt0XtaAvF2ZARNLXj0p7dUWZCwDZBveZAZAYFM3SHaqPZCz5xYvel4GE4AEbU1n20yT0BaLqKTZCfTWjLFdZC9BW2HAggrcAnQz04ZD";
  const accountId = "act_111699776051139";

  const FacebookAdsApi = bizSdk.FacebookAdsApi.init(accessToken);
  const AdAccount = bizSdk.AdAccount;

  const account = new AdAccount(accountId);

  account
    .read([AdAccount.Fields.name])
    .then(account => {
      return account.getCampaigns();
    })
    .catch(error => {});

  res.send("ok!");
});

module.exports = router;
