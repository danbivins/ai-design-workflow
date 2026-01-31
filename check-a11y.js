const fs = require("fs");
const { JSDOM } = require("jsdom");

// 1. Load HTML
const html = fs.readFileSync("04-output/index.html", "utf8");

// 2. Create JSDOM instance
const dom = new JSDOM(html, {
  runScripts: "outside-only"
});

// 3. Explicitly expose globals axe needs
global.window = dom.window;
global.document = dom.window.document;
global.Node = dom.window.Node;
global.Element = dom.window.Element;

// 4. NOW load axe-core (important: after globals)
const axe = require("axe-core");

// 5. Run axe
axe.run(dom.window.document, (err, results) => {
  if (err) {
    console.error(err);
    return;
  }

  if (results.violations.length === 0) {
    console.log("✅ No accessibility issues found!");
  } else {
    console.log("❌ Accessibility issues found:");

    results.violations.forEach((violation, index) => {
      console.log(`\n${index + 1}. ${violation.help}`);
      console.log(violation.description);

      violation.nodes.forEach(node => {
        console.log("   → Affected HTML:", node.html);
        console.log("     Fix:", node.failureSummary);
      });
    });
  }
});
