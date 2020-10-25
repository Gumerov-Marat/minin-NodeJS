const path = require('path')


/* 
это обьект обычный
у него есть функция бейзнейм (забирает названи ефайла из абсолютного пути  )
и в парметры вводим файлнейм
*/
console.log(path.basename(__filename));
console.log(path.dirname(__filename)); // из абсолютного пути взяли название папки
console.log(path.extname(__filename));// расширение файла

console.log(path.parse(__filename)); // метод оборачивает в обьект
console.log(path.parse(__filename).ext) // метод оборачивает в обьект  получили расширение

console.log(path.join(__dirname, 'test', 'second.html'));  // соединяет строки в путь 
// в данном случае мы путь до папки соеденили с папкой тест и файлом секонд.хтмл

console.log(path.resolve(__dirname, './test', './second.html')); // позволяет делать корректный путь