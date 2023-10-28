class Pessoa {
  //_ como prefixo significa private
  String _nome;
  int _idade;

  //construtor
  Pessoa(this._nome, this._idade);

  //arrow function
  String get nome => _nome;
  //arrow function
  set nome(String value) => _nome = value;
  //também pode ser com função comum
  //sem lista de parâmetros mesmo
  int get idade {return _idade;}
  //também daria para fazer "getIdade", mas ficaria
  //estranho, já que o acesso é feito como se fosse
  //uma propriedade
  //int get getIdade {return _idade;}
  set idade(int value) {_idade = value;}
}

//a função main está fora da classe - em Dart pode
void main() {
  var pessoa = Pessoa('João', 25);
  print(pessoa.nome);
  print(pessoa.idade);
  pessoa.nome = 'Maria';
  pessoa.idade = 21;
  print(pessoa.nome);
  print(pessoa.idade);
}