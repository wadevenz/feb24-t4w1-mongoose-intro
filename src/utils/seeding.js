const { createPost, findManyPosts, findOnePost } = require("./crud/PostCrud");
const { dbConnect, dbDisconnect } = require("./database");

async function seed () {
    await createPost("Example title", "Example content blah blah");

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
