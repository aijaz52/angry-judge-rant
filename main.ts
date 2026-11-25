const { readFileSync } = require("node:fs");
const { join } = require("node:path");

try {
  const rantPath = join(__dirname, "rant.txt");
  process.stdout.write(readFileSync(rantPath, "utf8"));
} catch (error) {
  console.error("Failed to read rant.txt:", error);
  process.exitCode = 1;
}
