class Contato {
  String _nome;
  String _numero;

  Contato(this._nome, this._numero);

  String get nome => _nome;
  String get numero => _numero;

  set nome(String nome) => _nome = nome;
  set numero(String numero) => _numero = numero;
}