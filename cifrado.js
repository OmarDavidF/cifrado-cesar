function rot13(str) {

  let cifrado = "";

  for (let a = 0; a < str.length; a++){

    let numeroCodigo = str[a].charCodeAt();

    if (numeroCodigo >= 65 && numeroCodigo <= 77){
      cifrado = cifrado + String.fromCharCode(numeroCodigo + 13);
    }else if (numeroCodigo >= 78 && numeroCodigo <= 90){
      cifrado = cifrado + String.fromCharCode(numeroCodigo - 13);
    }else{
      cifrado = cifrado + str[a];
    }

  }

  return cifrado;
  
}

console.log(rot13("SERR YBIR?"));
