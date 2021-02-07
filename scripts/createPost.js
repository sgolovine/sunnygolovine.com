// Script to create posts in the correct format
// For this blog
const args = process.argv;
const dayjs = require("dayjs");
const path = require("path");
const fs = require("fs");

if (args.length < 3) {
  console.log("Please enter a name for this post");
  process.exit(1);
}

const postName = args[2];

const postPath = path.resolve(process.cwd(), "posts", `${postName}.md`);

const postFrontmatter = `---
title: ${postName}
description: Post Description
date: ${dayjs().format("MMM DD, YYYY").toString()}
---
`;

try {
  if (fs.existsSync(postPath)) {
    console.log("ERR: The directory you are trying to create already exists");
    process.exit(1);
  } else {
    console.log("Creating post");
    fs.writeFileSync(postPath, postFrontmatter);
  }
} catch (e) {
  console.log("ERR: An unspecified error occurred.");
}

console.log(`
Post Created Successfully
---
Path: ${postPath}
Name: ${postName}
`);

process.exit(0);
