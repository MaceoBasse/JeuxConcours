const express = require("express");
const router = express.Router();
const answerServices = require("../services/answer.services");
const jwt = require("../helpers/jwt");
const Role = require("../helpers/role");
//routes
router.post("/answer", jwt(), answer);
router.get("/", jwt(Role.Admin), getAll);
router.get("/draw", jwt(Role.Admin), draw);

module.exports = router;

//route functions

function answer(req, res, next) {
    console.log(req);
    // empecher les admins de jouer
    answerServices
        .answer(req.user.sub,req.body)
        .then((answers) => res.json(answers))
        .catch((error) => next(error));
}

function getAll(req, res, next) {
    const currentUser = req.user;
    if (currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: "Not Authorized!" });
    }
    answerServices
        .getAll()
        .then((answers) => res.json(answers))
        .catch((err) => next(err));
}
function draw(req, res, next) {
    const currentUser = req.user;
    if (currentUser.role !== Role.Admin) {
        return res.status(401).json({ message: "Not Authorized!" });
    }
    answerServices
        .draw()
        .then((answers) => res.json(answers))
        .catch((error) => next(error));

}

