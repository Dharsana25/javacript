let count = 0;

let intervalId = setInterval(() => {
  count++;
  console.log("Running", count);

  if (count === 5) {
    clearInterval(intervalId);  // stop after 5 runs
  }
}, 1000);
