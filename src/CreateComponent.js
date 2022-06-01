const yargs = require("yargs");
const fs = require("fs/promises");
const path = require("path");

const argv = yargs.command(
  ["create <filename>"],
  "Create empty React Component",
  {},
  (argv) => {
    const contentComponent = `
    import * as React from "react;

    function MyComponent(props) {

      return <div> </div>;
    }
    export default MyComponent;`;

    const filepath = path.resolve(argv.filename + ".tsx");

    fs.writeFile(filepath, contentComponent)
      .then(() => console.log("MyComponent has been created"))
      .catch((e) => console.error("An error has occured:", e));
  }
).argv;
