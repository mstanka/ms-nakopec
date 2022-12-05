const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((filePath) => {
    const source = fs.readFileSync(path.join(postsDirectory, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });
  return JSON.stringify(posts);
}

const fileContents = `export const posts = ${getPosts()}`;

try {
  fs.readdirSync("cache");
} catch (e) {
  fs.mkdirSync("cache");
}

fs.writeFile("cache/data.js", fileContents, function (err) {
  if (err) return console.log(err);
  console.log("Posts cached.");
});
