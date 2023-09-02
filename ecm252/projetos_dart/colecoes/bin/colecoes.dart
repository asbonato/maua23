void main(List<String> arguments) {
  List<String> nomes = ['Ana', 'Pedro'];
  var qualquerCoisa = ['Ana', 1, 1.5, false];
  print(nomes.runtimeType);
  print(qualquerCoisa.runtimeType);
  List<int> idades = [17, 22];
  print(idades.runtimeType);
  List<bool> deMaior = [false, true];
  print(deMaior.runtimeType);

  var listas = [nomes, qualquerCoisa, idades, deMaior];
  print(listas.runtimeType);
  print(listas);
  for(final lista in listas.reversed){
    for(final elemento in lista){
      print(elemento);
    }
  }
  var soStrings = <String>['Ana', 'Pedro'];
  print(soStrings.runtimeType);
  print(qualquerCoisa.runtimeType);
}
