const input = document.querySelector("input");
let valueOfInput;

input.addEventListener("keydown", () => {
  setTimeout(() => {
    input.value = input.value.replace(/\D/g, "");

    if (input.value.length <= 11) {
      input.value = input.value.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
      input.value = input.value.replace(/(\d{3})(\d)/, "$1.$2"); //Coloca um ponto entre o terceiro e o quarto dígitos
      //de novo (para o segundo bloco de números)
      input.value = input.value.replace(/(\d{3})(\d{2})$/, "$1-$2"); //Coloca um hífen entre o terceiro e o quarto dígitos
    } else {
      console.log("CPF invalido");
      input.value = input.value.slice(0, 11);

      input.value = input.value.replace(/(\d{3})(\d)/, "$1.$2");
      input.value = input.value.replace(/(\d{3})(\d)/, "$1.$2");
      input.value = input.value.replace(/(\d{3})(\d{2})$/, "$1-$2");
    }
  }, 10);
});
