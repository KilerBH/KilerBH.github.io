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
          'Введите число для получения нужной фигуры: 0 - прямоугольник, 1 - круг, 2 - квадрат(рандом), 3 - круг(рандом).');
      var choice = int.parse(stdin.readLineSync()!);
      if (choice == 0) {
        figure.add(Square());
      }
      if (choice == 1) {
        figure.add(Radio());
      }
      if (choice == 2) {
        figure.add(Quad());
      }
      if (choice == 3) {
        figure.add(Krug());
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
    Input();
  }
}

//абстрактный класс площадь фигур
abstract class Area {
  List<String> figure = [];
  var type = '';
  var x;
  var y;
  var r;

  dynamic area();
}

//прямоугольник со сторонами для ввода
class Square extends Area {
  Square() {
    x = double.parse(stdin.readLineSync()!);
    y = double.parse(stdin.readLineSync()!);
    type = 'Прямоугольник ';
    print(type);
    print('${area()} см^2');
  }

  @override
  dynamic area() {
    return x * y;
  }
}

//круг с радиусом для ввода
class Radio extends Area {
  Radio() {
    r = double.parse(stdin.readLineSync()!);
    type = 'Круг ';
    print(type);
    print('${area()} см^2');
  }

  @override
  dynamic area() {
    return r * r * 3.14;
  }
}

//квадрат с рандомными сторонами
class Quad extends Area {
  Quad() {
    x = Random.secure().nextDouble();
    type = 'Квадрат ';
    print(type);
    print('${area()} см^2');
  }

  @override
  dynamic area() {
    return x * x;
  }
}

//круг с рандомным радиусом
class Krug extends Area {
  Krug() {
    r = Random.secure().nextDouble();
    type = 'Круг1 ';
    print(type);
    print('${area()} см^2');
  }

  @override
  dynamic area() {
    return r * r * 3.14;
  }
}
