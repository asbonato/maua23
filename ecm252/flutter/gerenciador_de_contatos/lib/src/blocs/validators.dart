import 'dart:async';
mixin Validators {
  static final regExpNome = RegExp('[A-Z][a-z]{2,} [A-Za-z]+');
  static final regExpNumero = RegExp('^\\([0-9]{2}\\)[0-9]{5}-[0-9]{4}\$');

  final validarNome = StreamTransformer<String, String>.fromHandlers(handleData: (nome, sink){
    if(regExpNome.allMatches(nome).length == 1){
      sink.add(nome);
    } else {
      sink.addError('Nome deve começar com letra maiúscula, ter pelo menos 3 letras e um sobrenome.');
    }
  });

  final validarNumero = StreamTransformer<String, String>.fromHandlers(handleData: (numero, sink){
    if(regExpNumero.allMatches(numero).length == 1){
      sink.add(numero);
    } else {
      sink.addError('Número deve estar no formato (xx)xxxxx-xxxx');
    }
  });
}