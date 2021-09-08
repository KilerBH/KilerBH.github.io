import 'dart:io';

void main(List<String> arguments) {
  print('введите значение...');
  input();
}

class input {
  List<Area> fig = [];
  double z = 0;

  input() {
    var iter = int.parse(stdin.readLineSync()!);

    for (var i = 0; i < iter; i++) {
      var choice = int.parse(stdin.readLineSync()!);
      if (choice == 0) {
        fig.add(Square());
      }
      if (choice == 1) {
        fig.add(Radio());
      }
    }
    fig.sort((a, b) => a.area().compareTo(b.area()));
    print(fig);

    for (var i = 0; i < fig.length; i++) {
      z = z + fig[i].area();
    }
    print('$z  общая площадь фигур');
    input();
  }
}

abstract class Area {
  List<String> fig = [];

  dynamic area();
}

class Square extends Area {
  var x;
  var y;

  Square() {
    x = double.parse(stdin.readLineSync()!);
    y = double.parse(stdin.readLineSync()!);
    print('${area()} см^2');
    area();
  }

  @override
  dynamic area() {
    return x * y;
  }
}

class Radio extends Area {
  var rad;

  Radio() {
    rad = double.parse(stdin.readLineSync()!);
    print('${area()} см^2');
    area();
  }

  @override
  dynamic area() {
    return rad * rad * 3.14;
  }
}
