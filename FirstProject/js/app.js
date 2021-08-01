"use strict"




/*let arr  = ["лендинг", " визитка", " блог"],
    arr1 = ["минимализм", " индивидуальный", " мой"], 
    arr2 = ["да", " нет"]
*/
let mas  = [100, 150, 200],
    mas1  = [100, 250, 50],
    mas2  = [200, 0]

let sum = {
    typeS : prompt ("Здравствуйте, какой тип сайта Вам интересен?", "лендинг(100$), визитка(150$), блог(200$)"),
    des   : prompt("Какой дизайн Вам лучше подойдёт?", "минимализм(100$), индивидуальный(250$), мой(50$)"),
    verst : prompt("Необходима адаптивная вёрстка?", "да(200$), нет(0$)"),
    sum1  : mas[0] + mas1[0] + mas2[0],
    sum2  : mas[1] + mas1[0] + mas2[0],
    sum3  : mas[2] + mas1[0] + mas2[0],
    sum4  : mas[0] + mas1[1] + mas2[0],
    sum5  : mas[1] + mas1[1] + mas2[0],
    sum6  : mas[2] + mas1[1] + mas2[0],
    sum7  : mas[0] + mas1[2] + mas2[0],
    sum8  : mas[1] + mas1[2] + mas2[0],
    sum9  : mas[2] + mas1[2] + mas2[0],
    sum10 : mas[0] + mas1[0],
    sum20 : mas[1] + mas1[0],
    sum30 : mas[2] + mas1[0],
    sum40 : mas[0] + mas1[1],
    sum50 : mas[1] + mas1[1],
    sum60 : mas[2] + mas1[1],
    sum70 : mas[0] + mas1[2],
    sum80 : mas[1] + mas1[2],
    sum90 : mas[2] + mas1[2],
}

if (sum.typeS === "лендинг" && sum.des=="минимализм" && sum.verst === "да") {
    alert(sum.sum1 + "$")
} else if (sum.typeS === "визитка" && sum.des=="минимализм" && sum.verst === "да") {
    alert(sum.sum2 + "$")
} else if (sum.typeS === "блог" && sum.des=="минимализм" && sum.verst === "да") {
    alert(sum.sum3 + "$")
} else if (sum.typeS === "лендинг" && sum.des=="индивидуальный" && sum.verst === "да") {
    alert(sum.sum4 + "$")
} else if (sum.typeS === "визитка" && sum.des=="индивидуальный" && sum.verst === "да") {
    alert(sum.sum5 + "$")
} else if (sum.typeS === "блог" && sum.des=="индивидуальный" && sum.verst === "да") {
    alert(sum.sum6 + "$")
} else if (sum.typeS === "лендинг" && sum.des=="мой" && sum.verst === "да") {
    alert(sum.sum7 + "$")
} else if (sum.typeS === "взитка" && sum.des=="мой" && sum.verst === "да") {
    alert(sum.sum8 + "$")
} else if (sum.typeS === "блог" && sum.des=="мой" && sum.verst === "да") {
    alert(sum.sum9 + "$")
} else if (sum.typeS === "лендинг" && sum.des=="минимализм" && sum.verst === "нет") {
    alert(sum.sum10 + "$")
} else if (sum.typeS === "визитка" && sum.des=="минимализм" && sum.verst === "нет") {
    alert(sum.sum20 + "$")
} else if (sum.typeS === "блог" && sum.des=="минимализм" && sum.verst === "нет") {
    alert(sum.sum30 + "$")
} else if (sum.typeS === "лендинг" && sum.des=="индивидуальный" && sum.verst === "нет") {
    alert(sum.sum40 + "$")
} else if (sum.typeS === "визитка" && sum.des=="индивидуальный" && sum.verst === "нет") {
    alert(sum.sum50 + "$")
} else if (sum.typeS === "блог" && sum.des=="индивидуальный" && sum.verst === "нет") {
    alert(sum.sum60 + "$")
} else if (sum.typeS === "лендинг" && sum.des=="мой" && sum.verst === "нет") {
    alert(sum.sum70 + "$")
} else if (sum.typeS === "визитка" && sum.des=="мой" && sum.verst === "нет") {
    alert(sum.sum80 + "$")
} else if (sum.typeS === "блог" && sum.des=="мой" && sum.verst === "нет") {
    alert(sum.sum90 + "$")
} else {
    alert("Неккоректный запрос! Обновите страницу и пожалуйста повторите.")
}






/*тип сайта
дизайн
верстка*/
 /* движок калькулятора цены, объект чтобы считалось само и выдавало цену*/