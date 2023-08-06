const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  const postFilePaths = fs.readdirSync(postsDirectory);
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postsDirectory, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts.sort((a, b) => {
    if (a.data.date < b.data.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getFavoritePostsData() {
  const postFilePaths = fs.readdirSync(postsDirectory);
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postsDirectory, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts
    .filter((post) => post.data.favorite)
    .sort((a, b) => {
      if (a.data.date < b.data.date) {
        return 1;
      } else {
        return -1;
      }
    });
}
