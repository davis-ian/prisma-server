const { PrismaClient } = require("@prisma/client");
const express = require("express");

const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient();
const app = express();

app.use(express.json());

const postsRoute = require("./routes/posts");

app.use("/posts", postsRoute);

// app.get("/", async (req, res) => {
//   res.json({ message: "Hello World!" });
// });

// app.get("/users", async (req, res) => {
//   const users = await prisma.user.findMany();
//   res.json(users);
// });

// app.get("/users/:id", async (req, res) => {
//   const id = parseInt(req.params.id);
//   const user = await prisma.user.findUnique({
//     where: {
//       id: id,
//     },
//   });

//   if (user) {
//     res.json(user);
//   } else {
//     res.json({ message: `User ${id} not found..` });
//   }
// });

// app.get("/posts", async (req, res) => {
//   const posts = await prisma.post.findMany();
//   res.json(posts);
// });

app.listen(PORT, () =>
  console.log(`
🚀 Server ready at: http://localhost:${PORT}
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`)
);
