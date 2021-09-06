import 'dart:io';

void main(List<String> arguments) {
  print('введите значение...');
  input();
}

class input {
  List<double> suma = <double>[];
  double z = 0;

  input() {
    var iter = int.parse(stdin.readLineSync()!);
    var choice = int.parse(stdin.readLineSync()!);

    for (var i = 0; i < iter; i++) {
      if (choice == 0) {
        suma.add(Square().S);
      }
    }
    for (var i = 0; i < iter; i++) {
      if (choice == 1) {
        suma.add(Radio().S);
      }
    }

    for (var i = 0; i < suma.length; i++) {
      z = z + suma[i];
    }
    print('$z  общая площадь фигур');
    input();
  }
}

class Square {
  var S;
  var val;
  var vas;

  Square() {
    val = double.parse(stdin.readLineSync()!);
    vas = double.parse(stdin.readLineSync()!);
    S = val * vas;
    print('$S см^2');
  }
}

class Radio {
  var rad;
  var S;

  Radio() {
    rad = double.parse(stdin.readLineSync()!);
    S = rad * rad * 3.14;
    print('$S см^2');
  }
}
