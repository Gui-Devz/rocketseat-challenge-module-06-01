function doubleAndSum(Double, Sum) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      let result = Double * 2 + Sum;
      resolve(result);
    }, Math.floor(Math.random() * 2000) + 1);
  });
}

async function printAll() {
  let result = 0;

  result = await doubleAndSum(2, 6);
  console.log(result);
  result = await doubleAndSum(5, result);
  console.log(result);
  result = await doubleAndSum(5, result);
  console.log(result);
}

printAll();
