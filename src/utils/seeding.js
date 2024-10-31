const { createPost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");

async function seed () {
    await createPost("Example title", "Example content blah blah");



    console.log("Seeding is completed, disconnecting from database");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
});
