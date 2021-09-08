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
        figure.add(Square.random());
      }
      if (choice == 3) {
        figure.add(Radio.random());
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
  var x;
  var r;

  dynamic area();
}

//Квадрат со сторонами для ввода и с рандомным вводом сторон
class Square extends Area {
  Square() {
    x = double.parse(stdin.readLineSync()!);
    type = 'Квадрат ';
    print(type);
    print('${area()} см^2');
  }
  Square.random() {
    x = Random.secure().nextDouble();
    type = 'Квадрат(рандом) ';
    print(type);
    print('${area()} см^2');
  }

  @override
  dynamic area() {
    return x * x;
  }
}

//круг с радиусом для ввода и рандомным радиусом
class Radio extends Area {
  Radio() {
    r = double.parse(stdin.readLineSync()!);
    type = 'Круг ';
    print(type);
    print('${area()} см^2');
  }

  Radio.random() {
    r = Random.secure().nextDouble();
    type = 'Круг(рандом) ';
    print(type);
    print('${area()} см^2');
  }

  @override
  dynamic area() {
    return r * r * 3.14;
  }
}
