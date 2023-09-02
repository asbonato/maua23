void main(List<String> arguments) {
  var pessoa = <String, dynamic>{'nome': 'Pedro', 'idade': 22};

  // var chaves = pessoa.keys;
  // print(chaves.runtimeType);

  // for (final propriedade in chaves) {
  //   print(propriedade);
  //   print(pessoa[propriedade]);
  // }
  // var valores = pessoa.values;
  // for (final valor in valores) {
  //   print(valor);
  // }
  var entries = pessoa.entries;
  print(entries.runtimeType);
  for(final entry in pessoa.entries){
    print(entry);
    print(entry.key);
    print(entry.value);
  }
}
