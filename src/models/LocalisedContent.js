const mongoose = require("mongoose");

const LocalisedContentSchema = new mongoose.Schema({
    languageCode: {
        type: String,
        required: true,
        default: "en" //- English fr- French, ko- Korean
    },
    content: {
        type: String,
        required: true
    }
});

// DO not want a model, subdocuments are just schemas
// const LocalisedContentModel = mongoose.model("localisedContent", LocalisedContentSchema);

module.exports = {
    LocalisedContentSchema
}