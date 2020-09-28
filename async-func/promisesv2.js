function doubleAndSum(Double, Sum) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = Double * 2 + Sum;
      resolve(result);
    }, Math.floor(Math.random() * 2000) + 1);
  });
}

function printAll() {
  doubleAndSum(2, 6)
    .then((result) => {
      console.log(result);
      return doubleAndSum(5, result);
    })
    .then((result) => {
      console.log(result);
      return doubleAndSum(5, result);
    })
    .then((result) => console.log(result));
}

printAll();
