const typewriter = (str) => {
  str += '\n';

  let delay = 0;
  let delayIncr = 150;

  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char)
    }, delay);
    delay += Math.random() * delayIncr;
    // delay += delayIncr;
  };
};


typewriter("hello there from lighthouse labs");




