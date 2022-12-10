// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getSortedPostsData } from "../../lib/posts";

const posts =
  process.env.NODE_ENV === "production"
    ? require("../../cache/data").posts
    : getSortedPostsData();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req, res) => {
  const myQuery = req.query.q.toLowerCase();
  const results = myQuery
    ? posts.filter((post) => post.data.title.toLowerCase().includes(myQuery))
    : [];
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ results }));
};
