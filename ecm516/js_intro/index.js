// // // //declarando constantes
// // // const nome = 'José';
// // // const idade = 27, outra_idade = 10;
// // // //aspas simples e duplas tem o mesmo efeito
// // // const sexo = "M";
// // // const endereco = 'Rua K, 12';
// // // console.log(nome, idade, outra_idade, sexo, endereco);  

// // // //declarando variáveis

// // // //let: variável local, escopo de bloco
// // // let a = 2;
// // // let b = 'abc';
// // // console.log(a, b);
// // // b = 20;
// // // console.log(a, b);
// // // b = 20;

// // // /*var: variável global ou com escopo dentro da 
// // // função onde foi criada*/
// // // var c = 2 + 3
// // // var d = "abcd"
// // // console.log(c, d)

// // // console.log('antes da chave', x, a)

// // // if (a > 1){
// // //     var x = 0
// // //     a = 10
// // //     console.log('dentro da chave', x, a)
// // // }
// // // console.log('fora da chave', x, a)

// // var linguagem = 'Javascript'
// // console.log('Aprendendo '+linguagem)
// // //pode ser redeclarada
// // var linguagem = 'Java'
// // console.log('Aprendendo '+linguagem)

// // var idade = 18;

// // console.log(`Oi, ${nome}, tudo bem?`)

// // if (idade >= 18) {
// //     var nome = 'Joao'
// //     console.log(`Parabéns, ${nome}. Você pode dirigir`)
// // }
// // console.log(`Até mais, ${nome}.`)

// const n1 = 2
// const n2 = '3'
// //coerção implícita de n1, acontece concatenação
// const n3 = n1 + n2
// console.log(n3)
//  //coerção explícita, soma acontece
//  const n4 = n1 + Number(n2)
//  console.log(n4)

console.log(1 == 1) //true
console.log(1 == "1") //true
console.log(1 === 1) //true
console.log(1 === "1") //false

console.log(true == 1) //true
console.log(true == 2) //false
console.log(true == -1) //false
console.log(false == 0) //true

console.log(1 == [1]) // true
console.log(null == null) //true
console.log(null == undefined)//true
console.log([] == false) //true
console.log([] == []) // false
