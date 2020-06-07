/* eslint-disable import/no-extraneous-dependencies */
const Purgecss = require("purgecss").default;
const fs = require("fs");
const path = require("path");

// Custom PurgeCSS extractor for Tailwind that allows special characters in
// class names.
//
// https://github.com/FullHuman/purgecss#extractor
class TailwindExtractor {
  static extract(content) {
    // eslint-disable-next-line no-useless-escape
    return content.match(/[A-Za-z0-9-_:\/]+/g) || [];
  }
}

try {
  const result = new Purgecss().purge({
    content: ["./src/**/*.js", "./src/**/*.tsx", "./src/**/*.ts"],
    css: ["./src/assets/css/tailwind.css"],
    whitelist: ["pl-24", "pl-40", "pl-56", "pl-72", "pl-80"],
    extractors: [
      {
        extractor: new TailwindExtractor(),
        extensions: ["html", "js"],
      },
    ],
  });

  result.forEach((out) => {
    fs.writeFileSync(path.resolve(__dirname, out.file), out.css, "utf-8");
  });

  console.log("src/assets/css/tailwind.css successfully purged.");
} catch (e) {
  console.log(e);
}
