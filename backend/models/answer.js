const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({ 
    Barcelone: { type: [String] },
    Madrid: { type: [String] },
    Malaga: { type: [String] },
    FelipeVI: { type: [String] },
    FelipeV: { type: [String] },
    FelipeIII: { type: [String] },
    usersWin: { type: [String] }
});

module.exports = mongoose.model("Answer", schema);
