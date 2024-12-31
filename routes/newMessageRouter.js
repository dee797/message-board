const { Router } = require("express");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
    res.render("form");
});
newMessageRouter.post("/", (req, res) => {
    res.app.locals.messages.push({text: req.body.text, user: req.body.user, added: new Date()});
    res.redirect("/");
});

module.exports = newMessageRouter;