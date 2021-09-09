import 'dart:io';

import 'dart:math';

void main(List<String> arguments) {
  Input();
}

class Input {
  List<Area> figure = [];
  double summa = 0;
  var f = '';

  Input() {
    print('Введите  необходимое количество фигур');
    var iter = int.parse(stdin.readLineSync()!);

    for (var i = 0; i < iter; i++) {
      print(
          'Введите число для получения нужной фигуры: 0 - квадрат, 1 - круг, 2 - квадрат(рандом), 3 - круг(рандом).');
      var choice = int.parse(stdin.readLineSync()!);
      if (choice == 0) {
        figure.add(Square(int.parse(stdin.readLineSync()!)));
      }
      if (choice == 1) {
        figure.add(Radio(int.parse(stdin.readLineSync()!)));
      }
      if (choice == 2) {
        figure.add(Square(Random.secure().nextDouble()));
      }
      if (choice == 3) {
        figure.add(Radio(Random.secure().nextDouble()));
      }
    }
    //сортировка фигур по площади
    figure.sort((a, b) => a.area().compareTo(b.area()));
    for (var i = 0; i < figure.length; i++) {
      f = f + figure[i].type;
    }
    print('Сортировка фигур - $f');
    //сумма площадей фигур
    for (var i = 0; i < figure.length; i++) {
      summa = summa + figure[i].area();
    }
    print('Общая площадь фигур - $summa');
  }
}

//абстрактный класс площадь фигур
abstract class Area {
  List<String> figure = [];
  var type = '';

  dynamic area();
}

//Квадрат
class Square extends Area {
  final x;
  Square(this.x) {
    type = 'Квадрат ';
  }

  @override
  dynamic area() {
    return x * x;
  }
}

//круг
class Radio extends Area {
  final r;
  Radio(this.r) {
    type = 'Круг ';
  }

  @override
  dynamic area() {
    return r * r * 3.14;
  }
}
