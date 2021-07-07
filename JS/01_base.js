// 1 Переменные
//const x = 'Max'
//let y = 23

//2 Мутирование
//console.log('Имя человека: ' + lastName + ' Возраст:' + age)
//alert('Имя человека: ' + lastName + ' Возраст:' + age)

//const firstName = prompt('Введите имя')
//alert(lastName + ' ' + firstName)

//3 Операторы
// + - / *

//4 Типы данных(проверка типа данных через в КЛ typeof)
//const isProgrammer = true
//console.log(typeof isProgrammer)
//сами типы как и в других языках

//5 Приориет операторов('mdn приоритет операторов' в интнрнете запрос)
//const fullAge = 23
//const birthYear = 1998
//const currentYear = 2021

// > < >= <=
//const isFullAge = currentYear - birthYear >= fullAge
//console.log(isFullAge)

// 6 Условные операторы
//const courseStatus = 'fail'  // ready, pending, fail

//if (courseStatus === 'ready'){
//    console.log('Курс уже готов его можно проходить')
//}else if (courseStatus === 'pending'){
//    console.log('Курс пока находится в процессе разработки')
//}else {
//    console.log('Курс не получился')
//}

//const isReady = true
//1 ВАРИАНТ
// if(isReady) {
//    console.log('Всё готово!')
//}else {
//   console.log('Всё не готово!')
//}
//2 ВАРИАНТ Тернарное выражение, для простых условий применяется
//isReady ? console.log('Всё готово!') : console.log('Всё не готово!')


//const num1 = 42
//const mum2 = '42'

//console.log(num1 === num2)// == сравнивает значения, === сравнивает значения и типы данных приоритетно использовать=== в JS

// 7 Булевая логика (на Mdn логические операторы)

// 8 Функции

//function calculateAge(year) {
//     return 2020 - year
// }

//const myAge = calculateAge (1998)
//console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)
//     if(age > 0){
//         console.log('Человек по имени ' + name + ' имеет возраст ' + age) 
//     }else{
//         console.log('Вообще-то это будущее!')
//     }
// }

// logInfoAbout('Максим', 1998)
// logInfoAbout('Серёга', 1968)
// logInfoAbout('Victor', 2022)

// 9 Массивы
//ВАРИАНТ 1
// const cars = ['Mazda', 'Mersedes', 'Ford']
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])

// cars[0] = 'Porsche'
// cars[3] = 'Mazda'
// console.log(cars)



//ВАРИАНТ 2
// const cars = new Array('Mazda', 'Mersedes', 'Ford')
// console.log(cars)

// 10 Циклы
// const cars = ['Mazda', 'Mersedes', 'Ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
// const person = {
//     firstName: 'Maxim',
//     lastName: 'Zaytsev',
//     year: 1998,
//     languages: ['Ru', 'Eng', 'Jap'],
//     hasWife: false,
//     greet: function() {
//         console.log('greet from person')
//     }
// }

// console.log(person.firstName)
// person.greet()
// const key = 'year'
// console.log(person[key])
// person.isProgrammer = true
// person.hasWife = true
// console.log(person)




