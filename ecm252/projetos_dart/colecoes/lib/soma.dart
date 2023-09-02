void soma(List<String> arguments) {
  var soma = 0;
  for (final valor in arguments) {
    soma += int.parse(valor);
  }
  print(soma);
}
