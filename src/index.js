/* ДЗ 2 - работа с массивами и объектами */

/*
 Задание 1:

 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 */

function forEach(array, fn) {
  for (let index = 0; index < array.length; index++) {
    fn(array[index], index, array);
  }
}

/*
 Задание 2:

 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 */
function map(array, fn) {
  let newArray = [];

  for (let index = 0; index < array.length; index++) {
    newArray[index] = fn(array[index], index, array);
  }

  return newArray;
}

/*
 Задание 3:

 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 */

function reduce(array, fn, initial) {
  let result = initial || array[0];

    for (let i = initial ? 0 : 1; i < array.length; i++) {
      result = fn(result, array[i], i, array);
    }

  return result;
}

/*
 Задание 4:

 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива

 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  let arr = Object.keys(obj);
  let newArr = [];

  for (let letter of arr) {
      newArr.push(letter.toUpperCase());
  }

  return newArr;
}

/*
 Задание 5 *:

 Напишите аналог встроенного метода slice для работы с массивами
 Посмотрите как работает slice и повторите это поведение для массива, который будет передан в параметре array
 */

/* function slice(array, from, to) {
  let newArray = [];
  let temp = [];

  for (let i = from; i < array[to]; i++) {
    newArray[i] = array[i];
  }

  for(let i of newArray) {
      i && temp.push(i); 
  }

  return temp;
} */

function slice(array, from, to) {
  var newArray = [];

  if (typeof from === 'undefined' || from === null) {
      from = 0;
  }
  if (typeof to === 'undefined' || to === null) {
      to = array.length;
  }
  if (from < 0) {
      from = array.length + from;
      if (from < 0) {
          from = 0;
      }
  }
  if (to < 0) {
      to = array.length + to;
      if (to < 0) {
          return [];
      }
  }
  if (to > array.length) {
    to = array.length;
  }

  for (var i = from; i < to; i++) {
      newArray.push(array[i]);
  }

  return newArray;
}
 
/*
 Задание 6 *:

 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 */
function createProxy(obj) {}

export {
  forEach,
  map,
  reduce,
  upperProps,
  slice,
  createProxy
};