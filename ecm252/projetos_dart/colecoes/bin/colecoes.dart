import 'dart:io';
void main(List<String> arguments) {
// // //   // // //coleções de coleções
// // //   // // var filmes = <Map<String, dynamic>>[];
// // //   // // print(filmes.runtimeType);

// // //   // // print('Titulo?');
// // //   // // String? titulo = stdin.readLineSync();
// // //   // // print('Gênero?');
// // //   // // String? genero = stdin.readLineSync();
// // //   // // var notas = [5, 5];
// // //   // // filmes.add({'titulo':titulo, 'genero':genero, 'notas':notas});
// // //   // // print(filmes);
// // //   // //
// // //   // // collection-if
// // //   // var idadePedro = 17;
// // //   // var idadeCristina = 19;
// // //   // var maioresDeIdade = [
// // //   //   'Ana', 
// // //   //   'João',
// // //   //   if (idadePedro >= 18) 'Pedro',
// // //   //   if (idadeCristina >= 18) 'Cristina'
// // //   // ];
// // //   // print(maioresDeIdade);
// // //   //
// // //   // collection-for
// // //   var nomes1 = ['Ana', 'Pedro'];
// // //   var nomes2 = [
// // //     'Cristina',
// // //     for (var nome in nomes1)
// // //       nome
// // //   ];
// // //   print(nomes2);
// // //
// // // operador spread
// //   var nomes1 = ['Ana', 'Pedro'];
// //   var nomes2 = [
// //     'Cristina',
// //     ...nomes1
// //   ];
// //   print(nomes2);
// var nomes = ['Ana', 'Pedro'];
// var copia = nomes;
// print(copia);
// nomes[0] = 'Maria';
// print(copia);
//
// cópia com collections-for e com spread
  var nomes = ['Ana', 'Pedro'];

  var copiaComCollectionFor = [
    for(var nome in nomes)
      nome
  ];
  var copiaComOperadorSpread = [
    ...nomes
  ];
  print(nomes);
  print(copiaComCollectionFor);
  print(copiaComOperadorSpread);
  nomes[0] = 'Maria';
  print(nomes);
  print(copiaComCollectionFor);
  print(copiaComOperadorSpread);
}
