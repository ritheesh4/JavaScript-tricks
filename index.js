// 1. Ternary operator
const age = 10;

age > 50
  ? age > 70
    ? console.log("You are getting really old")
    : console.log("You are between 30 and 59")
  : console.log("You are below 30");

// 2. Require function parameters

const isRequired = () => {
  throw new Error("param is required");
};

const hello = (name = isRequired()) => {
  console.log(`hello ${name}`);
};

// This will throw an error because no name is provided
hello();

// This will also throw an error
hello(undefined);

// These are good!
hello(null);
hello("David");
