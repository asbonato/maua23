import 'package:flutter/material.dart';

class ImageModel {
  late String url;
  late String alt;

  ImageModel(this.url, this.alt);

  ImageModel.fromJSON(Map <String, dynamic> decodedJSON) {
    url = decodedJSON['photos'][0]['src']['medium'];
    alt = decodedJSON['photos'][0]['alt'];
  }

  @override
  String toString() {
    return 'url:$url, alt:$alt';
  }

}