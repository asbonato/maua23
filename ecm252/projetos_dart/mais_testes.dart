import 'dart:io';

void main() {
  //exibe o texto e pula uma linha
  stdout.writeln('Digite o seu nome: ');
  //lê o que o usuário digitou
  //devolve uma string
  var nome = stdin.readLineSync();
  //exibe o texto sem pular linha
  stdout.write('Olá, $nome!');

  print(' Digite sua idade:');
  String? entrada = stdin.readLineSync();

  if (entrada != null) {
    int idade = int.parse(entrada);
    print('Você tem $idade anos.');
  }
}
