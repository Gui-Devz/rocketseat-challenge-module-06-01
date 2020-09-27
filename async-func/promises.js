function printDouble(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(console.log(number * 2));
    }, Math.floor(Math.random() * 2000) + 1);
  });
}

function printAll() {
  printDouble(5)
    .then(() => printDouble(10))
    .then(() => printDouble(22))
    .then(() => printDouble(1))
    .then(() => printDouble(89));
}

printAll();
