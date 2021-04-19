if (process.env.NODE_ENV === "production") {
    module.exports = require("./dist/freePoster.min.js");
  } else {
    module.exports = require("./dist/freePoster.js");
  }
