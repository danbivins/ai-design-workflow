const fs = require("fs");
const { JSDOM } = require("jsdom");
const axe = require("axe-core");

const html = fs.readFileSync("04-output/index.html", "utf8");
const dom = new JSDOM(html);

global.window = dom.window;
global.document = dom.window.document;

axe.run(document, {}, (err, results) => {
  if (err) throw err;

  if (results.violations.length === 0) {
    console.log("✅ No accessibility issues found!");
  } else {
    console.log("❌ Accessibility issues:");
    results.violations.forEach((v, i) => {
      console.log(`\n${i + 1}. ${v.description}`);
      v.nodes.forEach(node => {
        console.log("   →", node.html);
        console.log("     Fix:", node.failureSummary);
      });
    });
  }
});
