const db = require("../helpers/db");
const Answer = db.Answer;
const User = db.User;


async function answer(id, req) {
    console.log("finding id: ", id);
    var user = await User.findById(id);
    // check if answer are valid
    const validAnswers = ['Barcelone', 'Madrid', 'Malaga', 'FelipeVI', 'FelipeV', 'FelipeIII'];
    if (validAnswers.includes(req.answer1) === false || validAnswers.includes(req.answer2) === false) {
        console.log("invalid answers");
        return "invalid answers"
    }
    const AnswerExist = await Answer.findOne({})
    if (!AnswerExist) {
        //If doesnt exists
        await Answer.create({});
    }
    // if collection answer n'existe pas la cree sinon update les array avec users id
    if (req.answer1 == "Barcelone") {
        await Answer.updateOne({ $push: { Barcelone: [user._id] } },);
    }
    if (req.answer1 == "Madrid") {
        await Answer.updateOne({ $push: { Madrid: [user._id] } },);
    } if (req.answer1 == "Malaga") {
        await Answer.updateOne({ $push: { Malaga: [user._id] } },);
    } if (req.answer2 == "FelipeVI") {
        await Answer.updateOne({ $push: { FelipeVI: [user._id] } },);
    } if (req.answer2 == "FelipeV") {
        await Answer.updateOne({ $push: { FelipeV: [user._id] } },);
    } if (req.answer2 == "FelipeIII") {
        await Answer.updateOne({ $push: { FelipeIII: [user._id] } },);
    }
    // modify play:true
    await User.updateOne({_id: user._id}, { $set: {play: true}});
    // puis si il a les bonnes réponse ajouter dans userwin
    if (req.answer1 == "Madrid" && req.answer2 == "FelipeVI") {
        await Answer.updateOne({ $push: { usersWin: [user._id] } },);
    }
    //update user
    return "Message envoyé";
}
async function getAll() {
    return await Answer.find();
}
async function draw() {
    var winner5 = []
    // get array userWin
    const userWinData = await Answer.find({}).select('usersWin')
    // console.log(userWinData[0]['usersWin']);
    let userWin = userWinData[0]['usersWin']
    // random array userWin 
    for (let i = 0; i < 5; i++) {
        var winner = userWin[Math.floor(Math.random()*userWin.length)];
        console.log(winner);
        // move winner to winner 5
        winnerData = await User.findById(winner)
        console.log(winnerData);
        winner5.push(winnerData)
        const index = userWin.indexOf(winner);
        if (index > -1) { // only splice array when item is found
            userWin.splice(index, 1); // 2nd parameter means remove one item only
        }
    }
    return winner5;
}

module.exports = {
    answer,
    getAll,
    draw
};
