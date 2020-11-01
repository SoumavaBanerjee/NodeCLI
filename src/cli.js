import arg from "arg";

function parseArguments(rawArgs) {
  const args = arg(
    {
      "--git": Boolean,
      "--yes": Boolean,
      "--install": Boolean,
      "-g": "--git",
      "-y": "--yes",
      "-i": "--install",
    },
    {
      argv: rawArgs.slice(2),
    }
  );
  return {
    skipPromts: args["--yes"] || false,
    git: args["--git"] || false,
    template: args._[0],
    install: args["--install"] || false,
  };
}

export function cli(args) {
  console.log(args);
}
