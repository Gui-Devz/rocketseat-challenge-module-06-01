let promise = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve();
  }, Math.floor(Math.random() * 100) + 1);
});

function printDouble(number) {
  console.log(number * 2);
}

function printAll() {
  promise
    .then(printDouble(5))
    .then(printDouble(22))
    .then(printDouble(1))
    .then(printDouble(90));
}

printAll();
