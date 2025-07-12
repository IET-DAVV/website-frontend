if (process.env.CI !== "true") {
  const { execSync } = require("child_process");
  execSync("npx husky install", { stdio: "inherit" });
}
