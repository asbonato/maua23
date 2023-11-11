import 'dart:async';
import 'package:cherry_toast/cherry_toast.dart';
import 'package:flutter/material.dart';
import 'package:rxdart/rxdart.dart';
import 'package:gerenciamento_de_estado/src/blocs/validators.dart';

class Bloc with Validators{
  //StreamController vem do pacote dart:async
  final _emailController = BehaviorSubject <String> ();
  final _passwordController = BehaviorSubject <String> ();

  Stream<String> get email => 
    _emailController.stream.transform(validateEmail);
  Stream<String> get password => 
    _passwordController.stream.transform(validatePassword);
  Stream<bool> get emailPasswordAreOk => 
     CombineLatestStream.combine2(email, password, (e, p) => true);

  Function(String) get changeEmail => _emailController.sink.add;
  Function(String) get changePassword => _passwordController.sink.add;

  void dispose() {
    _emailController.close();
    _passwordController.close();
  }

  void submitForm(BuildContext context) {
    final email = _emailController.value;
    final password = _passwordController.value;
    //print('$email, $password');
    CherryToast.success(
      title: Text('$email, $password'),
      ).show(context);
  }
}

// esta é a instância global e ela não será mais usada,
// pode apagar ou comentar
//final bloc = Bloc();