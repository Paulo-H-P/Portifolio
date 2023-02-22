function calcMeta() {
  let peso = document.getElementById('peso');
  let altura = document.getElementById('altura');
  let idade = document.getElementById('idade');
  let res = document.getElementById('res');

  if (
    peso.value.length == 0 ||
    altura.value.length == 0 ||
    idade.value.length == 0
  ) {
    window.alert('[ERRO] Preencha os dados corretamente');
  } else {
    let sexo = document.getElementsByName('checkSex');
    let genero = '';
    let p = Number(peso.value);
    let a = Number(altura.value);
    let i = Number(idade.value);

    if (sexo[0].checked) {
      genero = 'Homem';
      resultado = 66 + 13.7 * p + 5 * a - 6.8 * i;
    } else if (sexo[1].checked) {
      genero = 'Mulher';
      resultado = 655 + 9.6 * p + 1.1 * a - 4.7 * i;
    }

    res.innerHTML += `Género:${genero}<br>  peso:${p}  <br> Altura:${a} <br>  idade:${i}<br>`;
    res.innerHTML += `Seu Metabolismo Basal é: ${resultado.toFixed(2)}`;
  }
}
