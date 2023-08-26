import 'dart:io';
void main() {
  print('Digite sua idade:');
  int idade = int.parse(stdin.readLineSync()!);
  print('Sua idade é $idade');
}