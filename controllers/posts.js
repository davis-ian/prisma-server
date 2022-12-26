const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const POST = prisma.post;

// const testPost = (req, res, next) => {
//   res.json({ message: "POST new blog post" });
// };

const listPosts = async (req, res, next) => {
  const posts = await prisma.post.findMany();

  res.status(200).send(posts);
};

const getPost = async (req, res, next) => {
  const id = parseInt(req.params.id);

  const post = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });

  res.status(200).send(post);
};

const newPost = async (req, res, next) => {
  const { title, content } = req.body;

  const post = await prisma.post.create({
    data: {
      title,
      content,
      authorId: 1,
    },
  });
  res.status(200).send(post);
};

module.exports = {
  //   testPost,
  getPost,
  newPost,
  listPosts,
};
