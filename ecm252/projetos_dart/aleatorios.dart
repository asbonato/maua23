import 'dart:math';

void main() {
  var gerador = Random();
  //inteiro aleatório entre 0 e 5
  var n1 = gerador.nextInt(6);
  print(n1);

  //inteiro aleatório entre 1 e 10
  var n2 = gerador.nextInt(10) + 1;
  print(n2);

  //inteiro aleatório entre 0 e 100
  var n3 = gerador.nextInt(101);
  print(n3);

  //real aleatório entre 0 e 1 [0,1)
  var n4 = gerador.nextDouble();
  print(n4);

  //real aleatório entre 0 e 100 [0, 100)
  var n5 = gerador.nextDouble() * 100;
  print(n5);

  //real entre 100 e 150 [100, 150)
  var n6 = gerador.nextDouble() * 50 + 100;
  print(n6);

  //booleano aleatório
  var n7 = gerador.nextBool();
  print(n7);
}