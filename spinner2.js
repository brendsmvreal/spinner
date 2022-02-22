// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r\|   ');
// }, 800);

// setTimeout(() => {
//   process.stdout.write('\r\/   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r\-  ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 1000);

let time = 100;
let spins = ['\r|   ', '\r/   ','\r-   ', '\r\\   ','\r\|   ','\r\/   ','\r\-  ','\r\\  '];

for (const spin of spins) {
  time += 200;
  setTimeout(() => {
    process.stdout.write(spin);
  }, time)
};
setTimeout(() => {
  console.log("");
}, time + 100);