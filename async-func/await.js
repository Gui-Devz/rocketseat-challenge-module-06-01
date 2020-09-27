function printDouble(number) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(console.log(number * 2));
    }, Math.floor(Math.random() * 2000) + 1);
  });
}

async function printAll() {
  await printDouble(5);
  await printDouble(10);
  await printDouble(22);
  await printDouble(1);
  await printDouble(89);
}

printAll();
