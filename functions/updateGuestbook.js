// Update guestbook gist
require("dotenv").config();
const axios = require("axios");
const { clean } = require("unzalgo");
const createDOMPurify = require("dompurify");
const { JSDOM } = require("jsdom");

exports.handler = async function (event, _context, callback) {
  const {
    GUESTBOOK_GIST_ID,
    GUESTBOOK_GH_TOKEN,
    GUESTBOOK_FILENAME,
  } = process.env;
  try {
    const bodyContent = JSON.parse(event.body);
    const { userMessage } = bodyContent;

    if (!userMessage) {
      callback(null, { statusCode: 400, body: "Missing Params!" });
      return;
    }

    // Sanitation
    // Remove Zalgo Characters
    const removeZalgo = clean(userMessage);
    // DOM Purify
    const window = new JSDOM("").window;
    const DOMPurify = createDOMPurify(window);
    const domPurified = DOMPurify.sanitize(removeZalgo).trim();

    const getResp = await axios({
      method: "GET",
      url: `https://api.github.com/gists/${GUESTBOOK_GIST_ID}`,
      headers: {
        Authorization: `Bearer ${GUESTBOOK_GH_TOKEN}`,
      },
    });

    const currentContent = getResp.data.files[GUESTBOOK_FILENAME].content;

    const newContent = domPurified + "\n" + currentContent;

    const updateResp = await axios({
      method: "PATCH",
      url: `https://api.github.com/gists/${GUESTBOOK_GIST_ID}`,
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `Bearer ${GUESTBOOK_GH_TOKEN}`,
      },
      data: {
        files: {
          [GUESTBOOK_FILENAME]: {
            content: newContent,
          },
        },
      },
    });

    console.log(updateResp.statusCode);

    callback(null, { statusCode: 201, body: "Success!" });
  } catch {
    callback(null, { statusCode: 400, body: "Error!" });
    return;
  }
};
