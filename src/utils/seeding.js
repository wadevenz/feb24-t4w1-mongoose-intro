const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { createUser } = require("./crud/UserCrud");
const { dbConnect, dbDisconnect } = require("./database");

require("dotenv").config();

async function seed () {
    // await dbConnect();

    let newUser = await createUser("wadev", true, "wadev@email.com");

    await createPost(
        "Example title", 
        "Example content blah blah",
        newUser.id
    );

    let resultFindOne = await findOnePost({title: "Example title" , content: "Example content blah blah"});

    console.log(resultFindOne.title);
    console.log(resultFindOne._id);
    console.log(resultFindOne.id);

    // let resultFindMany = await findManyPosts({title: "Nonexistent title"});
    // console.log(resultFindMany);

    console.log("Seeding is completed, disconnecting from database");
    await dbDisconnect();
}

dbConnect().then(() => {
    console.log("Connected to DB, seeding now!");
    seed();
});
