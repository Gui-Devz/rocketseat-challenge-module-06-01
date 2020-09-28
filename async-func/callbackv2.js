function DoubleAndSum(Double, Sum, callback) {
  setTimeout(() => {
    let result = Double * 2 + Sum;
    callback(result);
  }, Math.floor(Math.random() * 2000) + 1);
}

function printAll() {
  DoubleAndSum(2, 6, (result) => {
    DoubleAndSum(5, result, (result) => console.log(result));
  });
}

printAll();
