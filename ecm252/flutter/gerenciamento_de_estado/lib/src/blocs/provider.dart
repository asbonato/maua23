import 'package:flutter/material.dart';
import 'bloc.dart';

class Provider extends InheritedWidget {

  Provider({Key? key, required Widget child}): super(key: key, child: child);

  final bloc = Bloc();

  @override
  bool updateShouldNotify(covariant InheritedWidget oldWidget) => true;

  static Bloc of (BuildContext context) {
    //o operador ! garante que a expressão que o antecede
    //é diferente de null; podemos acessar a propriedade
    //de bloc sem casting, pois a classe é genérica
    return context.dependOnInheritedWidgetOfExactType<Provider>()!.bloc;
  }
}