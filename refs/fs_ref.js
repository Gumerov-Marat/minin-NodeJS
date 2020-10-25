const fs = require('fs')
const path = require('path')
//File System


  // у таких функций первый парметр функций является ошибка
// fs.mkdir(path.join(__dirname, 'notes'),err => {
//   if (err) throw err

//   console.log('Папка была создана');
// })

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//   'hello world',
//   (err) => {
//     if (err) throw err
//     console.log('Файл был создан');
//   }
// )

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//   'hello world',
//   (err) => {
//     if (err) throw err
//     console.log('Файл был создан')

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' From append file',
//       err => {
//         if (err) throw err
//         console.log('Файл был изменен')
//       }
//     )

//   }
// )


// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   (err, data) => {
//     if (err) throw err
//     console.log(Buffer.from(data).toString());
//   }
// )

// fs.readFile(
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err
//     console.log(data);
//   }
// )



////////////////////////////

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'),
//   'hello world',
//   (err) => {
//     if (err) throw err
//     console.log('Файл был создан')

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'mynotes.txt'),
//       ' From append file',
//       err => {
//         if (err) throw err
//         console.log('Файл был изменен')

//         fs.readFile(
//           path.join(__dirname, 'notes', 'mynotes.txt'),
//           'utf-8',
//           (err, data) => {
//             if (err) throw err
//             console.log(data);
//           }
//         )

//       }
//     )

//   }
// )

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'notes.txt'),
  err => {
    if (err) throw err
    console.log("Файл переименован");
  }
)